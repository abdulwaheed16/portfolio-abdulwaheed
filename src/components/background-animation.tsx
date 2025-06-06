"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div
            className={`w-${8 + Math.floor(Math.random() * 16)} h-${
              8 + Math.floor(Math.random() * 16)
            } bg-gradient-to-br from-blue-400 to-purple-600 rounded-full`}
          />
        </motion.div>
      ))}

      {/* Code-like floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-blue-200 font-mono text-sm opacity-5"
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {
            [
              "<div>",
              "</div>",
              "const",
              "function",
              "return",
              "import",
              "export",
              "async",
            ][i]
          }
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
