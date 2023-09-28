import { HexColor } from "@yext/studio";
import Cta from "./Cta";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export interface MapDescriptionProps {
  children?: React.ReactNode;
  description?: string;
  phone?: string;
  email?: string;
  textColor?: HexColor;
}
const MapDescription = ({
  description,
  phone,
  email,
  textColor,
}: MapDescriptionProps) => {
  return (
    <div className="rounded-lg max-height-full">
      <p className="whitespace-pre-line mr-2" style={{ color: textColor }}>
        {description}
      </p>
      <div className="flex flex-col md:flex-row gap-2 mb-2 mt-5 justify-between">
        <div style={{ color: textColor }} className="flex  items-center">
          <div>
            <PhoneIcon height={16} width={16} />
          </div>
          <div>{phone}</div>
        </div>
        <div style={{ color: textColor }} className="flex gap-1 items-center">
          <div>
            <EnvelopeIcon height={16} width={16} />
          </div>
          <div className="text-sm underline hover:cursor-pointer"> {email}</div>
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
  );
};

export default MapDescription;
