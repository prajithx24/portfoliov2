import { Container } from "./ui";
import { ArrowUp } from "lucide-react";

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 border-t border-border-subtle">
            <Container>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <span className="font-serif italic text-lg text-text-primary tracking-tight">
                                Prajith
                            </span>
                            <nav className="hidden sm:flex items-center gap-4">
                                {footerLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary hover:text-text-primary transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-text-tertiary hover:text-text-primary transition-colors duration-300"
                        >
                            Back to top
                            <ArrowUp size={13} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </button>
                    </div>
                    <p className="text-[11px] text-text-tertiary tracking-wide">
                        © {new Date().getFullYear()} Prajith P
                    </p>
                </div>
            </Container>
        </footer>
    );
}

