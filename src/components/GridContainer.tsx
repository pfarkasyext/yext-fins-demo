import { HexColor } from "@yext/studio";

export interface GridContainerProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
  backgroundImage?: string;
}

const GridContainer = ({
  children,
  backgroundColor,
  backgroundImage,
}: GridContainerProps) => {
  console.log(JSON.stringify(backgroundImage));

  return (
    <div
      className="mx-auto py-10 bg-cover grid grid-cols-1 md:grid-cols-2  gap-x-8 px-8"
      style={{
        backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
