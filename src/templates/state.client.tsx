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
import { isProduction } from "@yext/pages/util";
import DirectoryHero from "../components/DirectoryHero";
import PageLayout from "../components/common/PageLayout";
import DirectoryStateGrid from "../components/starter/DirectoryStateGrid";
import EditTool from "../components/starter/EditTool";
import "../index.css";

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    description,
    siteDomain,
    c_addressRegionDisplayName,
    dm_directoryChildren,
  } = document;

  return (
    <>
      <PageLayout _site={document._site}>
        <DirectoryHero
          pageTitle={`Capital Bank in ${c_addressRegionDisplayName}`}
        />
        <div className="centered-container">
          <div className="mx-auto max-w-7xl flex flex-row font-bold p-6 lg:px-8">
            <a
              href={"/index.html"}
              className="text-brand-primary hover:text-brand-hover"
            >
              Home
            </a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href={"#"} className="text-brand-primary hover:text-brand-hover">
              {name}
            </a>
          </div>
          <DirectoryStateGrid
            name={
              c_addressRegionDisplayName ? c_addressRegionDisplayName : name
            }
            description={description}
            directoryChildren={dm_directoryChildren}
            relativePrefixToRoot={relativePrefixToRoot}
          />
        </div>
      </PageLayout>
      {/* This component displays a link to the entity that represents the given page in the Knowledge Graph*/}
      {!isProduction(siteDomain) && <EditTool data={document} />}
    </>
  );
};

export default State;
