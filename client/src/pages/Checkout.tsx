import { useState, useEffect } from 'react';
import { useLocation, useRoute, Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiShield, FiAlertTriangle, FiFileText } from 'react-icons/fi';
import { GamePass, gamePasses } from '@/lib/gamePasses';

export default function Checkout() {
  const [_, setLocation] = useLocation();
  const [match, params] = useRoute('/checkout/:id');
  const [gamePass, setGamePass] = useState<GamePass | null>(null);
  const [safetyPopupVisible, setSafetyPopupVisible] = useState(false);
  
  useEffect(() => {
    // Find the gamepass by ID
    if (params && params.id) {
      const itemId = parseInt(params.id);
      const foundItem = gamePasses.find(pass => pass.id === itemId);
      if (foundItem) {
        setGamePass(foundItem);
      } else {
        // Redirect to home if gamepass not found
        setLocation('/');
      }
    }
  }, [params, setLocation]);
  
  // Show safety popup when user clicks Buy Now
  const handleBuyNow = () => {
    setSafetyPopupVisible(true);
  };
  
  // Handle continue to site
  const handleContinueToSite = () => {
    if (gamePass && gamePass.externalLink) {
      window.open(gamePass.externalLink, '_blank');
    }
    setSafetyPopupVisible(false);
  };
  
  // Handle cancel
  const handleCancel = () => {
    setSafetyPopupVisible(false);
  };
  
  if (!gamePass) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-gray-800/95 to-gray-800/90 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-gray-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/shop">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary/20">
                  <FiArrowLeft className="text-primary" />
                </div>
                <span>Back to Shop</span>
              </button>
            </Link>
            <div className="flex items-center">
              <div className="bg-gray-700/60 px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-gray-600/30">
                {gamePass.platform === 'Roblox' ? 'Roblox Purchase' : gamePass.platform === 'Scratch' ? 'Scratch Project' : 'External Purchase'}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-gray-800 to-gray-800/90 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
          <div className="md:flex">
            {/* Product Image - Left Side */}
            <div className="md:w-1/3 bg-gradient-to-br from-gray-700/80 to-gray-800/90">
              <div className="h-full flex items-center justify-center p-6 relative">
                <div className="absolute inset-0 opacity-20 bg-primary/10 mix-blend-overlay" />
                <img 
                  src={gamePass.image} 
                  alt={gamePass.name} 
                  className="w-full h-[250px] object-cover rounded-lg shadow-lg relative z-10 transform transition-transform duration-500 hover:scale-105"
                />
                {gamePass.badge && (
                  <div className={`absolute top-8 right-8 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg 
                    ${gamePass.badge === 'NEW' ? 'bg-gradient-to-r from-green-400 to-green-600 text-white border border-green-300' : 
                      gamePass.badge === 'SALE' ? 'bg-gradient-to-r from-red-400 to-red-600 text-white border border-red-300' : 
                      gamePass.badge === 'POPULAR' ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border border-blue-300' : 
                      gamePass.badge === 'COMING_SOON' ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-300' : ''
                    }`}
                  >
                    {gamePass.badge === 'COMING_SOON' ? 'COMING SOON' : gamePass.badge}
                  </div>
                )}
              </div>
            </div>
            
            {/* Checkout Details - Right Side */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-2">
                <div className="h-1 w-12 bg-primary rounded-full mr-4"></div>
                <h1 className="text-lg font-medium text-gray-400">Purchase Confirmation</h1>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">{gamePass.name}</h2>
              
              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg mb-8 border border-gray-700/50 shadow-inner">
                <p className="text-lg text-gray-300 mb-4">{gamePass.description}</p>
                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">Platform:</span> 
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-primary border border-gray-600">{gamePass.platform}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">Category:</span> 
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-primary border border-gray-600">{gamePass.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 bg-gradient-to-r from-gray-700/30 to-gray-700/10 p-5 rounded-lg border-l-4 border-gray-500">
                <p className="text-lg text-white mb-2">
                  Thank you for supporting this project!
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  By proceeding, you acknowledge that all donations are voluntary and non-refundable.
                  This purchase is not gambling but rather a donation to support the creator.
                </p>
                <div className="flex items-center">
                  <FiFileText className="text-primary h-4 w-4 mr-1.5" />
                  <Link to="/terms" className="text-xs text-primary hover:text-primary/80 transition-colors">
                    View Terms of Service
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="mr-3 p-2 bg-gray-700/50 rounded-full">
                    <FiShield className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-300 block">Price:</span>
                    <span className="text-2xl font-bold text-primary">{gamePass.priceDisplay}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleBuyNow}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Safety Popup */}
      <AnimatePresence>
        {safetyPopupVisible && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 md:p-4 overflow-hidden"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl max-w-2xl w-full shadow-2xl max-h-[90vh] flex flex-col overflow-hidden border border-gray-700/50"
            >
              {/* Popup Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 flex items-center flex-shrink-0">
                <div className="p-2 bg-white/10 rounded-full mr-3">
                  <FiShield className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Safety Warning</h3>
                  <p className="text-red-200 text-xs md:text-sm">Please review before proceeding</p>
                </div>
              </div>
              
              {/* Popup Content - with scrolling for small screens */}
              <div className="p-5 md:p-7 overflow-y-auto">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white text-sm md:text-base mb-5 md:mb-7 leading-relaxed"
                >
                  For your safety, we need to inform you to be careful about external sites. 
                  You are about to be redirected to an external platform to complete this purchase.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 md:p-6 rounded-lg mb-5 md:mb-7 border border-gray-600/30 shadow-inner"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-1 w-8 bg-yellow-500 rounded-full mr-3"></div>
                    <h4 className="text-base md:text-lg font-bold text-white">Important Safety Tips</h4>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start bg-gray-800/40 p-3 rounded-lg border-l-2 border-yellow-500"
                    >
                      <FiAlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">Verify you're on the official <span className="text-white font-medium">Roblox</span> website before entering any information.</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start bg-gray-800/40 p-3 rounded-lg border-l-2 border-yellow-500"
                    >
                      <FiAlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">Look closely for misleading URLs, fake sites, or suspicious elements.</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start bg-gray-800/40 p-3 rounded-lg border-l-2 border-yellow-500"
                    >
                      <FiAlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">Never share your password or personal information with anyone.</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-start bg-gray-800/40 p-3 rounded-lg border-l-2 border-yellow-500"
                    >
                      <FiAlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">Trust your instincts—if something feels suspicious, don't proceed.</span>
                    </motion.li>
                  </ul>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-white text-sm md:text-base mb-2"
                >
                  Would you like to continue to the external payment site?
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="text-gray-400 text-xs mb-3"
                >
                  You will be redirected to: <span className="text-primary font-mono">{gamePass.externalLink}</span>
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                  className="flex items-center bg-gray-800/70 py-2 px-3 rounded-md"
                >
                  <FiFileText className="text-primary h-4 w-4 mr-2" />
                  <Link 
                    to="/terms" 
                    className="text-xs text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setSafetyPopupVisible(false)}
                  >
                    View our Terms of Service
                  </Link>
                </motion.div>
              </div>
              
              {/* Button area - fixed at bottom */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-4 md:p-5 border-t border-gray-700 bg-gray-800/50 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 flex-shrink-0"
              >
                <button 
                  onClick={handleCancel}
                  className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm md:text-base rounded-lg transition-all hover:shadow-lg flex items-center justify-center"
                >
                  <span>Cancel</span>
                </button>
                <button 
                  onClick={handleContinueToSite}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-sm md:text-base rounded-lg transition-all hover:shadow-lg flex items-center justify-center transform hover:-translate-y-0.5"
                >
                  <FiShield className="mr-2" />
                  <span>Proceed Safely</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}