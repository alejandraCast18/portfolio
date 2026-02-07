import Link from 'next/link'

export const PortfolioSection = () => {
  const projects = [
    { title: 'SAAS ARCHITECTURE', tag: 'Next.js' },
    { title: 'HIGH-PERFORMANCE UI', tag: 'React' },
    { title: 'NEURAL & AI OPS', tag: 'Python' },
  ]

  return (
    /* h-screen y flex para que ocupe toda la pantalla y esté centrado verticalmente */
    <section
      id='portfolio'
      className='h-screen w-full flex flex-col justify-center px-6 max-w-7xl mx-auto overflow-hidden'
    >
      <div className='w-full'>
        <span className='text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 block'>
          Casos de Éxito
        </span>
        <h2 className='text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 group leading-none'>
          PORTFOLIO EN{' '}
          <span className='italic text-zinc-700 transition-all duration-500 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)]'>
            DESPLIEGUE
          </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {projects.map((p) => (
            <div key={p.title} className='group cursor-pointer'>
              {/* CARD ILUMINADA: Efecto de borde y sombra cian intenso en hover */}
              <div className='aspect-video bg-[#0A0A0A] border border-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_40px_rgba(0,242,255,0.2)]'>
                <span className='text-[10px] font-mono text-zinc-800 group-hover:text-cyan-400/60 transition-colors duration-500'>
                  [ Inyectando_Datos ]
                </span>

                {/* Overlay sutil de color en hover */}
                <div className='absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500' />
              </div>

              <h3 className='text-sm font-black uppercase tracking-widest group-hover:text-cyan-400 transition-all duration-500 group-hover:translate-x-2'>
                {p.title}
              </h3>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
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
