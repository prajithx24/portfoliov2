import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function SectionLabel({ children }) {
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-surface-elevated text-[11px] font-semibold tracking-widest text-text-secondary uppercase mb-8 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            {children}
        </span>
    );
}

export function SectionHeading({ children, className = "" }) {
    return (
        <h2 className={`text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold tracking-tighter leading-[0.95] text-text-primary ${className}`}>
            {children}
        </h2>
    );
}

export function Container({ children, className = "" }) {
    return (
        <div className={`max-w-[1080px] mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
            {children}
        </div>
    );
}

export function Divider() {
    return (
        <div className="max-w-[1080px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
    );
}

// 🪄 Spotlight Card: Adds a glowing radial gradient that tracks the user's mouse
export function SpotlightCard({ children, className = "" }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative overflow-hidden rounded-[2rem] border border-border-subtle bg-surface-elevated transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5 hover:bg-surface-elevated/80 active:scale-[0.98] active:shadow-sm ${className}`}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
        >
            {/* Floating Mouse-tracking Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              var(--color-accent-glow),
              transparent 80%
            )
          `,
                }}
            />
            {/* Content wrapper */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
