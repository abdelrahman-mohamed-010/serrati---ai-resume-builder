import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { useResumeStore } from "@/lib/store/resumeStore";
import useDebounce from "@/lib/hooks/useDebounce";

export default function ProfessionalSummary() {
  const { professionalSummary, setProfessionalSummary } = useResumeStore();
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(professionalSummary || "");
  const debouncedSummary = useDebounce(summary, 600);

  useEffect(() => {
    setProfessionalSummary(debouncedSummary);
  }, [debouncedSummary, setProfessionalSummary]);

  const generateAISuggestion = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">الملخص المهني</h2>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          الهدف الوظيفي
        </label>
        <RichTextEditor content={summary} onChange={setSummary} />
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={generateAISuggestion}
        disabled={loading}
      >
        {loading ? "جاري التوليد..." : "الحصول على اقتراح من الذكاء الاصطناعي"}
      </Button>
    </div>
  );
}
