"use client"
import { ArrowRight, Shield, BrainCircuit, ChevronRight } from "lucide-react";

const pillars = [
  "Artificial Intelligence",
  "Cyber Security",
  "Cloud Infrastructure",
  "Enterprise Software",
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0E1117] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF3720 1px,transparent 1px),linear-gradient(90deg,#D4AF3720 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#F2C14E]">
              <Shield size={14} />
              Trusted Enterprise Technology Partner
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] md:text-7xl">
              Engineering
              <span className="block text-[#D4AF37]">
                Intelligent
              </span>
              Digital Future
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#A1A8B3]">
              We help ambitious businesses build secure AI systems,
              resilient cloud platforms and enterprise software
              engineered for performance, security and long-term
              growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 rounded-full border border-[#D4AF37]/20 px-7 py-4 text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
              >
                Explore Services
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {pillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D4AF37]/15 bg-white/[0.03] px-4 py-2 text-sm text-[#D4AF37]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute h-[560px] w-[560px] rounded-full border border-[#D4AF37]/10" />

            <div className="absolute h-[430px] w-[430px] rounded-full border border-[#D4AF37]/10" />

            <div className="absolute h-[300px] w-[300px] rounded-full border border-[#D4AF37]/15" />

            {/* Orbit Points */}
            <span className="absolute left-12 top-24 h-3 w-3 rounded-full bg-[#D4AF37]" />
            <span className="absolute right-20 top-20 h-3 w-3 rounded-full bg-[#D4AF37]" />
            <span className="absolute bottom-20 left-24 h-3 w-3 rounded-full bg-[#D4AF37]" />
            <span className="absolute bottom-24 right-16 h-3 w-3 rounded-full bg-[#D4AF37]" />

            {/* Connecting Lines */}
            <div className="absolute left-20 top-28 h-px w-40 bg-[#D4AF37]/30" />
            <div className="absolute right-20 top-28 h-px w-32 bg-[#D4AF37]/30" />
            <div className="absolute bottom-28 left-24 h-px w-40 bg-[#D4AF37]/30" />
            <div className="absolute bottom-28 right-16 h-px w-32 bg-[#D4AF37]/30" />

            {/* Logo Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[120px]" />

            {/* Logo */}
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#161B22]/70 backdrop-blur-xl">
              <img
                src="/logo.png"
                alt="EagleX Nexus"
                className="h-40 w-auto object-contain"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute left-0 top-24 rounded-2xl border border-[#D4AF37]/15 bg-[#161B22]/90 p-5 backdrop-blur">
              <BrainCircuit className="mb-3 text-[#D4AF37]" size={26} />
              <p className="text-sm font-semibold">
                AI Automation
              </p>
              <span className="text-xs text-[#A1A8B3]">
                Intelligent Workflows
              </span>
            </div>

            <div className="absolute bottom-24 right-0 rounded-2xl border border-[#D4AF37]/15 bg-[#161B22]/90 p-5 backdrop-blur">
              <Shield className="mb-3 text-[#D4AF37]" size={26} />
              <p className="text-sm font-semibold">
                Cyber Security
              </p>
              <span className="text-xs text-[#A1A8B3]">
                Enterprise Protection
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust */}
      <div className="relative border-t border-[#D4AF37]/10 bg-[#11161E]/80 mt-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-8">
          <p className="text-sm uppercase tracking-[0.25em] text-[#A1A8B3]">
            Trusted Technologies
          </p>

          <div className="flex flex-wrap gap-10 text-[#D4AF37]/80">
            <span>Artificial Intelligence</span>
            <span>Cyber Security</span>
            <span>Cloud</span>
            <span>Automation</span>
            <span>DevOps</span>
          </div>
        </div>
      </div>
    </section>
  );
}