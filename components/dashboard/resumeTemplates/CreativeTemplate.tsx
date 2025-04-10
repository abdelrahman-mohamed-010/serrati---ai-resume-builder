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
    small: { body: "text-sm", heading: "text-lg" },
    medium: { body: "text-base", heading: "text-xl" },
    large: { body: "text-lg", heading: "text-2xl" },
  }[fontSize];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      {/* Distinctive Header */}
      <header className="mb-12 relative">
        <div className="absolute left-0 top-0 w-24 h-24 bg-purple-600 rounded-full -z-10"></div>
        <div className="pl-12 pt-6">
          <h1
            className={`${fontSizeClass.heading} text-4xl font-bold mb-2 text-gray-800`}
          >
            {personalInfo.name || "Your Name"}
          </h1>
          <div className="flex flex-wrap mt-4">
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="mr-4 text-purple-600 hover:text-purple-800"
              >
                {personalInfo.email}
              </a>
            )}
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone}`}
                className="mr-4 text-purple-600 hover:text-purple-800"
              >
                {personalInfo.phone}
              </a>
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
                    className="mr-4 text-purple-600 hover:text-purple-800"
                  >
                    {link.platform}
                  </a>
                )
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column - About & Skills */}
        <div className="col-span-12 md:col-span-5">
          {/* Professional Summary */}
          {professionalSummary && (
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-3 text-gray-800 flex items-center`}
              >
                <span className="w-6 h-6 bg-purple-600 rounded-full mr-2 inline-block"></span>
                About Me
              </h2>
              <p className={`${fontSizeClass.body} text-gray-700`}>
                {professionalSummary}
              </p>
            </section>
          )}

          {/* Skills */}
          {skills && (
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-3 text-gray-800 flex items-center`}
              >
                <span className="w-6 h-6 bg-purple-600 rounded-full mr-2 inline-block"></span>
                Skills
              </h2>
              <div
                className={`${fontSizeClass.body} text-gray-700`}
                dangerouslySetInnerHTML={{ __html: skills }}
              />
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-3 text-gray-800 flex items-center`}
              >
                <span className="w-6 h-6 bg-purple-600 rounded-full mr-2 inline-block"></span>
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-purple-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.graduationYear}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column - Experience & Custom Sections */}
        <div className="col-span-12 md:col-span-7">
          {/* Experience */}
          {experiences.length > 0 && (
            <section className="mb-8">
              <h2
                className={`${fontSizeClass.heading} font-bold mb-6 text-gray-800 flex items-center`}
              >
                <span className="w-6 h-6 bg-purple-600 rounded-full mr-2 inline-block"></span>
                Experience
              </h2>
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  className={`mb-6 relative pl-6 ${
                    i < experiences.length - 1
                      ? "border-l-2 border-purple-200"
                      : ""
                  }`}
                >
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full left-[-8px] top-1"></div>
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-purple-600 mb-1">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{exp.duration}</p>
                  <div
                    className={`${fontSizeClass.body} text-gray-700`}
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />
                </div>
              ))}
            </section>
          )}

          {/* Custom Sections */}
          {customSections.map(
            (section, index) =>
              section.title && (
                <section key={index} className="mb-8">
                  <h2
                    className={`${fontSizeClass.heading} font-bold mb-3 text-gray-800 flex items-center`}
                  >
                    <span className="w-6 h-6 bg-purple-600 rounded-full mr-2 inline-block"></span>
                    {section.title}
                  </h2>
                  <div
                    className={`${fontSizeClass.body} text-gray-700 pl-6`}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
