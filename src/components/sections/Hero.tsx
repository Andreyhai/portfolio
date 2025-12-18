"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5">
      {/* Фоновые градиенты */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-[var(--muted)] border border-[var(--border)] text-sm font-medium text-[var(--muted-foreground)]">
                👋 Привет! Я фронтенд разработчик
              </span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Создаю</span>
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
                современные
              </span>
              <span className="block mt-2">веб-приложения</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8 leading-relaxed">
              С опытом работы в федеральной компании. Специализируюсь на
              создании сайтов, веб-приложений и современных интерфейсов с
              крутым дизайном и анимациями.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contacts">
                <Button size="lg" className="w-full sm:w-auto">
                  Связаться со мной
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Посмотреть проекты
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <AnimatedSection delay={0.8}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-16 flex flex-col items-center gap-2"
            >
              <span className="text-sm text-[var(--muted-foreground)]">
                Прокрутите вниз
              </span>
              <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"
                />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

