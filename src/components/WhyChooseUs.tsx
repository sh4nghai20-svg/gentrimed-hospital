'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Shield, Heart } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Users,
    title: 'Expert Doctors',
    description: 'Highly qualified medical professionals with years of experience',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Advanced Technology',
    description: 'State-of-the-art medical equipment and facilities',
  },
  {
    id: 3,
    icon: Shield,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency services and support',
  },
  {
    id: 4,
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Dedicated to your health and well-being',
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Gentri Medical Center and Hospital?
          </h2>
          <p className="text-xl text-gray-600">
            Excellence in healthcare, dedication to your well-being
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)',
                }}
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 overflow-hidden cursor-pointer transition-all duration-300"
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
