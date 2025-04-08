"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const FontSizePicker: React.FC = () => {
  const [currentSize, setCurrentSize] = useState("md");

  const fontSizes = [
    { id: "sm", label: "صغير", value: "14px" },
    { id: "md", label: "متوسط", value: "16px" },
    { id: "lg", label: "كبير", value: "18px" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-sm text-gray-800 mb-3">حجم الخط</h3>
      <div className="grid grid-cols-3 gap-2">
        {fontSizes.map((size) => (
          <Button
            key={size.id}
            variant={currentSize === size.id ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentSize(size.id)}
            className="text-xs font-medium"
          >
            {size.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
