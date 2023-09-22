import { twMerge } from "tailwind-merge";
import Selector from "../atoms/Selector";

export interface NavBarProps {
  items: {
    id: string;
    label?: string;
    resultsCount?: number;
  }[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export const initialProps: NavBarProps = {
  items: [{ id: "About" }, { id: "Insurances" }, { id: "Locations" }],
};

export default function NavBar({ items, onSelect, selectedId }: NavBarProps) {
  const handleSelect = (id: string) => {
    onSelect?.(id);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-20">
      <div className="h-16 justify-between border-b hidden sm:flex ">
        <div className="ml-6 flex justify-between flex-1">
          {items.map(({ label, id, resultsCount }) => (
            <button
              key={id}
              className={twMerge(
                `inline-flex items-center px-1 pt-1 border-transparent hover:border-blue-950 border-b-2 text-sm font-medium`,
                selectedId === id && "border-blue-950"
              )}
              onClick={() => handleSelect(id)}
            >
              <div className="font-bold">{label ?? id}</div>
              {/* {resultsCount !== undefined && (
                <div className="pl-0.5">{` (${resultsCount})`}</div>
              )} */}
            </button>
          ))}
        </div>
      </div>
      <div className="block px-10 sm:hidden">
        <Selector
          items={items}
          onSelect={onSelect}
          placeholder="Scroll to Section..."
        />
      </div>
    </div>
  );
}
