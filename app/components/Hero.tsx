import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex overflow-hidden bg-[#1F1F1C]">

      {/* Left — text */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 lg:px-16 xl:px-24 pt-32 pb-20">
        {/* Gold accent line left */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4B680]/40 to-transparent" />

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-[#D4B680]" />
          <span className="text-xs font-medium tracking-[0.4em] text-[#D4B680] uppercase">
            National Talent & Event Services
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8 text-[#F4F0E4]"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          The Right Talent.
          <br />
          <span className="text-[#D4B680]" style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400" }}>
            Every Event.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#a89f8c] leading-relaxed mb-12 max-w-md">
          We source, contract and manage talent across every category — for brand activations,
          sporting events, conferences, corporate experiences and more.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="px-10 py-5 text-sm font-bold tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-10 py-5 text-sm font-bold tracking-widest uppercase border-2 border-white/30 text-[#F4F0E4] hover:border-[#D4B680] hover:text-[#D4B680] transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-start gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-[#a89f8c] uppercase">Scroll</span>
          <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Right — image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/KatieWindow-11 (3).jpg"
          alt="Harvey James Management"
          fill
          className="object-cover object-center"
          priority
          sizes="50vw"
        />
        {/* Fade left edge into dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1C] via-transparent to-transparent" />
      </div>

      {/* Bottom fade to eggshell */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4F0E4] to-transparent" />
    </section>
  );
}
