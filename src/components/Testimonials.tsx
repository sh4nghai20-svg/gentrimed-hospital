'use client';

import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  specialty: string;
  review: string;
  rating: number;
}

// testimonials come from context

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials } = useContent();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <button
        className={`w-3 h-3 rounded-full mx-1 transition-all ${
          i === currentSlide ? 'bg-green-500 scale-125' : 'bg-gray-300'
        }`}
      />
    ),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our patients say about us
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="px-4 py-12">
                  <motion.div
                    whileInView={{ scale: [0.9, 1] }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
                  >
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star
                            size={24}
                            className="text-yellow-400 fill-yellow-400 mx-1"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Review Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-center text-lg text-gray-700 mb-8 italic"
                    >
                      "{testimonial.review}"
                    </motion.p>

                    {/* Patient Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <User size={32} className="text-white" />
                        )}
                      </div>

                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h4>

                      <p className="text-green-600 font-semibold">
                        {testimonial.specialty}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
