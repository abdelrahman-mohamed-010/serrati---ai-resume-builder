import React from "react";
import { ATSScore } from "./ATSScore";
import { TemplatesSection } from "./TemplatesSection";
import { FontSizePicker } from "./FontSizePicker";

interface SidebarProps {
  currentTemplate: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTemplate }) => {
  return (
    <div className="space-y-4">
      <ATSScore />
      <TemplatesSection currentTemplate={currentTemplate} />
      <FontSizePicker />
    </div>
  );
};
