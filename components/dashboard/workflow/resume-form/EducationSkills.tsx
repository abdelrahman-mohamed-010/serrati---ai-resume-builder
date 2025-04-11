import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

interface Education {
  id: number;
  institution?: string;
  degree?: string;
  graduationYear?: string;
  skills?: string;
}

export default function EducationSkills() {
  const [education, setEducation] = useState<Education[]>([{ id: 1 }]);

  const addEducation = () => {
    setEducation([...education, { id: Date.now() }]);
  };

  const removeEducation = (id: number) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">التعليم والمهارات</h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="relative space-y-4 p-4 border rounded-lg"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                المؤسسة التعليمية
              </label>
              <Input
                placeholder="مثال: جامعة القاهرة"
                className={inputStyles}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                الدرجة العلمية
              </label>
              <Input
                placeholder="مثال: بكالوريوس هندسة البرمجيات"
                className={inputStyles}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                سنة التخرج
              </label>
              <Input placeholder="مثال: 2023" className={inputStyles} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                المهارات المكتسبة
              </label>
              <Textarea
                placeholder="أدخل المهارات المكتسبة من هذه المرحلة التعليمية"
                className={`min-h-[100px] ${inputStyles}`}
                value={edu.skills}
                onChange={(e) => {
                  setEducation(
                    education.map((item) =>
                      item.id === edu.id
                        ? { ...item, skills: e.target.value }
                        : item
                    )
                  );
                }}
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeEducation(edu.id)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              حذف المؤهل التعليمي
            </Button>
          </div>
        ))}
        <Button onClick={addEducation}>إضافة مؤهل تعليمي</Button>
      </div>
    </div>
  );
}
