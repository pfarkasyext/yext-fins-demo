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
import { TemplateProps } from "@yext/pages";
import ArticleContent from "../components/ArticleContent";
import RelatedProducts from "../components/RelatedProducts";
import ServicesHero from "../components/ServicesHero";
import PageLayout from "../components/common/PageLayout";
import "../index.css";

const Service = ({ document }: TemplateProps) => {
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