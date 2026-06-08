const talentTypes = [
  {
    title: "MCs & Hosts",
    description: "Professional event hosts and masters of ceremony who command attention, set the tone and keep your audience engaged from open to close.",
    icon: "🎤",
  },
  {
    title: "Performers & Entertainers",
    description: "A diverse roster of performers spanning acrobatics, dance, circus, theatre and interactive entertainment tailored to your event theme.",
    icon: "✨",
  },
  {
    title: "Promotional Staff",
    description: "Engaging, brand-trained promotional representatives who connect authentically with audiences and deliver your message at the ground level.",
    icon: "📣",
  },
  {
    title: "Brand Ambassadors",
    description: "High-calibre ambassadors who embody your brand values, build genuine connections and drive meaningful engagement at events and activations.",
    icon: "⭐",
  },
  {
    title: "Cultural Performers",
    description: "Authentic cultural artists — First Nations performers, international cultural groups and heritage performers — who bring depth and meaning to diverse events.",
    icon: "🌏",
  },
  {
    title: "Musicians & DJs",
    description: "Live musicians, bands, solo artists and DJs across every genre — from ambient background to headline entertainment and after-party sets.",
    icon: "🎵",
  },
  {
    title: "Speakers",
    description: "Keynote speakers, facilitators, panel moderators and thought leaders sourced and managed for conferences, corporate events and forums.",
    icon: "🎯",
  },
  {
    title: "Mascots & Characters",
    description: "Professional mascot performers and costumed characters that create memorable, shareable moments for fan zones, sporting events and brand activations.",
    icon: "🎭",
  },
];

export default function Talent() {
  return (
    <section id="talent" className="py-28 bg-[#1F1F1C] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#D4B680]/4 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-60 h-60 rounded-full bg-[#D4B680]/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#D4B680]" />
            <span className="text-xs font-semibold tracking-[0.4em] text-[#D4B680] uppercase">
              Talent Roster
            </span>
            <div className="h-px w-10 bg-[#D4B680]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-bodoni), serif" }}
          >
            The Range of Talent
            <br />
            <span className="text-gold-gradient">We Deliver</span>
          </h2>
          <p className="text-[#a89f8c] text-lg max-w-2xl mx-auto leading-relaxed">
            From headline performers to on-the-ground promotional teams, our talent network spans
            every category your event demands.
          </p>
        </div>

        {/* Talent grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {talentTypes.map((talent) => (
            <div
              key={talent.title}
              className="card-hover group p-6 border border-white/8 rounded-sm bg-[#252521]/40 relative overflow-hidden"
            >
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4B680] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-3xl mb-4">{talent.icon}</div>
              <h3 className="text-white font-semibold text-sm tracking-wide mb-2 uppercase">
                {talent.title}
              </h3>
              <p className="text-[#a89f8c] text-xs leading-relaxed">{talent.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[#a89f8c] mb-6 text-base">
            Looking for a specific talent type not listed here?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 text-sm font-semibold tracking-widest uppercase border border-[#D4B680] text-[#D4B680] hover:bg-[#D4B680] hover:text-[#1F1F1C] transition-all duration-200 rounded-sm"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
