'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// Asegúrate de que esta ruta sea la correcta según tu estructura de carpetas
import { BubbleBackground } from './components/BubbleBackground';

export default function Home() {
  // Función para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-[#020202] min-h-screen text-white font-sans selection:bg-neon-green/30'>
      {/* EL FONDO ENVUELVE TODO */}
      <BubbleBackground interactive={true}>
        {/* HEADER / NAVBAR */}
        <nav className='fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5'>
          <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
            {/* LOGO Y NOMBRE CORREGIDO (Sin solapamiento) */}
            <div
              className='relative flex items-center group cursor-pointer z-50'
              onClick={() => scrollToSection('inicio')}
            >
              <motion.div
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
                className='relative w-11 h-11 rounded-full border border-neon-green/50 overflow-hidden bg-[#050505] z-30 group-hover:border-neon-green transition-colors shadow-[0_0_15px_rgba(0,255,102,0.2)]'
              >
                <Image
                  src='/logo.jpg'
                  alt='Logo'
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>

              {/* ml-14 asegura que el texto empiece DESPUÉS del logo */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className='ml-14 text-lg font-black tracking-tighter uppercase whitespace-nowrap z-20'
              >
                Cunaguaros <span className='text-accent-blue italic'>Dev</span>
                <span className='text-white/40 text-[10px] lowercase ml-1'>
                  .web
                </span>
              </motion.div>
            </div>

            {/* NAV LINKS */}
            <div className='hidden md:flex items-center gap-6'>
              {[
                { name: 'Inicio', id: 'inicio' },
                { name: 'Nosotros', id: 'nosotros' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Equipo', id: 'equipo' },
                { name: 'Contacto', id: 'contacto' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className='text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors'
                >
                  {link.name}
                </button>
              ))}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className='bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest'
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>
        </nav>

        <main className='relative z-10'>
          {/* HERO SECTION - ID: INICIO */}
          <section
            id='inicio'
            className='relative pt-48 pb-32 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center'
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
                <span className='bg-linear-to-r from-primary via-accent-blue to-white bg-clip-text text-transparent italic'>
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

            {/* CARD GLASS VISUAL (CODE EDITOR STYLE) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='mt-24 w-full max-w-4xl glass-card bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-1 shadow-2xl overflow-hidden'
            >
              <div className='bg-[#050505]/50 p-8 rounded-[22px] border border-white/5'>
                <pre className='font-mono text-blue-300/70 text-sm text-left'>
                  <code>
                    <span className='text-neon-green'>class</span>{' '}
                    <span className='text-white'>CunaguarosStudio</span> {'{'}{' '}
                    <br />
                    &nbsp;&nbsp;constructor() {'{'} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;this.mission ={' '}
                    <span className='text-accent-blue'>
                      &apos;Scale ideas into reality&apos;
                    </span>
                    ; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;this.stack = [
                    <span className='text-accent-blue'>
                      &apos;Next.js&apos;, &apos;Python&apos;, &apos;AI&apos;
                    </span>
                    ]; <br />
                    &nbsp;&nbsp;{'}'} <br />
                    {'}'}
                  </code>
                </pre>
              </div>
            </motion.div>
          </section>

          {/* ARSENAL TECNOLÓGICO */}
          <section id='nosotros' className='my-40 px-6 scroll-mt-20'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4 uppercase tracking-tighter'>
                Arsenal Tecnológico
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto text-sm md:text-base'>
                Stack de ingeniería seleccionado para máxima escalabilidad y
                automatización.
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

          {/* PORTFOLIO / SOLUCIONES */}
          <section
            id='portfolio'
            className='mb-40 scroll-mt-20 px-6 max-w-7xl mx-auto'
          >
            <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
              <div className='max-w-2xl'>
                <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none'>
                  Soluciones de <br />
                  <span className='text-accent-blue italic'>Ingeniería</span>
                </h2>
                <p className='text-gray-500 mt-6 text-lg'>
                  Sistemas escalables, seguros y automatizados diseñados por
                  ingenieros.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Desarrollo Fullstack',
                  desc: 'Aplicaciones de alto rendimiento con Next.js y React. Interfaces líquidas que priorizan la experiencia del usuario.',
                  stack: 'Next.js • TypeScript • Tailwind',
                  icon: '💻',
                },
                {
                  title: 'Backend & Arquitectura',
                  desc: 'Sistemas robustos con Python y Node.js. Diseño de bases de datos optimizadas para manejar grandes volúmenes de datos.',
                  stack: 'Python • PostgreSQL • APIs',
                  icon: '⚙️',
                },
                {
                  title: 'IA & Automatización',
                  desc: 'Automatización de procesos empresariales usando n8n y agentes de IA. Integramos modelos de lenguaje para optimizar flujos.',
                  stack: 'n8n • Llama 3 • LangChain',
                  icon: '🤖',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className='p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col h-full group hover:border-neon-green/30 transition-all'
                >
                  <div className='text-4xl mb-8 group-hover:scale-110 transition-transform origin-left'>
                    {service.icon}
                  </div>
                  <h3 className='text-2xl font-bold mb-4 group-hover:text-neon-green transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 text-sm leading-relaxed mb-8 grow'>
                    {service.desc}
                  </p>
                  <div className='pt-6 border-t border-white/5 font-mono text-[10px] text-accent-blue uppercase tracking-widest'>
                    {service.stack}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ESPACIOS PARA EQUIPO Y CONTACTO */}
          <section
            id='equipo'
            className='min-h-[40vh] py-32 scroll-mt-20 flex items-center justify-center'
          >
            <p className='text-gray-600 uppercase tracking-[0.5em] text-[10px]'>
              [ Área reservada para el equipo ]
            </p>
          </section>

          <section
            id='contacto'
            className='min-h-[40vh] py-32 scroll-mt-20 flex items-center justify-center'
          >
            <p className='text-gray-600 uppercase tracking-[0.5em] text-[10px]'>
              [ Área reservada para contacto ]
            </p>
          </section>
        </main>

        <footer className='py-12 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest relative z-10'>
          © 2026 CunaguarosDev. Engineering the future.
        </footer>
      </BubbleBackground>
    </div>
  );
}
