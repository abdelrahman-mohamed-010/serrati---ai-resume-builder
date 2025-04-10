import React from "react";
import { useResumeStore } from "../../../lib/store/resumeStore";
import DOMPurify from "dompurify";

const ExecutiveTemplate: React.FC = () => {
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
    small: { body: "text-sm", heading: "text-xl" },
    medium: { body: "text-base", heading: "text-2xl" },
    large: { body: "text-lg", heading: "text-3xl" },
  }[fontSize];

  // Sanitize HTML content
  const sanitizeHtml = (html: string) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      {/* Bold Header */}
      <div className="bg-gray-900 text-white px-10 py-8">
        <h1 className={`${fontSizeClass.heading} text-3xl font-bold mb-2`}>
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap items-center text-gray-300">
          {personalInfo.email && (
            <span className="mr-6 flex items-center">
              <span className="material-icons text-sm mr-1">email</span>
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="mr-6 flex items-center">
              <span className="material-icons text-sm mr-1">phone</span>
              {personalInfo.phone}
            </span>
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
                  className="mr-6 text-blue-300 hover:text-blue-200 flex items-center"
                >
                  <span className="material-icons text-sm mr-1">link</span>
                  {link.platform}
                </a>
              )
          )}
        </div>
      </div>

      <div className="p-10">
        {/* Professional Summary */}
        {professionalSummary && (
          <section className="mb-8">
            <h2
              className={`${fontSizeClass.heading} font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-2`}
            >
              Executive Summary
            </h2>
            <p
              className={`${fontSizeClass.body} leading-relaxed text-gray-700`}
            >
              {professionalSummary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section className="mb-8">
            <h2
              className={`${fontSizeClass.heading} font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-2`}
            >
              Professional Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex justify-between mb-1">
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {exp.title}
                  </h3>
                  <span className="text-gray-600">{exp.duration}</span>
                </div>
                <p className="text-gray-800 font-medium mb-2">{exp.company}</p>
                <div
                  className={`${fontSizeClass.body} text-gray-700 leading-relaxed`}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(exp.description),
                  }}
                />
              </div>
            ))}
          </section>
        )}

        {/* Two Column Layout for Education and Skills */}
        <div className="flex flex-wrap -mx-3">
          {/* Education */}
          {education.length > 0 && (
            <div className="w-full md:w-1/2 px-3 mb-8">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-2`}
              >
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-gray-600">{edu.graduationYear}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {skills && (
            <div className="w-full md:w-1/2 px-3 mb-8">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-2`}
              >
                Areas of Expertise
              </h2>
              <div
                className={`${fontSizeClass.body} text-gray-700`}
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(skills) }}
              />
            </div>
          )}
        </div>

        {/* Custom Sections */}
        {customSections.map(
          (section, index) =>
            section.title && (
              <section key={index} className="mb-8">
                <h2
                  className={`${fontSizeClass.heading} font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-2`}
                >
                  {section.title}
                </h2>
                <div
                  className={`${fontSizeClass.body} text-gray-700 leading-relaxed`}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(section.content),
                  }}
                />
              </section>
            )
        )}
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
