import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const OurServices = () => {
  // Animation variants for text reveal
  const textRevealVariant = {
    hidden: { opacity: 0, y: "100%" }, // Start fully hidden and below the viewport
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth reveal
    },
  };

  // Animation variants for paragraph fade-in
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3 }, // Fade in with a slight delay
    },
  };

  return (
    <div className="bg-white pt-20 md:pt-40 pb-20 md:pb-40 ">
      {/* Animated Heading */}
      <motion.div
        className="overflow-hidden text-center md:text-left px-4 md:px-20" // Adjust padding for smaller screens
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
        variants={textRevealVariant}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 md:mb-16 tracking-tight transform scale-y-100 ">
          Our Services
        </h2>
      </motion.div>

      {/* Service Cards */}
      <div className="px-4 md:px-20 lg:pl-50 lg:pr-30 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
        {[
          {
            title: "Savings",
            description:
              "Our automated and secure savings solutions make it easy for you to grow your funds effortlessly while ensuring safety and convenience.",
          },
          {
            title: "Investments",
            description:
              "Our investment services provide precise tracking, allowing you to monitor your portfolio's performance with ease and stay informed every step of the way.",
          },
          {
            title: "Interest Rates",
            description:
              "We provide competitive interest rates that help your money work harder, offering you the best value for your savings and investments.",
          },
          {
            title: "Financial Advice",
            description:
              "Our expert consultation services provide personalized financial advice to help you make informed decisions and achieve your financial goals with confidence.",
          },
        ].map((service, index) => (
          <div key={index} className="space-y-4">
            {/* Border */}
            <div className="border-t border-slate-300 mb-6"></div>

            {/* Animated Subheading */}
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
              variants={textRevealVariant}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
                {service.title}
              </h3>
            </motion.div>

            {/* Animated Paragraph */}
            <motion.p
              className="text-slate-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariant}
            >
              {service.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
