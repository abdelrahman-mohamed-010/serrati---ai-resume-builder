import React from "react";
import { useResumeStore } from "../../../lib/store/resumeStore";
import { DirectionWrapper } from "@/components/ui/direction-wrapper";
import { getTranslation } from "@/lib/utils/translations";

const ClassicTemplate: React.FC = () => {
  const {
    personalInfo,
    professionalSummary,
    experiences,
    education,
    skills,
    customSections,
    fontSize,
    language,
  } = useResumeStore();

  const fontSizeClass = {
    small: { body: "text-[0.75rem]", heading: "text-[1rem]" },
    medium: { body: "text-[0.833rem]", heading: "text-[1.083rem]" },
    large: { body: "text-[0.917rem]", heading: "text-[1.167rem]" },
  }[fontSize];

  return (
    <DirectionWrapper className="h-full flex flex-col">
      {/* Header with Name */}
      <header className="border-2  border-gray-800 rounded-t-lg p-6 text-center">
        <h1 className={`${fontSizeClass.heading} font-bold`}>
          {personalInfo.name || getTranslation("yourName", language)}
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-row flex-1">
        {/* Right Column (Personal Info) - Order swapped for RTL support */}
        <div className="w-1/3 p-3 bg-gray-100 h-full">
          {(personalInfo.email ||
            personalInfo.phone ||
            personalInfo.socialLinks.some(
              (link) => link.platform && link.url
            )) && (
            <div className="mb-8">
              <div className="space-y-3">
                {personalInfo.email && (
                  <div className="mb-3">
                    <p className={`${fontSizeClass.body} font-semibold`}>
                      {getTranslation("email", language)}
                    </p>
                    <p className={`${fontSizeClass.body} break-words`}>
                      {personalInfo.email}
                    </p>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="mb-3">
                    <p className={`${fontSizeClass.body} font-semibold`}>
                      {getTranslation("phone", language)}
                    </p>
                    <p className={`${fontSizeClass.body} break-words`}>
                      {personalInfo.phone}
                    </p>
                  </div>
                )}
                {personalInfo.socialLinks.map(
                  (link, index) =>
                    link.platform &&
                    link.url && (
                      <div key={index} className="mb-3 leading-normal">
                        <p
                          className={`${fontSizeClass.body} font-semibold mb-0.5`}
                        >
                          {link.platform}
                        </p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${fontSizeClass.body} break-words leading-tight block`}
                        >
                          {link.url}
                        </a>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-2/3 p-6 border-l border-gray-200">
          {/* Professional Summary */}
          {professionalSummary && (
            <section className="mb-8">
              <div
                className={`${fontSizeClass.body} text-gray-700 leading-relaxed break-words`}
                dangerouslySetInnerHTML={{ __html: professionalSummary }}
              />
            </section>
          )}

          {/* Experience */}
          {experiences.length > 0 &&
            experiences.some(
              (exp) => exp.title || exp.company || exp.description
            ) && (
              <section className="mb-8">
                <h2
                  className={`${fontSizeClass.heading} font-bold text-center mb-6`}
                >
                  {getTranslation("workExperience", language)}
                </h2>
                {experiences.map(
                  (exp) =>
                    (exp.title || exp.company || exp.description) && (
                      <div key={exp.id} className="mb-6">
                        <div className="flex justify-between mb-1">
                          <h3
                            className={`${fontSizeClass.heading} font-semibold`}
                          >
                            {exp.title}
                          </h3>
                          <span
                            className={`${fontSizeClass.body} text-gray-600`}
                          >
                            {exp.duration}
                          </span>
                        </div>
                        <p className={`${fontSizeClass.body} mb-2`}>
                          {exp.company}
                        </p>
                        <div
                          className={`${fontSizeClass.body} text-gray-700  leading-relaxed break-words `}
                          dangerouslySetInnerHTML={{ __html: exp.description }}
                        />
                      </div>
                    )
                )}
              </section>
            )}

          {/* Education */}
          {education.length > 0 &&
            education.some((edu) => edu.degree || edu.institution) && (
              <section className="mb-8">
                <h2
                  className={`${fontSizeClass.heading} font-bold text-center mb-6`}
                >
                  {getTranslation("education", language)}
                </h2>
                {education.map(
                  (edu) =>
                    (edu.degree || edu.institution) && (
                      <div key={edu.id} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <h3
                            className={`${fontSizeClass.heading} font-semibold`}
                          >
                            {edu.degree}
                          </h3>
                          <span
                            className={`${fontSizeClass.body} text-gray-600`}
                          >
                            {edu.graduationYear}
                          </span>
                        </div>
                        <p className={`${fontSizeClass.body}`}>
                          {edu.institution}
                        </p>
                        {edu.skills && (
                          <p
                            className={`${fontSizeClass.body} text-gray-700 mt-1`}
                          >
                            {edu.skills}
                          </p>
                        )}
                      </div>
                    )
                )}
              </section>
            )}

          {/* Skills */}
          {skills && (
            <section className="mb-8">
              <h2
                className={`${fontSizeClass.heading} text-2xl font-bold text-center mb-6`}
              >
                {getTranslation("skills", language)}
              </h2>
              <div
                className={`${fontSizeClass.body} text-gray-700`}
                dangerouslySetInnerHTML={{ __html: skills }}
              />
            </section>
          )}

          {/* Custom Sections */}
          {customSections.map(
            (section, index) =>
              section.title && (
                <section key={index} className="mb-8">
                  <h2
                    className={`${fontSizeClass.heading} text-2xl font-bold text-center mb-6`}
                  >
                    {section.title}
                  </h2>
                  <div
                    className={`${fontSizeClass.body} text-gray-700`}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              )
          )}
        </div>
      </div>
    </DirectionWrapper>
  );
};

export default ClassicTemplate;
