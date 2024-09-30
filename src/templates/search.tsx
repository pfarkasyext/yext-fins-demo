 
import {
  TemplateRenderProps,
  HeadConfig,
} from "@yext/pages";
import "../index.css";

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
import PageLayout from "../components/PageLayout";
import UniversalSearch from "../components/UniversalSearch";

// import {apiKey, experienceKey, locale, experienceVersion} from "../common/consts";

export const getPath = () => {
  return "search.html";
};

export const getHeadConfig = (): HeadConfig => {
  return {
    //Update title to match Search starter
    title: `Search Capital Bank`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Search = ({ document, __meta }: TemplateRenderProps) => {
  return (
    <PageLayout templateData={{ __meta, document }}>
      <UniversalSearch />
    </PageLayout>
  );
};

export default Search;
