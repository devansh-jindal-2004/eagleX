"use client";

import { TrendingUp, Clock3, ShieldCheck, Users, Rocket, BadgeCheck } from "lucide-react";

const RESULTS = [
  {
    icon: TrendingUp,
    value: "240%",
    label: "Average Growth",
    description: "Improved traffic, engagement and overall business performance.",
  },
  {
    icon: Clock3,
    value: "3x",
    label: "Faster Delivery",
    description: "Modern workflows that accelerate development and deployment.",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Average Uptime",
    description: "Reliable cloud infrastructure built for production workloads.",
  },
  {
    icon: Users,
    value: "4M+",
    label: "Users Served",
    description: "Applications powering businesses and customers worldwide.",
  },
  {
    icon: Rocket,
    value: "120+",
    label: "Projects Delivered",
    description: "Successful launches across startups and enterprises.",
  },
  {
    icon: BadgeCheck,
    value: "96%",
    label: "Client Satisfaction",
    description: "Long-term partnerships built on quality and trust.",
  },
];

export default function ImpactResults() {
  return (
    <section className="py-24 bg-[#0E1117]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Impact & Results
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Every Project Should Create
              <span className="block text-[#D4AF37]">
                Measurable Business Value
              </span>
            </h2>

            <p className="mt-5 text-[#9CA3AF] leading-8">
              Beautiful interfaces are only part of the story. We focus on
              delivering software that improves efficiency, scales with your
              business and produces measurable outcomes.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#161B22] px-7 py-6">
            <p className="text-sm text-[#9CA3AF]">
              Businesses trust us because we build
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              Products That Perform.
            </h3>
          </div>
        </div>

        {/* Results Grid */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#161B22] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
            >
              {/* Glow */}

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#D4AF37]/5 blur-3xl transition group-hover:bg-[#D4AF37]/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <item.icon size={22} />
                </div>

                <h3 className="mt-8 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-lg font-semibold text-white">
                  {item.label}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#9CA3AF]">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-12 rounded-full bg-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}

        <div className="mt-14 rounded-2xl border border-[#D4AF37]/10 bg-[#161B22] px-8 py-7">
          <div className="grid gap-8 lg:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-white">35+</p>
              <span className="text-sm text-[#9CA3AF]">
                Happy Clients
              </span>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">12+</p>
              <span className="text-sm text-[#9CA3AF]">
                Industries Served
              </span>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">8+</p>
              <span className="text-sm text-[#9CA3AF]">
                Years of Combined Experience
              </span>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#D4AF37]">
                100%
              </p>
              <span className="text-sm text-[#9CA3AF]">
                Commitment to Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
);
}