import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";
import { Code2, Eye, Palette } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Software Development",
        description:
            "Building web applications, backend systems, and practical software solutions using modern frameworks.",
        technologies: ["React", "JavaScript", "Python", "FastAPI", "SQL"],
    },
    {
        icon: Eye,
        title: "AI & Computer Vision",
        description:
            "Exploring machine learning, computer vision, and intelligent systems through hands-on projects.",
        technologies: ["OpenCV", "MediaPipe", "TensorFlow", "PyTorch"],
    },
    {
        icon: Palette,
        title: "Design & Creative Work",
        description:
            "Creating visual identities, posters, social media creatives, and photography-based content.",
        technologies: ["Photoshop", "Illustrator", "Lightroom", "Figma"],
    },
];

export default function WhatIDo() {
    return (
        <section className="py-40 md:py-52 relative">
            <Container>
                <FadeIn>
                    <SectionLabel>What I Do</SectionLabel>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <SectionHeading className="mb-20 md:mb-24">
                        Disciplines I work across.
                    </SectionHeading>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <StaggerItem key={service.title}>
                                <SpotlightCard className="p-9 md:p-12 h-full flex flex-col">
                                    {/* Icon Container with bouncy hover interaction */}
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-9 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 will-change-transform">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-accent group-hover:text-surface transition-colors duration-500"
                                        />
                                    </div>
                                    <h3 className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-tight text-text-primary mb-4 group-hover:text-accent transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-[15px] text-text-secondary leading-[1.8] mb-10 flex-grow">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[11px] font-medium text-text-tertiary bg-surface border border-border-subtle px-3 py-1.5 rounded-md group-hover:border-accent/30 group-hover:text-accent/80 transition-all duration-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </Container>
        </section>
    );
}
