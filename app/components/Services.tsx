const services = [
  {
    number: "01",
    title: "Talent Procurement",
    description:
      "End-to-end sourcing of the right talent for your event — performers, hosts and specialists who match your brief precisely.",
  },
  {
    number: "02",
    title: "Fashion Events & Production",
    description:
      "Full production and backstage management for fashion events — runway logistics, talent coordination and on-day execution.",
  },
  {
    number: "03",
    title: "Personalised Retreats",
    description:
      "Curated retreat experiences delivered end to end — talent, programming, logistics and on-site management.",
  },
  {
    number: "04",
    title: "Onsite Talent Management",
    description:
      "Full onsite management of your complete talent portfolio across single or multi-venue events.",
  },
  {
    number: "05",
    title: "Brand Activations",
    description:
      "Talent solutions for brand activations and experiential campaigns — ambassadors, hosts and performers at any scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F4F0E4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-semibold tracking-[0.4em] text-[#b89660] uppercase">
              What We Do
            </span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-normal text-[#111111]"
            style={{ fontFamily: "var(--font-bodoni), serif" }}
          >
            Our Services
          </h2>
        </div>

        <div className="divide-y divide-[#D4B680]/30">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_2fr] gap-6 lg:gap-12 py-8 items-start"
            >
              {/* Number */}
              <span
                className="text-sm font-medium text-[#D4B680] pt-1"
                style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.1em" }}
              >
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-normal text-[#111111] group-hover:text-[#D4B680] transition-colors duration-300"
                style={{ fontFamily: "var(--font-bodoni), serif" }}
              >
                {service.title}
              </h3>

              {/* Description — hidden on mobile, shown on lg */}
              <p className="hidden lg:block text-[#5a5248] text-sm leading-relaxed pt-1.5">
                {service.description}
              </p>

              {/* Description — shown on mobile below title */}
              <p className="lg:hidden text-[#5a5248] text-sm leading-relaxed col-start-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4B680]/30">
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#111111] text-[#F4F0E4] hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200"
          >
            Discuss Your Brief
          </a>
        </div>
      </div>
    </section>
  );
}
