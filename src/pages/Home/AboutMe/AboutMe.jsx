
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Palette,
  LayoutDashboard,
  Flame,
  GitBranch,
  Sparkles,
  Rocket,
} from "lucide-react";

const skills = [
  {
    name: "React.js",
    description: "Building dynamic and responsive user interfaces.",
    icon: Code2,
  },
  {
    name: "Node.js",
    description: "Creating backend APIs and server-side applications.",
    icon: Server,
  },
  {
    name: "MongoDB",
    description: "Managing databases and organizing data efficiently.",
    icon: Database,
  },
  {
    name: "Tailwind CSS",
    description: "Creating modern and responsive website designs.",
    icon: Palette,
  },
  {
    name: "DaisyUI",
    description: "Building beautiful interfaces with reusable components.",
    icon: LayoutDashboard,
  },
  {
    name: "Firebase",
    description: "Authentication and real-time database features.",
    icon: Flame,
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative development.",
    icon: GitBranch,
  },
];

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-11/12 max-w-7xl mx-auto py-20 px-4 md:px-8 relative"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 relative"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-500 bg-purple-500/10 border border-purple-500/20 px-5 py-2 rounded-full mb-5">
          <Sparkles size={16} />
          ABOUT ME
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          Know More{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            About Me
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-7">
          I am passionate about web development, problem-solving,
          and creating beautiful digital experiences.
        </p>
      </motion.div>

      {/* Programming Journey */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 p-7 md:p-12 mb-16 shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-7 items-start">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Rocket size={30} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              My Programming Journey
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              I started my programming journey with a passion
              for solving problems and creating dynamic web
              applications. Over time, I developed my skills
              in technologies like React, Node.js, and MongoDB,
              which helped me build scalable and user-friendly
              projects.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-4">
              I particularly enjoy building interactive
              features, designing responsive user interfaces,
              and improving application performance. I am
              always excited to learn new technologies and
              take on new challenges.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-9 relative"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-3">
          My <span className="text-purple-500">Skills</span>
        </h3>

        <p className="text-gray-500 dark:text-gray-400">
          Technologies and tools I use to build modern web applications.
        </p>
      </motion.div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              whileHover={{ y: -6 }}
              className="group p-7 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Icon size={27} />
              </div>

              <h4 className="text-xl font-bold mb-3">
                {skill.name}
              </h4>

              <p className="text-gray-500 dark:text-gray-400 text-sm leading-7">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutMe;
