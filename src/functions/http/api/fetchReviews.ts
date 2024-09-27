import { PagesHttpRequest, PagesHttpResponse } from "@yext/pages/*";

const fetchReviews = async (
  request: PagesHttpRequest
): Promise<PagesHttpResponse> => {
  const { queryParams } = request;
  const { entityId } = queryParams;

  const api_key = YEXT_PUBLIC_REVIEWS_API_KEY as string;

  const getEntitiesResponse = await fetch(
    `https://api.yextapis.com/v2/accounts/me/reviews?api_key=${api_key}&v=20240404&entityIds=${entityId}`
  );

  const resp = await getEntitiesResponse.json();

  return {
    body: JSON.stringify(resp),
    headers: {},
    statusCode: 200,
  };
};

export default fetchReviews;
