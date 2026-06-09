const testimonials = [
  {
    quote: "So much work went into the lead-up to Power Up Bali 2026, and your contributions were essential in creating the amazing environment that made the event such a success. Without your incredible insight and attention to detail, we would not have received such fantastic feedback from the attendees. We particularly appreciated your calmness when dealing with challenges behind the scenes — you always achieved the best outcome with a friendly smile, incredible poise, and style.",
    name: "Brian & Jane",
    context: "Power Up Bali 2026",
  },
  {
    quote: "Harvey James offers young aspiring models an authentic pathway into the modelling industry, one unlike any other company I have been involved with before. With the help of Harvey James, I have already been cast for 3 major campaigns. Jade is so easy to talk to and makes the effort to connect with all her models, ensuring our feelings are always taken into consideration.",
    name: "Amanda G",
    context: "Tasmania",
  },
  {
    quote: "Jade has been amazing so far! I love her energy and I am looking forward to continuing to grow with her and Harvey James Management!",
    name: "Prince I",
    context: "Perth",
  },
  {
    quote: "Jade and HJM have been wonderful to me and given me some great opportunities that I'm very grateful for and very excited to continue. HJM are very warm and welcoming and I can't wait to work with them more very soon.",
    name: "Saul P",
    context: "Perth",
  },
  {
    quote: "Jade is super friendly and has been great with being transparent and informative.",
    name: "Riley N",
    context: "Tasmania",
  },
  {
    quote: "I believe one of Jade's greatest strengths as an agent is her approachability — she is accessible and prompt to respond, welcoming whenever we meet. I no longer feel the need to accompany Alana to events if her or her team are in attendance as I trust my daughter will be cared for.",
    name: "Belinda M",
    context: "Perth, on behalf of her daughter Alana M",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#1F1F1C] relative overflow-hidden">
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
            className="text-4xl lg:text-5xl font-bold text-[#F4F0E4]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            What Our Clients
            <br />
            <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Say About Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className={`relative border border-[#D4B680]/15 bg-[#2a2a27]/50 p-8 flex flex-col ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="h-px w-8 bg-[#D4B680] mb-6" />
              <svg className="w-6 h-6 text-[#D4B680]/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#a89f8c] text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[#F4F0E4] text-sm font-medium">{t.name}</p>
                <p className="text-[#D4B680] text-[10px] tracking-widest uppercase mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
