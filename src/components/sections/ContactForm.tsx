"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  subject: z.string().min(3, "Тема должна содержать минимум 3 символа"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
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
    alert("Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.");
    reset();
  };

  return (
    <Card>
      <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Имя *
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
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
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
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Тема *
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
            placeholder="Тема сообщения"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-[var(--destructive)]">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Сообщение *
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
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
  );
}

