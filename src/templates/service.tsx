import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
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
import PageLayout from "../components/PageLayout";
import ArticleOrInsightsContent from "../components/ArticleOrInsightsContent";
import ArticleOrInsightsHero from "../components/ArticleOrInsightsHero";
import RelatedProducts from "../components/RelatedProducts";
 export const config: TemplateConfig = {
  stream: {
    $id: "services",
    localization: { locales: ["en"] },
    filter: {
      entityTypes: ["fins_service"],
    },
    fields: [
      "name",
      "id",
      "slug",
      "fins_servicesImage",
      "c_childProducts.name",
      "c_childProducts.slug",
      "c_serviceDescription",
      "c_serviceLongDescription",
    ],
  },
};
export const getPath = ({ document }: TemplateRenderProps) => {
  return document.slug ?? document.id.toString();
};
export const getHeadConfig = ({ document }:TemplateRenderProps): HeadConfig => {
  return {
    title: `${document.name} | Service`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital Wealth Management Services",
        },
      },
    ],
  };
};
const Service: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}:TemplateRenderProps) => {  
  
   
  
  
  let pageTitle = `${document.name} at Capital Wealth`;
  if (document.name === "Mortgage") {
    pageTitle = "Mortages at Capital Wealth";
  } else if (document.name === "Retail Banking") {
    pageTitle = "Personal Banking with Capital";
  }
  const entityType=(document.meta.entityType.id);

  return (
          <PageLayout templateData={{ __meta, document }}>
  
      <ArticleOrInsightsHero
        entityType={entityType}
        pageTitle={document.name}
        datePosted={document.datePosted}
        imageUrl={document.fins_servicesImage?.url}
        description={document.c_serviceDescription}
      />
      <ArticleOrInsightsContent
        content={document.c_serviceLongDescription}
      /> <div className="bg-gray-50">
       <RelatedProducts
        products={document.c_childProducts}
        name={document.name}
      />
    </div>
    </PageLayout>
    
  );
};

export default Service;
