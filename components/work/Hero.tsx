"use client";

import {
  ArrowRight,
  Sparkles,
  Globe,
  Bot,
  Smartphone,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

export default function WorkHero() {
  const categories = [
    "All Projects",
    "Web Apps",
    "AI Automation",
    "Mobile Apps",
    "UI / UX",
    "Enterprise",
  ];

  const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "35+", label: "Clients Worldwide" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Industries" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1117] pt-36">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#161B22] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            <Sparkles size={14} />
            Our Portfolio
          </div>

          {/* Heading */}

          <h1 className="mt-7 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Building Digital
            <span className="block text-[#D4AF37]">
              Experiences That Matter
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#9CA3AF]">
            Every project reflects our commitment to quality, innovation and
            measurable business growth. Explore solutions crafted for startups,
            enterprises and ambitious brands.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-7 py-3.5 font-semibold text-[#111111] transition hover:scale-[1.02]">
              Explore Projects
              <ArrowRight size={16} />
            </button>

            <button className="rounded-xl border border-[#D4AF37]/15 bg-[#161B22] px-7 py-3.5 font-medium text-white transition hover:border-[#D4AF37]/30">
              Case Studies
            </button>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-5 rounded-2xl border border-[#D4AF37]/10 bg-[#161B22]/70 p-6 backdrop-blur lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-[#9CA3AF]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 border-t border-[#D4AF37]/10 py-8 text-[#808892]">
            <div className="flex items-center gap-2">
              <Globe size={17} />
              <span className="text-sm">Web Platforms</span>
            </div>

            <div className="flex items-center gap-2">
              <Bot size={17} />
              <span className="text-sm">AI Automation</span>
            </div>

            <div className="flex items-center gap-2">
              <Smartphone size={17} />
              <span className="text-sm">Mobile Apps</span>
            </div>

            <div className="flex items-center gap-2">
              <LayoutDashboard size={17} />
              <span className="text-sm">Enterprise Software</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}