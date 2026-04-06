import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
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
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const imageZoomVariant = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact-section" className="bg-green-200 overflow-hidden">
      <div className="max-w-2xl mx-auto p-6 pt-20 lg:pt-32">
        <motion.div 
          className="mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Get Financial Help
          </h2>
          <p className="text-slate-900 text-base md:text-lg">
            Talk to our team
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div 
            className="text-center p-4 bg-white/50 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Thank you!
            </h3>
            <p className="text-gray-600">
              We've received your message and will get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 bg-[#1f2942] text-white hover:bg-[#2a3654] transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f2942]"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {['firstName', 'lastName', 'email', 'message'].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 transition-colors ${
                      errors[field] ? 'border-red-500' : 'border-slate-500'
                    }`}
                    aria-invalid={errors[field] ? 'true' : 'false'}
                    aria-describedby={`${field}-error`}
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 transition-colors ${
                      errors[field] ? 'border-red-500' : 'border-slate-500'
                    }`}
                    aria-invalid={errors[field] ? 'true' : 'false'}
                    aria-describedby={`${field}-error`}
                  />
                )}
                {errors[field] && (
                  <p id={`${field}-error`} className="mt-1 text-sm text-red-600">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-green-200 px-6 py-3 border-2 border-transparent hover:border-slate-900 hover:bg-green-200 hover:text-slate-900 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-green-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        )}
      </div>

      <motion.div
        className="p-6 md:p-20 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageZoomVariant}
      >
        <img 
          src={Fintech4} 
          alt="Financial consultation" 
          className="w-full mx-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Contact;