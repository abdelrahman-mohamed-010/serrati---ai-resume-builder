import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Plus } from "lucide-react";

interface Section {
  id: number;
  title: string;
  content: string;
}

export default function CustomSections() {
  const [sections, setSections] = useState<Section[]>([
    { id: 1, title: "", content: "" },
  ]);

  const addSection = () => {
    setSections([...sections, { id: Date.now(), title: "", content: "" }]);
  };

  const removeSection = (id: number) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const updateSection = (id: number, field: keyof Section, value: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">أقسام مخصصة</h2>
      {sections.map((section) => (
        <div key={section.id} className="space-y-2 p-4 border rounded-lg">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              عنوان القسم
            </label>
            <Input
              value={section.title}
              onChange={(e) =>
                updateSection(section.id, "title", e.target.value)
              }
              placeholder="مثال: المشاريع الشخصية، الإنجازات، الدورات التدريبية"
              className="shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              محتوى القسم
            </label>
            <RichTextEditor
              content={section.content}
              onChange={(value) => updateSection(section.id, "content", value)}
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeSection(section.id)}
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            حذف القسم
          </Button>
        </div>
      ))}
      <Button
        onClick={addSection}
        className="flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700"
      >
        <Plus className="w-4 h-4" />
        إضافة قسم جديد
      </Button>
    </div>
  );
}
