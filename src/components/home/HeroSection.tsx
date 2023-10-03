import * as React from "react";
import { Image, ImageType } from "@yext/sites-components";
import { Button } from "../common/Button";

export interface HeroSectionProps {
  img: ImageType;
  heroTitle: string;
  heroDescription: string;
}

const HeroSection = ({ img, heroTitle, heroDescription }: HeroSectionProps) => {
  return (
    <div className="relative isolate over-flow-hidden w-full h-[500px]">
      <Image
        image={img}
        className="absolute inset-0 -z-10 h-full"
        layout="fill"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-30"></div>
      <div className="w-full h-full flex flex-col justify-center items-end px-20">
        <div className="p-4 rounded-md shadow bg-white w-1/3 flex flex-col gap-8">
          <h1 className="text-2xl font-bold">{heroTitle}</h1>
          <p className="text-base text-zinc-800">
            {heroDescription}
          </p>
          <Button variant="default" className="w-fit">
            Find A Wealth Advisor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
