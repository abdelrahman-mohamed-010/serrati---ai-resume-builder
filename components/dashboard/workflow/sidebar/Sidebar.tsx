import React from "react";
import { ATSScore } from "./ATSScore";
import { TemplatesSection } from "./TemplatesSection";
import { FontSizePicker } from "./FontSizePicker";

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-4">
      <ATSScore />
      <TemplatesSection />
      <FontSizePicker />
    </div>
  );
};
