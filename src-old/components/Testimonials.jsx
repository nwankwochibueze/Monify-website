import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Tom",
    role: "Accountant",
    quote:
      "Monify's banking solutions have simplified my financial management, allowing me to focus on what matters most.",
    avatar: "T",
  },
  {
    id: 2,
    name: "Sarah",
    role: "Entrepreneur",
    quote:
      "John's expert advice helped me navigate the complexities of investments and secure my financial future.",
    avatar: "S",
  },
  {
    id: 3,
    name: "John",
    role: "Investor",
    quote:
      "The guidance on savings strategies has transformed the way I plan for my future financial goals and strategies.",
    avatar: "J",
  },
];

function TestimonialCard({ name, role, quote, avatar, index }) {
  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-slate-900 text-green-200 rounded-full flex items-center justify-center font-bold text-lg mr-4">
          {avatar}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
      <div className="text-emerald-600 text-4xl font-serif mb-2">"</div>
      <p className="text-slate-700 italic">"{quote}"</p>
    </motion.div>
  );
}

const Testimonials = () => {
  const textRevealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-green-200 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textRevealVariant}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;