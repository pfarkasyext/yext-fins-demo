
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import { useSearchState } from "@yext/search-headless-react";
import { searchAnalyticsConfig } from "../config";

export const searchAnalytics = searchAnalyticsConfig;

const ProductsCard = ({ result }: CardProps) => {
  const data: any = {
    name: result.rawData.name,
    slug: result.rawData.slug,
    description: result.rawData.description,
    landingPageUrl: result.rawData.landingPageUrl,
    category: result.rawData.fins_productCategory,
    cta1: result.rawData.fins_primaryCTA,
    cta2: result.rawData.fins_secondaryCTA,
  };

  const verticalKey = "fins_products";
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
    <article className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex gap-2 items-center p-4 m-8 pb-6">
      <header>
        <a
          href={`/${data.slug}`}
          className="text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px] text-center"
          onClick={() => fireTitle(result.id || "")}
          aria-label={`Learn more about ${data.name}`}
        >
          {data.name}
        </a>
      </header>
      <div className="mt-4 text-zinc-800 text-base font-normal text-center">
        {data.description}
      </div>
      <footer className="mt-6">
        <a
          href={`/${data.slug || "#"}`}
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#E1E5E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-blue-950 border border-blue-950"
          aria-label={`Learn more about ${data.name}`}
          onClick={() => fireClick(result.id || "", "Learn More")}
        >
          Learn More
        </a>
      </footer>
    </article>
  );
};

export default ProductsCard;