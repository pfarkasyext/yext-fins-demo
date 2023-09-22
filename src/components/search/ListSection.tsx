import { SectionProps } from "@yext/search-ui-react";

export default function ListSection<T>({
  results,
  CardComponent,
  header,
}: SectionProps<T>) {
  if (!CardComponent) {
    return <div>Missing Card Component</div>;
  }

  return (
    <>
      {header}
      <div className="space-y-4">
        {results.map((r) => (
          <CardComponent key={r.id} result={r} />
        ))}
      </div>
    </>
  );
}
