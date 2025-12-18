"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Здесь будет логика отправки формы (например, через API)
    console.log("Form data:", data);
    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Спасибо! Ваше сообщение отправлено.");
    reset();
  };

  const contactInfo = [
    {
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      icon: "✉️",
    },
    {
      label: "Telegram",
      value: "@your_telegram",
      href: "https://t.me/your_telegram",
      icon: "💬",
    },
    {
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      icon: "💻",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Свяжитесь со мной для обсуждения вашего проекта
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Контактная информация */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Давайте обсудим ваш проект
              </h3>
              <p className="text-[var(--muted-foreground)] mb-8">
                Заполните форму или свяжитесь со мной напрямую через один из
                указанных способов. Обычно отвечаю в течение 24 часов.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} hover>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <div className="text-sm text-[var(--muted-foreground)] mb-1">
                          {info.label}
                        </div>
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-[var(--primary)] transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Форма */}
          <AnimatedSection direction="right">
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                    placeholder="Ваше имя"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-[var(--destructive)]">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-[var(--destructive)]">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-[var(--destructive)]">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

