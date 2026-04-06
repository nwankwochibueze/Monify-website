// src/components/InnovativeSolutions.jsx
import React from "react";
import { motion } from "framer-motion";
import Fintech5 from "../assets/Fintech5.webp";

const InnovativeSolutions = () => {
  const textRevealVariant = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: "easeOut" } },
  };
  const paragraphVariant = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <main className="min-h-screen bg-green-200 pt-20">
      <div className="p-8 md:p-16 lg:p-20 pb-0">
        <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={textRevealVariant}>
          {/* ADDED font-heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-10 md:mb-16 tracking-tight text-center md:text-left font-heading">
            Innovative Financial Solutions
          </h1>
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-16">
        <div className="p-6 md:p-16 lg:p-20 flex-1">
          <div className="w-full max-w-[90%] md:max-w-xl mx-auto md:mx-0">
            <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={textRevealVariant}>
              {/* ADDED font-heading */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-center md:text-left font-heading">
                Our Approach
              </h2>
            </motion.div>

            <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={paragraphVariant}>
              {/* ADDED font-sans */}
              <p className="text-slate-900 text-base md:text-lg lg:text-xl text-center md:text-left font-sans">
                At Monify, we are reshaping the banking experience with
                cutting-edge digital solutions tailored for modern lifestyles.
                Our focus on automation, savings optimization, and competitive
                rates ensures that banking is convenient and inclusive for all
                individuals.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="h-full bg-[#c3e6ff] flex-1 relative min-h-[150px] md:min-h-[200px] lg:h-[700px] mb-10 md:mb-0 overflow-hidden">
          <img src={Fintech5} alt="monify image" className="w-full object-cover object-center h-[300px] md:h-[450px] lg:h-[700px]" />
        </div>
      </div>
    </main>
  );
};

export default InnovativeSolutions;