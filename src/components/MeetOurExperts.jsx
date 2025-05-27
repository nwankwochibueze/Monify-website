import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Fintech6 from "../assets/Fintech6.webp";
import Fintech8 from "../assets/Fintech8.webp";
import Fintech7 from "../assets/Fintech7.webp";

const MeetOurExperts = () => {
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
    <main className="bg-green-200 pt-10 pb-10">
      <div className="p-6 md:p-12 lg:p-16">
        {/* Animated Heading with Text Reveal */}
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
          variants={textRevealVariant}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 tracking-tight text-center">
            Meet our experts
          </h2>
        </motion.div>

        {/* Grid Layout for Experts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expert 1 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full max-w-xs h-72 md:h-80 lg:h-96 relative mb-6 overflow-hidden">
              <img
                src={Fintech6}
                alt="monify image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full max-w-xs text-center md:text-left">
              {/* Animated Subheading */}
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={textRevealVariant}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-4">
                  Joan Davis
                </h3>
              </motion.div>

              {/* Animated Paragraph */}
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={paragraphVariant}
              >
                <p className="text-sm md:text-base text-slate-900">
                  Joan specializes in financial consulting with over 15 years of
                  experience helping clients optimize their investment
                  strategies and achieve their financial goals.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Expert 2 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full max-w-xs h-72 md:h-80 lg:h-96 relative mb-6 overflow-hidden">
              <img
                src={Fintech8}
                alt="Business consultant"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full max-w-xs text-center md:text-left">
              {/* Animated Subheading */}
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={textRevealVariant}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-4">
                  Mike Johnson
                </h3>
              </motion.div>

              {/* Animated Paragraph */}
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={paragraphVariant}
              >
                <p className="text-sm md:text-base text-slate-900">
                  Mike is our lead business strategist with expertise in
                  corporate development and market analysis, guiding companies
                  through complex business transformations.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Expert 3 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full max-w-xs h-72 md:h-80 lg:h-96 relative mb-6 overflow-hidden">
              <img
                src={Fintech7}
                alt="Legal advisor"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full max-w-xs text-center md:text-left">
              {/* Animated Subheading */}
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={textRevealVariant}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-4">
                  Emily Wilson
                </h3>
              </motion.div>

              {/* Animated Paragraph */}
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={paragraphVariant}
              >
                <p className="text-sm md:text-base text-slate-900">
                  Emily provides expert legal consultation with a focus on
                  business law and compliance, helping clients navigate
                  regulatory requirements with confidence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MeetOurExperts;
