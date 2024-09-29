import Markdown from "markdown-to-jsx";

export interface ArticleOrInsightsContentProps {
  content: any;
}

const ArticleOrInsightsContent = ({
  content,
}: ArticleOrInsightsContentProps) => {
  return (
    <div className="max-w-4xl mx-auto pt-24 prose">
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default ArticleOrInsightsContent;
