import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import FeaturesSection from '../components/Features/FeaturesSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Categories from '../components/Categories/Categories';
import Certifications from '../components/Certifications/Certifications';

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSlider />
      <FeaturesSection />
      <FeaturedProducts />
      <Categories />
      <Certifications />
    </div>
  );
}