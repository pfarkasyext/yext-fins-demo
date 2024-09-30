import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";

import { useSearchState } from "@yext/search-headless-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { searchAnalyticsConfig } from "../config";

export const searchAnalytics = searchAnalyticsConfig;

const LocationCard = ({ result }: CardProps) => {
  const data: any = {
    name: result.rawData.name,
    slug: result.rawData.slug,
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

  const verticalKey = "locations";
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
    <article className="w-full p-6 bg-white rounded-lg border border-zinc-200">
      <div className="flex flex-col gap-4">
        <a
          href={data.slug}
          className="text-blue-950 text-lg font-bold font-['Lato'] leading-normal"
          aria-label={`Location: ${data.name}`}
        >
          {data.name}
        </a>
        <div className="flex flex-col md:flex-row gap-4">
          <address className="not-italic text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
            {data.address.line1}
            <br />
            {`${data.address.city}, ${data.address.region} ${data.address.postalCode}`}
          </address>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-zinc-800" aria-hidden="true" />
              <span className="text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                {data.formattedPhone || "(800) 291-5039"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon
                className="w-5 h-5 text-zinc-800"
                aria-hidden="true"
              />
              <a
                href={`mailto:${data.email || "atmsupport@capitalbank.com"}`}
                className="text-zinc-800 text-base font-normal font-['Lato'] underline"
                aria-label={`Email: ${
                  data.email || "atmsupport@capitalbank.com"
                }`}
              >
                {data.email || "atmsupport@capitalbank.com"}
              </a>
            </div>
          </div>
        </div>
        {data.slug && (
          <div className="flex flex-col md:flex-row gap-2">
            <a
              href={`/${data.slug}`}
              className="w-full md:w-fit h-10 bg-blue-950 rounded-md flex justify-center items-center text-white text-sm font-normal font-['Lato']"
              aria-label="Get in touch"
              onClick={() => fireClick(result.id || "", "Get In Touch")}
            >
              Get In Touch
            </a>
            <a
              href={`/${data.slug}`}
              className="w-full md:w-fit h-10 rounded-md border border-blue-950 flex justify-center items-center text-blue-950 text-sm font-normal font-['Lato']"
              aria-label="View Profile"
              onClick={() => fireClick(result.id || "", "View Profile")}
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default LocationCard;
