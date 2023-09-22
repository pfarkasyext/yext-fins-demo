import { SectionProps } from "@yext/search-ui-react";

export default function GridSection<T>({
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
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {results.map((r) => (
          <CardComponent key={r.id} result={r} />
        ))}
      </div>
    </>
  );
}
