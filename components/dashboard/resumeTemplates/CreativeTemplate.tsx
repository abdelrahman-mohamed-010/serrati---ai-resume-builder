import React from "react";
import { useResumeStore } from "../../../lib/store/resumeStore";

const CreativeTemplate: React.FC = () => {
  const {
    personalInfo,
    professionalSummary,
    experiences,
    education,
    skills,
    customSections,
    fontSize,
  } = useResumeStore();

  const fontSizeClass = {
    small: { body: "text-[0.75rem]", heading: "text-[1rem]" }, // 9pt body, 12pt headings
    medium: { body: "text-[0.833rem]", heading: "text-[1.083rem]" }, // 10pt body, 13pt headings
    large: { body: "text-[0.917rem]", heading: "text-[1.167rem]" }, // 11pt body, 14pt headings
  }[fontSize];

  return (
    <div className="= mx-auto p-8 bg-white">
      {/* ATS-Friendly Header */}
      <header className="mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className={`text-[1.5rem] font-bold mb-2 text-gray-900`}>
          {personalInfo.name || "YOUR NAME"}
        </h1>
        <div className="flex flex-wrap gap-3 text-gray-700 text-[0.833rem]">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.socialLinks.map(
            (link, index) =>
              link.platform &&
              link.url && (
                <div key={index}>
                  {link.platform}: {link.url}
                </div>
              )
          )}
        </div>
      </header>

      {/* Professional Summary - Important for ATS keyword matching */}
      {professionalSummary && (
        <section className="mb-6">
          <h2
            className={`${fontSizeClass.heading} font-bold mb-2 text-gray-900 uppercase`}
          >
            Professional Summary
          </h2>
          <div
            className={`${fontSizeClass.body} text-gray-800`}
            dangerouslySetInnerHTML={{ __html: professionalSummary }}
          />
        </section>
      )}

      {/* Experience - Linear format for better ATS parsing */}
      {experiences.length > 0 && (
        <section className="mb-6">
          <h2
            className={`${fontSizeClass.heading} font-bold mb-3 text-gray-900 uppercase`}
          >
            Professional Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <span className="text-gray-700">{exp.duration}</span>
              </div>
              <p className="font-semibold text-gray-800">{exp.company}</p>
              <div
                className={`${fontSizeClass.body} text-gray-800 mt-1`}
                dangerouslySetInnerHTML={{ __html: exp.description }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Skills - Critical for ATS keyword scanning */}
      {skills && (
        <section className="mb-6">
          <h2
            className={`${fontSizeClass.heading} font-bold mb-2 text-gray-900 uppercase`}
          >
            Technical Skills
          </h2>
          <div
            className={`${fontSizeClass.body} text-gray-800`}
            dangerouslySetInnerHTML={{ __html: skills }}
          />
        </section>
      )}

      {/* Education - Standard format */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2
            className={`${fontSizeClass.heading} font-bold mb-3 text-gray-900 uppercase`}
          >
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-gray-700">{edu.graduationYear}</span>
              </div>
              <p className="text-gray-800">{edu.institution}</p>
              {edu.skills && <p className="text-gray-700 mt-1">{edu.skills}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Custom Sections - With standardized formatting */}
      {customSections.map(
        (section, index) =>
          section.title && (
            <section key={index} className="mb-6">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-2 text-gray-900 uppercase`}
              >
                {section.title}
              </h2>
              <div
                className={`${fontSizeClass.body} text-gray-800`}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          )
      )}
    </div>
  );
};

export default CreativeTemplate;
