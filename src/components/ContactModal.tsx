'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { contact } = useContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-green-700 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-green-100 mt-2">
                Get in touch with Gentrimed Hospital
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* General Contact */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">General Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-green-600 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">{contact.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-green-600 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">{contact.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="text-green-600 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">{contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="text-green-600 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Hours</p>
                        <p className="text-gray-600">{contact.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              {contact.emergency && (
                <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="text-red-600 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-red-900">Emergency</p>
                      <p className="text-red-700 font-bold text-lg">{contact.emergency}</p>
                      <p className="text-red-600 text-sm">Available 24/7 for medical emergencies</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Department Contacts */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(contact.departments || []).map((dept) => (
                    <div key={dept.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">{dept.name}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="text-green-600" />
                          <span className="text-gray-700">{dept.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail size={16} className="text-green-600" />
                          <span className="text-gray-700">{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-green-600" />
                          <span className="text-gray-700">{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Need Help?</h4>
                <p className="text-blue-800 text-sm">
                  For appointments, please call our main line or visit our appointment booking section.
                  For medical emergencies, call our emergency number immediately.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}