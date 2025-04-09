"use client";

import { Sidebar } from "@/components/dashboard/workflow/sidebar/Sidebar";
import { ResumeUploader } from "@/components/dashboard/workflow/ResumeUploader";
import ResumeForm from "@/components/dashboard/workflow/resume-form/ResumeForm";

export default function Dashboard() {
  return (
    <div className="container p-4 flex gap-4 flex-row min-h-[calc(108vh)]">
      <div className="w-[263px]">
        <Sidebar currentTemplate="1" />
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <ResumeUploader />
          <ResumeForm />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h2 className="text-base font-semibold mb-3">المعاينة</h2>
          <div className="bg-gray-50 rounded border border-gray-200 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">معاينة السيرة الذاتية</p>
          </div>
        </div>
      </div>
    </div>
  );
}
