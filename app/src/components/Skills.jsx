import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["Python", "FastAPI", "Node.js"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Docker", "Linux"],
    },
    {
        title: "Design",
        skills: ["Photoshop", "Illustrator", "Figma", "Photography"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-40 md:py-52">
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
                    {skillCategories.map((cat) => (
                        <StaggerItem key={cat.title}>
                            <SpotlightCard className="p-8 h-full">
                                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-8">
                                    {cat.title}
                                </h3>
                                <ul className="space-y-4">
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
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
}
