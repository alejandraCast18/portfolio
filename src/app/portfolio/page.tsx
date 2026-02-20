'use client'
import { Navbar } from '@/components/ui/Navbar'
import { BubbleBackground } from '@/components/BubbleBackground'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowLeft } from 'react-icons/hi'

export default function PortfolioPage() {
  return (
    <div className='bg-[#020202] min-h-screen text-white'>
      <Navbar />
      <BubbleBackground interactive={true}>
        <main className='relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto text-center'>
          {/* Botón regresar */}
          <div className='mb-12 text-left'>
            <Link
              href='/'
              className='inline-flex items-center gap-3 relative group overflow-hidden border border-cyan-400/50 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
            >
              <HiArrowLeft className='relative z-10 text-base group-hover:-translate-x-1 transition-transform' />
              <span className='relative z-10'>Regresar al Inicio</span>
              <div className='absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
            </Link>
          </div>

          <h1 className='text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tight mb-10'>
            Mas proyectos en camino...
          </h1>

          <div className='relative mx-auto max-w-full md:max-w-4xl mb-16 rounded-3xl overflow-hidden border border-cyan-400/30 shadow-[0_0_60px_rgba(0,242,255,0.15)]'>
            <Image
              src='/team.png'
              alt='CunaguarosDev Work In Process'
              width={1200}
              height={800}
              className='w-full h-auto object-cover'
              priority
            />
          </div>

          <div className='max-w-full md:max-w-2xl mx-auto space-y-6 px-4 sm:px-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
              🚧 Ups... estamos creando más magia.
            </h2>

            <p className='text-zinc-400 leading-relaxed text-sm sm:text-base md:text-lg'>
              En{' '}
              <span className='text-cyan-400 font-semibold'>CunaguarosDev</span>{' '}
              no construimos proyectos… construimos experiencias digitales.
              Nuestro equipo está programando nuevas ideas que pronto verán la
              luz.
            </p>

            <p className='text-blue-950-400 font-bold uppercase tracking-widest text-sm sm:text-base md:text-lg lg:text-xl neon-glow'>
              Stay tuned · Code in progress · More coming soon
            </p>
          </div>
        </main>
      </BubbleBackground>

      <style jsx>{`
        .neon-glow {
          text-shadow:
            0 0 3px #00f0ff,
            0 0 6px #00f0ff,
            0 0 12px #00f0ff,
            0 0 24px #00f0ff;
          animation: flicker 2s infinite alternate;
        }

        @keyframes flicker {
          0%,
          19%,
          21%,
          23%,
          25%,
          54%,
          56%,
          100% {
            opacity: 1;
          }
          20%,
          22%,
          24%,
          55% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  )
}
