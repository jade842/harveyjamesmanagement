import Image from "next/image";

const projects = [
  {
    tags: ["Educational Retreat", "Full Production", "International"],
    title: "International Educational Retreat",
    subtitle: "Full Event Production & Speaker Management",
    scope: "End-to-end production of a 65-person international educational retreat — managing the complete event from pre-production through to on-the-ground execution. Responsibilities spanned speaker sourcing and management, full program coordination, logistics, scheduling and on-site talent management across the retreat run.",
    talentCategories: ["Speaker Management", "Program Coordination", "Full Production", "On-Site Management", "Logistics", "Pre-Production"],
  },
  {
    tags: ["Sporting Event", "Multi-City", "2026"],
    title: "AFC Women's Asian Cup 2026",
    subtitle: "Fan Zone Talent & Activation",
    scope: "Sourced, contracted and managed a full talent workforce across three Fan Zones in Perth, Sydney and the Gold Coast — cultural performers, MCs, DJs, musicians, promotional staff and mascot performers across the tournament run.",
    talentCategories: ["Cultural Performers", "MCs & Event Hosts", "DJs & Musicians", "Promotional Staff", "Mascot Performers", "Brand Ambassadors"],
    image: "/WhatsApp Image 2026-03-27 at 13.37.50 (3).jpeg",
    imagePosition: "object-center",
  },
  {
    tags: ["Fashion Event", "Production"],
    title: "Tasmanian Fashion Festival",
    subtitle: "Talent Procurement & Backstage Management",
    scope: "End-to-end talent procurement and on-the-day coordination for one of Australia's most distinctive regional fashion festivals — models, hosts and promotional staff managed across the full program.",
    talentCategories: ["Fashion Models", "Promotional Staff", "Event Hosts"],
    image: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg",
    imagePosition: "object-[center_20%]",
  },
  {
    tags: ["Trade Expo", "Brand Activation"],
    title: "Mitre 10 Expo",
    subtitle: "Promotional Staff & Brand Ambassadors",
    scope: "Managed ticket sales, entertainment and pre-production, event hosts and prize coordination — delivering a seamless experience from planning through to event day.",
    talentCategories: ["Event Hosts", "Entertainment", "Promotional Staff", "Pre-Production"],
    image: "/CM10 Tradeshow BTS 2016.PNG",
    imagePosition: "object-center",
    imageScale: "scale-[1.8]",
  },
  {
    tags: ["Wedding Expo", "Fashion", "10 Years"],
    title: "Tasmanian Wedding Expo",
    subtitle: "Parade Direction, Models & Editorial",
    scope: "Over 10 years as the creative force behind Tasmania's premier wedding expo — managing and directing a parade of 100+ gowns annually, sourcing and coordinating models across the full show, and producing the annual wedding photoshoot that secured magazine front cover editorial features.",
    talentCategories: ["Fashion Models", "Parade Direction", "Creative Direction", "Editorial Production", "Promotional Staff"],
    image: "/385_HiRes.jpg",
    imagePosition: "object-center",
  },
  {
    title: "Tasmanian Racing Club",
    subtitle: "Event Activation & Talent Management",
    scope: "Managed pre-production of race days including prizes, sponsorship procurement and creative direction — taking full ownership of the event experience from concept through to execution.",
    talentCategories: ["Pre-Production", "Sponsorship Procurement", "Creative Direction", "Prize Coordination", "Event Hosts"],
    image: "/TRC_Fashion_0074.jpg",
    imagePosition: "object-[center_30%]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#1F1F1C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-medium tracking-[0.4em] text-[#D4B680] uppercase">
              Our Work
            </span>
            <div className="h-px w-8 bg-[#D4B680]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#F4F0E4]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Work That Speaks
            <br />
            <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>For Itself</span>
          </h2>
        </div>

        <div className="divide-y divide-[#D4B680]/15">
          {projects.map((project) => (
            <div key={project.title} className="group py-8 grid md:grid-cols-[1fr_auto] gap-8 items-start">
              {/* Text + categories */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(project.tags ?? []).map((tag, i) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-medium tracking-widest uppercase px-2.5 py-0.5 ${
                        i === 0 ? "bg-[#D4B680] text-[#111111]" : "border border-[#D4B680]/40 text-[#a89f8c]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-2xl font-bold text-[#F4F0E4] mb-1 group-hover:text-[#D4B680] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-4">{project.subtitle}</p>
                <p className="text-[#a89f8c] text-sm leading-relaxed mb-4">{project.scope}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.talentCategories.map((cat) => (
                    <span key={cat} className="text-[10px] tracking-wide text-[#a89f8c] border border-[#D4B680]/30 px-2 py-0.5">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portrait image */}
              {project.image && (
                <div className="relative w-48 h-64 shrink-0 overflow-hidden hidden md:block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.imagePosition} ${(project as {imageScale?: string}).imageScale ?? ""}`}
                    sizes="192px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4B680]/20 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 text-xs font-medium tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
