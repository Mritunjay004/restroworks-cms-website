"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BlockRenderer from "@/components/BlockRenderer";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export default function Home() {
  const { language } = useLanguage();
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPage() {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}/pages?where[slug][equals]=home&locale=${language}`
        );
        const data = await response.json();
        setPage(data.docs[0] || null);
      } catch (error) {
        console.error("Error fetching page:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
  }, [language]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      {page.blocks?.map((block: any, index: number) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}
