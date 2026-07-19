"use client";

import { ArrowRight, Check } from "lucide-react";

const PLANS = [
  {
    title: "Starter Project",
    subtitle: "Perfect for landing pages, portfolios and small business websites.",
    price: "Starting at $999",
    featured: false,
    features: [
      "Fixed Scope",
      "2–3 Week Delivery",
      "Responsive Design",
      "SEO Ready",
      "Source Code Included",
    ],
    cta: "Request Quote",
  },
  {
    title: "Growth Partnership",
    subtitle: "Ideal for startups building products and scaling continuously.",
    price: "Monthly Engagement",
    featured: true,
    features: [
      "Dedicated Team",
      "Weekly Releases",
      "Unlimited Revisions",
      "Priority Support",
      "Project Manager",
    ],
    cta: "Schedule Call",
  },
  {
    title: "Enterprise Solution",
    subtitle: "Custom software, AI automation and enterprise-grade platforms.",
    price: "Custom Pricing",
    featured: false,
    features: [
      "Custom Architecture",
      "NDA Available",
      "Scalable Infrastructure",
      "Security First",
      "Long-Term Support",
    ],
    cta: "Talk to Expert",
  },
];

const BENEFITS = [
  "Free Discovery Call",
  "Transparent Pricing",
  "Flexible Payment Milestones",
  "Dedicated Project Manager",
  "Source Code Ownership",
  "Post Launch Support",
];

export default function Pricing() {
  return (
    <section className="bg-[#0E1117] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Engagement Models
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Flexible Pricing
            <span className="block text-[#D4AF37]">
              Designed Around Your Goals
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#9CA3AF]">
            Every business is different. Choose an engagement model that fits
            your project, timeline and growth stage.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? "border-[#D4AF37]/30 bg-[#161B22] shadow-[0_20px_60px_rgba(212,175,55,.08)]"
                  : "border-[#D4AF37]/10 bg-[#141922] hover:border-[#D4AF37]/25"
              }`}
            >
              {plan.featured && (
                <div className="rounded-t-2xl bg-[#D4AF37] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#111111]">
                  Most Popular
                </div>
              )}

              <div className="p-7">
                <h3 className="text-xl font-semibold text-white">
                  {plan.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#9CA3AF]">
                  {plan.subtitle}
                </p>

                <div className="my-7 border-y border-[#D4AF37]/10 py-5">
                  <p className="text-2xl font-bold text-[#D4AF37]">
                    {plan.price}
                  </p>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                        <Check
                          size={14}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      <span className="text-sm text-[#D1D5DB]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:scale-[1.02]">
                  {plan.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#D4AF37]/10 bg-[#141922] p-8">
          <h3 className="mb-8 text-center text-xl font-semibold text-white">
            Every Project Includes
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#161B22] px-5 py-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Check
                    size={16}
                    className="text-[#D4AF37]"
                  />
                </div>

                <span className="text-sm text-[#D1D5DB]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}