// src/components/Card.tsx

import * as React from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import {
  experienceKey,
  experienceVersion,
  businessId,
} from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";
import Ce_service from "../../../types/services";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId,
});

const ServicesCard = ({ result }: CardProps<Ce_service>) => {
  //pull in the relevant fields from your entity to display on the card
  const data: any = {
    name: result.rawData.name,
    slug: result.rawData.slug,
    description: result.rawData.description,
    landingPageUrl: result.rawData.landingPageUrl,
    category: result.rawData.fins_serviceCategory,
    cta1: result.rawData.fins_primaryCTA,
    cta2: result.rawData.fins_secondaryCTA,
  };

  //replace below with the appropriate vertical key
  const verticalKey = "fins_products";

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
    <>
      <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex gap-2 items-center flex-col p-4 m-8 pb-6">
        <a
          href={`/${data.slug}`}
          className="text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px] text-center"
          onClick={() => fireTitle(result.id || "")}
        >
          {data.name}
        </a>
        <div className="justify-center items-center gap-2 inline-flex"></div>
        <a
          href={`/${data.slug || "#"}`}
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#E1E5E8]focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-blue-950 border border-blue-950"
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default ServicesCard;
