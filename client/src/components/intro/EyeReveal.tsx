import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface EyeRevealProps {
  opened: boolean;
  onComplete?: () => void;
}

export default function EyeReveal({ opened, onComplete }: EyeRevealProps) {
  const eyeContainerRef = useRef<HTMLDivElement>(null);
  const irisRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const topEyelidRef = useRef<HTMLDivElement>(null);
  const bottomEyelidRef = useRef<HTMLDivElement>(null);
  const irisGlowRef = useRef<HTMLDivElement>(null);
  const irisTextureRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);
  const veinsRef = useRef<HTMLDivElement>(null);
  
  // State to track if the animation is complete
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    if (!opened) return;

    // Create a high-quality animation sequence
    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        setAnimationComplete(true);
        if (onComplete) onComplete();
      }
    });
    
    // Initial delay for dramatic effect
    timeline.set([irisRef.current, pupilRef.current, irisGlowRef.current, irisTextureRef.current, reflectionRef.current, veinsRef.current], {
      opacity: 0,
    });
    
    // Subtle flicker of eyelids before opening
    timeline
      .to([topEyelidRef.current, bottomEyelidRef.current], {
        duration: 0.1,
        opacity: 0.95,
        yoyo: true,
        repeat: 2,
        ease: "power1.inOut",
      })
      // Slow dramatic eye opening
      .to(topEyelidRef.current, {
        height: '5%',
        duration: 2.2,
        ease: "power3.inOut",
      }, "+=0.5")
      .to(bottomEyelidRef.current, {
        height: '5%',
        duration: 2.2,
        ease: "power3.inOut",
      }, '<')
      
      // Eye veins appear first (subtle effect)
      .to(veinsRef.current, {
        opacity: 0.15,
        duration: 0.7,
      }, '-=1.6')
      
      // Iris appears with pulse effect
      .fromTo(irisRef.current, 
        { scale: 0.2, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.2,
          ease: "elastic.out(1, 0.5)"
        },
        '-=1.4'
      )
      
      // Glow effect appears around iris
      .fromTo(irisGlowRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1.1, opacity: 0.5, duration: 0.8 },
        '-=0.9'
      )
      
      // Texture details fade in
      .to(irisTextureRef.current, {
        opacity: 0.7,
        duration: 0.5
      }, '-=0.6')
      
      // Pupil dilates into view
      .fromTo(pupilRef.current,
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8,
          ease: "back.out(1.7)"
        },
        '-=0.8'
      )
      
      // Light reflection appears
      .to(reflectionRef.current, {
        opacity: 0.8,
        duration: 0.4
      }, '-=0.3')
      
      // Pupil adjusts to light (contraction)
      .to(pupilRef.current, {
        scale: 0.6,
        duration: 0.4,
        ease: "power2.inOut"
      }, '+=0.2')
      
      // Pupil dilates slightly (looks around)
      .to(pupilRef.current, {
        scale: 0.85,
        duration: 0.3,
        ease: "power1.out"
      }, '+=0.2')
      
      // Eye looks around - subtle movements
      .to([irisRef.current, pupilRef.current, irisGlowRef.current, irisTextureRef.current, reflectionRef.current], {
        x: '10px',
        duration: 0.8,
        ease: "power2.inOut"
      }, '+=0.1')
      .to([irisRef.current, pupilRef.current, irisGlowRef.current, irisTextureRef.current, reflectionRef.current], {
        x: '-15px',
        duration: 1,
        ease: "power2.inOut"
      })
      .to([irisRef.current, pupilRef.current, irisGlowRef.current, irisTextureRef.current, reflectionRef.current], {
        x: '0px',
        y: '8px',
        duration: 0.7,
        ease: "power2.inOut"
      })
      .to([irisRef.current, pupilRef.current, irisGlowRef.current, irisTextureRef.current, reflectionRef.current], {
        x: '0px',
        y: '0px',
        duration: 0.8,
        ease: "power2.inOut"
      })
      
      // Final blink before transitioning to content
      .to([topEyelidRef.current, bottomEyelidRef.current], {
        height: '50%',
        duration: 0.15,
        ease: "power1.in"
      }, '+=0.3')
      .to([topEyelidRef.current, bottomEyelidRef.current], {
        height: '5%',
        duration: 0.2,
        ease: "power1.out"
      })
      
      // Final fade out of eye components
      .to([irisRef.current, pupilRef.current, irisGlowRef.current, irisTextureRef.current, reflectionRef.current, veinsRef.current], {
        opacity: 0,
        duration: 0.7,
        stagger: 0.04,
        onComplete: () => {
          // Hide eye components completely
          const elements = [irisRef.current, pupilRef.current, irisGlowRef.current, 
            irisTextureRef.current, reflectionRef.current, veinsRef.current];
          elements.forEach(el => {
            if (el) el.style.display = 'none';
          });
        }
      }, '+=0.8');
   
    return () => {
      timeline.kill();
    };
  }, [opened, onComplete]);

  // Enhanced mouse tracking with subtle inertia
  useEffect(() => {
    if (!opened || animationComplete || !irisRef.current || !pupilRef.current) return;
    
    // Variables for inertial movement
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const eyeElements = [
        irisRef.current, 
        pupilRef.current, 
        irisGlowRef.current, 
        irisTextureRef.current, 
        reflectionRef.current
      ];
      
      if (eyeElements.some(el => !el)) return;
      
      // Calculate eye position
      const eyeRect = eyeContainerRef.current?.getBoundingClientRect();
      if (!eyeRect) return;
      
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;
      
      const maxMovement = 15;
      
      // Calculate normalized movement
      const deltaX = (e.clientX - eyeCenterX) / (window.innerWidth / 3);
      const deltaY = (e.clientY - eyeCenterY) / (window.innerHeight / 3);
      
      // Set target position with limits
      targetX = Math.min(maxMovement, Math.max(-maxMovement, deltaX * 8));
      targetY = Math.min(maxMovement, Math.max(-maxMovement, deltaY * 8));
    };
    
    // Animation frame for smooth inertial movement
    const updateEyePosition = () => {
      if (animationComplete) return;
      
      // Apply inertia - current position approaches target position
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      
      // Different movement amounts for each element
      if (irisRef.current) {
        gsap.set(irisRef.current, { x: currentX * 0.4, y: currentY * 0.4 });
      }
      if (pupilRef.current) {
        gsap.set(pupilRef.current, { x: currentX * 0.8, y: currentY * 0.8 });
      }
      if (irisGlowRef.current) {
        gsap.set(irisGlowRef.current, { x: currentX * 0.35, y: currentY * 0.35 });
      }
      if (irisTextureRef.current) {
        gsap.set(irisTextureRef.current, { x: currentX * 0.42, y: currentY * 0.42 });
      }
      if (reflectionRef.current) {
        gsap.set(reflectionRef.current, { x: currentX * 0.65, y: currentY * 0.65 });
      }
      
      animationFrameId = requestAnimationFrame(updateEyePosition);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    let animationFrameId = requestAnimationFrame(updateEyePosition);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opened, animationComplete]);

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none" ref={eyeContainerRef}>
      {/* Top eyelid */}
      <div 
        ref={topEyelidRef}
        className="absolute top-0 left-0 right-0 bg-black h-[50%] transform-origin-top"
      />
      
      {/* Bottom eyelid */}
      <div 
        ref={bottomEyelidRef}
        className="absolute bottom-0 left-0 right-0 bg-black h-[50%] transform-origin-bottom"
      />
      
      {/* Eye veins - subtle blood vessel texture */}
      <div 
        ref={veinsRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 30%, rgba(255, 255, 255, 0.1) 32%, transparent 34%), 
                          radial-gradient(circle at 40% 60%, transparent 40%, rgba(255, 50, 50, 0.08) 42%, transparent 44%)`,
          backgroundSize: '100% 100%, 200% 200%',
        }}
      />
      
      {/* Iris glow effect */}
      <div 
        ref={irisGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full opacity-0"
        style={{ 
          boxShadow: '0 0 40px 10px rgba(76, 29, 149, 0.6)',
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.8) 0%, rgba(76, 29, 149, 0.4) 60%, transparent 80%)'
        }}
      />
      
      {/* Main iris */}
      <div 
        ref={irisRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full opacity-0"
        style={{ 
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.9) 0%, rgba(67, 56, 202, 0.8) 40%, rgba(55, 48, 163, 0.7) 60%, rgba(17, 24, 39, 0.8) 80%)'
        }}
      />
      
      {/* Iris texture details */}
      <div 
        ref={irisTextureRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full opacity-0"
        style={{ 
          backgroundImage: `
            repeating-radial-gradient(circle at center, 
              transparent 25px, 
              rgba(255, 255, 255, 0.1) 27px, 
              transparent 29px, 
              transparent 35px,
              rgba(255, 255, 255, 0.05) 37px,
              transparent 39px
            )
          `,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Pupil */}
      <div 
        ref={pupilRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] rounded-full bg-black opacity-0"
        style={{
          boxShadow: 'inset 0 0 10px 5px rgba(0, 0, 0, 0.8)'
        }}
      />
      
      {/* Light reflection highlight */}
      <div 
        ref={reflectionRef}
        className="absolute top-[calc(50%-20px)] left-[calc(50%-5px)] w-[25px] h-[25px] rounded-full bg-white opacity-0"
        style={{ 
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)'
        }}
      />
    </div>
  );
}
