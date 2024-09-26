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
import Articles from "../components/Articles";
import Events from "../components/Events";
import Services from "../components/Services";
import PageLayout from "../components/common/PageLayout";
import HeroSection from "../components/home/HeroSection";
import "../index.css";

const Home: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout containerClassName="mx-auto w-full" _site={document._site}>
      <HeroSection
        img={document.primaryPhoto}
        heroTitle={document.c_heroBannerTitle}
        heroDescription={document.c_heroBannerDescription}
      />
      <section className="px-4 w-full md:px-32 bg-gray-50 py-4 md:h-full ">
        <Services services={document._site.c_featuredServices} />
      </section>
      <section className="px-4 md:px-32">
        <>
          <div className="flex flex-col items-center">
            <div className="max-w-5xl flex flex-col justify-center ">
              <Articles articles={document._site.c_featuredArticles} />
            </div>
          </div>
        </>
      </section>
      <section>
        <Events events={document._site.c_featuredEvents} />
      </section>
    </PageLayout>
  );
};

export default Home;
