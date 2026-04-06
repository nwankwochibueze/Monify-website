import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Future = () => {
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
    <section className="pb-20 pt-20 px-4 md:px-20">
      {/* Animated Heading with Text Reveal */}
      <motion.div
        className="overflow-hidden" // Clip the text during animation
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
        variants={textRevealVariant}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-10 tracking-tight text-center md:text-left transform scale-y-100">
          Embracing The Future, Today
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Animated First Paragraph */}
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textRevealVariant}
        >
          <p className="text-slate-800 text-base md:text-lg">
            At our company, we believe in transparency, innovation, and
            customer-centricity. Our approach is built on trust, integrity, and
            a commitment to excellence in everything we do.
          </p>
        </motion.div>

        {/* Animated Second Paragraph */}
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={paragraphVariant} // Use paragraph variant with delay
        >
          <p className="text-slate-800 text-base md:text-lg">
            We prioritize building strong, long-lasting relationships with our
            clients, understanding their unique needs, and providing tailored
            solutions that help them achieve their goals.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center md:justify-start">
        <button className="bg-slate-900 text-green-200 px-6 py-3 rounded-full border-2 border-transparent hover:border-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Future;
