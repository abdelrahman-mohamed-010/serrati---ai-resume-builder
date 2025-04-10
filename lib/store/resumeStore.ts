import { create } from "zustand";
import { ResumeStore } from "./types";

export const useResumeStore = create<ResumeStore>((set) => ({
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    socialLinks: [{ platform: "", url: "" }],
  },
  professionalSummary: "",
  experiences: [
    { id: 1, company: "", title: "", duration: "", description: "" },
  ],
  education: [{ institution: "", degree: "", graduationYear: "" }],
  skills: "",
  customSections: [{ title: "", content: "" }],
  fontSize: "medium",

  setPersonalInfo: (info) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, ...info },
    })),
  addSocialLink: () =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        socialLinks: [
          ...state.personalInfo.socialLinks,
          { platform: "", url: "" },
        ],
      },
    })),
  removeSocialLink: (index) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        socialLinks: state.personalInfo.socialLinks.filter(
          (_, i) => i !== index
        ),
      },
    })),

  setProfessionalSummary: (summary) => set({ professionalSummary: summary }),

  addExperience: () =>
    set((state) => ({
      experiences: [
        ...state.experiences,
        {
          id: Date.now(),
          company: "",
          title: "",
          duration: "",
          description: "",
        },
      ],
    })),
  removeExperience: (id) =>
    set((state) => ({
      experiences: state.experiences.filter((exp) => exp.id !== id),
    })),
  updateExperienceDescription: (id, content) =>
    set((state) => ({
      experiences: state.experiences.map((exp) =>
        exp.id === id ? { ...exp, description: content } : exp
      ),
    })),

  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        { institution: "", degree: "", graduationYear: "" },
      ],
    })),
  updateSkills: (skills) => set({ skills }),

  addCustomSection: () =>
    set((state) => ({
      customSections: [...state.customSections, { title: "", content: "" }],
    })),
  updateCustomSection: (id, field, value) =>
    set((state) => ({
      customSections: state.customSections.map((section, index) =>
        index === id ? { ...section, [field]: value } : section
      ),
    })),
  removeCustomSection: (id) =>
    set((state) => ({
      customSections: state.customSections.filter((_, index) => index !== id),
    })),

  setFontSize: (size) => set({ fontSize: size }),
}));
