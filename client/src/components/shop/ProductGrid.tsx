import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  category: string;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(8);
  
  // Filter products by category if not "All Products"
  const filteredProducts = category === "All Products"
    ? products
    : products.filter(product => product.category === category);
  
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredProducts.length));
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {hasMore && (
          <div className="text-center mt-12">
            <button 
              className="px-8 py-3 bg-white border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
              onClick={loadMore}
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
