import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";
import { Code2, Server, Database, Wrench, Palette } from "lucide-react";

const skillCategories = [
    {
        icon: Code2,
        title: "Frontend",
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        icon: Server,
        title: "Backend",
        skills: ["Python", "FastAPI", "Node.js"],
    },
    {
        icon: Database,
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        icon: Wrench,
        title: "Tools",
        skills: ["Git", "GitHub", "Docker", "Linux"],
    },
    {
        icon: Palette,
        title: "Design",
        skills: ["Photoshop", "Illustrator", "Figma", "Photography"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 md:py-40">
            <Container>
                <FadeIn>
                    <SectionLabel>Skills & Technologies</SectionLabel>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <SectionHeading className="mb-20 md:mb-24">
                        Tools of the trade.
                    </SectionHeading>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5" staggerDelay={0.08}>
                    {skillCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <StaggerItem key={cat.title}>
                                <SpotlightCard className="p-8 h-full">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                        <Icon
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-accent group-hover:text-surface transition-colors duration-500"
                                        />
                                    </div>
                                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-6">
                                        {cat.title}
                                    </h3>
                                    <ul className="space-y-3.5">
                                        {cat.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                className="text-[13.5px] font-medium text-text-primary/70 group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-300"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </SpotlightCard>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </Container>
        </section>
    );
}

