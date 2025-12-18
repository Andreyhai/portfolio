"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCard from "@/components/ui/StatCard";
import FeatureCard from "@/components/ui/FeatureCard";

export default function About() {
  const stats = [
    { label: "Лет опыта", value: "2+" },
    { label: "Проектов", value: "10+" },
    { label: "Технологий", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              О себе
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Немного информации о моем опыте и подходе к работе
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Опыт работы
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Работал 2 года в федеральной компании, где занимался разработкой
                и поддержкой веб-приложений. Участвовал в создании крупных
                проектов, работал в команде и самостоятельно.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Теперь перехожу на фриланс, чтобы работать над интересными
                проектами и помогать клиентам создавать современные
                веб-решения.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            iconType="focus"
            title="Фокус"
            description="Создание качественных, производительных и красивых веб-приложений"
            detailedDescription="Каждый проект начинается с глубокого понимания целей и задач. Я фокусируюсь на создании решений, которые не только красиво выглядят, но и эффективно работают. Использую современные технологии и лучшие практики для достижения оптимального результата."
            delay={0.1}
          />
          <FeatureCard
            iconType="speed"
            title="Скорость"
            description="Быстрая разработка без потери качества. Оптимизация и лучшие практики"
            detailedDescription="Время — ценный ресурс. Я оптимизирую процесс разработки, используя проверенные инструменты и методологии. Код пишется чисто и структурированно, что позволяет быстро вносить изменения и масштабировать проект без технического долга."
            delay={0.2}
          />
          <FeatureCard
            iconType="communication"
            title="Коммуникация"
            description="Прозрачное общение, регулярные обновления и готовность к обратной связи"
            detailedDescription="Успех проекта зависит от понимания между клиентом и разработчиком. Я поддерживаю постоянную связь, предоставляю регулярные обновления о прогрессе и всегда открыт для обсуждения идей. Ваше мнение важно на каждом этапе разработки."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

