import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface Logo3DProps {
  visible: boolean;
  onComplete?: () => void;
}

export default function Logo3D({ visible, onComplete }: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D animation effect
  useEffect(() => {
    if (!containerRef.current || !visible) return;
    
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // Call the onComplete function after animation finishes
        if (onComplete) setTimeout(onComplete, 800);
      }
    });
    
    // Setup the initial state and animate in
    timeline
      .fromTo(".logo-letter", 
        { 
          opacity: 0, 
          y: 40, 
          rotationX: -90 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0, 
          stagger: 0.1,
          duration: 1.2
        }
      )
      .to(".logo-letter", {
        textShadow: "0 0 20px rgba(255,255,255,0.8)",
        duration: 0.5
      }, "-=0.3")
      .to(".logo-letter", { 
        opacity: 0,
        y: -30,
        stagger: 0.05,
        delay: 2
      });
    
    return () => {
      timeline.kill();
    };
  }, [visible, onComplete]);
  
  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center h-full perspective-500 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="transform-style-3d relative text-white text-6xl md:text-8xl font-bold tracking-wider">
        {Array.from("KARMATSUKINO").map((letter, index) => (
          <motion.span
            key={index}
            className="logo-letter inline-block transform-style-3d relative"
            style={{ 
              transformOrigin: "bottom center",
            }}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}