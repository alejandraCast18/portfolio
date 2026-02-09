'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export const PortfolioSection = () => {
  const projects = [
    {
      title: 'SAAS ARCHITECTURE',
      tag: 'Next.js',
      info: 'Infraestructura escalable',
    },
    {
      title: 'HIGH-PERFORMANCE UI',
      tag: 'React',
      info: 'Interfaces de alta gama',
    },
    {
      title: 'NEURAL & AI OPS',
      tag: 'Python',
      info: 'Automatización inteligente',
    },
  ]

  const glowEffect =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)] transition-all duration-700'

  return (
    <section
      id='portfolio'
      className='min-h-screen w-full flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto overflow-hidden relative z-10'
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

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <div className='aspect-video bg-zinc-900/50 border border-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]'>
                <span className='text-[10px] font-mono text-zinc-700 group-hover:text-cyan-400 transition-colors duration-500'>
                  [ INYECTANDO_DATOS ]
                </span>
                <div className='absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500' />

                <div className='absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full'>
                  <span className='text-[8px] font-bold text-zinc-400 uppercase tracking-widest'>
                    {p.tag}
                  </span>
                </div>
              </div>

              <h3 className='text-lg font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-all duration-500 group-hover:translate-x-2'>
                {p.title}
              </h3>
              <p className='text-zinc-500 text-xs mt-1 uppercase tracking-widest font-mono group-hover:text-zinc-300 transition-colors'>
                {p.info}
              </p>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-center mt-8'>
          <Link
            href='/portfolio'
            className='relative group overflow-hidden border border-cyan-400/50 px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
          >
            <span className='relative z-10'>Explorar Universo Completo</span>
            <div className='absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
          </Link>
        </div>
      </div>
    </section>
  )
}
