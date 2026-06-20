import { FadeIn } from "./animations";
import { Container, SectionLabel, SectionHeading } from "./ui";

export default function About() {
    return (
        <section id="about" className="py-40 md:py-52 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
                    {/* Image Column */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <FadeIn delay={0.2} direction="right">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-[1.5rem] overflow-hidden border border-border-subtle bg-surface-elevated aspect-[4/5] md:aspect-auto">
                                    <img
                                        src="/portrait.png"
                                        alt="Prajith P"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none" />
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-accent/20 rounded-br-2xl pointer-events-none" />
                                <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-accent/20 rounded-tl-2xl pointer-events-none" />
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
