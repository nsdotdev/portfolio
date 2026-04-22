import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { isDark, toggle } = useTheme()
  const [activePage, setActivePage] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => { setIsScrolled(false) }, [activePage])

  const handleScroll = (e) => setIsScrolled(e.currentTarget.scrollTop > 10)

  return (
    <div className="fixed inset-0 overflow-hidden bg-cream dark:bg-dark text-ink dark:text-ink-50 transition-colors duration-300">
      <div className="dot-bg absolute inset-0 pointer-events-none z-0" />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="crayon-filter" x="-5%" y="-10%" width="110%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" seed="8" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
        isDark={isDark}
        onToggleTheme={toggle}
        isScrolled={isScrolled}
      />

      <div
        className="relative z-10 flex h-full"
        style={{
          transform: `translateX(-${activePage * 100}vw)`,
          transition: 'transform 480ms cubic-bezier(0.76, 0, 0.24, 1)',
          willChange: 'transform',
        }}
      >
        <div className="w-screen h-full shrink-0 overflow-y-auto" onScroll={handleScroll}>
          <Hero onNavigate={setActivePage} />
        </div>
        <div className="w-screen h-full shrink-0 overflow-y-auto" onScroll={handleScroll}>
          <About onNavigate={setActivePage} />
        </div>
        <div className="w-screen h-full shrink-0 overflow-y-auto" onScroll={handleScroll}>
          <Projects isActive={activePage === 2} onNavigate={setActivePage} />
        </div>
        <div className="w-screen h-full shrink-0 overflow-y-auto" onScroll={handleScroll}>
          <Skills onNavigate={setActivePage} />
        </div>
        <div className="w-screen h-full shrink-0 overflow-y-auto" onScroll={handleScroll}>
          <Certificates onNavigate={setActivePage} />
        </div>
        <div className="w-screen h-full shrink-0 overflow-y-auto" onScroll={handleScroll}>
          <Contact />
        </div>
      </div>
    </div>
  )
}
