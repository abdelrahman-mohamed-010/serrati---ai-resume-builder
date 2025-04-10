import React from "react";
import { useResumeStore } from "../../../lib/store/resumeStore";

const ClassicTemplate: React.FC = () => {
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
    small: { body: "text-sm", heading: "text-lg" },
    medium: { body: "text-base", heading: "text-xl" },
    large: { body: "text-lg", heading: "text-2xl" },
  }[fontSize];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      {/* Header */}
      <header className="text-center mb-8 pb-4 border-b-2">
        <h1 className={`${fontSizeClass.heading} text-3xl font-bold mb-2`}>
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex justify-center space-x-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
        {personalInfo.socialLinks.length > 0 && (
          <div className="flex justify-center mt-2 space-x-3">
            {personalInfo.socialLinks.map(
              (link, index) =>
                link.platform &&
                link.url && (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.platform}
                  </a>
                )
            )}
          </div>
        )}
      </header>

      {/* Professional Summary */}
      {professionalSummary && (
        <section className="mb-6">
          <h2 className={`${fontSizeClass.heading} font-semibold mb-2`}>
            Professional Summary
          </h2>
          <p className={fontSizeClass.body}>{professionalSummary}</p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-6">
          <h2 className={`${fontSizeClass.heading} font-semibold mb-2`}>
            Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="font-medium">
                {exp.title} at {exp.company}
              </h3>
              <p className="text-gray-600 italic">{exp.duration}</p>
              <div
                className={fontSizeClass.body}
                dangerouslySetInnerHTML={{ __html: exp.description }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className={`${fontSizeClass.heading} font-semibold mb-2`}>
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-medium">{edu.degree}</h3>
              <p>
                {edu.institution}, {edu.graduationYear}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section className="mb-6">
          <h2 className={`${fontSizeClass.heading} font-semibold mb-2`}>
            Skills
          </h2>
          <div
            className={fontSizeClass.body}
            dangerouslySetInnerHTML={{ __html: skills }}
          />
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map(
        (section, index) =>
          section.title && (
            <section key={index} className="mb-6">
              <h2 className={`${fontSizeClass.heading} font-semibold mb-2`}>
                {section.title}
              </h2>
              <div
                className={fontSizeClass.body}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          )
      )}
    </div>
  );
};

export default ClassicTemplate;
