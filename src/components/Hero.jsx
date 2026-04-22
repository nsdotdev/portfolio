import { useEffect, useRef } from 'react'

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function DotRow() {
  return (
    <div
      className="text-ink dark:text-ink-50 w-full"
      style={{
        height: 4,
        backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
        backgroundSize: '8px 4px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: '0 center',
        opacity: 0.5,
      }}
    />
  )
}

export default function Hero({ onNavigate }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => {
      el.querySelectorAll('.reveal').forEach((node, i) => {
        setTimeout(() => node.classList.add('visible'), i * 100)
      })
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <p className="reveal reveal-delay-1 text-xs font-medium tracking-wider uppercase mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
        <span className="text-ink/60 dark:text-ink-50/40">Full Stack Developer</span>
        <span className="text-ink dark:text-ink-50/25">—</span>
        <span className="inline-flex items-center gap-1.5 border border-ink/50 dark:border-ink-50/35 px-2 py-0.5 font-semibold text-ink dark:text-ink-50">
          <span className="relative flex shrink-0 w-1.5 h-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink dark:bg-ink-50 opacity-50" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-ink dark:bg-ink-50" />
          </span>
          Seeking Internship
        </span>
      </p>

      <div className="reveal flex flex-col lg:flex-row lg:items-end lg:gap-14">

        {/* Name — single line, individual squiggle under each word */}
        <div className="flex items-start gap-4 lg:gap-6 shrink-0">
          {['Nitin', 'Sonu'].map(word => (
            <div key={word} className="relative pb-4">
              <span
                className="font-black leading-none text-ink dark:text-ink-50 block whitespace-nowrap"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', letterSpacing: '-0.04em' }}
              >
                {word}
              </span>
              <div className="absolute bottom-1 left-0 right-0">
                <DotRow />
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="reveal reveal-delay-2 flex flex-col justify-end gap-5 mt-8 lg:mt-0 lg:pb-2 flex-1">
          <div className="grid gap-5">
          <p className="text-sm font-normal text-ink dark:text-ink-50/55 leading-relaxed w-full">
            Final year CS student who pays attention to the details, picks up new things quickly, and genuinely enjoys building. Open to internship opportunities in full-stack, backend, or anything in between.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate(2)}
              className="btn-crayon inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-80 transition-opacity duration-200"
            >
              View Projects <ArrowIcon />
            </button>
            <button
              onClick={() => onNavigate(5)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-ink/40 dark:border-ink-50/30 text-ink dark:text-ink-50 hover:border-ink dark:hover:border-ink-50 transition-colors duration-200"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bracket inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-ink dark:text-ink-50"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}
