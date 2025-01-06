import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '../common/ProductCard';
import { useFeaturedProducts } from '../../hooks/useFeaturedProducts';

import 'swiper/css';

export default function FeaturedProducts() {
  const { featuredProducts } = useFeaturedProducts();

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
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link to="/products" className="block h-full">
            <div className="bg-green-600 rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:scale-105 h-full flex flex-col">
              <div className="relative aspect-w-4 aspect-h-3 h-48 bg-green-500">
                <div className="absolute inset-0 bg-white/10"></div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-white/90 font-medium">All Categories</span>
                <h3 className="text-lg font-semibold text-white mt-1">See All Products</h3>
                <p className="text-sm text-white/80 mt-2 flex-grow">Discover our complete collection of premium products</p>
                <button className="mt-4 text-white hover:text-white/90 font-medium inline-flex items-center">
                  Browse More <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}