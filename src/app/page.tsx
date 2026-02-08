'use client'
import { Navbar } from '@/components/ui/Navbar'
import { BubbleBackground } from '@/components/BubbleBackground'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { Team } from '@/components/sections/Team'
import { Contact } from '@/components/sections/Contact'
import { TechStack } from '@/components/sections/TechStack'
import { Services } from '@/components/sections/Services'
import Link from 'next/link'
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si'

export default function Home() {
  return (
    <div className='min-h-screen text-white selection:bg-cyan-400/30'>
      <Navbar />
      <BubbleBackground interactive={true}>
        <main className='relative z-10 bg-transparent flex flex-col'>
          <Hero />
          <About />
          <Services />
          <Team />
          <PortfolioSection />
          <TechStack />
          <Contact />

          <Footer />
        </main>
      </BubbleBackground>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className='w-full py-12 px-6 border-t border-white/5 bg-[#050505]/50 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='flex flex-col items-center md:items-start'>
          <div className='text-white font-black tracking-tighter text-xl mb-2'>
            CUNAGUAROS <span className='text-cyan-400'>DEV</span>
            <span className='text-[10px] text-zinc-500 font-mono ml-1'>
              .web
            </span>
          </div>
          <p className='text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]'>
            Sistemas de alto rendimiento
          </p>
        </div>

        <div className='text-center'>
          <p className='text-zinc-400 text-[11px] font-mono uppercase tracking-widest'>
            © 2026 — Creado y desarrollado por{' '}
            <span className='text-white hover:text-cyan-400 transition-colors cursor-pointer'>
              Alejandra Chacón
            </span>{' '}
            de <span className='text-cyan-400 font-bold'>CunaguarosDev</span>
          </p>
        </div>

        <div className='flex gap-6'>
          <Link
            href='#'
            className='text-zinc-500 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]'
          >
            <SiInstagram size={18} />
          </Link>
          <Link
            href='#'
            className='text-zinc-500 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]'
          >
            <SiLinkedin size={18} />
          </Link>
          <Link
            href='#'
            className='text-zinc-500 hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]'
          >
            <SiGithub size={18} />
          </Link>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-12 h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent opacity-30' />
    </footer>
  )
}
