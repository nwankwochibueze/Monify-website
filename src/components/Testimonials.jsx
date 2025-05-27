import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const testimonials = [
  {
    id: 1,
    name: "Tom",
    role: "Accountant",
    quote:
      "Monify's banking solutions have simplified my financial management, allowing me to focus on what matters most.",
  },
  {
    id: 2,
    name: "Sarah",
    role: "Entrepreneur",
    quote:
      "John's expert advice helped me navigate the complexities of investments and secure my financial future.",
  },
  {
    id: 3,
    name: "John",
    role: "Investor",
    quote:
      "The guidance on savings strategies has transformed the way I plan for my future financial goals and strategies.",
  },
];

// Testimonial card component
function TestimonialCard({ name, role, quote }) {
  return (
    <div className="flex flex-col">
      <div className="text-emerald-600 text-6xl font-serif">"</div>
      <div className="mt-2">
        <h3 className="text-lg md:text-xl font-semibold text-slate-800">
          {name}, {role}
        </h3>
        <p className="mt-2 text-slate-800 text-base md:text-lg">"{quote}"</p>
      </div>
    </div>
  );
}

// Main testimonials component
const Testimonials = () => {
  // Animation variants for text reveal
  const textRevealVariant = {
    hidden: { opacity: 0, y: "100%" }, // Start fully hidden and below the viewport
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth reveal
    },
  };

  return (
    <section className="bg-green-200 pt-20 pb-20">
      <div className="container mx-auto">
        {/* Animated Heading with Text Reveal */}
        <motion.div
          className="overflow-hidden" // Clip the text during animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is in view
          variants={textRevealVariant}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16 text-center lg:text-left tracking-tight transform scale-y-100 px-4 md:px-20">
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
