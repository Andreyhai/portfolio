"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
}

export default function ParallaxText({
  children,
  className,
}: ParallaxTextProps) {
  return (
    <div
      className="overflow-hidden whitespace-nowrap flex"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        <span className={className}>{children}</span>
        <span className={className}>{children}</span>
        <span className={className}>{children}</span>
      </motion.div>
    </div>
  );
}

