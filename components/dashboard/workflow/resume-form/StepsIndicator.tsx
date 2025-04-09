import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
}

interface StepsIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function StepsIndicator({
  steps,
  currentStep,
  onStepClick,
}: StepsIndicatorProps) {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-100 rounded-full"></div>
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepClick(step.id)}
            className="group flex flex-col items-center"
          >
            <div
              className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full shadow-md border-2 transition-all duration-300 ${
                step.id < currentStep
                  ? "bg-primary border-primary text-white"
                  : step.id === currentStep
                  ? "bg-white border-primary text-primary ring-4 ring-primary/10"
                  : "bg-white border-gray-200 text-gray-400"
              }`}
            >
              {step.id < currentStep ? <Check className="w-5 h-5" /> : step.id}
            </div>
            <span
              className={`absolute top-12 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 duration-200 ${
                step.id === currentStep
                  ? "font-medium text-primary"
                  : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
