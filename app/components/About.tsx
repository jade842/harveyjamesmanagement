export default function About() {
  const pillars = [
    {
      title: "Curated Solutions",
      desc: "We don't just fill roles. We take time to understand your objectives and match the exact talent that brings your vision to life.",
    },
    {
      title: "National Reach",
      desc: "With a deep network across Australia, we deliver seamlessly in every major city and regional market.",
    },
    {
      title: "Full-Service Delivery",
      desc: "From initial brief through sourcing, contracting, and on-the-day management — we handle every detail so you don't have to.",
    },
    {
      title: "Events at Scale",
      desc: "Whether it's a single activation or a multi-city national rollout, our workforce planning capability scales to match your event.",
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#0a0f1e] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c9a84c]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="text-xs font-semibold tracking-[0.4em] text-[#c9a84c] uppercase">
                Who We Are
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Different Kind of
              <br />
              <span className="text-gold-gradient">Talent Agency</span>
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              Harvey James Management is a national talent and event services agency led by Founder
              and Principal Jade Harvey-James. We provide talent procurement, programming and
              management solutions for major events, brand activations, sporting events, conferences
              and corporate experiences.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
              Our approach goes beyond traditional talent representation. We work closely with every
              client to understand their objectives — then curate the right talent solution for each
              unique project. The result is experiences that connect, engage and leave a lasting
              impression.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c47a] transition-all duration-200 rounded-sm shadow-lg shadow-[#c9a84c]/20"
            >
              Work With Us
            </a>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card-hover p-6 border border-white/10 rounded-sm bg-[#111827]/60 backdrop-blur-sm"
              >
                <div className="w-8 h-0.5 bg-[#c9a84c] mb-4" />
                <h3 className="text-white font-semibold text-base mb-2 tracking-wide">
                  {p.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
