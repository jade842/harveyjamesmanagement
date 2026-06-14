"use client";

import { useState } from "react";

export default function Contact() {
  const email = "jade@harveyjamesmanagement.com.au";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xvznrzez", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#F4F0E4] relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#D4B680]" />
            <span className="text-xs font-medium tracking-[0.4em] text-[#b89660] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-[#D4B680]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1F1F1C] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Ready to Elevate
            <br />
            <span style={{ fontFamily: "var(--font-audrey), serif", fontWeight: "400", color: "#c4a660" }}>Your Next Event?</span>
          </h2>
          <p className="text-[#5a5248] text-lg leading-relaxed max-w-xl mx-auto">
            Whether you have a detailed brief or just a vision — a curated gathering, a bespoke event, a personalised experience — tell us what you&apos;re imagining and we&apos;ll take it from there.
          </p>
        </div>

        {/* Two column: form + details */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">

          {/* Form */}
          <div className="border border-[#D4B680]/30 bg-white/70 overflow-hidden">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4B680] to-transparent" />
            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 bg-[#D4B680]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1C] mb-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Message Sent</h3>
                  <p className="text-[#5a5248] text-sm">Thanks — we&apos;ll be in touch within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-xs tracking-widest uppercase text-[#b89660] hover:text-[#D4B680] transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#b89660] mb-2">Name *</label>
                      <input
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full bg-[#F4F0E4] border border-[#D4B680]/40 px-4 py-3 text-sm text-[#1F1F1C] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#b89660] mb-2">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[#F4F0E4] border border-[#D4B680]/40 px-4 py-3 text-sm text-[#1F1F1C] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#b89660] mb-2">Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="w-full bg-[#F4F0E4] border border-[#D4B680]/40 px-4 py-3 text-sm text-[#1F1F1C] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#b89660] mb-2">Event Type</label>
                      <select
                        name="eventType"
                        className="w-full bg-[#F4F0E4] border border-[#D4B680]/40 px-4 py-3 text-sm text-[#1F1F1C] focus:outline-none focus:border-[#D4B680] transition-colors appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option>Talent Procurement</option>
                        <option>Fashion Event & Production</option>
                        <option>Personalised Curated Experience</option>
                        <option>Onsite Talent Management</option>
                        <option>Brand Activation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium tracking-widest uppercase text-[#b89660] mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your vision — what you're creating, your timeline, and what matters most to you..."
                      className="w-full bg-[#F4F0E4] border border-[#D4B680]/40 px-4 py-3 text-sm text-[#1F1F1C] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-sm font-medium tracking-widest uppercase bg-[#111111] text-[#F4F0E4] hover:bg-[#D4B680] hover:text-[#111111] transition-all duration-200 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-6 lg:pt-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#D4B680]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#b89660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#b89660]">Email</span>
              </div>
              <a href={`mailto:${email}`} className="text-[#1F1F1C] text-sm font-medium hover:text-[#b89660] transition-colors break-all">
                {email}
              </a>
            </div>

            <div className="h-px bg-[#D4B680]/30" />

            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#D4B680]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#b89660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#b89660]">Location</span>
              </div>
              <p className="text-[#1F1F1C] text-sm font-medium">Australia-wide</p>
            </div>

            <div className="h-px bg-[#D4B680]/30" />

            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#D4B680]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#b89660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#b89660]">Response Time</span>
              </div>
              <p className="text-[#1F1F1C] text-sm font-medium">Within 24 hours</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
