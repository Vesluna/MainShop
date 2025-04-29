import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiExternalLink, FiAlertTriangle, FiEye } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { GamePass, verifyRobloxGamepass } from '@/lib/gamePasses';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import ErrorDisplay from './ErrorDisplay';
import StarRating from './StarRating';
import { useLocation } from 'wouter';

interface GamePassCardProps {
  gamePass: GamePass;
}

export default function GamePassCard({ gamePass }: GamePassCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [_, navigate] = useLocation();

  // Navigate to checkout page
  const handleViewDetails = () => {
    navigate(`/checkout/${gamePass.id}`);
  };

  const handleAddToCart = async () => {
    // Skip verification for non-Roblox platforms
    if (gamePass.platform !== 'Roblox' || !gamePass.externalId) {
      addToCart(gamePass);
      toast({
        title: 'Added to cart',
        description: `${gamePass.name} has been added to your cart.`,
      });
      return;
    }

    setIsVerifying(true);
    try {
      // Verify the Roblox gamepass exists
      const isValid = await verifyRobloxGamepass(gamePass.externalId);
      
      if (isValid) {
        addToCart(gamePass);
        toast({
          title: 'Added to cart',
          description: `${gamePass.name} has been added to your cart.`,
        });
      } else {
        setVerificationFailed(true);
        toast({
          title: 'Verification Failed',
          description: 'This gamepass could not be verified. It may no longer be available.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error verifying gamepass:', error);
      toast({
        title: 'Verification Error',
        description: 'An error occurred while verifying this gamepass.',
        variant: 'destructive',
      });
    } finally {
      setIsVerifying(false);
    }
  };

  // Badge component that's consistent across all states
  const BadgeComponent = () => {
    if (!gamePass.badge) return null;
    
    return (
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg 
        ${gamePass.badge === 'NEW' ? 'bg-gradient-to-r from-green-400 to-green-600 text-white border border-green-300' : 
          gamePass.badge === 'SALE' ? 'bg-gradient-to-r from-red-400 to-red-600 text-white border border-red-300' : 
          gamePass.badge === 'POPULAR' ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border border-blue-300' : 
          gamePass.badge === 'COMING_SOON' ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-300' : ''
        } transform transition-transform hover:scale-105 duration-200 backdrop-blur-sm`}
      >
        {gamePass.badge === 'COMING_SOON' ? 'COMING SOON' : gamePass.badge}
      </div>
    );
  };

  // If the game pass is under maintenance or unavailable, show error state
  if (gamePass.status === 'maintenance' || gamePass.status === 'unavailable') {
    return (
      <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
        <div className="relative h-48 bg-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={gamePass.image}
              alt={gamePass.name}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <BadgeComponent />
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold text-white">{gamePass.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">{gamePass.platform}</p>
            <StarRating rating={gamePass.rating || 0} size="sm" />
          </div>
        </CardHeader>
        
        <CardContent className="py-0">
          <div className="mb-4 h-20 overflow-hidden">
            <ErrorDisplay 
              type={gamePass.status === 'maintenance' ? 'maintenance' : 'unavailable'}
              message={
                gamePass.status === 'maintenance' 
                  ? 'This game pass is temporarily unavailable due to maintenance.' 
                  : 'This game pass is no longer available for purchase.'
              }
            />
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 flex justify-between">
          <p className="text-primary font-bold">{gamePass.priceDisplay || `${gamePass.price} RS`}</p>
          <Button 
            variant="outline" 
            className="text-gray-400"
            disabled
          >
            Unavailable
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // If verification failed, show error state but allow retrying
  if (verificationFailed) {
    return (
      <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
        <div className="relative h-48 bg-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={gamePass.image}
              alt={gamePass.name}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <BadgeComponent />
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold text-white">{gamePass.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">{gamePass.platform}</p>
            <StarRating rating={gamePass.rating || 0} size="sm" />
          </div>
        </CardHeader>
        
        <CardContent className="py-0">
          <div className="mb-4 h-20 overflow-hidden">
            <ErrorDisplay 
              type="not-found"
              message="This game pass could not be verified. It may no longer be available on Roblox."
              actionText="Try Again"
              onAction={() => setVerificationFailed(false)}
            />
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 flex justify-between">
          <p className="text-primary font-bold">{gamePass.priceDisplay || `${gamePass.price} RS`}</p>
          <Button 
            variant="outline" 
            className="text-gray-400"
            disabled={isVerifying}
            onClick={() => setVerificationFailed(false)}
          >
            {isVerifying ? 'Verifying...' : 'Try Again'}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Regular game pass card
  return (
    <Card 
      className="bg-gray-800 border-gray-700 overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 bg-gray-700 overflow-hidden">
        <img
          src={gamePass.image}
          alt={gamePass.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        <BadgeComponent />
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-white">{gamePass.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">{gamePass.platform}</p>
          <StarRating rating={gamePass.rating || 0} size="sm" />
        </div>
      </CardHeader>
      
      <CardContent className="py-0">
        <div className="mb-4 h-20 overflow-hidden">
          <p className="text-gray-300 text-sm">{gamePass.description}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex flex-col gap-2">
        <p className="text-primary font-bold">{gamePass.priceDisplay || `${gamePass.price} RS`}</p>
        
        {/* View Details Button (Main Interaction) */}
        <Button 
          onClick={handleViewDetails}
          className="w-full flex items-center justify-center"
          variant="default"
        >
          <FiEye className="h-4 w-4 mr-2" />
          <span>View Details</span>
        </Button>
        
        <div className="flex w-full gap-2">
          {gamePass.externalLink && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(gamePass.externalLink, '_blank')}
              className="text-gray-300 hover:text-white"
            >
              <FiExternalLink className="h-4 w-4" />
            </Button>
          )}
          
          <Button 
            onClick={handleAddToCart}
            disabled={isVerifying}
            className="flex items-center gap-2 flex-1"
            variant="outline"
          >
            {isVerifying ? (
              <>Verifying...</>
            ) : (
              <>
                <FiShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}