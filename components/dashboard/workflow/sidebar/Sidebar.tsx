import React from "react";
import { ATSScore } from "./ATSScore";
import { TemplatesSection } from "./TemplatesSection";
import { FontSizePicker } from "./FontSizePicker";
import { LanguagePicker } from "./LanguagePicker";

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-4">
      <ATSScore />
      <TemplatesSection />
      <LanguagePicker />
      <FontSizePicker />
    </div>
  );
};
