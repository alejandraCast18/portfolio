'use client'
import { Navbar } from '@/components/ui/Navbar'
import { BubbleBackground } from '@/components/BubbleBackground'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'

export default function PortfolioPage() {
  return (
    <div className='bg-[#020202] min-h-screen text-white'>
      <Navbar />
      <BubbleBackground interactive={true}>
        <main className='relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto'>
          <div className='mb-12'>
            <Link
              href='/'
              className='inline-flex items-center gap-3 relative group overflow-hidden border border-cyan-400/50 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
            >
              <HiArrowLeft className='relative z-10 text-base group-hover:-translate-x-1 transition-transform' />
              <span className='relative z-10'>Regresar al Inicio</span>
              <div className='absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
            </Link>
          </div>

          <h1 className='text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20'>
            Portfolio{' '}
            <span className='italic text-zinc-800 hover:text-cyan-400 transition-all duration-700'>
              Full
            </span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className='aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group hover:border-cyan-400/50 transition-all duration-500 overflow-hidden relative'
              >
                <span className='text-[10px] font-mono text-zinc-600 group-hover:text-cyan-400 transition-colors z-10'>
                  [ Proyecto_0{i}_Full_Data ]
                </span>

                <div className='absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500' />
              </div>
            ))}
          </div>
        </main>
      </BubbleBackground>
    </div>
  )
}
