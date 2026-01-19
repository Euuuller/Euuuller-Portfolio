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
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);

    const handleLinkHover = () => setIsHovered(true);
    const handleLinkLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    // Cleanup and re-add listeners periodically for dynamic content
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      newElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHover); // Avoid duplicates
        el.removeEventListener('mouseleave', handleLinkLeave);
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && typeof window !== 'undefined') {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return null;
    }
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference">
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

export default CustomCursor;