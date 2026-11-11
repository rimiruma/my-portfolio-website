
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeIntro = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center
          bg-[#050d1b] text-white overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >

          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full" />

          {/* Welcome Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-cyan-400 tracking-[5px] text-sm md:text-lg mb-5"
          >
            WELCOME TO
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-7xl font-black text-center
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
            bg-clip-text text-transparent"
          >
            MY PORTFOLIO
          </motion.h1>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-gray-300 text-lg md:text-2xl"
          >
            I'm Rimi Ruma
          </motion.p>

          {/* Loading Bar */}
          <div className="mt-12 w-48 md:w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, delay: 0.5 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-gray-500 text-xs tracking-widest"
          >
            PLEASE WAIT...
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeIntro;
