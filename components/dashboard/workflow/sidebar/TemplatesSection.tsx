"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import temp1 from "@/public/images/temp1.jpg";
import temp2 from "@/public/images/temp2.jpg";
import temp3 from "@/public/images/temp3.jpg";
import temp4 from "@/public/images/temp4.jpg";
import { useResumeStore } from "@/lib/store/resumeStore";
import { TemplateType } from "@/lib/store/types";

interface TemplatesSectionProps {
  currentTemplate?: string;
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = () => {
  const { template, setTemplate } = useResumeStore();

  const handleTemplateClick = (templateId: TemplateType) => {
    setTemplate(templateId);
  };

  const templates = [
    { id: "classic" as TemplateType, name: "Classic", image: temp1 },
    { id: "modern" as TemplateType, name: "Modern", image: temp2 },
    { id: "minimalist" as TemplateType, name: "Minimalist", image: temp3 },
    { id: "executive" as TemplateType, name: "Executive", image: temp4 },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-sm text-gray-800 mb-3">القوالب</h3>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {templates.map((templateItem) => (
          <div
            key={templateItem.id}
            onClick={() => handleTemplateClick(templateItem.id)}
            className={`rounded-lg p-2 cursor-pointer transition-all hover:bg-gray-50 ring-1 ring-gray-100
              ${
                template === templateItem.id
                  ? "ring-2 ring-primary bg-primary/5"
                  : "ring-1 ring-gray-100"
              }`}
          >
            <div className="aspect-[3/4] bg-gray-100 rounded-md mb-2 relative overflow-hidden">
              <Image
                src={templateItem.image}
                alt={templateItem.name}
                fill
                className=""
              />
            </div>
            <h4 className="font-medium text-xs text-center text-gray-700">
              {templateItem.name}
            </h4>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full text-xs font-medium"
      >
        استكشاف المزيد من القوالب
      </Button>
    </div>
  );
};
