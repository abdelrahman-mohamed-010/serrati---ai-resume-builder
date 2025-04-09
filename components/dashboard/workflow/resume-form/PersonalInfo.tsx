import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

export default function PersonalInfo() {
  const [socialLinks, setSocialLinks] = useState<
    { platform: string; url: string }[]
  >([{ platform: "", url: "" }]); // Initialize with one empty link

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const handleRemoveSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">المعلومات الشخصية</h2>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          الاسم الكامل
        </label>
        <Input placeholder="مثال: محمد أحمد" className={inputStyles} />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          البريد الإلكتروني
        </label>
        <Input
          type="email"
          placeholder="example@domain.com"
          className={inputStyles}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          رقم الهاتف
        </label>
        <Input placeholder="+20 1XX XXX XXXX" className={inputStyles} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-700">روابط التواصل الاجتماعي</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAddSocialLink}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            إضافة رابط
          </Button>
        </div>

        {socialLinks.map((_, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-1">
              <Input
                placeholder="LinkedIn، GitHub، موقع شخصي"
                className={`mb-2 ${inputStyles}`}
              />
              <div className="relative">
                <LinkIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="https://..."
                  className={`pl-10 ${inputStyles}`}
                />
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveSocialLink(index)}
              className="h-10 w-10 text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
