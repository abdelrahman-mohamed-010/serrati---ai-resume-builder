import { Input } from "@/components/ui/input";
import { SocialLinks } from "./SocialLinks";
import useDebounce from "@/lib/hooks/useDebounce";
import { useResumeStore } from "@/lib/store/resumeStore";
import { useState, useEffect } from "react";

const inputStyles =
  "shadow-sm bg-white border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/25";

export default function PersonalInfo() {
  const { personalInfo, setPersonalInfo } = useResumeStore();

  const [name, setName] = useState(personalInfo.name || "");
  const [email, setEmail] = useState(personalInfo.email || "");
  const [phone, setPhone] = useState(personalInfo.phone || "");

  const debouncedName = useDebounce(name, 600);
  const debouncedEmail = useDebounce(email, 600);
  const debouncedPhone = useDebounce(phone, 600);

  useEffect(() => {
    setPersonalInfo({ name: debouncedName });
  }, [debouncedName, setPersonalInfo]);

  useEffect(() => {
    setPersonalInfo({ email: debouncedEmail });
  }, [debouncedEmail, setPersonalInfo]);

  useEffect(() => {
    setPersonalInfo({ phone: debouncedPhone });
  }, [debouncedPhone, setPersonalInfo]);

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">المعلومات الشخصية</h2>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          الاسم الكامل
        </label>
        <Input
          placeholder="مثال: محمد أحمد"
          className={inputStyles}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          البريد الإلكتروني
        </label>
        <Input
          type="email"
          placeholder="example@domain.com"
          className={inputStyles}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          رقم الهاتف
        </label>
        <Input
          placeholder="+20 1XX XXX XXXX"
          className={inputStyles}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <SocialLinks />
    </div>
  );
}
