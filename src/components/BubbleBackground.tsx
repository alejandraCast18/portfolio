'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useEffect, useRef, ReactNode } from 'react'

export interface BubbleBackgroundProps {
  className?: string
  children?: ReactNode
  interactive?: boolean
}

export function BubbleBackground({
  className,
  children,
  interactive = true,
}: BubbleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    if (!interactive) return
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [interactive, handleMouseMove])

  const colors = {
    purple: '127, 13, 242',
    blue: '0, 100, 255',
    cyan: '0, 255, 150',
  }

  const makeGradient = (color: string) =>
    `radial-gradient(circle at center, rgba(${color}, 0.8) 0%, rgba(${color}, 0) 60%)`

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen w-full bg-[#050505] overflow-hidden ${className || ''}`}
    >
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <svg className='hidden'>
          <defs>
            <filter id='bubble-goo'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='12' />
              <feColorMatrix
                values='1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 22 -11'
              />
            </filter>
          </defs>
        </svg>

        <div
          className='absolute inset-0'
          style={{ filter: 'url(#bubble-goo) blur(35px)' }}
        >
          <motion.div
            className='absolute rounded-full mix-blend-hard-light w-[90vw] h-[90vh]'
            style={{ background: makeGradient(colors.purple) }}
            animate={{
              x: [-200, 150, -100, 200, -200],
              y: [-150, 200, 150, -100, -150],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className='absolute rounded-full mix-blend-hard-light w-[65vw] h-[65vh]'
            style={{
              background: makeGradient(colors.blue),
              left: '-20%',
              top: '20%',
            }}
            animate={{
              x: [0, 220, 120, 260, 40],
              y: [0, -80, 120, -40, 0],
              scale: [1, 1.05, 0.98, 1.06, 1],
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {interactive && (
            <motion.div
              className='absolute rounded-full mix-blend-hard-light opacity-80 w-[70vw] h-[70vh]'
              style={{
                background: makeGradient(colors.cyan),
                x: springX,
                y: springY,
                left: '15vw',
                top: '15vh',
              }}
            />
          )}
        </div>
      </div>

      <div className='relative z-10 w-full'>{children}</div>
    </div>
  )
}
