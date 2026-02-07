'use client'
import { motion } from 'framer-motion'

export const Services = () => {
  const especialidades = [
    {
      title: 'LANDING PAGES',
      tech: 'NEXT.JS',
      icon: '🎯',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
      color: 'from-cyan-500/10',
    },
    {
      title: 'PÁGINAS WEB',
      tech: 'REACT • TS',
      icon: '🌐',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
      color: 'from-cyan-500/10',
    },
    {
      title: 'APLICACIONES',
      tech: 'SOFTWARE • SAAS',
      icon: '📱',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
      color: 'from-cyan-500/10',
    },
    {
      title: 'E-COMMERCE',
      tech: 'STRIPE • CMS',
      icon: '🛍️',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
      color: 'from-cyan-500/10',
    },
  ]

  return (
    <section
      id='servicios'
      className='h-screen w-full px-6 flex flex-col justify-center relative z-10 overflow-hidden'
    >
      {/* Eliminado el bg-black para que se vea la animación de lava del fondo */}
      
      <div className='max-w-7xl mx-auto w-full'>
        {/* Cabecera muy compacta */}
        <div className='mb-4'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-1 block'
          >
            ESPECIALIDADES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none'
          >
            DISEÑO & <br />
            <span className='text-zinc-500 italic transition-all duration-500 hover:text-cyan-400 hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.6)] cursor-default'>
              DESARROLLO
            </span>
          </motion.h2>
        </div>

        {/* Grid ajustado para no tapar el fondo */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {especialidades.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='relative group'
            >
              {/* Tarjeta con transparencia (bg-black/40) para ver la lava atrás */}
              <div
                className={`relative h-57.5 bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/30 group-hover:-translate-y-1 ${item.glow}`}
              >
                {/* Reflejo de cristal al pasar el mouse */}
                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent' />
                
                <div className='relative h-full p-6 flex flex-col justify-between z-10'>
                  <div className='text-3xl group-hover:scale-110 transition-transform duration-500 origin-left'>
                    {item.icon}
                  </div>

                  <div>
                    <h3 className='text-lg font-black text-white tracking-tight uppercase leading-tight mb-2'>
                      {item.title}
                    </h3>

                    <div className='flex items-center gap-2'>
                      <div className='h-px w-4 bg-cyan-500/50 group-hover:w-8 transition-all duration-500' />
                      <span className='text-[8px] font-bold text-zinc-500 tracking-widest group-hover:text-cyan-400 transition-colors uppercase'>
                        {item.tech}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}