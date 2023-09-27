import {
  ComplexImage as ComplexImageType,
  Image as ImageType,
} from "../types/autogen";
import { Image } from "@yext/pages/components";
import Cta from "./Cta";
import { Button } from "./common/Button";
import { formatDate } from "../lib/utils";
import { ChevronRight } from "lucide-react";
import { BsChevronRight } from "react-icons/bs";

interface ArticleProps {
  name: string;
  c_insightsArticleSummary: string;
  primaryPhoto?: ComplexImageType | ImageType;
  datePosted?: string;
}

export default function Articles({ articles }: { articles: ArticleProps[] }) {
  if (articles === undefined || articles.length === 0) {
    return null;
  }

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="py-8 flex flex-col items-between gap-8">
      <h2 className="font-bold text-4xl text-center text-brand-blue">
        Insights
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8">
        <article className="lg:col-span-3 flex flex-col gap-4">
          {featuredArticle.primaryPhoto && (
            <Image
              image={featuredArticle.primaryPhoto}
              className="rounded-lg h-80"
            />
          )}
          <span className="text-sm text-gray-600">
            {formatDate(featuredArticle.datePosted)}
          </span>
          <h3 id="featured-post" className="text-2xl font-bold text-brand-blue">
            {featuredArticle.name}
          </h3>
          <p className="text-base  text-gray-600 line-clamp-3">
            {featuredArticle.c_insightsArticleSummary}
          </p>
          <a className="text-brand-blue text flex gap-1 items-center hover:cursor-pointer">
            <span className="underline">Read more</span>
            <BsChevronRight />
          </a>
        </article>
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            {otherArticles.map((article, idx) => (
              <>
                <article className="flex flex-col gap-4 group" key={idx}>
                  <div className="text-sm text-gray-600 flex gap-2">
                    <span>Category</span>
                    <span>|</span>
                    <span>{formatDate(article.datePosted)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-blue">
                    {article.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600 line-clamp-2">
                    {article.c_insightsArticleSummary}
                  </p>
                  <a className="text-brand-blue text-sm flex gap-1 items-center hover:cursor-pointer">
                    <span className="underline">Read more</span>
                    <BsChevronRight />
                  </a>
                </article>
                <div className="w-96 h-px border border-stone-300"></div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="outline">See All Articles</Button>
      </div>
    </div>
  );
}
