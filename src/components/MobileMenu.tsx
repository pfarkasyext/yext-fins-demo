import { Transition, Dialog } from "@headlessui/react";
import { useState, Fragment } from "react";
import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ComplexImageType, Image } from "@yext/pages-components";
import MobileSubmenu from "./MobileSubmenu";
import { Image as ImageType } from "../types/financial_professionals";

export type Category = {
  id: string;
  name?: string;
  href?: string;
  logo?: ComplexImageType;
  subCategories?: Category[];
};

type MobileMenuProps = {
  category: Category;
  open: boolean;
  logo: ImageType;
  setOpen: (open: boolean) => void;
};

const MobileMenu = ({ category, open, setOpen, logo }: MobileMenuProps) => {
  const [currentCategory, setCurrentCategory] = useState<Category>(category);
  const [previousCategories, setPreviousCategories] = useState<Category[]>([]);

  const handleClick = (subCategory: Category) => {
    if (subCategory.relatedServices) {
      setCurrentCategory(
        subCategory.relatedServices && subCategory.relatedServices.length >= 2
          ? subCategory.relatedServices
          : subCategory.relatedServices[0].c_childProducts
      );
      setPreviousCategories([...previousCategories, currentCategory]);
    }
    if (subCategory.c_childProducts) {
      setCurrentCategory(subCategory.c_childProducts);
      setPreviousCategories([...previousCategories, currentCategory]);
    }
  };

  const handleBackClick = () => {
    if (previousCategories.length > 0) {
      const previousCategory = previousCategories.pop() as Category;
      setCurrentCategory(previousCategory);
      setPreviousCategories(previousCategories);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex pt-5 pb-2 ">
                <button
                  type="button"
                  className="  w-full inline-flex items-center justify-between rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Image image={logo}/>
                  <img src={logo} alt="" />
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {previousCategories.length > 0 && (
                <button type="button" onClick={handleBackClick}>
                  <ChevronLeftIcon className="h-4 w-6 " />
                </button>
              )}
              {currentCategory &&
                currentCategory.map((item, index) => (
                  <Transition
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    className="flex py-2  px-4 hover:bg-gray-300"
                    key={index}
                  >
                    <MobileSubmenu
                      item={item}
                      handleClick={handleClick}
                    ></MobileSubmenu>
                  </Transition>
                ))}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { MobileMenu };
