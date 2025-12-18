import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Frontend Developer | Портфолио",
    template: "%s | Frontend Developer",
  },
  description:
    "Фронтенд разработчик с опытом работы в федеральной компании. Создание сайтов, веб-приложений и современных интерфейсов.",
  keywords: [
    "фронтенд разработчик",
    "создание сайтов",
    "веб приложения",
    "React",
    "Next.js",
    "TypeScript",
    "фриланс",
    "разработка сайтов",
    "веб разработка",
	"Frontend rnd",
	"Фронтенд разработчик в Ростове-на-Дону",

  ],
  authors: [{ name: "Frontend Developer" }],
  creator: "Frontend Developer",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Frontend Developer Portfolio",
    title: "Frontend Developer | Портфолио",
    description:
      "Фронтенд разработчик с опытом работы в федеральной компании. Создание сайтов, веб-приложений и современных интерфейсов.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer | Портфолио",
    description:
      "Фронтенд разработчик с опытом работы в федеральной компании",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Добавь свои ключи для верификации
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export function generateStructuredData(type: "Person" | "WebSite" | "Service") {
  const baseData = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "Person":
      return {
        ...baseData,
        "@type": "Person",
        name: "Frontend Developer",
        jobTitle: "Frontend Developer",
        url: siteUrl,
        sameAs: [
          "https://github.com/yourusername",
          "https://t.me/your_telegram",
        ],
        knowsAbout: [
          "Frontend Development",
          "React",
          "Next.js",
          "TypeScript",
          "Web Development",
        ],
      };

    case "WebSite":
      return {
        ...baseData,
        "@type": "WebSite",
        name: "Frontend Developer Portfolio",
        url: siteUrl,
        description:
          "Портфолио фронтенд разработчика с примерами работ и услуг",
      };

    case "Service":
      return {
        ...baseData,
        "@type": "Service",
        serviceType: "Web Development",
        provider: {
          "@type": "Person",
          name: "Frontend Developer",
        },
        areaServed: "RU",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteUrl}/contacts`,
        },
      };

    default:
      return baseData;
  }
}

