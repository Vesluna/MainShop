import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ParticleField from "./ParticleField";
import Logo3D from "./Logo3D";
import { FiStar } from "react-icons/fi";

interface IntroSequenceProps {
  onComplete?: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState<"initial" | "particles" | "logo" | "complete">("initial");
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  
  // Control the entire animation sequence
  useEffect(() => {
    // Stage 1: Initial black screen
    const initialTimer = setTimeout(() => {
      setStage("particles");
      
      // Stage 2: Particle field activation
      const particlesTimer = setTimeout(() => {
        setStage("logo");
        
        // Stage 3: Logo animation
        const logoTimer = setTimeout(() => {
          setStage("complete");
          
          // Stage 4: End animation
          if (onComplete) {
            setTimeout(onComplete, 500);
          }
        }, 4500); // Logo stays for 4.5 seconds
        
        return () => clearTimeout(logoTimer);
      }, 3000); // Particles alone for 3 seconds
      
      return () => clearTimeout(particlesTimer);
    }, 800); // Initial black screen for 0.8 seconds
    
    return () => clearTimeout(initialTimer);
  }, [onComplete]);
  
  // Animate the stars
  useEffect(() => {
    if (!starsRef.current || stage !== "particles" && stage !== "logo") return;
    
    const stars = starsRef.current.children;
    
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i] as HTMLElement;
      gsap.set(star, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.7 + 0.3,
        scale: Math.random() * 0.5 + 0.5
      });
      
      // Create twinkling effect
      gsap.to(star, {
        duration: 1 + Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.3,
        scale: Math.random() * 0.3 + 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, [stage]);
  
  // Handle exit animation
  useEffect(() => {
    if (stage !== "complete" || !containerRef.current) return;
    
    const timeline = gsap.timeline();
    timeline.to(containerRef.current, {
      opacity: 0,
      duration: 1,
    });
  }, [stage]);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black flex justify-center items-center z-[9999] overflow-hidden"
    >
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="absolute text-white opacity-0">
            <FiStar className="text-white" />
          </div>
        ))}
      </div>
      
      {/* Animated particle background */}
      <ParticleField 
        active={stage === "particles" || stage === "logo"} 
        particleCount={150}
      />
      
      {/* 3D Logo Animation */}
      <AnimatePresence>
        {stage === "logo" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-20"
          >
            <Logo3D 
              visible={true} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
