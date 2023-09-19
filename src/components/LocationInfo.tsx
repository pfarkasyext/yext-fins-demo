import { HexColor } from "@yext/studio";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export interface LocationInfoProps {
  children?: React.ReactNode;
  name?: string;
  city?: string;
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  email?: string;
  textColor?: HexColor;
}
const LocationInfo = ({
  name,
  city,
  addressLine1,
  addressLine2,
  phone,
  email,
  textColor,
}: LocationInfoProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl font-bold" style={{ color: textColor }}>
        {name}
      </div>
      <div className="text-lg font-bold" style={{ color: textColor }}>
        {city}
      </div>
      <div
        className="text-base font-normal flex flex-col items-center"
        style={{ color: textColor }}
      >
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
      </div>
      <div
        className="text-base font-normal flex flex-row gap-2"
        style={{ color: textColor }}
      >
        <BsTelephone style={{ color: "#FFF" }} />
        <p className="" style={{ color: textColor }}>
          {phone}
        </p>
        <p>{"|"}</p>
        <HiOutlineMail className="text-white h-fit" />
        <p className="" style={{ color: textColor }}>
          {email}
        </p>
      </div>
      <button className="bg-white hover:bg-slate-100 text-blue border-blue font-normal text-small py-2 px-8 rounded">
        Get In Touch
      </button>
    </div>
  );
};

export default LocationInfo;
