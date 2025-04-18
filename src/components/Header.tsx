import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { SearchBar } from "@yext/search-ui-react";
import { useEffect } from "react";
import NavMenu from "./NavMenu";
import { Image } from "@yext/pages-components";
import { MobileMenu } from "./MobileMenu";

const Header = ({ _site }: any) => {
  const data = _site;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const newSearchbarItems = ["locator", "login", "directory", "support"];
  const handleSearch = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    const queryParams = new URLSearchParams(window.location.search);

    if (query) {
      queryParams.set("query", query);
    } else {
      queryParams.delete("query");
    }
    const newUrl = `/search.html?${queryParams.toString()}`;

    window.location.href = newUrl;
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    currentPath.includes("search")
      ? setShowSearchbar(false)
      : setShowSearchbar(true);
  });
  return (
    <header className="bg-white">
      <div className="flex flex-col lg:px-8 w-full">
        <div className="w-full md:flex justify-end hidden items-center">
          <NavMenu
            isPrimary={true}
            menuItems={data.c_navbar.filter((item: any) =>
              newSearchbarItems.includes(item.name.toLowerCase())
            )}
          />
        </div>
        <nav
          className="mx-auto flex gap-x-4 items-center w-full   "
          aria-label="Global"
        >
          <div className=" hidden lg:flex">
            <a href="/index.html" className="-m-1.5 p-1.5">
              <span className="sr-only">Capital Wealth Management</span>
              <Image image={data.c_headerLogo} />
            </a>
          </div>
          <div className="flex items-center lg:hidden w-full py-4 px-2">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-6 w-6"
                aria-hidden="true"
                onClick={() => setMobileMenuOpen(true)}
              />
            </button>
            <div className="w-full justify-center flex mx-auto">
              <a href="/index.html" className="-m-1.5 p-1.5 h-10">
                <span className="sr-only">Capital Wealth Management</span>
                <Image image={data.c_headerLogo} className="!max-w-none !w-full !h-full" />

              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <NavMenu
              menuItems={data.c_navbar.filter(
                (item: any) =>
                  !newSearchbarItems.includes(item.name.toLowerCase())
              )}
            />
          </div>

          {showSearchbar && (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <SearchBar
                onSearch={handleSearch}
                customCssClasses={{ searchBarContainer: "!mb-4 flex-1 !h-8" }}
              ></SearchBar>
            </div>
          )}
        </nav>
      </div>

      {mobileMenuOpen && (
        <span className="lg:hidden">
          <MobileMenu
            category={data.c_navbar}
            open={mobileMenuOpen}
            setOpen={setMobileMenuOpen}
            logo={data.c_headerLogo}
          />
        </span>
      )}
    </header>
  );
};

export default Header;
