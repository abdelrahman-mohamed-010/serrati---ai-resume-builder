import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalSummary from "./ProfessionalSummary";
import Experience from "./Experience";
import EducationSkills from "./EducationSkills";
import CustomSections from "./CustomSections";
import { FormFooter } from "./FormFooter";
import { ConfirmationDialog } from "./ConfirmationDialog";
import { StepsIndicator } from "./StepsIndicator";

const steps = [
  { id: 1, name: "المعلومات الشخصية" },
  { id: 2, name: "الملخص المهني" },
  { id: 3, name: "الخبرات" },
  { id: 4, name: "التعليم والمهارات" },
  { id: 5, name: "أقسام مخصصة" },
];

const ResumeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [targetStep, setTargetStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(Math.min(currentStep + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  const handleStepClick = (step: number) => {
    if (step === currentStep) return;

    setTargetStep(step);
    setShowConfirmDialog(true);
  };

  const confirmStepChange = () => {
    setCurrentStep(targetStep);
    setShowConfirmDialog(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ProfessionalSummary />;
      case 3:
        return <Experience />;
      case 4:
        return <EducationSkills />;
      case 5:
        return <CustomSections />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-fit rounded-xl overflow-hidden shadow-lg border border-gray-100">
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {steps.find((step) => step.id === currentStep)?.name}
          </h2>
        </div>
        <StepsIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
      </div>
      <div className="flex-1 overflow-y-auto p-6 bg-white">
        <div className="max-w-3xl mx-auto">{renderStep()}</div>
      </div>
      <FormFooter
        currentStep={currentStep}
        totalSteps={steps.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <ConfirmationDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        targetStepName={
          steps.find((step) => step.id === targetStep)?.name || ""
        }
        onConfirm={confirmStepChange}
      />
    </div>
  );
};

export default ResumeForm;
