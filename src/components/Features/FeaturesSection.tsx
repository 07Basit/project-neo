import React from 'react';
import { Link } from 'react-router-dom';
import FeatureGrid from './FeatureGrid';

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left side - Images */}
          <div className="grid grid-cols-3 gap-4 h-[300px]">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d" 
                alt="Spices collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7" 
                alt="Food ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509377244-dd5d1e09065b" 
                alt="Fresh produce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-semibold text-green-600 mb-2">Welcome to</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">RAIYAN GLOBAL</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                We were established in the year 1986 under the name of Three Star Exports, exporting Indian Spices, 
                Foodstuffs, Grains, and Ready to Serve products to various countries worldwide.
              </p>
              <p>
                Since 1986, we have specialized in the field of exports only and we have understood the needs of our 
                buyers well. We promise that through hardwork and strict quality control, our valued customers' quest 
                for wide variety of products will be fulfilled by us.
              </p>
              <p>
                Since 2004, we have started working under the name and fame of Chatwani Impex Pvt Ltd.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 mt-8 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors w-fit"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Feature Cards Section */}
        <h2 className="text-3xl font-bold text-center mb-12">Featured</h2>
        <FeatureGrid />
      </div>
    </section>
  );
}