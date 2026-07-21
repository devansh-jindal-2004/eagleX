"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@eaglexnexus.com",
    href: "mailto:hello@eaglexnexus.com",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: MessageSquare,
    label: "Response",
    value: "Within 24 hours",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E1117] pt-24 text-white sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-160px] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[110px] sm:h-[480px] sm:w-[480px] lg:left-[72%] lg:top-[-220px] lg:h-[650px] lg:w-[650px]" />

        <div className="absolute -bottom-40 -left-40 h-[320px] w-[320px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0E1117]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 pb-14 sm:pb-18 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-12 lg:pb-24 xl:gap-20">
          <div className="relative min-w-0 text-center lg:text-left">
            <Image
              src="/logo.png"
              alt=""
              width={240}
              height={240}
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-10 h-auto w-40 rotate-[-8deg] object-contain opacity-[0.035] sm:right-2 sm:w-52 lg:hidden"
            />

            <div className="relative inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 py-1.5 pl-1.5 pr-3 sm:pr-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#161B22]">
                <Image
                  src="/logo.png"
                  alt="EagleX Nexus"
                  width={28}
                  height={28}
                  priority
                  className="h-6 w-6 object-contain"
                />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-xs sm:tracking-[0.22em]">
                Start a Conversation
              </span>
            </div>

            <h1 className="relative mx-auto mt-5 max-w-[820px] text-[2.45rem] font-bold leading-[1.05] tracking-[-0.045em] sm:mt-6 sm:text-5xl md:text-6xl lg:mx-0 lg:text-[58px] xl:text-[68px]">
              Let&apos;s Build Something
              <span className="mt-1 block text-[#D4AF37] sm:mt-2">
                Worth Remembering.
              </span>
            </h1>

            <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#9CA3AF] sm:mt-6 sm:text-base sm:leading-8 lg:mx-0">
              Have a project, product idea or business challenge? Share the
              details with our team and let&apos;s explore how technology can
              move your vision forward.
            </p>

            <div className="relative mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#contact-form"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0E1117] transition hover:bg-[#E1C15A] sm:w-auto"
              >
                Start Your Project
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 sm:w-auto"
              >
                View Our Work
              </Link>
            </div>

            <div className="relative mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-3 lg:max-w-2xl">
              {CONTACT_OPTIONS.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-3 text-left transition hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/[0.035]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#717986]">
                        {item.label}
                      </p>

                      <p className="mt-1 break-words text-xs font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="min-w-0">
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="min-w-0">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative ml-auto hidden w-full max-w-[470px] items-center justify-center lg:flex">
            <div className="relative aspect-square w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10" />

              <div className="absolute inset-[11%] rounded-full border border-dashed border-[#D4AF37]/20" />

              <div className="absolute inset-[23%] rounded-full border border-white/[0.06] bg-[#161B22]/80 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_68%)]" />

                <div className="relative flex h-full w-full items-center justify-center p-10">
                  <Image
                    src="/logo.png"
                    alt="EagleX Nexus"
                    width={180}
                    height={180}
                    priority
                    className="h-auto w-full max-w-[155px] object-contain"
                  />
                </div>
              </div>

              <div className="absolute left-[5%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_16px_#D4AF37]" />

              <div className="absolute bottom-[20%] right-[4%] h-2 w-2 rounded-full bg-[#D4AF37]/70 shadow-[0_0_14px_#D4AF37]" />

              <div className="absolute bottom-[1%] left-1/2 w-[78%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#161B22]/95 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <div className="flex min-w-0 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
                      EagleX Nexus
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-white">
                      Ideas into digital impact.
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}