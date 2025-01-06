import React from 'react';
import FeatureGrid from './FeatureGrid';

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <FeatureGrid />
      </div>
    </section>
  );
}