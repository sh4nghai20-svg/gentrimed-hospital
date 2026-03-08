'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Baby,
  Radio,
  AlertCircle,
  Zap,
  Microscope,
} from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import Link from 'next/link';

// data comes from context now


export default function Services() {
  const { services } = useContent();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive healthcare services for the whole family
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const icons: Record<string, any> = { Heart, Baby, Radio, AlertCircle, Zap, Microscope };
            const Icon = icons[service.icon] || Heart;
            const slug = service.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link key={service.id} href={`/services/${slug}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
                  }}
                  className="group p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer"
                >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-green-600 font-semibold flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.div>
              </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
