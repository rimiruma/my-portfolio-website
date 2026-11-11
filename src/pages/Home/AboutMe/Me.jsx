
import React from "react";
import { motion } from "framer-motion";

// My Technologies
const skills = [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Express.js",
    "MongoDB",
];

// Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export default function Me() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050d1b] text-white py-20 px-6 md:px-12"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center mb-16"
            >
                <p className="text-cyan-400 font-semibold tracking-[4px] text-sm md:text-base mb-3">
                    WHO I AM
                </p>

                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mt-5" />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                {/* LEFT - PROFILE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex justify-center items-center"
                >
                    <div className="relative flex items-center justify-center w-full max-w-[430px] h-[450px] md:h-[530px]">

                        {/* Outer Rotating Border */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute w-[88%] h-[88%] border border-dashed border-cyan-400/40 rounded-[30px]"
                        />

                        {/* Second Rotating Border */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute w-[92%] h-[85%] border border-purple-500/40 rounded-[30px]"
                        />

                        {/* Glow */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.65, 0.3],
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute w-[75%] h-[75%] bg-blue-500/30 blur-[80px] rounded-full"
                        />

                        {/* Profile Image */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 w-[75%] h-[78%] p-[3px] rounded-[25px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                        >
                            <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#101a2b]">
                                <img
                                    src="https://avatars.githubusercontent.com/u/139052983?v=4"
                                    alt="Rimi Ruma"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Corner Dots */}
                        {[
                            "top-[9%] left-[10%]",
                            "top-[9%] right-[10%]",
                            "bottom-[9%] left-[10%]",
                            "bottom-[9%] right-[10%]",
                        ].map((position, index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.3,
                                }}
                                className={`absolute ${position} w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_20px_#06b6d4] z-20`}
                            />
                        ))}

                        {/* Available Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="absolute bottom-[7%] z-30 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-full shadow-xl"
                        >
                            <span className="flex items-center gap-2 text-sm font-bold text-white">
                                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                Available for work
                            </span>
                        </motion.div>

                    </div>
                </motion.div>

                {/* RIGHT - ABOUT CONTENT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full"
                >

                    {/* Name */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Rimi Ruma
                            </span>
                        </h1>

                        <p className="text-cyan-400 font-bold tracking-wide mt-4 text-base md:text-lg">
                            FULL-STACK DEVELOPER
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-7 text-gray-400 text-base md:text-lg leading-8"
                    >
                        A Computer Network and Telecommunications student
                        passionate about Full-Stack Development. I specialize
                        in crafting engaging digital experiences and
                        consistently strive to deliver the best solutions
                        in every project.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="mt-5 text-gray-400 text-base md:text-lg leading-8"
                    >
                        I love turning ideas into beautiful, responsive,
                        and user-friendly web applications while continuously
                        learning new technologies and improving my skills.
                    </motion.p>

                    {/* Information Cards */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="p-5 rounded-2xl bg-[#101a2b] border border-cyan-500/20 hover:border-cyan-400/60 transition-colors"
                        >
                            <p className="text-cyan-400 text-sm mb-2">
                                NAME
                            </p>
                            <h3 className="font-bold text-white">
                                Rimi Ruma
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="p-5 rounded-2xl bg-[#101a2b] border border-purple-500/20 hover:border-purple-400/60 transition-colors"
                        >
                            <p className="text-cyan-400 text-sm mb-2">
                                PROFESSION
                            </p>
                            <h3 className="font-bold text-white">
                                Full-Stack Developer
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="p-5 rounded-2xl bg-[#101a2b] border border-blue-500/20 hover:border-blue-400/60 transition-colors"
                        >
                            <p className="text-cyan-400 text-sm mb-2">
                                MAIN FOCUS
                            </p>
                            <h3 className="font-bold text-white">
                                Web Development
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="p-5 rounded-2xl bg-[#101a2b] border border-purple-500/20 hover:border-purple-400/60 transition-colors"
                        >
                            <p className="text-cyan-400 text-sm mb-2">
                                INTEREST
                            </p>
                            <h3 className="font-bold text-white">
                                Learning & Building
                            </h3>
                        </motion.div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8"
                    >
                        <h3 className="text-white font-bold mb-4 text-lg">
                            Technologies I Work With
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -4,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="px-4 py-2 rounded-full text-sm font-semibold text-cyan-300 bg-[#101a2b] border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
