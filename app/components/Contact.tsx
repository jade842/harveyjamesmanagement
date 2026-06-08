export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/3 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-xs font-semibold tracking-[0.4em] text-[#c9a84c] uppercase">
            Get in Touch
          </span>
          <div className="h-px w-8 bg-[#c9a84c]" />
        </div>

        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Let&apos;s Build Something
          <br />
          <span className="text-gold-gradient">Extraordinary</span>
        </h2>

        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Tell us about your event and what you&apos;re looking for. Whether you have a full brief
          or just a concept, we&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-12">
          <a
            href="mailto:jade@harveyjamesmanagement.com.au"
            className="group flex flex-col items-center gap-3 p-7 border border-white/10 rounded-sm bg-[#111827]/60 hover:border-[#c9a84c]/40 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-sm bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c]/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs tracking-widest text-[#64748b] uppercase font-medium">Email</span>
            <span className="text-[#c9a84c] text-sm font-medium break-all">
              jade@harveyjamesmanagement.com.au
            </span>
          </a>

          <div className="flex flex-col items-center gap-3 p-7 border border-white/10 rounded-sm bg-[#111827]/60">
            <div className="w-11 h-11 rounded-sm bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-xs tracking-widest text-[#64748b] uppercase font-medium">Location</span>
            <span className="text-white text-sm font-medium">Australia — Nationwide</span>
          </div>
        </div>

        <a
          href="mailto:jade@harveyjamesmanagement.com.au"
          className="inline-block px-10 py-4 text-sm font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c47a] transition-all duration-200 rounded-sm shadow-xl shadow-[#c9a84c]/20"
        >
          Send an Enquiry
        </a>
      </div>
    </section>
  );
}
