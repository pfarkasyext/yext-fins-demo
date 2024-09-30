
import { CardProps } from "@yext/search-ui-react";
import { useSearchState } from "@yext/search-headless-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { searchAnalyticsConfig } from "../config";
import { Image } from "@yext/pages-components";

export const searchAnalytics = searchAnalyticsConfig;

const ProfessionalsCard = ({ result }: CardProps) => {
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

  const verticalKey = "financial_professionals";
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
    <article className="w-full p-2 bg-white rounded-lg border border-zinc-200 flex flex-col md:flex-row gap-4">
      <header>
        <Image image={data.headshot} className="w-40 h-44 rounded-lg" />
      </header>

      <div className="flex-grow flex flex-col justify-center items-start gap-2 mx-auto">
        <a
          href={`/${data.slug}`}
          className="text-blue-950 text-lg font-bold font-['Lato'] leading-normal"
          onClick={() => fireTitle(result.id || "")}
          aria-label={`View profile of ${data.name}`}
        >
          {data.name}
        </a>
        <div className="text-blue-950 text-base font-bold font-['Lato']">
          {data.job}
        </div>
        {data.cert && (
          <div className="text-blue-950 text-base italic font-['Lato']">
            {data.cert[0]}
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-4">
          <address className="not-italic text-zinc-800 text-base">
            {data.address.line1}
            <br />
            {`${data.address.city}, ${data.address.region} ${data.address.postalCode}`}
          </address>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-zinc-800" aria-hidden="true" />
              <span className="text-zinc-800 text-base">
                {data.formattedPhone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon
                className="w-5 h-5 text-zinc-800"
                aria-hidden="true"
              />
              <a
                href={`mailto:${data.email}`}
                className="underline text-zinc-800 text-base"
                aria-label={`Email ${data.name}`}
              >
                {data.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <a
            href={`/${data.slug}`}
            className="bg-blue-950 text-white rounded-md px-6 py-2 text-sm font-normal"
            aria-label={`Get in touch with ${data.name}`}
            onClick={() => fireClick(result.id || "", "Get In Touch")}
          >
            Get In Touch
          </a>
          <a
            href={`/${data.slug}`}
            className="border border-blue-950 text-blue-950 rounded-md px-6 py-2 text-sm font-normal"
            aria-label={`View profile of ${data.name}`}
            onClick={() => fireClick(result.id || "", "View Profile")}
          >
            View Profile
          </a>
        </div>
        {data.fins_relatedServices && (
          <>
            <div className="text-blue-950 text-base font-bold pt-4">
              Services Offered
            </div>
            <ul className="text-zinc-800 text-base grid md:grid-cols-2 gap-2">
              {data.fins_relatedServices.map((service, i) => (
                <li key={i}>{service.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
};

export default ProfessionalsCard;
