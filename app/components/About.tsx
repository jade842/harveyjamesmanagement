import Image from "next/image";

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
    <section id="about" className="py-20 bg-[#1F1F1C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4B680]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: headshot */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-72 lg:w-full max-w-sm">
              {/* Gold border accent */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#D4B680]/30 rounded-sm pointer-events-none z-0" />
              <div className="relative z-10 overflow-hidden rounded-sm aspect-[3/4]">
                <Image
                  src="/headshot.jpg"
                  alt="Jade Harvey-James, Founder & Principal of Harvey James Management"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 400px"
                  priority
                />
              </div>
              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#1F1F1C]/90 to-transparent px-5 py-4">
                <p className="text-white font-semibold text-sm tracking-wide">Jade Harvey-James</p>
                <p className="text-[#D4B680] text-xs tracking-widest uppercase">Founder & Principal</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-xs font-semibold tracking-[0.4em] text-[#D4B680] uppercase">
                Who We Are
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-bodoni), serif" }}
            >
              A Different Kind of
              <br />
              <span className="text-gold-gradient">Talent Agency</span>
            </h2>
            <p className="text-[#a89f8c] text-base leading-relaxed mb-5">
              Harvey James Management is a national talent and event services agency founded and led
              by Jade Harvey-James. We provide talent procurement, programming and management
              solutions for major events, brand activations, sporting events, conferences and
              corporate experiences.
            </p>
            <p className="text-[#a89f8c] text-base leading-relaxed mb-5">
              Jade&apos;s background spans performance, commercial operations and scaling founder-led
              ventures — giving her a rare ability to see both the creative and commercial sides of
              every engagement. She brings deep industry relationships, hands-on delivery experience
              and a genuine understanding of what it takes to make events succeed at the highest level.
            </p>
            <p className="text-[#a89f8c] text-base leading-relaxed mb-10">
              Clients engage us not to book a name off a list, but because they want the right
              solution built around their brief. That&apos;s the standard we hold ourselves to on every
              project.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#D4B680] text-[#1F1F1C] hover:bg-[#e8cfa0] transition-all duration-200 rounded-sm shadow-lg shadow-[#D4B680]/20"
            >
              Work With Us
            </a>
            {/* Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card-hover p-6 border border-white/10 rounded-sm bg-[#252521]/60 backdrop-blur-sm"
              >
                <div className="w-8 h-0.5 bg-[#D4B680] mb-4" />
                <h3 className="text-white font-semibold text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-[#a89f8c] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
