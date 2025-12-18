import { generateStructuredData } from "@/lib/seo";

interface StructuredDataProps {
  type: "Person" | "WebSite" | "Service";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const data = generateStructuredData(type);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

