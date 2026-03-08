'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useContent } from '@/context/ContentContext';

export default function AppointmentCTA() {
  const { contact } = useContent();
  return (
    <section id="appointment" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/649074799_1529418955860113_4061909790784428269_n.jpg"
          alt="Hospital background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Schedule Your Visit Today
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Don't wait. Book an appointment with our expert doctors and take the
            first step towards better health.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
            >
              Book Appointment
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              Call Us Now
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-white"
          >
            <div>
              <p className="text-sm text-gray-300">Phone:</p>
              <p className="text-xl font-semibold">{contact.phone}</p>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-500" />

            <div>
              <p className="text-sm text-gray-300">Email:</p>
              <p className="text-xl font-semibold">{contact.email}</p>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-500" />

            <div>
              <p className="text-sm text-gray-300">Hours:</p>
              <p className="text-xl font-semibold">{contact.hours}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
