import Image from 'next/image'

const team = [
  {
    name: 'RAÚL RANGEL',
    role: 'INGENIERO LEAD / FULLSTACK',
    image: '/1.jpg',
    desc: 'Arquitecto principal de sistemas, especializado en gestionar soluciones integrales de alto rendimiento y escalabilidad.',
  },
  {
    name: 'ALEJANDRA CHACÓN',
    role: 'INGENIERA ESPECIALISTA EN UI DESIGN / FULLSTACK',
    image: '/2.jpg',
    desc: 'Experta en fusionar la potencia del código con interfaces intuitivas y estéticas vanguardistas que elevan la experiencia de usuario a niveles premium.',
  },
  {
    name: 'DEIVID VARGAS',
    role: 'INGENIERO BACKEND / FULLSTACK',
    image: '/3.jpg',
    desc: 'Especialista en lógica de servidor, bases de datos robustas y la optimización de procesos críticos de infraestructura.',
  },
]

export const Team = () => {
  const glowTitle =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)] transition-all duration-500'

  return (
    <section
      id='equipo'
      className='min-h-screen w-full flex flex-col justify-center py-12 px-6 max-w-6xl mx-auto overflow-hidden'
    >
      <div className='w-full mb-10'>
        <span className='text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-2 block'>
          Talento Senior
        </span>
        <h2 className='text-4xl md:text-6xl font-black uppercase group leading-none'>
          NÚCLEO DE{' '}
          <span className={`text-zinc-700 italic ${glowTitle}`}>
            INGENIERÍA
          </span>
        </h2>
      </div>

      <div className='grid md:grid-cols-3 gap-8 lg:gap-12 items-start'>
        {team.map((m) => (
          <div key={m.name} className='group cursor-default'>
            <div className='relative aspect-3/4 rounded-4xl overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(0,255,150,0.2)] transition-all duration-500'>
              <Image
                src={m.image}
                alt={m.name}
                fill
                className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105'
              />
            </div>

            <h4 className='text-xl font-black uppercase tracking-tight transition-colors duration-500 group-hover:text-white'>
              {m.name}
            </h4>

            <p className='text-cyan-400 text-[10px] font-mono mt-1 mb-4'>
              {m.role}
            </p>

            <p className='text-slate-400 text-base font-light leading-snug transition-colors duration-500 group-hover:text-slate-200'>
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
