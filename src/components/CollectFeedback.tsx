import { useState } from "react";

interface FeedbackData {
  name: string;
  comment: string;
  rating: number;
  email: string;
}

interface CollectFeedbackProps {
  onSubmitSuccess: () => void;
  entityId: string;
}

export default function CollectFeedback({
  onSubmitSuccess,
  entityId,
}: CollectFeedbackProps) {
  const [feedback, setFeedback] = useState<FeedbackData>({
    name: "",
    comment: "",
    rating: 0,
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (rating: number) => {
    setFeedback({ ...feedback, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    const reviewData = {
      entity: {
        id: entityId,
      },
      authorName: feedback.name,
      authorEmail: feedback.email,
      rating: feedback.rating,
      content: feedback.comment,
      status: "LIVE",
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await fetch(
        `/api/postReview?entityId=${entityId}&reviewData=${JSON.stringify(
          reviewData
        )}`
      )
        .then((res) => res.json())
        .then(() => {
          setSuccess(true);
          setFeedback({ name: "", comment: "", rating: 0, email: "" });
          onSubmitSuccess(); // Trigger the callback to close the modal on success
        })
        .catch((err) => {
          throw new Error("Failed to submit feedback");
        });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md">
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && (
        <p className="text-green-600 mb-4">Feedback submitted successfully!</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-900"
          >
            Rating
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-2xl ${
                  feedback.rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            name="comment"
            value={feedback.comment}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
}
