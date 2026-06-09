"use client";

import { useState } from "react";

export default function Contact() {
  const email = "jade@harveyjamesmanagement.com.au";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const from = data.get("email") as string;
    const phone = data.get("phone") as string;
    const eventType = data.get("eventType") as string;
    const message = data.get("message") as string;

    const body = `Hi Jade,

Name: ${name}
Email: ${from}
Phone: ${phone || "Not provided"}
Event Type: ${eventType || "Not specified"}

${message}`;

    window.location.href = `mailto:${email}?subject=Enquiry — Harvey James Management&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-[#1F1F1C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,182,128,0.08)_0%,transparent_65%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4B680]/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#D4B680]" />
            <span className="text-xs font-medium tracking-[0.4em] text-[#D4B680] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-[#D4B680]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#F4F0E4] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Ready to Elevate
            <br />
            <span className="text-gold-gradient">Your Next Event?</span>
          </h2>
          <p className="text-[#a89f8c] text-lg leading-relaxed max-w-xl mx-auto">
            Whether you have a detailed brief or just a vision — a retreat, an experience, an event — tell us what you&apos;re imagining and we&apos;ll take it from there.
          </p>
        </div>

        {/* Two column: form + details */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">

          {/* Form */}
          <div className="border border-[#D4B680]/25 bg-[#2a2a27]/60 backdrop-blur-sm overflow-hidden">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4B680] to-transparent" />
            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-[#D4B680]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1C] mb-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>Message Ready to Send</h3>
                  <p className="text-[#5a5248] text-sm">Your email client should have opened. We&apos;ll be in touch soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-xs tracking-widest uppercase text-[#D4B680] hover:text-[#b89660] transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-2">Name *</label>
                      <input
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full bg-[#1F1F1C] border border-[#D4B680]/30 px-4 py-3 text-sm text-[#F4F0E4] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-2">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[#1F1F1C] border border-[#D4B680]/30 px-4 py-3 text-sm text-[#F4F0E4] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-2">Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="w-full bg-[#1F1F1C] border border-[#D4B680]/30 px-4 py-3 text-sm text-[#F4F0E4] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-2">Event Type</label>
                      <select
                        name="eventType"
                        className="w-full bg-[#1F1F1C] border border-[#D4B680]/30 px-4 py-3 text-sm text-[#F4F0E4] focus:outline-none focus:border-[#D4B680] transition-colors appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option>Talent Procurement</option>
                        <option>Fashion Event & Production</option>
                        <option>Retreat or Immersive Experience</option>
                        <option>Personalised Curated Experience</option>
                        <option>Onsite Talent Management</option>
                        <option>Brand Activation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium tracking-widest uppercase text-[#D4B680] mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your vision — what you're creating, your timeline, and what matters most to you..."
                      className="w-full bg-[#1F1F1C] border border-[#D4B680]/30 px-4 py-3 text-sm text-[#F4F0E4] placeholder-[#a89f8c] focus:outline-none focus:border-[#D4B680] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-medium tracking-widest uppercase bg-[#D4B680] text-[#111111] hover:bg-[#e8cfa0] transition-all duration-200"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-6 lg:pt-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#D4B680]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#D4B680]">Email</span>
              </div>
              <a href={`mailto:${email}`} className="text-[#F4F0E4] text-sm font-medium hover:text-[#D4B680] transition-colors break-all">
                {email}
              </a>
            </div>

            <div className="h-px bg-[#D4B680]/20" />

            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#D4B680]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#D4B680]">Location</span>
              </div>
              <p className="text-[#F4F0E4] text-sm font-medium">Australia-wide</p>
            </div>

            <div className="h-px bg-[#D4B680]/20" />

            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#D4B680]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4B680]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#D4B680]">Response Time</span>
              </div>
              <p className="text-[#F4F0E4] text-sm font-medium">Within 24 hours</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
