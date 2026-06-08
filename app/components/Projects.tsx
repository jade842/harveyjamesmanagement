const venues = [
  {
    city: "Perth",
    venue: "HBF Park Fan Zone",
    detail: "Cultural performances, promotional activations and mascot entertainment for the Western Australian fan hub.",
  },
  {
    city: "Sydney",
    venue: "Stadium Australia Fan Zone",
    detail: "Multi-stage entertainment programming including MCs, DJs, musicians and cultural performers across match days.",
  },
  {
    city: "Gold Coast",
    venue: "Cbus Super Stadium Fan Zone",
    detail: "Brand ambassador teams, promotional staff and curated entertainment programming for Queensland fans.",
  },
];

const stats = [
  { value: "3", label: "Cities" },
  { value: "6+", label: "Talent Categories" },
  { value: "Multi-Week", label: "Tournament Duration" },
  { value: "National", label: "Delivery Scale" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.07)_0%,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <span className="text-xs font-semibold tracking-[0.4em] text-[#c9a84c] uppercase">
              Featured Project
            </span>
            <div className="h-px w-10 bg-[#c9a84c]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Work That Speaks
            <br />
            <span className="text-gold-gradient">For Itself</span>
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="border border-[#c9a84c]/20 rounded-sm overflow-hidden bg-[#0a0f1e]">
          {/* Case study header */}
          <div className="bg-gradient-to-r from-[#c9a84c]/15 to-[#c9a84c]/5 border-b border-[#c9a84c]/20 p-8 md:p-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#0a0f1e] rounded-sm">
                Sporting Event
              </span>
              <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm">
                Multi-City
              </span>
              <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm">
                2026
              </span>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              AFC Women&apos;s Asian Cup 2026
              <br />
              <span className="text-gold-gradient">Fan Zone Activations</span>
            </h3>
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl">
              Harvey James Management was engaged to deliver the full talent and entertainment
              programming across three Fan Zones for the AFC Women&apos;s Asian Cup 2026 —
              one of Asia&apos;s premier international football tournaments, hosted in Australia.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-6 text-center ${idx < stats.length - 1 ? "border-r border-white/8" : ""}`}
              >
                <div
                  className="text-2xl font-bold text-[#c9a84c] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#94a3b8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scope detail */}
          <div className="p-8 md:p-12">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Scope of Delivery
            </h4>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-[#94a3b8] leading-relaxed text-sm mb-4">
                  Across Perth, Sydney and the Gold Coast, Harvey James Management sourced,
                  contracted and managed a diverse talent workforce spanning multiple disciplines —
                  ensuring each Fan Zone delivered an authentic, vibrant and memorable experience
                  for football fans and families.
                </p>
                <p className="text-[#94a3b8] leading-relaxed text-sm">
                  Our remit covered full programming — from entertainment scheduling and
                  cultural curation through to on-site talent coordination across the
                  tournament run.
                </p>
              </div>
              <div>
                <h5 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
                  Talent Categories Delivered
                </h5>
                <ul className="space-y-2">
                  {[
                    "Cultural Performers",
                    "MCs & Event Hosts",
                    "DJs & Live Musicians",
                    "Promotional Staff",
                    "Mascot Performers",
                    "Brand Ambassadors",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Venue breakdown */}
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Venue Locations
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {venues.map((v) => (
                <div
                  key={v.city}
                  className="p-5 border border-white/8 rounded-sm bg-[#111827]/50"
                >
                  <div className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-1">
                    {v.city}
                  </div>
                  <div className="text-white text-sm font-medium mb-2">{v.venue}</div>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to discuss */}
        <div className="text-center mt-12">
          <p className="text-[#94a3b8] text-base mb-2">Planning a major event or activation?</p>
          <p className="text-white font-medium">
            Let&apos;s talk about what we can deliver for you.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c47a] transition-all duration-200 rounded-sm shadow-lg shadow-[#c9a84c]/20"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
