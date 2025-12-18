import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Контакты | Свяжитесь со мной",
  description:
    "Свяжитесь со мной для обсуждения вашего проекта. Email, Telegram, GitHub. Обычно отвечаю в течение 24 часов.",
  keywords: [
    "контакты фронтенд разработчика",
    "связаться с разработчиком",
    "заказать сайт",
    "заказать веб приложение",
  ],
  openGraph: {
    title: "Контакты | Свяжитесь со мной",
    description:
      "Свяжитесь со мной для обсуждения вашего проекта",
    url: "/contacts",
  },
};

const contactInfo = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: "✉️",
    description: "Напишите мне на email",
  },
  {
    label: "Telegram",
    value: "@your_telegram",
    href: "https://t.me/your_telegram",
    icon: "💬",
    description: "Быстрая связь в Telegram",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    icon: "💻",
    description: "Мои проекты на GitHub",
  },
];

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Свяжитесь со мной
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                Готов обсудить ваш проект и помочь реализовать ваши идеи.
                Обычно отвечаю в течение 24 часов.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            {/* Контактная информация */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">
                  Способы связи
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} hover>
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{info.icon}</span>
                        <div>
                          <div className="text-sm text-[var(--muted-foreground)] mb-1">
                            {info.label}
                          </div>
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-[var(--primary)] transition-colors block mb-1"
                          >
                            {info.value}
                          </a>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Форма */}
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <Card gradient className="p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Давайте создадим что-то крутое вместе!
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Я всегда открыт для обсуждения новых проектов и идей
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

