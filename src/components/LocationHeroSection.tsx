import { HexColor } from "@yext/studio";

export interface HeroSectionProps {
    children?:React.ReactNode;
    name?: string;
    city?: string;
    addressLine1?: string;
    addressLine2?: string;
    phone?: string;
    email?: string;
    textColor?: HexColor;
    backgroundImage?: string;
  }
  const HeroSection = ({
    name,
    city,
    addressLine1,
    addressLine2,
    phone,
    email,
    textColor,
    backgroundImage,
  }: HeroSectionProps) => {
    return (
      <div className="min-w-full h-80 bg-center bg-cover flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="content-container text-center">
          <h1 className="text-2xl font-bold mb-2" style={{ color: textColor }}>{name}</h1>
          <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>{city}</h2>
          <div className="mb-2">
            <div className="flex mb-1 justify-between space-x-10">
              <p className="min-w-fit" style={{ color: textColor }}>{addressLine1}</p>
              <p className="ml-auto" style={{ color: textColor }}>{phone}</p>
            </div>
            <div className="flex mb-1 justify-between space-x-10">
              <p className="min-w-fit" style={{ color: textColor }}>{addressLine2}</p>
              <p className="ml-auto" style={{ color: textColor }}>{email}</p>
            </div>
          </div>
          <button className="bg-white hover:bg-slate-100 text-blue border-blue font-semibold py-2 px-4 rounded">
            Request an Appointment
          </button>
        </div>
      </div>
    );    
    };

export default HeroSection;
