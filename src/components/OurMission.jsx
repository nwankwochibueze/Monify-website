import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const OurMission = () => {
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
    <main className="bg-green-200 pt:10 lg:pt-20">
      <div className="p-8 md:p-16 lg:p-20 pb-0 md:pb-0 lg:pb-0 text-center md:text-left">
        {/* Animated Heading with Text Reveal */}
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
          variants={textRevealVariant}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 tracking-tight transform scale-y-100 text-center md:text-left">
            Mission
          </h2>
        </motion.div>

        {/* Animated Paragraph with Text Reveal */}
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={paragraphVariant} // Use paragraph variant with delay
        >
          <p className="text-slate-900 text-lg md:text-xl max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            Our mission at Monify is to lead the financial industry into a new
            era of accessibility and innovation. By providing automated savings
            options, precise investment tracking, and attractive interest rates,
            we empower our clients to achieve their financial goals with ease.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default OurMission;
