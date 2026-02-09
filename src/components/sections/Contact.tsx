'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export const Contact = () => {
  const [copied, setCopied] = useState(false)

  const email = 'cunaguarosgames@gmail.com'
  const subject = 'Nuevo Proyecto - CunaguarosDev'
  const body =
    'Hola equipo de CunaguarosDev,\n\nTengo una idea para un proyecto y me gustaría trabajarla con ustedes.'

  const handleContact = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    const newWindow = window.open(gmailUrl, '_blank')

    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === 'undefined'
    ) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const glowTitle =
    'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-700'

  return (
    <section
      id='contacto'
      className='h-screen w-full flex flex-col items-center pt-25 pb-5 px-6 relative overflow-hidden'
    >
      <style jsx>{`
        @keyframes pulse-glow-contact {
          0%,
          100% {
            text-shadow: 0 0 0px rgba(34, 211, 238, 0);
            color: #71717a;
          }
          50% {
            text-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
            color: #22d3ee;
          }
        }
        .mobile-glow-contact {
          animation: pulse-glow-contact 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .mobile-glow-contact {
            animation: none;
          }
        }
      `}</style>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 md:w-200 h-100 bg-cyan-500/5 blur-[150px] rounded-full -z-10' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='flex-1 w-full max-w-6xl mx-auto bg-zinc-900/40 border border-white/10 rounded-[3rem] md:rounded-[4rem] flex flex-col justify-center items-center px-8 md:px-16 text-center relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-1000 shadow-2xl'
      >
        <div className='absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500' />

        <div className='relative z-10 w-full'>
          <span className='text-cyan-400 font-bold font-mono text-[9px] md:text-[11px] tracking-[0.5em] uppercase mb-4 md:mb-6 block'>
            CONTACTO DIRECTO
          </span>

          <h2 className='text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-6 md:mb-8 leading-none tracking-tighter text-white text-balance'>
            ¿TIENES UN PROYECTO PARA <br />
            <span
              className={`text-zinc-500 italic block mt-1 mobile-glow-contact ${glowTitle}`}
            >
              HACER REALIDAD?
            </span>
          </h2>

          <p className='text-zinc-300 text-sm md:text-lg max-w-xl mx-auto mb-8 md:mb-12 font-light leading-relaxed'>
            Estamos listos para inyectar ingeniería de alto rendimiento en tu
            visión. Escríbenos y construyamos algo{' '}
            <span className='text-cyan-400 font-medium italic'>
              extraordinario
            </span>{' '}
            juntos.
          </p>

          <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10'>
            <button
              onClick={handleContact}
              className='w-full md:w-auto relative group/btn overflow-hidden border border-cyan-400/50 px-10 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] cursor-pointer active:scale-95'
            >
              <span className='relative z-10 transition-colors duration-500 group-hover/btn:text-white'>
                {copied ? 'EMAIL COPIADO' : 'Iniciar Conexión'}
              </span>
              <div className='absolute inset-0 bg-cyan-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500' />
            </button>

            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
              <span className='text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-1'>
                Terminal de entrada:
              </span>
              <span className='text-white font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors'>
                {email}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
