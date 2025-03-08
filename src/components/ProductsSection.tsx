"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "E-Scooter Pro",
    description:
      "Our flagship electric scooter with a range of 120km and top speed of 80km/h. Perfect for urban commuting.",
    image: "/images/product1.webp",
    features: [
      "120km Range",
      "80km/h Top Speed",
      "Fast Charging",
      "Smart Connectivity",
    ],
  },
  {
    id: 2,
    name: "E-Bike Commuter",
    description:
      "A comfortable electric bike designed for daily commutes with pedal assist and a removable battery.",
    image: "/images/product2.webp",
    features: [
      "60km Range",
      "25km/h Assist",
      "Removable Battery",
      "Low Maintenance",
    ],
  },
  {
    id: 3,
    name: "E-Motorcycle Sport",
    description:
      "High-performance electric motorcycle with impressive acceleration and sporty design.",
    image: "/images/product3.webp",
    features: [
      "150km Range",
      "120km/h Top Speed",
      "Quick Acceleration",
      "Regenerative Braking",
    ],
  },
  {
    id: 4,
    name: "E-City Cruiser",
    description:
      "Stylish and comfortable electric city cruiser for leisurely rides and daily commutes.",
    image: "/images/product4.webp",
    features: [
      "100km Range",
      "45km/h Top Speed",
      "Comfortable Seating",
      "Integrated Lights",
    ],
  },
  {
    id: 5,
    name: "E-Delivery Vehicle",
    description:
      "Compact electric delivery vehicle designed for last-mile delivery with ample storage space.",
    image: "/images/product5.webp",
    features: [
      "80km Range",
      "40km/h Top Speed",
      "200L Storage Capacity",
      "Low Operating Cost",
    ],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading-primary tracking-tight"
          >
            Our Electric Vehicles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white text-gray-700 max-w-2xl mx-auto font-body-primary"
          >
            Discover our range of innovative electric vehicles designed for
            efficiency, performance, and environmental responsibility.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {products.slice(0, 3).map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary font-heading-secondary">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 font-body-primary">
                  {product.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 font-heading-secondary uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 font-body-primary">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn-primary w-full font-body-secondary tracking-wide">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row for additional products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          {products.slice(3, 5).map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary font-heading-secondary">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 font-body-primary">
                  {product.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 font-heading-secondary uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 font-body-primary">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn-primary w-full font-body-secondary tracking-wide">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
