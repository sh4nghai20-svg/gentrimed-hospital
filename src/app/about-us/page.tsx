'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Award,
  Clock,
  Shield,
  Stethoscope,
  Microscope,
  Ambulance,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { number: '25+', label: 'Years of Service' },
    { number: '50K+', label: 'Patients Served' },
    { number: '500+', label: 'Medical Staff' },
    { number: '24/7', label: 'Emergency Care' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with dignity, respect, and genuine care, understanding that healing goes beyond medical treatment.',
    },
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'Patient safety is our top priority. We maintain the highest standards of medical care and follow strict safety protocols.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We are deeply committed to serving our community, providing accessible healthcare and health education programs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from patient care to medical research and community outreach.',
    },
  ];

  const milestones = [
    {
      year: '1999',
      title: 'Foundation',
      description: 'Gentrimed Hospital was established with a vision to provide world-class healthcare to our community.',
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Added specialized departments including cardiology, oncology, and advanced diagnostic facilities.',
    },
    {
      year: '2012',
      title: 'Technology Upgrade',
      description: 'Implemented state-of-the-art medical equipment and digital health records system.',
    },
    {
      year: '2018',
      title: 'Research Center',
      description: 'Established a medical research center focusing on tropical diseases and community health.',
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Launched comprehensive digital health platform and telemedicine services.',
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Gentrimed Hospital
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              For over 25 years, Gentrimed Hospital has been a beacon of hope and healing in our community,
              providing compassionate, high-quality healthcare to all who walk through our doors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1999, Gentrimed Hospital began as a small community clinic with a big dream:
                to provide accessible, high-quality healthcare to everyone in our region, regardless of their background or financial situation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown from a modest clinic to a comprehensive medical center,
                but our core values remain unchanged. We believe that healthcare is a fundamental human right,
                and we're committed to making that right a reality for our community.
              </p>
              <p className="text-lg text-gray-600">
                Today, Gentrimed Hospital serves thousands of patients annually, offering a full spectrum of medical services
                from routine check-ups to complex surgeries, all delivered with the compassion and expertise our patients deserve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Gentrimed Hospital
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our 25-year history of serving the community
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-green-600 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-green-600 rounded-full relative z-10"></div>
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Stethoscope size={32} className="text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide exceptional, compassionate healthcare services that improve the health and well-being
                of our community. We are committed to delivering patient-centered care with the highest standards
                of medical excellence, while ensuring accessibility for all.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Microscope size={32} className="text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading healthcare provider in our region, recognized for medical excellence,
                innovation, and community service. We envision a healthier community where everyone has
                access to quality healthcare and lives their healthiest life possible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals leading Gentrimed Hospital
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">CEO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Adebayo Johnson</h3>
              <p className="text-green-600 font-semibold mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Leading Gentrimed Hospital with over 20 years of healthcare administration experience.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">CMO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Fatima Okoye</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">
                Oversees medical operations and ensures the highest standards of patient care.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">CNO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nurse Grace Adeyemi</h3>
              <p className="text-purple-600 font-semibold mb-2">Chief Nursing Officer</p>
              <p className="text-gray-600 text-sm">
                Leads our nursing staff and ensures compassionate, high-quality patient care.
              </p>
            </motion.div>
          </motion.div>
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
              Join Our Community
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Experience the Gentrimed difference. We're here for you and your family's health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#appointment"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/#contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}