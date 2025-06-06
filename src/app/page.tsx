"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/header/Navbar";
import BackgroundAnimation from "@/components/background-animation";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
      <BackgroundAnimation />
      <Navigation />

      <motion.div style={{ opacity }} className="relative z-10"></motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </div>
  );
}
