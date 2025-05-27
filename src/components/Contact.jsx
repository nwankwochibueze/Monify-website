import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Fintech4 from "../assets/Fintech4.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/broykqga", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for the image zoom effect
  const imageZoomVariant = {
    hidden: { scale: 1.2 }, // Start slightly zoomed in
    visible: {
      scale: 1, // Zoom back to normal
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact-section" className="bg-green-200">
      <div className="max-w-2xl mx-auto p-6 bg-green-200 pt-20">
        <div className="mb-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight transform scale-y-100">
            Get Financial Help
          </h2>
          <p className="text-slate-900 text-base md:text-lg">
            Talk to our team
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center p-4 bg-white/50">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Thank you!
            </h3>
            <p className="text-gray-600">
              We've received your message and will get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 bg-[#1f2942] text-white hover:bg-[#2a3654] transition-colors rounded-md"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-slate-500 focus:border-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-slate-500 focus:border-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-slate-500 focus:border-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-slate-500 focus:border-slate-800 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-green-200 px-6 py-3 border-2 border-transparent hover:border-slate-900 hover:bg-green-200 hover:text-slate-900 transition duration-300 rounded-full"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      {/* Animated Image */}
      <motion.div
        className="p-6 md:p-20 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={imageZoomVariant}
      >
        <img src={Fintech4} alt="monify photo4" className="w-full mx-auto" />
      </motion.div>
    </section>
  );
};

export default Contact;
