'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import { useState } from 'react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallModal({ isOpen, onClose }: CallModalProps) {
  const { contact } = useContent();
  const [copied, setCopied] = useState('');

  const copyNumber = (num: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(num).then(() => {
        setCopied(num);
        setTimeout(() => setCopied(''), 2000);
      }).catch(() => {
        // fallback alert
        alert(`Phone number copied: ${num}`);
      });
    } else {
      // older browsers
      try {
        const el = document.createElement('textarea');
        el.value = num;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(num);
        setTimeout(() => setCopied(''), 2000);
      } catch {
        alert(`Please copy the number manually: ${num}`);
      }
    }
  };

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
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-green-600 text-white p-6 rounded-t-lg flex justify-between items-center">
              <h2 className="text-2xl font-bold">Call Us Now</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-green-700 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hotlines & Departments</h3>
              <div className="space-y-4">
                {(contact.departments || []).map((dept) => (
                  <div
                    key={dept.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{dept.name}</p>
                      <p className="text-gray-600 text-sm">{dept.hours}</p>
                    </div>
                    <button
                      className="flex items-center space-x-2 text-green-600 hover:text-green-800"
                      onClick={() => copyNumber(dept.phone)}
                    >
                      <Phone size={16} />
                      <span>{dept.phone}</span>
                    </button>
                  </div>
                ))}
                {contact.emergency && (
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <p className="font-semibold text-red-900">Emergency Hotline</p>
                      <p className="text-red-700 text-sm">24/7</p>
                    </div>
                    <button
                      className="flex items-center space-x-2 text-red-600 hover:text-red-800"
                      onClick={() => copyNumber(contact.emergency!)}
                    >
                      <Phone size={16} />
                      <span>{contact.emergency}</span>
                    </button>
                  </div>
                )}
              </div>
              {copied && (
                <div className="mt-4 text-center text-green-600 font-medium">
                  {copied} copied to clipboard!
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}