
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050d1b] text-white flex items-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/qLw9RPSX/DALL-E-2025-03-13-03-47-45-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050d1b]/85"></div>

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-6 md:px-10 lg:px-16 py-20">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 xl:gap-24 items-center">

          {/* LEFT SIDE - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >

            {/* Welcome Text */}
            <p className="text-cyan-400 font-semibold tracking-widest text-base md:text-lg mb-7">
              
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Rimi Ruma
              </span>
            </h1>

            {/* Animated Title */}
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-200 mb-7 min-h-[45px]">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Developer",
                  "Problem Solver",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mb-10">
              I'm Rimi Ruma — a passionate developer who loves
              building modern, responsive and user-friendly web
              applications using React, Next.js, Node.js and
              modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-5 mb-12">

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1IHEEzz5H0fnGi5JBvXyPYMUdYOzngrtT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-4 rounded-full font-bold text-base md:text-lg
                bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
                shadow-lg shadow-blue-500/30 transition-all"
              >
                📄 Download Resume
              </motion.a>

              {/* Projects Button */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-4 rounded-full font-bold text-base md:text-lg
                border-2 border-cyan-400 text-cyan-400
                hover:bg-cyan-400 hover:text-black transition-all"
              >
                🚀 View Projects
              </motion.a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-7">

              <a
                href="mailto:rimiruma12@gmail.com"
                className="hover:scale-125 transition-transform duration-300"
              >
                <img
                  src="https://img.icons8.com/?size=32&id=tnnUFgHrPmR0&format=png"
                  alt="Email"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/rimi-ruma/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <img
                  src="https://img.icons8.com/?size=32&id=TpMqKvVFD9pP&format=png"
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://github.com/rimiruma"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <img
                  src="https://img.icons8.com/?size=32&id=akG4VRhAoSii&format=png"
                  alt="GitHub"
                />
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <motion.div
            className="relative w-full flex justify-center items-center mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
          >

            {/* ANIMATED GRADIENT GLOW */}
            <motion.div
              className="absolute w-[350px] h-[350px] md:w-[520px] md:h-[520px]
              rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
              blur-[80px]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* FIRST ROTATING CIRCLE */}
            <motion.div
              className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px]
              rounded-full border-[3px] border-dashed border-cyan-400/50"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* SECOND ROTATING CIRCLE */}
            <motion.div
              className="absolute w-[290px] h-[290px] md:w-[440px] md:h-[440px]
              rounded-full border-2 border-purple-500/40"
              animate={{
                rotate: -360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                },
              }}
            />

            {/* FLOATING PARTICLES */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-300
                shadow-lg shadow-cyan-400"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.7, 1.4, 0.7],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* PROFILE IMAGE */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[280px] h-[360px]
              sm:w-[340px] sm:h-[440px]
              xl:w-[420px] xl:h-[550px]
              rounded-[30px] p-1
              bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
              shadow-2xl shadow-blue-500/40"
            >

              {/* Image */}
              <div className="w-full h-full rounded-[27px] overflow-hidden bg-[#101a2b]">
                <img
                  src="https://avatars.githubusercontent.com/u/139052983?v=4"
                  alt="Rimi Ruma"
                  className="w-full h-full object-cover"
                />
              </div>

            </motion.div>

            {/* AVAILABLE BADGE */}
            <div className="absolute top-0 left-0 sm:left-5
            bg-[#101a2b] border border-blue-500/50
            px-5 py-3 rounded-full shadow-xl z-20">

              <span className="flex items-center gap-2 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                Available for work
              </span>

            </div>

            {/* DEVELOPER BADGE */}
            <div className="absolute bottom-0 z-20
            bg-gradient-to-r from-cyan-500 to-purple-600
            px-6 py-3 rounded-full font-bold shadow-xl text-sm md:text-base">

              💻 Full Stack Developer

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
