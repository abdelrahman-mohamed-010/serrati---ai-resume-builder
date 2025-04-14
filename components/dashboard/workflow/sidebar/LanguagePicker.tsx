"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/lib/store/resumeStore";

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useResumeStore();

  const languages = [
    { id: "arabic", label: "عربي" },
    { id: "english", label: "إنجليزي" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-sm text-gray-800 mb-3">لغة السيرة</h3>
      <div className="grid grid-cols-2 gap-2">
        {languages.map((lang) => (
          <Button
            key={lang.id}
            variant={language === lang.id ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage(lang.id as "arabic" | "english")}
            className="text-xs font-medium"
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
