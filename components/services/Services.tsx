"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Bot,
  Palette,
  Cloud,
  Database,
} from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    icon: Globe,
    short: "Modern & scalable websites",
    desc:
      "Fast, SEO-optimized, responsive websites and web applications built for performance and growth.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL"],
    features: [
      "Corporate Websites",
      "Business Portals",
      "Admin Dashboards",
      "E-Commerce",
      "Custom CMS",
    ],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    short: "Android & iOS apps",
    desc:
      "Beautiful mobile experiences with native performance and scalable architecture.",
    tech: ["React Native", "Flutter", "Firebase", "Supabase"],
    features: [
      "Android",
      "iOS",
      "Authentication",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    title: "AI Automation",
    icon: Bot,
    short: "Automate your business",
    desc:
      "LLM powered automation, AI agents and workflow systems that save time and increase productivity.",
    tech: ["OpenAI", "LangChain", "Python", "n8n", "MCP"],
    features: [
      "AI Agents",
      "Chatbots",
      "Workflow Automation",
      "RAG",
      "Internal Tools",
    ],
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    short: "Premium digital experiences",
    desc:
      "Modern interfaces focused on usability, accessibility and conversion.",
    tech: ["Figma", "Adobe XD", "Design Systems"],
    features: [
      "Wireframes",
      "Prototype",
      "Dashboard Design",
      "Mobile UI",
      "Brand Identity",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    short: "Deploy with confidence",
    desc:
      "Reliable cloud infrastructure, CI/CD pipelines and scalable deployment solutions.",
    tech: ["AWS", "Docker", "Vercel", "GitHub Actions"],
    features: [
      "CI/CD",
      "Docker",
      "Monitoring",
      "Hosting",
      "Optimization",
    ],
  },
  {
    title: "Backend Systems",
    icon: Database,
    short: "Powerful APIs",
    desc:
      "Secure backend systems and APIs designed for enterprise-grade applications.",
    tech: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    features: [
      "REST API",
      "Authentication",
      "Database Design",
      "Payments",
      "Security",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#0E1117] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Services
          </p>

          <h2 className="text-4xl font-bold text-white">
            Everything Your Business Needs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#9CA3AF]">
            Click any service to explore what we offer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const expanded = active === index;

            return (
              <motion.div
                layout
                key={service.title}
                transition={{ duration: 0.35 }}
                className={
                  expanded
                    ? "md:col-span-2 lg:col-span-3"
                    : ""
                }
              >
                <motion.div
                  layout
                  onClick={() =>
                    setActive(expanded ? null : index)
                  }
                  className={`cursor-pointer overflow-hidden rounded-3xl border transition-all ${
                    expanded
                      ? "border-[#D4AF37]/30 bg-[#161B22] shadow-[0_25px_80px_rgba(212,175,55,.12)]"
                      : "border-[#D4AF37]/10 bg-[#141922] hover:border-[#D4AF37]/30"
                  }`}
                >
                  {!expanded ? (
                    <div className="p-7">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                        <Icon
                          size={26}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      <h3 className="mb-2 text-xl font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-7 text-[#9CA3AF]">
                        {service.short}
                      </p>

                      <ArrowRight className="mt-8 text-[#D4AF37]" />
                    </div>
                  ) : (
                    <AnimatePresence>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid gap-10 p-10 lg:grid-cols-2"
                      >
                        <div>
                          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                            <Icon
                              size={30}
                              className="text-[#D4AF37]"
                            />
                          </div>

                          <h3 className="mb-5 text-3xl font-bold text-white">
                            {service.title}
                          </h3>

                          <p className="leading-8 text-[#9CA3AF]">
                            {service.desc}
                          </p>

                          <div className="mt-8 flex flex-wrap gap-3">
                            {service.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#D4AF37]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <button className="mt-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-6 py-3 font-semibold text-[#111]">
                            Start Project
                            <ArrowRight size={16} />
                          </button>
                        </div>

                        <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11161E] p-8">
                          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                            Included
                          </p>

                          <div className="grid gap-4">
                            {service.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#161B22] px-5 py-4 text-white"
                              >
                                <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}