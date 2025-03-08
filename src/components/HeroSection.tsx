"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.webp"
          alt="Electric Vehicle"
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.7)" }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading-primary tracking-tight"
          >
            Drive the Future with Ecomotive Motors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 font-heading-primary font-medium leading-relaxed"
          >
            Pioneering sustainable mobility solutions for a greener tomorrow.
            Explore our range of electric vehicles designed for efficiency,
            performance, and environmental responsibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 font-body-secondary"
          >
            <Link href="/#products" className="btn-primary">
              Explore Products
            </Link>
            <Link
              href="/#contact"
              className="bg-white text-primary px-6 py-2 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
