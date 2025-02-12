import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg p-8 transition-all duration-500 hover:-translate-y-1"
      style={{ 
        animation: `fadeIn 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      {/* Fixed gradient background */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background: 'linear-gradient(210deg, #252C56 0%, #313A72 25%, #3D488F 50%, #4956AB 75%, #4E5694 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-background">
        <div className="flex items-center justify-center mb-6">
          <Icon className="w-12 h-12 opacity-90" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        <p className="text-white/90 text-center text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}