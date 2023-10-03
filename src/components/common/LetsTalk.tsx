import { GoogleMaps } from "@yext/components-tsx-maps";
import { LocationMap } from "@yext/sites-react-components";
import GridContainer from "../GridContainer";
import MapDescription from "../MapDescription";
import StaticMap from "../StaticMap";
import Title from "../Title";
export interface Coordinates {
  latitude?: number;
  longitude?: number;
}
export interface LetsTalkProps {
  description: string;
  emails: string;
  formattedPhone: string;
  geocodedCoordinate: Coordinates;
}

const LetsTalk = ({
  description,
  emails,
  formattedPhone,
  geocodedCoordinate,
}: LetsTalkProps) => {
  return (
    <div className="max-w-5xl flex flex-col justify-center px-10 mt-4">
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
            description={description}
            email={emails}
            phone={formattedPhone}
            textColor="#333333"
          />

          <LocationMap
            className="h-full"
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
        </GridContainer>
      </span>
      <span className="block md:hidden">
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
      </span>
    </div>
  );
};

export default LetsTalk;
