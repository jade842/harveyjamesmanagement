import Image from "next/image";

const projects = [
  {
    tags: ["Sporting Event", "Multi-City", "2026"],
    title: "AFC Women's Asian Cup 2026",
    subtitle: "Talent Program Lead — Fan Zone Activation",
    scope: "361 performers delivered across three weeks and three cities — Perth, Sydney and the Gold Coast. Cultural performers, MCs, musicians, dancers and mascot minders sourced, contracted and managed across all Fan Zones, with cultural sensitivity and compliance checks maintained throughout a highly complex, politically sensitive tournament environment.",
    talentCategories: ["Cultural Performers", "MCs & Event Hosts", "DJs & Musicians", "Promotional Staff", "Mascot Performers", "Brand Ambassadors"],
    image: "/WhatsApp Image 2026-03-27 at 13.37.50 (3).jpeg",
    imagePosition: "object-center",
  },
  {
    tags: ["Luxury Experience", "Curated", "Corporate"],
    title: "Premium Luxury Card Programme",
    subtitle: "Luxury Experience Producer — Member Events",
    scope: "Curated a portfolio of high-end member experiences for one of the world's most prestigious financial card programmes — from corporate boxes at the Bledisloe Cup to annual Penfolds Grange dinners and luxury supercar drive days. Each experience conceived, produced and delivered end-to-end with the discretion and finish the clientele demand.",
    talentCategories: ["Luxury Experience Design", "Corporate Hospitality", "VIP Management", "Supplier Curation", "On-Site Execution"],
    image: "/On memory 2021 flowers.jpg",
    imagePosition: "object-center",
  },
  {
    tags: ["Incentive Trip", "Curated", "Sydney"],
    title: "Mitre 10 Incentive Experience",
    subtitle: "Incentive Experience Producer — Top Client Retreat",
    scope: "A curated three-day Sydney incentive trip for Mitre 10's top-tier clients — pre-production, run sheets and full on-site execution. Highlights included a private roaming degustation at Icebergs, Bondi, and the Sydney Harbour BridgeClimb. Every detail managed end-to-end, from limousine transfers to bespoke programming.",
    talentCategories: ["Incentive Experience Design", "Pre-Production", "Logistics", "VIP Coordination", "On-Site Management"],
    image: "/On memory 2021 flowers 2.jpg",
    imagePosition: "object-center",
  },
  {
    tags: ["Fashion Event", "Production"],
    title: "Tasmanian Fashion Festival",
    subtitle: "Board Member & Runway Producer",
    scope: "Board-level governance and hands-on creative delivery for one of Australia's most distinctive regional fashion events — runway production, talent management, casting and end-to-end show delivery across the full festival program.",
    talentCategories: ["Fashion Models", "Runway Production", "Casting", "Backstage Management", "Event Hosts"],
    image: "/SALLY VICTORIA COUTURE - FLOSSY PHOTO  (90 of 147).jpg",
    imagePosition: "object-[center_20%]",
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
    tags: ["Racing", "Event Production"],
    title: "Tasmanian Racing Club",
    subtitle: "Event Producer — Year-Round Retainer",
    scope: "Year-round event management on retainer — pre-production, sponsorship procurement, prize coordination, talent, staffing and full on-site execution across the race day calendar. End-to-end ownership from concept through to delivery.",
    talentCategories: ["Pre-Production", "Sponsorship Procurement", "Creative Direction", "Prize Coordination", "Event Hosts"],
    image: "/TRC_Fashion_0074.jpg",
    imagePosition: "object-[center_30%]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#1F1F1C]">
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
            className="text-5xl lg:text-7xl font-bold text-[#F4F0E4]"
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
                  className="text-3xl font-bold text-[#F4F0E4] mb-1 group-hover:text-[#D4B680] transition-colors duration-300"
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
