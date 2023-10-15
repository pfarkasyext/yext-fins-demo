// src/components/Card.tsx

import * as React from "react";
import { useMemo, useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import "../../../styles/resetStyles.css";
//replace with the vertical typescript interface this custom card applies to
import FAQ from "../../../types/faqs";
import {
  experienceKey,
  experienceVersion,
  businessId,
} from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId,
});

//replace below with the appropriate vertical key
const verticalKey = "faqs";

const FaqCard = ({ result }: CardProps<FAQ>) => {
  //pull in the relevant fields from your entity to display on the card
  const data: any = {
    name: result.rawData.question,
    landingPageUrl: result.rawData.landingPageUrl,
    category: result.rawData.fins_faqCategory,
    cta1: result.rawData.fins_primaryCTA,
    cta2: result.rawData.fins_secondaryCTA,
  };

  // change to the field name that contains html string
  const htmlFieldName = "answerV2";

  // this interface is used to expose the field name containing HTML Content to the card
  interface CustomRawDataType {
    name: string;
    description: string;
    [htmlFieldName]: { html: string };
  }

  function renderHTMLContent(htmlContent: { __html: string } | undefined) {
    if (htmlContent) {
      return (
        <div className="reset-style" dangerouslySetInnerHTML={htmlContent} />
      );
    }
    return null;
  }
  const html: string = result.rawData?.[htmlFieldName]?.html;
  const htmlContent = useMemo(() => {
    return { __html: html };
  }, [html]);

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
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="mb-4 justify-between rounded-lg border p-4 text-stone-900 shadow-sm">
      <div className="body flex flex-col">
        {data.name && (
          <div className="title text-lg font-semibold text-blue-950 flex justify-between items-center">
            <div>{data.name}</div>
            {isCollapsed ? (
              <ChevronDownIcon className={`h-6 w-6 `} onClick={handleToggle} />
            ) : (
              <ChevronUpIcon className={`h-6 w-6 `} onClick={handleToggle} />
            )}
          </div>
        )}
        {!isCollapsed && (
          <div className="description py-2 flex justify-between">
            {renderHTMLContent(htmlContent)}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqCard;
