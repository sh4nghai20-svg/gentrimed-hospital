'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Stethoscope } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const iconMap: Record<string, React.ComponentType<{ size: number; className: string }>> = {
  Calendar,
  Users,
  Stethoscope,
};

export default function NewsEvents() {
  const { news } = useContent();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="news" className="py-20 bg-white">
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
            News & Events
          </h2>
          <p className="text-xl text-gray-600">
            Latest updates from Gentrimed Hospital
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {news.map((newsItem) => {
            const Icon = iconMap[newsItem.icon] || Stethoscope;
            return (
              <motion.div
                key={newsItem.id}
                variants={cardVariants}
                whileHover={{
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                  y: -5,
                }}
                className="group rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-200 hover:border-cyan-300 transition-all duration-300 cursor-pointer"
              >
                {/* Image-like header with icon */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  >
                    <Icon size={40} className="text-white" />
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-cyan-600 text-xs font-bold px-3 py-1 rounded-full">
                      {newsItem.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {newsItem.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {newsItem.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-cyan-600 font-semibold flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
