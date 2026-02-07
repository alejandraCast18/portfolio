'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link' // Importamos Link

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='fixed top-0 w-full z-[100] bg-[#050505]/60 backdrop-blur-xl border-b border-white/5'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
        {/* Cambiamos el div por un Link de Next.js */}
        <Link
          href='/'
          className='relative flex items-center group cursor-pointer z-50'
          onClick={() => {
            // Opcional: Si quieres que además de navegar haga scroll arriba del todo
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <motion.div
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className='relative w-11 h-11 rounded-full border border-cyan-400/30 overflow-hidden bg-[#050505] z-30 group-hover:border-cyan-400 transition-colors shrink-0'
          >
            <Image
              src='/logo.jpg'
              alt='Logo'
              fill
              className='object-cover'
              priority
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='ml-3 text-lg font-black tracking-tighter uppercase whitespace-nowrap z-20 flex items-center'
          >
            <span className='text-white'>CUNAGUAROS</span>
            <span className='text-cyan-400 italic ml-1.5 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]'>
              DEV
            </span>
            <span className='text-slate-500 text-[10px] lowercase ml-1 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] transition-all'>
              .web
            </span>
          </motion.div>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          {[
            'INICIO',
            'NOSOTROS',
            'SERVICIOS',
            'EQUIPO',
            'PORTFOLIO',
            'CONTACTO',
          ].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className='text-[10px] font-bold text-slate-500 hover:text-cyan-400 uppercase tracking-[0.2em] transition-all'
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
