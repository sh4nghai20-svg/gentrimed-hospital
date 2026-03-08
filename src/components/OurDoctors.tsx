'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';



export default function OurDoctors() {
  const { doctors } = useContent();
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Meet Our Doctors
          </h2>
          <p className="text-xl text-gray-600">
            Expert medical professionals dedicated to your health
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 30px 60px rgba(6, 182, 212, 0.2)',
              }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-green-300 transition-all duration-300"
            >
              {/* Doctor Image Placeholder */}
              <div className="relative w-full h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-full h-full"
                >
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={80} className="text-green-400" />
                  )}
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>

                <p className="text-green-600 font-semibold mb-2">
                  {doctor.specialty}
                </p>

                <p className="text-sm text-gray-600 mb-6">
                  {doctor.experience} experience
                </p>

                {/* Button */}
                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Book with {doctor.name.split(' ')[1]}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Doctors Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link href="/doctors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow"
            >
              View All Doctors
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
