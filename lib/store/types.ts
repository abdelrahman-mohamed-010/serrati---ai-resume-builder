export type SocialLink = {
  platform: string;
  url: string;
};

export type Experience = {
  id: number;
  company: string;
  title: string;
  duration: string;
  description: string;
};

export type Education = {
  id: number;
  institution: string;
  degree: string;
  graduationYear: string;
  skills: string;
};

export type CustomSection = {
  title: string;
  content: string;
};

export type FontSize = "small" | "medium" | "large";

export interface ResumeStore {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    socialLinks: SocialLink[];
  };
  professionalSummary: string;
  experiences: Experience[];
  education: Education[];
  skills: string;
  customSections: CustomSection[];
  fontSize: FontSize;

  setPersonalInfo: (info: Partial<ResumeStore["personalInfo"]>) => void;
  addSocialLink: () => void;
  removeSocialLink: (index: number) => void;

  setProfessionalSummary: (summary: string) => void;
  addExperience: () => void;
  removeExperience: (id: number) => void;
  updateExperience: (
    id: number,
    field: keyof Omit<Experience, "id">,
    value: string
  ) => void;
  updateExperienceDescription: (id: number, content: string) => void;

  addEducation: () => void;
  removeEducation: (id: number) => void;
  updateEducation: (
    id: number,
    field: keyof Omit<Education, "id">,
    value: string
  ) => void;
  setEducation: (education: Education[]) => void;

  updateSkills: (skills: string) => void;

  addCustomSection: () => void;
  updateCustomSection: (
    id: number,
    field: keyof CustomSection,
    value: string
  ) => void;
  removeCustomSection: (id: number) => void;
  setCustomSections: (customSections: CustomSection[]) => void;

  setFontSize: (size: FontSize) => void;
  setExperiences: (experiences: Experience[]) => void;
}
