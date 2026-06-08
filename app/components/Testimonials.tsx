const testimonials = [
  {
    quote: "Jade and the team delivered beyond our expectations. Every talent was perfectly briefed, professional and exactly what we needed for the day.",
    name: "Client Name",
    title: "Event Director",
    company: "Company Name",
  },
  {
    quote: "Working with Harvey James Management made the entire talent side of our activation effortless. One call, everything handled — that's exactly what you need on a big event.",
    name: "Client Name",
    title: "Brand Manager",
    company: "Company Name",
  },
  {
    quote: "The attention to detail and care taken with our fashion event was second to none. Jade truly understands what a premium production requires.",
    name: "Client Name",
    title: "Creative Director",
    company: "Company Name",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1F1F1C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,182,128,0.05)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-medium tracking-[0.4em] text-[#D4B680] uppercase">
              Client Words
            </span>
            <div className="h-px w-8 bg-[#D4B680]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#F4F0E4]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            What Our Clients
            <br />
            <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Say About Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative border border-[#D4B680]/15 bg-[#2a2a27]/50 p-8 flex flex-col">
              <div className="h-px w-8 bg-[#D4B680] mb-6" />
              <svg className="w-6 h-6 text-[#D4B680]/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#a89f8c] text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[#F4F0E4] text-sm font-medium">{t.name}</p>
                <p className="text-[#D4B680] text-[10px] tracking-widest uppercase mt-0.5">{t.title} — {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
