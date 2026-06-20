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
                        <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.95] text-text-primary mb-12">
                            Building software,{" "}
                            <br className="hidden sm:block" />
                            <span className="text-text-primary/25 ml-[-0.05em] transition-colors hover:text-text-primary duration-500">
                                exploring
                            </span>
                            ,
                            <br className="hidden md:block" />
                            creating experiences.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-[17px] md:text-lg text-text-secondary leading-[1.85] max-w-[520px] font-medium">
                            I'm Prajith — a BTech Computer Science graduate currently pursuing
                            an MBA. I enjoy building software projects, experimenting with AI,
                            and creating digital experiences through design.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.55}>
                        <div className="flex flex-wrap gap-4 mt-14">
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
                </div>
            </Container>
        </section>
    );
}
