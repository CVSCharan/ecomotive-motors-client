"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaLeaf,
  FaShippingFast,
  FaThumbsUp,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: FaShippingFast,
    value: "257+",
    label: "Deliveries",
    description: "Successful deliveries of electric vehicles to our customers",
  },
  {
    id: 2,
    icon: FaUsers,
    value: "210+",
    label: "Happy Clients",
    description: "Satisfied clients who trust our electric mobility solutions",
  },
  {
    id: 3,
    icon: FaThumbsUp,
    value: "98%",
    label: "Client Satisfaction",
    description: "Our clients rate their experience with us as excellent",
  },
  {
    id: 4,
    icon: FaLeaf,
    value: "10,000+",
    label: "CO₂ Reduction",
    description: "Tons of CO₂ emissions reduced through our electric vehicles",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary p-4 rounded-full">
                  <stat.icon size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2 stat-number">
                {stat.value}
              </h3>
              <h4 className="text-xl font-semibold mb-3 text-accent stat-label">
                {stat.label}
              </h4>
              <p className="text-gray-300 font-body-primary">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
