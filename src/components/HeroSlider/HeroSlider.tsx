import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sliderImages } from './sliderData';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {sliderImages.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-4 md:left-16 max-w-xl text-left text-white p-4 md:p-0">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
                {slide.title}
              </h1>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-green-700 transition-colors inline-block text-sm md:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}