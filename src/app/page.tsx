'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BubbleBackground } from './components/BubbleBackground'

const stackWords = [
  'Scalable_Architecture',
  'Neural_Automation',
  'Cloud_Native_Core',
  'High_Performance_UX',
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stackWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Clase reutilizable para el efecto de los títulos
  const ghostTextClass =
    'text-zinc-800 transition-all duration-700 italic group-hover:text-accent-blue group-hover:drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]'

  return (
    <div className='bg-[#020202] min-h-screen text-white font-sans selection:bg-accent-blue/30'>
      <BubbleBackground interactive={true}>
        <nav className='fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5'>
          <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
            <div
              className='relative flex items-center group cursor-pointer z-50'
              onClick={() => scrollToSection('inicio')}
            >
              <motion.div
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
                className='relative w-11 h-11 rounded-full border border-neon-green/50 overflow-hidden bg-[#050505] z-30 group-hover:border-accent-blue transition-colors shadow-[0_0_15px_rgba(0,255,102,0.2)] shrink-0'
              >
                <Image
                  src='/logo.jpg'
                  alt='Logo'
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className='ml-3 text-lg font-black tracking-tighter uppercase whitespace-nowrap z-20'
              >
                Cunaguaros <span className='text-accent-blue italic'>Dev</span>
                <span className='text-gold/40 text-[10px] lowercase ml-1'>
                  .web
                </span>
              </motion.div>
            </div>

            <div className='hidden md:flex items-center gap-8'>
              {['Inicio', 'Nosotros', 'Servicios', 'Portfolio', 'Contacto'].map(
                (name) => (
                  <button
                    key={name}
                    onClick={() => scrollToSection(name.toLowerCase())}
                    className='text-[10px] font-bold text-slate-500 hover:text-accent-blue uppercase tracking-widest transition-all'
                  >
                    {name}
                  </button>
                ),
              )}
            </div>
          </div>
        </nav>

        <main className='relative z-10'>
          {/* HERO SECTION */}
          <section
            id='inicio'
            className='relative px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center snap-start'
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='group'
            >
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(0,242,255,0.1)]'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute h-full w-full rounded-full bg-accent-blue opacity-75'></span>
                  <span className='h-2 w-2 rounded-full bg-accent-blue'></span>
                </span>
                Sistemas de Alto Rendimiento
              </div>
              <h1 className='text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10 uppercase'>
                Innovación <br />
                <span className={ghostTextClass}>Digital</span>
              </h1>
              <p className='text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed'>
                Arquitectura de software{' '}
                <span className='text-slate-200'>escalable</span> y
                automatización inteligente para empresas que no aceptan límites
                tecnológicos.
              </p>
              <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className='bg-neon-green text-black px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-neon-green/50'
                >
                  Ver Portfolio
                </button>
              </div>
            </motion.div>
          </section>

          {/* SOBRE NOSOTROS */}
          <section
            id='nosotros'
            className='min-h-screen flex items-center px-6 max-w-7xl mx-auto snap-start'
          >
            <div className='grid lg:grid-cols-2 gap-16 items-center w-full'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='space-y-8 group'
              >
                <div className='space-y-4'>
                  <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase'>
                    Sobre Nosotros
                  </h2>
                  <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none'>
                    Ingeniería con <br />
                    <span className={ghostTextClass}>Instinto Digital</span>
                  </h3>
                </div>
                <p className='text-slate-400 text-lg leading-relaxed'>
                  En{' '}
                  <span className='text-accent-blue font-semibold'>
                    CunaguarosDev
                  </span>
                  , nacimos para elevar el estándar del desarrollo de software.
                  Construimos sistemas{' '}
                  <span className='text-white'>robustos</span> que escalan con
                  tu visión.
                </p>
                <div className='grid grid-cols-2 gap-8 pt-8 border-t border-white/5'>
                  <div className='group/stat'>
                    <div className='text-3xl font-black text-white group-hover/stat:text-accent-blue transition-colors'>
                      100%
                    </div>
                    <div className='text-[10px] uppercase tracking-widest text-slate-500'>
                      Código Nativo
                    </div>
                  </div>
                  <div className='group/stat'>
                    <div className='text-3xl font-black text-white group-hover/stat:text-accent-blue transition-colors'>
                      24/7
                    </div>
                    <div className='text-[10px] uppercase tracking-widest text-slate-500'>
                      Arquitectura Cloud
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='relative'
              >
                <div className='absolute w-64 h-64 bg-accent-blue/20 rounded-full blur-[80px] -z-10 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                <div className='relative w-full max-w-lg mx-auto p-px rounded-2xl bg-linear-to-br from-accent-blue/40 to-transparent shadow-2xl overflow-hidden backdrop-blur-md'>
                  <div className='bg-[#0a0a0a]/90 p-8 rounded-[15px] font-mono text-xs leading-relaxed'>
                    <div className='flex gap-2 mb-6'>
                      <div className='w-2.5 h-2.5 rounded-full bg-red-500/40' />
                      <div className='w-2.5 h-2.5 rounded-full bg-yellow-500/40' />
                      <div className='w-2.5 h-2.5 rounded-full bg-green-500/40' />
                    </div>
                    <code>
                      <span className='text-neon-green'>class</span>{' '}
                      <span className='text-white'>CunaguarosDev</span> {'{'}
                      <br />
                      &nbsp;&nbsp;
                      <span className='text-accent-blue'>
                        constructor
                      </span>() {'{'}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.mission ={' '}
                      <span className='text-slate-300'>
                        &apos;Scale ideas&apos;
                      </span>
                      ;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.stack = [<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className='text-accent-blue'>&quot;</span>
                      <AnimatePresence mode='wait'>
                        <motion.span
                          key={stackWords[index]}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className='text-white inline-block'
                        >
                          {stackWords[index]}
                        </motion.span>
                      </AnimatePresence>
                      <span className='text-accent-blue'>&quot;</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;];
                      <br />
                      &nbsp;&nbsp;{'}'}
                      <br />
                      {'}'}
                    </code>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section
            id='servicios'
            className='min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto snap-start'
          >
            <div className='mb-16 group'>
              <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase mb-4'>
                Especialidades
              </h2>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Diseño & <span className={ghostTextClass}>Desarrollo</span>
              </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  title: 'Landing Pages',
                  tag: 'Next.js • Conversion',
                  desc: 'Interfaces dinámicas enfocadas en convertir visitantes en clientes.',
                  icon: '🎯',
                },
                {
                  title: 'Páginas Web',
                  tag: 'React • TS',
                  desc: 'Desarrollo profesional de alta disponibilidad y rendimiento.',
                  icon: '🌐',
                },
                {
                  title: 'Aplicaciones',
                  tag: 'Software • SaaS',
                  desc: 'Sistemas a medida para optimizar la gestión de tu negocio.',
                  icon: '📱',
                },
                {
                  title: 'E-Commerce',
                  tag: 'Stripe • CMS',
                  desc: 'Tiendas online robustas con gestión de pagos y stock.',
                  icon: '🛍️',
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    backgroundColor: 'rgba(0, 242, 255, 0.03)',
                  }}
                  className='p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-3xl flex flex-col group hover:border-accent-blue/40 transition-all duration-500'
                >
                  <div className='text-3xl mb-6 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(0,242,255,0.6)] transition-all'>
                    {service.icon}
                  </div>
                  <h4 className='text-xl font-bold mb-4 uppercase group-hover:text-accent-blue transition-colors'>
                    {service.title}
                  </h4>
                  <p className='text-slate-500 text-sm leading-relaxed mb-8 grow group-hover:text-slate-200 transition-colors'>
                    {service.desc}
                  </p>
                  <div className='pt-6 border-t border-white/5 font-mono text-[9px] text-slate-600 group-hover:text-accent-blue uppercase tracking-widest transition-colors'>
                    {service.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO */}
          <section
            id='portfolio'
            className='min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto snap-start py-20'
          >
            <div className='mb-16 group'>
              <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase mb-4'>
                Casos de Éxito
              </h2>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Portfolio en <span className={ghostTextClass}>Despliegue</span>
              </h3>
              <p className='text-slate-400 mt-6 max-w-2xl text-lg'>
                Estamos actualizando nuestra galería con los proyectos más
                recientes.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'SaaS Architecture',
                  type: 'Backend • Cloud',
                  desc: 'Sistemas distribuidos de alta disponibilidad diseñados para escalar.',
                  icon: '⚙️',
                },
                {
                  title: 'High-Performance UI',
                  type: 'Frontend • UX',
                  desc: 'Experiencias de usuario ultra-fluidas con renderizado moderno.',
                  icon: '🎨',
                },
                {
                  title: 'Neural & AI Ops',
                  type: 'Automation',
                  desc: 'Optimización de procesos mediante agentes inteligentes.',
                  icon: '🤖',
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: 'rgba(0, 242, 255, 0.3)' }}
                  className='p-8 rounded-3xl border border-white/5 bg-white/1 backdrop-blur-sm group transition-all'
                >
                  <div className='w-full aspect-video rounded-xl bg-slate-900/50 mb-6 overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-accent-blue/20 transition-all'>
                    <span className='text-[10px] text-slate-600 font-mono uppercase tracking-[0.3em] group-hover:text-accent-blue group-hover:animate-pulse transition-colors'>
                      [ Inyectando_Datos ]
                    </span>
                  </div>
                  <h4 className='text-xl font-bold uppercase mb-2 group-hover:text-white transition-colors'>
                    {proj.title}
                  </h4>
                  <p className='text-accent-blue font-mono text-[10px] uppercase tracking-widest mb-4'>
                    {proj.type}
                  </p>
                  <p className='text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors'>
                    {proj.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ARSENAL TECNOLÓGICO */}
          <section className='py-32 px-6'>
            <div className='mb-16 group text-center'>
              <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase mb-4'>
                Stack de Ingeniería
              </h2>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Arsenal <span className={ghostTextClass}>Tecnológico</span>
              </h3>
              <p className='text-slate-400 mt-6 max-w-2xl mx-auto text-lg'>
                Herramientas seleccionadas para máxima escalabilidad y
                rendimiento.
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto'>
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'Python', icon: '🐍' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'n8n', icon: '🐙' },
                { name: 'Docker', icon: '🐋' },
                { name: 'Llama 3', icon: '🦙' },
                { name: 'Supabase', icon: '⚡' },
                { name: 'Vercel', icon: 'V' },
                { name: 'Git', icon: '📜' },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 242, 255, 0.05)',
                    borderColor: 'rgba(0, 242, 255, 0.2)',
                  }}
                  className='flex flex-col items-center justify-center p-8 rounded-xl bg-slate-900/20 border border-white/5 backdrop-blur-sm transition-all group'
                >
                  <div className='text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all'>
                    {tech.icon}
                  </div>
                  <span className='text-slate-500 font-semibold tracking-tight group-hover:text-white transition-colors'>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONTACTO */}
          <section
            id='contacto'
            className='min-h-screen flex flex-col items-center justify-center px-6 snap-start py-24'
          >
            <div className='max-w-2xl w-full'>
              <motion.div className='p-10 md:p-14 rounded-4xl border border-white/5 bg-slate-900/10 backdrop-blur-3xl relative overflow-hidden text-center shadow-2xl transition-all group hover:border-accent-blue/20'>
                <div className='absolute -top-12 -right-12 w-48 h-48 bg-accent-blue/10 rounded-full blur-[60px]' />
                <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none'>
                  ¿Tienes un <br />{' '}
                  <span className={ghostTextClass}>Proyecto?</span>
                </h2>
                <p className='text-slate-500 text-sm md:text-base mb-10 max-w-sm mx-auto group-hover:text-slate-300 transition-colors'>
                  Estamos listos para construir la próxima generación de tu
                  producto digital.
                </p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10'>
                  <a
                    href='mailto:cunaguarosdev@gmail.com'
                    className='w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-blue hover:text-white transition-all'
                  >
                    Enviar Correo
                  </a>
                  <a
                    href='https://wa.me/TUNUMERO'
                    className='w-full sm:w-auto border border-white/10 hover:bg-white/5 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all'
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className='py-12 border-t border-white/5 text-center text-[10px] text-slate-700 uppercase tracking-widest relative z-10'>
          © 2026 CunaguarosDev. Engineering the future.
        </footer>
      </BubbleBackground>
    </div>
  )
}
