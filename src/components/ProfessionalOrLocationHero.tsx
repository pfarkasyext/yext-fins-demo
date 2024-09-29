import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export interface ProfessionalOrLocationHeroProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  line1?: string;
  line2?: string;
  phone?: string;
  email?: string;
  textColor?: any;
  backgroundImage?: string;
  backgroundColor?: string;
  isProfessional?: boolean;
  headShot?: string;
}

const ProfessionalOrLocationHero = ({
  title,
  subtitle,
  line1,
  line2,
  phone,
  email,
  backgroundImage,
  isProfessional,
  headShot,
}: ProfessionalOrLocationHeroProps) => {
  return (
    <div className="relative overflow-hidden min-h-fit bg-blue-950 bg-opacity-80">
      {backgroundImage && <img
        src={backgroundImage}
        className={`hidden md:block object-cover absolute -z-10 w-full object-bottom ${
          isProfessional && `-top-1/3`
        }`}
      />}
       
      <div className="flex flex-col justify-between p-8 h-full">
        <div
          className={`flex content-center justify-center h-fit md:h-[482px]  items-center gap-10 mt-0 mb-0 ml-0 mr-0`}
        >
          {headShot && (
            <div className="col-start-2 row-span-2 self-center">
              <div className="aspect-square overflow-hidden rounded-full h-52">
                <img
                  src={headShot}
                  className={`h-full w-full object-cover object-center  `}
                />
              </div>
            </div>
          )}
          <div
            className={`flex flex-col items-center gap-3 md:gap-4 text-white`}
          >
            <div className="text-2xl md:text-4xl font-semibold md:font-bold">
              {title}
            </div>
            <div className="text-base md:text-lg font-bold">{subtitle}</div>
            <div className="text-sm md:text-base font-normal flex flex-col items-center">
              <p>{line1}</p>
              <p>{line2}</p>
            </div>
            <span className="hidden md:block">
              <div className="text-base font-normal flex flex-row gap-2 items-center">
                <BsTelephone />
                <p className="">{phone}</p>
                <p>{"|"}</p>
                <HiOutlineMail className=" h-fit" />
                <p className="">{email}</p>
              </div>
            </span>
            <span className="block md:hidden">
              <div className="flex flex-col text-sm gap-2">
                <div className="flex gap-2 items-center justify-center">
                  <BsTelephone className="  h-4 w-4" />
                  <div>{phone}</div>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <HiOutlineMail className="  h-4 w-4" />
                  <div> {email}</div>
                </div>
              </div>
            </span>
            <button
              className={`bg-white hover:bg-slate-100 !text-blue border-blue font-normal text-sm md:text-base py-2 px-4 md:py-2 md:px-8 rounded w-full md:w-fit text-brand-blue`}
            >
              Request An Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalOrLocationHero;
