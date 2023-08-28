import React from "react";
import Button from "../components/Button"
import { arrowRight } from "../assets/icons/index";
import { offer } from "../assets/images";
import TransaparentBtn from "../components/TransaparentBtn";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className='flex-1'>
        <img src={offer} alt='offer-poster' width={770} height={680} className='object-contain w-full'/>
      </div>
      <div>
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg capitalize">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="lg:max-w-xl mt-4 info-text">
          Unlock extraordinary savings with our special offer. Elevate your
          shopping experience and indulge in premium products at unbeatable
          prices. Don't miss out on this limited-time opportunity to enjoy
          top-notch quality without compromising your budget.
        </p>
        <p className="lg:max-w-xl mt-6 info-text">
          Whether it's fashion, electronics, or home essentials, our special
          offer ensures you get more for less. Hurry and take advantage of this
          chance to elevate your lifestyle without breaking the bank.
        </p>
        <div className='flex-1 flex flex-wrap gap-4 mt-8'>
          <Button label='Shop Now' iconURL={arrowRight} />
          <TransaparentBtn label='Learn More'/>
        </div>
        
      </div>
    </section>
  );
};

export default SpecialOffer;
