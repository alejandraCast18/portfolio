'use client'

import {
  motion,
  type SpringOptions,
  useMotionValue,
  useSpring,
} from 'framer-motion'
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

  // 1. BURBUJA VERDE (Puntero): Inercia media para que no sea rígida
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  // 2. BURBUJA MORADA: Inercia muy baja (PESADA) para que flote lejos del verde
  const purpleSpringX = useSpring(mouseX, { stiffness: 8, damping: 35 })
  const purpleSpringY = useSpring(mouseY, { stiffness: 8, damping: 35 })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Centramos el eje de movimiento
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
    purple: '127, 13, 242', // Tu morado
    blue: '0, 100, 255',   // Azul de profundidad
    cyan: '0, 255, 150',   // El verde/cian del video
  }

  const makeGradient = (color: string) =>
    `radial-gradient(circle at center, rgba(${color}, 0.8) 0%, rgba(${color}, 0) 60%)`

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen w-full bg-[#050505] overflow-hidden ${className || ''}`}
    >
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <svg className='hidden' aria-hidden='true'>
          <defs>
            <filter id='bubble-goo'>
              {/* Este filtro es el que hace que se "peguen" como líquido al cruzarse */}
              <feGaussianBlur in='SourceGraphic' stdDeviation='12' />
              <feColorMatrix
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -11'
              />
            </filter>
          </defs>
        </svg>

        <div
          className='absolute inset-0'
          style={{ filter: 'url(#bubble-goo) blur(35px)' }}
        >
          {/* BURBUJA MORADA GIGANTE (Inercia lenta) */}
          <motion.div
            className='absolute rounded-full mix-blend-hard-light w-[90vw] h-[90vh] top-[5%] left-[5%]'
            style={{ 
              background: makeGradient(colors.purple),
              x: purpleSpringX,
              y: purpleSpringY 
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* BURBUJA AZUL (Rotación de ambiente) */}
          <motion.div
            className='absolute inset-0 flex justify-center items-center'
            style={{ transformOrigin: 'calc(50% - 300px) center' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            <div
              className='rounded-full mix-blend-hard-light w-[70%] h-[70%]'
              style={{ background: makeGradient(colors.darkblue) }}
            />
          </motion.div>

          {/* BURBUJA VERDE/CIAN (Puntero - Inercia media) */}
          {interactive && (
            <motion.div
              className='absolute rounded-full mix-blend-hard-light opacity-80 w-[70vw] h-[70vh]'
              style={{
                background: makeGradient(colors.cyan),
                x: springX,
                y: springY,
                left: '15vw',
                top: '15vh'
              }}
            />
          )}
        </div>
      </div>

      <div className='relative z-10 w-full'>{children}</div>
    </div>
  )
}