import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface NavItem {
  name: string;
  navId: string;
}

export interface InpageNavProps {
  navItems: NavItem[];
}

const InpageNav = ({ navItems }: InpageNavProps) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);

  const toggleSubNav = () => setIsSubNavOpen(!isSubNavOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center gap-10 py-4">
        {navItems.map((item) => (
          <li key={item.navId}>
            <a
              href={`#${item.navId}`}
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{ padding: "12px 16px" }} // Ensures minimum touch size
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col justify-center px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={toggleSubNav}
            aria-expanded={isSubNavOpen}
            aria-controls="sub-navigation"
            className="hover:cursor-pointer flex-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
            style={{ padding: "12px 16px" }} // Ensures minimum touch size
          >
            Navigate to
          </button>
          <button
            onClick={() => setIsSubNavOpen(false)}
            aria-label="Close navigation"
            className="hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
            style={{ padding: "10px" }} // Ensures minimum touch size for the close button
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <hr className="my-4" />

        {isSubNavOpen && (
          <ul
            id="sub-navigation"
            className="bg-white rounded py-4 mt-4 transition-opacity duration-300 ease-in-out opacity-100"
          >
            {navItems.map((item) => (
              <li key={item.navId}>
                <a
                  href={`#${item.navId}`}
                  className="block py-2 px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                  style={{ padding: "12px 16px" }} // Ensures minimum touch size
                >
                  {item.name}
                </a>
                <hr className="my-2" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default InpageNav;