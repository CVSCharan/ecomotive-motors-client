"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading-primary tracking-tight"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black max-w-2xl mx-auto text-lg bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-primary"
          >
            Have questions or want to learn more about our electric vehicles?
            Get in touch with our team today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary font-heading-primary border-b-2 border-primary pb-2 inline-block">
              Get In Touch
            </h3>

            <div className="space-y-8 font-body-primary">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary p-4 rounded-full text-white mr-5 shadow-md">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 font-heading-secondary">
                    Our Location
                  </h4>
                  <p className="text-gray-900 font-semibold text-base">
                    Address: 24-7-172/4, Magunta Layout, Nellore, Andhra Pradesh
                    524003
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary p-4 rounded-full text-white mr-5 shadow-md">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 font-heading-secondary">
                    Phone Number
                  </h4>
                  <p className="text-gray-900 font-semibold text-base">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary p-4 rounded-full text-white mr-5 shadow-md">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 font-heading-secondary">
                    Email Address
                  </h4>
                  <p className="text-gray-900 font-semibold text-base">
                    info@ecomotivemotors.in
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-4 font-heading-secondary border-b border-gray-200 pb-2">
                Business Hours
              </h4>
              <ul className="space-y-4 text-gray-900 font-semibold">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                    Monday - Friday:
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-primary">
                    9:00 AM - 6:00 PM
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                    Saturday:
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-primary">
                    10:00 AM - 4:00 PM
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-2"></span>
                    Sunday:
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-secondary">
                    Closed
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark font-heading-primary">
              Send Us a Message
            </h3>

            <form className="space-y-6 font-body-primary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Cvs Charan"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="cvs@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Product Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-primary font-heading-primary border-b-2 border-primary pb-2 inline-block">
              Our Locations
            </h3>
            <p className="text-black font-body-primary mt-4 max-w-3xl mx-auto text-lg bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-primary">
              Visit us at our showrooms and service centers to explore our range
              of electric vehicles and experience exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-5 border-b bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-primary p-3 rounded-full text-white mr-4 shadow-sm">
                    <FaMapMarkedAlt size={20} />
                  </div>
                  <h4 className="text-xl font-bold font-heading-secondary text-primary">
                    Magunta Layout Showroom
                  </h4>
                </div>
                <p className="text-gray-900 mt-3 font-body-primary font-semibold pl-12">
                  24-7-172/4, Magunta Layout, Nellore, Andhra Pradesh 524003
                </p>
              </div>
              <div className="h-[300px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.6602564071!2d79.9742!3d14.4367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8d30d0000001%3A0x7f2b2c9c6c988e2f!2sEcomotive%20Motors!5e0!3m2!1sen!2sin!4v1709913600000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ecomotive Motors Magunta Layout"
                ></iframe>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-5 border-b bg-gray-50">
                <div className="flex items-center">
                  <div className="bg-primary p-3 rounded-full text-white mr-4 shadow-sm">
                    <FaMapMarkedAlt size={20} />
                  </div>
                  <h4 className="text-xl font-bold font-heading-secondary text-primary">
                    Service Center
                  </h4>
                </div>
                <p className="text-gray-900 mt-3 font-body-primary font-semibold pl-12">
                  Mini Bypass Road, Nellore, Andhra Pradesh 524003
                </p>
              </div>
              <div className="h-[300px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.7!2d79.98!3d14.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8d4d0000001%3A0x9c6c988e2f7f2b2c!2sEcomotive%20Motors%20Service%20Center!5e0!3m2!1sen!2sin!4v1709913700000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ecomotive Motors Service Center"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
