import { FadeIn } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";
import { FileText, ExternalLink } from "lucide-react";

export default function Publications() {
    return (
        <section className="py-32 md:py-40">
            <Container>
                <FadeIn>
                    <SectionLabel>Publications</SectionLabel>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <SectionHeading className="mb-8">
                        Published research.
                    </SectionHeading>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-text-secondary text-[16px] md:text-[17px] max-w-lg mb-16 leading-[1.85]">
                        Academic work at the intersection of agriculture, IoT, and
                        machine learning.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3} blur>
                    <SpotlightCard className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                <FileText
                                    size={22}
                                    strokeWidth={1.5}
                                    className="text-accent group-hover:text-surface transition-colors duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-4 flex-wrap">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                                        Research Paper
                                    </span>
                                    <span className="text-[11px] text-text-tertiary">
                                        •
                                    </span>
                                    <span className="text-[11px] font-medium text-text-tertiary tracking-wide uppercase">
                                        March 2025
                                    </span>
                                </div>

                                <h3 className="text-[1.25rem] md:text-[1.5rem] font-bold tracking-tight text-text-primary mb-4 leading-[1.35] group-hover:text-accent transition-colors duration-500">
                                    PLANTEX – Plant Recommendation and Leaf Disease Detection Using IoT and Machine Learning
                                </h3>

                                <p className="text-text-secondary text-[14px] md:text-[15px] leading-[1.8] mb-6 max-w-2xl">
                                    Published in the International Journal of Scientific Research in Engineering and Management (IJSREM). This paper presents an integrated system combining IoT sensor data with machine learning models for intelligent crop recommendation and computer vision-based plant disease detection.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href="https://ijsrem.com/uploads/production/PLANTEX-PLANT-RECOMMENDATIONS-AND-LEAF-DISEASE-DETECTION-USING-IOT-AND-MACHINE-LEARNING.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-text-primary text-surface rounded-full text-[13px] font-semibold transition-transform hover:scale-105 active:scale-95 duration-500"
                                    >
                                        Read Paper
                                        <ExternalLink size={13} strokeWidth={2} className="group-hover/link:rotate-12 transition-transform duration-300" />
                                    </a>
                                    <span className="text-[12px] font-medium text-text-tertiary">
                                        IJSREM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </FadeIn>
            </Container>
        </section>
    );
}
