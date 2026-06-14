const testimonials = [
  {
    quote: "Your contributions were essential in creating the environment that made our event such a success. Without your insight and attention to detail, we would not have received such exceptional feedback from attendees. We particularly valued your composure when navigating challenges behind the scenes — you consistently achieved the best outcome with poise, professionalism and style.",
    name: "Company Owners",
    context: "Corporate Event",
  },
  {
    quote: "Harvey James offers an authentic pathway into the industry unlike any other agency I have encountered. The level of personal attention is exceptional — Jade takes the time to genuinely connect, ensuring every talent feels heard and valued. Since signing, I have been placed in three major campaigns.",
    name: "Amanda G",
    context: "Talent, Tasmania",
  },
  {
    quote: "One of Jade's greatest strengths is her approachability — she is always accessible and prompt to respond. I no longer feel the need to accompany my daughter to events when Jade or her team are present. That level of trust is not easily earned.",
    name: "Belinda M",
    context: "Perth, on behalf of Alana M",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F4F0E4] relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-medium tracking-[0.4em] text-[#b89660] uppercase">
              Client Words
            </span>
            <div className="h-px w-8 bg-[#D4B680]" />
          </div>
          <h2
            className="text-5xl lg:text-7xl font-bold text-[#1F1F1C]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            What Our Clients
            <br />
            <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Say About Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative border border-[#D4B680]/30 bg-white/60 p-10 flex flex-col">
              <div className="h-0.5 w-12 bg-[#D4B680] mb-8" />
              <svg className="w-6 h-6 text-[#D4B680]/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#5a5248] text-base leading-relaxed flex-1 mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[#1F1F1C] text-sm font-medium">{t.name}</p>
                <p className="text-[#b89660] text-[10px] tracking-widest uppercase mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
