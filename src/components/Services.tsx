import { Button } from "@headlessui/react";
import Carousel from "./Carousel";

type ServiceProps = {
  name: string;
  c_serviceDescription: string;
  slug: string;
};

interface ServicesProps {
  services: ServiceProps[];
}

export const ServiceCard = ({ service }: { service: ServiceProps }) => {
  return (
    <div className="py-8 my-8 bg-white rounded-lg border border-zinc-200 flex-col justify-between items-center gap-4 inline-flex w-full ">
      <div className="w-full flex flex-col items-center gap-4 p-4">
        <div className="w-14 h-14 relative">
          <svg
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3615 36.6614L16.1633 36.6413C15.7152 36.5491 15.3775 36.1507 15.3775 35.674C15.3775 35.4698 15.4453 35.2995 15.5471 35.1293L15.6829 34.9591L23.7586 25.1198C24.03 24.7794 24.4372 24.5751 24.9122 24.5751C25.3873 24.5751 25.7944 24.7794 26.0659 25.1198L29.0858 28.7968C29.1197 28.8649 29.1876 28.933 29.2555 29.0011C29.4591 29.2053 29.6966 29.3075 30.002 29.3075C30.3073 29.3075 30.5788 29.1713 30.7824 28.967L30.8842 28.8308L31.6985 27.8435C31.8684 27.6446 32.1329 27.4932 32.4129 27.4485C32.4685 27.4396 32.5246 27.4349 32.5808 27.4349C32.954 27.4349 33.2594 27.6052 33.463 27.8435L39.6385 35.3676L39.7742 35.4698C39.876 35.6059 39.91 35.7421 39.91 35.9124C39.91 36.3209 39.5707 36.6614 39.1635 36.6614H16.3615ZM35.5241 23.3809C35.7514 24.0601 36.2658 24.613 36.9192 24.891C36.9505 24.9043 36.982 24.917 37.0139 24.929C37.1409 24.9769 37.2727 25.0145 37.4082 25.0409C37.5593 25.0704 37.715 25.0858 37.8741 25.0858C39.2313 25.0858 40.3511 23.9623 40.3511 22.6004C40.3511 21.2386 39.2313 20.1151 37.8741 20.1151C36.5168 20.1151 35.3971 21.2386 35.3971 22.6004C35.3971 22.8725 35.4418 23.135 35.5241 23.3809ZM28 0.524414C43.464 0.524414 56 13.0604 56 28.5244C56 43.9884 43.464 56.5244 28 56.5244C12.536 56.5244 0 43.9884 0 28.5244C0 13.0604 12.536 0.524414 28 0.524414ZM51.1724 28.5244C51.1724 15.7266 40.7978 5.352 28 5.352C15.2022 5.352 4.82759 15.7266 4.82759 28.5244C4.82759 41.3222 15.2022 51.6968 28 51.6968C40.7978 51.6968 51.1724 41.3222 51.1724 28.5244Z"
              fill="#1C2E5E"
            />
          </svg>
        </div>
        <div className="self-stretch text-center text-blue-950 text-2xl font-bold">
          {service.name}
        </div>
        <div className="self-stretch text-center text-zinc-800 text-base font-normal leading-normal">
          {service.c_serviceDescription}
        </div>
      </div>
      <a
        className="inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 h-9  px-3 md:h-11 rounded-md md:px-8 border border-brand-blue bg-white hover:bg-brand-blue hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        href={`/${service.slug}`}
        aria-label={`Learn more about ${service.name}`}
      >
        Learn more about {service.name}
      </a>
    </div>
  );
};

export default function Services({ services }: ServicesProps) {
  return (
    <>
      <div className="py-8 md:flex flex-col items-center gap-8 hidden">
        <h2 className="font-bold text-4xl text-center text-brand-blue">
          Our Services
        </h2>
        <div className="flex-col justify-start items-center gap-8 flex">
          <div className="grid gap-8 grid-cols-3 grid-rows-1">
            {services
              .slice(0, 3)
              .map((service: ServiceProps, index: number) => (
                <ServiceCard service={service} key={index} />
              ))}
          </div>
          <div className="w-[432px] justify-center items-center gap-6 inline-flex">
            <div className="pl-4 justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative"></div>
            </div>
            <div className="grow shrink basis-0 h-[5px] justify-start items-start gap-2 flex">
              <div className="grow shrink basis-0 h-[5px] bg-blue-950 rounded-[100px]"></div>
              <div className="grow shrink basis-0 h-[5px] bg-stone-300 rounded-[100px]"></div>
            </div>
            <div className="pr-4 justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden h-[500px]">
        <h2 className="font-bold text-4xl text-center text-brand-blue">
          Our Services
        </h2>
        <Carousel services={services}></Carousel>
      </div>
    </>
  );
}
