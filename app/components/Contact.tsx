export default function Contact() {
  const email = "jade@harveyjamesmanagement.com.au";

  return (
    <section id="contact" className="py-20 bg-[#111111] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.07)_0%,transparent_65%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4B680]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#D4B680]" />
          <span className="text-xs font-medium tracking-[0.4em] text-[#D4B680] uppercase">
            Get In Touch
          </span>
          <div className="h-px w-10 bg-[#D4B680]" />
        </div>

        <h2
          className="text-4xl lg:text-5xl font-normal text-[#F4F0E4] mb-6 leading-tight"
          style={{ fontFamily: "var(--font-bodoni), serif" }}
        >
          Ready to Elevate
          <br />
          <span className="text-gold-gradient">Your Next Event?</span>
        </h2>

        <p className="text-[#a89f8c] text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          Whether you have a detailed brief or just an idea, we&apos;d love to hear from you.
          Get in touch and let&apos;s start building the talent solution your event deserves.
        </p>

        {/* Contact card */}
        <div className="inline-block w-full max-w-2xl border border-[#D4B680]/25 rounded-sm bg-[#1a1a1a]/60 backdrop-blur-sm overflow-hidden">
          {/* Gold top accent */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4B680] to-transparent" />

          <div className="p-10 md:p-14">
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-sm bg-[#D4B680]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-[#D4B680]">
                    Email
                  </span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-[#F4F0E4] text-sm font-medium hover:text-[#D4B680] transition-colors duration-200 break-all"
                >
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-sm bg-[#D4B680]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-[#D4B680]">
                    Phone
                  </span>
                </div>
                <span className="text-[#F4F0E4] text-sm font-medium">Available on enquiry</span>
              </div>
            </div>

            {/* Location */}
            <div className="border-t border-white/8 pt-8 mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#D4B680]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-[#D4B680]">
                  Based In / Operating Nationally
                </span>
              </div>
              <p className="text-[#a89f8c] text-sm">Australia-wide</p>
            </div>

            {/* CTA */}
            <a
              href={`mailto:${email}?subject=Enquiry%20%E2%80%94%20Harvey%20James%20Management&body=Hi%20Jade%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A`}
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200 rounded-sm shadow-lg shadow-[#D4B680]/25 w-full justify-center"
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
