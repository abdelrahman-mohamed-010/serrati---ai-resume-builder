"use client";

import { ReactNode } from "react";
import { useResumeStore } from "@/lib/store/resumeStore";

interface DirectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function DirectionWrapper({
  children,
  className = "",
}: DirectionWrapperProps) {
  const { language } = useResumeStore();

  return (
    <div
      className={`${
        language === "english" ? "direction-ltr" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
