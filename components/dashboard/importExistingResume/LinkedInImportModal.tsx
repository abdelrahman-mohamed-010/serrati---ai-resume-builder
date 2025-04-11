import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LinkedInImportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LinkedInImportModal({
  open,
  onOpenChange,
}: LinkedInImportModalProps) {
  const [linkedInUrl, setLinkedInUrl] = useState("");

  const handleImport = () => {
    // Handle LinkedIn import logic here
    console.log("Importing from LinkedIn:", linkedInUrl);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>استيراد من LinkedIn</DialogTitle>
          <DialogDescription>
            أدخل رابط ملفك الشخصي على LinkedIn للاستيراد
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="https://www.linkedin.com/in/username"
            value={linkedInUrl}
            onChange={(e) => setLinkedInUrl(e.target.value)}
            dir="ltr"
          />
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              إلغاء
            </Button>
            <Button onClick={handleImport}>استيراد</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
