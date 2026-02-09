'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const team = [
  {
    name: 'RAÚL RANGEL',
    role: 'INGENIERO LEAD / FULLSTACK',
    image: '/1.jpg',
    desc: 'Arquitecto principal de sistemas, especializado en gestionar soluciones integrales de alto rendimiento y escalabilidad masiva.',
    links: {
      github: 'https://github.com/RaulRangelxD',
      linkedin: 'https://www.linkedin.com/in/raul-rangel-765693258',
    },
  },
  {
    name: 'ALEJANDRA CHACÓN',
    role: 'INGENIERA UI DESIGN / FULLSTACK',
    image: '/2.jpg',
    desc: 'Experta en fusionar la potencia del código con interfaces intuitivas y estéticas vanguardistas que elevan la experiencia a niveles premium.',
    links: {
      github: 'https://github.com/alejandraCast18',
      linkedin: 'https://www.linkedin.com/in/alejandra-cast1811',
    },
  },
  {
    name: 'DEIVID VARGAS',
    role: 'INGENIERO BACKEND / FULLSTACK',
    image: '/3.jpg',
    desc: 'Especialista en lógica de servidor, bases de datos robustas y la optimización de procesos críticos de infraestructura de misión compleja.',
    links: {
      github: 'https://github.com/DeividVarg',
      linkedin: 'https://www.linkedin.com/in/deivid-vargas-b57993350',
    },
  },
]

export const Team = () => {
  const glowTitle =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-700'

  return (
    <section
      id='equipo'
      className='min-h-screen w-full flex flex-col justify-center py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden relative z-10'
    >
      <style jsx>{`
        @keyframes pulse-glow-team {
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
        .mobile-glow-team {
          animation: pulse-glow-team 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-team {
            animation: none;
          }
        }
      `}</style>

      {/* Ajusté el margen inferior de mb-24 a mb-8 para que las cards suban */}
      <div className='w-full mb-8 md:mb-10'>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-cyan-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block'
        >
          Talento Humano
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='text-5xl md:text-8xl font-black uppercase group leading-none text-white tracking-tighter'
        >
          NÚCLEO DE <br />
          <span
            className={`text-zinc-700 italic block mobile-glow-team ${glowTitle}`}
          >
            INGENIERÍA
          </span>
        </motion.h2>
      </div>

      <div className='grid md:grid-cols-3 gap-12 lg:gap-16 items-start'>
        {team.map((m, index) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className='group cursor-default'
          >
            <div className='relative aspect-3/4 rounded-3xl overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-700 bg-zinc-900'>
              <Image
                src={m.image}
                alt={m.name}
                fill
                className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity' />
            </div>

            <div className='space-y-4'>
              <div>
                <h4 className='text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-500'>
                  {m.name}
                </h4>
                <div className='flex items-center gap-2 mt-1'>
                  <div className='h-px w-4 bg-cyan-500' />
                  <p className='text-cyan-400 text-[10px] font-bold font-mono tracking-widest uppercase'>
                    {m.role}
                  </p>
                </div>
              </div>

              <p className='text-zinc-300 text-sm md:text-base font-normal leading-relaxed group-hover:text-zinc-100 transition-colors'>
                {m.desc}
              </p>

              <div className='flex gap-5 pt-2 opacity-40 group-hover:opacity-100 transition-all duration-500'>
                <a
                  href={m.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-cyan-400 transition-colors transform hover:scale-110'
                  title='GitHub Profile'
                >
                  <SiGithub size={22} />
                </a>
                <a
                  href={m.links.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-cyan-400 transition-colors transform hover:scale-110'
                  title='LinkedIn Profile'
                >
                  <SiLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
