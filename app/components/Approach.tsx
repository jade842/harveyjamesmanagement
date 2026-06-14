const pillars = [
  {
    number: "01",
    title: "Full-Circle Service",
    description: "From talent procurement through to full event management and on-site delivery — one point of contact across the entire process, from concept to load-out.",
  },
  {
    number: "02",
    title: "National Reach",
    description: "Active delivery across WA, QLD, NSW, VIC and TAS. Local understanding with genuine national capability — we know the market in every state we operate.",
  },
  {
    number: "03",
    title: "Talent-First Culture",
    description: "We prioritise the welfare, development and growth of our talent. Every engagement is well-briefed, every performer valued and supported on the day.",
  },
  {
    number: "04",
    title: "Client Transparency",
    description: "Clear communication, honest timelines and detailed reporting. No hidden costs, no surprises — a reliable partner at every stage of delivery.",
  },
  {
    number: "05",
    title: "Compliance & Professionalism",
    description: "Rigorous management of contracts, talent riders, WHS obligations and compliance documentation on every engagement, without exception.",
  },
  {
    number: "06",
    title: "Adaptable & Scalable",
    description: "From a single activation to a national multi-city talent program — our model flexes precisely to meet the brief, whatever the scale or complexity.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-32 bg-[#F4F0E4] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-medium tracking-[0.4em] text-[#D4B680] uppercase">
                How We Work
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1F1F1C] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Our
              <br />
              <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Approach</span>
            </h2>
            <p className="text-[#5a5248] text-base leading-relaxed">
              The way we work is as important as what we deliver. These are the principles that guide every engagement.
            </p>
          </div>

          <div className="divide-y divide-[#D4B680]/20">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="group py-8 flex gap-6 items-start">
                <span
                  className="text-xs font-medium text-[#D4B680] mt-1.5 shrink-0 w-6"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {pillar.number}
                </span>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1F1F1C] mb-2 group-hover:text-[#b89660] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[#5a5248] text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
