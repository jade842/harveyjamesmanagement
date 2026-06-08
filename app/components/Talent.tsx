const talentTypes = [
  "MCs & Hosts",
  "Performers & Entertainers",
  "Promotional Staff",
  "Brand Ambassadors",
  "Cultural Performers",
  "Musicians & DJs",
  "Keynote Speakers",
  "Mascots & Characters",
  "Models",
  "Dancers",
];

export default function Talent() {
  return (
    <section id="talent" className="py-24 bg-[#F4F0E4] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4B680]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-semibold tracking-[0.4em] text-[#b89660] uppercase">
                Talent Roster
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-normal text-[#111111] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-bodoni), serif" }}
            >
              The Range of Talent
              <br />
              <span className="text-gold-gradient">We Deliver</span>
            </h2>
            <p className="text-[#5a5248] text-base leading-relaxed mb-8">
              From headline performers to on-the-ground promotional teams, our talent network spans
              every category your event demands. Don&apos;t see what you need? Get in touch — if it
              exists, we can source it.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 text-xs font-semibold tracking-widest uppercase bg-[#111111] text-white hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200"
            >
              Enquire Now
            </a>
          </div>

          {/* Right — talent list */}
          <div className="grid grid-cols-2 gap-px bg-[#D4B680]/20">
            {talentTypes.map((talent) => (
              <div
                key={talent}
                className="group flex items-center gap-3 px-5 py-4 bg-[#F4F0E4] hover:bg-white transition-colors duration-200"
              >
                <div className="w-1 h-1 rounded-full bg-[#D4B680] flex-shrink-0" />
                <span className="text-[#3a3530] text-sm font-medium tracking-wide">
                  {talent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
