import React from "react";
import { useResumeStore } from "../../../lib/store/resumeStore";
import DOMPurify from "dompurify";

const ModernTemplate: React.FC = () => {
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
    <div className="max-w-4xl mx-auto bg-white shadow-lg flex">
      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-100 p-6">
        <div className="mb-8">
          <h1 className={`${fontSizeClass.heading} text-2xl font-bold mb-2`}>
            {personalInfo.name || "Your Name"}
          </h1>
        </div>

        {/* Contact Information */}
        <section className="mb-6">
          <h2
            className={`${fontSizeClass.heading} font-semibold mb-3 text-gray-700`}
          >
            Contact
          </h2>
          {personalInfo.email && (
            <div className="mb-2">
              <p className="font-medium">Email:</p>
              <p>{personalInfo.email}</p>
            </div>
          )}
          {personalInfo.phone && (
            <div className="mb-2">
              <p className="font-medium">Phone:</p>
              <p>{personalInfo.phone}</p>
            </div>
          )}
        </section>

        {/* Social Links */}
        {personalInfo.socialLinks.some((link) => link.platform && link.url) && (
          <section className="mb-6">
            <h2
              className={`${fontSizeClass.heading} font-semibold mb-3 text-gray-700`}
            >
              Connect
            </h2>
            {personalInfo.socialLinks.map(
              (link, index) =>
                link.platform &&
                link.url && (
                  <div key={index} className="mb-2">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {link.platform}
                    </a>
                  </div>
                )
            )}
          </section>
        )}

        {/* Skills */}
        {skills && (
          <section className="mb-6">
            <h2
              className={`${fontSizeClass.heading} font-semibold mb-3 text-gray-700`}
            >
              Skills
            </h2>
            <div
              className={fontSizeClass.body}
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(skills) }}
            />
          </section>
        )}
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-6">
        {/* Professional Summary */}
        {professionalSummary && (
          <section className="mb-6">
            <h2
              className={`${fontSizeClass.heading} font-semibold mb-2 text-gray-800`}
            >
              Profile
            </h2>
            <p className={fontSizeClass.body}>{professionalSummary}</p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section className="mb-6">
            <h2
              className={`${fontSizeClass.heading} font-semibold mb-2 text-gray-800`}
            >
              Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{exp.title}</h3>
                  <span className="text-gray-600">{exp.duration}</span>
                </div>
                <p className="text-gray-700 mb-2">{exp.company}</p>
                <div
                  className={fontSizeClass.body}
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
          <section className="mb-6">
            <h2
              className={`${fontSizeClass.heading} font-semibold mb-2 text-gray-800`}
            >
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-medium">{edu.degree}</h3>
                <p>
                  {edu.institution}, {edu.graduationYear}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Custom Sections */}
        {customSections.map(
          (section, index) =>
            section.title && (
              <section key={index} className="mb-6">
                <h2
                  className={`${fontSizeClass.heading} font-semibold mb-2 text-gray-800`}
                >
                  {section.title}
                </h2>
                <div
                  className={fontSizeClass.body}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(section.content),
                  }}
                />
              </section>
            )
        )}
      </main>
    </div>
  );
};

export default ModernTemplate;
