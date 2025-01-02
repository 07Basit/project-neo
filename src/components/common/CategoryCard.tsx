import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types/category';
import LazyImage from './LazyImage';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/products?category=${category.name.toLowerCase()}`} 
      className="group block"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="relative h-48">
          <LazyImage 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-xl font-bold text-white">{category.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}