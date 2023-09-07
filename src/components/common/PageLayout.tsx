import { HexColor } from "@yext/studio";
import Header from "../starter/Header";
import Footer from "../starter/Footer";
import ComplexHeader from "./ComplexHeader";

export interface PageLayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  containerClassName?: string;
}

const PageLayout = ({
  children,
  backgroundColor,
  containerClassName,
}: PageLayoutProps) => {
  return (
    <div
      className={`min-h-screen relative flex flex-col justify-between`}
      style={{ backgroundColor }}
    >
      <ComplexHeader />
      <main className={containerClassName}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
