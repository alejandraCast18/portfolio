'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <div className='min-h-screen bg-bg-dark text-white font-sans selection:bg-neon-green/30'>
      {/* NAVBAR FUTURISTA */}
      <nav className='fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5'>
        <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='relative w-12 h-12 rounded-full border border-neon-green/50 overflow-hidden shadow-[0_0_15px_rgba(0,255,65,0.2)]'>
              <Image
                src='/logo.jpg'
                alt='Cunaguaros Logo'
                fill
                className='object-cover'
                priority
              />
            </div>
            <div className='text-xl font-black tracking-tighter uppercase'>
              Cunaguaros{' '}
              <span className='text-accent-blue italic'>
                Dev<span className='text-white/40 text-xs lowercase'>.web</span>
              </span>
            </div>
          </div>
          <div className='hidden md:flex gap-8 text-sm font-medium text-gray-400'>
            <a href='#' className='hover:text-white transition'>
              About
            </a>
            <a href='#' className='hover:text-white transition'>
              Skills
            </a>
            <a href='#' className='hover:text-white transition'>
              Projects
            </a>
            <button className='bg-primary px-6 py-2 rounded-lg text-white font-bold shadow-[0_0_20px_rgba(127,13,242,0.4)] hover:scale-105 transition'>
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className='relative pt-40 pb-20 px-6 max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6'>
              <span className='w-2 h-2 rounded-full bg-neon-green animate-pulse'></span>
              <span className='text-[10px] font-bold text-neon-green uppercase tracking-widest'>
                Available for work
              </span>
            </div>
            <h1 className='text-6xl md:text-8xl font-black leading-tight mb-6'>
              Building the <br />
              <span className='bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent'>
                Future
              </span>{' '}
              of Code
            </h1>
            <p className='text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed'>
              En <span className='text-white font-bold'>CunaguarosDev.web</span>{' '}
              transformamos ideas complejas en interfaces digitales rápidas y
              con diseño de otro nivel.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='h-14 px-10 rounded-xl bg-primary font-bold hover:shadow-primary/50 transition shadow-xl'>
                View My Work
              </button>
              <button className='h-14 px-10 rounded-xl border border-accent-blue/50 text-accent-blue font-bold hover:bg-accent-blue/10 transition'>
                Get in Touch
              </button>
            </div>
          </div>

          {/* TARJETA DE CÓDIGO */}
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-primary to-accent-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition'></div>
            <div className='relative glass-card rounded-2xl p-8 shadow-2xl overflow-hidden'>
              <div className='flex gap-2 mb-6'>
                <div className='w-3 h-3 rounded-full bg-red-500/50'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500/50'></div>
                <div className='w-3 h-3 rounded-full bg-green-500/50'></div>
              </div>
              <pre className='font-mono text-sm leading-relaxed text-blue-300'>
                <code>
                  <span className='text-primary italic'>const</span>{' '}
                  <span className='text-white'>Cunaguaro</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;status:{' '}
                  <span className='text-accent-blue'>'Dominando la web'</span>,
                  <br />
                  &nbsp;&nbsp;vision:{' '}
                  <span className='text-accent-blue'>'Innovación Pura'</span>,
                  <br />
                  &nbsp;&nbsp;eyes:{' '}
                  <span className='text-neon-green'>'Neon Green'</span>
                  <br />
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER CUNAGUAROS DEV */}
      <footer className='border-t border-white/5 bg-bg-dark pt-20 pb-10 mt-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='flex flex-col items-center md:items-start gap-4'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 relative rounded-full overflow-hidden border border-neon-green/30'>
                  <Image
                    src='/logo.jpg'
                    alt='Logo'
                    fill
                    className='object-cover'
                  />
                </div>
                <span className='text-xl font-black tracking-tighter uppercase'>
                  Cunaguaros{' '}
                  <span className='text-accent-blue italic'>Dev</span>
                </span>
              </div>
              <p className='text-gray-500 text-sm max-w-xs text-center md:text-left'>
                Construyendo el futuro digital con alma salvaje y código de alto
                impacto.
              </p>
            </div>

            <div className='flex flex-col items-center gap-6'>
              <div className='flex gap-8'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-all hover:scale-110'
                >
                  <span className='material-symbols-outlined'>
                    youtube_activity
                  </span>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-all hover:scale-110'
                >
                  <span className='material-symbols-outlined'>
                    photo_camera
                  </span>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-all hover:scale-110'
                >
                  <span className='material-symbols-outlined'>share</span>
                </a>
              </div>
            </div>
          </div>

          <div className='mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-600 uppercase tracking-widest'>
            <p>© 2026 CunaguarosDev. Built with React & Tailwind v4.</p>
            <div className='flex gap-6'>
              <a href='#' className='hover:text-accent-blue'>
                Twitter
              </a>
              <a href='#' className='hover:text-accent-blue'>
                GitHub
              </a>
              <a href='#' className='hover:text-accent-blue'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
