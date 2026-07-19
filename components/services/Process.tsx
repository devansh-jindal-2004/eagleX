"use client";

import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    icon: Search,
    desc: "Understanding your business goals, audience and project requirements.",
  },
  {
    step: "02",
    title: "Strategy",
    icon: Lightbulb,
    desc: "Planning the roadmap, architecture and selecting the right technologies.",
  },
  {
    step: "03",
    title: "Design",
    icon: PenTool,
    desc: "Designing intuitive user experiences and beautiful interfaces.",
  },
  {
    step: "04",
    title: "Development",
    icon: Code2,
    desc: "Building scalable, secure and high-performance digital products.",
  },
  {
    step: "05",
    title: "Launch",
    icon: Rocket,
    desc: "Testing, deploying and ensuring everything performs flawlessly.",
  },
  {
    step: "06",
    title: "Support",
    icon: Headphones,
    desc: "Continuous improvements, maintenance and long-term partnership.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#0E1117] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Process
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Simple Process.
            <span className="block text-[#D4AF37]">
              Exceptional Results.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#9CA3AF]">
            Every successful project follows a structured workflow that
            ensures quality, transparency and timely delivery.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent lg:block" />

          <div className="space-y-4">
            {PROCESS.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`flex flex-col items-center gap-3 ${
                    left ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}

                  <div
                    className={`w-full ${
                      left
                        ? "lg:max-w-[420px] lg:mr-8"
                        : "lg:max-w-[420px] lg:ml-8"
                    }`}
                  >
                    <div className="rounded-xl border border-[#D4AF37]/10 bg-[#161B22] px-5 py-4 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_12px_30px_rgba(212,175,55,.08)]">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                          <Icon
                            size={18}
                            className="text-[#D4AF37]"
                          />
                        </div>

                        <span className="text-xl font-bold text-[#D4AF37]/20">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-6 text-[#9CA3AF]">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}

                  <div className="relative z-10 hidden h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#0E1117] bg-[#D4AF37] lg:flex" />

                  {/* Empty Side */}

                  <div className="hidden lg:flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}