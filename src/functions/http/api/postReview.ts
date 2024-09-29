import { PagesHttpRequest, PagesHttpResponse } from "@yext/pages/*";

const postReview = async (
  request: PagesHttpRequest
): Promise<PagesHttpResponse> => {
  const { queryParams } = request;
  const { entityId, reviewData } = queryParams;

  const api_key = YEXT_PUBLIC_REVIEWS_API_KEY as string;

  const response = await fetch(
    `https://cdn.yextapis.com/v2/accounts/me/reviewSubmission?api_key=${api_key}&v=20240404&entityIds=${entityId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: reviewData,
    }
  );

  const resp = await response.json();
  console.log(JSON.stringify(resp));

  return {
    body: JSON.stringify(resp),
    headers: {},
    statusCode: 200,
  };
};

export default postReview;
