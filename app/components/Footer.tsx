const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Talent", href: "#talent" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141412] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-tight">
            <span
              className="text-base font-bold tracking-widest text-[#D4B680] uppercase"
              style={{ fontFamily: "var(--font-bodoni), serif", letterSpacing: "0.15em" }}
            >
              Harvey James
            </span>
            <span className="text-xs tracking-[0.3em] text-[#7a7268] uppercase font-medium">
              Management
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-widest text-[#7a7268] hover:text-[#D4B680] uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-[#6b6358] tracking-wide text-center md:text-right">
            © {new Date().getFullYear()} Harvey James Management.
            <br className="sm:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
