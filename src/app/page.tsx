'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BubbleBackground } from './components/BubbleBackground';

export default function Home() {
  return (
    <BubbleBackground interactive={true}>
      <div className='min-h-screen text-white font-sans selection:bg-neon-green/30'>
        <nav className='fixed top-0 w-full z-50 bg-[#050505]/40 backdrop-blur-xl border-b border-white/5'>
          <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
            <div className='relative flex items-center'>
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 55, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                className='absolute left-0 text-xl font-black tracking-tighter uppercase whitespace-nowrap z-10'
              >
                Cunaguaros{' '}
                <span className='text-accent-blue italic'>
                  Dev
                  <span className='text-white/40 text-xs lowercase'>.web</span>
                </span>
              </motion.div>

              <motion.div
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
                className='relative w-12 h-12 rounded-full border border-neon-green/50 overflow-hidden bg-[#050505] z-20'
              >
                <Image
                  src='/logo.jpg'
                  alt='Logo'
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>
            </div>

            <div className='hidden md:flex gap-8 text-sm font-medium text-gray-400'>
              <a href='#' className='hover:text-white transition'>
                Proyectos
              </a>
              <button className='bg-primary px-6 py-2 rounded-lg text-white font-bold shadow-lg'>
                Currículum
              </button>
            </div>
          </div>
        </nav>

        <main className='pt-52 pb-32 px-6 max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center mb-40'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className='text-6xl md:text-8xl font-black leading-[0.9] mb-8'>
                Diseño <br />
                <span className='bg-linear-to-r from-primary to-accent-blue bg-clip-text text-transparent italic'>
                  Salvaje
                </span>
              </h1>
              <p className='text-gray-400 text-lg md:text-xl max-w-lg mb-12'>
                Código de alto impacto e interfaces líquidas para proyectos de
                ingeniería modernos.
              </p>
            </motion.div>

            <div className='relative glass-card bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 shadow-2xl'>
              <pre className='font-mono text-blue-300/90'>
                <code>const Studio = &apos;Cunaguaros&apos;;</code>
              </pre>
            </div>
          </div>

          <section className='mb-40 px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4'>
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
                  className='flex flex-col items-center justify-center p-8 rounded-xl bg-[#111] border border-white/5 shadow-2xl transition-colors group'
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

          <section className='mb-40'>
            <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
              <div className='max-w-2xl'>
                <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none'>
                  Soluciones de <br />
                  <span className='text-accent-blue italic'>Ingeniería</span>
                </h2>
                <p className='text-gray-500 mt-6 text-lg'>
                  Como equipo de ingenieros, diseñamos sistemas escalables,
                  seguros y automatizados.
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
                  className='p-10 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-3xl flex flex-col h-full group hover:border-neon-green/30 transition-all'
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
        </main>

        <footer className='py-12 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest'>
          © 2026 CunaguarosDev.
        </footer>
      </div>
    </BubbleBackground>
  );
}
