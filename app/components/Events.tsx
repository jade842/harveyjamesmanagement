import Image from "next/image";

const eventTypes = [
  "Runway Shows & Fashion Weeks",
  "Backstage & Production Management",
  "Luxury Private Events",
  "High-End Brand Experiences",
  "Personalised Curated Occasions",
  "VIP Hospitality & Activations",
  "Exclusive Corporate Experiences",
  "Bespoke Entertainment Events",
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#F4F0E4] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4B680]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-medium tracking-[0.4em] text-[#b89660] uppercase">
                What We Produce
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#1F1F1C] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Fashion. Luxury.
              <br />
              <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Curated.</span>
            </h2>
            <p className="text-[#5a5248] text-base leading-relaxed mb-8">
              For select clients we take full ownership — fashion events and backstage production managed end to end, and personalised high-end experiences curated to the finest detail.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 text-xs font-medium tracking-widest uppercase bg-[#111111] text-[#F4F0E4] hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200"
            >
              Tell Us About Your Event
            </a>
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
                src="/Photo 16-9-2022, 7 35 25 pm.jpg"
                alt="Event services"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
            </div>
          </div>

          {/* Right — event list */}
          <div className="grid grid-cols-1 gap-px bg-[#D4B680]/20">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="group flex items-center gap-3 px-5 py-3.5 bg-[#F4F0E4] hover:bg-[#ede9dc] transition-colors duration-200"
              >
                <div className="w-1 h-1 rounded-full bg-[#D4B680] flex-shrink-0" />
                <span className="text-[#3a3530] text-sm font-medium tracking-wide">
                  {event}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
