 import { CardProps } from "@yext/search-ui-react";
 
import { useSearchState } from "@yext/search-headless-react";
import { searchAnalyticsConfig } from "../config";
import Icon from "../Icon";

export const searchAnalytics = searchAnalyticsConfig;

const DocumentsCard = ({ result }: CardProps) => {
  const data: any = {
    name: result.rawData.name,
    fileUrl: result.rawData.c_file.url,
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

  let fileUrlCta;
  data.fileUrl ? (fileUrlCta = data.fileUrl) : (fileUrlCta = "#");

  return (
    <>
      <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex gap-2 items-center flex-col p-6 m-8 pb-6">
        <Icon name="pdf" classname="text-red-700" height="14" width="14" />
        <a
          href={`${fileUrlCta}`}
          className="text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px] text-center"
          onClick={() => fireTitle(result.id || "")}
        >
          {data.name}
        </a>
        <div className="justify-center items-center gap-2 inline-flex"></div>
        <a
          href={`${fileUrlCta}`}
          className="justify-self-end rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#E1E5E8]focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-blue-950 border border-blue-950"
        >
          View File
        </a>
      </div>
    </>
  );
};

export default DocumentsCard;
