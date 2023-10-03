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
    <div className="flex flex-col items-center gap-3 md:gap-4">
      <div
        className="text-2xl md:text-4xl font-semibold md:font-bold"
        style={{ color: textColor }}
      >
        {name}
      </div>
      <div
        className="text-base md:text-lg font-bold"
        style={{ color: textColor }}
      >
        {city}
      </div>
      <div
        className="text-sm md:text-base font-normal flex flex-col items-center"
        style={{ color: textColor }}
      >
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
      </div>
      <span className="hidden md:block">
        <div
          className="text-base font-normal flex flex-row gap-2 items-center"
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
      </span>
      <span className="block md:hidden">
        <div className="flex flex-col text-sm gap-2">
          <div className="flex gap-2 items-center justify-center">
            <BsTelephone className="text-white h-4 w-4" />
            <div className={`text-[#fff]`}>{phone}</div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <HiOutlineMail className="text-white h-4 w-4" />
            <div className={`text-[#fff]`}> {email}</div>
          </div>
        </div>
      </span>
      <button className="bg-white hover:bg-slate-100 text-blue border-blue font-normal text-sm md:text-base py-2 px-4 md:py-2 md:px-8 rounded w-full md:w-fit">
        Get In Touch
      </button>
    </div>
  );
};

export default LocationInfo;
