import { HexColor } from "@yext/studio";
import Header from "../starter/Header";
import Footer from "../starter/Footer";
import ComplexHeader from "./ComplexHeader";

export interface PageLayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  containerClassName?: string;
  _site?: any;
}

const PageLayout = ({
  children,
  backgroundColor,
  containerClassName,
  _site,
}: PageLayoutProps) => {
  return (
    <div
      className={`min-h-screen relative flex flex-col justify-between`}
      style={{ backgroundColor }}
    >
      <ComplexHeader data={_site} />
      <main className={containerClassName}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
