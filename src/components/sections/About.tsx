'use client'

import { motion, Variants } from 'framer-motion'

export const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  }

  const lineVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 },
  }

  // Clase para el efecto de brillo en Desktop (Hover)
  const glowEffect =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-700'

  return (
    <section
      id='nosotros'
      className='min-h-screen py-24 px-6 relative z-10 flex items-center overflow-hidden bg-transparent'
    >
      <style jsx>{`
        @keyframes pulse-glow-about {
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
        .mobile-glow-about {
          animation: pulse-glow-about 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-about {
            animation: none;
          }
        }
      `}</style>

      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-cyan-600/10 blur-[120px] rounded-full -z-10' />

      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className='text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block'>
            SOBRE NOSOTROS
          </span>

          <h2 className='text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 group cursor-default'>
            INGENIERÍA CON <br />
            <span
              className={`text-zinc-700 italic block mobile-glow-about ${glowEffect}`}
            >
              INSTINTO <br /> DIGITAL
            </span>
          </h2>

          <div className='space-y-6 text-zinc-300 text-base md:text-xl font-normal leading-relaxed max-w-xl'>
            <p>
              Somos un equipo de{' '}
              <span className='text-white font-bold'>
                tres ingenieros informáticos
              </span>{' '}
              con base en
              <span className='text-cyan-400'>
                {' '}
                San Cristóbal, Estado Táchira
              </span>
              .
            </p>
            <p>
              En <span className='text-white font-medium'>CunaguarosDev</span>,
              fusionamos la disciplina técnica con la agilidad digital para
              construir sistemas
              <span className='text-white italic'> robustos</span> que escalan
              sin fricción.
            </p>

            <div className='group cursor-default pt-4'>
              <p
                className={`text-zinc-700 italic text-sm md:text-lg leading-snug mobile-glow-about ${glowEffect}`}
              >
                No solo escribimos código; diseñamos la infraestructura del
                futuro desde los Andes venezolanos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='relative group'
        >
          <div className='absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000'></div>

          <div className='relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl'>
            <div className='flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/5'>
              <div className='flex gap-2'>
                <div className='w-3 h-3 rounded-full bg-red-500/40 group-hover:bg-red-500/80 transition-colors' />
                <div className='w-3 h-3 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500/80 transition-colors' />
                <div className='w-3 h-3 rounded-full bg-green-500/40 group-hover:bg-green-500/80 transition-colors' />
              </div>
              <span className='text-[10px] text-slate-500 font-mono italic tracking-tighter'>
                Cunaguaros_Engine.ts
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='p-8 font-mono text-xs md:text-sm leading-relaxed'
            >
              {[
                {
                  label: 'origin',
                  value: "'San Cristóbal, VZLA'",
                  color: 'text-yellow-300',
                },
                { label: 'team_size', value: '3', color: 'text-purple-400' },
                {
                  label: 'stack',
                  value: "['Next.js', 'React', 'TS']",
                  color: 'text-cyan-400',
                },
                {
                  label: 'mission',
                  value: "'Zero_Limits'",
                  color: 'text-green-400',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={lineVariants}
                  className='hover:bg-cyan-500/5 px-2 rounded flex gap-2'
                >
                  <span className='text-zinc-500'>{i + 1}</span>
                  <p>
                    {item.label}:{' '}
                    <span className={item.color}>{item.value}</span>,
                  </p>
                </motion.div>
              ))}

              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className='w-2 h-5 bg-cyan-500 mt-2 ml-6 shadow-[0_0_10px_rgba(6,182,212,1)]'
              />
            </motion.div>

            <div className='px-5 py-2 bg-white/2 border-t border-white/5 flex gap-4 justify-end'>
              <span className='text-[9px] text-cyan-500/50 font-mono uppercase tracking-widest animate-pulse'>
                Active_Node_Tachira
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
