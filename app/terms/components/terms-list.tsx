import { TermSection } from "./term-section";
import { termsContent } from "../data/terms-content";

export function TermsList() {
  return (
    <div className="space-y-6 text-right">
      {termsContent.map((section, index) => (
        <TermSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}
