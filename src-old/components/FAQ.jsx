import React, { useState, useCallback } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Fintech9 from "../assets/Fintech9.webp";

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
      "Our annual ROI typically ranges from 5-12% depending on your investment strategy and risk tolerance. Fixed-rate savings offer guaranteed returns, while investment portfolios have variable returns based on market performance.",
  },
  {
    question: "What is the minimum deposit for an account?",
    answer:
      "You can start with as little as $5. We believe everyone should have access to financial services, which is why we've made our platform accessible with no minimum balance requirements for basic accounts.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const textRevealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <main className="bg-green-200 pt-20 lg:pt-32">
      <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
        <motion.div
          className="text-start mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textRevealVariant}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-900 text-base md:text-lg">
            Find answers to common questions and get the information you need quickly.
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="border-b border-slate-900/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full py-4 md:py-6 text-left font-medium text-slate-900 hover:text-slate-700 focus:outline-none focus:text-slate-700 transition-colors group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4 text-base md:text-lg">{item.question}</span>
                <span className="flex-shrink-0 ml-2">
                  {openIndex === index ? (
                    <FiChevronUp className="text-xl md:text-2xl transition-transform duration-200" />
                  ) : (
                    <FiChevronDown className="text-xl md:text-2xl transition-transform duration-200 group-hover:translate-y-1" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <p className="pb-4 md:pb-6 text-slate-700 leading-relaxed text-sm md:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="w-full mt-12 md:mt-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={Fintech9}
          alt="Financial planning"
          className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
          loading="lazy"
        />
      </motion.div>
    </main>
  );
};

export default FAQ;