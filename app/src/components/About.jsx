import { FadeIn } from "./animations";
import { Container, SectionLabel, SectionHeading } from "./ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

    return (
        <section id="about" className="py-32 md:py-40 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-start">
                    {/* Image Column */}
                    <div className="lg:col-span-5 order-2 lg:order-1" ref={imageRef}>
                        <FadeIn delay={0.2} direction="right">
                            <div className="relative group">
                                <div className="absolute -inset-6 bg-accent/8 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <motion.div
                                    style={{ scale: imageScale }}
                                    className="relative rounded-[1.5rem] overflow-hidden border border-border-subtle bg-surface-elevated aspect-[4/5] md:aspect-auto"
                                >
                                    <img
                                        src="/portrait.png"
                                        alt="Prajith P"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none" />
                                </motion.div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <FadeIn>
                            <SectionLabel>About</SectionLabel>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <SectionHeading className="mb-12">
                                At the intersection of technology, design, and business.
                            </SectionHeading>
                        </FadeIn>

                        <div className="space-y-8">
                            <FadeIn delay={0.2}>
                                <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.9]">
                                    I'm a Computer Science graduate currently pursuing an MBA. My interests
                                    sit at the crossroads of technology, design, and business — and I'm
                                    drawn to understanding how these disciplines come together to solve
                                    real-world problems.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.9]">
                                    I enjoy building useful software, experimenting with AI applications,
                                    and creating digital experiences through design and photography. I
                                    learn continuously and believe in building things that matter.
                                </p>
                            </FadeIn>
                        </div>

                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <FadeIn delay={0.4}>
                                <div>
                                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                                        Currently
                                    </h3>
                                    <p className="text-text-primary text-[15px] font-semibold">
                                        MBA Candidate
                                    </p>
                                    <p className="text-text-secondary text-[13px] mt-1.5 leading-relaxed">
                                        Focus: Business Strategy, Marketing, Product Thinking
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.5}>
                                <div>
                                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                                        Background
                                    </h3>
                                    <p className="text-text-primary text-[15px] font-semibold">
                                        BTech Computer Science & Engineering
                                    </p>
                                    <p className="text-text-secondary text-[13px] mt-1.5">
                                        APJ Abdul Kalam Technological University
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.6} className="mt-12">
                            <div>
                                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
                                    Interests
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Software Dev", "AI", "Product Development", "Design Systems", "Photography", "Branding"].map((i) => (
                                        <span
                                            key={i}
                                            className="text-[11px] font-medium text-text-secondary bg-surface-muted border border-border-subtle px-4 py-2 rounded-full hover:border-accent/40 transition-colors"
                                        >
                                            {i}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </section>
    );
}
