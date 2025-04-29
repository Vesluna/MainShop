import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getGamePassesByCategory, GamePass } from '@/lib/gamePasses';
import GamePassCard from './GamePassCard';
import ErrorDisplay from './ErrorDisplay';

interface GamePassGridProps {
  category: string;
}

export default function GamePassGrid({ category }: GamePassGridProps) {
  const [gamePasses, setGamePasses] = useState<GamePass[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGamePasses = async () => {
      setLoading(true);
      setError(null);
      try {
        // Small delay to simulate network request
        await new Promise(resolve => setTimeout(resolve, 300));
        const passes = getGamePassesByCategory(category);
        setGamePasses(passes);
      } catch (err) {
        console.error('Error fetching game passes:', err);
        setError('Failed to load game passes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGamePasses();
  }, [category]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg h-96 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <ErrorDisplay
          type="unavailable"
          title="Failed to Load Game Passes"
          message={error}
          actionText="Try Again"
          onAction={() => window.location.reload()}
        />
      </div>
    );
  }

  // Render empty state
  if (gamePasses.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">No Game Passes Found</h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            There are currently no game passes available in this category. Please check back later or explore other categories.
          </p>
        </motion.div>
      </div>
    );
  }

  // Render game passes grid
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{category === 'All' ? 'All Game Passes' : `${category} Passes`}</h2>
        <p className="text-gray-300">Discover and purchase game passes for various platforms</p>
      </div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {gamePasses.map(gamePass => (
          <motion.div key={gamePass.id} variants={itemVariants}>
            <GamePassCard gamePass={gamePass} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}