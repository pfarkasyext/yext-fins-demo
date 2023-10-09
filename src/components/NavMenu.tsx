import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const NavMenu = ({ menuItems }: any) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [nestedData, setNestedData] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredMenu(index);
  };
  const buildLink = (slug: string) => {
    return slug.includes("staticfilter")
      ? slug.replace("html-", "html?").replace("-static", "&static")
      : slug;
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setNestedData(null);
  };

  const generateSubMenu = (item) => {
    return (
      <>
        {item.length >= 2 ? (
          <ul className="list m-0 p-0 pb-3">
            {item.map((subItem, subIndex) => {
              return (
                <li
                  onMouseEnter={() => setHoveredItem(subIndex)}
                  className={`border-l-4 border-transparent px-1 hover:bg-[#E1E5E8] hover:border-[#10172a] hover:border-l-4 w-[200px] ${
                    hoveredItem === subIndex &&
                    `bg-[#E1E5E8] border-[#10172a] border-l-4 `
                  }`}
                  key={subIndex}
                >
                  <button
                    onMouseEnter={() => setNestedData(subItem)}
                    type="button"
                    className="border-none z-50 text-left bg-transparent leading-copy text-mid-gray px-4 py-2 relative sans-serif whistespace-break-spaces flex justify-between items-center w-full"
                  >
                    <a
                      href={`/${
                        (subItem.slug && buildLink(subItem.slug)) || `#`
                      }`}
                    >
                      {subItem.name}
                    </a>
                    <ChevronRightIcon className="h-3 w-3 ml-1" />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="list m-0 p-0 pb-3">
            {item[0].c_childProducts.map((subItem, subIndex) => {
              return (
                <li
                  className="border-l-4 border-transparent px-1 hover:bg-[#E1E5E8] hover:border-[#10172a] hover:border-l-4 w-[200px]"
                  key={subIndex}
                >
                  <button
                    type="button"
                    className="border-none z-50 text-left bg-transparent leading-copy text-mid-gray px-4 py-2 relative sans-serif whitespace-break-spaces"
                  >
                    <a
                      href={`/${
                        (subItem.slug && buildLink(subItem.slug)) || `#`
                      }`}
                    >
                      {subItem.name}
                    </a>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };

  return (
    <ul className="flex flex-row p-0 m-0 py-4">
      {menuItems.c_navbar.map((item, index) => (
        <li
          className="px-1 hover:underline hover:underline-offset-4"
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <section>
            <div>
              <div className="relative z-50 text-sm">
                <a
                  className=" flex items-center no-underline desktop-header-trigger leading-title font-bold text-navy secondary-nav-flyout-trigger px-1 rounded-full transition-all duration-100 ease-in-out"
                  href={`/${item.slug || `#`}`}
                >
                  <span className="flex  items-center">
                    <div> {item.name}</div>
                    {item.relatedServices && (
                      <ChevronDownIcon className="h-3 w-3 ml-1" />
                    )}
                  </span>
                </a>
                {item.relatedServices &&
                  item.relatedServices &&
                  index === hoveredMenu && (
                    <div
                      className={`bg-white absolute z-50  rounded-br-3 rounded--bottom left-0 leading-copy overflow-hidden shadow-1 pt-1`}
                      style={{
                        maxHeight: "545px",
                      }}
                    >
                      <div>
                        <div className="flex">
                          <div className="text-sm w-full h-full">
                            <a className="pb-2 px-4 pt-4 no-underline"></a>
                            {generateSubMenu(item.relatedServices)}
                          </div>
                          {nestedData && (
                            <section
                              className="bg-[#E1E5E8] text-sm"
                              onMouseLeave={() => setNestedData(null)}
                            >
                              <div className=" h-full flex">
                                <ul
                                  className="bg-washed-primary list-none m-0 pb-0 pl-4 pr-0 pt-4 overflow-y-auto overflow-x-hidden justify-start flex"
                                  style={{ maxHeight: "166px", width: "198px" }}
                                >
                                  <div>
                                    <li className="flex-shrink-0 mr-4">
                                      <ul className="">
                                        {nestedData.c_childProducts.map(
                                          (item, index) => (
                                            <li className="mt-3" key={index}>
                                              <a
                                                className="text-gray-600 no-underline subcategory-item-link hover:underline hover:underline-offset-2"
                                                href={`/${
                                                  (item.slug &&
                                                    buildLink(item.slug)) ||
                                                  `#`
                                                }`}
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </li>
                                  </div>
                                </ul>
                              </div>
                            </section>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
