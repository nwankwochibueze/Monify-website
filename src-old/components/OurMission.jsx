// src/components/OurMission.jsx
import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  const textRevealVariant = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: "easeOut" } },
  };
  const paragraphVariant = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <main className="bg-green-200 pt:10 lg:pt-20">
      <div className="p-8 md:p-16 lg:p-20 pb-0 md:pb-0 lg:pb-0 text-center md:text-left">
        <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={textRevealVariant}>
          {/* ADDED font-heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 tracking-tight text-center md:text-left font-heading">
            Mission
          </h2>
        </motion.div>

        <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={paragraphVariant}>
          {/* ADDED font-sans */}
          <p className="text-slate-900 text-lg md:text-xl max-w-4xl mx-auto md:mx-0 text-center md:text-left font-sans">
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