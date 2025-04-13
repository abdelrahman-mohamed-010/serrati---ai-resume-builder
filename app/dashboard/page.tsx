"use client";

import { Sidebar } from "@/components/dashboard/workflow/sidebar/Sidebar";
import { ResumeUploader } from "@/components/dashboard/importExistingResume/ResumeUploader";
import ResumeForm from "@/components/dashboard/workflow/resume-form/ResumeForm";
import { ResumePreview } from "@/components/dashboard/preview/ResumePreview";

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
        <ResumePreview />
      </div>
    </div>
  );
}
