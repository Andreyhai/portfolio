import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "#", icon: "G" },
  { name: "Telegram", href: "#", icon: "T" },
  { name: "Email", href: "mailto:", icon: "E" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">О себе</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Фронтенд разработчик с опытом работы в федеральной компании.
              Создаю современные веб-приложения и сайты.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted-foreground)]">
          <p>© {currentYear} Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

