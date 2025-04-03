interface TermSectionProps {
  title: string;
  content: string | string[];
}

export function TermSection({ title, content }: TermSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-gray-300">
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <span key={index}>
              - {item}
              <br />
            </span>
          ))
        ) : (
          content
        )}
      </p>
    </section>
  );
}
