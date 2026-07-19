"use client"
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Banking Platform",
    category: "FinTech",
    desc: "A secure digital banking ecosystem designed to handle millions of daily transactions with enterprise-grade security and cloud scalability.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "AI Automation Suite",
    category: "Artificial Intelligence",
    desc: "An intelligent automation platform helping enterprises streamline workflows using custom AI agents and LLM integrations.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
    tags: ["Next.js", "Python", "OpenAI", "Docker"],
  },
  {
    title: "Cloud Infrastructure",
    category: "Cloud",
    desc: "Cloud-native infrastructure built for high availability, disaster recovery and seamless scalability.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const startAutoSlide = () => {
    if (timer.current) clearInterval(timer.current);

    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const project = projects[active];

  return (
    <section id="projects" className="bg-[#0E1117] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Featured Work
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white">
              Projects That Deliver Results
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#9CA3AF]">
              Every project represents a real business challenge solved
              through technology, innovation and engineering excellence.
            </p>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => {
                prev();
                startAutoSlide();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/20 text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => {
                next();
                startAutoSlide();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/20 text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          className="overflow-hidden rounded-3xl border border-[#D4AF37]/10 bg-[#161B22]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                key={project.image}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-10">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                {project.category}
              </span>

              <h3 className="mt-4 text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-6 leading-8 text-[#9CA3AF]">
                {project.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium text-[#D4AF37]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-10 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
                View Case Study
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-[#6B7280]">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>

          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  startAutoSlide();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-10 bg-[#D4AF37]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}