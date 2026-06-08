const projects = [
  {
    tags: ["Sporting Event", "Multi-City", "2026"],
    title: "AFC Women's Asian Cup 2026",
    subtitle: "Fan Zone Talent & Activation",
    scope: "Sourced, contracted and managed a full talent workforce across three Fan Zones in Perth, Sydney and the Gold Coast — cultural performers, MCs, DJs, musicians, promotional staff and mascot performers across the tournament run.",
    talentCategories: ["Cultural Performers", "MCs & Event Hosts", "DJs & Musicians", "Promotional Staff", "Mascot Performers", "Brand Ambassadors"],
  },
  {
    tags: ["Fashion Event", "Production"],
    title: "Tasmanian Fashion Festival",
    subtitle: "Talent Procurement & Backstage Management",
    scope: "End-to-end talent procurement and on-the-day coordination for one of Australia's most distinctive regional fashion festivals — models, hosts and promotional staff managed across the full festival program.",
    talentCategories: ["Fashion Models", "Promotional Staff", "Event Hosts"],
  },
  {
    tags: ["Trade Expo", "Brand Activation"],
    title: "Mitre 10 Expo",
    subtitle: "Promotional Staff & Brand Ambassadors",
    scope: "Supplied and managed a professional team of promotional staff and brand ambassadors briefed to represent Mitre 10 at trade level — one point of contact from sourcing through to event day.",
    talentCategories: ["Brand Ambassadors", "Promotional Staff"],
  },
  {
    tags: ["Racing", "Event Activation"],
    title: "Tasmanian Racing Club",
    subtitle: "Event Activation & Talent Management",
    scope: "Sourced and managed talent for race day activations and hospitality experiences — hosts, promotional staff and entertainers curated and coordinated to deliver a premium raceday atmosphere.",
    talentCategories: ["Event Hosts & MCs", "Promotional Staff", "Entertainers", "Brand Ambassadors"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F4F0E4] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-semibold tracking-[0.4em] text-[#b89660] uppercase">
              Our Work
            </span>
            <div className="h-px w-8 bg-[#D4B680]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl font-normal text-[#111111]"
            style={{ fontFamily: "var(--font-bodoni), serif" }}
          >
            Work That Speaks
            <br />
            <span className="text-gold-gradient">For Itself</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#D4B680]/20">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#F4F0E4] p-8 group hover:bg-white transition-colors duration-200">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase ${
                      i === 0
                        ? "bg-[#111111] text-[#F4F0E4]"
                        : "border border-[#111111]/20 text-[#5a5248]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                className="text-xl font-normal text-[#111111] mb-1 leading-snug"
                style={{ fontFamily: "var(--font-bodoni), serif" }}
              >
                {project.title}
              </h3>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#D4B680] mb-4">
                {project.subtitle}
              </p>
              <div className="h-px w-10 bg-[#D4B680] mb-4" />
              <p className="text-[#5a5248] text-sm leading-relaxed mb-5">{project.scope}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.talentCategories.map((cat) => (
                  <span key={cat} className="text-[10px] tracking-wide text-[#5a5248] border border-[#D4B680]/50 px-2 py-0.5">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#111111] text-[#F4F0E4] hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
