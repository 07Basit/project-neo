import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from '../common/CategoryCard';
import { useCategories } from '../../hooks/useCategories';

import 'swiper/css';

export default function Categories() {
  const { categories } = useCategories();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 pl-2">Categories</h2>
      
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="categories-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}