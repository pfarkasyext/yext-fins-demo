// src/components/LocationCard.tsx
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import {
  experienceKey,
  experienceVersion,
  businessId,
} from "../../common/consts";
import * as React from "react";
import { useSearchState } from "@yext/search-headless-react";
import Location from "../../../types/locations";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId,
});

const LocationCard = ({ result }: CardProps<Location>) => {
  //pull in the relevant fields from your entity to display on the card
  const data: any = {
    name: result.rawData.name,
    landingPageUrl: result.rawData.landingPageUrl,
    address: result.rawData.address,
    mainPhone: result.rawData.mainPhone,
    services: result.rawData.services,
    email: result.rawData.emails,
    cta1: result.rawData.fins_primaryCTA,
    cta2: result.rawData.fins_secondaryCTA,
    formattedPhone: `${result.rawData.mainPhone?.substring(
      0,
      2
    )} (${result.rawData.mainPhone?.substring(
      2,
      5
    )}) ${result.rawData.mainPhone?.substring(
      5,
      8
    )}-${result.rawData.mainPhone?.substring(8)}`,
  };

  //replace below with the appropriate vertical key
  const verticalKey = "locations";
  //analytics configuration for the card
  const queryId = useSearchState((state) => state.query.queryId) || "";
  const fireClick = (id: string, label: string) => {
    searchAnalytics.report({
      type: "CTA_CLICK",
      entityId: id,
      verticalKey: verticalKey,
      searcher: "VERTICAL",
      queryId: queryId,
      ctaLabel: label,
    });
  };
  const fireTitle = (id: string) => {
    searchAnalytics.report({
      type: "TITLE_CLICK",
      entityId: id,
      verticalKey: verticalKey,
      searcher: "VERTICAL",
      queryId: queryId,
    });
  };

  return (
    <div className="w-full h-44 p-6 bg-white rounded-lg border border-zinc-200 justify-start items-start gap-4 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
        <div className="text-blue-950 text-lg font-bold font-['Lato'] leading-normal">
          {data.name}
        </div>
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
            {data.address.line1}
            <br />
            {`${data.address.city}, ${data.address.region} ${data.address.postalCode}`}
          </div>
          <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                  
                </div>
              </div>
              <div className="text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                (800) 291-5039
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                  
                </div>
              </div>
              <div className="text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                {data.email ? data.email : `DEFAULT`}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="h-8 bg-blue-950 rounded-md flex-col justify-center items-center inline-flex">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-sm font-normal font-['Lato'] leading-snug">
                View Profile
              </div>
            </div>
          </div>
          <div className="h-8 rounded-md border border-blue-950 flex-col justify-center items-center inline-flex">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug">
                Get Directions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="mb-4 w-auto justify-between rounded-lg border p-2 text-stone-900 shadow-sm overflow-hidden">
    //   <div className="body flex flex-col">
    //     <div className="w-full bg-neutral-100 h-32 rounded-full flex flex-row">
    //       <div className="ml-4 mr-10">
    //         <h1
    //           className="text-2xl font-bold mb-2 text-blue-900"
    //           onClick={() => fireTitle(result.id || "")}
    //         >
    //           {data.name}
    //         </h1>
    //         <h2 className="text-lg font-semibold mb-2 text-blue-900">
    //           {data.job}
    //         </h2>
    //         <div className="flex flex-col">
    //           <div className="flex mb-1 justify-between space-x-10">
    //             <p className="min-w-fit">{data.address.line1}</p>
    //             <p className="ml-auto">{data.formattedPhone}</p>
    //           </div>
    //           <div className="flex mb-1 justify-between space-x-10">
    //             <p className="min-w-fit">{`${data.address.city}, ${data.address.region} ${data.address.postalCode}`}</p>
    //             <p className="ml-auto">{data.email}</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="cta-container flex flex-col ml-auto py-2 space-y-2 place-content-center">
    //         {data.cta1?.label && (
    //           <a href={`${data.cta1.link}`} target="_blank" rel="noreferrer">
    //             <button
    //               className="cta1 w-full bg-blue-900 text-white font-medium rounded-lg py-2 px-5 shadow mb-4 hover:bg-slate-600"
    //               onClick={() => fireClick(result.id || "", data.cta1.label)}
    //             >
    //               {data.cta1.label}
    //             </button>
    //           </a>
    //         )}
    //         {data.cta2?.label && (
    //           <a href={`${data.cta2.link}`} target="_blank" rel="noreferrer">
    //             <button
    //               className="cta2 whitespace-nowrap bg-white text-blue-900 font-medium rounded-lg py-2 px-5 shadow hover:bg-slate-200"
    //               onClick={() => fireClick(result.id || "", data.cta2.label)}
    //             >
    //               {data.cta2.label}
    //             </button>
    //           </a>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default LocationCard;
