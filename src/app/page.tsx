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

const team = [
  {
    name: 'Raúl Rangel',
    role: 'Ingeniero Lead / Fullstack',
    desc: 'Arquitecto principal de sistemas, especializado en orquestar soluciones integrales de alto rendimiento y escalabilidad.',
    icon: '👨‍💻',
  },
  {
    name: 'Alejandra Chacón',
    role: 'Ingeniera especialista en UI Design',
    desc: 'Experta en fusionar la potencia del código con interfaces intuitivas y estéticas vanguardistas que elevan la experiencia de usuario a niveles premium.',
    icon: '👩‍🎨',
  },
  {
    name: 'Deivid Vargas',
    role: 'Ingeniero Backend',
    desc: 'Especialista en lógica de servidor, bases de datos robustas y la optimización de procesos críticos de infraestructura.',
    icon: '⚙️',
  },
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
              {[
                'Inicio',
                'Nosotros',
                'Servicios',
                'Portfolio',
                'Equipo',
                'Contacto',
              ].map((name) => (
                <button
                  key={name}
                  onClick={() => scrollToSection(name.toLowerCase())}
                  className='text-[10px] font-bold text-slate-500 hover:text-accent-blue uppercase tracking-widest transition-all'
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className='relative z-10'>
          {/* HERO */}
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
                Innovación <br />{' '}
                <span className={ghostTextClass}>Digital</span>
              </h1>
              <p className='text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed'>
                Arquitectura de software{' '}
                <span className='text-slate-200'>escalable</span> y
                automatización inteligente para empresas que no aceptan límites
                tecnológicos.
              </p>
              <button
                onClick={() => scrollToSection('portfolio')}
                className='bg-neon-green text-black px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,102,0.3)]'
              >
                Ver Portfolio
              </button>
            </motion.div>
          </section>

          {/* NOSOTROS */}
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
                    Ingeniería con <br />{' '}
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
              </motion.div>
              <div className='relative w-full max-w-lg mx-auto p-px rounded-2xl bg-linear-to-br from-accent-blue/40 to-transparent shadow-2xl overflow-hidden backdrop-blur-md'>
                <div className='bg-[#0a0a0a]/90 p-8 rounded-[15px] font-mono text-xs'>
                  <code>
                    <span className='text-neon-green'>class</span>{' '}
                    <span className='text-white'>CunaguarosDev</span> {'{'}{' '}
                    <br />
                    &nbsp;&nbsp;this.stack = [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&quot;
                    <AnimatePresence mode='wait'>
                      <motion.span
                        key={stackWords[index]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {stackWords[index]}
                      </motion.span>
                    </AnimatePresence>
                    &quot;
                    <br />
                    &nbsp;&nbsp;];
                    <br />
                    {'}'}
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICIOS (RESTAURADO) */}
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
                  tag: 'Next.js',
                  desc: 'Interfaces dinámicas enfocadas en convertir visitantes.',
                  icon: '🎯',
                },
                {
                  title: 'Páginas Web',
                  tag: 'React • TS',
                  desc: 'Desarrollo profesional de alta disponibilidad.',
                  icon: '🌐',
                },
                {
                  title: 'Aplicaciones',
                  tag: 'Software • SaaS',
                  desc: 'Sistemas a medida para la gestión de tu negocio.',
                  icon: '📱',
                },
                {
                  title: 'E-Commerce',
                  tag: 'Stripe • CMS',
                  desc: 'Tiendas online robustas con gestión de pagos.',
                  icon: '🛍️',
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className='p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-3xl flex flex-col group hover:border-accent-blue/40 transition-all'
                >
                  <div className='text-3xl mb-6'>{service.icon}</div>
                  <h4 className='text-xl font-bold mb-4 uppercase group-hover:text-accent-blue'>
                    {service.title}
                  </h4>
                  <p className='text-slate-500 text-sm grow'>{service.desc}</p>
                  <div className='pt-6 border-t border-white/5 font-mono text-[9px] text-slate-600 uppercase tracking-widest'>
                    {service.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO (RESTAURADO) */}
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
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'SaaS Architecture',
                  type: 'Backend • Cloud',
                  desc: 'Sistemas distribuidos de alta disponibilidad.',
                },
                {
                  title: 'High-Performance UI',
                  type: 'Frontend • UX',
                  desc: 'Experiencias de usuario ultra-fluidas.',
                },
                {
                  title: 'Neural & AI Ops',
                  type: 'Automation',
                  desc: 'Optimización mediante agentes inteligentes.',
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className='p-8 rounded-3xl border border-white/5 bg-white/1 backdrop-blur-sm group'
                >
                  <div className='w-full aspect-video rounded-xl bg-slate-900/50 mb-6 flex items-center justify-center border border-white/5 group-hover:border-accent-blue/20'>
                    <span className='text-[10px] text-slate-600 font-mono uppercase tracking-[0.3em]'>
                      [ Inyectando_Datos ]
                    </span>
                  </div>
                  <h4 className='text-xl font-bold uppercase mb-2'>
                    {proj.title}
                  </h4>
                  <p className='text-accent-blue font-mono text-[10px] uppercase tracking-widest mb-4'>
                    {proj.type}
                  </p>
                  <p className='text-slate-500 text-sm'>{proj.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* EQUIPO */}
          <section
            id='equipo'
            className='min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto snap-start py-20'
          >
            <div className='mb-16 group'>
              <h2 className='text-accent-blue font-mono text-sm tracking-[0.4em] uppercase mb-4'>
                Talento Senior
              </h2>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Núcleo de <span className={ghostTextClass}>Ingeniería</span>
              </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className='group relative p-8 rounded-3xl border border-white/5 bg-slate-900/10 backdrop-blur-xl hover:border-accent-blue/30 transition-all'
                >
                  <div className='relative w-full aspect-square rounded-2xl overflow-hidden mb-8 border border-white/10 group-hover:border-accent-blue/50'>
                    <div className='w-full h-full bg-slate-800 flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 transition-all'>
                      {member.icon}
                    </div>
                  </div>
                  <h4 className='text-2xl font-black uppercase tracking-tighter mb-1'>
                    {member.name}
                  </h4>
                  <p className='text-accent-blue font-mono text-[10px] uppercase tracking-[0.2em] mb-4'>
                    {member.role}
                  </p>
                  <p className='text-slate-400 text-sm leading-relaxed'>
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ARSENAL */}
          <section className='py-32 px-6'>
            <div className='mb-16 text-center'>
              <h3 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                Arsenal <span className={ghostTextClass}>Tecnológico</span>
              </h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto'>
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Framer Motion', icon: '✨' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'Supabase', icon: '⚡' },
                { name: 'n8n', icon: '🐙' },
                { name: 'Docker', icon: '🐋' },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 242, 255, 0.05)',
                  }}
                  className='flex flex-col items-center p-8 rounded-xl bg-slate-900/20 border border-white/5 backdrop-blur-sm group'
                >
                  <div className='text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all'>
                    {tech.icon}
                  </div>
                  <span className='text-slate-500 font-semibold group-hover:text-white'>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONTACTO */}
          <section
            id='contacto'
            className='min-h-screen flex flex-col items-center justify-center px-6 snap-start'
          >
            <div className='max-w-2xl w-full'>
              <motion.div className='p-10 md:p-14 rounded-4xl border border-white/5 bg-slate-900/10 backdrop-blur-3xl text-center relative overflow-hidden'>
                <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6'>
                  ¿Tienes un <br />{' '}
                  <span className={ghostTextClass}>Proyecto?</span>
                </h2>
                <div className='flex flex-col sm:flex-row justify-center gap-4 mt-10'>
                  <a
                    href='mailto:cunaguarosdev@gmail.com'
                    className='bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all'
                  >
                    Enviar Correo
                  </a>
                  <a
                    href='https://wa.me/TUNUMERO'
                    className='border border-white/10 hover:bg-white/5 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all'
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className='py-12 border-t border-white/5 text-center text-[10px] text-slate-700 uppercase tracking-widest'>
          © 2026 CunaguarosDev. Engineering the future.
        </footer>
      </BubbleBackground>
    </div>
  )
}
