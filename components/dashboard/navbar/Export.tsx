import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";

const Export = () => {
  return (
    <>
      <Button
        variant="outline"
        className="border-gray-300 hover:bg-secondary hover:text-white flex gap-2  hover:border-secondary text-black "
      >
        <Download /> تصدير
      </Button>
    </>
  );
};

export default Export;
