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
import DirectoryHero from "../components/DirectoryHero";
import PageLayout from "../components/common/PageLayout";
import DirectoryRootGrid from "../components/starter/DirectoryRootGrid";
import "../index.css";

const Index: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const { dm_directoryChildren } = document;

  return (
    <>
      <PageLayout _site={document._site}>
        <DirectoryHero pageTitle={"Capital Bank Directory"} />
        <div className="centered-container">
          <div className="section space-y-14 px-10">
            <DirectoryRootGrid
              directoryChildren={dm_directoryChildren}
              relativePrefixToRoot={relativePrefixToRoot}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Index;
