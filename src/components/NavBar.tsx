import { twMerge } from "tailwind-merge";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface NavBarProps {
  items: {
    id: string;
    label?: string;
    resultsCount?: number;
  }[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function NavBar({ items, onSelect, selectedId }: NavBarProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleSelect = (id: string) => {
    onSelect?.(id);
    setIsPopoverOpen(false);
  };

  const getLabelById = (id: string): string | undefined => {
    const item = items.find((item) => item.id === id);
    return item?.label;
  };

  const handlePopoverButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="max-w-full mx-auto md:max-w-[1440px] px-2 md:px-20">
      <div className="h-16 justify-between border-b hidden sm:flex ">
        <div className="ml-6 flex justify-between flex-1">
          {items.map(({ label, id, resultsCount }) => (
            <button
              key={id}
              className={`inline-flex items-center px-1 pt-1 hover:border-blue-950 border-b-2 text-sm font-medium ${
                selectedId === id ? `border-blue-950` : `border-transparent`
              }`}
              onClick={() => handleSelect(id)}
            >
              <div className="font-bold">{label ?? id}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="block md:hidden border mt-4 w-full">
        <div className="w-full px-4 border">
          <Popover className="relative">
            <Popover.Button
              onClick={handlePopoverButtonClick as any}
              className={`
                ${twMerge(
                  isPopoverOpen ? "" : "text-opacity-90",
                  "group w-full justify-between flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                )}`}
            >
              <div>{getLabelById(selectedId!)}</div>
              <ChevronDownIcon
                className={`${twMerge(
                  isPopoverOpen ? "" : "text-opacity-70",
                  "ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
                )}`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isPopoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 w-screen -translate-x-1/2 transform sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {items.map(({ label, id, resultsCount }) => (
                      <button
                        key={id}
                        className={`-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                        onClick={() => handleSelect(id)}
                      >
                        <div className="font-bold">{label ?? id}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
}
