// src/components/Card.tsx

import * as React from "react";
import { useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import {
  experienceKey,
  experienceVersion,
  businessId,
} from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";
import FinancialProfessional from "../../../types/financial_professionals";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId,
});

const ProfessionalsCard = ({ result }: CardProps<FinancialProfessional>) => {
  //pull in the relevant fields from your entity to display on the card
  const data: any = {
    name: result.rawData.name,
    headshot: result.rawData.headshot,
    landingPageUrl: result.rawData.landingPageUrl,
    address: result.rawData.address,
    mainPhone: result.rawData.mainPhone,
    languages: result.rawData.languages,
    interests: result.rawData.interests,
    job: result.rawData.fins_jobTitle,
    services: result.rawData.services,
    email: result.rawData.emails,
    cta1: result.rawData.fins_primaryCTA,
    cta2: result.rawData.fins_secondaryCTA,
    formattedPhone: `${result.rawData.mainPhone.substring(
      0,
      2
    )} (${result.rawData.mainPhone.substring(
      2,
      5
    )}) ${result.rawData.mainPhone.substring(
      5,
      8
    )}-${result.rawData.mainPhone.substring(8)}`,
  };

  //replace below with the appropriate vertical key
  const verticalKey = "financial_professionals";

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
    <div className="w-full h-56 p-6 bg-white rounded-lg border border-zinc-200 justify-start items-start gap-4 inline-flex">
      <img
        className="w-40 h-44 rounded-lg"
        src={
          data.headshot?.url ??
          "https://www.delvinia.com/wp-content/uploads/2020/05/placeholder-headshot.png"
        }
      />
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
        <div className="text-blue-950 text-lg font-bold font-['Lato'] leading-normal">
          {data.name}
        </div>
        <div className="text-center text-blue-950 text-base font-bold font-['Lato'] leading-normal">
          {data.job}
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
                {data.formattedPhone}
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                  
                </div>
              </div>
              <div className="text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                {data.email}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="h-8 bg-blue-950 rounded-md flex-col justify-center items-center inline-flex">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-sm font-normal font-['Lato'] leading-snug">
                Get In Touch
              </div>
            </div>
          </div>
          <div className="h-8 rounded-md border border-blue-950 flex-col justify-center items-center inline-flex">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug">
                View Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsCard;