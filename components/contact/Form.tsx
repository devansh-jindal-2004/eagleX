"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Mail,
  MessageSquareText,
  Phone,
  User,
} from "lucide-react";

const PROJECT_TYPES = [
  "Web Development",
  "AI Automation",
  "Mobile Application",
  "UI / UX Design",
  "Cloud & Backend",
  "Enterprise Software",
];

const BUDGET_OPTIONS = [
  "Select estimated budget",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "Not decided yet",
];

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[#0E1117] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[340px] w-[340px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              Contact Us
            </span>

            <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl">
              Tell Us About Your
              <span className="block text-[#D4AF37]">Next Big Idea.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#9CA3AF] sm:text-base">
              Share a few details about your project, business goals and
              expectations. Our team will review your requirements and help you
              identify the right direction.
            </p>

            <div className="mt-8 space-y-5 border-t border-white/10 pt-7">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#717986]">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    hello@eaglexnexus.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#717986]">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MessageSquareText size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#717986]">
                    Response Time
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#161B22] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-7 lg:p-8">
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <p className="text-lg font-semibold text-white">
                  Project Enquiry
                </p>
                <p className="mt-1 text-sm text-[#7F8793]">
                  Fill in the details below.
                </p>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] sm:flex">
                <BriefcaseBusiness size={20} />
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#69717E]"
                    />

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0E1117] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-[#5F6672] focus:border-[#D4AF37]/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#69717E]"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0E1117] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-[#5F6672] focus:border-[#D4AF37]/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#69717E]"
                    />

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0E1117] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-[#5F6672] focus:border-[#D4AF37]/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Company Name
                    <span className="ml-1 text-xs font-normal text-[#69717E]">
                      Optional
                    </span>
                  </label>

                  <div className="relative">
                    <Building2
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#69717E]"
                    />

                    <input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0E1117] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-[#5F6672] focus:border-[#D4AF37]/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="project-type"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Project Type
                  </label>

                  <select
                    id="project-type"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0E1117] px-4 text-sm text-white outline-none transition focus:border-[#D4AF37]/50"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    defaultValue={BUDGET_OPTIONS[0]}
                    className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0E1117] px-4 text-sm text-white outline-none transition focus:border-[#D4AF37]/50"
                  >
                    {BUDGET_OPTIONS.map((budget, index) => (
                      <option
                        key={budget}
                        value={budget}
                        disabled={index === 0}
                      >
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, timeline and any specific requirements..."
                  className="min-h-[150px] w-full resize-none rounded-xl border border-white/[0.08] bg-[#0E1117] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-[#5F6672] focus:border-[#D4AF37]/50"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-[#0E1117] accent-[#D4AF37]"
                />

                <label
                  htmlFor="privacy"
                  className="text-xs leading-5 text-[#7F8793]"
                >
                  I agree that EagleX Nexus may use the information provided to
                  contact me regarding this enquiry.
                </label>
              </div>

              <button
                type="button"
                className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0E1117] transition hover:bg-[#E1C15A] sm:w-auto"
              >
                Submit Enquiry
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}