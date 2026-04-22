import { useReveal } from '../hooks/useReveal'

export default function About({ onNavigate }) {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="min-h-screen flex flex-col justify-center pt-16 pb-12">
      <div className="px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14 items-start">

          <div className="reveal">
            <p className="text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50">
              02 — About
            </p>
          </div>

          <div>
            <h2 className="reveal text-2xl lg:text-3xl font-bold tracking-tight text-ink dark:text-ink-50 mb-5 leading-snug">
              Hello.
            </h2>

            <div className="space-y-3 text-ink dark:text-ink-50 leading-relaxed text-sm">
              <p className="reveal reveal-delay-1">
                I'm a final year Computer Science undergraduate at IIMS College, Naxal, with a focus on full-stack web development. My core stack is MERN — MongoDB, Express, React, and Node.js — and I've used it to build real projects with real users.
              </p>
              <p className="reveal reveal-delay-2">
                Beyond web, I've worked with Python for data visualization, PHP and MySQL for college projects, and explored AI-powered features through the OpenAI API. I'm comfortable picking up new tools when the problem calls for it.
              </p>
              <p className="reveal reveal-delay-3">
                I pay attention to details — in code quality, in UI, and in how things actually work end-to-end. I'm looking for an internship where I can contribute from day one and keep learning on the job.
              </p>
            </div>

            <div className="reveal reveal-delay-4 mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50 border border-ink/25 dark:border-ink-50/25 px-2.5 py-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Kathmandu, Nepal
              </span>
            </div>

            <div className="reveal reveal-delay-4 mt-6 grid grid-cols-3 gap-6 pt-6 border-t border-ink/15 dark:border-ink-50/10">
              {[
                { value: '6+',   label: 'Projects Built' },
                { value: 'MERN', label: 'Core Stack' },
                { value: 'CS',   label: 'Final Year' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl lg:text-2xl font-bold text-ink dark:text-ink-50 tracking-tight">{value}</p>
                  <p className="text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="md:hidden px-6 lg:px-8 max-w-6xl mx-auto mt-10 flex justify-center">
        <button
          onClick={() => onNavigate(2)}
          className="btn-crayon inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-80 transition-opacity duration-200"
        >
          Projects
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
