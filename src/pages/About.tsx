import React from 'react';
import FeatureGrid from '../components/Features/FeatureGrid';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">About FreshExports</h1>
          <p className="text-gray-600 mb-4">
            Founded in 2020, FreshExports has established itself as a leading exporter of premium fruits and vegetables. 
            Our commitment to quality and reliability has made us a trusted partner for businesses worldwide.
          </p>
          <p className="text-gray-600">
            We work directly with farmers to ensure the highest quality produce, implementing strict quality control 
            measures at every step of our supply chain.
          </p>
        </div>
        <div className="relative h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80"
            alt="Farming"
            className="rounded-lg shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>

      <FeatureGrid />
    </div>
  );
}