import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  const company = [
    "About",
    "Services",
    "Projects",
    "Process",
    "Contact",
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "UI/UX Design",
    "Cloud Services",
  ];

  const socials = [
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaXTwitter,
  ];

  return (
    <footer className="border-t border-[#D4AF37]/10 bg-[#11161E]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="EagleX Nexus"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  EagleX Nexus
                </h3>

                <p className="mt-1 text-sm text-[#D4AF37]">
                  Engineering Digital Excellence
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#9CA3AF]">
              We craft premium digital products, scalable software and
              AI-powered solutions that help ambitious businesses grow.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/10 bg-[#161B22] text-[#9CA3AF] transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>

            <div className="space-y-3">
              {company.map((item) => (
                <button
                  key={item}
                  className="block text-sm text-[#9CA3AF] transition hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>

            <div className="space-y-3">
              {services.map((item) => (
                <p
                  key={item}
                  className="text-sm text-[#9CA3AF]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>

            <div className="space-y-4">
              <p className="text-sm text-[#9CA3AF]">
                hello@eaglexnexus.com
              </p>

              <p className="text-sm text-[#9CA3AF]">
                +91 98765 43210
              </p>

              <p className="text-sm leading-7 text-[#9CA3AF]">
                Building software for startups, growing businesses and
                enterprises worldwide.
              </p>

              <button className="group mt-2 flex items-center gap-2 rounded-full border border-[#D4AF37]/20 px-5 py-2.5 text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10">
                Let's Talk
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} EagleX Nexus. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-sm text-[#6B7280] transition hover:text-white">
              Privacy Policy
            </button>

            <button className="text-sm text-[#6B7280] transition hover:text-white">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;