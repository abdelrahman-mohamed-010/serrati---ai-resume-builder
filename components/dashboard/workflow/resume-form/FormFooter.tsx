import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FormFooterProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function FormFooter({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}: FormFooterProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
      <Button
        onClick={onPrevious}
        disabled={currentStep === 1}
        variant="outline"
        className="flex items-center gap-2 transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1"
      >
        <ChevronLeft className="w-4 h-4 rtl:hidden" />
        <ChevronRight className="w-4 h-4 hidden rtl:block" />
        السابق
      </Button>
      <div className="text-xs text-gray-400">
        {Math.round((currentStep / totalSteps) * 100)}% مكتمل
      </div>
      <Button
        onClick={onNext}
        disabled={currentStep === totalSteps}
        className="flex items-center gap-2 transition-all duration-200 hover:-translate-x-1 rtl:hover:translate-x-1 bg-secondary hover:bg-secondary/90"
      >
        التالي
        <ChevronRight className="w-4 h-4 rtl:hidden" />
        <ChevronLeft className="w-4 h-4 hidden rtl:block" />
      </Button>
    </div>
  );
}
