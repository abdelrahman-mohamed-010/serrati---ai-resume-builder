import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Link as LinkIcon } from "lucide-react";
import useDebounce from "@/lib/hooks/useDebounce";
import { useResumeStore } from "@/lib/store/resumeStore";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

interface SocialLink {
  platform: string;
  url: string;
}

export function SocialLinks() {
  const { personalInfo, setPersonalInfo } = useResumeStore();
  const [links, setLinks] = useState<SocialLink[]>(
    personalInfo.socialLinks?.length
      ? personalInfo.socialLinks
      : [{ platform: "", url: "" }]
  );

  const debouncedLinks = useDebounce(links, 600);

  useEffect(() => {
    setPersonalInfo({ socialLinks: debouncedLinks });
  }, [debouncedLinks, setPersonalInfo]);

  const handleAddLink = () => {
    setLinks([...links, { platform: "", url: "" }]);
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const updateLink = (
    index: number,
    field: keyof SocialLink,
    value: string
  ) => {
    setLinks(
      links.map((link, i) => (i === index ? { ...link, [field]: value } : link))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-700">روابط التواصل الاجتماعي</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleAddLink}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          إضافة رابط
        </Button>
      </div>

      {links.map((link, index) => (
        <div key={index} className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="LinkedIn، GitHub، موقع شخصي"
              className={`mb-2 ${inputStyles}`}
              value={link.platform}
              onChange={(e) => updateLink(index, "platform", e.target.value)}
            />
            <div className="relative">
              <LinkIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="https://..."
                className={`pl-10 ${inputStyles}`}
                value={link.url}
                onChange={(e) => updateLink(index, "url", e.target.value)}
              />
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => handleRemoveLink(index)}
            className="h-10 w-10 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      ))}
    </div>
  );
}
