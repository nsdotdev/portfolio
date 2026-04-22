import { useState, useRef, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',        page: 1 },
  { label: 'Projects',     page: 2 },
  { label: 'Skills',       page: 3 },
  { label: 'Certificates', page: 4 },
  { label: 'Contact',      page: 5 },
]

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar({ activePage, onNavigate, isDark, onToggleTheme, isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navListRef = useRef(null)
  const [circle, setCircle] = useState({ visible: false, left: 0, width: 0 })

  useEffect(() => {
    const list = navListRef.current
    if (!list) return
    const btn = list.querySelector(`[data-page="${activePage}"]`)
    if (!btn) {
      setCircle(c => ({ ...c, visible: false }))
      return
    }
    const listRect = list.getBoundingClientRect()
    const btnRect  = btn.getBoundingClientRect()
    setCircle({
      visible: true,
      left:    btnRect.left - listRect.left - 10,
      width:   btnRect.width + 20,
    })
  }, [activePage])

  const go = (page) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/80 dark:bg-dark/80 backdrop-blur-md' : ''}`}>
        <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          <div className="relative shrink-0">
            <button
              onClick={() => go(0)}
              className="hover:opacity-70 transition-opacity duration-200"
              aria-label="Home"
            >
              <img
                src="/ns-logo.png"
                alt="NS"
                className="w-8 h-8 object-contain dark:invert"
              />
            </button>

            {activePage === 0 && (
              <svg
                key="hero-line"
                viewBox="0 0 34 8"
                fill="none"
                style={{
                  position:  'absolute',
                  bottom:    -4,
                  left:      '50%',
                  transform: 'translateX(-50%)',
                  width:     36,
                  height:    10,
                  overflow:  'visible',
                  pointerEvents: 'none',
                }}
                className="text-ink dark:text-ink-50"
              >
                <path
                  d="M 2,7 C 8,2 22,1 32,4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDasharray:  50,
                    strokeDashoffset: 50,
                    animation:        'pencilDraw 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    animationDelay:   '0.08s',
                  }}
                />
              </svg>
            )}
          </div>

          <ul ref={navListRef} className="hidden md:flex items-center gap-8 relative">
            {NAV_LINKS.map(({ label, page }) => (
              <li key={label}>
                <button
                  data-page={page}
                  onClick={() => go(page)}
                  className={`
                    text-xs font-medium tracking-wider uppercase transition-colors duration-200
                    ${activePage === page
                      ? 'text-ink dark:text-ink-50'
                      : 'text-ink dark:text-ink-50 hover:text-ink'}
                  `}
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Pencil circle indicator */}
            {circle.visible && (
              <svg
                key={activePage}
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                fill="none"
                style={{
                  position:      'absolute',
                  top:           '50%',
                  left:          circle.left,
                  width:         circle.width,
                  height:        30,
                  transform:     'translateY(-50%) rotate(-1.5deg)',
                  pointerEvents: 'none',
                  color:         'inherit',
                }}
                className="text-ink dark:text-ink-50"
              >
                <path
                  d="M 7,21 C 5,9 17,3 50,3 C 83,3 96,9 96,20 C 96,31 83,37 50,37 C 17,37 4,31 5,23 C 5,17 10,14 17,13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  className="pencil-draw"
                />
              </svg>
            )}
          </ul>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-mono text-ink dark:text-ink-50 tabular-nums">
              {String(activePage + 1).padStart(2, '0')} / 06
            </span>

            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="text-ink dark:text-ink-50 hover:text-ink dark:hover:text-ink-50 transition-colors duration-200 p-1"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden text-ink dark:text-ink-50 hover:text-ink dark:hover:text-ink-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="absolute inset-0 bg-cream dark:bg-dark" onClick={() => setMobileOpen(false)} />
        <nav className="relative flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map(({ label, page }, i) => (
            <button
              key={label}
              onClick={() => go(page)}
              style={{ transitionDelay: mobileOpen ? `${i * 55}ms` : '0ms' }}
              className={`
                text-3xl font-bold tracking-tight transition-all duration-300
                ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                ${activePage === page ? 'text-ink dark:text-ink-50' : 'text-ink/40 dark:text-ink-50'}
                hover:text-ink dark:hover:text-ink-50
              `}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
