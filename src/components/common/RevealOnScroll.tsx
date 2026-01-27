import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25,
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },  // Removed expensive blur filter
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,  // Reduced from 0.8s for snappier feel
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        style={{ willChange: "opacity, transform, filter" }} // Hint to browser for GPU
      >
        {children}
      </motion.div>
    </div>
  );
};
