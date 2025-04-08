"use client";
import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const NextStepButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="unstyled" className=" m-0  p-0">
            <Undo className=" w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">الخطوة التالية</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NextStepButton;
