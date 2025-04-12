"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Linkedin } from "lucide-react";
import { LinkedInImportModal } from "./LinkedInImportModal";

export const ResumeUploader: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
    // Here you can add logic to process the file
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
  });

  if (uploadedFile) {
    return (
      <div className="bg-gray-50 rounded border border-gray-200 p-4 flex items-center justify-center">
        <p className="text-gray-500">نموذج التعديل</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors h-[100px] flex flex-col items-center justify-center
            ${
              isDragActive
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-primary/50"
            }`}
        >
          <input {...getInputProps()} />
          <Upload className="w-5 h-5 text-gray-400 mb-2" />
          <p className="text-sm font-medium">اختر ملف السيرة الذاتية</p>
        </div>

        <div
          onClick={() => setIsLinkedInModalOpen(true)}
          className="border rounded-lg p-4 text-center cursor-pointer transition-all h-[100px] flex flex-col items-center justify-center bg-white hover:bg-blue-50 border-[#0A66C2] hover:border-[#0A66C2]"
        >
          <Linkedin className="w-5 h-5 text-[#0A66C2] mb-2" />
          <p className="text-sm font-medium text-[#0A66C2]">
            استيراد من LinkedIn
          </p>
        </div>
      </div>

      <LinkedInImportModal
        open={isLinkedInModalOpen}
        onOpenChange={setIsLinkedInModalOpen}
      />
    </>
  );
};
