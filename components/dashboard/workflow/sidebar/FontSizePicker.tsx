"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/lib/store/resumeStore";

export const FontSizePicker: React.FC = () => {
  const { fontSize, setFontSize } = useResumeStore();

  const fontSizes = [
    { id: "small", label: "صغير", value: "14px" },
    { id: "medium", label: "متوسط", value: "16px" },
    { id: "large", label: "كبير", value: "18px" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-sm text-gray-800 mb-3">حجم الخط</h3>
      <div className="grid grid-cols-3 gap-2">
        {fontSizes.map((size) => (
          <Button
            key={size.id}
            variant={fontSize === size.id ? "default" : "outline"}
            size="sm"
            onClick={() => setFontSize(size.id as "small" | "medium" | "large")}
            className="text-xs font-medium"
          >
            {size.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
