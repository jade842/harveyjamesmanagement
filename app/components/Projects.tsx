const projects = [
  {
    tags: ["Sporting Event", "Multi-City", "2026"],
    title: "AFC Women's Asian Cup 2026",
    subtitle: "Fan Zone Activations",
    description:
      "Harvey James Management was engaged to deliver the full talent and entertainment programming across three Fan Zones for the AFC Women's Asian Cup 2026 — one of Asia's premier international football tournaments, hosted in Australia.",
    stats: [
      { value: "3", label: "Cities" },
      { value: "6+", label: "Talent Categories" },
      { value: "Multi-Week", label: "Duration" },
      { value: "National", label: "Scale" },
    ],
    scope: "Across Perth, Sydney and the Gold Coast, Harvey James Management sourced, contracted and managed a diverse talent workforce spanning multiple disciplines — ensuring each Fan Zone delivered an authentic, vibrant and memorable experience for football fans and families across the tournament run.",
    talentCategories: [
      "Cultural Performers",
      "MCs & Event Hosts",
      "DJs & Live Musicians",
      "Promotional Staff",
      "Mascot Performers",
      "Brand Ambassadors",
    ],
    locations: [
      { city: "Perth", detail: "Cultural performances, promotional activations and mascot entertainment for the WA fan hub." },
      { city: "Sydney", detail: "Multi-stage entertainment programming including MCs, DJs, musicians and cultural performers." },
      { city: "Gold Coast", detail: "Brand ambassador teams, promotional staff and curated entertainment programming." },
    ],
  },
  {
    tags: ["Fashion Event", "Talent Procurement"],
    title: "Tasmanian Fashion Festival",
    subtitle: "Talent Procurement & Management",
    description:
      "Harvey James Management was engaged to source and manage talent for one of Australia's most distinctive regional fashion festivals, delivering models, promotional staff and event hosts across the festival program.",
    stats: [
      { value: "TAS", label: "Location" },
      { value: "Fashion", label: "Sector" },
      { value: "Models", label: "Talent Type" },
      { value: "Full-Service", label: "Delivery" },
    ],
    scope: "From casting and contracting through to on-the-day coordination, Harvey James Management ensured seamless talent delivery across the Tasmanian Fashion Festival — managing the full talent lifecycle so the creative and production teams could focus on delivering an exceptional event.",
    talentCategories: [
      "Fashion Models",
      "Promotional Staff",
      "Event Hosts",
    ],
    locations: [],
  },
  {
    tags: ["Trade Expo", "Promotional Staffing"],
    title: "Mitre 10 Expo",
    subtitle: "Promotional Staff & Brand Ambassadors",
    description:
      "Engaged to supply and manage promotional staff and brand ambassadors for the Mitre 10 Expo, Harvey James Management delivered a professional, on-brand team to drive engagement and represent the brand across the trade floor.",
    stats: [
      { value: "Trade", label: "Sector" },
      { value: "National", label: "Brand" },
      { value: "B2B", label: "Environment" },
      { value: "On-Brand", label: "Delivery" },
    ],
    scope: "Harvey James Management supplied a professional team of promotional staff and brand ambassadors, briefed and coordinated to represent Mitre 10 at trade level. Our end-to-end management meant the client had one point of contact from sourcing through to event day.",
    talentCategories: [
      "Brand Ambassadors",
      "Promotional Staff",
    ],
    locations: [],
  },
  {
    tags: ["Racing", "Hospitality", "Event Activation"],
    title: "Tasmanian Racing Club",
    subtitle: "Event Activation & Talent Management",
    description:
      "Harvey James Management was engaged by the Tasmanian Racing Club to source and manage talent for race day activations and hospitality experiences, delivering hosts, promotional staff and entertainers to bring the event atmosphere to life.",
    stats: [
      { value: "TAS", label: "Location" },
      { value: "Racing", label: "Sector" },
      { value: "Race Days", label: "Format" },
      { value: "Full-Service", label: "Delivery" },
    ],
    scope: "Working closely with the Tasmanian Racing Club events team, Harvey James Management curated a talent solution tailored to the race day environment — managing everything from sourcing and contracting through to on-site coordination, ensuring a premium experience for racegoers.",
    talentCategories: [
      "Event Hosts & MCs",
      "Promotional Staff",
      "Entertainers",
      "Brand Ambassadors",
    ],
    locations: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#252521] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,182,128,0.06)_0%,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#D4B680]" />
            <span className="text-xs font-semibold tracking-[0.4em] text-[#D4B680] uppercase">
              Our Work
            </span>
            <div className="h-px w-10 bg-[#D4B680]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-normal text-white mb-4"
            style={{ fontFamily: "var(--font-bodoni), serif" }}
          >
            Work That Speaks
            <br />
            <span className="text-gold-gradient">For Itself</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-[#D4B680]/20 rounded-sm overflow-hidden bg-[#1F1F1C]"
            >
              {/* Card header */}
              <div className="bg-gradient-to-r from-[#D4B680]/12 to-[#D4B680]/4 border-b border-[#D4B680]/20 p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm ${
                        i === 0
                          ? "bg-[#D4B680] text-[#1F1F1C]"
                          : "border border-[#D4B680]/40 text-[#D4B680]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-2xl md:text-3xl font-normal text-white mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-bodoni), serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#D4B680] text-xs font-semibold tracking-widest uppercase mb-4">
                  {project.subtitle}
                </p>
                <p className="text-[#a89f8c] text-base leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/8">
                {project.stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`p-5 text-center ${idx < project.stats.length - 1 ? "border-r border-white/8" : ""}`}
                  >
                    <div
                      className="text-xl font-normal text-[#D4B680] mb-1"
                      style={{ fontFamily: "var(--font-bodoni), serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-[#a89f8c]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scope detail */}
              <div className="p-8 md:p-10">
                <div className={`grid ${project.talentCategories.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-8`}>
                  <div>
                    <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
                      Scope of Delivery
                    </h4>
                    <p className="text-[#a89f8c] leading-relaxed text-sm">{project.scope}</p>

                    {project.locations.length > 0 && (
                      <>
                        <h4 className="text-white text-xs font-semibold tracking-widest uppercase mt-8 mb-4">
                          Venue Locations
                        </h4>
                        <div className="space-y-3">
                          {project.locations.map((loc) => (
                            <div key={loc.city} className="p-4 border border-white/8 rounded-sm bg-[#252521]/50">
                              <div className="text-[#D4B680] text-xs font-bold tracking-widest uppercase mb-1">{loc.city}</div>
                              <p className="text-[#a89f8c] text-xs leading-relaxed">{loc.detail}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {project.talentCategories.length > 0 && (
                    <div>
                      <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
                        Talent Categories
                      </h4>
                      <ul className="space-y-2">
                        {project.talentCategories.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-[#a89f8c]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4B680] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-[#a89f8c] text-base mb-2">Planning a major event or activation?</p>
          <p className="text-white font-medium">
            Let&apos;s talk about what we can deliver for you.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#D4B680] text-[#1F1F1C] hover:bg-[#e8cfa0] transition-all duration-200 rounded-sm shadow-lg shadow-[#D4B680]/20"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
