export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,182,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,182,128,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#D4B680]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#D4B680]/4 blur-3xl pointer-events-none" />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4B680]/30 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-[#D4B680]" />
          <span className="text-xs font-medium tracking-[0.4em] text-[#D4B680] uppercase">
            National Talent & Event Services
          </span>
          <div className="h-px w-10 bg-[#D4B680]" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.05] mb-8 text-[#F4F0E4]"
          style={{ fontFamily: "var(--font-audrey), serif" }}
        >
          The Right Talent.
          <br />
          <span className="text-gold-gradient">Every Event.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#a89f8c] leading-relaxed mb-12">
          We source, contract and manage talent across every category — for brand activations,
          sporting events, conferences, corporate experiences and more. Where needed, we also
          deliver select events in full.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 text-sm font-medium tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200 rounded-sm shadow-lg shadow-[#D4B680]/20"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-medium tracking-widest uppercase border border-white/30 text-[#F4F0E4] hover:border-[#D4B680] hover:text-[#D4B680] transition-all duration-200 rounded-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-[#a89f8c] uppercase">Scroll</span>
          <svg
            className="w-4 h-4 text-[#D4B680]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />
    </section>
  );
}
