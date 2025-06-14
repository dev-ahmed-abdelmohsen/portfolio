import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationOptimizedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function AnimationOptimized({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimationOptimizedProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      transform: shouldReduceMotion ? 'none' : 
        direction === 'up' ? 'translateY(20px)' :
        direction === 'down' ? 'translateY(-20px)' :
        direction === 'left' ? 'translateX(20px)' :
        'translateX(-20px)'
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0px) translateX(0px)',
      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
