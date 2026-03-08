'use client';

import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';

export default function DoctorsPage() {
  const { doctors } = useContent();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Medical Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our highly qualified and experienced doctors dedicated to providing
            exceptional healthcare services to our patients.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 30px 60px rgba(6, 182, 212, 0.2)',
              }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-lg"
            >
              {/* Doctor Image */}
              <div className="relative w-full h-80 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden">
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
                    <User size={100} className="text-green-400" />
                  )}
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h2>

                <p className="text-green-600 font-bold text-lg mb-2">
                  {doctor.specialty}
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  {doctor.experience} experience
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-200 my-4" />

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail size={16} className="text-green-600" />
                    <span className="text-sm">doctor@hospital.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone size={16} className="text-green-600" />
                    <span className="text-sm">Available for consultation</span>
                  </div>
                </div>

                {/* Booking Button */}
                <Link href="/booking" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
                  >
                    Book Appointment
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {doctors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600">
              No doctors available at the moment.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
