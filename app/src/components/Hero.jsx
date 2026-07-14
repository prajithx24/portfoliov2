import { FadeIn } from "./animations";
import { Container } from "./ui";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[94vh] flex items-center pt-28 pb-36 md:pt-40 md:pb-48 overflow-hidden">
            {/* Ambient gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-[700px] md:max-w-[900px]">
                    <FadeIn delay={0.1} blur>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-surface-elevated text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-8 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Overview
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.25} blur>
                        <h1 className="text-[2.25rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[1.05] md:leading-[0.93] lg:leading-[0.88] text-text-primary mb-8 md:mb-12">
                            Engineering software,{" "}
                            <br />
                            <span className="font-serif italic font-normal text-text-primary/40 ml-[-0.05em] transition-colors hover:text-text-primary duration-700">
                                analysing data,
                            </span>
                            <br />
                            driving decisions.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-[16px] md:text-lg text-text-secondary leading-[1.85] max-w-[520px] font-medium mb-12">
                            I'm Prajith — a CS engineer and MBA candidate specialising in
                            Business Analytics. I build data-driven products, design intelligent
                            systems, and translate insights into decisions that matter.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.55}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                href="#projects"
                                className="group flex justify-center items-center gap-2.5 px-8 py-4 bg-text-primary text-surface text-[14px] font-semibold rounded-full hover:bg-text-secondary transition-colors duration-300"
                            >
                                View Work
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                href="#contact"
                                className="inline-flex justify-center items-center px-8 py-4 text-[14px] font-medium text-text-primary border border-border rounded-full hover:bg-surface-elevated transition-colors duration-300"
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                        <div className="mt-16 flex items-center gap-3">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <span className="text-[13px] font-medium text-text-tertiary tracking-wide">
                                Open to opportunities
                            </span>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
