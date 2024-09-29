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

import HeroSection from "../components/HeroSection";
import PageLayout from "../components/PageLayout";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages/*";
import Services from "../components/Services";
import Articles from "../components/Articles";
import Events from "../components/Events";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"] },
    fields: [
      "id",
      "name",
      "primaryPhoto",
      "slug",
      "c_heroBannerTitle",
      "c_heroBannerDescription",
    ],
    filter: { entityIds: ["home"] },
  },
};

export const getPath = () => {
  return `index.html`;
};

export const getHeadConfig = () => {
  return {
    title: "Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital Wealth Management homepage",
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */

const Home : Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}:TemplateRenderProps) => {
  console.log(JSON.stringify(document.c_site));

  return (
    <PageLayout _site={document._site} templateData={document}>
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
