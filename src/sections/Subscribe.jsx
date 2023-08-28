import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex max-container justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-lg">
        Join Us to Get <span className="text-coral-red">Updates</span> &
        Newsletters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Enter your email" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
