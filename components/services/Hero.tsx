import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#D4AF37]/10 bg-[#11161E]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF3720 1px,transparent 1px),linear-gradient(90deg,#D4AF3720 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        {/* Badge */}

        <div className="mb-6 flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
          <Sparkles size={14} />
          Our Services
        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Digital Solutions
          <span className="block bg-gradient-to-r from-[#F5D77B] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
            Designed to Scale.
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-[#9CA3AF]">
          From modern websites and enterprise software to AI automation
          and cloud infrastructure, we create reliable digital
          experiences that help businesses innovate, grow and stay ahead
          of the competition.
        </p>

        {/* CTA */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-7 py-3.5 font-semibold text-[#11161E] transition-all duration-300 hover:scale-105">
            Start Your Project

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-full border border-[#D4AF37]/20 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10">
            Explore Services
          </button>
        </div>

        {/* Quick Stats */}

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-5 border-t border-[#D4AF37]/10 pt-10 md:grid-cols-4">
          {[
            ["25+", "Services"],
            ["100+", "Projects Delivered"],
            ["15+", "Industries Served"],
            ["99%", "Client Satisfaction"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-3xl font-bold text-white">{value}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}