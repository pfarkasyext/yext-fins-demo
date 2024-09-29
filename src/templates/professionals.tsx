import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";

import "../index.css";

import Articles from "../components/Articles";
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
import { useState } from "react";
import InpageNav from "../components/InpageNav";
import LetsTalk from "../components/LetsTalk";
import PageLayout from "../components/PageLayout";
import ProfessionalOrLocationHero from "../components/ProfessionalOrLocationHero";
export const config: TemplateConfig = {
  stream: {
    $id: "professionals",
    localization: { locales: ["en"] },
    filter: {
      entityTypes: ["financialProfessional"],
      savedFilterIds: ["1339778047"],
    },
    fields: [
      "name",
      "id",
      "description",
      "headshot",
      "slug",
      "photoGallery",
      "c_fPBio",
      "fins_jobTitle",
      "logo",
      "fins_relatedServices.name",
      "emails",
      "address",
      "mainPhone",
      "geocodedCoordinate",
      "fins_relatedServices.description",
      "fins_relatedServices.fins_servicesImage",
      "c_linkedInsightsArticles.name",
      "c_linkedInsightsArticles.slug",
      "c_linkedInsightsArticles.c_insightsArticleSummary",
      "c_linkedInsightsArticles.primaryPhoto",
      "c_linkedInsightsArticles.datePosted",
    ],
  },
};
export const getPath  = ({ document }:TemplateRenderProps) => {
  return document.slug ?? document.id.toString();
};
export const getHeadConfig = ({ document }:TemplateRenderProps): HeadConfig => {
  return {
    title: `${document.name} | Professional`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital Wealth Management Professional",
        },
      },
    ],
  };
};
const Professional:Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}:TemplateRenderProps) => {  
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);

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
      name: "About",
      navId: "about",
    },
    {
      name: "Insights",
      navId: "insights",
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
        backgroundImage={document.photoGallery[0]?.image.url}
        textColor="#fff" headShot={document.headshot.url}
      />
      <InpageNav navItems={InPageNavItems}></InpageNav>
      <div className="bg-[#F9FAFB] text-center w-full"> 
         <div className="max-w-5xl flex flex-col justify-center px-10 w-full mx-auto">
          <a id="about"></a>
          <h1 className="text-4xl font-medium mt-8 mb-4 text-[#1C2E5E]">About {document.name}</h1>
          <p className="mb-10">{document.c_fPBio}</p>
          
        </div>
        </div>
    
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
           <div className="bg-[#F9FAFB] text-center w-full"> 
           <LetsTalk
        description={document.description}
        emails={document.emails[0]}
        formattedPhone={document.mainPhone}
        geocodedCoordinate={document.geocodedCoordinate}
      /></div>
    </PageLayout>
  );
};

export default Professional;
