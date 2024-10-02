import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type SubCategory = {
  name: string;
  slug?: string;
  c_childProducts?: {
    name: string;
    slug?: string;
  }[];
};

type MenuItem = {
  name: string;
  slug?: string;
  relatedServices?: SubCategory[];
};

type NavMenuProps = {
  menuItems: MenuItem[];
  isPrimary?: boolean;
};

const NavMenu = ({ menuItems, isPrimary = false }: NavMenuProps) => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [nestedData, setNestedData] = useState<SubCategory | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredMenu(index);
    setNestedData(null); // Reset nested data on new hover
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setNestedData(null);
  };

  const generateSubMenu = (subCategories: SubCategory[]) => (
    <ul className="list m-0 p-0 pb-3">
      {subCategories.map((subItem, subIndex) => (
        <li
          key={subIndex}
          onMouseEnter={() => setNestedData(subItem)}
          className="border-l-4 border-transparent px-1 hover:bg-[#E1E5E8] hover:border-[#10172a] hover:border-l-4 w-[200px]"
        >
          <a
            href={subItem.slug ? `/${buildLink(subItem.slug)}` : "#"}
            className="border-none z-50 text-left bg-transparent leading-copy text-mid-gray px-4 py-2 relative sans-serif whitespace-break-spaces flex justify-between items-center w-full"
          >
            {subItem.name}
            {subItem.c_childProducts && (
              <ChevronRightIcon className="h-3 w-3 ml-1" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className="flex flex-row p-0 m-0 py-2">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="px-1 hover:underline hover:underline-offset-4"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`relative z-50 ${isPrimary ? "!text-xs" : "text-sm"}`}>
            <a
              href={item.slug ? `/${buildLink(item.slug)}` : "#"}
              className="flex items-center no-underline desktop-header-trigger leading-title font-bold text-navy secondary-nav-flyout-trigger px-1 rounded-full transition-all duration-100 ease-in-out"
            >
              <span className="flex items-center">
                {item.name}
                {item.relatedServices && (
                  <ChevronDownIcon className="h-3 w-3 ml-1" />
                )}
              </span>
            </a>
            {item.relatedServices && hoveredMenu === index && (
              <div className="bg-white absolute z-50 rounded-br-3 rounded-bottom left-0 leading-copy overflow-hidden shadow-1 pt-1" style={{ maxHeight: "545px" }}>
                <div className="text-sm w-full h-full">
                  {generateSubMenu(item.relatedServices)}
                  {nestedData && nestedData.c_childProducts && (
                    <section
                      className="bg-[#E1E5E8] text-sm"
                      onMouseLeave={() => setNestedData(null)}
                    >
                      <div className="h-full flex">
                        <ul
                          className="bg-washed-primary list-none m-0 pb-0 pl-4 pr-0 pt-4 overflow-y-auto overflow-x-hidden justify-start flex"
                          style={{ maxHeight: "166px", width: "198px" }}
                        >
                          {nestedData.c_childProducts.map((childItem, childIndex) => (
                            <li key={childIndex} className="mt-3">
                              <a
                                href={childItem.slug ? `/${buildLink(childItem.slug)}` : "#"}
                                className="text-gray-600 no-underline subcategory-item-link hover:underline hover:underline-offset-2"
                              >
                                {childItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;

export const buildLink = (slug: string) =>
  slug.includes("vertical=")
    ? slug.replace("html-", "html?").replace("-static", "&static")
    : slug;