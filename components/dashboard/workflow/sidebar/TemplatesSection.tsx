"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import temp1 from "@/public/images/temp1.jpg";
import temp2 from "@/public/images/temp2.jpg";
import temp3 from "@/public/images/temp3.jpg";
import temp4 from "@/public/images/temp4.jpg";

interface TemplatesSectionProps {
  currentTemplate: string;
  onTemplateSelect?: (templateId: string) => void;
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = ({
  currentTemplate,
  onTemplateSelect,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState(currentTemplate);

  const handleTemplateClick = (templateId: string) => {
    setSelectedTemplate(templateId);
    onTemplateSelect?.(templateId);
  };

  const templates = [
    { id: "1", name: "Modern", image: temp1 },
    { id: "2", name: "Classic", image: temp2 },
    { id: "3", name: "Simple", image: temp3 },
    { id: "4", name: "Creative", image: temp4 },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-sm text-gray-800 mb-3">القوالب</h3>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateClick(template.id)}
            className={`rounded-lg p-2 cursor-pointer transition-all hover:bg-gray-50 ring-1 ring-gray-100
              ${
                selectedTemplate === template.id
                  ? "ring-2 ring-primary bg-primary/5"
                  : "ring-1 ring-gray-100"
              }`}
          >
            <div className="aspect-[3/4] bg-gray-100 rounded-md mb-2 relative overflow-hidden">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className=""
              />
            </div>
            <h4 className="font-medium text-xs text-center text-gray-700">
              {template.name}
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
