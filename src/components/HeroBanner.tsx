export interface HeroBannerProps {
  children: React.ReactNode;
  spacing: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  leftMargin: "0" | "2" | "4" | "6" | "8" | "10";
  rightMargin: "0" | "2" | "4" | "6" | "8" | "10";
  topMargin: "0" | "2" | "4" | "6" | "8" | "10";
  bottomMargin: "0" | "2" | "4" | "6" | "8" | "10";
  alignment: "top" | "center" | "bottom";
  verticalOnMobile: "true" | "false";
  backgroundImage?: string;
  backgroundColor?: string;
  isProfessional?: boolean;
  headShot?: string;
}

const HeroBanner = ({
  children,
  spacing,
  leftMargin,
  rightMargin,
  topMargin,
  bottomMargin,
  alignment,
  verticalOnMobile,
  backgroundImage,
  isProfessional = false,
  headShot,
}: HeroBannerProps) => {
  const spacingVariants = {
    "0": "gap-0",
    "1": "gap-1",
    "2": "gap-2",
    "3": "gap-3",
    "4": "gap-4",
    "5": "gap-5",
    "6": "gap-6",
    "7": "gap-7",
    "8": "gap-8",
    "9": "gap-9",
    "10": "gap-10",
  };

  const leftMarginVariants = {
    "0": "ml-0",
    "2": "ml-2",
    "4": "ml-4",
    "6": "ml-6",
    "8": "ml-8",
    "10": "ml-10",
  };

  const rightMarginVariants = {
    "0": "mr-0",
    "2": "mr-2",
    "4": "mr-4",
    "6": "mr-6",
    "8": "mr-8",
    "10": "mr-10",
  };

  const topMarginVariants = {
    "0": "mt-0",
    "2": "mt-2",
    "4": "mt-4",
    "6": "mt-6",
    "8": "mt-8",
    "10": "mt-10",
  };

  const bottomMarginVariants = {
    "0": "mb-0",
    "2": "mb-2",
    "4": "mb-4",
    "6": "mb-6",
    "8": "mb-8",
    "10": "mb-10",
  };

  const alignmentVariants = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  };

  const responsiveVariants = {
    true: "flex-col sm:flex-row",
    false: "",
  };

  return (
    <>
      <div className="relative overflow-hidden min-h-fit bg-blue-950 bg-opacity-80">
        <img
          src={backgroundImage}
          className={`hidden md:block object-cover absolute -z-10 w-full  object-bottom ${
            isProfessional && `-top-1/3`
          }`}
        />
        <img
          style={{ height: "290px" }}
          src={isProfessional ? headShot : backgroundImage}
          className="block md:hidden object-cover absolute -z-10 w-full"
        />
        <div className="flex flex-col justify-between p-8 h-full">
          <div
            className={`flex content-center justify-center h-fit md:h-[482px] ${responsiveVariants[verticalOnMobile]} ${alignmentVariants[alignment]} ${spacingVariants[spacing]} ${topMarginVariants[topMargin]} ${bottomMarginVariants[bottomMargin]} ${leftMarginVariants[leftMargin]} ${rightMarginVariants[rightMargin]}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
