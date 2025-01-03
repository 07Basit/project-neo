import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import HoverImageCarousel from './HoverImageCarousel';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const allImages = [product.mainImage, ...product.images];

  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 group-hover:scale-105 h-full flex flex-col">
        <HoverImageCarousel images={allImages} />
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-sm text-green-600 font-medium">{product.category}</span>
          <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-grow">{product.shortDescription}</p>
          <button className="mt-4 text-green-600 hover:text-green-700 font-medium inline-flex items-center">
            View Details <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </Link>
  );
}