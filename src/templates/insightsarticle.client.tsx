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
import ArticleHero from "../components/ArticleHero";
import PageLayout from "../components/common/PageLayout";
import "../index.css";

const InsightsArticle = ({ document }: TemplateProps) => {
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
};

export default InsightsArticle;
