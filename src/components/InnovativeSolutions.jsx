import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Fintech5 from "../assets/Fintech5.webp";

const InnovativeSolutions = () => {
  // Animation variants for text reveal
  const textRevealVariant = {
    hidden: { opacity: 0, y: "100%" }, // Start fully hidden and below the viewport
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth reveal
    },
  };

  // Animation variants for paragraph reveal with delay
  const paragraphVariant = {
    hidden: { opacity: 0, y: "100%" }, // Start fully hidden and below the viewport
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }, // Add a delay
    },
  };

  return (
    <main className="min-h-screen bg-green-200 pt-20">
      {/* Main heading at the top */}
      <div className="p-8 md:p-16 lg:p-20 pb-0">
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
          variants={textRevealVariant}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-10 md:mb-16 tracking-tight transform scale-y-100 text-center md:text-left">
            Innovative Financial Solutions
          </h1>
        </motion.div>
      </div>

      {/* Content section */}
      <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-16">
        {/* Text Section */}
        <div className="p-6 md:p-16 lg:p-20 flex-1">
          <div className="w-full max-w-[90%] md:max-w-xl mx-auto md:mx-0">
            <motion.div
              className="overflow-hidden" // Clip the text during animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textRevealVariant}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight transform scale-y-100 text-center md:text-left">
                Our Approach
              </h2>
            </motion.div>

            <motion.div
              className="overflow-hidden" // Clip the text during animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={paragraphVariant} // Use paragraph variant with delay
            >
              <p className="text-slate-900 text-base md:text-lg lg:text-xl text-center md:text-left">
                At Monify, we are reshaping the banking experience with
                cutting-edge digital solutions tailored for modern lifestyles.
                Our focus on automation, savings optimization, and competitive
                rates ensures that banking is convenient and inclusive for all
                individuals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image */}
        <div className=" h-full bg-[#c3e6ff] flex-1 relative min-h-[150px] md:min-h-[200px] lg:h-[700px] mb-10 md:mb-0 overflow-hidden">
          <img
            src={Fintech5}
            alt="monify image"
            className="w-full object-cover object-center h-[300px] md:h-[450px] lg:h-[700px]"
          />
        </div>
      </div>
    </main>
  );
};

export default InnovativeSolutions;
