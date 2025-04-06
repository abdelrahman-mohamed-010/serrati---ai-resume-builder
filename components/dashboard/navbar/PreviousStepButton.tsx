import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";
import React from "react";

const NextStepButton = () => {
  return (
    <>
      <Button variant="unstyled" className=" p-0 m-0">
        <Redo className=" w-6" />
      </Button>
    </>
  );
};

export default NextStepButton;
