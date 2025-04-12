import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { useResumeStore } from "@/lib/store/resumeStore";
import { Plus, Trash2 } from "lucide-react";
import useDebounce from "@/lib/hooks/useDebounce";
import { Experience as ExperienceType } from "@/lib/store/types";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

export default function Experience() {
  const { experiences } = useResumeStore();
  const [experienceItems, setExperienceItems] = useState<ExperienceType[]>(
    experiences?.length
      ? experiences
      : [
          {
            id: Date.now(),
            company: "",
            title: "",
            duration: "",
            description: "",
          },
        ]
  );

  const debouncedExperiences = useDebounce(experienceItems, 600);
  const { setExperiences } = useResumeStore();

  useEffect(() => {
    setExperiences(debouncedExperiences);
  }, [debouncedExperiences, setExperiences]);

  const addExperience = () => {
    setExperienceItems([
      ...experienceItems,
      { id: Date.now(), company: "", title: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (id: number) => {
    setExperienceItems(experienceItems.filter((exp) => exp.id !== id));
  };

  const updateExperience = (
    id: number,
    field: keyof Omit<ExperienceType, "id">,
    value: string
  ) => {
    setExperienceItems(
      experienceItems.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">الخبرات المهنية</h2>
      {experienceItems.map((exp) => (
        <div key={exp.id} className="space-y-4 p-4 border rounded-lg relative">
          <Button
            onClick={() => removeExperience(exp.id)}
            variant="ghost"
            size="icon"
            className="absolute left-2 top-2 h-8 w-8 text-red-500 border-none hover:text-red-600 hover:bg-red-50 border-2 border-red-200 hover:border-red-300"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              اسم الشركة
            </label>
            <Input
              placeholder="مثال: شركة التقنية المتقدمة"
              className={inputStyles}
              value={exp.company}
              onChange={(e) =>
                updateExperience(exp.id, "company", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              المسمى الوظيفي
            </label>
            <Input
              placeholder="مثال: مطور برمجيات"
              className={inputStyles}
              value={exp.title}
              onChange={(e) =>
                updateExperience(exp.id, "title", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              الفترة الزمنية
            </label>
            <Input
              placeholder="مثال: 2020 - 2023"
              className={inputStyles}
              value={exp.duration}
              onChange={(e) =>
                updateExperience(exp.id, "duration", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              وصف المهام
            </label>
            <RichTextEditor
              content={exp.description}
              onChange={(content) =>
                updateExperience(exp.id, "description", content)
              }
            />
            <Button variant="secondary" size="sm" className="mt-2">
              توليد وصف باستخدام الذكاء الاصطناعي
            </Button>
          </div>
        </div>
      ))}
      <Button
        onClick={addExperience}
        className="flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700"
      >
        <Plus className="w-4 h-4" />
        إضافة خبرة جديدة
      </Button>
    </div>
  );
}
