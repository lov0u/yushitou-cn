import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-stone/50 noise overflow-hidden">
      {/* 顶部霓虹线 */}
      <div className="neon-line" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-neon-jade/30 rotate-45" />
                <span className="text-neon-jade font-song text-base font-bold relative z-10">山</span>
              </div>
              <div>
                <div className="text-bone font-song text-xl font-bold tracking-widest">听山</div>
                <div className="text-fade font-mono text-[10px] tracking-[0.3em]">TIDGE</div>
              </div>
            </div>
            <p className="text-dust text-sm leading-relaxed max-w-md mb-6">
              以侘寂之心对话千年玉道，用当代设计语言重塑传统工艺。
              每一件作品，都是玉料与匠人的深度对话。
            </p>
            <div className="flex items-center gap-4">
              <span className="tag-cyber">JADE ART</span>
              <span className="tag-cyber">CRAFT</span>
              <span className="tag-cyber">DESIGN</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-fade font-mono text-xs tracking-[0.2em] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/works", label: "作品" },
                { href: "/craft", label: "工艺" },
                { href: "/jade", label: "玉石" },
                { href: "/custom", label: "定制" },
                { href: "/articles", label: "资讯" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-cyber text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-fade font-mono text-xs tracking-[0.2em] uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:lov0u@foxmail.com" className="link-cyber font-mono">
                  lov0u@foxmail.com
                </a>
              </li>
              <li className="text-dust">烟台</li>
              <li>
                <a href="mailto:lov0u@foxmail.com" className="link-cyber">
                  lov0u@foxmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-cyber my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-fade font-mono">
            © {new Date().getFullYear()} 听山 TIDGE · yushitou.cn
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fade hover:text-neon-jade transition-colors"
            >
              鲁ICP备2024081077号
            </a>
            <span className="text-stone">|</span>
            <span className="text-fade">技术支持：</span>
            <a
              href="https://ra0.cn/wangzhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fade hover:text-neon-jade transition-colors"
            >
              青衣网络
            </a>
            <span className="text-stone">|</span>
            <Link
              href="/sitemap.xml"
              className="text-fade hover:text-neon-jade transition-colors"
            >
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
