import React from "react";
import { useResumeStore } from "../../../lib/store/resumeStore";
import DOMPurify from "dompurify";

const MinimalistTemplate: React.FC = () => {
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

  // Sanitize HTML content
  const sanitizeHtml = (html: string) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-sm">
      {/* Header with minimal styling */}
      <header className="mb-8">
        <h1
          className={`${fontSizeClass.heading} text-3xl font-light mb-2 text-gray-900`}
        >
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap text-gray-600">
          {personalInfo.email && (
            <span className="mr-4">{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="mr-4">{personalInfo.phone}</span>
          )}
          {personalInfo.socialLinks.map(
            (link, index) =>
              link.platform &&
              link.url && (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-gray-600 hover:text-gray-900"
                >
                  {link.platform}
                </a>
              )
          )}
        </div>
        <div className="mt-4 h-px bg-gray-200 w-full"></div>
      </header>

      {/* Professional Summary */}
      {professionalSummary && (
        <section className="mb-8">
          <h2
            className={`${fontSizeClass.heading} font-light mb-3 text-gray-800 uppercase tracking-wider`}
          >
            About
          </h2>
          <p className={`${fontSizeClass.body} text-gray-700 leading-relaxed`}>
            {professionalSummary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-8">
          <h2
            className={`${fontSizeClass.heading} font-light mb-4 text-gray-800 uppercase tracking-wider`}
          >
            Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium text-gray-900">{exp.title}</h3>
                <span className="text-gray-500 text-sm">{exp.duration}</span>
              </div>
              <p className="text-gray-700 mb-2">{exp.company}</p>
              <div
                className={`${fontSizeClass.body} text-gray-600 leading-relaxed`}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(exp.description),
                }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2
            className={`${fontSizeClass.heading} font-light mb-4 text-gray-800 uppercase tracking-wider`}
          >
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">
                {edu.institution}, {edu.graduationYear}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section className="mb-8">
          <h2
            className={`${fontSizeClass.heading} font-light mb-4 text-gray-800 uppercase tracking-wider`}
          >
            Skills
          </h2>
          <div
            className={`${fontSizeClass.body} text-gray-700`}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(skills) }}
          />
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map(
        (section, index) =>
          section.title && (
            <section key={index} className="mb-8">
              <h2
                className={`${fontSizeClass.heading} font-light mb-4 text-gray-800 uppercase tracking-wider`}
              >
                {section.title}
              </h2>
              <div
                className={`${fontSizeClass.body} text-gray-700`}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(section.content),
                }}
              />
            </section>
          )
      )}
    </div>
  );
};

export default MinimalistTemplate;
