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
    <section
      id="why"
      className="bg-[#11161E] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:px-4 sm:text-[11px]">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Why Businesses
              <span className="block text-[#D4AF37]">
                Trust EagleX Nexus
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#9CA3AF] sm:text-[15px]">
              We build secure, intelligent and scalable software that
              helps businesses innovate faster while maintaining the
              highest engineering standards.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 sm:px-6">
              Work With Us
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#161B22] sm:rounded-3xl">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 border-b border-[#D4AF37]/10 px-5 py-5 transition hover:bg-white/[0.02] last:border-none sm:items-center sm:gap-5 sm:px-7 sm:py-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] sm:h-11 sm:w-11">
                    <Icon size={18} className="sm:h-5 sm:w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold text-white sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-6 text-[#9CA3AF] sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <BadgeCheck
                    size={18}
                    className="mt-1 shrink-0 text-[#D4AF37] opacity-60 transition group-hover:opacity-100 sm:mt-0 sm:h-5 sm:w-5"
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