import {
  ComplexImage as ComplexImageType,
  Image as ImageType,
} from "../types/autogen";
import { Image } from "@yext/pages-components";
import Cta from "./Cta";

import { BsChevronRight } from "react-icons/bs";

interface ArticleProps {
  name: string;
  c_insightsArticleSummary: string;
  primaryPhoto?: ComplexImageType | ImageType;
  datePosted?: string;
  slug?: string;
}

export default function Articles({ articles }: { articles: ArticleProps[] }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  const handleNavigation = (slug?: string) => {
    if (slug) {
      window.location.href = `/${slug}`;
    }
  };

  return (
    <div className="md:py-8 flex flex-col items-between gap-8">
      <h3 className="font-medium text-4xl text-center text-brand-blue">
        Insights
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-x-8 px-6 md:px-0 w-full">
        <article
          className="lg:col-span-3 flex flex-col gap-4"
          onClick={() => handleNavigation(featuredArticle.slug)}
        >
          {featuredArticle.primaryPhoto && (
            <Image
              image={featuredArticle.primaryPhoto}
              className="rounded-lg h-80"
            />
          )}
          <span className="text-sm text-gray-600">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date(featuredArticle.datePosted!))}
          </span>
          <h3
            id="featured-post"
            className="text-2xl font-bold text-brand-blue hover:underline"
          >
            {featuredArticle.name}
          </h3>
          <p className="text-base  text-gray-600 line-clamp-3">
            {featuredArticle.c_insightsArticleSummary}
          </p>
          <button
            className="text-brand-blue text flex gap-1 items-center hover:cursor-pointer"
            onClick={() => handleNavigation(featuredArticle.slug)}
          >
            <span className="underline">Read more</span>
            <BsChevronRight />
          </button>
          <div className="show md:hidden w-full mt-4 md:w-96 mb-6 h-px border border-stone-300"></div>
        </article>
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            {otherArticles.map((article, idx) => (
              <div key={idx} onClick={() => handleNavigation(article.slug)}>
                <article className="flex flex-col gap-4 group">
                  <div className="text-sm text-gray-600 flex gap-2">
                    <span>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(article.datePosted))}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-blue hover:underline">
                    {article.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600 line-clamp-2">
                    {article.c_insightsArticleSummary}
                  </p>
                  <button
                    className="text-brand-blue text-sm flex gap-1 items-center hover:cursor-pointer"
                    onClick={() => handleNavigation(article.slug)}
                  >
                    <span className="underline">Read more</span>
                    <BsChevronRight />
                  </button>
                </article>
                <div className="w-full md:w-96 h-px border mt-4 border-stone-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#" className="w-full mx-6 lg:w-fit">
          See All Articles
        </a>
      </div>
    </div>
  );
}
