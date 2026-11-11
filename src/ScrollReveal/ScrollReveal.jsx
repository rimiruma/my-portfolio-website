
import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 70,
                scale: 0.96,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: false,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
