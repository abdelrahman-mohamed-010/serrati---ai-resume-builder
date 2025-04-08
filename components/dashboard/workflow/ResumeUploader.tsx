"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

export const ResumeUploader: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

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
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
        ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-gray-200 hover:border-primary/50"
        }`}
    >
      <input {...getInputProps()} />
      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
      <div>
        <p className="text-sm font-medium">
          اسحب وأفلت السيرة الذاتية هنا أو انقر لاختيار ملف
        </p>
        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX</p>
      </div>
    </div>
  );
};
