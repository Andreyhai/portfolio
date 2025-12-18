"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Project } from "@/types";

// Заглушки для проектов - потом заменишь на реальные
const projects: Project[] = [
  {
    id: "1",
    title: "Корпоративный сайт",
    description:
      "Современный корпоративный сайт с админ-панелью и интеграцией с CRM системой.",
    image: "/next.svg", // Замени на реальные изображения
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    featured: true,
  },
  {
    id: "2",
    title: "E-commerce платформа",
    description:
      "Интернет-магазин с корзиной, оплатой и личным кабинетом пользователя.",
    image: "/next.svg",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    featured: true,
  },
  {
    id: "3",
    title: "Дашборд аналитики",
    description:
      "Веб-приложение для визуализации данных с интерактивными графиками.",
    image: "/next.svg",
    technologies: ["Next.js", "Chart.js", "TypeScript", "PostgreSQL"],
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Проекты</h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Примеры моих работ и реализованных проектов
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline">
                Посмотреть все проекты
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

