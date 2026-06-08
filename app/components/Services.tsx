const services = [
  {
    number: "01",
    title: "Talent Procurement",
    description:
      "End-to-end sourcing of the right talent for your event — tapping our national network to find performers, hosts and specialists who match your brief precisely.",
  },
  {
    number: "02",
    title: "Fashion Events & Production",
    description:
      "Full event production and backstage management for fashion events — from runway logistics and talent coordination to creative programming and on-day execution.",
  },
  {
    number: "03",
    title: "Personalised Retreats",
    description:
      "Curated retreat experiences designed and delivered end to end — talent, programming, logistics and on-site management for intimate, high-quality events.",
  },
  {
    number: "04",
    title: "Onsite Talent Management",
    description:
      "Full onsite management of your complete talent portfolio — briefings, logistics, scheduling and on-day coordination across single or multi-venue events.",
  },
  {
    number: "05",
    title: "Brand Activations",
    description:
      "Bespoke talent solutions for brand activations and experiential campaigns — ambassadors, hosts and performers who bring your brand to life at any scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#111111] relative overflow-hidden">
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
            className="text-3xl lg:text-4xl font-normal text-[#F4F0E4]"
            style={{ fontFamily: "var(--font-bodoni), serif" }}
          >
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className={`group p-8 bg-[#111111] hover:bg-[#1a1a1a] transition-colors duration-300 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className="text-4xl font-normal text-[#D4B680]/15 group-hover:text-[#D4B680]/30 transition-colors duration-300 mb-5 leading-none"
                style={{ fontFamily: "var(--font-bodoni), serif" }}
              >
                {service.number}
              </div>
              <h3
                className="text-[#F4F0E4] font-normal text-lg mb-3"
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
