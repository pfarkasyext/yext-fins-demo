import { Image, ImageType } from "@yext/sites-components";

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
          <p className="text-base text-zinc-800">{heroDescription}</p>
          <a
            href="/guided-advisor-finder"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-brand-blue text-white hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-6 py-2 w-fit"
          >
            Find A Wealth Advisor
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
