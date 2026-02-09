'use client'

import { motion } from 'framer-motion'

export const Hero = () => {
  const glowTitle =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)] transition-all duration-700'

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='inicio'
      className='min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 relative z-10'
    >
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            text-shadow: 0 0 0px rgba(34, 211, 238, 0);
            color: #3f3f46;
          }
          50% {
            text-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
            color: #22d3ee;
          }
        }
        .mobile-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow {
            animation: none;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-6 flex items-center gap-2 px-3 md:px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20'
      >
        <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse' />
        <span className='text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-cyan-400 uppercase whitespace-nowrap'>
          Sistemas de alto rendimiento
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-5xl sm:text-7xl md:text-[120px] lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-6 group cursor-default'
      >
        <span className='text-white block'>Innovación</span>
        <span className={`text-zinc-700 italic block mobile-glow ${glowTitle}`}>
          Digital
        </span>
      </motion.h1>

      <p className='text-zinc-300 text-sm sm:text-base md:text-xl max-w-[90%] md:max-w-2xl mb-10 font-normal leading-relaxed'>
        Arquitectura de software{' '}
        <span className='text-cyan-400 font-bold'>escalable</span> y
        automatización inteligente para empresas que no aceptan límites
        tecnológicos.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToPortfolio}
        className='relative group overflow-hidden border border-cyan-400/50 px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
      >
        <span className='relative z-10'>Iniciar Despliegue</span>
        <div className='absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
      </motion.button>
    </section>
  )
}
