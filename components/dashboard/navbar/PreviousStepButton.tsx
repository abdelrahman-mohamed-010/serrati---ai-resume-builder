"use client";
import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";
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
          <Button variant="unstyled" className=" p-0 m-0">
            <Redo className=" w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">الخطوة السابقة</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NextStepButton;
