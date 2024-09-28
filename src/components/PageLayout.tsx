import Header from "./Header";
import Footer from "./Footer";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages-components";
import { TemplateProps } from "@yext/pages";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { searchConfig } from "./config";

export interface PageLayoutProps {
  children?: React.ReactNode;
  _site?: any;
  templateData: TemplateProps;
}

const PageLayout = ({ children, _site, templateData }: PageLayoutProps) => {
  return (
    <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
      {/* AnalyticsProvider templateData={templateData} apiKey={""} currency={""}> */}
      <div className={"mx-auto w-full min-h-screen"}>
        {/* <AnalyticsScopeProvider name="header"> */}
        <Header _site={_site} />
        {/* </AnalyticsScopeProvider> */}
        {children}
        {/* <AnalyticsScopeProvider name="footer"> */}
        <Footer _site={_site} />
        {/* </AnalyticsScopeProvider> */}
      </div>

      {/* </AnalyticsProvider> */}
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
