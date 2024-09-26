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
import Articles from "../components/Articles";
import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import Team from "../components/Team";
import VerticalStack from "../components/VerticalStack";
import HeroInfo from "../components/common/HeroInfotext";
import InpageNav from "../components/common/InpageNav";
import LetsTalk from "../components/common/LetsTalk";
import PageLayout from "../components/common/PageLayout";
import "../index.css";

const Location = ({ document }: TemplateProps) => {
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
      >
        <HeroInfo
          title={document.name}
          subtitle={document.address.city}
          line1={document.address.line1}
          line2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
          email={document.emails[0]}
          phone={formattedPhone}
          textColor="#fff"
        ></HeroInfo>
      </HeroBanner>
      <VerticalStack
        alignment="center"
        rightMargin="0"
        leftMargin="0"
        bottomMargin="0"
        topMargin="0"
        spacing="0"
        backgroundColor="#F9FAFB"
      >
        <div className="max-w-5xl flex md:flex-row flex-col justify-center items-center py-16 gap-8 px-4 md:px-0">
          <img
            src={
              "https://a.mktgcdn.com/p/65JQqTuL6mWfKaHM0EiyiPEV820Oi35tUPhDN36Tq1A/3149x4724.jpg"
            }
            className="w-full md:w-[309.59px] aspect-[3/4] rounded-lg object-center object-cover"
          />
          <div className="flex flex-col items-left gap-6">
            <div className="text-2xl font-bold text-blue-950">Joseph Adams</div>
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
      </VerticalStack>
      <InpageNav navItems={InPageNavItems}></InpageNav>

      {document.fins_relatedServices && (
        <>
          <a id="services"></a>
          {/* <Services services={document.fins_relatedServices} /> */}
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
        </>
      )}

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

export default Location;
