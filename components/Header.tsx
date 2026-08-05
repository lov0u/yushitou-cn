"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "首页", labelEn: "Home" },
  { href: "/works", label: "作品", labelEn: "Works" },
  { href: "/craft", label: "工艺", labelEn: "Craft" },
  { href: "/jade", label: "玉石", labelEn: "Jade" },
  { href: "/custom", label: "定制", labelEn: "Custom" },
  { href: "/about", label: "关于", labelEn: "About" },
  { href: "/contact", label: "联系", labelEn: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-void/80 backdrop-blur-xl border-b border-stone/50"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-neon-jade/30 rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]" />
              <div className="absolute inset-1 border border-neon-jade/20 rotate-45" />
              <span className="text-neon-jade font-song text-sm font-bold relative z-10">山</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-bone font-song text-lg font-bold tracking-widest">听山</span>
              <span className="text-fade font-mono text-[9px] tracking-[0.3em] mt-0.5">TIDGE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 flex items-center gap-2"
              >
                <span className="text-fade font-mono text-[10px] group-hover:text-neon-jade transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-dust group-hover:text-bone transition-colors text-sm tracking-wider">
                  {link.label}
                </span>
                <span className="text-fade font-mono text-[9px] uppercase tracking-widest">
                  {link.labelEn}
                </span>
              </Link>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:lov0u@foxmail.com"
            className="hidden lg:flex items-center gap-2 text-dust hover:text-neon-jade transition-colors group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-mono text-xs tracking-wider">lov0u@foxmail.com</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="菜单"
          >
            <span className={`block w-6 h-px bg-bone transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-bone transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-bone transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 group"
            >
              <span className="text-fade font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-bone text-2xl font-song group-hover:text-neon-jade transition-colors">
                {link.label}
              </span>
              <span className="text-fade font-mono text-xs uppercase tracking-widest">
                {link.labelEn}
              </span>
            </Link>
          ))}
          <a href="mailto:lov0u@foxmail.com" className="mt-8 text-neon-jade font-mono text-lg">
            lov0u@foxmail.com
          </a>
        </div>
      )}
    </>
  );
}
