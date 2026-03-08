'use client';

import { useContent } from '@/context/ContentContext';
import { use } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Baby,
  Radio,
  AlertCircle,
  Zap,
  Microscope,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServicePage({ params }: PageProps) {
  const { services, doctors } = useContent();
  const slug = use(params).slug;

  // Find the service by slug
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!service) {
    notFound();
  }

  const icons: Record<string, any> = { Heart, Baby, Radio, AlertCircle, Zap, Microscope };
  const Icon = icons[service.icon] || Heart;

  // Find related doctors - doctors whose specialty matches the service title
  const relatedDoctors = doctors.filter(d =>
    d.specialty.toLowerCase().includes(service.title.toLowerCase().replace('y', 'ist')) ||
    service.title.toLowerCase().includes(d.specialty.toLowerCase().replace('ist', 'y'))
  );

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon size={48} className="text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our {service.title} Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Gentrimed Hospital, we provide comprehensive {service.title.toLowerCase()} services
              with state-of-the-art equipment and experienced medical professionals. Our commitment
              to excellence ensures that you receive the highest quality care tailored to your needs.
            </p>
          </motion.div>

          {/* Service Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                We use the latest medical technology and equipment to ensure accurate diagnoses and effective treatments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of specialists brings years of experience and expertise to provide you with the best care possible.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We prioritize your comfort and well-being, ensuring a compassionate and supportive environment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Services</h3>
              <p className="text-gray-600">
                From routine check-ups to complex procedures, we offer a full range of {service.title.toLowerCase()} services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Doctors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our {service.title} Specialists
            </h2>
            <p className="text-xl text-gray-600">
              Meet our experienced doctors who specialize in {service.title.toLowerCase()}
            </p>
          </motion.div>

          {relatedDoctors.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {relatedDoctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {doctor.image ? (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-2xl font-bold">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-green-600 font-semibold text-center mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 text-center">
                    {doctor.experience}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-600">
                Our team of specialists is currently being updated. Please contact us for more information about our {service.title.toLowerCase()} services.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience Our {service.title} Services?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Schedule an appointment today and let our experts take care of you.
            </p>
            <Link
              href="/#appointment"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}