import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";
import { Camera, Paintbrush, Layers, Share2, Sparkles } from "lucide-react";

const creativeItems = [
    { icon: Paintbrush, label: "Brand Identity" },
    { icon: Layers, label: "Poster Design" },
    { icon: Share2, label: "Social Media" },
    { icon: Sparkles, label: "Advertisements" },
    { icon: Camera, label: "Photography" },
];

export default function CreativeWork() {
    return (
        <section className="py-32 md:py-40">
            <Container>
                <FadeIn>
                    <SectionLabel>Creative Work</SectionLabel>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <SectionHeading className="mb-8">
                        Beyond code.
                    </SectionHeading>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-text-secondary text-[16px] md:text-[17px] max-w-lg mb-20 leading-[1.85]">
                        I explore design and visual storytelling through branding projects,
                        poster design, and photography.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5" staggerDelay={0.08}>
                    {creativeItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <StaggerItem key={item.label}>
                                <SpotlightCard className="p-8 text-center flex flex-col items-center justify-center h-full aspect-square sm:aspect-auto sm:h-48 group cursor-default">
                                    <div className="w-14 h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500 ease-out will-change-transform">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-text-secondary group-hover:text-surface transition-colors duration-500"
                                        />
                                    </div>
                                    <span className="text-[14px] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-500">
                                        {item.label}
                                    </span>
                                </SpotlightCard>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </Container>
        </section>
    );
}
