"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handler, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#D4AF37]/10 bg-[#0E1117]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="EagleX Nexus"
            width={180}
            height={40}
            className="h-10 w-auto object-contain"
          />

          <div className="leading-none">
            <h1
              className="text-xl font-bold tracking-tight text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              EagleX{" "}
              <span className="text-[#D4AF37]">
                Nexus
              </span>
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "text-[#A1A8B3] hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute bottom-1 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#D4AF37]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-6 py-3 text-sm font-semibold text-[#111111] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] sm:flex">
            Get a Quote
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/15 text-[#D4AF37] transition hover:bg-[#D4AF37]/10 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-[#D4AF37]/10 bg-[#0E1117]/95 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-2 px-6 py-6">
            {links.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-[#A1A8B3] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#F4D06F] px-5 py-3 text-sm font-semibold text-[#111111]">
              Get a Quote
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}