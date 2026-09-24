import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const taglineLetters = "BUILD. SHIP. SCALE.".split("");

const Banner = () => {
  return (
    <div
      className="hero min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/qLw9RPSX/DALL-E-2025-03-13-03-47-45-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
      }}>
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center flex flex-col items-center gap-6 z-10">

        {/* Profile Image */}
        <motion.img
          className='w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-sky-500 shadow-lg shadow-sky-500/40'
          src="https://avatars.githubusercontent.com/u/139052983?v=4"
          alt="Picture!"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Animated BUILD. SHIP. SCALE. Tagline */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-2">
          {taglineLetters.map((char, index) => (
            <motion.span
              key={index}
              className={`text-4xl md:text-7xl font-black tracking-widest ${
                char === '.' ? 'text-sky-400' : 'text-white'
              }`}
              style={{
                textShadow: char !== ' ' && char !== '.' ? '0 0 20px rgba(135,206,235,0.6)' : 'none',
              }}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle with Typewriter */}
        <motion.h2
          className="text-lg md:text-2xl font-semibold text-sky-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Typewriter
            words={[
              'Full-Stack Developer',
              'React & Node.js Engineer',
              'Building Scalable Web Apps',
              'Turning Ideas into Reality',
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={45}
            delaySpeed={2000}
          />
        </motion.h2>

        {/* Short Description */}
        <motion.p
          className="max-w-md text-sm md:text-base opacity-80 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          I have a strong passion for technology, especially in web development
          and innovative tools that enhance user experience.
        </motion.p>

        {/* Social Icons + Resume Button */}
        <motion.div
          className='flex items-center gap-8 mt-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <div className="flex gap-4">
            <Link to="mailto:rimiruma12@gmail.com">
              <img className="rounded-xl hover:scale-125 transition-transform duration-200" src="https://img.icons8.com/?size=24&id=tnnUFgHrPmR0&format=gif" alt="Email icon!" />
            </Link>
            <Link to="https://www.linkedin.com/in/rimi-ruma/">
              <img className="rounded-md hover:scale-125 transition-transform duration-200" src="https://img.icons8.com/?size=24&id=TpMqKvVFD9pP&format=gif" alt="LinkedIn icon!" />
            </Link>
            <Link to="https://github.com/rimiruma">
              <img className="rounded-full hover:scale-125 transition-transform duration-200" src="https://img.icons8.com/?size=24&id=akG4VRhAoSii&format=gif" alt="Github icon!" />
            </Link>
          </div>
          <a
            href="https://drive.google.com/file/d/1IHEEzz5H0fnGi5JBvXyPYMUdYOzngrtT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-transparent border-2 border-sky-500 text-white font-bold hover:bg-sky-500 hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;