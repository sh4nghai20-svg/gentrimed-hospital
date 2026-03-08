'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ['Home', 'Services', 'Doctors', 'News', 'About Us', 'Contact'];

  const getHref = (item: string) => {
    const isOnServicePage = pathname.startsWith('/services/');
    const isOnAboutPage = pathname === '/about-us';
    const isOnBookingPage = pathname === '/booking';
    const isOnDoctorsPage = pathname === '/doctors';
    
    if (item === 'Home') {
      return (isOnServicePage || isOnAboutPage || isOnBookingPage || isOnDoctorsPage) ? '/' : '#home';
    }
    if (item === 'About Us') {
      return '/about-us';
    }
    if (item === 'Doctors') {
      return '/doctors';
    }
    if (item === 'Services') {
      return (isOnServicePage || isOnAboutPage || isOnBookingPage || isOnDoctorsPage) ? '/#services' : '#services';
    }
    if (item === 'Contact') {
      return null; // Will be handled by modal
    }
    const section = item.toLowerCase().replace(' ', '-');
    return (isOnServicePage || isOnAboutPage || isOnBookingPage || isOnDoctorsPage) ? `/#${section}` : `#${section}`;
  };

  const handleNavClick = (item: string) => {
    if (item === 'Contact') {
      setIsContactModalOpen(true);
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white text-gray-800 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            {/* local logo image */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-green-500">
              <img
                src="/images/gentrimed_logo.jpg"
                alt="Gentrimed logo"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-italic text-green-600">Gentri Medical Center and Hospital</h1>
              <p className="text-xs text-gray-600">Alagang Gentrimed</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const href = getHref(item);
              return (
                <motion.div
                  key={index}
                  whileHover={{ color: '#10b981' }}
                  className="text-gray-700 hover:text-green-500 transition-colors text-sm font-medium"
                >
                  {href ? (
                    <a href={href}>{item}</a>
                  ) : (
                    <button onClick={() => handleNavClick(item)}>{item}</button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Book Appointment
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => {
              const href = getHref(item);
              return (
                <motion.div
                  key={index}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500 transition-colors"
                >
                  {href ? (
                    <a href={href} onClick={() => setIsOpen(false)}>{item}</a>
                  ) : (
                    <button onClick={() => handleNavClick(item)}>{item}</button>
                  )}
                </motion.div>
              );
            })}
            <Link href="/booking" className="block w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Book Appointment
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.nav>
  );
}
