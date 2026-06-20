import { useState, useEffect } from "react";
import { Container } from "./ui";
import { Sun, Moon } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });

        // Initial theme check
        const isDarkMode = document.documentElement.classList.contains("dark");
        setIsDark(isDarkMode);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 md:pt-6">
            <Container>
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <div className={`flex items-center rounded-full transition-all duration-500 p-2 px-4 ${scrolled ? "bg-surface/90 backdrop-blur-xl border border-border shadow-sm" : "border border-transparent"}`}>
                        <a
                            href="#"
                            className="font-sans font-bold text-2xl tracking-tighter text-text-primary hover:text-accent transition-colors duration-300 lowercase"
                        >
                            prajith
                        </a>
                    </div>

                    {/* Desktop nav capsule */}
                    <div className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${scrolled ? "bg-surface/90 backdrop-blur-xl border-border shadow-sm" : "bg-surface-elevated/50 backdrop-blur-md border-border-subtle"}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-5 py-2 text-[12px] font-semibold tracking-widest uppercase text-text-secondary hover:text-text-primary hover:bg-surface rounded-full transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Controls Capsule */}
                    <div className={`hidden md:flex items-center p-1.5 rounded-full border transition-all duration-500 ${scrolled ? "bg-surface/90 backdrop-blur-xl border-border shadow-sm" : "bg-text-primary/5 backdrop-blur-md border-transparent"}`}>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-surface-elevated text-text-secondary hover:text-text-primary transition-all duration-300 bg-surface shadow-sm"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
                        </button>
                    </div>

                    {/* Mobile Right Controls */}
                    <div className={`flex items-center gap-2 md:hidden p-1.5 rounded-full border transition-all duration-500 ${scrolled ? "bg-surface/90 backdrop-blur-xl border-border shadow-sm" : "bg-surface-elevated/50 backdrop-blur-md border-border-subtle"}`}>
                        <button
                            onClick={toggleTheme}
                            className="p-[7px] rounded-full text-text-secondary hover:text-text-primary bg-surface shadow-sm"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={14} strokeWidth={2.5} /> : <Moon size={14} strokeWidth={2.5} />}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="flex flex-col gap-[5px] p-2 px-3 bg-surface rounded-full shadow-sm"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-4 h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
                            <span className={`block w-4 h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-2 p-4 bg-surface/95 backdrop-blur-xl border border-border-subtle rounded-3xl shadow-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-semibold tracking-widest uppercase text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-xl transition-colors py-3 px-4 text-center"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
