import { FadeIn, StaggerContainer, StaggerItem } from "./animations";
import { Container, SectionLabel, SectionHeading, SpotlightCard } from "./ui";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "Royal Taste Food Products",
        category: "Client Project — Business Website",
        description:
            "A product showcase website developed for a Kerala-based food products company. Features responsive design, a curated product catalog, and a streamlined quote request workflow for B2B inquiries.",
        scope: ["Product showcase & catalog", "Quote request workflow", "Responsive, modern UI"],
        technologies: ["React", "Tailwind CSS", "Vercel"],
        link: "https://royaltastefoodproducts.in",
        linkLabel: "Visit Website",
    },
    {
        number: "02",
        title: "AI-Powered ASL Translator",
        category: "Computer Vision — Accessibility",
        description:
            "A real-time computer vision application that translates American Sign Language gestures into text. Uses hand landmark extraction for high-accuracy gesture recognition, built with accessibility as the primary goal.",
        scope: ["Real-time gesture recognition", "Hand landmark extraction", "Accessibility-first design"],
        technologies: ["Python", "OpenCV", "MediaPipe"],
    },
    {
        number: "03",
        title: "Secure Chat",
        category: "Full-Stack — Real-Time Communication",
        description:
            "A secure messaging platform with JWT-based authentication and WebSocket communication. Designed for privacy-first, real-time interaction with a clean, minimal interface.",
        scope: ["JWT authentication", "WebSocket real-time messaging", "Secure backend API"],
        technologies: ["FastAPI", "WebSocket", "JWT"],
    },
    {
        number: "04",
        title: "DocuBot",
        category: "AI — Retrieval-Augmented Generation",
        description:
            "A document Q&A assistant using RAG architecture. Ingests PDFs, performs semantic vector search, and generates contextual AI-powered responses from uploaded documents.",
        scope: ["PDF ingestion pipeline", "Semantic vector search", "AI-generated answers"],
        technologies: ["FastAPI", "ChromaDB", "OpenRouter"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-40">
            <Container>
                <FadeIn>
                    <SectionLabel>Featured Projects</SectionLabel>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <SectionHeading className="mb-4">
                        Selected work.
                    </SectionHeading>
                </FadeIn>
                <FadeIn delay={0.15}>
                    <p className="text-text-secondary text-[16px] md:text-[18px] max-w-xl mb-16 leading-[1.85] font-medium">
                        A collection of projects spanning web development, AI, and full-stack
                        applications — each solving a distinct problem.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <FadeIn key={project.title} delay={i * 0.05} blur>
                            <SpotlightCard className="h-full flex flex-col p-8 md:p-12 min-h-[460px] justify-between">
                                {/* Header row */}
                                <div className="flex items-start justify-between">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary block mb-3 group-hover:text-accent transition-colors duration-500">
                                        {project.category}
                                    </span>
                                    <span className="text-[14px] font-mono text-text-tertiary opacity-40">
                                        {project.number}
                                    </span>
                                </div>

                                <div className="mt-auto flex flex-col pt-12">
                                    <h3 className="text-[2.5rem] md:text-[3.25rem] leading-[1] font-bold tracking-tight text-text-primary mb-6 group-hover:text-accent transition-colors duration-500">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-secondary text-[15px] leading-[1.75] mb-8 max-w-md">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[11px] font-medium text-text-secondary border border-border-subtle bg-surface px-3 py-1.5 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        {project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-surface rounded-full text-[13px] font-semibold transition-transform hover:scale-105 active:scale-95 duration-500"
                                            >
                                                {project.linkLabel}
                                                <ExternalLink size={14} strokeWidth={2} className="group-hover/link:rotate-12 transition-transform duration-300" />
                                            </a>
                                        ) : (
                                            <div />
                                        )}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
