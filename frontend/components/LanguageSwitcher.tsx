"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    // Refresh the current page with new locale
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-3 py-1 rounded ${
          language === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("es")}
        className={`px-3 py-1 rounded ${
          language === "es"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        ES
      </button>
    </div>
  );
}
