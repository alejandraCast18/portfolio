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

  return (
    <div className='bg-[#020202] min-h-screen text-white font-sans selection:bg-neon-green/30'>
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
                className='relative w-11 h-11 rounded-full border border-neon-green/50 overflow-hidden bg-[#050505] z-30 group-hover:border-neon-green transition-colors shadow-[0_0_15px_rgba(0,255,102,0.2)] shrink-0'
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
                <span className='text-white/40 text-[10px] lowercase ml-1'>
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
                    className='text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors'
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
            >
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-[10px] font-bold uppercase tracking-[0.2em] mb-8'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute h-full w-full rounded-full bg-neon-green opacity-75'></span>
                  <span className='h-2 w-2 rounded-full bg-neon-green'></span>
                </span>
                Sistemas de Alto Rendimiento
              </div>
              <h1 className='text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10 uppercase'>
                Engineering <br />
                <span className='bg-linear-to-r from-blue-400 via-accent-blue to-white bg-clip-text text-transparent italic'>
                  The Future
                </span>
              </h1>
              <p className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light'>
                Arquitectura de software escalable y automatización inteligente
                para empresas que no aceptan límites tecnológicos.
              </p>
              <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className='bg-neon-green text-black px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,102,0.3)]'
                >
                  Ver Portfolio
                </button>
                <div className='text-gray-500 font-mono text-[10px] uppercase tracking-widest'>
                  Ready to deploy v2.0.26
                </div>
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
                className='space-y-8'
              >
                <div className='space-y-4'>
                  <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase'>
                    Sobre Nosotros
                  </h2>
                  <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none'>
                    Ingeniería con <br />
                    <span className='italic text-white/40'>
                      Instinto Digital
                    </span>
                  </h3>
                </div>
                <p className='text-gray-400 text-lg leading-relaxed'>
                  En{' '}
                  <span className='text-white font-semibold'>
                    CunaguarosDev
                  </span>
                  , nacimos para elevar el estándar del desarrollo de software.
                  Construimos sistemas robustos que escalan con tu visión.
                </p>
                <div className='grid grid-cols-2 gap-8 pt-8 border-t border-white/5'>
                  <div>
                    <div className='text-3xl font-black text-white'>100%</div>
                    <div className='text-[10px] uppercase tracking-widest text-gray-500'>
                      Código Nativo
                    </div>
                  </div>
                  <div>
                    <div className='text-3xl font-black text-white'>24/7</div>
                    <div className='text-[10px] uppercase tracking-widest text-gray-500'>
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
                <div className='absolute w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                <div className='relative w-full max-w-lg mx-auto p-px rounded-2xl bg-linear-to-br from-white/20 to-transparent shadow-2xl overflow-hidden backdrop-blur-md'>
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
                      <span className='text-blue-400'>constructor</span>() {'{'}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.mission ={' '}
                      <span className='text-accent-blue'>
                        &apos;Scale ideas&apos;
                      </span>
                      ;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;this.stack = [<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className='text-accent-blue'>&quot;</span>
                      <AnimatePresence mode='wait'>
                        <motion.span
                          key={stackWords[index]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className='text-accent-blue inline-block'
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
            <div className='mb-16'>
              <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase mb-4'>
                Especialidades
              </h2>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Diseño &{' '}
                <span className='text-white/40 italic'>Desarrollo</span>
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
                  whileHover={{ y: -10 }}
                  className='p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col group hover:border-neon-green/30 transition-all'
                >
                  <div className='text-3xl mb-6 group-hover:scale-110 transition-transform origin-left'>
                    {service.icon}
                  </div>
                  <h4 className='text-xl font-bold mb-4 uppercase group-hover:text-neon-green transition-colors'>
                    {service.title}
                  </h4>
                  <p className='text-gray-400 text-sm leading-relaxed mb-8 grow'>
                    {service.desc}
                  </p>
                  <div className='pt-6 border-t border-white/5 font-mono text-[9px] text-accent-blue uppercase tracking-widest'>
                    {service.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO - ESPACIO DE RESUMEN ACTUALIZADO */}
          <section
            id='portfolio'
            className='min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto snap-start py-20'
          >
            <div className='mb-16'>
              <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase mb-4'>
                Casos de Éxito
              </h2>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Portfolio en{' '}
                <span className='text-white/40 italic'>Despliegue</span>
              </h3>
              <p className='text-gray-400 mt-6 max-w-2xl text-lg'>
                Estamos actualizando nuestra galería con los proyectos más
                recientes. Nuestra experiencia abarca desde infraestructuras
                críticas hasta interfaces de usuario de nueva generación.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'SaaS Architecture',
                  type: 'Backend • Cloud',
                  desc: 'Sistemas distribuidos de alta disponibilidad diseñados para escalar sin fricciones.',
                  icon: '⚙️',
                },
                {
                  title: 'High-Performance UI',
                  type: 'Frontend • UX',
                  desc: 'Experiencias de usuario ultra-fluidas desarrolladas con tecnologías de renderizado moderno.',
                  icon: '🎨',
                },
                {
                  title: 'Neural & AI Ops',
                  type: 'Automation',
                  desc: 'Optimización de procesos mediante integración de agentes inteligentes y flujos autónomos.',
                  icon: '🤖',
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className='p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm group hover:border-accent-blue/50 transition-all'
                >
                  <div className='w-full aspect-video rounded-xl bg-white/5 mb-6 overflow-hidden flex items-center justify-center border border-white/5'>
                    <span className='text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em] group-hover:text-accent-blue transition-colors'>
                      [ Loading_Assets ]
                    </span>
                  </div>
                  <h4 className='text-xl font-bold uppercase mb-2'>
                    {proj.title}
                  </h4>
                  <p className='text-accent-blue font-mono text-[10px] uppercase tracking-widest mb-4'>
                    {proj.type}
                  </p>
                  <p className='text-gray-500 text-sm leading-relaxed'>
                    {proj.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
          <section className='py-32 px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4 uppercase tracking-tighter'>
                Arsenal Tecnológico
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto text-sm md:text-base'>
                Stack de ingeniería seleccionado para máxima escalabilidad.
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
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                  className='flex flex-col items-center justify-center p-8 rounded-xl bg-[#111]/50 border border-white/5 backdrop-blur-sm shadow-2xl transition-colors group'
                >
                  <div className='text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all'>
                    {tech.icon}
                  </div>
                  <span className='text-white font-semibold tracking-tight opacity-80 group-hover:opacity-100 transition-opacity'>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
          {/* CONTACTO - AJUSTADO CON MÁS ESPACIO SUPERIOR */}
          <section
            id='contacto'
            className='min-h-screen flex flex-col items-center justify-center px-6 snap-start py-24'
          >
            <div className='max-w-2xl w-full'>
              <div className='p-10 md:p-14 rounded-4xl border border-white/5 bg-white/5 backdrop-blur-3xl relative overflow-hidden text-center shadow-2xl'>
                <div className='absolute -top-12 -right-12 w-48 h-48 bg-neon-green/10 rounded-full blur-[60px]' />
                <div className='absolute -bottom-12 -left-12 w-48 h-48 bg-accent-blue/10 rounded-full blur-[60px]' />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none'>
                    ¿Tienes un <br />{' '}
                    <span className='text-white/40 italic'>Proyecto?</span>
                  </h2>
                  <p className='text-gray-400 text-sm md:text-base mb-10 max-w-sm mx-auto'>
                    Estamos listos para construir la próxima generación de tu
                    producto digital. Cuéntanos tu idea.
                  </p>

                  <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <a
                      href='mailto:cunaguarosdev@gmail.com'
                      className='w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform'
                    >
                      Enviar Correo
                    </a>
                    <a
                      href='https://wa.me/TUNUMERO'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-full sm:w-auto border border-white/10 hover:bg-white/5 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all'
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div className='mt-12 pt-8 border-t border-white/5 flex justify-center gap-10 text-gray-500'>
                    <div className='text-center'>
                      <p className='text-[8px] uppercase tracking-widest mb-1 font-mono'>
                        Localización
                      </p>
                      <p className='text-xs font-bold text-white uppercase'>
                        Worldwide
                      </p>
                    </div>
                    <div className='text-center'>
                      <p className='text-[8px] uppercase tracking-widest mb-1 font-mono'>
                        Status
                      </p>
                      <p className='text-xs font-bold text-white uppercase'>
                        Disponible
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <footer className='py-12 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest relative z-10'>
          © 2026 CunaguarosDev. Engineering the future.
        </footer>
      </BubbleBackground>
    </div>
  )
}
