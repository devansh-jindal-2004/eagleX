import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#161B22]">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-14 lg:flex-row">
        {/* Left */}

        <div className="flex items-center gap-6">
          <img
            src="/logo.png"
            alt="EagleX Nexus"
            className="h-16 w-16 object-contain"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              EagleX Nexus
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Let's Build What's Next.
            </h2>

            <p className="mt-3 max-w-xl text-[#9CA3AF]">
              Every successful product starts with one decision.
              Make yours today.
            </p>
          </div>
        </div>

        {/* Right */}

        <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-8 py-4 font-semibold text-[#11161E] transition duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(212,175,55,.25)]">
          Start Your Project

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}