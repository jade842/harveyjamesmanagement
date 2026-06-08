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
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#c9a84c]/4 blur-3xl pointer-events-none" />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-xs font-semibold tracking-[0.4em] text-[#c9a84c] uppercase">
            Australia&apos;s Premier Talent Agency
          </span>
          <div className="h-px w-10 bg-[#c9a84c]" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8 text-white"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Talent That
          <br />
          <span className="text-gold-gradient">Elevates Every</span>
          <br />
          Experience
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#94a3b8] leading-relaxed mb-12">
          We source, contract and manage world-class talent — MCs, performers, cultural artists,
          promotional staff and more — delivering curated solutions for major events, brand
          activations and corporate experiences across Australia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c47a] transition-all duration-200 rounded-sm shadow-lg shadow-[#c9a84c]/20"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase border border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200 rounded-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-[#94a3b8] uppercase">Scroll</span>
          <svg
            className="w-4 h-4 text-[#c9a84c]"
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
    </section>
  );
}
