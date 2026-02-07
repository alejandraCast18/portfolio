'use client'
import { motion } from 'framer-motion'

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section
      id='nosotros'
      className='min-h-screen py-24 px-6 relative z-10 flex items-center overflow-hidden bg-transparent'
    >
      {/* Luces de ambiente */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -z-10' />

      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        {/* TEXTO IZQUIERDO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className='text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block'>
            SOBRE NOSOTROS
          </span>

          <h2 className='text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8'>
            INGENIERÍA CON <br />
            <span className='text-zinc-500 italic transition-all duration-500 hover:text-cyan-400 hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] cursor-default'>
              INSTINTO <br /> DIGITAL
            </span>
          </h2>

          <p className='text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed'>
            En <span className='text-white font-medium'>CunaguarosDev</span>,
            construimos sistemas{' '}
            <span className='text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed italic transition-colors duration-300 hover:text-cyan-400 cursor-default'>
              robustos
            </span>{' '}
            que escalan con tu visión.
          </p>
        </motion.div>

        {/* TARJETA DE CÓDIGO INTERACTIVA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='relative group'
        >
          <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000'></div>

          {/* Único cambio: bg-[#080808] -> bg-black/40 y añadido backdrop-blur-md */}
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
              className='p-8 font-mono text-sm md:text-base leading-relaxed'
            >
              <motion.div variants={lineVariants} className='hover:bg-cyan-500/5 px-2 rounded'>
                <p><span className='text-purple-400'>const</span> <span className='text-cyan-400'>Service</span> = {'{'}</p>
              </motion.div>
              <motion.div variants={lineVariants} className='pl-4 hover:bg-cyan-500/5 px-2 rounded'>
                <p>performance: <span className='text-yellow-300'>&apos;ultra_high&apos;</span>,</p>
              </motion.div>
              <motion.div variants={lineVariants} className='pl-4 hover:bg-cyan-500/5 px-2 rounded'>
                <p>architecture: <span className='text-green-400'>&apos;scalable&apos;</span>,</p>
              </motion.div>
              <motion.div variants={lineVariants} className='pl-4 hover:bg-cyan-500/5 px-2 rounded'>
                <p>delivery: <span className='text-purple-400'>true</span></p>
              </motion.div>
              <motion.div variants={lineVariants} className='hover:bg-cyan-500/5 px-2 rounded'>
                <p>{'}'};</p>
              </motion.div>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className='w-2 h-5 bg-cyan-500 mt-2 ml-1 shadow-[0_0_10px_rgba(6,182,212,1)]'
              />
            </motion.div>

            <div className='px-5 py-2 bg-white/[0.02] border-t border-white/5 flex gap-4'>
              <span className='text-[9px] text-slate-600 font-mono'>Ready</span>
              <span className='text-[9px] text-cyan-500/50 font-mono'>Connected</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}