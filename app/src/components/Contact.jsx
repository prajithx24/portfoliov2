import { FadeIn } from "./animations";
import { Container, SectionLabel, SectionHeading } from "./ui";
import { Mail } from "lucide-react";

const GithubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

const links = [
    {
        icon: GithubIcon,
        label: "GitHub",
        href: "https://github.com/prajithx24",
        handle: "prajithx24",
    },
    {
        icon: LinkedinIcon,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/prajith-prakash-x24/",
        handle: "prajith-prakash-x24",
    },
    {
        icon: () => <Mail size={16} strokeWidth={1.5} />,
        label: "Email",
        href: "mailto:puthankulamprajith2003@gmail.com",
        handle: "puthankulamprajith2003@gmail.com",
    },
    {
        icon: InstagramIcon,
        label: "Instagram",
        href: "https://www.instagram.com/prajith_x24_",
        handle: "@prajith_x24_",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
            {/* Decorative ambient glow */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none hidden lg:block" />

            <Container>
                <div className="max-w-xl relative z-10">
                    <FadeIn>
                        <SectionLabel>Contact</SectionLabel>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <SectionHeading className="mb-8">
                            Let's connect.
                        </SectionHeading>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.85] mb-16">
                            I'm always open to conversations about technology, design, or
                            interesting collaboration opportunities.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="space-y-2">
                            {links.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.label !== "Email" ? "_blank" : undefined}
                                        rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                                        className="group flex items-center gap-5 py-4 px-5 -mx-5 rounded-xl hover:bg-surface-elevated transition-colors duration-300"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-surface-muted border border-border-subtle flex items-center justify-center text-text-tertiary group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent transition-all duration-300 shrink-0">
                                            <Icon />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="text-[13.5px] font-medium text-text-primary block">
                                                {link.label}
                                            </span>
                                            <span className="text-[11px] text-text-tertiary truncate block">
                                                {link.handle}
                                            </span>
                                        </div>
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            className="text-text-tertiary/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </a>
                                );
                            })}
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
