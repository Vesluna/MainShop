import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { FiShoppingBag, FiUser, FiInfo, FiArrowRight } from 'react-icons/fi';
import Header from '@/components/shop/Header';
import AboutMe from '@/components/shop/AboutMe';
import Information from '@/components/shop/Information';
import GamePassGrid from '@/components/shop/GamePassGrid';
import Footer from '@/components/shop/Footer';
import { getCategories } from '@/lib/gamePasses';

export default function GamePassShop() {
  // Show category cards by default
  const [activeSection, setActiveSection] = useState<'categories' | 'gamepasses' | 'about' | 'info'>('categories');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [blackBarsVisible, setBlackBarsVisible] = useState(true);
  const [_, setLocation] = useLocation();
  
  // Hide black bars after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setBlackBarsVisible(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get categories on mount
  useEffect(() => {
    const cats = getCategories().filter(cat => cat !== 'All');
    setCategories(cats);
  }, []);
  
  // Animation variants for content sections
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };
  
  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setActiveSection('gamepasses');
  };
  
  // Go back to categories
  const handleBackToCategories = () => {
    setActiveSection('categories');
    setActiveCategory(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-auto">
      {/* Fixed black bars at top and bottom with animation to hide */}
      <AnimatePresence>
        {blackBarsVisible && (
          <>
            <motion.div 
              className="fixed top-0 left-0 right-0 h-[5vh] bg-black z-50"
              exit={{ height: 0, transition: { duration: 0.5 } }}
            />
            <motion.div 
              className="fixed bottom-0 left-0 right-0 h-[5vh] bg-black z-50"
              exit={{ height: 0, transition: { duration: 0.5 } }}
            />
          </>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <div className={`min-h-screen flex flex-col ${blackBarsVisible ? 'pt-[7vh] pb-[7vh]' : 'pt-2 pb-2'}`} style={{ zIndex: 10 }}>
        {/* Header with navigation */}
        <Header 
          onCategoryClick={() => setActiveSection('categories')}
          onAboutClick={() => setActiveSection('about')} 
          onInfoClick={() => setActiveSection('info')}
          activeSection={activeSection}
        />
        
        {/* Section Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection + (activeCategory || '')}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="flex-grow p-4"
          >
            {/* Categories Grid */}
            {activeSection === 'categories' && (
              <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Select a Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Donation Category Card */}
                  <div 
                    className="rounded-xl overflow-hidden bg-gradient-to-br from-green-500 to-green-700 shadow-xl transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => handleCategorySelect('Donation')}
                  >
                    <div className="p-8 text-center">
                      <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                        <FiShoppingBag className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Donations</h3>
                      <p className="text-white/80">Support KarmaTsukino with Robux donations</p>
                      <button className="mt-6 px-6 py-2 bg-white text-green-700 rounded-full flex items-center mx-auto font-bold">
                        Explore <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  {/* About Me Category Card */}
                  <div 
                    className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => setActiveSection('about')}
                  >
                    <div className="p-8 text-center">
                      <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                        <FiUser className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">About Me</h3>
                      <p className="text-white/80">Learn more about KarmaTsukino</p>
                      <button className="mt-6 px-6 py-2 bg-white text-blue-700 rounded-full flex items-center mx-auto font-bold">
                        View Profile <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Information Category Card */}
                  <div 
                    className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => setActiveSection('info')}
                  >
                    <div className="p-8 text-center">
                      <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                        <FiInfo className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Information</h3>
                      <p className="text-white/80">Important details and FAQs</p>
                      <button className="mt-6 px-6 py-2 bg-white text-purple-700 rounded-full flex items-center mx-auto font-bold">
                        Learn More <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Game Passes Grid when a category is selected */}
            {activeSection === 'gamepasses' && activeCategory && (
              <div className="container mx-auto px-4">
                <div className="flex items-center mb-8">
                  <button 
                    onClick={handleBackToCategories}
                    className="text-gray-400 hover:text-white flex items-center mr-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Categories
                  </button>
                  <h2 className="text-2xl font-bold text-white">{activeCategory}</h2>
                </div>
                <GamePassGrid category={activeCategory} />
              </div>
            )}
            
            {activeSection === 'about' && <AboutMe />}
            {activeSection === 'info' && <Information />}
          </motion.div>
        </AnimatePresence>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}