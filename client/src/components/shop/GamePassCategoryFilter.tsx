import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCategories } from '@/lib/gamePasses';

interface GamePassCategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GamePassCategoryFilter({ 
  activeCategory, 
  onCategoryChange 
}: GamePassCategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Get all available categories
    setCategories(getCategories());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-white">Game Passes</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Browse our collection of Roblox and Scratch game passes. Support KarmaTsukino's creations or get new content.
        </p>
      </motion.div>
      
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.span
                layoutId="activePill"
                className="absolute inset-0 rounded-full bg-primary -z-10"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>
      
      <div className="border-b border-gray-800 mb-8"></div>
    </div>
  );
}