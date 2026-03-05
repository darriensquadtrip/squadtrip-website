interface DefinitionProps {
  term: string;
  children: React.ReactNode;
}

export function Definition({ term, children }: DefinitionProps) {
  return (
    <div className="not-prose my-6 rounded-lg border-l-4 border-purple bg-purple/5 p-5">
      <dt className="text-base font-semibold text-gray-900 mb-1">{term}</dt>
      <dd className="text-sm text-gray-700 leading-relaxed">{children}</dd>
    </div>
  );
}
