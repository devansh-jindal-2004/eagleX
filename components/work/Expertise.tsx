"use client";

import {
  BrainCircuit,
  Globe,
  Smartphone,
  Palette,
  Database,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const EXPERTISE = [
  {
    title: "Web Development",
    icon: Globe,
    projects: "40+",
    description:
      "Websites, SaaS platforms, dashboards and scalable web applications.",
    tech: ["Next.js", "React", "Node.js"],
  },
  {
    title: "AI Automation",
    icon: BrainCircuit,
    projects: "18+",
    description:
      "AI agents, RAG systems, chatbots and intelligent business workflows.",
    tech: ["OpenAI", "RAG", "LangChain"],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    projects: "12+",
    description:
      "Cross-platform mobile applications with reliable performance.",
    tech: ["Flutter", "React Native"],
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    projects: "60+",
    description:
      "User-focused interfaces, prototypes and scalable design systems.",
    tech: ["Figma", "Design Systems"],
  },
  {
    title: "Cloud & Backend",
    icon: Database,
    projects: "30+",
    description:
      "Secure APIs, databases, cloud deployments and backend architecture.",
    tech: ["AWS", "Docker", "MongoDB"],
  },
  {
    title: "Enterprise Software",
    icon: Building2,
    projects: "15+",
    description:
      "Custom internal tools, ERP systems, CRMs and business platforms.",
    tech: ["ERP", "CRM", "Dashboards"],
  },
];

export default function DevelopmentExpertise() {
  return (
    <section className="bg-[#0E1117] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Development Expertise
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Capabilities Built Around
              <span className="block text-[#D4AF37]">
                Real Product Needs
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#9CA3AF]">
              From product design to cloud infrastructure, we bring together
              the skills required to build complete and scalable digital
              solutions.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-[#D4AF37]/10 pt-6">
              <span className="text-3xl font-bold text-white">175+</span>

              <span className="max-w-[120px] text-xs leading-5 text-[#9CA3AF]">
                projects delivered across multiple platforms
              </span>
            </div>
          </div>

          <div className="border-y border-[#D4AF37]/10">
            {EXPERTISE.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group grid gap-4 py-5 transition-colors hover:bg-white/[0.02] sm:grid-cols-[48px_180px_1fr_auto] sm:items-center sm:px-4 ${
                    index !== EXPERTISE.length - 1
                      ? "border-b border-[#D4AF37]/10"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#D4AF37]">
                      {item.projects} projects
                    </p>
                  </div>

                  <div>
                    <p className="text-sm leading-6 text-[#9CA3AF]">
                      {item.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] text-[#7F8793]"
                        >
                          {tech}
                          <span className="ml-2 text-[#D4AF37]/40">•</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}