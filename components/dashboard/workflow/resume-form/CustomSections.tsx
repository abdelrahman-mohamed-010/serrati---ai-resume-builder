import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "@/lib/store/resumeStore";
import { CustomSection as CustomSectionType } from "@/lib/store/types";
import useDebounce from "@/lib/hooks/useDebounce";

export default function CustomSections() {
  const { customSections, setCustomSections } = useResumeStore();
  const [sectionItems, setSectionItems] = useState<CustomSectionType[]>(
    customSections?.length ? customSections : [{ title: "", content: "" }]
  );

  const debouncedSections = useDebounce(sectionItems, 600);

  useEffect(() => {
    setCustomSections(debouncedSections);
  }, [debouncedSections, setCustomSections]);

  const addSection = () => {
    setSectionItems([...sectionItems, { title: "", content: "" }]);
  };

  const removeSection = (id: number) => {
    setSectionItems(sectionItems.filter((_, index) => index !== id));
  };

  const updateSection = (
    id: number,
    field: keyof CustomSectionType,
    value: string
  ) => {
    setSectionItems(
      sectionItems.map((section, index) =>
        index === id ? { ...section, [field]: value } : section
      )
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">أقسام مخصصة</h2>
      {sectionItems.map((section, index) => (
        <div key={index} className="relative space-y-4 p-4 border rounded-lg">
          <Button
            onClick={() => removeSection(index)}
            variant="ghost"
            size="icon"
            className="absolute left-2 top-2 h-8 w-8 text-red-500 border-none hover:text-red-600 hover:bg-red-50 border-2 border-red-200 hover:border-red-300"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              عنوان القسم
            </label>
            <Input
              value={section.title}
              onChange={(e) => updateSection(index, "title", e.target.value)}
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
              onChange={(value) => updateSection(index, "content", value)}
            />
          </div>
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
