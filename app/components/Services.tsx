import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Talent Procurement",
    description: "End-to-end sourcing of the right talent for your event — performers, hosts and specialists who match your brief precisely.",
  },
  {
    number: "02",
    title: "Fashion Events & Production",
    description: "Full production and backstage management for fashion events — runway logistics, talent coordination and on-day execution.",
  },
  {
    number: "03",
    title: "Personalised Curated Experiences",
    description: "Curated bespoke experiences delivered end to end — talent, programming, logistics and on-site management.",
  },
  {
    number: "04",
    title: "Onsite Talent Management",
    description: "Full onsite management of your complete talent portfolio across single or multi-venue events.",
  },
  {
    number: "05",
    title: "Brand Activations",
    description: "Talent solutions for brand activations and experiential campaigns — ambassadors, hosts and performers at any scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#1F1F1C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-medium tracking-[0.4em] text-[#D4B680] uppercase">
                What We Do
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#F4F0E4] mb-6"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Our Services
            </h2>
            <p className="text-[#a89f8c] text-sm leading-relaxed mb-8">
              From a single talent booking to full event production — we scope each engagement to what you actually need.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 text-xs font-medium tracking-widest uppercase border border-[#D4B680] text-[#D4B680] hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200"
            >
              Discuss Your Brief
            </a>

            <div className="relative mt-8 h-72 overflow-hidden hidden lg:block">
              <Image
                src="/RubyRyanPhoto_0029.jpg"
                alt="Harvey James Management"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1C]/40 to-transparent" />
            </div>
          </div>

          {/* Right: service list */}
          <div className="divide-y divide-[#D4B680]/20">
            {services.map((service) => (
              <div key={service.number} className="group py-7 flex gap-6 items-start">
                <span
                  className="text-xs font-medium text-[#D4B680] mt-1.5 shrink-0 w-6"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {service.number}
                </span>
                <div>
                  <h3
                    className="text-xl font-bold text-[#F4F0E4] mb-2 group-hover:text-[#D4B680] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#a89f8c] text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
