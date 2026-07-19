"use client"
import { useEffect, useMemo, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO • FinTech",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    quote:
      "Working with EagleX Nexus completely transformed our digital infrastructure. Their attention to detail and execution exceeded every expectation.",
  },
  {
    name: "Michael Carter",
    role: "CTO • Cloudify",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    quote:
      "A highly skilled engineering team that genuinely understands business challenges instead of just writing code.",
  },
  {
    name: "Emily Davis",
    role: "Founder • HealthAI",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    quote:
      "The project was delivered ahead of schedule with exceptional quality. Communication was transparent from day one.",
  },
  {
    name: "James Wilson",
    role: "Director • SecureTech",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop",
    quote:
      "Security, performance and scalability were considered in every decision. Exactly what we needed.",
  },
  {
    name: "Sophia Miller",
    role: "COO • GrowthLabs",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
    quote:
      "One of the best technology partners we've ever worked with. Professional, proactive and incredibly talented.",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
 const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const visible = useMemo(() => {
    return [
      TESTIMONIALS[start % TESTIMONIALS.length],
      TESTIMONIALS[(start + 1) % TESTIMONIALS.length],
      TESTIMONIALS[(start + 2) % TESTIMONIALS.length],
    ];
  }, [start]);

  const next = () =>
    setStart((p) => (p + 1) % TESTIMONIALS.length);

  useEffect(() => {
    timer.current = setInterval(next, 4500);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const pause = () => {
    if (timer.current) clearInterval(timer.current);
  };

  const resume = () => {
    timer.current = setInterval(next, 4500);
  };

  return (
    <section id="testimonials" className="bg-[#11161E] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Trusted By Companies Worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#9CA3AF]">
            Real experiences from businesses that trusted us with their
            digital transformation.
          </p>
        </div>

        <div
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visible.map((item, index) => (
            <article
              key={`${item.name}-${start}-${index}`}
              className="group rounded-3xl border border-[#D4AF37]/10 bg-[#161B22] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <Quote
                  size={28}
                  className="text-[#D4AF37]/60 transition group-hover:scale-110"
                />

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      className="text-[#D4AF37]"
                    />
                  ))}
                </div>
              </div>

              <p className="min-h-[140px] text-[15px] leading-8 text-[#D1D5DB]">
                "{item.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-[#D4AF37]/10 pt-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full border border-[#D4AF37]/20 object-cover"
                />

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#9CA3AF]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className={`h-2 rounded-full transition-all ${
                i === start
                  ? "w-8 bg-[#D4AF37]"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}