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
import ArticleHero from "../components/ArticleHero";
import ArticleContent from "../components/ArticleContent";
export const config: TemplateConfig = {
  stream: {
    $id: "insightsarticles",
    localization: { locales: ["en"], primary: false },
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
      "c_insightsArticleBody"
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function InsightsArticle({ document, __meta }: TemplateProps) {
  return (
    <PageLayout _site={document._site}>
      <ArticleHero
        pageTitle={document.name}
        datePosted={document.datePosted}
        imageUrl={document.primaryPhoto.image?.url}
        description={document.c_insightsArticleSummary}
      />
      <ArticleContent content={document.c_insightsArticleBody.markdown} />
    </PageLayout>
  );
}
