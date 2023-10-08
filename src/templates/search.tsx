// src/templates/search.tsx

import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";

import {
  apiKey,
  experienceKey,
  experienceVersion,
  locale,
} from "../components/common/consts";
import UniversalSearch from "../components/search/UniversalSearch";
import PageLayout from "../components/common/PageLayout";
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

// import {apiKey, experienceKey, locale, experienceVersion} from "../common/consts";

export const getPath: GetPath<TemplateProps> = () => {
  return "search.html";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    //Update title to match Search starter
    title: `Search Capital Bank`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Search: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout _site={document._site}>
      <UniversalSearch />
    </PageLayout>
  );
};

export default Search;
