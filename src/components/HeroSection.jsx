import React from "react";
import Fintech1 from "../assets/Fintech1.webp";
import Fintech2 from "../assets/Fintech2.webp";
import Fintech3 from "../assets/Fintech3.webp";

const HeroSection = () => {
  return (
    <div className="bg-green-200 flex flex-col items-center justify-center gap-8 md:gap-16 min-h-screen pt-30 md:pt-40">
      {/* Responsive Heading */}
      <div className="text-center px-4 md:px-15 lg:px-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight transform scale-y-100">
          Smart Finance, Simplified
        </h1>
      </div>

      {/* Responsive Paragraph */}
      <div className="text-center px-6 md:px-20">
        <p className="text-base md:text-lg lg:text-xl text-slate-900 max-w-xl mx-auto">
          Welcome to Monify, your gateway to a smarter way of banking. Enjoy
          seamless automated savings, precise investment tracking, and
          competitive interest rates.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col items-center justify-center gap-4">
        <button className="bg-slate-900 text-green-200 px-6 py-3 rounded-full border-2 border-transparent hover:border-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300">
          Explore More
        </button>
      </div>

      {/* Responsive Images */}
      <div className="flex items-center justify-center w-full">
        {/* Show only one image on smaller screens */}
        <img
          src={Fintech1}
          alt="monify photo1"
          className="w-85 h-105 object-cover md:hidden"
        />
        {/* Show all three images on medium and larger screens */}
        <div className="hidden md:flex flex-row items-end justify-center gap-8 w-full">
          <img
            src={Fintech1}
            alt="monify photo1"
            className="w-85 h-105 object-cover"
          />
          <img
            src={Fintech2}
            alt="monify photo2"
            className="w-85 h-120 object-cover"
          />
          <img
            src={Fintech3}
            alt="monify photo3"
            className="w-85 h-105 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
