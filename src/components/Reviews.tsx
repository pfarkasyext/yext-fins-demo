import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { Address } from "@yext/types";
import { BiCross } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import SearchLoading from "./SearchLoading";
import useDebouncedFunction from "../common/useDebouncedFunction";

export interface ReviewsRoot {
  meta: Meta;
  response: Response;
}

export interface Meta {
  uuid: string;
  errors: any[];
}

export interface Response {
  reviews: Review[];
  nextPageToken: string;
  averageRating: number;
  count: number;
}

export interface Review {
  id: number;
  rating: number;
  content: string;
  authorName: string;
  authorEmail: string;
  url: string;
  publisherDate: number;
  locationId: string;
  accountId: string;
  publisherId: string;
  title: string;
  lastYextUpdateTime: number;
  comments: any[];
  status: string;
  externalId: string;
  flagStatus: string;
  reviewLanguage: string;
  apiIdentifier: string;
  reviewLabels?: ReviewLabel[];
}

interface RatingCount {
  rating: number;
  count: number;
}

export interface ReviewLabel {
  id: number;
  name: string;
}

interface ReviewsProps {
  entityId: string;
  name: string;
  address: Address;
}

const CollectFeedback = lazy(() => import("./CollectFeedback"));

export default function Reviews({ entityId, name, address }: ReviewsProps) {
  const [reviews, setReviews] = useState<ReviewsRoot>();
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!entityId) return;

    fetch(`/api/fetchReviews?entityId=${entityId}`)
      .then((res) => res.json())
      .then((reviewsData) => {
        setReviews(reviewsData);
      })
      .catch((err) => console.log(JSON.stringify(err)));
  }, [entityId]);

  // Memoized rating counts calculation
  const ratingCountsMemo = useMemo(() => {
    if (!reviews) return [];

    const ratingMap: { [key: number]: number } = {};
    reviews.response.reviews.forEach((review) => {
      ratingMap[review.rating] = (ratingMap[review.rating] || 0) + 1;
    });

    return [
      { rating: 5, count: ratingMap[5] || 0 },
      { rating: 4, count: ratingMap[4] || 0 },
      { rating: 3, count: ratingMap[3] || 0 },
      { rating: 2, count: ratingMap[2] || 0 },
      { rating: 1, count: ratingMap[1] || 0 },
    ];
  }, [reviews]);

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews =
    reviews?.response.reviews.slice(indexOfFirstReview, indexOfLastReview) ||
    [];

  const totalPages = reviews
    ? Math.ceil(reviews.response.reviews.length / reviewsPerPage)
    : 1;

  const handleNextPage = useCallback(
    useDebouncedFunction(() => {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    }, 300),
    [currentPage, totalPages]
  );

  const handlePrevPage = useCallback(
    useDebouncedFunction(() => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    }, 300),
    [currentPage]
  );

  return (
    <>
      {reviews ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customer Reviews
              </h2>

              <div className="mt-3 flex items-center">
                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={twMerge(
                          reviews.response.averageRating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">
                    {reviews.response.averageRating} out of 5 stars
                  </p>
                </div>
                <p className="ml-2 text-sm text-gray-900">
                  Based on {reviews?.response.count} reviews
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {ratingCountsMemo.map((count) => (
                    <div
                      key={count.rating}
                      className="flex items-center text-sm"
                    >
                      <dt className="flex flex-1 items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {count.rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div
                          aria-hidden="true"
                          className="ml-1 flex flex-1 items-center"
                        >
                          <StarIcon
                            aria-hidden="true"
                            className={twMerge(
                              count.count > 0
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                          />
                          <div className="relative ml-3 flex-1">
                            <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                            {count.count > 0 ? (
                              <div
                                style={{
                                  width: `calc(${count.count} / ${reviews.response.count} * 100%)`,
                                }}
                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                              />
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                        {Math.round(
                          (count.count / reviews.response.count) * 100
                        )}
                        %
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Share your thoughts
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you’ve used this product, share your thoughts with other
                  customers
                </p>

                <div
                  onClick={() => setOpen(true)}
                  className=" hover:cursor-pointer mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                >
                  Write a review
                </div>
              </div>
            </div>

            <div className=" lg:col-span-7 lg:col-start-6 lg:mt-0 py-8">
              <h3 className="sr-only">Recent reviews</h3>

              <div className="flow-root">
                <div className="-my-12 divide-y divide-gray-200">
                  {currentReviews.map((review) => (
                    <div key={review.id} className="py-4">
                      <div className="flex flex-col gap-2">
                        <div className="ml-4 flex flex-col gap-2">
                          <div className="flex items-center text-sm gap-2">
                            <h3 className="text-sm font-bold text-gray-900">
                              {review.authorName}
                            </h3>
                            <time
                              dateTime={new Date(
                                review.publisherDate
                              ).toLocaleString()}
                              className="border-l border-gray-200 pl-4 text-gray-500"
                            >
                              {new Date(review.publisherDate).toDateString()}
                            </time>
                          </div>
                          <div className="mt-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={twMerge(
                                  review.rating > rating
                                    ? "text-yellow-400"
                                    : "text-gray-300",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {review.rating} out of 5 stars
                          </p>
                        </div>
                        <div className="ml-4 mt-4">
                          <h3 className="text-sm font-medium text-gray-900">
                            {review.title}
                          </h3>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: review.content,
                            }}
                            className="mt-3 space-y-6 text-sm text-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-24 flex justify-between items-center">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={twMerge(
                      currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-100",
                      "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md"
                    )}
                  >
                    Previous
                  </button>

                  <span className="text-sm text-gray-500">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={twMerge(
                      currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-100",
                      "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md"
                    )}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SearchLoading />
      )}

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:p-6 text-center sm:items-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 sm:pt-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm"
            >
              <div>
                <div
                  className="ml-auto flex h-12 w-12 items-center justify-center rounded-full hover:cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <BiCross aria-hidden="true" className="h-4 w-4" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    className="text-lg sm:text-xl leading-6 font-medium text-gray-900"
                  >
                    We Value Your Feedback
                  </DialogTitle>
                  <div className="mt-2 text-gray-500 text-start">
                    <Suspense fallback={<div>Loading feedback...</div>}>
                      <CollectFeedback
                        onSubmitSuccess={handleCloseModal}
                        entityId={entityId}
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
