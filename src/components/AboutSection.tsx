"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/aboutus.jpg"
              alt="About Ecomotive Motors"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-heading-primary tracking-tight">
                About Ecomotive Motors
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 mb-6 font-body-primary"
            >
              Ecomotive Motors is a pioneering company in the electric vehicle
              industry, dedicated to revolutionizing transportation through
              sustainable and eco-friendly solutions. Founded with a vision to
              reduce carbon footprint and promote clean energy, we have been at
              the forefront of electric mobility innovation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 mb-8 font-body-primary"
            >
              Our team of experts combines years of experience in automotive
              engineering, renewable energy, and sustainable design to create
              electric vehicles that don't compromise on performance, style, or
              comfort. We believe that the future of transportation is electric,
              and we're committed to making that future accessible to everyone.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-dark font-heading-secondary">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6 font-body-primary">
                To accelerate the world's transition to sustainable
                transportation by providing innovative, high-quality electric
                vehicles and solutions that exceed customer expectations while
                contributing to a cleaner planet.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-dark font-heading-secondary">
                Our Vision
              </h3>
              <p className="text-gray-700 font-body-primary">
                A world where electric mobility is the standard, not the
                alternative, leading to cleaner air, quieter cities, and a
                healthier environment for future generations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
