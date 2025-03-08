"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "Business Owner",
    quote:
      "Switching to Ecomotive Motors' electric scooter has been a game-changer for my daily commute. The battery life is impressive, and I'm saving so much on fuel costs!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Environmental Activist",
    quote:
      "I've been using the E-Bike Commuter for six months now, and I'm thoroughly impressed with its performance and reliability. The customer service at Ecomotive Motors is exceptional too.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    position: "IT Professional",
    quote:
      "The E-Motorcycle Sport exceeded all my expectations. It's powerful, stylish, and the range is perfect for my weekend rides. Highly recommend Ecomotive Motors to anyone looking to go electric.",
    rating: 4,
  },
  {
    id: 4,
    name: "Ananya Desai",
    position: "College Student",
    quote:
      "As a student, affordability and reliability were my main concerns. Ecomotive Motors provided me with the perfect electric scooter that fits my budget and gets me to classes on time.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading-primary tracking-tight"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto opacity-90 font-body-primary"
          >
            Don't just take our word for it. Hear from our satisfied customers
            about their experience with Ecomotive Motors.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 py-8"
            >
              <FaQuoteLeft className="mx-auto text-4xl mb-6 opacity-50" />
              <p className="text-xl md:text-2xl mb-8 italic font-heading-secondary">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mx-1 ${
                      i < testimonials[activeIndex].rating
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <h4 className="text-xl font-bold font-heading-primary">
                {testimonials[activeIndex].name}
              </h4>
              <p className="opacity-75 font-body-secondary uppercase tracking-wider text-sm">
                {testimonials[activeIndex].position}
              </p>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-30 hover:bg-opacity-50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
