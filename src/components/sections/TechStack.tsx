'use client'

import { 
  SiReact, 
  SiNextdotjs, 
  SiFramer, 
  SiTailwindcss, 
  SiTypescript, 
  SiSupabase, 
  SiN8N, 
  SiDocker 
} from 'react-icons/si'

export const TechStack = () => {
  const techs = [
    { 
      name: 'React', 
      icon: <SiReact />, 
      color: 'group-hover:text-[#61DAFB]', // Azul React
      glow: 'group-hover:shadow-[0_0_30px_rgba(97,218,251,0.25)] group-hover:border-[#61DAFB]/50'
    },
    { 
      name: 'Next.js', 
      icon: <SiNextdotjs />, 
      color: 'group-hover:text-white', // Blanco Next
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:border-white/50'
    },
    { 
      name: 'Framer Motion', 
      icon: <SiFramer />, 
      color: 'group-hover:text-[#0055FF]', // Azul Framer
      glow: 'group-hover:shadow-[0_0_30px_rgba(0,85,255,0.25)] group-hover:border-[#0055FF]/50'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss />, 
      color: 'group-hover:text-[#06B6D4]', // Cian Tailwind
      glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] group-hover:border-[#06B6D4]/50'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript />, 
      color: 'group-hover:text-[#3178C6]', // Azul TS
      glow: 'group-hover:shadow-[0_0_30px_rgba(49,120,198,0.25)] group-hover:border-[#3178C6]/50'
    },
    { 
      name: 'Supabase', 
      icon: <SiSupabase />, 
      color: 'group-hover:text-[#3ECF8E]', // Verde Supabase
      glow: 'group-hover:shadow-[0_0_30px_rgba(62,207,142,0.25)] group-hover:border-[#3ECF8E]/50'
    },
    { 
      name: 'n8n', 
      icon: <SiN8N />, 
      color: 'group-hover:text-[#FF6D5A]', // Naranja n8n
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,109,90,0.25)] group-hover:border-[#FF6D5A]/50'
    },
    { 
      name: 'Docker', 
      icon: <SiDocker />, 
      color: 'group-hover:text-[#2496ED]', // Azul Docker
      glow: 'group-hover:shadow-[0_0_30px_rgba(36,150,237,0.25)] group-hover:border-[#2496ED]/50'
    },
  ]

  return (
    <section className='h-screen w-full flex flex-col justify-center px-6 max-w-6xl mx-auto overflow-hidden'>
      <h2 className='text-4xl md:text-7xl font-black uppercase text-center mb-16 group leading-none'>
        ARSENAL{' '}
        <span className='italic text-zinc-800 transition-all duration-500 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)]'>
          TECNOLÓGICO
        </span>
      </h2>
      
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {techs.map((t) => (
          <div
            key={t.name}
            className={`group flex flex-col items-center justify-center py-8 md:py-12 border border-white/5 rounded-3xl bg-[#0A0A0A]/50 backdrop-blur-sm transition-all duration-500 cursor-default ${t.glow}`}
          >
            {/* El icono usa t.color para encenderse con su color de marca */}
            <div className={`text-3xl md:text-4xl mb-4 text-zinc-600 transition-colors duration-500 ${t.color}`}>
              {t.icon}
            </div>
            <span className='font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] text-zinc-500 transition-colors duration-500 group-hover:text-white'>
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}