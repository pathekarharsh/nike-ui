import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex max-lg:flex-col gap-10 w-full items-center justify-between"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="lg:max-w-lg mt-4 info-text">
          Experience the pinnacle of footwear excellence with our selection of
          super quality shoes. Elevate your style, comfort, and confidence with
          each step.
        </p>
        <p className="lg:max-w-lg mt-6 info-text">
          Discover the perfect fusion of craftsmanship and innovation for the
          ultimate footwear experience.
        </p>
        <div className="mt-10">
          <Button label="View details" />
          <img src="" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoes-8"
          width={570}
          height={520}
          className="hover:scale-110 transition-transform duration-300 object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
