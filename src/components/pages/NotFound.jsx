import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden px-4">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#05AFFF] rounded-full blur-[120px]"
      />

      {/* Floating Circle 1 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[10%] w-3 h-3 bg-[#05AFFF] rounded-full"
      />

      {/* Floating Circle 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[12%] w-4 h-4 bg-[#05AFFF] rounded-full"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 text-center max-w-2xl"
      >

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="text-[120px] sm:text-[160px] md:text-[220px] font-black leading-none tracking-tighter bg-gradient-to-r from-[#05AFFF] via-white to-[#05AFFF] bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="text-2xl md:text-4xl font-bold mt-4"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className="text-gray-400 mt-4 text-sm md:text-base max-w-md mx-auto"
        >
          The page you are looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.9,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >

          {/* Home Button */}
          <Link to="/">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(5,175,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#05AFFF] rounded-xl font-semibold cursor-pointer"
            >
              <Home size={18} />
              Back to Home
            </motion.div>
          </Link>

          {/* Go Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{
              scale: 1.05,
              borderColor: "#05AFFF",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-colors"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>

        </motion.div>
      </motion.div>
    </div>
  );
}