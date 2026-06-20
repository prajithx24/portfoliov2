import { Container } from "./ui";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border-subtle">
            <Container>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-serif italic text-lg text-text-primary tracking-tight">
                        Prajith
                    </span>
                    <p className="text-[11px] text-text-tertiary tracking-wide">
                        © {new Date().getFullYear()} Prajith P
                    </p>
                </div>
            </Container>
        </footer>
    );
}
