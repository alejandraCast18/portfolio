'use client'

import { Navbar } from '@/components/ui/Navbar'
import { BubbleBackground } from '@/components/BubbleBackground'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Team } from '@/components/sections/Team'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { TechStack } from '@/components/sections/TechStack'
import { GameLab } from '@/components/sections/GameLab'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className='min-h-screen text-white selection:bg-cyan-400/30 bg-[#050505]'>
      <Navbar />

      <BubbleBackground interactive={true}>
        <main className='relative z-10 bg-transparent flex flex-col'>
          <Hero />
          <About />
          <Services />
          <Team />
          <PortfolioSection />
          <TechStack />
          <GameLab />
          <Contact />
          <Footer />
        </main>
      </BubbleBackground>
    </div>
  )
}
