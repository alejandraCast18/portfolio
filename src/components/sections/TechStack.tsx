'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiN8N,
  SiDocker,
} from 'react-icons/si'

export const TechStack = () => {
  const techs = [
    {
      name: 'React',
      use: 'Interfaces dinámicas de alto rendimiento.',
      icon: <SiReact />,
      color: 'group-hover:text-[#61DAFB]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(97,218,251,0.2)] group-hover:border-[#61DAFB]/40',
    },
    {
      name: 'Next.js',
      use: 'SSR y optimización SEO de vanguardia.',
      icon: <SiNextdotjs />,
      color: 'group-hover:text-white',
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:border-white/40',
    },
    {
      name: 'Framer Motion',
      use: 'Animaciones fluidas y experiencia premium.',
      icon: <SiFramer />,
      color: 'group-hover:text-[#0055FF]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(0,85,255,0.2)] group-hover:border-[#0055FF]/40',
    },
    {
      name: 'Tailwind CSS',
      use: 'Estilizado ultra-rápido y escalable.',
      icon: <SiTailwindcss />,
      color: 'group-hover:text-[#06B6D4]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:border-[#06B6D4]/40',
    },
    {
      name: 'TypeScript',
      use: 'Código robusto y libre de errores.',
      icon: <SiTypescript />,
      color: 'group-hover:text-[#3178C6]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(49,120,198,0.2)] group-hover:border-[#3178C6]/40',
    },
    {
      name: 'Supabase',
      use: 'Backend escalable y bases de datos en tiempo real.',
      icon: <SiSupabase />,
      color: 'group-hover:text-[#3ECF8E]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(62,207,142,0.2)] group-hover:border-[#3ECF8E]/40',
    },
    {
      name: 'n8n',
      use: 'Automatización inteligente de flujos de trabajo.',
      icon: <SiN8N />,
      color: 'group-hover:text-[#FF6D5A]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,109,90,0.2)] group-hover:border-[#FF6D5A]/40',
    },
    {
      name: 'Docker',
      use: 'Contenerización para despliegues consistentes.',
      icon: <SiDocker />,
      color: 'group-hover:text-[#2496ED]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(36,150,237,0.2)] group-hover:border-[#2496ED]/40',
    },
  ]

  const glowTitle =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)] transition-all duration-700'

  return (
    <section
      id='arsenal'
      className='min-h-screen w-full flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto overflow-hidden relative z-10'
    >
      <style jsx>{`
        @keyframes pulse-glow-tech {
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
        .mobile-glow-tech {
          animation: pulse-glow-tech 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-tech {
            animation: none;
          }
        }
      `}</style>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='text-5xl md:text-8xl font-black uppercase text-center mb-16 md:mb-24 group leading-none text-white tracking-tighter'
      >
        ARSENAL <br />
        <span
          className={`italic text-zinc-700 block mobile-glow-tech ${glowTitle}`}
        >
          TECNOLÓGICO
        </span>
      </motion.h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {techs.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`group flex flex-col p-8 border border-white/5 rounded-3xl bg-zinc-900/30 backdrop-blur-md transition-all duration-500 cursor-default ${t.glow} hover:-translate-y-2`}
          >
            <div
              className={`text-4xl md:text-5xl mb-6 text-zinc-600 transition-all duration-500 group-hover:scale-110 ${t.color}`}
            >
              {t.icon}
            </div>

            <h3 className='font-black uppercase text-xs md:text-sm tracking-[0.2em] text-zinc-200 mb-2 transition-colors duration-500 group-hover:text-white'>
              {t.name}
            </h3>

            <p className='text-zinc-500 text-[10px] md:text-xs leading-relaxed font-medium transition-colors duration-500 group-hover:text-zinc-300'>
              {t.use}
            </p>

            <div className='mt-6 h-0.5 w-full bg-white/5 overflow-hidden'>
              <div
                className={`h-full w-0 group-hover:w-full transition-all duration-1000 bg-current ${t.color.replace('group-hover:', '')}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
