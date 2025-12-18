"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Компонент для отображения анимированного числа
function CountUp({ value, delay }: { value: number; delay: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setDisplayValue(0);
      return;
    }

    const duration = 2000; // 2 секунды
    const steps = 60; // количество шагов
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(increment * currentStep, value);
      setDisplayValue(Math.floor(newValue));

      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return <>{displayValue}</>;
}

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  className?: string;
}

export default function StatCard({
  value,
  label,
  delay = 0,
  className,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  // Извлекаем число из value (например, "2+" -> 2)
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const hasPlus = value.includes("+");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 1000 + 300);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 text-center transition-all duration-300",
        "hover:border-[var(--primary)] hover:shadow-xl hover:shadow-[var(--primary)]/20",
        className
      )}
    >
      {/* Анимированный фон заполнения */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--accent)]/10"
        initial={{ scaleY: 0 }}
        animate={
          isInView
            ? { scaleY: 1 }
            : { scaleY: 0 }
        }
        transition={{
          duration: 1.5,
          delay: delay + 0.2,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        style={{ transformOrigin: "bottom" }}
      />

      {/* Эффект при наведении */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Свечение при наведении */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Контент */}
      <div className="relative z-10">
        <motion.div
          className="text-3xl md:text-4xl font-bold mb-2"
          animate={{
            scale: isHovered ? 1.1 : 1,
            color: isHovered
              ? "var(--primary)"
              : "var(--primary)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {hasPlus ? (
              <>
                <motion.span>
                  {shouldAnimate ? (
                    <CountUp value={numericValue} delay={delay} />
                  ) : (
                    0
                  )}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldAnimate ? 1 : 0 }}
                  transition={{ delay: delay + 1.5 }}
                >
                  +
                </motion.span>
              </>
            ) : (
              value
            )}
          </motion.span>
        </motion.div>
        <motion.div
          className="text-sm text-[var(--muted-foreground)] font-medium"
          animate={{
            color: isHovered
              ? "var(--foreground)"
              : "var(--muted-foreground)",
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-2 right-2 w-8 h-8 opacity-10">
        <motion.div
          className="w-full h-full rounded-full bg-[var(--primary)]"
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: isHovered ? [0.1, 0.3, 0.1] : 0.1,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </div>
    </motion.div>
  );
}

