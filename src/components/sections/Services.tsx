'use client'

import { motion, Variants } from 'framer-motion'

export const Services = () => {
  const servicios = [
    {
      title: 'LANDING PAGES',
      description:
        'Conversión máxima con diseños de alto impacto y tiempos de carga instantáneos.',
      tech: 'NEXT.JS • GSAP',
      icon: '🎯',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
    },
    {
      title: 'PÁGINAS WEB',
      description:
        'Presencia digital robusta, adaptable y optimizada para todos los dispositivos.',
      tech: 'REACT • TAILWIND',
      icon: '🌐',
      glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
    },
    {
      title: 'APLICACIONES',
      description:
        'Sistemas complejos y plataformas SaaS diseñadas para escalar globalmente.',
      tech: 'SOFTWARE • CLOUD',
      icon: '📱',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
    },
    {
      title: 'E-COMMERCE',
      description:
        'Tiendas online preparadas para vender, integrando pagos seguros y gestión fácil.',
      tech: 'STRIPE • CMS',
      icon: '🛍️',
      glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
    },
  ]

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const glowEffect =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-700'

  return (
    <section
      id='servicios'
      className='w-full px-6 pt-25 pb-20 min-h-screen flex flex-col items-center relative z-10'
    >
      <style jsx>{`
        @keyframes pulse-glow-svc {
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
        .mobile-glow-svc {
          animation: pulse-glow-svc 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-svc {
            animation: none;
          }
        }
      `}</style>

      <div className='max-w-7xl mx-auto w-full'>
        <div className='mb-20'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block'
          >
            NUESTROS SERVICIOS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none group cursor-default'
          >
            DISEÑO, DESARROLLO <br />
            <span
              className={`text-zinc-700 italic block mobile-glow-svc ${glowEffect}`}
            >
              & OPTIMIZACIÓN
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {servicios.map((svc, index) => (
            <motion.div
              key={svc.title}
              variants={item}
              className='relative group'
            >
              <div
                className={`relative min-h-100 bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/40 group-hover:-translate-y-2 ${svc.glow}`}
              >
                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent' />

                <span className='absolute -right-4 -bottom-4 text-9xl font-black text-white/3 select-none group-hover:text-cyan-500/5 transition-colors duration-700'>
                  0{index + 1}
                </span>

                <div className='relative h-full p-8 flex flex-col justify-between z-10'>
                  <div>
                    <div className='text-4xl mb-8 inline-block p-3 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500 origin-left'>
                      {svc.icon}
                    </div>
                    <h3 className='text-xl font-black text-white tracking-tight uppercase leading-tight mb-4'>
                      {svc.title}
                    </h3>
                    <p className='text-zinc-400 text-sm leading-relaxed font-light'>
                      {svc.description}
                    </p>
                  </div>

                  <div className='mt-8'>
                    <div className='flex items-center gap-3'>
                      <div className='h-px w-8 bg-cyan-500/50 group-hover:w-12 transition-all duration-500' />
                      <span className='text-[10px] font-bold text-zinc-500 tracking-[0.2em] group-hover:text-cyan-400 transition-colors uppercase'>
                        {svc.tech}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
