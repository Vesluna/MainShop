import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSequence from "@/components/intro/IntroSequence";
import EyeReveal from "@/components/intro/EyeReveal";
import TermsAgreement from "@/components/shop/TermsAgreement";
import GamePassShop from "./GamePassShop";
import { useToast } from "@/hooks/use-toast";

interface HomeProps {
  skipIntro?: boolean;
}

export default function Home({ skipIntro = false }: HomeProps) {
  // Animation state variables
  const [animationStage, setAnimationStage] = useState<
    "intro" | "eyeReveal" | "eyeOpen" | "terms" | "content" | "complete"
  >(skipIntro ? "complete" : "intro");
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { toast } = useToast();

  // Derived state based on animation stage
  const showIntro = animationStage === "intro";
  const showEyeReveal = animationStage === "eyeReveal" || animationStage === "eyeOpen";
  const eyesOpened = animationStage === "eyeOpen";
  const showTerms = animationStage === "terms";
  const pageVisible = animationStage === "content" || animationStage === "complete";

  // Intro sequence complete handler
  const handleIntroComplete = () => {
    setAnimationStage("eyeReveal");
    
    // Start eye opening animation shortly after intro completes
    setTimeout(() => {
      setAnimationStage("eyeOpen");
    }, 1000);
  };
  
  // Eye reveal complete handler
  const handleEyeOpenComplete = () => {
    // Show terms agreement after eyes are fully open
    setTimeout(() => {
      setAnimationStage("terms");
    }, 1000);
  };
  
  // Check localStorage for terms acceptance on component mount - run once on mount
  useEffect(() => {
    try {
      const hasAcceptedTerms = localStorage.getItem('tosAccepted') === 'true';
      if (hasAcceptedTerms) {
        setTermsAccepted(true);
      }
    } catch (error) {
      console.error('Error checking localStorage:', error);
      // If there's an error accessing localStorage, default to false
      setTermsAccepted(false);
    }
  }, []);
  
  // Skip terms and show content when eye opens if they've already accepted terms
  useEffect(() => {
    if (animationStage === "eyeOpen" && termsAccepted) {
      // Skip terms screen and go directly to content
      setAnimationStage("content");
      
      // Set final stage
      setTimeout(() => {
        setAnimationStage("complete");
      }, 1000);
    }
  }, [animationStage, termsAccepted]);

  // Terms agreement handlers
  const handleTermsAccept = () => {
    try {
      localStorage.setItem('tosAccepted', 'true');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
    setTermsAccepted(true);
    setAnimationStage("content");
    
    // Show success toast
    toast({
      title: "Welcome!",
      description: "Thank you for accepting the terms of service.",
      variant: "default",
    });
    
    // Final animation stage
    setTimeout(() => {
      setAnimationStage("complete");
    }, 1000);
  };
  
  const handleTermsDecline = () => {
    // If declined, show a toast notification but keep showing the terms
    toast({
      title: "Terms Required",
      description: "You must accept the terms to use this website",
      variant: "destructive",
    });
  };

  // Content entry animations
  const staggerDelay = 0.15;
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * staggerDelay,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Intro Sequence - absolute positioned to ensure it covers the entire screen */}
      <AnimatePresence>
        {showIntro && (
          <div className="absolute inset-0 z-50">
            <IntroSequence onComplete={handleIntroComplete} />
          </div>
        )}
      </AnimatePresence>
      
      {/* Eye Opening Effect - also absolute positioned */}
      {showEyeReveal && (
        <div className="absolute inset-0 z-40">
          <EyeReveal
            opened={eyesOpened}
            onComplete={handleEyeOpenComplete}
          />
        </div>
      )}
      
      {/* Terms & Conditions Agreement */}
      {(showTerms && !termsAccepted) && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <TermsAgreement
            visible={true}
            onAccept={handleTermsAccept}
            onDecline={handleTermsDecline}
          />
        </div>
      )}
      
      {/* Main Content - GamePass Shop - this is the base level content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>
        {pageVisible && <GamePassShop />}
      </div>
    </div>
  );
}
