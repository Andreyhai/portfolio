"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import { Skill } from "@/types";

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Framer Motion", level: 75, category: "frontend" },
  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 65, category: "backend" },
  { name: "REST API", level: 80, category: "backend" },
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "Webpack", level: 70, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
];

const categories = [
  { id: "frontend", label: "Frontend", emoji: "🎨" },
  { id: "backend", label: "Backend", emoji: "⚙️" },
  { id: "tools", label: "Инструменты", emoji: "🛠️" },
];

export default function Skills() {
  const getSkillsByCategory = (category: string) =>
    skills.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="py-20 md:py-32 bg-[var(--muted)]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Навыки и технологии
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Технологии, с которыми я работаю
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            if (categorySkills.length === 0) return null;

            return (
              <AnimatedSection
                key={category.id}
                delay={categoryIndex * 0.1}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span>{category.emoji}</span>
                    <span>{category.label}</span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => (
                      <Card key={skill.name} hover>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-[var(--muted-foreground)]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

