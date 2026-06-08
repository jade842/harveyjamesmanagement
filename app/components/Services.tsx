const services = [
  {
    number: "01",
    title: "Talent Procurement",
    description:
      "End-to-end sourcing of the right talent for your event. We tap into our national network to find performers, hosts, staff and specialists who meet your brief precisely.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Event Programming",
    description:
      "We design and program the talent component of your event from the ground up — curating run-of-show, stage programming, entertainment schedules and cultural moments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Talent Management",
    description:
      "Ongoing representation and management of talent throughout the engagement lifecycle — contracts, briefings, logistics, rehearsals and post-event reporting.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Brand Activations",
    description:
      "Bespoke talent solutions for brand activations and experiential marketing campaigns — brand ambassadors, hosts, interactive performers and promotional staff who bring your brand to life.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Workforce Planning",
    description:
      "Strategic planning and deployment of large promotional and event workforces — rostering, training coordination, team management and multi-site logistics at national scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <span className="text-xs font-semibold tracking-[0.4em] text-[#c9a84c] uppercase">
              What We Do
            </span>
            <div className="h-px w-10 bg-[#c9a84c]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Services
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive talent and event services — from brief to execution, we handle every
            dimension of your talent needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className={`card-hover relative p-8 border border-white/8 rounded-sm bg-[#0a0f1e]/60 group ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number watermark */}
              <div
                className="absolute top-6 right-6 text-5xl font-bold text-white/4 group-hover:text-[#c9a84c]/10 transition-colors duration-300 select-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {service.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-6 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                {service.icon}
              </div>

              <h3
                className="text-white font-bold text-lg mb-3 tracking-wide"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
