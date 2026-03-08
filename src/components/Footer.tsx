'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import CallModal from './CallModal';

export default function Footer() {
  const { contact } = useContent();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: ['Home', 'Services', 'Doctors', 'News', 'About Us', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Cardiology', 'Pediatrics', 'Radiology', 'Emergency Care', 'Surgery', 'Laboratory'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const [isCallOpen, setIsCallOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Hospital Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-green-500">
                <img
                  src="/images/gentrimed_logo.jpg"
                  alt="Gentrimed logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Gentrimed</h3>
                <p className="text-sm text-gray-400">Gentri Medical Center and Hospital</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              Your trusted partner in health and wellness. Committed to excellence in
              patient care for over 25 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400">{contact.address}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <p className="text-gray-400">{contact.phone}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green-500 flex-shrink-0" />
                <p className="text-gray-400">{contact.email}</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-lg font-bold text-white mb-6">{section.title}</h4>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#10b981' }}
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>

            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Hours */}
            <div>
              <h5 className="font-semibold text-white mb-3">Hours</h5>
              <p className="text-sm text-gray-400">Emergency: 24/7 Available</p>
              <p className="text-sm text-gray-400">Regular: Mon - Sun, 8AM - 6PM</p>
            </div>

            {/* Call Us Now Button */}
            <button
              onClick={() => setIsCallOpen(true)}
              className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Call Us Now
            </button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent my-10 origin-left"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-400 text-sm"
        >
          <p>© {currentYear} Gentri Medical Center and Hospital. All rights reserved.</p>          <p className="text-xs mt-1">
            <a href="/admin" className="hover:text-green-500">Admin</a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-green-500 transition-colors">
              Terms of Service
            </a>

            <a href="#" className="hover:text-green-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>

    <CallModal isOpen={isCallOpen} onClose={() => setIsCallOpen(false)} />
  </>
);
}
