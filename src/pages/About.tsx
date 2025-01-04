import React from 'react';
import { Shield, Eye, Users, Leaf, Target, Clock } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We maintain strict quality control measures throughout our supply chain to ensure premium produce.'
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'Our vision is to become the most trusted global supplier of premium agricultural products.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We prioritize customer satisfaction and build long-lasting relationships with our clients.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to sustainable farming practices and environmental responsibility.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuously improving our processes and adopting modern farming techniques.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Reliable and punctual delivery service to meet your business needs.'
  }
];

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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <card.icon className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">Global Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}