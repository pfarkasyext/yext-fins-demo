import { useSearchState } from "@yext/search-headless-react";

export default function NoResults() {
  const query = useSearchState((state) => state.query.input);
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          No Results Found for "{query}"
        </h1>
      </div>
    </div>
  );
}
