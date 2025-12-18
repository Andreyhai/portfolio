"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--muted)] z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
        style={{
          width: `${scrollProgress}%`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </div>
  );
}

