import React from "react";
import { motion } from "framer-motion";
import Fintech6 from "../assets/Fintech6.webp";
import Fintech8 from "../assets/Fintech8.webp";
import Fintech7 from "../assets/Fintech7.webp";

const MeetOurExperts = () => {
  const textRevealVariant = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: "easeOut" } },
  };
  const paragraphVariant = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const experts = [
    {
      name: "Joan Davis",
      img: Fintech6,
      alt: "monify image",
      bio: "Joan specializes in financial consulting with over 15 years of experience helping clients optimize their investment strategies and achieve their financial goals.",
    },
    {
      name: "Mike Johnson",
      img: Fintech8,
      alt: "Business consultant",
      bio: "Mike is our lead business strategist with expertise in corporate development and market analysis, guiding companies through complex business transformations.",
    },
    {
      name: "Emily Wilson",
      img: Fintech7,
      alt: "Legal advisor",
      bio: "Emily provides expert legal consultation with a focus on business law and compliance, helping clients navigate regulatory requirements with confidence.",
    },
  ];

  return (
    <main className="bg-green-200 pt-10 pb-10">
      <div className="p-6 md:p-12 lg:p-16">
        <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={textRevealVariant}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight text-center">
            Meet our experts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div key={expert.name} className="flex flex-col items-center md:items-start">
              <div className="w-full max-w-xs h-72 md:h-80 lg:h-96 relative mb-6 overflow-hidden">
                <img src={expert.img} alt={expert.alt} className="w-full h-full object-cover object-center" />
              </div>
              <div className="w-full max-w-xs text-center md:text-left">
                <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={textRevealVariant}>
                  {/* Expert name — card-level subheading, one step below h2 */}
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 tracking-tight mb-3">
                    {expert.name}
                  </h3>
                </motion.div>
                <motion.div className="overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={paragraphVariant}>
                  <p className="text-base text-slate-900">
                    {expert.bio}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MeetOurExperts;
