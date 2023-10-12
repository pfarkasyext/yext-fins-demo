import { Markdown } from "@yext/react-components";

export default function ArticleContent({ content }) {
  return (
    <div className="max-w-4xl mx-auto pt-24 prose">
      <Markdown content={content}  />
    </div>
  );
}
