'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatItem {
  id: number;
  value: number;
  label: string;
  suffix: string;
}

const stats: StatItem[] = [
  { id: 1, value: 25, label: 'Years Experience', suffix: '+' },
  { id: 2, value: 150, label: 'Expert Doctors', suffix: '+' },
  { id: 3, value: 10000, label: 'Happy Patients', suffix: '+' },
  { id: 4, value: 24, label: '7 Emergency Service', suffix: '/7' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / 30;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-5xl md:text-6xl font-bold text-white">
      {displayValue.toLocaleString()}
      <span className="text-3xl ml-1">{suffix}</span>
    </div>
  );
};

export default function Statistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-cyan-50">
            Trusted by thousands of patients nationwide
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              }}
              className="group text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>

              <p className="text-lg text-cyan-50 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
