import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavMenu from "../NavMenu";
import { MobileMenu } from "./MobileMenu";

export default function ComplexHeader({ data }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="lg:flex-1 hidden lg:flex">
          <a href="/index.html" className="-m-1.5 p-1.5">
            <span className="sr-only">Capital Wealth Management</span>
            <img src={data.c_headerLogo.url} />
          </a>
        </div>
        <div className="flex lg:hidden w-full">
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
          <div className="flex mx-auto">
            <a href="/index.html" className="-m-1.5 p-1.5">
              <span className="sr-only">Capital Wealth Management</span>
              <img src={data.c_headerLogo.url} />
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <NavMenu menuItems={data} />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/search.html"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Search <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <span className="lg:hidden">
          <MobileMenu
            category={data.c_navbar}
            open={mobileMenuOpen}
            setOpen={setMobileMenuOpen}
            logo={data.c_headerLogo.url}
          />
        </span>
      )}
    </header>
  );
}
