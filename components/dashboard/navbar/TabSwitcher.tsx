"use client";
import { Button } from "@/components/ui/button";
import { Clipboard, Boxes, Eye } from "lucide-react";
import React, { useState } from "react";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState<"form" | "together" | "preview">(
    "together"
  );

  const getButtonStyle = (currentTab: "form" | "together" | "preview") =>
    `relative z-20 ${
      activeTab === currentTab
        ? "text-white bg-accent-foreground rounded-full hover:bg-accent-foreground hover:text-white px-3"
        : ""
    }`;

  return (
    <div className="bg-gray-100 rounded-full flex items-center gap-1 p-1 relative">
      {/* <div className="absolute bg-accent-foreground rounded-full h-full z-10" /> */}
      <Button
        variant="unstyled"
        onClick={() => setActiveTab("form")}
        className={getButtonStyle("form")}
      >
        <Clipboard className="mr-2" />
        النموذج
      </Button>
      <Button
        variant="unstyled"
        onClick={() => setActiveTab("together")}
        className={getButtonStyle("together")}
      >
        <Boxes className="mr-2" />
        معاً
      </Button>
      <Button
        variant="unstyled"
        onClick={() => setActiveTab("preview")}
        className={getButtonStyle("preview")}
      >
        <Eye className="mr-2" />
        المعاينة
      </Button>
    </div>
  );
};

export default TabSwitcher;
