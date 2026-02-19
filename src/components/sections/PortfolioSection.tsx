'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      video: 'videos/dorta.mp4',
      github: 'https://github.com/tuusuario/cunaguaros',
      link: 'https://tu-demo.com/cunaguaros',
    },
    {
      id: 2,
      github: 'https://github.com/tuusuario/saas',
      link: 'https://tu-demo.com/saas',
    },
    {
      id: 3,
      github: 'https://github.com/tuusuario/ui',
      link: 'https://tu-demo.com/ui',
    },
  ]

  const glowEffect =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)] transition-all duration-700'

  return (
    <section
      id='portfolio'
      className='min-h-screen w-full flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto overflow-hidden relative z-10 bg-transparent'
    >
      <style jsx>{`
        @keyframes pulse-glow-port {
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
        .mobile-glow-port {
          animation: pulse-glow-port 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-port {
            animation: none;
          }
        }
      `}</style>

      <div className='w-full'>
        <div className='mb-16'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-cyan-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block'
          >
            PROYECTOS ESTRATÉGICOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='text-5xl md:text-8xl font-black uppercase tracking-tighter group leading-none text-white'
          >
            PORTFOLIO EN <br />
            <span
              className={`italic text-zinc-700 block mobile-glow-port ${glowEffect}`}
            >
              DESPLIEGUE
            </span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20'>
          {projects.map((p) => (
            <motion.div
              key={p.id} // <-- ID único del 1 al 3 aplicado aquí
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: p.id * 0.1 }}
              viewport={{ once: true }}
              className='group relative'
            >
              <div className='aspect-video bg-zinc-900/50 border border-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_50px_rgba(0,242,255,0.2)]'>
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700'
                  />
                ) : (
                  <span className='text-[10px] font-mono text-zinc-800 group-hover:text-cyan-400/50 transition-colors duration-500'>
                    [ SIN_PREVISUALIZACIÓN ]
                  </span>
                )}
                <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/10 to-transparent' />
              </div>

              <div className='flex items-center justify-end px-4'>
                <div className='flex items-center gap-5 text-zinc-500'>
                  <Link
                    href={p.github}
                    target='_blank'
                    className='hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all transform hover:scale-110'
                  >
                    <FiGithub size={20} />
                  </Link>
                  <Link
                    href={p.link}
                    target='_blank'
                    className='hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-all transform hover:scale-110'
                  >
                    <FiExternalLink size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-center mt-8'>
          <Link
            href='/portfolio'
            className='relative group overflow-hidden border border-cyan-400/50 px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
          >
            <span className='relative z-10'>Explorar Universo Completo</span>
            <div className='absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
          </Link>
        </div>
      </div>
    </section>
  )
}
