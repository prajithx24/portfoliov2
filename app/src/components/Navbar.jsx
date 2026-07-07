import { useState, useEffect } from "react";
import { Container } from "./ui";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });

        const isDarkMode = document.documentElement.classList.contains("dark");
        setIsDark(isDarkMode);

        // IntersectionObserver for active section tracking
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(`#${id}`);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observers.forEach((o) => o.disconnect());
        };
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
        <nav className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6">
            <Container>
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <div className={`flex items-center rounded-full transition-all duration-500 p-2 px-4 ${scrolled ? "bg-surface/90 backdrop-blur-xl border border-border shadow-sm" : "border border-transparent"}`}>
                        <a
                            href="#"
                            onClick={() => setActiveSection("")}
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
                                className={`px-5 py-2 text-[12px] font-semibold tracking-widest uppercase rounded-full transition-all duration-300 ${activeSection === link.href ? "text-text-primary bg-surface-muted" : "text-text-secondary hover:text-text-primary hover:bg-surface"}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Controls Capsule */}
                    <div className={`hidden md:flex items-center p-1.5 rounded-full border transition-all duration-500 ${scrolled ? "bg-surface/90 backdrop-blur-xl border-border shadow-sm" : "bg-text-primary/5 backdrop-blur-md border-transparent"}`}>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-surface-elevated text-text-secondary hover:text-text-primary transition-all duration-300 bg-surface shadow-sm active:scale-90"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
                        </button>
                    </div>

                    {/* Premium Mobile Controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        {/* Theme Toggle - Standalone Pill */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-full transition-all duration-300 active:scale-90 ${scrolled || mobileOpen ? "bg-surface/95 backdrop-blur-xl shadow-sm border border-border text-text-secondary hover:text-text-primary" : "bg-transparent border border-transparent text-text-primary"}`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
                        </button>

                        {/* Menu Toggle - Editorial Pill */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 ${scrolled || mobileOpen ? "bg-surface/95 backdrop-blur-xl shadow-sm border border-border" : "bg-transparent border border-transparent"}`}
                            aria-label="Toggle menu"
                        >
                            <span className="text-[11px] font-bold tracking-widest uppercase text-text-primary">
                                {mobileOpen ? "Close" : "Menu"}
                            </span>
                            <div className="flex flex-col gap-[4px] justify-center items-center h-full pt-[2px]">
                                <span className={`block w-3.5 h-[1.5px] bg-text-primary transition-transform duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[2.75px]" : ""}`} />
                                <span className={`block w-3.5 h-[1.5px] bg-text-primary transition-transform duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[2.75px]" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown Panel */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="md:hidden mt-3 absolute left-0 right-0 px-4 z-40"
                        >
                            <div className="flex flex-col px-2 py-4 bg-surface/95 backdrop-blur-2xl border border-border rounded-3xl shadow-2xl">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.35 }}
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-[1.5rem] font-bold tracking-tighter py-4 px-6 active:bg-surface-elevated rounded-2xl transition-colors border-b border-border/40 last:border-0 ${activeSection === link.href ? "text-accent" : "text-text-primary"}`}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </nav>
    );
}
