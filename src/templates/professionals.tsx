import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import PageLayout from "../components/common/PageLayout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import HeroImage from "../components/HeroImage";
import ContactInfo from "../components/ContactInfo";
import { LocationMap } from "@yext/pages/components";
import { GoogleMaps } from "@yext/components-tsx-maps";
import Articles from "../components/Articles";
import MapDescription from "../components/MapDescription";
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
import HeroBanner from "../components/HeroBanner";
import StaticMap from "../components/StaticMap";
import HeroInfo from "../components/common/HeroInfotext";
import LetsTalk from "../components/common/LetsTalk";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InpageNav from "../components/common/InpageNav";
export const config: TemplateConfig = {
  stream: {
    $id: "professionals",
    localization: { locales: ["en"], primary: false },
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
      "c_linkedInsightsArticles.c_insightsArticleSummary",
      "c_linkedInsightsArticles.primaryPhoto",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function Professional({ document, __meta }: TemplateProps) {
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
    <PageLayout _site={document._site}>
      <HeroBanner
        spacing="10"
        topMargin="0"
        bottomMargin="0"
        leftMargin="0"
        rightMargin="0"
        alignment="center"
        verticalOnMobile="false"
        backgroundImage={document.photoGallery[0]?.image.url}
        isProfessional={true}
        headShot={document.headshot.url}
      >
        <span className="hidden md:block">
          <HeroImage
            src={`${document.headshot.url}`}
            alt={`${document.headshot.alternateText}`}
            leftPadding="0"
          />
        </span>
        <HeroInfo
          title={document.name}
          subtitle={document.fins_jobTitle}
          line1={document.address.line1}
          line2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
          email={document.emails[0]}
          phone={formattedPhone}
          textColor="#fff"
        ></HeroInfo>
      </HeroBanner>
      <InpageNav navItems={InPageNavItems}></InpageNav>
      <VerticalStack
        alignment="center"
        rightMargin="0"
        leftMargin="0"
        bottomMargin="0"
        topMargin="0"
        spacing="0"
        backgroundColor="#F9FAFB"
      >
        <div className="max-w-5xl flex flex-col justify-center px-10">
          <a id="about"></a>
          <Title
            value={`About ${document.name}`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="10"
            bottomMargin="4"
            textColor="#1C2E5E"
          />
          <Paragraph
            value={`${document.c_fPBio}`}
            textSize="base"
            fontWeight="normal"
            bottomMargin="10"
          />
        </div>
      </VerticalStack>
      <div className="flex flex-col items-center">
        <div className="max-w-5xl flex flex-col justify-center ">
          <a id="insights"></a>
          <Title
            value={`Insights`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="12"
            bottomMargin="8"
            textColor="#1C2E5E"
          />
          <Articles articles={document.c_linkedInsightsArticles} />
        </div>
      </div>

      <VerticalStack
        alignment="center"
        rightMargin="0"
        leftMargin="0"
        bottomMargin="0"
        topMargin="0"
        spacing="0"
        backgroundColor="#F9FAFB"
      >
        <a id="letstalk"></a>
        <LetsTalk
          description={document.description}
          emails={document.emails[0]}
          formattedPhone={formattedPhone}
          geocodedCoordinate={document.geocodedCoordinate}
        ></LetsTalk>
      </VerticalStack>
    </PageLayout>
  );
}
