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
    <section id="talent" className="py-20 bg-[#1F1F1C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4B680]/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-semibold tracking-[0.4em] text-[#D4B680] uppercase">
                Talent Roster
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-bodoni), serif" }}
            >
              The Range of Talent
              <br />
              <span className="text-gold-gradient">We Deliver</span>
            </h2>
            <p className="text-[#a89f8c] text-base leading-relaxed mb-8">
              From headline performers to on-the-ground promotional teams, our talent network spans
              every category your event demands. Don&apos;t see what you need? Get in touch — if it
              exists, we can source it.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 text-xs font-semibold tracking-widest uppercase border border-[#D4B680] text-[#D4B680] hover:bg-[#D4B680] hover:text-[#1F1F1C] transition-all duration-200 rounded-sm"
            >
              Enquire Now
            </a>
          </div>

          {/* Right — talent list */}
          <div className="grid grid-cols-2 gap-px bg-white/8">
            {talentTypes.map((talent) => (
              <div
                key={talent}
                className="group flex items-center gap-3 px-5 py-4 bg-[#252521] hover:bg-[#2a2a26] transition-colors duration-200"
              >
                <div className="w-1 h-1 rounded-full bg-[#D4B680] flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                <span className="text-[#d4cfc4] text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-200">
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
