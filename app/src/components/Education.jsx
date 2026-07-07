import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
    return (
        <section className="py-32 md:py-40">
            <Container>
                <FadeIn>
                    <SectionLabel>Education</SectionLabel>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <SectionHeading className="mb-20 md:mb-24">
                        Academic foundation.
                    </SectionHeading>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
                    <StaggerItem>
                        <SpotlightCard className="p-9 md:p-12 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-9 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                    <GraduationCap
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-accent group-hover:text-surface transition-colors duration-500"
                                    />
                                </div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-3 block">
                                    Currently Pursuing
                                </span>
                                <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.3] font-bold tracking-tight text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                                    Master of Business Administration
                                </h3>
                                <p className="text-[14px] text-text-secondary leading-relaxed mb-8">
                                    2025 – Present
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Business Strategy", "Marketing", "Management", "Product Thinking"].map(
                                    (area) => (
                                        <span
                                            key={area}
                                            className="text-[11.5px] font-medium text-text-secondary bg-surface border border-border-subtle px-3 py-1.5 rounded-md group-hover:border-accent/40 group-hover:text-text-primary transition-all duration-500"
                                        >
                                            {area}
                                        </span>
                                    )
                                )}
                            </div>
                        </SpotlightCard>
                    </StaggerItem>

                    <StaggerItem>
                        <SpotlightCard className="p-9 md:p-12 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-9 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                    <BookOpen
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-accent group-hover:text-surface transition-colors duration-500"
                                    />
                                </div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-3 block">
                                    Completed
                                </span>
                                <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.3] font-bold tracking-tight text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                                    BTech Computer Science & Engineering
                                </h3>
                                <p className="text-[14px] text-text-secondary leading-relaxed mb-1">
                                    APJ Abdul Kalam Technological University
                                </p>
                                <p className="text-[13px] text-text-tertiary">
                                    2021 – 2025
                                </p>
                            </div>
                        </SpotlightCard>
                    </StaggerItem>
                </StaggerContainer>
            </Container>
        </section>
    );
}
