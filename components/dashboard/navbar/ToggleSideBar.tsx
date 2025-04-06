"use client";

import { Button } from "@/components/ui/button";
import { PanelRight, PanelRightOpen } from "lucide-react";
import { useState } from "react";

const ToggleSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        variant="unstyled"
        className="border-gray-300 mr-8 hover:bg-secondary border-none hover:text-white flex gap-2 hover:border-secondary text-black "
      >
        {isOpen ? (
          <>
            <PanelRightOpen  className=" w-5"/>
            {" إخفاء الشريط"}
          </>
        ) : (
          <>
            <PanelRight />
            {" إظهار الشريط"}
          </>
        )}
      </Button>
    </>
  );
};

export default ToggleSideBar;
