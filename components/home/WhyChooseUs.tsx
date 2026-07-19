import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Security First",
    desc: "Enterprise-grade protection integrated into every solution.",
    icon: ShieldCheck,
  },
  {
    title: "AI Native",
    desc: "Intelligent automation that improves productivity and efficiency.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Ready",
    desc: "Scalable infrastructure built for reliability and future growth.",
    icon: Cloud,
  },
  {
    title: "Dedicated Team",
    desc: "Experienced engineers committed to your long-term success.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#11161E] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[420px_1fr]">
          {/* Left */}

          <div className="sticky top-28">
            <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
              Why Businesses
              <span className="block text-[#D4AF37]">
                Trust EagleX Nexus
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#9CA3AF]">
              We build secure, intelligent and scalable software that
              helps businesses innovate faster while maintaining the
              highest engineering standards.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
              Work With Us
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right */}

          <div className="space-y-1 rounded-3xl border border-[#D4AF37]/10 bg-[#161B22]">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-5 border-b border-[#D4AF37]/10 px-7 py-6 last:border-none transition hover:bg-white/[0.02]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#9CA3AF]">
                      {item.desc}
                    </p>
                  </div>

                  <BadgeCheck
                    size={20}
                    className="text-[#D4AF37] opacity-60 transition group-hover:opacity-100"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}