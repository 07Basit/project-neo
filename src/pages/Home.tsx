import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import Stats from '../components/Stats/Stats';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Categories from '../components/Categories/Categories';
import Certifications from '../components/Certifications/Certifications';

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSlider />
      <Stats />
      <FeaturedProducts />
      <Categories />
      <Certifications />
    </div>
  );
}