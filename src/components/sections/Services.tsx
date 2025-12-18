"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: "1",
    title: "Создание сайтов",
    description:
      "Разработка современных сайтов под ключ: от дизайна до запуска. Адаптивная верстка, SEO-оптимизация.",
    features: [
      "Лендинги и корпоративные сайты",
      "Адаптивный дизайн",
      "SEO-оптимизация",
      "Интеграция с CMS",
    ],
  },
  {
    id: "2",
    title: "Веб-приложения",
    description:
      "Разработка SPA и PWA приложений на React/Next.js. Современный стек, производительность, масштабируемость.",
    features: [
      "React / Next.js приложения",
      "TypeScript",
      "State management",
      "API интеграции",
    ],
  },
  {
    id: "3",
    title: "Frontend разработка",
    description:
      "Верстка по макетам, создание компонентов, интеграция с бэкендом. Чистый код и лучшие практики.",
    features: [
      "Верстка по макетам",
      "Компонентный подход",
      "Интеграция с API",
      "Оптимизация производительности",
    ],
  },
  {
    id: "4",
    title: "Доработка и поддержка",
    description:
      "Доработка существующих проектов, исправление багов, добавление новых функций, техническая поддержка.",
    features: [
      "Доработка проектов",
      "Исправление багов",
      "Добавление функций",
      "Техническая поддержка",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--muted)]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Что я могу сделать для вашего проекта
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card hover className="h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--muted-foreground)] mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                    >
                      <span className="text-[var(--primary)] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services">
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Link href="/contacts">
              <Button size="lg">Обсудить проект</Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

