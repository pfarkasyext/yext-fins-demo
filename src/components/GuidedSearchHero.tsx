import * as React from "react";

export interface GuidedSearchHeroProps {
  pageTitle: string;
}

const GuidedSearchHero = ({ pageTitle }: GuidedSearchHeroProps) => {
  return (
    <div className="relative bg-gray-800 px-6 py-16 sm:px-12 lg:px-16">
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
          {`Unlock Your Financial Potential with Expert Guidance. Find the Perfect Financial Advisor to Secure Your Future.`}
        </p>
      </div>
    </div>
  );
};

export default GuidedSearchHero;
