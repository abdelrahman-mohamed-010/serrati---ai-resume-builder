import { Button } from "@/components/ui/button";
import { Archive as ArchiveIcon } from "lucide-react";
import React from "react";

const Archive = () => {
  return (
    <>
      <Button
        variant="outline"
        className="border-gray-300 hover:bg-secondary hover:text-white flex gap-2 hover:border-secondary text-black"
      >
        <ArchiveIcon/> الأرشيف
      </Button>
    </>
  );
};

export default Archive;
