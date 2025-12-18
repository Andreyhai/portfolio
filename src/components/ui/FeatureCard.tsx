"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

import FeatureIcon from "./FeatureIcon";

interface FeatureCardProps {
  iconType: "focus" | "speed" | "communication";
  title: string;
  description: string;
  detailedDescription: string;
  delay?: number;
  className?: string;
}

export default function FeatureCard({
  iconType,
  title,
  description,
  detailedDescription,
  delay = 0,
  className,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  // 3D эффект при наведении курсора
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300",
          "hover:border-[var(--primary)] hover:shadow-2xl",
          isHovered && "shadow-[var(--primary)]/30"
        )}
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
        }}
      >
        {/* Градиентный фон при наведении */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--accent)]/10 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Свечение при наведении */}
        {isHovered && (
          <motion.div
            className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-xl opacity-0"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Контент */}
        <div className="relative z-10">
          {/* Иконка */}
          <motion.div
            className="mb-4 inline-block"
            style={{
              transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
            }}
          >
            <FeatureIcon type={iconType} isHovered={isHovered} />
          </motion.div>

          {/* Заголовок */}
          <motion.h4
            className="text-xl font-semibold mb-3"
            animate={{
              color: isHovered ? "var(--primary)" : "var(--foreground)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
            }}
          >
            {title}
          </motion.h4>

          {/* Основное описание */}
          <motion.p
            className="text-[var(--muted-foreground)] text-sm mb-0"
            animate={{
              opacity: isHovered ? 0 : 1,
              height: isHovered ? 0 : "auto",
            }}
            transition={{ duration: 0.3 }}
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            }}
          >
            {description}
          </motion.p>

          {/* Детальное описание при наведении */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            }}
          >
            <p className="text-[var(--foreground)] text-sm leading-relaxed pt-2">
              {detailedDescription}
            </p>
          </motion.div>

          {/* Декоративные элементы */}
          <div className="absolute top-4 right-4 w-12 h-12 opacity-5">
            <motion.div
              className="w-full h-full rounded-full bg-[var(--primary)]"
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.1, 0.3, 0.1] : 0.1,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </div>

          </div>

        {/* Блики при наведении - на всю карточку */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

