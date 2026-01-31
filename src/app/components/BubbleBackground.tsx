'use client';

import {
  motion,
  type SpringOptions,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useCallback, useEffect, useRef, ReactNode } from 'react';

export interface BubbleBackgroundProps {
  className?: string;
  children?: ReactNode;
  interactive?: boolean;
  transition?: SpringOptions;
}

export function BubbleBackground({
  className,
  children,
  interactive = true,
  transition = { stiffness: 100, damping: 20 },
}: BubbleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    if (!interactive) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, handleMouseMove]);

  const colors = {
    first: '127, 13, 242', // Púrpura
    second: '0, 217, 255', // Azul
    third: '0, 255, 65', // Verde Neón
    sixth: '0, 255, 150',
  };

  const makeGradient = (color: string) =>
    `radial-gradient(circle at center, rgba(${color}, 0.8) 0%, rgba(${color}, 0) 50%)`;

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen w-full bg-[#050505] ${className || ''}`}
    >
      {/* CAPA DE BURBUJAS FIJA */}
      <div className='fixed inset-0 z-0 pointer-events-none overflow-hidden'>
        <svg className='hidden' aria-hidden='true'>
          <defs>
            <filter id='bubble-goo'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='10' />
              <feColorMatrix
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              />
            </filter>
          </defs>
        </svg>

        <div
          className='absolute inset-0'
          style={{ filter: 'url(#bubble-goo) blur(40px)' }}
        >
          <motion.div
            className='absolute rounded-full mix-blend-hard-light w-[80%] h-[80%] top-[10%] left-[10%]'
            style={{ background: makeGradient(colors.first) }}
            animate={{ y: [-50, 50, -50] }}
            transition={{ duration: 30, repeat: Infinity }}
          />

          <motion.div
            className='absolute inset-0 flex justify-center items-center'
            style={{ transformOrigin: 'calc(50% - 400px) center' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            <div
              className='rounded-full mix-blend-hard-light w-[80%] h-[80%]'
              style={{ background: makeGradient(colors.second) }}
            />
          </motion.div>

          {interactive && (
            <motion.div
              className='absolute rounded-full mix-blend-hard-light opacity-70 w-full h-full'
              style={{
                background: makeGradient(colors.sixth),
                x: springX,
                y: springY,
              }}
            />
          )}
        </div>
      </div>

      {/* CONTENIDO SCROLLEABLE */}
      <div className='relative z-10 w-full'>{children}</div>
    </div>
  );
}
