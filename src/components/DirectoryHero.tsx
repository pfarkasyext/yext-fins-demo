import * as React from "react";

export interface DirectoryHeroProps {
  pageTitle: string;
}

const DirectoryHero = ({ pageTitle }: DirectoryHeroProps) => {
  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://a.mktgcdn.com/p/Kv4KDWsSWCn3y_x5VSRTLyN_AwatVuWE-Dp8ZSq0Z-w/1200x796.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-70"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {pageTitle}
        </h2>
        <p className="mt-3 text-xl text-white">
          {`Explore a world of banking solutions, from accounts and loans to investment insights. We're committed to your financial success, providing secure, user-friendly access to our services. Discover your path to a brighter financial future right here.`}
        </p>
        {/* <a
          href="#"
          className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          Read our story
        </a> */}
      </div>
    </div>
  );
};

export default DirectoryHero;
