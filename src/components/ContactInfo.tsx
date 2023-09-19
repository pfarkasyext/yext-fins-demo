import { HexColor } from "@yext/studio";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"

export interface ContactInfoProps {
  children?: React.ReactNode;
  name?: string;
  title?: string;
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  email?: string;
  textColor?: HexColor;
}
const ContactInfo = ({
  name,
  title,
  addressLine1,
  addressLine2,
  phone,
  email,
  textColor,
}: ContactInfoProps) => {
  return (
    <div className="rounded-lg w-80">
      <h1 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
        {name}
      </h1>
      <h2 className="text-lg font-bold mb-4" style={{ color: textColor }}>
        {title}
      </h2>
      <div className="columns-2 mb-4 w-96 text-base font-normal">
        <div className="flex flex-col mb-0">
          <p
            className="mr-2 text-base font-normal"
            style={{ color: textColor }}
          >
            {addressLine1}
          </p>
          <p className="mr-2" style={{ color: textColor }}>
            {addressLine2}
          </p>
        </div>
        <div className="flex flex-col mb-4 w-fit">
          <div className="flex flex-row gap-2 align-center">
            <BsTelephone style={{color:"#FFF"}}/>
            <p className="" style={{ color: textColor }}>
              {phone}
            </p>
          </div>

          <div className="flex flex-row gap-2 content-center">
            <HiOutlineMail className="text-white h-fit"/>
            <p className="" style={{ color: textColor }}>
              {email}
            </p>
          </div>
        </div>
      </div>
      <button className="bg-white hover:bg-slate-100 text-blue border-blue font-normal text-small py-2 px-8 rounded">
        Request an Appointment
      </button>
    </div>
  );
};

export default ContactInfo;
