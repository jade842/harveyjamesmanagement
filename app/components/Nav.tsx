"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Talent", href: "#talent" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex flex-col leading-tight group"
          >
            <span
              className="text-lg font-bold tracking-widest text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-playfair), serif", letterSpacing: "0.15em" }}
            >
              Harvey James
            </span>
            <span className="text-xs tracking-[0.3em] text-[#94a3b8] uppercase font-medium">
              Management
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium text-[#cbd5e1] hover:text-[#c9a84c] tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0f1e] transition-all duration-200 rounded-sm"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-[#0a0f1e]/98 backdrop-blur-md border-t border-[#c9a84c]/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-[#cbd5e1] hover:text-[#c9a84c] tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0f1e] transition-all duration-200 rounded-sm text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
