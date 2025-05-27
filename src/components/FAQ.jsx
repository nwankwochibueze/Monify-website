import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Fintech9 from "../assets/Fintech9.webp";

// FAQ data
const faqItems = [
  {
    question: "How do I start saving with your platform?",
    answer:
      "Getting started is easy! Simply create an account, link your bank account, and set up automatic deposits. You can start with as little as $5 per week and adjust your savings plan anytime.",
  },
  {
    question: "Can I track my investments in real-time?",
    answer:
      "Yes, our platform provides real-time tracking of all your investments. You can view your portfolio performance, individual asset growth, and transaction history through our dashboard or mobile app.",
  },
  {
    question: "Are your interest rates fixed or variable?",
    answer:
      "We offer both fixed and variable interest rate options. Fixed rates provide consistent returns over a set period, while variable rates may fluctuate based on market conditions. You can choose the option that best suits your financial goals.",
  },
  {
    question: "What is the annual ROI?",
    answer:
      "We offer both fixed and variable interest rate options. Fixed rates provide consistent returns over a set period, while variable rates may fluctuate based on market conditions. You can choose the option that best suits your financial goals.",
  },
  {
    question: "What is the minimum deposit for an account?",
    answer:
      "We offer both fixed and variable interest rate options. Fixed rates provide consistent returns over a set period, while variable rates may fluctuate based on market conditions. You can choose the option that best suits your financial goals.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <main className="bg-green-200 pt-20">
      <div className="flex flex-col flex-grow items-center justify-center p-4 md:p-24">
        <div className="w-full mx-auto p-6">
          <div className="text-start mb-8">
            {/* Animated Heading with Text Reveal */}
            <motion.div
              className="overflow-hidden" // Clip the text during animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
              variants={textRevealVariant}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight transform scale-y-100">
                Frequently Asked Questions
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
              <p className="text-slate-900">
                Find answers to common questions and get the information you
                need quickly.
              </p>
            </motion.div>
          </div>

          <div className="space-y-1">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-slate-900">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full py-8 text-left font-medium text-[#2d3142] focus:outline-none"
                >
                  <span className="text-slate-900">{item.question}</span>
                  <FiChevronDown
                    className={`text-xl cursor-pointer transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mb-16">
        <img
          src={Fintech9}
          alt="Monify image"
          className="object-cover w-full h-[300px] md:h-[500px] lg:h-[700px]"
        />
      </div>
    </main>
  );
};

export default FAQ;
