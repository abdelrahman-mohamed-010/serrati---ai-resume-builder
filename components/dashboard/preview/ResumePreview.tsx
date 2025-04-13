import React from "react";
import { CreativeTemplate } from "@/components/dashboard/resumeTemplates";

export const ResumePreview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">
        المعاينة
      </h2>
      <div className="flex-1 relative overflow-hidden">
        <div className=" flex items-start justify-center pt-4">
          <div
            className=" border border-gray-200 bg-white rounded-lg overflow-hidden"
            style={{ width: "595px", height: "842px" }}
          >
            <CreativeTemplate />
          </div>
        </div>
      </div>
    </div>
  );
};
