import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Service } from "@/types";

export const metadata: Metadata = {
  title: "Услуги | Создание сайтов и веб-приложений",
  description:
    "Услуги фронтенд разработчика: создание сайтов, веб-приложений, доработка проектов. Современный стек технологий.",
  keywords: [
    "создание сайтов",
    "разработка веб приложений",
    "фронтенд разработка",
    "React разработка",
    "Next.js разработка",
  ],
  openGraph: {
    title: "Услуги | Создание сайтов и веб-приложений",
    description:
      "Услуги фронтенд разработчика: создание сайтов, веб-приложений, доработка проектов",
    url: "/services",
  },
};

const services: Service[] = [
  {
    id: "1",
    title: "Создание сайтов под ключ",
    description:
      "Полный цикл разработки сайта: от анализа требований до запуска и поддержки. Создаю современные, быстрые и SEO-оптимизированные сайты.",
    features: [
      "Лендинги для бизнеса",
      "Корпоративные сайты",
      "Многостраничные сайты",
      "Адаптивный дизайн (mobile-first)",
      "SEO-оптимизация",
      "Интеграция с CMS",
      "Аналитика и метрики",
      "Техническая поддержка",
    ],
  },
  {
    id: "2",
    title: "Разработка веб-приложений",
    description:
      "Создание современных SPA и PWA приложений на React и Next.js. Производительные, масштабируемые решения с современным стеком.",
    features: [
      "React / Next.js приложения",
      "TypeScript для надежности",
      "State management (Redux, Zustand)",
      "REST API и GraphQL интеграции",
      "Аутентификация и авторизация",
      "Real-time функциональность",
      "PWA возможности",
      "Оптимизация производительности",
    ],
  },
  {
    id: "3",
    title: "Frontend разработка",
    description:
      "Верстка по макетам, создание переиспользуемых компонентов, интеграция с бэкендом. Чистый код и лучшие практики разработки.",
    features: [
      "Верстка по Figma/Adobe XD",
      "Компонентный подход",
      "Интеграция с API",
      "Работа с дизайн-системами",
      "Анимации и интерактивность",
      "Кроссбраузерная совместимость",
      "Оптимизация загрузки",
      "Code review и рефакторинг",
    ],
  },
  {
    id: "4",
    title: "Доработка и поддержка",
    description:
      "Доработка существующих проектов, исправление багов, добавление новых функций, техническая поддержка и консультации.",
    features: [
      "Доработка существующих проектов",
      "Исправление багов и ошибок",
      "Добавление новых функций",
      "Рефакторинг legacy кода",
      "Миграция на новые технологии",
      "Техническая поддержка",
      "Консультации по разработке",
      "Code review",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Мои услуги
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                Полный спектр услуг по разработке веб-приложений и сайтов.
                Современные технологии, качественный код, быстрая реализация.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12 mb-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card hover className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[var(--muted-foreground)] mb-8">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-lg bg-[var(--muted)]/50"
                      >
                        <span className="text-[var(--primary)] font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-[var(--foreground)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <Card gradient className="p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы начать проект?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Свяжитесь со мной для обсуждения вашего проекта. Обычно
                отвечаю в течение 24 часов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacts">
                  <Button size="lg" variant="secondary">
                    Связаться со мной
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Посмотреть проекты
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

