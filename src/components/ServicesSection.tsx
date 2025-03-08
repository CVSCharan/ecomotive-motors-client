"use client";

import { motion } from "framer-motion";
import {
  FaTools,
  FaChargingStation,
  FaBatteryFull,
  FaCogs,
} from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "EV Sales",
    description:
      "Browse our range of electric vehicles including scooters, bikes, and motorcycles. Our experts will help you find the perfect EV for your needs.",
    icon: FaMotorcycle,
  },
  {
    id: 2,
    title: "Maintenance & Repair",
    description:
      "Our skilled technicians provide comprehensive maintenance and repair services to keep your electric vehicle running at peak performance.",
    icon: FaTools,
  },
  {
    id: 3,
    title: "Charging Solutions",
    description:
      "We offer a variety of charging solutions for home, office, or commercial use. Get expert advice on the best charging setup for your needs.",
    icon: FaChargingStation,
  },
  {
    id: 4,
    title: "Battery Replacement",
    description:
      "When it's time to replace your EV battery, trust our team to provide high-quality replacements with professional installation.",
    icon: FaBatteryFull,
  },
  {
    id: 5,
    title: "Customization",
    description:
      "Make your electric vehicle truly yours with our customization services. From aesthetic upgrades to performance enhancements, we've got you covered.",
    icon: FaCogs,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading-primary tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 max-w-2xl mx-auto font-body-primary"
          >
            We provide comprehensive services to support your electric vehicle
            journey, from purchase to maintenance and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark font-heading-secondary">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 font-body-primary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
