import {
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateRenderProps,
} from "@yext/pages";
import { Image } from "@yext/pages-components";
import "../index.css";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/lato/100-italic.css";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/900-italic.css";
import "../index.css";
import PageLayout from "../components/PageLayout";
import ProfessionalOrLocationHero from "../components/ProfessionalOrLocationHero";
import Articles from "../components/Articles";
import InpageNav from "../components/InpageNav";
import Services from "../components/Services";
import Team from "../components/Team";
import LetsTalk from "../components/LetsTalk";

export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    localization: { locales: ["en"] },
    filter: {
      entityTypes: ["location"],
    },
    fields: [
      "name",
      "id",
      "description",
      "slug",
      "photoGallery",
      "logo",
      "emails",
      "address",
      "mainPhone",
      "geocodedCoordinate",
      "fins_relatedServices.name",
      "fins_relatedServices.c_serviceDescription",
      "fins_relatedServices.slug",
      "c_relatedFPsAndTeams.name",
      "c_relatedFPsAndTeams.mainPhone",
      "c_relatedFPsAndTeams.emails",
      "c_relatedFPsAndTeams.headshot",
      "c_relatedFPsAndTeams.fins_jobTitle",
      "c_relatedFPsAndTeams.slug",
      "c_linkedInsightsArticles.name",
      "c_linkedInsightsArticles.slug",
      "c_linkedInsightsArticles.c_insightsArticleSummary",
      "c_linkedInsightsArticles.primaryPhoto",
    ],
  },
};
export const getPath = ({ document }: TemplateRenderProps) => {
  return document.slug ?? document.id.toString();
};
export const getHeadConfig = ({
  document,
}: TemplateRenderProps): HeadConfig => {
  return {
    title: `${document.name} | Location`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital Wealth Management Location",
        },
      },
    ],
  };
};
const Location:Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}:TemplateRenderProps) => {  
  const mappinSVG = (
    <svg
      width="56"
      height="58"
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
        fill="#0F70F0"
        stroke="black"
        strokeOpacity="0.5"
      />
      <path
        d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
        fill="white"
      />
    </svg>
  );
  const formattedPhone = `${document.mainPhone.substring(
    0,
    2
  )} (${document.mainPhone.substring(2, 5)}) ${document.mainPhone.substring(
    5,
    8
  )}-${document.mainPhone.substring(8)}`;

  const InPageNavItems = [
    {
      name: "Services",
      navId: "services",
    },
    {
      name: "Our Team",
      navId: "team",
    },
    {
      name: "Insights",
      navId: "insights",
    },
    {
      name: "Recent Reviews",
      navId: "reviews",
    },
    {
      name: "Let's Talk",
      navId: "letstalk",
    },
  ];

  return (
 <PageLayout templateData={{ __meta, document }}> 
      <ProfessionalOrLocationHero
        title={document.name}
        subtitle={document.address.city}
        line1={document.address.line1}
        line2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
        email={document.emails[0]}
        phone={formattedPhone}
        backgroundImage={document.photoGallery[0] || document._site.c_defaultHeaderImage}
        textColor="#fff"
      />
      <div className="w-full conainer text-center bg-[#F9FAFB]">
        <div className={`flex flex-col `}>
          <div className="max-w-5xl flex md:flex-row flex-col justify-center items-center py-16 gap-8 px-4 md:px-0 mx-auto">
            <Image image={document._site.c_regionalDirector} className="w-full md:w-[309.59px] aspect-[3/4] rounded-lg object-center object-cover"
            ></Image>
             
            <div className="flex flex-col items-left gap-6">
              <div className="text-2xl font-bold text-blue-950">
                Joseph Adams
              </div>
              <div className="text-blue-950 text-base font-bold">
                Regional Director
              </div>
              <div className="text-zinc-800 text-base font-normal underline">
                jadams@capitalbank.com
              </div>
              <div className="text-zinc-800 text-base font-normal">
                {document.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      <InpageNav navItems={InPageNavItems}></InpageNav>

      {document.fins_relatedServices && (
        <>
          <a id="services"></a>
           <section className="px-4 w-full md:px-32 bg-white py-4 md:h-full ">
            <Services services={document.fins_relatedServices} />
          </section>
        </>
      )}

      {document.c_relatedFPsAndTeams && (
        <>
          <a id="team"></a>
          <span className="block md:hidden">
            <Team
              team={document.c_relatedFPsAndTeams.slice(0, 3)}
              city={document.address.city}
            />
          </span>
          <span className="md:block hidden">
            <Team
              team={document.c_relatedFPsAndTeams.slice(0, 6)}
              city={document.address.city}
            />
          </span>
        </>
      )}

      {document.c_linkedInsightsArticles && (
        <>
          <a id="insights"></a>
          <div className="flex flex-col items-center">
            <div className="max-w-5xl flex flex-col justify-center ">
              <Articles articles={document.c_linkedInsightsArticles} />
            </div>
          </div>
        </>
      )}
      <LetsTalk
        description={document.description}
        emails={document.emails[0]}
        formattedPhone={document.mainPhone}
        geocodedCoordinate={document.geocodedCoordinate}
      />
    </PageLayout>
  );
};

export default Location;
