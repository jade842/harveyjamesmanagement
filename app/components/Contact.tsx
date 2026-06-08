export default function Contact() {
  const email = "jade@harveyjamesmanagement.com.au";

  return (
    <section id="contact" className="py-28 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.07)_0%,transparent_65%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-xs font-semibold tracking-[0.4em] text-[#c9a84c] uppercase">
            Get In Touch
          </span>
          <div className="h-px w-10 bg-[#c9a84c]" />
        </div>

        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Ready to Elevate
          <br />
          <span className="text-gold-gradient">Your Next Event?</span>
        </h2>

        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          Whether you have a detailed brief or just an idea, we&apos;d love to hear from you.
          Get in touch and let&apos;s start building the talent solution your event deserves.
        </p>

        {/* Contact card */}
        <div className="inline-block w-full max-w-2xl border border-[#c9a84c]/25 rounded-sm bg-[#111827]/60 backdrop-blur-sm overflow-hidden">
          {/* Gold top accent */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

          <div className="p-10 md:p-14">
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-sm bg-[#c9a84c]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">
                    Email
                  </span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-white text-sm font-medium hover:text-[#c9a84c] transition-colors duration-200 break-all"
                >
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-sm bg-[#c9a84c]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">
                    Phone
                  </span>
                </div>
                <span className="text-white text-sm font-medium">Available on enquiry</span>
              </div>
            </div>

            {/* Location */}
            <div className="border-t border-white/8 pt-8 mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#c9a84c]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">
                  Based In / Operating Nationally
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm">Australia-wide</p>
            </div>

            {/* CTA */}
            <a
              href={`mailto:${email}?subject=Enquiry%20%E2%80%94%20Harvey%20James%20Management&body=Hi%20Jade%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A`}
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold tracking-widest uppercase bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c47a] transition-all duration-200 rounded-sm shadow-lg shadow-[#c9a84c]/25 w-full justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
