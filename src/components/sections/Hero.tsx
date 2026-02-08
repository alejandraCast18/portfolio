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
      className='min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 overflow-hidden'
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 bg-purple-600/20 blur-[120px] rounded-full -z-10 pointer-events-none' />

      <div className='mb-6 flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20'>
        <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse' />
        <span className='text-[9px] font-bold tracking-[0.2em] text-cyan-400 uppercase'>
          Sistemas de alto rendimiento
        </span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-7xl md:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-6 group cursor-default'
      >
        <span className='text-white block'>Innovación</span>
        <span className={`text-zinc-800 italic block ${glowTitle}`}>
          Digital
        </span>
      </motion.h1>

      <p className='text-slate-400 text-sm md:text-lg max-w-2xl mb-10 font-light leading-relaxed'>
        Arquitectura de software <span className='text-white'>escalable</span> y
        automatización inteligente para empresas que no aceptan límites
        tecnológicos.
      </p>

      <button
        onClick={scrollToPortfolio}
        className='relative group overflow-hidden border border-cyan-400/50 px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
      >
        <span className='relative z-10'>Iniciar Despliegue</span>
        <div className='absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
      </button>
    </section>
  )
}
