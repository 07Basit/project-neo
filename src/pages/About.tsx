import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About FreshExports</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, FreshExports has established itself as a leading exporter of premium fruits and vegetables. 
            Our commitment to quality and reliability has made us a trusted partner for businesses worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            We work directly with farmers to ensure the highest quality produce, implementing strict quality control 
            measures at every step of our supply chain.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Quality Assurance</li>
              <li>Sustainable Practices</li>
              <li>Customer Satisfaction</li>
              <li>Timely Delivery</li>
            </ul>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80"
            alt="Farming"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}