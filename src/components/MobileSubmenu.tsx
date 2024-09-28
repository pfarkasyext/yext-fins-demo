import { Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { buildLink } from "./NavMenu";

const MobileSubmenu = ({ item, handleClick }: any) => {
  return (
    <Transition
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className="w-full  font-medium text-base flex justify-between items-center "
      onClick={() => handleClick(item)}
    >
      <a href={`/${(item.slug && buildLink(item.slug)) || `#`}`}>{item.name}</a>
      {(item.relatedServices || item.c_childProducts) && (
        <div>
          <ChevronRightIcon className="h-4 w-4 text-brand-blue hover:cursor-pointer" />
        </div>
      )}
    </Transition>
  );
};

export default MobileSubmenu;
