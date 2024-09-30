import {
  HeadConfig,
  Template,
  TemplateConfig,
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
    $id: "insightsarticles",
    localization: { locales: ["en"] },
    filter: {
      entityTypes: ["ce_insightsArticle"],
    },
    fields: [
      "name",
      "id",
      "slug",
      "datePosted",
      "c_insightsArticleSummary",
      "primaryPhoto",
      "c_insightsArticleBody",
      "meta"
    ],
  },
};
export const getPath = ({ document }: TemplateRenderProps) => {
  return document.slug ?? document.id.toString();
};
export const getHeadConfig = ({
  document,
}: TemplateRenderProps): HeadConfig => {
  return {
    title: `${document.name} | Location`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital Wealth Management Location",
        },
      },
    ],
  };
};
const InsightsArticle: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}:TemplateRenderProps) => {
  const entityType=(document.meta.entityType.id);
   
  return (
 <PageLayout templateData={{ __meta, document }}> 
      <ArticleOrInsightsHero
        entityType={entityType}
        pageTitle={document.name}
        datePosted={document.datePosted}
        imageUrl={document.primaryPhoto || document._site.c_defaultHeaderImage}
        description={document.c_insightsArticleSummary}
      />
      <ArticleOrInsightsContent
        content={document.c_insightsArticleBody.markdown}
      />
    </PageLayout>
  );
};

export default InsightsArticle;
