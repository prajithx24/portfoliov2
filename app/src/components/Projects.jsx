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
    {
        number: "05",
        title: "Plantex",
        category: "AI / Machine Learning",
        description:
            "An intelligent agriculture platform that combines machine learning-based crop recommendation with computer vision-powered plant disease detection. Users can input soil and environmental parameters to receive optimal crop suggestions and upload leaf images for disease diagnosis and treatment insights.",
        scope: ["ML-Based Prediction System", "Computer Vision Integration", "Full-Stack Web Application", "Production Deployment"],
        technologies: ["Python", "Flask", "Machine Learning", "TensorFlow", "OpenCV", "Scikit-Learn", "HTML", "CSS", "JavaScript", "Render"],
        link: "https://crop-recommendation-and-leaf-detection.onrender.com",
        linkLabel: "Live Demo",
        badge: "Published Research",
    },
    {
        number: "06",
        title: "Airfare Intelligence Dashboard",
        category: "Data Visualization — Open Data",
        description:
            "An interactive analytics dashboard built on U.S. DOT open data, visualizing the top 1,000 city-pair airfare markets. Features KPI cards, a route map with curved arcs, fare distribution histograms, year-over-year trend lines, and a sortable paginated table with CSV export.",
        scope: ["Interactive route map & arc visualization", "Year-over-year trend analysis", "Sortable, searchable data table with CSV export"],
        technologies: ["Node.js", "Express", "D3.js", "U.S. DOT Open Data", "Render"],
        link: "https://airfaredashboard.onrender.com/",
        linkLabel: "Live Demo",
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
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary block group-hover:text-accent transition-colors duration-500">
                                            {project.category}
                                        </span>
                                        {project.badge && (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" /></svg>
                                                {project.badge}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[14px] font-mono text-text-tertiary opacity-40 shrink-0">
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

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[11px] font-medium text-text-tertiary border border-border-subtle bg-surface px-3 py-1.5 rounded-full group-hover:border-accent/30 group-hover:text-text-secondary transition-all duration-500"
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
