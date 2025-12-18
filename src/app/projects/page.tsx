import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Проекты | Портфолио работ",
  description:
    "Примеры моих работ: веб-приложения, сайты, дашборды. Реализованные проекты с использованием современных технологий.",
  keywords: [
    "портфолио проектов",
    "примеры работ",
    "веб приложения",
    "React проекты",
    "Next.js проекты",
  ],
  openGraph: {
    title: "Проекты | Портфолио работ",
    description:
      "Примеры моих работ: веб-приложения, сайты, дашборды",
    url: "/projects",
  },
};

const projects: Project[] = [
  {
    id: "1",
    title: "Корпоративный сайт",
    description:
      "Современный корпоративный сайт с админ-панелью и интеграцией с CRM системой. Реализована система управления контентом, мультиязычность, SEO-оптимизация.",
    image: "/next.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "2",
    title: "E-commerce платформа",
    description:
      "Интернет-магазин с корзиной, интеграцией платежных систем, личным кабинетом пользователя и админ-панелью для управления товарами.",
    image: "/next.svg",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Дашборд аналитики",
    description:
      "Веб-приложение для визуализации данных с интерактивными графиками, фильтрами и экспортом отчетов. Real-time обновление данных.",
    image: "/next.svg",
    technologies: ["Next.js", "Chart.js", "TypeScript", "PostgreSQL", "WebSocket"],
    link: "#",
    featured: false,
  },
  {
    id: "4",
    title: "Лендинг для стартапа",
    description:
      "Яркий лендинг с анимациями для IT-стартапа. Адаптивный дизайн, быстрая загрузка, интеграция с формами обратной связи.",
    image: "/next.svg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Task Management App",
    description:
      "Приложение для управления задачами с drag-and-drop, тегами, фильтрами и командной работой. PWA с офлайн режимом.",
    image: "/next.svg",
    technologies: ["React", "TypeScript", "IndexedDB", "PWA", "Zustand"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "6",
    title: "Блог платформа",
    description:
      "Платформа для ведения блога с markdown редактором, тегами, комментариями и системой подписок. SSR для лучшего SEO.",
    image: "/next.svg",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "NextAuth"],
    link: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Мои проекты
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                Примеры реализованных проектов. Каждый проект — это уникальное
                решение с использованием современных технологий и лучших
                практик разработки.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Card hover className="overflow-hidden flex flex-col h-full">
                  <div className="relative w-full h-48 mb-4 bg-[var(--muted)] rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-[var(--muted)] text-[var(--muted-foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Link href={project.link} target="_blank" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Сайт
                        </Button>
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex-1"
                      >
                        <Button variant="ghost" size="sm" className="w-full">
                          GitHub
                        </Button>
                      </Link>
                    )}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <Card gradient className="p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Хотите такой же проект?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Свяжитесь со мной для обсуждения вашего проекта
              </p>
              <Link href="/contacts">
                <Button size="lg" variant="secondary">
                  Обсудить проект
                </Button>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

