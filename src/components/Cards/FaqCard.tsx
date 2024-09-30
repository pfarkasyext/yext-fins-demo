import { useMemo, useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { useSearchState } from "@yext/search-headless-react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { searchAnalyticsConfig } from "../config";

export const searchAnalytics = searchAnalyticsConfig;

const verticalKey = "faqs";

const FaqCard = ({ result }: CardProps) => {
  const data: any = {
    name: result.rawData.question,
    landingPageUrl: result.rawData.landingPageUrl,
    category: result.rawData.fins_faqCategory,
    cta1: result.rawData.fins_primaryCTA,
    cta2: result.rawData.fins_secondaryCTA,
  };

  const htmlFieldName = "answerV2";

  interface CustomRawDataType {
    name: string;
    description: string;
    [htmlFieldName]: { html: string };
  }

  function renderHTMLContent(htmlContent: { __html: string } | undefined) {
    if (htmlContent) {
      return (
        <div
          className="reset-style"
          dangerouslySetInnerHTML={htmlContent}
          aria-live="polite"
        />
      );
    }
    return null;
  }

  const html: string = result.rawData?.[htmlFieldName]?.html;
  const htmlContent = useMemo(() => {
    return { __html: html };
  }, [html]);

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
    <article className="mb-4 rounded-lg border p-4 text-stone-900 shadow-sm">
      <header className="flex justify-between items-center">
        {data.name && (
          <button
            className="text-lg font-semibold text-blue-950 flex justify-between items-center"
            onClick={handleToggle}
            aria-expanded={!isCollapsed}
            aria-controls={`faq-${result.id}`}
          >
            {data.name}
            {isCollapsed ? (
              <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        )}
      </header>
      <div
        id={`faq-${result.id}`}
        className={`mt-2 ${isCollapsed ? "hidden" : "block"}`}
      >
        {renderHTMLContent(htmlContent)}
      </div>
    </article>
  );
};

export default FaqCard;