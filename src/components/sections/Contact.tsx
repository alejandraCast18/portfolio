'use client'

export const Contact = () => (
  <section id='contacto' className='py-40 px-6'>
    <div className='bg-white/2 border border-white/5 rounded-[4rem] p-20 max-w-4xl mx-auto text-center relative overflow-hidden group'>
      <h2 className='text-5xl md:text-8xl font-black uppercase mb-12'>
        ¿TIENES UN <br />
        <span className='text-zinc-800 italic hover:text-cyan-400 transition-all'>
          PROYECTO?
        </span>
      </h2>
      <div className='flex justify-center gap-6 relative z-10'>
        <a
          href='mailto:info@cunaguaros.dev'
          className='border border-cyan-400/50 px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-widest text-white hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all'
        >
          Enviar Correo
        </a>
      </div>
    </div>
  </section>
)
