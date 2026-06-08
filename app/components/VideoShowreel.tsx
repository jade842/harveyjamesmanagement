export default function VideoShowreel() {
  return (
    <section className="py-24 bg-[#F4F0E4] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,182,128,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4B680]" />
            <span className="text-[10px] font-medium tracking-[0.4em] text-[#b89660] uppercase">
              In Action
            </span>
            <div className="h-px w-8 bg-[#D4B680]" />
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1F1F1C] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Watch Us
            <br />
            <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Work</span>
          </h2>
          <p className="text-[#5a5248] text-base leading-relaxed max-w-xl mx-auto">
            From major sporting events to high-end fashion campaigns — a glimpse of the talent and events we deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl shadow-[#D4B680]/10 mb-3">
              <iframe
                src="https://www.youtube.com/embed/DdcY68lsYaU"
                title="AFC Women's Asian Cup 2026 Halftime Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-[#b89660]">AFC Women's Asian Cup 2026 — Halftime Performance</p>
          </div>
          <div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl shadow-[#D4B680]/10 mb-3">
              <iframe
                src="https://www.youtube.com/embed/84yPUY4lRqI"
                title="HJM Model Katie E for Spendless Shoes A/W 2022"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-[#b89660]">Katie E for Spendless Shoes — A/W 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
