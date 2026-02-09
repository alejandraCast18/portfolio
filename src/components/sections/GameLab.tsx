'use client'

import { motion } from 'framer-motion'
import { SiGodotengine, SiRoblox, SiBlender } from 'react-icons/si'
import { GiGamepad } from 'react-icons/gi'

export const GameLab = () => {
  const games = [
    {
      name: 'Godot Engine',
      task: 'Desarrollo de mecánicas y físicas 2D/3D de alto rendimiento.',
      icon: <SiGodotengine />,
      color: 'group-hover:text-[#478cbf]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(71,140,191,0.2)]',
    },
    {
      name: 'Roblox Studio',
      task: 'Creación de experiencias multijugador masivas y monetización Luau.',
      icon: <SiRoblox />,
      color: 'group-hover:text-[#f33333]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(243,51,51,0.2)]',
    },
    {
      name: 'Blender 3D',
      task: 'Modelado, rigging y assets optimizados para entornos digitales.',
      icon: <SiBlender />,
      color: 'group-hover:text-[#ea7600]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(234,118,0,0.2)]',
    },
    {
      name: 'Aseprite',
      task: 'Arte de pixel perfeccionado para estéticas retro y modernas.',
      icon: <GiGamepad />,
      color: 'group-hover:text-[#7d929e]',
      glow: 'group-hover:shadow-[0_0_30px_rgba(125,146,158,0.2)]',
    },
  ]

  const glowTitle =
    'group-hover:text-purple-400 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-700'

  return (
    <section
      id='gamelab'
      className='min-h-screen w-full flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto overflow-hidden relative z-10'
    >
      <style jsx>{`
        @keyframes pulse-glow-game {
          0%,
          100% {
            text-shadow: 0 0 0px rgba(168, 85, 247, 0);
            color: #3f3f46;
          }
          50% {
            text-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
            color: #a855f7;
          }
        }
        .mobile-glow-game {
          animation: pulse-glow-game 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-game {
            animation: none;
          }
        }
      `}</style>

      <div className='flex flex-col items-center mb-16 md:mb-24 text-center'>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-purple-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block'
        >
          División Especializada
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-5xl md:text-8xl font-black uppercase group leading-none text-white tracking-tighter'
        >
          GAME <br />
          <span
            className={`italic text-zinc-700 block mobile-glow-game ${glowTitle}`}
          >
            LABORATORY
          </span>
        </motion.h2>
        <p className='text-zinc-400 text-sm md:text-lg max-w-2xl mt-8 font-light'>
          No solo construimos software; creamos mundos inmersivos. Nuestra
          capacidad técnica se extiende al desarrollo de videojuegos con
          estándares de industria.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {games.map((game, index) => (
          <motion.div
            key={game.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group flex flex-col p-8 border border-white/5 rounded-3xl bg-purple-900/5 backdrop-blur-md transition-all duration-500 cursor-default ${game.glow} hover:border-purple-500/40 hover:-translate-y-2`}
          >
            <div
              className={`text-4xl md:text-5xl mb-6 text-zinc-600 transition-all duration-500 group-hover:scale-110 ${game.color}`}
            >
              {game.icon}
            </div>

            <h3 className='font-black uppercase text-xs md:text-sm tracking-[0.2em] text-zinc-200 mb-2 transition-colors duration-500 group-hover:text-white'>
              {game.name}
            </h3>

            <p className='text-zinc-500 text-[10px] md:text-xs leading-relaxed font-medium transition-colors duration-500 group-hover:text-zinc-300'>
              {game.task}
            </p>

            <div className='mt-6 flex gap-1'>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className='h-1 w-4 bg-purple-500/20 rounded-full group-hover:bg-purple-500/60 transition-colors'
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
