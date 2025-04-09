import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Plus, Trash2 } from "lucide-react";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

export default function Experience() {
  const [experiences, setExperiences] = useState([{ id: 1, description: "" }]);

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), description: "" }]);
  };

  const removeExperience = (id: number) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const updateDescription = (id: number, content: string) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, description: content } : exp
      )
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">الخبرات المهنية</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="space-y-2 p-4 border rounded-lg relative">
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
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              المسمى الوظيفي
            </label>
            <Input placeholder="مثال: مطور برمجيات" className={inputStyles} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              الفترة الزمنية
            </label>
            <Input placeholder="مثال: 2020 - 2023" className={inputStyles} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              وصف المهام
            </label>
            <RichTextEditor
              content={exp.description}
              onChange={(content) => updateDescription(exp.id, content)}
            />
            <Button
              variant="secondary"
              size="sm"
              className="mt-2"
            >
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
