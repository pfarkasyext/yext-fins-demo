import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
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
import ServicesHero from "../components/ServicesHero";
import RelatedProducts from "../components/RelatedProducts";
import ArticleContent from "../components/ArticleContent";
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
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
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
const Service = ({ document, __meta }: TemplateProps) => {
  let pageTitle = `${document.name} at Capital Wealth`;
  if (document.name === "Mortgage") {
    pageTitle = "Mortages at Capital Wealth";
  } else if (document.name === "Retail Banking") {
    pageTitle = "Personal Banking with Capital";
  }

  return (
    <PageLayout _site={document._site}>
      <div className="mx-auto max-w-7xl flex flex-row font-bold p-6 lg:px-8">
        <a
          href={"/index.html"}
          className="text-brand-primary hover:text-brand-hover"
        >
          Home
        </a>
        <span className="mx-2 text-gray-400">&gt;</span>
        <a href={"/#"} className="text-brand-primary hover:text-brand-hover">
          {document.name}
        </a>
      </div>
      <ServicesHero
        pageTitle={pageTitle}
        imageUrl={document.fins_servicesImage.url}
        description={document.c_serviceDescription}
      />
      <div className="bg-gray-50">
        <ArticleContent content={document.c_serviceLongDescription} />
        <RelatedProducts
          products={document.c_childProducts}
          name={document.name}
        />
      </div>
    </PageLayout>
  );
};

export default Service;
