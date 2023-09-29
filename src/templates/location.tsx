import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import PageLayout from "../components/common/PageLayout";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import LocationInfo from "../components/LocationInfo";
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
import Services from "../components/Services";
import Team from "../components/Team";
import StaticMap from "../components/StaticMap";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    localization: { locales: ["en"], primary: false },
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
      "c_relatedFPsAndTeams.name",
      "c_relatedFPsAndTeams.mainPhone",
      "c_relatedFPsAndTeams.emails",
      "c_relatedFPsAndTeams.headshot",
      "c_relatedFPsAndTeams.fins_jobTitle",
      "c_relatedFPsAndTeams.slug",
      "c_linkedInsightsArticles.name",
      "c_linkedInsightsArticles.c_insightsArticleSummary",
      "c_linkedInsightsArticles.primaryPhoto",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function Location({ document, __meta }: TemplateProps) {
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
        <LocationInfo
          name={document.name}
          city={document.address.city}
          addressLine1={document.address.line1}
          addressLine2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
          email={document.emails[0]}
          phone={formattedPhone}
          textColor="#fff"
        ></LocationInfo>
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
      <ul className="hidden md:flex justify-center gap-10 py-4">
        <li>
          <a href="#services"> Our Services</a>
        </li>
        <li>
          {" "}
          <a href="#team"> Our Team</a>
        </li>
        <li>
          {" "}
          <a href="#insights"> Insights</a>
        </li>
        <li>
          {" "}
          <a href="#reviews"> Recent Reviews</a>
        </li>
        <li>
          {" "}
          <a href="#letstalk"> Let's Talk</a>
        </li>
      </ul>
      <ul className="md:hidden flex flex-col justify-center px-4 md:px-0 md:gap-10 py-4">
        <li className="flex justify-between items-center">
          <div
            onClick={() => setIsSubNavOpen(true)}
            className="hover:cursor-pointer flex-1"
          >
            Navigate to{" "}
          </div>
          <XMarkIcon
            className="h-4 w-4 hover:cursor-pointer"
            onClick={() => setIsSubNavOpen(false)}
          />
        </li>
        <hr className="my-4" />
        {isSubNavOpen && (
          <span
            className="bg-white  rounded py-4 mt-4 transition-all"
            style={{ opacity: isSubNavOpen ? 1 : 0 }}
          >
            <a href="#services"> Our Services</a>
            <hr className="my-4" />
            <li>
              <a href="#services"> Our Services</a>
            </li>
            <hr className="my-4" />
            <li>
              <a href="#team"> Our Team</a>
            </li>
            <hr className="my-4" />
            <li>
              <a href="#insights"> Insights</a>
            </li>
            <hr className="my-4" />
            <li>
              <a href="#reviews"> Recent Reviews</a>
            </li>
            <hr className="my-4" />
            <li>
              <a href="#letstalk"> Let's Talk</a>
            </li>
            <hr className="my-4" />
          </span>
        )}
      </ul>
      {document.fins_relatedServices && (
        <>
          <a id="services"></a>
          <Services services={document.fins_relatedServices} />
        </>
      )}

      {document.c_relatedFPsAndTeams && (
        <>
          <a id="team"></a>
          <Team
            team={document.c_relatedFPsAndTeams.slice(0, 6)}
            city={document.address.city}
          />
        </>
      )}

      {document.c_linkedInsightsArticles && (
        <>
          <a id="insights"></a>
          <div className="flex flex-col items-center">
            <div className="max-w-5xl flex flex-col justify-center ">
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
        <div className="max-w-5xl flex flex-col justify-center px-10 mt-8 md:mt-0">
          <Title
            value={`Let's Talk`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="4"
            bottomMargin="2"
            backgroundColor="#F9FAFB"
            textColor="#1C2E5E"
          />
          <span className="hidden md:block">
            <GridContainer backgroundColor="#F9FAFB">
              <MapDescription
                description={document.description}
                email={document.emails[0]}
                phone={formattedPhone}
                textColor="#333333"
              />

              <LocationMap
                className="h-full"
                clientKey="gme-yextinc"
                coordinate={document.geocodedCoordinate}
                provider={GoogleMaps}
              >
                {
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
                }
              </LocationMap>
            </GridContainer>
          </span>
          <span className="block md:hidden">
            <div className="grid grid-cols-1 gap-y-12 mt-4">
              <div>
                <StaticMap
                  latitude={document.geocodedCoordinate.latitude}
                  longitude={document.geocodedCoordinate.longitude}
                ></StaticMap>
              </div>
              <MapDescription
                description={document.description}
                email={document.emails[0]}
                phone={formattedPhone}
                textColor="#333333"
              />
            </div>
          </span>
        </div>
      </VerticalStack>
    </PageLayout>
  );
}
