import "@fontsource/lato/100-italic.css";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900-italic.css";
import "@fontsource/lato/900.css";
import { TemplateProps } from "@yext/pages";
import { useState } from "react";
import Articles from "../components/Articles";
import HeroBanner from "../components/HeroBanner";
import HeroImage from "../components/HeroImage";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import HeroInfo from "../components/common/HeroInfotext";
import InpageNav from "../components/common/InpageNav";
import LetsTalk from "../components/common/LetsTalk";
import PageLayout from "../components/common/PageLayout";
import "../index.css";

const Professional = ({ document }: TemplateProps) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);

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
          {/* <Title
            value={`Insights`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="12"
            bottomMargin="8"
            textColor="#1C2E5E"
          /> */}
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
};

export default Professional;
