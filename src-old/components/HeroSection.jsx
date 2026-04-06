import React from "react";
import { motion } from "framer-motion";
import Fintech1 from "../assets/Fintech1.webp";
import Fintech2 from "../assets/Fintech2.webp";
import Fintech3 from "../assets/Fintech3.webp";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      className="bg-green-200 flex flex-col items-center justify-center gap-8 md:gap-16 min-h-screen pt-20 md:pt-32 lg:pt-40 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center max-w-4xl"
        variants={itemVariants}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
          Smart Finance, Simplified
        </h1>
      </motion.div>

      <motion.p
        className="text-center text-slate-900 text-base md:text-lg lg:text-xl max-w-2xl"
        variants={itemVariants}
      >
        Welcome to Monify, your gateway to a smarter way of banking. Enjoy
        seamless automated savings, precise investment tracking, and
        competitive interest rates.
      </motion.p>

      <motion.button
        className="bg-slate-900 text-green-200 px-8 py-3 rounded-full border-2 border-transparent hover:border-slate-900 hover:bg-green-200 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.button>

      <motion.div
        className="flex items-center justify-center w-full"
        variants={imageVariants}
      >
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 w-full max-w-6xl">
          <motion.img
            src={Fintech1}
            alt="Banking on mobile"
            className="w-full md:w-1/3 h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-lg shadow-lg"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
          <motion.img
            src={Fintech2}
            alt="Investment tracking"
            className="w-full md:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg -mt-8 md:mt-0"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
          <motion.img
            src={Fintech3}
            alt="Savings growth"
            className="w-full md:w-1/3 h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-lg shadow-lg"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;