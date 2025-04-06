import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";
import React from "react";

const NextStepButton = () => {
  return (
    <>
      <Button
        variant="unstyled"
        className=" m-0  p-0"
      >
        <Undo className=" w-6" />
      </Button>
    </>
  );
};

export default NextStepButton;
