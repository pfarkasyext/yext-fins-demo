import "@fontsource/lato/100-italic.css";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900-italic.css";
import "@fontsource/lato/900.css";
import { Template, TemplateRenderProps } from "@yext/pages";
import PageLayout from "../components/common/PageLayout";
import UniversalSearch from "../components/search/UniversalSearch";
import "../index.css";

const Search: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout _site={document._site}>
      <UniversalSearch />
    </PageLayout>
  );
};

export default Search;
