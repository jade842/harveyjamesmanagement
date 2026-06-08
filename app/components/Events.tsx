import Image from "next/image";

const eventTypes = [
  "Sporting Events & Tournaments",
  "Brand Activations",
  "Corporate Conferences",
  "Fashion Events & Runway Shows",
  "Trade Expos & Exhibitions",
  "Music Festivals & Concerts",
  "Race Days & Hospitality",
  "Product Launches",
  "Award Ceremonies",
  "Community & Cultural Events",
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#1F1F1C] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D4B680]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* Left — event list */}
          <div className="grid grid-cols-1 gap-px bg-[#D4B680]/15">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="group flex items-center gap-3 px-5 py-3.5 bg-[#1F1F1C] hover:bg-[#2a2a27] transition-colors duration-200"
              >
                <div className="w-1 h-1 rounded-full bg-[#D4B680] flex-shrink-0" />
                <span className="text-[#a89f8c] text-sm font-medium tracking-wide group-hover:text-[#F4F0E4] transition-colors duration-200">
                  {event}
                </span>
              </div>
            ))}
          </div>

          {/* Middle — images stacked */}
          <div className="hidden lg:flex flex-col gap-3 h-[480px]">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/_MG_9870.jpg"
                alt="Event services"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/_MG_9971.jpg"
                alt="Event services"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-medium tracking-[0.4em] text-[#D4B680] uppercase">
                Events We Serve
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#F4F0E4] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Every Event Type,
              <br />
              <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Covered</span>
            </h2>
            <p className="text-[#a89f8c] text-base leading-relaxed mb-8">
              From large-scale sporting tournaments to intimate curated experiences, we've built our network to serve every event format. Whatever the occasion, we bring the right people to make it work.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 text-xs font-medium tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200"
            >
              Tell Us About Your Event
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
