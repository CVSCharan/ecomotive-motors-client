"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaUsers, FaLeaf, FaShippingFast, FaThumbsUp } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: FaShippingFast,
    value: 257,
    suffix: "+",
    label: "Deliveries",
    description: "Successful deliveries of electric vehicles to our customers",
  },
  {
    id: 2,
    icon: FaUsers,
    value: 210,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied clients who trust our electric mobility solutions",
  },
  {
    id: 3,
    icon: FaThumbsUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Our clients rate their experience with us as excellent",
  },
  {
    id: 4,
    icon: FaLeaf,
    value: 10000,
    displayValue: 10,
    suffix: "k+",
    label: "CO₂ Reduction",
    description: "Tons of CO₂ emissions reduced through our electric vehicles",
  },
];

// Counter component for animating numbers
interface CounterProps {
  value: number;
  displayValue?: number;
  suffix: string;
  duration?: number;
}

const Counter = ({
  value,
  displayValue,
  suffix,
  duration = 2,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    // Use displayValue if provided, otherwise use the original value
    const targetValue = displayValue !== undefined ? displayValue : value;
    let start = 0;
    const end = targetValue;

    // Don't run if already at the end value or not in view
    if (!isInView || start === end) return;

    // Get animation duration based on value size
    let totalDuration = duration;
    if (end > 100) totalDuration = duration * 1.2;
    if (end > 500) totalDuration = duration * 1.5;

    // For smaller numbers, use smoother increments
    const incrementValue = end <= 100 ? 1 : Math.ceil(end / 100);

    const timer = setInterval(() => {
      start += incrementValue;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
        return;
      }
      setCount(start);
    }, (totalDuration * 1000) / (end / incrementValue));

    return () => clearInterval(timer);
  }, [value, displayValue, isInView, duration]);

  // Format the number with commas
  const formatNumber = (num: number): string => {
    return num.toString();
  };

  return (
    <span ref={nodeRef} className="inline-block">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

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
                <Counter
                  value={stat.value}
                  displayValue={stat.displayValue}
                  suffix={stat.suffix}
                />
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
