import { Language } from "../store/types";

type TranslationKey =
  | "workExperience"
  | "education"
  | "skills"
  | "contact"
  | "phone"
  | "email"
  | "connect"
  | "about"
  | "profile"
  | "professionalSummary"
  | "executiveSummary"
  | "professionalExperience"
  | "areasOfExpertise"
  | "yourName";

const translations: Record<TranslationKey, Record<Language, string>> = {
  workExperience: {
    arabic: "الخبرة العملية",
    english: "Work Experience",
  },
  education: {
    arabic: "التعليم",
    english: "Education",
  },
  skills: {
    arabic: "المهارات",
    english: "Skills",
  },
  contact: {
    arabic: "معلومات الاتصال",
    english: "Contact",
  },
  phone: {
    arabic: "الهاتف",
    english: "Phone",
  },
  email: {
    arabic: "البريد الالكتروني",
    english: "Email",
  },
  connect: {
    arabic: "التواصل",
    english: "Connect",
  },
  about: {
    arabic: "نبذة عني",
    english: "About",
  },
  profile: {
    arabic: "الملف الشخصي",
    english: "Profile",
  },
  professionalSummary: {
    arabic: "الملخص المهني",
    english: "Professional Summary",
  },
  executiveSummary: {
    arabic: "الملخص التنفيذي",
    english: "Executive Summary",
  },
  professionalExperience: {
    arabic: "الخبرة المهنية",
    english: "Professional Experience",
  },
  areasOfExpertise: {
    arabic: "مجالات الخبرة",
    english: "Areas of Expertise",
  },
  yourName: {
    arabic: "أدخل اسمك",
    english: "Your Name",
  },
};

export function getTranslation(
  key: TranslationKey,
  language: Language
): string {
  return translations[key][language];
}
