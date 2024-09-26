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
import ServicesHero from "../components/ServicesHero";
import PageLayout from "../components/common/PageLayout";
import "../index.css";

const Product = ({ document }: TemplateProps) => {
  let bannerImgUrl =
    "https://a.mktgcdn.com/p/X6uh0LQn4S9FDKtEP9CkXIC2QrSTEvTLwoKsT7asb8o/1872x836.jpg";
  if (document.fins_servicesImage.url)
    bannerImgUrl = document.fins_servicesImage.url;

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

      <ServicesHero
        pageTitle={document.name}
        imageUrl={bannerImgUrl}
        description={document.c_serviceDescription}
      />
      <div className="bg-gray-50 pb-36">
        <ArticleContent content={document.c_serviceLongDescription} />
      </div>
    </PageLayout>
  );
};

export default Product;
