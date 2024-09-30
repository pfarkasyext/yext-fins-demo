import { LocationMap } from "@yext/pages-components";

import { GoogleMaps } from "@yext/pages-components";
import StaticMap from "./StaticMap";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import Cta from "./Cta";

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}
export interface LetsTalkProps {
  description: string;
  emails: string;
  formattedPhone: string;
  geocodedCoordinate: any;
}

const LetsTalk = ({
  description,
  emails,
  formattedPhone,
  geocodedCoordinate,
}: LetsTalkProps) => {
  return (
    <div className="w-full bg-[#F9FaFb] py-4 md:py-8">
      <div className="max-w-5xl flex flex-col justify-center px-10 mt-4 mx-auto">
        <div className="flex justify-center items-center ">
          <div className={`not-prose mt-4 mb-8`}>
            <h1
              className={`text-2xl md:text-4xl tracking-tight font-medium text-[#1C2E5E]`}
            >
              {`Let's Talk`}
            </h1>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="md:w-1/2 rounded-lg max-height-full  md:text-left">
            <p className="whitespace-pre-line mr-2 text-[#333333]">
              {description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-8 mt-5 justify-between">
              <div className="flex justify-center md:justify-start items-center  text-[#333333]">
                <div>
                  <PhoneIcon height={16} width={16} />
                </div>
                <div>{formattedPhone}</div>
              </div>
              <div className="flex  justify-center md:justify-start gap-1 items-center  text-[#333333]">
                <div>
                  <EnvelopeIcon height={16} width={16} />
                </div>
                <div className="text-sm underline hover:cursor-pointer">
                  {emails}
                </div>
              </div>
            </div>
            <div className=" rounded-md border border-blue-950 flex-col justify-center items-center flex w-full md:w-fit mt-4 md:mt-8 ">
              <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug ">
                  <Cta buttonText="Request a Meeting" url="#" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
  
            <LocationMap
              className="h-[300px] md:h-full"
              clientKey="gme-yextinc"
              coordinate={geocodedCoordinate}
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
          </div>
        </div>

        {/* <span className="block md:hidden">
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <StaticMap
              latitude={geocodedCoordinate.latitude}
              longitude={geocodedCoordinate.longitude}
            ></StaticMap>
          </div>
          <MapDescription
            description={description}
            email={emails}
            phone={formattedPhone}
            textColor="#333333"
          />
        </div>
      </span> */}
      </div>
    </div>
  );
};

export default LetsTalk;
