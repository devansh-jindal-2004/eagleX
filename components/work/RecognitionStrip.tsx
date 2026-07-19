"use client";

import {
  Trophy,
  ShieldCheck,
  Rocket,
  Sparkles,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Trophy,
    title: "40+ Successful Launches",
    description: "From startup MVPs to enterprise platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Ready",
    description: "Built with scalability, security and maintainability.",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Fast-loading experiences optimized for real users.",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Solutions",
    description: "Leveraging modern AI to automate and accelerate businesses.",
  },
];

export default function RecognitionStrip() {
  return (
    <section className="py-20 bg-[#0E1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#161B22] overflow-hidden">
          <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#D4AF37]/10">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="group relative p-8 transition-all duration-300 hover:bg-[#1B212B]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition group-hover:scale-110">
                    <item.icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white leading-none">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#9CA3AF]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Mini Stats */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Trusted by startups & businesses
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Modern technology stack
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Long-term technical partnership
          </div>
        </div>
      </div>
    </section>
  );
}