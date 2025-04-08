import { Button } from "@/components/ui/button";
import { Save as SaveIcon } from "lucide-react";
import React from "react";

const Save = () => {
  return (
    <>
      <Button
        variant="outline"
        className="border-gray-300 hover:bg-secondary hover:text-white flex gap-2 hover:border-secondary text-black"
      >
        <SaveIcon/> حفظ
      </Button>
    </>
  );
};

export default Save;
