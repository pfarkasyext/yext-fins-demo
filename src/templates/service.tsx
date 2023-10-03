import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
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
export const config: TemplateConfig = {
  stream: {
    $id: "services",
    localization: { locales: ["en"], primary: false },
    filter: {
      entityTypes: ["fins_service"],
    },
    fields: ["name", "id", "slug", "fins_servicesImage", "c_childProducts.name", "c_childProducts.slug", "c_serviceDescription"],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function Service({ document, __meta }: TemplateProps) {
  let pageTitle = `${document.name} at Capital Wealth`;
  if (document.name === "Mortgage") {
    pageTitle = "Mortages at Capital Wealth"
  } else if (document.name === "Retail Banking") {
    pageTitle = "Personal Banking with Capital";
  }

  return (
    <PageLayout _site={document._site}>
      <ServicesHero
        pageTitle={pageTitle}
        imageUrl={document.fins_servicesImage.url}
        description={document.c_serviceDescription}
      />
      <RelatedProducts products={document.c_childProducts} name={document.name}/>
    </PageLayout>
  );
}
