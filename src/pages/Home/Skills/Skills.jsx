
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Frontend",
        color: "#38bdf8",
        bg: "from-cyan-500/10 to-blue-500/10",
        border: "border-cyan-500/20",
        skills: [
            { name: "React", icon: "⚛️" },
            { name: "JavaScript", icon: "🟨" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "🔷" },
            { name: "Tailwind CSS", icon: "🌊" },
        ],
    },
    {
        title: "Backend",
        color: "#a855f7",
        bg: "from-purple-500/10 to-indigo-500/10",
        border: "border-purple-500/20",
        skills: [
            { name: "Node.js", icon: "🟢" },
            { name: "Express.js", icon: "🚀" },
            { name: "MongoDB", icon: "🍃" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "Prisma", icon: "◆" },
        ],
    },
    {
        title: "Tools",
        color: "#34d399",
        bg: "from-emerald-500/10 to-green-500/10",
        border: "border-emerald-500/20",
        skills: [
            { name: "Git", icon: "🔧" },
            { name: "GitHub", icon: "🐙" },
            { name: "VS Code", icon: "💻" },
        ],
    },
];

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
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

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#050d1b] text-white py-20 px-5 md:px-10 lg:px-16"
        >
            {/* Background Glow */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: -35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center mb-16"
            >
                <p className="text-cyan-400 font-semibold tracking-[4px] text-sm md:text-lg mb-4">
                    WHAT I KNOW
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    My{" "}
                    <Typewriter
                        words={["Tech Stack", "Skills", "Technologies"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1800}
                    />
                </h1>

                <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mt-5" />

                <p className="text-gray-400 text-base md:text-lg mt-7 max-w-3xl mx-auto leading-8">
                    Dedicated developer crafting efficient and visually
                    stunning web experiences with modern technologies.
                </p>
            </motion.div>

            {/* Skill Cards */}
            <motion.div
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
                {skillGroups.map((group, index) => (
                    <motion.div
                        key={group.title}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3 },
                        }}
                        className={`relative overflow-hidden rounded-3xl border ${group.border} bg-[#101a2b]/90 backdrop-blur-md p-6 md:p-8 shadow-xl`}
                    >
                        {/* Card Glow */}
                        <div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none"
                            style={{ backgroundColor: group.color }}
                        />

                        {/* Card Heading */}
                        <div className="relative flex items-center gap-3 mb-9">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor: group.color,
                                    boxShadow: `0 0 15px ${group.color}`,
                                }}
                            />

                            <h2
                                className="text-2xl font-extrabold"
                                style={{ color: group.color }}
                            >
                                {group.title}
                            </h2>
                        </div>

                        {/* Skill List */}
                        <div className="relative space-y-7">
                            {group.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{
                                        opacity: 0,
                                        x: -25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: skillIndex * 0.12,
                                    }}
                                    whileHover={{ x: 6 }}
                                    className="group"
                                >
                                    {/* Skill Name */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 text-lg border border-white/10">
                                            {skill.icon}
                                        </span>

                                        <h3 className="text-gray-200 font-semibold text-base md:text-lg group-hover:text-white transition-colors">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    {/* Animated Accent Bar */}
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.2,
                                                delay: skillIndex * 0.12 + 0.2,
                                                ease: "easeOut",
                                            }}
                                            className="h-full rounded-full"
                                            style={{
                                                background: `linear-gradient(to right, ${group.color}, ${group.color}88)`,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Decoration */}
                        <div
                            className="absolute bottom-0 left-0 h-1 w-full opacity-60"
                            style={{
                                background: `linear-gradient(to right, transparent, ${group.color}, transparent)`,
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Text */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center text-gray-500 mt-14 text-sm md:text-base"
            >
                Always learning, always building, always improving. ✨
            </motion.p>
        </section>
    );
};

export default Skills;
