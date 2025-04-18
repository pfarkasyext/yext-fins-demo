import {
  HeadConfig,
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
import ArticleOrInsightsHero from "../components/ArticleOrInsightsHero";
import ArticleOrInsightsContent from "../components/ArticleOrInsightsContent";
export const config: TemplateConfig = {
  stream: {
    $id: "products",
    localization: { locales: ["en"] },
    filter: {
      entityTypes: ["fins_financialProduct"],
      savedFilterIds: ["1343713918"],
    },
    fields: [
      "name",
      "id",
      "slug",
      "fins_servicesImage",
      "c_childProducts.name",
      "c_serviceDescription",
      "c_serviceLongDescription",
      "c_parentService.name",
      "c_parentService.slug",
    ],
  },
};
export const getPath  = ({ document }:TemplateRenderProps) => {
  return document.slug ?? "financial-product/" + document.id.toString();
};
export const getHeadConfig  = ({ document }:TemplateRenderProps): HeadConfig => {
  return {
    title: `${document.name} | Product`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital Wealth Management Products",
        },
      },
    ],
  };
};
const Product = ({ document, __meta }: TemplateProps) => {
  return (
    <PageLayout templateData={{ __meta, document }}>
      <div className="mx-auto max-w-7xl flex flex-row font-bold p-6 lg:px-8">
        <a
          href={"/index.html"}
          className="text-brand-primary hover:text-brand-hover"
        >
          Home
        </a>
        <span className="mx-2 text-gray-400">&gt;</span>
        <a
          href={"/" + document.c_parentService[0].slug}
          className="text-brand-primary hover:text-brand-hover"
        >
          {document.c_parentService[0].name}
        </a>
        <span className="mx-2 text-gray-400">&gt;</span>
        <a href={"/#"} className="text-brand-primary hover:text-brand-hover">
          {document.name}
        </a>
      </div>

      <ArticleOrInsightsHero
        pageTitle={document.name}
        imageUrl={
          document.fins_servicesImage 
          || document._site.c_defaultHeaderImage
        }
        description={document.c_serviceDescription}
        datePosted={""}
        entityType={""}
      />
      <div className="bg-gray-50 pb-36">
        <ArticleOrInsightsContent content={document.c_serviceLongDescription} />
      </div>
    </PageLayout>
  );
};

export default Product;
