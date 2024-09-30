import { Image } from "../types/financial_professionals";
import { Image as _Image } from "@yext/pages-components";
export interface ArticleOrInsightsHeroProps {
  pageTitle: string;
  datePosted: string;
  imageUrl?: Image | string;
  description: string;
  entityType: string;
}

const ArticleOrInsightsHero = ({
  pageTitle,
  datePosted,
  imageUrl,
  description,
  entityType,
}: ArticleOrInsightsHeroProps) => {
  return (
    <div className="bg-white">
      {entityType === "ce_insightsArticle" ? (
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-24">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-4xl">
                      {pageTitle}
                    </h1>
                    <h3 className="text-l font-bold tracking-tight text-gray-900 mt-2">
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(datePosted))}
                    </h3>
                    <p className="mt-4 text-l text-gray-600">{description}</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {imageUrl && (
              <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                {typeof imageUrl === "string" ? (
                  <img
                    src="imageUrl"
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                    alt=""
                  />
                ) : (
                  <_Image
                    image={imageUrl}
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-24 sm:py-24 lg:px-8 lg:py-24 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Get in contact with an advisor that understands your
                      goals.{" "}
                      <a
                        href="/guided-advisor-finder"
                        className="whitespace-nowrap font-semibold text-blue-950"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Find an Advisor <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl">
                    {pageTitle}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {description}
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/guided-advisor-finder"
                      className="rounded-md bg-blue-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Make an Appointment
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            {typeof imageUrl === "string" ? (
              <img
                src="imageUrl"
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                alt=""
              />
            ) : (
              <_Image
                image={imageUrl!}
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleOrInsightsHero;
