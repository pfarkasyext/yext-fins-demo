import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/lato/100-italic.css";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/900-italic.css";
import "../index.css";

export const getPath = () => {
  return `guided-advisor-finder`;
};

export const getHeadConfig = (): HeadConfig => {
  return {
    title: "Guided Advisor Finder",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const GuidedDoctorFinder = ({ document }: TemplateRenderProps) => {
  return (
    // <PageLayout _site={document._site}>
    //   <GuidedSearchHero pageTitle={"Find a Financial Advisor"} />
    //   <GuidedSearch></GuidedSearch>
    // </PageLayout>
    <>Hi</>
  );
};

export default GuidedDoctorFinder;
