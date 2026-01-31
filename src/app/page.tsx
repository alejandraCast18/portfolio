'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// Importación corregida a ruta relativa
import { BubbleBackground } from './components/BubbleBackground';

export default function Home() {
  return (
    <BubbleBackground interactive={true}>
      <div className='min-h-screen text-white font-sans selection:bg-neon-green/30'>
        {/* NAVBAR */}
        <nav className='fixed top-0 w-full z-50 bg-[#050505]/40 backdrop-blur-xl border-b border-white/5'>
          <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
            {/* LOGO Y NOMBRE */}
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

        {/* HERO */}
        <main className='pt-52 pb-32 px-6 max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
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
                Código de alto impacto y interfaces líquidas.
              </p>
            </motion.div>

            {/* CARD GLASS */}
            <div className='relative glass-card bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 shadow-2xl'>
              <pre className='font-mono text-blue-300/90'>
                <code>const Studio = &apos;Cunaguaros&apos;;</code>
              </pre>
            </div>
          </div>

          {/* SECCIÓN DE HABILIDADES */}
          <section className='mt-32'>
            <h2 className='text-4xl font-black uppercase text-center mb-16'>
              Tech <span className='text-neon-green'>Stack</span>
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {['Next.js', 'Tailwind', 'TypeScript', 'Motion'].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(0, 255, 65, 0.5)',
                  }}
                  className='p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-center font-bold uppercase tracking-widest text-sm'
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className='py-12 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest'>
          © 2026 Cunaguaros Studio.
        </footer>
      </div>
    </BubbleBackground>
  );
}
