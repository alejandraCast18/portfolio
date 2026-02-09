'use client'

import Link from 'next/link'
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full py-16 px-6 border-t border-white/5 bg-[#050505]/80 backdrop-blur-xl relative z-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-10'>
          <div className='flex flex-col'>
            <div className='text-white font-black tracking-tighter text-2xl mb-2 group cursor-default'>
              CUNAGUAROS{' '}
              <span className='text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all'>
                DEV
              </span>
              <span className='text-[10px] text-zinc-600 font-mono ml-2 uppercase tracking-widest'>
                v2.0.26
              </span>
            </div>
            <p className='text-zinc-400 text-[11px] font-mono uppercase tracking-[0.3em] leading-relaxed'>
              Ingeniería de software <br />
              <span className='text-zinc-600'>Desde los Andes, Venezuela.</span>
            </p>
          </div>

          <div className='flex flex-col items-center md:items-center gap-4'>
            <div className='flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5'>
              <div className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
              <span className='text-[9px] font-mono text-emerald-500 uppercase tracking-widest'>
                Sistema Operativo
              </span>
            </div>

            <p className='text-zinc-500 text-[10px] font-mono uppercase tracking-widest text-center'>
              © {currentYear} — Desarrollado por{' '}
              <span className='text-zinc-200 hover:text-cyan-400 transition-colors duration-300'>
                Alejandra Chacón
              </span>{' '}
              <br className='md:hidden' />
              <span className='hidden md:inline'> • </span>
              Core Team{' '}
              <span className='text-zinc-300 font-bold'>Cunaguaros</span>
            </p>
          </div>

          <div className='flex flex-col items-end gap-4'>
            <div className='flex gap-6'>
              <Link
                href='https://www.instagram.com/cunaguaros.dev'
                target='_blank'
                className='text-zinc-400 hover:text-pink-500 transition-all transform hover:scale-110'
              >
                <SiInstagram size={20} />
              </Link>
              <Link
                href='#'
                className='text-zinc-400 hover:text-blue-500 transition-all transform hover:scale-110 opacity-30 cursor-not-allowed'
              >
                <SiLinkedin size={20} />
              </Link>
              <Link
                href='#'
                className='text-zinc-400 hover:text-white transition-all transform hover:scale-110 opacity-30 cursor-not-allowed'
              >
                <SiGithub size={20} />
              </Link>
            </div>
            <span className='text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]'>
              Social Terminal
            </span>
          </div>
        </div>

        <div className='mt-16 h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent opacity-30' />

        <div className='mt-8 flex justify-between items-center text-[8px] font-mono text-zinc-700 uppercase tracking-[0.5em]'>
          <span>Built with Next.js & Framer Motion</span>
          <span className='hidden md:block'>7.7667° N, 72.2250° W</span>
        </div>
      </div>
    </footer>
  )
}
