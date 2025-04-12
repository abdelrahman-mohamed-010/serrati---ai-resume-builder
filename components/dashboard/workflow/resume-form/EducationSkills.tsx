import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useResumeStore } from "@/lib/store/resumeStore";
import { Plus, Trash2 } from "lucide-react";
import useDebounce from "@/lib/hooks/useDebounce";
import { Education as EducationType } from "@/lib/store/types";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

export default function EducationSkills() {
  const { education } = useResumeStore();
  const [educationItems, setEducationItems] = useState<EducationType[]>(
    education?.length
      ? education
      : [
          {
            id: Date.now(),
            institution: "",
            degree: "",
            graduationYear: "",
            skills: "",
          },
        ]
  );

  const debouncedEducation = useDebounce(educationItems, 600);
  const { setEducation } = useResumeStore();

  useEffect(() => {
    setEducation(debouncedEducation);
  }, [debouncedEducation, setEducation]);

  const addEducation = () => {
    setEducationItems([
      ...educationItems,
      {
        id: Date.now(),
        institution: "",
        degree: "",
        graduationYear: "",
        skills: "",
      },
    ]);
  };

  const removeEducation = (id: number) => {
    setEducationItems(educationItems.filter((edu) => edu.id !== id));
  };

  const updateEducation = (
    id: number,
    field: keyof Omit<EducationType, "id">,
    value: string
  ) => {
    setEducationItems(
      educationItems.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">التعليم والمهارات</h2>
      <div className="space-y-4">
        {educationItems.map((edu) => (
          <div
            key={edu.id}
            className="relative space-y-4 p-4 border rounded-lg"
          >
            <Button
              onClick={() => removeEducation(edu.id)}
              variant="ghost"
              size="icon"
              className="absolute left-2 top-2 h-8 w-8 text-red-500 border-none hover:text-red-600 hover:bg-red-50 border-2 border-red-200 hover:border-red-300"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                المؤسسة التعليمية
              </label>
              <Input
                placeholder="مثال: جامعة القاهرة"
                className={inputStyles}
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(edu.id, "institution", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                الدرجة العلمية
              </label>
              <Input
                placeholder="مثال: بكالوريوس هندسة البرمجيات"
                className={inputStyles}
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(edu.id, "degree", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                سنة التخرج
              </label>
              <Input
                placeholder="مثال: 2023"
                className={inputStyles}
                value={edu.graduationYear}
                onChange={(e) =>
                  updateEducation(edu.id, "graduationYear", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                المهارات المكتسبة
              </label>
              <Textarea
                placeholder="أدخل المهارات المكتسبة من هذه المرحلة التعليمية"
                className={`min-h-[100px] ${inputStyles}`}
                value={edu.skills}
                onChange={(e) =>
                  updateEducation(edu.id, "skills", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <Button
          onClick={addEducation}
          className="flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700"
        >
          <Plus className="w-4 h-4" />
          إضافة مؤهل تعليمي
        </Button>
      </div>
    </div>
  );
}
