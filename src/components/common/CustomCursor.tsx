import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth physics for the trailing circle
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let rafId: number | null = null;
    
    const moveCursor = (e: MouseEvent) => {
      if (rafId) return; // Throttle to one update per frame
      
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
        rafId = null;
      });
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);

    // Event Delegation for Hover Effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target or its closest clickable ancestor is interactive
      if (target.matches('a, button, input, textarea, [role="button"]') || target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.matches('a, button, input, textarea, [role="button"]') || target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && typeof window !== 'undefined') {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return null;
    }
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main Dot */}
      <motion.div
        className="absolute w-2.5 h-2.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="absolute border border-white rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovered ? 64 : 24,
          height: isHovered ? 64 : 24,
          opacity: isVisible ? 0.6 : 0,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5
        }}
      />
    </div>
  );
};

export default React.memo(CustomCursor);
