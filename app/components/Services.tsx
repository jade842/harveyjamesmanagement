const services = [
  {
    number: "01",
    title: "Talent Procurement",
    description:
      "End-to-end sourcing of the right talent for your event — tapping our national network to find performers, hosts and specialists who meet your brief precisely.",
  },
  {
    number: "02",
    title: "Event Programming",
    description:
      "We design and program the full talent component of your event — curating run-of-show, stage programming, entertainment schedules and cultural moments.",
  },
  {
    number: "03",
    title: "Talent Management",
    description:
      "Ongoing management across the engagement lifecycle — contracts, briefings, logistics and on-site coordination handled end to end.",
  },
  {
    number: "04",
    title: "Brand Activations",
    description:
      "Bespoke talent solutions for brand activations and experiential campaigns — ambassadors, hosts and performers who bring your brand to life.",
  },
  {
    number: "05",
    title: "Workforce Planning",
    description:
      "Strategic planning and deployment of large promotional teams — rostering, training coordination and multi-site logistics at national scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#252521] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,182,128,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-semibold tracking-[0.4em] text-[#D4B680] uppercase">
              What We Do
            </span>
            <div className="h-px w-8 bg-[#D4B680]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl font-normal text-white"
            style={{ fontFamily: "var(--font-bodoni), serif" }}
          >
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className={`group p-8 bg-[#1F1F1C] hover:bg-[#252521] transition-colors duration-300 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className="text-4xl font-normal text-[#D4B680]/20 group-hover:text-[#D4B680]/40 transition-colors duration-300 mb-6 leading-none"
                style={{ fontFamily: "var(--font-bodoni), serif" }}
              >
                {service.number}
              </div>
              <h3
                className="text-white font-normal text-lg mb-3"
                style={{ fontFamily: "var(--font-bodoni), serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#a89f8c] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
