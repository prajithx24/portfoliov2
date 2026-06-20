import { motion } from "framer-motion";

// High-end Neo-Minimalist Spring Physics
const springTransition = {
    type: "spring",
    damping: 30,
    stiffness: 100,
    mass: 1,
};

export function FadeIn({ children, delay = 0, className = "", direction = "up", blur = false }) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    const { x, y } = directions[direction] || directions.up;

    return (
        <motion.div
            initial={{
                opacity: 0,
                x,
                y,
                scale: 0.94,
                filter: blur ? "blur(12px)" : "blur(0px)",
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                ...springTransition,
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: springTransition,
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
