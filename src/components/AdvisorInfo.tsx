import { HexColor } from "@yext/studio";

export interface AdvisorInfoProps {
    children?:React.ReactNode;
    name?: string;
    title?: string;
    email?: string;
    description?: string;
    textColor?: HexColor;
  }
  const AdvisorInfo = ({
    name,
    title,
    email,
    description,
    textColor,
  }: AdvisorInfoProps) => {
    return (
        <div className="rounded-lg w-full">
          <h1 className="text-2xl font-bold mb-2" style={{ color: textColor }}>{name}</h1>
          <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>{title}</h2>
          <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>{email}</h2>
          <p className="" style={{ color: textColor }}>{description}</p>        
        </div>
      );
    };

export default AdvisorInfo;