"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  GitBranch,
} from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AI CRM Platform",
    category: "AI Automation",
    image: "/projects/project-1.jpg",
    short: "AI-powered CRM with workflow automation.",
    description:
      "Built a scalable CRM featuring AI workflows, analytics, RBAC and automation engine.",
    stack: ["Next.js", "Node.js", "MongoDB", "OpenAI"],
    results: ["85% Faster Workflow", "12K Users", "99.9% Uptime"],
  },
  {
    id: 2,
    title: "Luxury E-Commerce",
    category: "E-Commerce",
    image: "/projects/project-2.jpg",
    short: "Premium shopping experience.",
    description:
      "Luxury ecommerce platform optimized for conversions and performance.",
    stack: ["Next.js", "Stripe", "MongoDB"],
    results: ["2x Conversion", "SEO Ready", "Fast Checkout"],
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "Dashboard",
    image: "/projects/project-3.jpg",
    short: "Enterprise reporting system.",
    description:
      "Analytics dashboard with secure reporting and real-time insights.",
    stack: ["React", "Node", "Postgres"],
    results: ["Realtime Data", "HIPAA Ready", "Secure"],
  },
  {
    id: 4,
    title: "Education Platform",
    category: "EdTech",
    image: "/projects/project-4.jpg",
    short: "Complete learning ecosystem.",
    description:
      "Learning platform with assessments, analytics and certifications.",
    stack: ["Next.js", "AWS", "Prisma"],
    results: ["10K Students", "Live Classes", "Certificates"],
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#0E1117] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Work That Speaks For Itself
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9CA3AF]">
            Explore a curated collection of projects across AI, SaaS,
            enterprise software and modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => {
            const expanded = active === project.id;

            return (
              <motion.div
                layout
                transition={{ duration: 0.35 }}
                key={project.id}
                className={`overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#161B22] hover:border-[#D4AF37]/30 ${
                  expanded ? "sm:col-span-2 lg:col-span-4" : ""
                }`}
              >
                <div
                  onClick={() =>
                    setActive(expanded ? null : project.id)
                  }
                  className="cursor-pointer"
                >
                  <div
                    className={
                      expanded
                        ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]"
                        : ""
                    }
                  >
                    <div
                      className={`overflow-hidden bg-[#20252F] ${
                        expanded
                          ? "aspect-[16/7]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>

                    <div className={expanded ? "p-6" : "p-4"}>
                      <span className="rounded-full bg-[#D4AF37]/10 px-2.5 py-1 text-[11px] font-medium text-[#D4AF37]">
                        {project.category}
                      </span>

                      <h3
                        className={`mt-3 font-semibold text-white ${
                          expanded ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`mt-2 text-[#9CA3AF] ${
                          expanded
                            ? "text-sm leading-7"
                            : "line-clamp-2 text-xs leading-6"
                        }`}
                      >
                        {expanded
                          ? project.description
                          : project.short}
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          expanded ? "mt-6" : "mt-4"
                        }`}
                      >
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-2.5 py-1 text-[11px] text-[#D4AF37]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <button className="flex items-center gap-2 text-sm text-[#D4AF37]">
                          {expanded
                            ? "Show Less"
                            : "View Details"}

                          <ChevronDown
                            size={15}
                            className={`transition ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div className="flex gap-2">
                          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/10 text-[#D4AF37]">
                            <GitBranch size={16} />
                          </button>

                          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/10 text-[#D4AF37]">
                            <ExternalLink size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden border-t border-[#D4AF37]/10"
                      >
                        <div className="grid gap-4 p-6 md:grid-cols-3">
                          {project.results.map((item) => (
                            <div
                              key={item}
                              className="rounded-xl bg-[#1C222C] p-5"
                            >
                              <h4 className="text-lg font-semibold text-white">
                                {item}
                              </h4>

                              <p className="mt-2 text-xs text-[#9CA3AF]">
                                Project achievement
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="px-6 pb-6">
                          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-6 py-3 text-sm font-semibold text-[#111111]">
                            View Case Study
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}