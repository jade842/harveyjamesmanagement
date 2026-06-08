import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F4F0E4] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: headshot */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 lg:w-full max-w-sm">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#D4B680]/40 pointer-events-none z-0" />
              <div className="relative z-10 overflow-hidden aspect-[3/4]">
                <Image
                  src="/Headshot.jpg"
                  alt="Jade Harvey-James, Founder & Principal of Harvey James Management"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 400px"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#111111]/80 to-transparent px-5 py-5">
                <p className="text-[#F4F0E4] font-medium text-sm">Jade Harvey-James</p>
                <p className="text-[#D4B680] text-xs tracking-widest uppercase mt-0.5">Founder & Principal</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4B680]" />
              <span className="text-[10px] font-semibold tracking-[0.4em] text-[#D4B680] uppercase">
                Who We Are
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-normal text-[#111111] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-bodoni), serif" }}
            >
              Talent & Event Solutions,
              <br />Delivered End to End
            </h2>
            <p className="text-[#5a5248] text-base leading-relaxed mb-5">
              Harvey James Management is a national talent and event services agency founded and led
              by Jade Harvey-James. We source, contract and manage talent across a broad range of
              categories for major events, brand activations, sporting events, conferences and
              corporate experiences nationwide.
            </p>
            <p className="text-[#5a5248] text-base leading-relaxed mb-5">
              Beyond talent, we execute select events in full — specialising in fashion events and
              production, backstage management, personalised retreats and onsite management of
              complete talent portfolios.
            </p>
            <p className="text-[#5a5248] text-base leading-relaxed mb-8">
              Jade brings a background in performance, commercial operations and founder-led
              businesses — and deep industry relationships built over years of national event delivery.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 text-xs font-semibold tracking-widest uppercase bg-[#111111] text-[#F4F0E4] hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
