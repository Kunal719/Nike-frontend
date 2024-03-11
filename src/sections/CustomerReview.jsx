import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <div className="flex flex-col justify-center items-center max-container">
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-5 font-palanquin text-4xl font-bold text-center">
          <span>What Our </span>
          <span className="text-coral-red">Customers </span> Say?
        </h2>
        <p className="mt-4 info-text items-center max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
      </div>
      <div className="flex justify-between gap-40 max-lg:flex-col max-lg:gap-5">
        {reviews.map((review) => {
          return <ReviewCard key={review.customerName} {...review} />
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
