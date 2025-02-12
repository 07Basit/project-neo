import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '../common/ProductCard';
import { featuredProducts } from './featuredProductsData';

import 'swiper/css';

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold pl-2">Featured Products</h2>
      </div>
      
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="featured-products-swiper"
      >
        {featuredProducts.map((product, index) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link 
            to="/products" 
            className="block h-full transform transition-all duration-500 hover:scale-105"
            style={{ 
              animation: 'fadeIn 0.6s ease-out forwards',
              animationDelay: `${featuredProducts.length * 0.1}s`,
              opacity: 0
            }}
          >
            <div className="bg-gradient-to-br rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative aspect-w-4 aspect-h-3 h-48">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(250deg, #252C56 0%, #313A72 25%, #3D488F 50%, #4956AB 75%, #4E5694 100%)',
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow" style={{
                background: 'linear-gradient(135deg, #252C56 0%, #3B4275 50%, #4E5694 100%)',
              }}>
                <span className="text-sm text-aqua font-medium">All Categories</span>
                <h3 className="text-lg font-semibold text-aqua mt-1">See All Products</h3>
                <p className="text-aqua text-sm mt-2 flex-grow">Discover our complete collection of premium products</p>
                <div className="mt-4 flex items-center justify-between text-accent">
                  <span className="font-medium">Browse More</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}