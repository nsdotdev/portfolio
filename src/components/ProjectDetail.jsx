import { useEffect } from 'react'

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

export default function ProjectDetail({ project, onBack }) {
  const { title, description, features, stack, liveUrl, githubUrl } = project

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onBack() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onBack])

  return (
    <div className="animate-detail px-6 lg:px-8 max-w-6xl mx-auto">

      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50 hover:text-ink dark:hover:text-ink-50 transition-colors duration-200 mb-10 group"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform duration-200">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        All projects
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">

        <div>
          <h2
            className="font-bold tracking-tight text-ink dark:text-ink-50 mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            {title}
          </h2>

          <p className="text-sm text-ink dark:text-ink-50 leading-relaxed mb-8 max-w-lg">
            {description}
          </p>

          <div className="mb-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-ink dark:text-ink-50 mb-3">
              Features
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map(f => (
                <span
                  key={f}
                  className="px-3 py-1.5 text-xs font-medium border border-ink/20 dark:border-ink-50/15 text-ink dark:text-ink-50"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-ink dark:text-ink-50 mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-ink/8 dark:bg-ink-50/6 text-ink dark:text-ink-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crayon inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-75 transition-opacity duration-200"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase border border-ink/25 dark:border-ink-50/20 text-ink dark:text-ink-50 hover:border-ink/55 dark:hover:border-ink-50/50 hover:text-ink dark:hover:text-ink-50 transition-all duration-200"
            >
              GitHub <GitHubIcon />
            </a>
          )}

          <p className="hidden md:block mt-auto text-xs text-ink dark:text-ink-50 tracking-wide">
            Press <kbd className="font-mono bg-ink/10 dark:bg-ink-50/8 border border-ink/20 dark:border-ink-50/25 px-1.5 py-0.5">Esc</kbd> to go back.
          </p>
        </div>

      </div>
    </div>
  )
}
