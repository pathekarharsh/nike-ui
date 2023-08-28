import React from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const customerReview = () => {
  return (
    <section className="max-container">
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Voices of Our Valued <span className="text-coral-red">Customers</span>
      </h3>
      <p className='max-w-lg info-text m-auto mt-4 text-center'>Hear genuine stories from our satisfied customers about 
        their exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-10'>{reviews.map((review) => (
        <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}</div>
    </section>
  );
};

export default customerReview;
