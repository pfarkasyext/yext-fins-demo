// src/components/Card.tsx

import * as React from "react";
import { useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";

import { useSearchState } from "@yext/search-headless-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { searchAnalyticsConfig } from "../config";
import FinancialProfessional from "../../types/financial_professionals";
import { Image } from "@yext/pages-components";

export const searchAnalytics = searchAnalyticsConfig;

const ProfessionalsCard = ({ result }: CardProps) => {
  //pull in the relevant fields from your entity to display on the card
  const data: any = {
    name: result.rawData.name,
    slug: result.rawData.slug,
    headshot: result.rawData.headshot,
    landingPageUrl: result.rawData.landingPageUrl,
    address: result.rawData.address,
    mainPhone: result.rawData.mainPhone,
    languages: result.rawData.languages,
    fins_relatedServices: result.rawData.fins_relatedServices,
    interests: result.rawData.interests,
    job: result.rawData.fins_jobTitle,
    cert: result.rawData.certifications,
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
    <div className="w-full  p-2 bg-white rounded-lg border border-zinc-200 flex flex-col justify-center items-center gap-2 md:justify-start md:flex-row md:items-start md:gap-4 md:inline-flex ">
      {data.headshot ? (
        <Image image={data.headshot} />
      ) : (
        <img
          className="w-40 h-44 rounded-lg"
          src={
            "https://www.delvinia.com/wp-content/uploads/2020/05/placeholder-headshot.png"
          }
        />
      )}

      <div className="grow shrink basis-0 flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-3 inline-flex mx-auto">
        <a
          href={data.slug}
          className="text-blue-950 text-lg font-bold font-['Lato'] leading-normal"
        >
          {data.name}
        </a>
        <div className="text-center text-blue-950 text-base font-bold font-['Lato'] leading-normal">
          {data.job}
        </div>
        {data.cert && (
          <div className="text-center text-blue-950 text-base italic font-['Lato'] leading-normal">
            {data.cert[0]}
          </div>
        )}
        <div className=" gap-2 self-auto justify-start flex flex-col md:flex-row  md:self-stretch md:justify-start items-center md:gap-8 md:inline-flex">
          <div className="text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
            {data.address.line1}
            <br />
            {`${data.address.city}, ${data.address.region} ${data.address.postalCode}`}
          </div>
          <div className="flex-col justify-center items-center md:items-start gap-1 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                  <PhoneIcon />
                </div>
              </div>
              <div className="text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                {data.formattedPhone}
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                  <EnvelopeIcon />
                </div>
              </div>
              <div className="text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                {data.email}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-3 md:mt-0 flex flex-col gap-2 justify-center items-center md:justify-start md:items-start md:gap-3 md:flex-row md:inline-flex">
          <a
            href={`/${data.slug}`}
            className="w-full md:w-fit h-10 md:h-8 bg-blue-950 rounded-md flex-col justify-center items-center inline-flex"
          >
            <div className=" grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-sm font-normal font-['Lato'] leading-snug">
                Get In Touch
              </div>
            </div>
          </a>
          <a
            href={`/${data.slug}`}
            className="w-full md:w-fit h-10 md:h-8 rounded-md border border-blue-950 flex-col justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug">
                View Profile
              </div>
            </div>
          </a>
        </div>
        {data.fins_relatedServices && (
          <>
            <div className="text-center text-blue-950 text-base font-bold font-['Lato'] leading-normal pt-4">
              Services Offered
            </div>
            <div className="text-zinc-800 text-base font-normal font-['Lato'] leading-normal pb-4">
              <ul className="gap-2 self-auto justify-start flex flex-col items-center md:grid md:grid-cols-2 md:justify-start ">
                {data.fins_relatedServices.map((service, i) => (
                  <li key={i} className="">
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfessionalsCard;

//md:self-stretch md:flex-auto md:justify-start flex flex-col justify-center items-center gap-2 md:gap-8 md:inline-flex md:items-start
