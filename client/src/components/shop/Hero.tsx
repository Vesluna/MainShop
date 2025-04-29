import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  // Enhanced header animation using GSAP
  useEffect(() => {
    if (!headingRef.current) return;
    
    const heading = headingRef.current;
    
    // Split text into spans for individual letter animation
    const text = heading.textContent || '';
    heading.textContent = '';
    
    const letters = text.split('');
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(40px) rotateY(40deg)';
      span.className = 'inline-block origin-center transform';
      heading.appendChild(span);
    });
    
    // Animate each letter with a stagger effect
    gsap.to(heading.children, {
      opacity: 1,
      y: 0,
      rotateY: 0,
      stagger: 0.05,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.5
    });
    
    // Parallax effect for background
    if (bgRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!bgRef.current) return;
        
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        
        gsap.to(bgRef.current, {
          x: moveX * -0.01,
          y: moveY * -0.01,
          duration: 1.2,
          ease: "power1.out"
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  return (
    <section className="relative bg-dark text-white overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 z-0 scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="container mx-auto px-4 py-28 md:py-40 relative z-10">
        <div className="max-w-2xl perspective-500">
          <h1 
            ref={headingRef}
            className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-6 text-white"
          >
            Distinctive Elegance Awaits
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.3, 
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-lg" 
          >
            Discover our curated collection of premium lifestyle pieces, each uniquely designed to elevate your personal expression.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.6, 
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#products" 
              className="bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              Explore Collection
            </a>
            <a 
              href="#" 
              className="bg-transparent border border-white/50 text-white font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
