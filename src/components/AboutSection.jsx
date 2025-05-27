import React from "react";

const AboutSection = () => {
  return (
    <main className="relative bg-green-200 text-center lg:pt-20 xl:pt-32">
      <div className="bg-green-200 flex flex-col lg:flex-row justify-between pt-10 pb-32 md:pb-56 items-center lg:items-start">
        {/* Left side */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight transform scale-y-100 text-slate-900 mb-8 lg:mb-0 text-center lg:text-left px-4 md:px-20">
            About Us
          </h2>
        </div>

        {/* Right side */}
        <div className="flex flex-col lg:block items-center lg:items-start">
          <p className="text-base md:text-lg lg:text-xl text-slate-800 max-w-xl text-center lg:text-left mb-6 lg:px-6">
            At Monify, we are dedicated to providing a modernized approach to
            financial services. Our focus is on ensuring that banking is
            accessible, convenient, and tailored to meet the diverse needs of
            our clients. With a digital-first mindset, we aim to simplify
            financial management for everyone.
          </p>

          <button className="bg-slate-900 text-green-200 px-6 py-3 rounded-full border-2 border-transparent hover:border-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 self-center lg:self-auto">
            Explore More
          </button>
        </div>
      </div>

      {/* Responsive SVG Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-52"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,320 C480,200 960,200 1440,320 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </main>
  );
};

export default AboutSection;
