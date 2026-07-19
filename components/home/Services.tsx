import {
    ArrowRight,
    BrainCircuit,
    ShieldCheck,
    Cloud,
    Code2,
} from "lucide-react";

const services = [
    {
        title: "Artificial Intelligence",
        icon: BrainCircuit,
        desc: "AI automation, LLM integration, intelligent agents and business workflow optimization.",
    },
     {
        title: "Artificial Intelligence1",
        icon: BrainCircuit,
        desc: "AI automation, LLM integration, intelligent agents and business workflow optimization.",
    }, {
        title: "Artificial Intelligence2",
        icon: BrainCircuit,
        desc: "AI automation, LLM integration, intelligent agents and business workflow optimization.",
    }, {
        title: "Artificial Intelligence3",
        icon: BrainCircuit,
        desc: "AI automation, LLM integration, intelligent agents and business workflow optimization.",
    },
    {
        title: "Cyber Security",
        icon: ShieldCheck,
        desc: "Enterprise-grade security, penetration testing and infrastructure protection.",
    },
    {
        title: "Cloud Solutions",
        icon: Cloud,
        desc: "Cloud architecture, DevOps, CI/CD pipelines and scalable deployments.",
    },
    {
        title: "Software Engineering",
        icon: Code2,
        desc: "Modern web applications, enterprise software and custom digital platforms.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative bg-[#0E1117] py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#D4AF3720 1px,transparent 1px),linear-gradient(90deg,#D4AF3720 1px,transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />

                <div className="absolute top-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}

                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                        Our Services
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                        Enterprise Technology Solutions
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#9CA3AF]">
                        Delivering secure, intelligent and scalable digital
                        solutions that help businesses innovate with confidence.
                    </p>
                </div>

                {/* Cards */}

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#161B22] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_50px_rgba(212,175,55,.08)]"
                            >
                                {/* Glow */}

                                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                                {/* Icon */}

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
                                    <Icon size={22} />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#9CA3AF]">
                                    {service.desc}
                                </p>

                                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-[#D4AF37] transition-all group-hover:gap-3">
                                    Learn More
                                    <ArrowRight size={16} />
                                </button>

                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}