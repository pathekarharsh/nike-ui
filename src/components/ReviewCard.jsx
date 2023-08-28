import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
          <img src={imgURL} alt={customerName} className='rounded-full object-cover' width={120} height={120} />
      <p className="mt-6 max-w-sm text-center info-text font-montserrat text-slate-gray">
        {feedback}
      </p>
      <div className="flex gap-4">
              <img src={star} width={24} height={24} className='object-contain' />
        <p>({rating})</p>
      </div>
      <h3 className="mt-3 text-2xl leading-normal font-semibold font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
