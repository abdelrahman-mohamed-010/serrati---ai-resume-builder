import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inputStyles = "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

export default function EducationSkills() {
  const [education, setEducation] = useState([{ id: 1 }]);

  const addEducation = () => {
    setEducation([...education, { id: Date.now() }]);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">التعليم والمهارات</h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-2 p-4 border rounded-lg">
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
              <Input 
                placeholder="مثال: 2023" 
                className={inputStyles} 
              />
            </div>
          </div>
        ))}
        <Button onClick={addEducation}>إضافة مؤهل تعليمي</Button>
      </div>
      <div className="mt-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          المهارات
        </label>
        <Textarea
          placeholder="أدخل مهاراتك مفصولة بفواصل (مثال: React.js، Node.js، TypeScript)"
          className={`min-h-[100px] ${inputStyles}`}
        />
      </div>
    </div>
  );
}
