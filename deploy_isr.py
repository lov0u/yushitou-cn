#!/usr/bin/env python3
"""
yushhitou.cn ISR 模式部署脚本
将 Next.js 应用部署到 47.103.119.88，使用 PM2 管理，端口 3003
"""

import os
import paramiko
import time

SERVER_IP = "47.103.119.88"
SSH_USER = "root"
SSH_PASSWORD = "zhang_LEI758"

LOCAL_PROJECT_DIR = r"d:\claud code项目\wutou\yushhitou"
REMOTE_PROJECT_DIR = "/www/wwwroot/yushhitou-app"

UPLOAD_ITEMS = [
    ".next",
    "public",
    "package.json",
    "next.config.js",
    ".env.local",
]


def upload_directory(sftp, local_dir, remote_dir, skip_dirs=None):
    skip_dirs = skip_dirs or ["node_modules", ".git", "out", ".next/cache", ".next/types"]
    file_count = 0
    try:
        items = os.listdir(local_dir)
    except PermissionError:
        return 0
    for item in items:
        if item in skip_dirs:
            continue
        local_path = os.path.join(local_dir, item)
        remote_path = remote_dir + "/" + item

        try:
            if os.path.isdir(local_path):
                try:
                    sftp.mkdir(remote_path)
                except:
                    pass
                file_count += upload_directory(sftp, local_path, remote_path, skip_dirs)
            elif os.path.isfile(local_path):
                sftp.put(local_path, remote_path)
                file_count += 1
        except (PermissionError, FileNotFoundError, OSError) as e:
            print(f"    [skip] {local_path}: {e}")
            continue
    return file_count


def main():
    print("=" * 60)
    print("yushhitou.cn ISR 模式部署 (端口 3003)")
    print("=" * 60)

    print("\n[1/7] 连接服务器...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(SERVER_IP, username=SSH_USER, password=SSH_PASSWORD, timeout=30)
    print("  连接成功")

    stdin, stdout, stderr = ssh.exec_command("node --version")
    print(f"  Node.js: {stdout.read().decode().strip()}")

    print("\n[2/7] 创建项目目录...")
    ssh.exec_command(f"mkdir -p {REMOTE_PROJECT_DIR}")
    time.sleep(1)
    print(f"  目录: {REMOTE_PROJECT_DIR}")

    print("\n[3/7] 上传项目文件...")
    sftp = ssh.open_sftp()
    total_files = 0
    for item in UPLOAD_ITEMS:
        local_path = os.path.join(LOCAL_PROJECT_DIR, item)
        remote_path = f"{REMOTE_PROJECT_DIR}/{item}"
        if os.path.isdir(local_path):
            try:
                sftp.mkdir(remote_path)
            except:
                pass
            count = upload_directory(sftp, local_path, remote_path)
            total_files += count
            print(f"  {item}/: {count} 文件")
        elif os.path.isfile(local_path):
            sftp.put(local_path, remote_path)
            total_files += 1
            print(f"  {item}")
    sftp.close()
    print(f"  总计: {total_files} 文件")

    print("\n[4/7] 安装依赖...")
    stdin, stdout, stderr = ssh.exec_command(
        f"cd {REMOTE_PROJECT_DIR} && npm install --production 2>&1"
    )
    stdout.read()
    print("  依赖安装完成")

    print("\n[5/7] 停止旧进程...")
    ssh.exec_command("pm2 delete yushhitou 2>/dev/null; true")
    time.sleep(1)
    print("  旧进程已清理")

    print("\n[6/7] 启动 PM2 (端口 3003)...")
    start_cmd = f'cd {REMOTE_PROJECT_DIR} && pm2 start "next start -p 3003" --name yushhitou --cwd {REMOTE_PROJECT_DIR} 2>&1'
    stdin, stdout, stderr = ssh.exec_command(start_cmd)
    print(f"  {stdout.read().decode().strip()[:200]}")

    ssh.exec_command("pm2 save 2>&1")
    stdout.read()

    time.sleep(3)

    stdin, stdout, stderr = ssh.exec_command("pm2 status yushhitou 2>&1")
    print(f"  PM2 状态:\n{stdout.read().decode()[:300]}")

    print("\n[7/7] 配置 Nginx...")
    nginx_conf = """server
{
    listen 80;
    server_name yushhitou.cn www.yushhitou.cn;

    # Let's Encrypt 验证路径
    location ^~ /.well-known/acme-challenge/ {
        root /www/server/nginx/html;
        try_files $uri =404;
    }

    # HTTP -> HTTPS (先注释，等SSL申请后启用)
    # if ($server_port != 443) {
    #     return 301 https://$host$request_uri;
    # }

    # www -> 非 www
    if ($host = www.yushhitou.cn) {
        return 301 http://yushhitou.cn$request_uri;
    }

    # 反向代理到 Next.js
    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 30s;
        proxy_send_timeout 30s;
    }

    # gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_min_length 1000;
    gzip_comp_level 6;

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    access_log /www/wwwlogs/yushhitou.cn.log;
    error_log /www/wwwlogs/yushhitou.cn.error.log;
}
"""
    nginx_conf_path = "/www/server/panel/vhost/nginx/yushhitou.cn.conf"
    sftp = ssh.open_sftp()
    with sftp.file(nginx_conf_path, "w") as f:
        f.write(nginx_conf)
    sftp.close()

    stdin, stdout, stderr = ssh.exec_command("nginx -t 2>&1")
    result = stdout.read().decode()
    print(f"  Nginx 测试: {result.strip()}")

    if "successful" in result:
        ssh.exec_command("nginx -s reload 2>&1")
        print("  Nginx 重载成功")
    else:
        print("  ⚠ Nginx 配置测试失败！")

    # 验证
    print("\n" + "=" * 60)
    print("[验证] 访问测试...")
    time.sleep(2)

    tests = [
        ("本地3003端口", 'curl -s http://127.0.0.1:3003/ 2>&1 | grep -oP "<title>[^<]+" | head -1'),
        ("HTTP首页状态", 'curl -s -o /dev/null -w "%{http_code}" http://yushhitou.cn/ 2>&1'),
        ("HTTP作品页", 'curl -s -o /dev/null -w "%{http_code}" http://yushhitou.cn/works/ 2>&1'),
        ("HTTP工艺页", 'curl -s -o /dev/null -w "%{http_code}" http://yushhitou.cn/craft/ 2>&1'),
        ("robots.txt", 'curl -s http://yushhitou.cn/robots.txt 2>&1 | head -3'),
    ]

    for name, cmd in tests:
        stdin, stdout, stderr = ssh.exec_command(cmd)
        result = stdout.read().decode().strip()
        print(f"  {name}: {result}")

    ssh.close()

    print("\n" + "=" * 60)
    print("部署完成！")
    print(f"网站地址: http://yushhitou.cn")
    print(f"Next.js 运行在端口 3003，PM2 管理")
    print(f"SSL 需在宝塔面板申请后启用")
    print("=" * 60)


if __name__ == "__main__":
    main()
