function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

export default function ProjectCard({ index, title, description, features, stack, liveUrl, githubUrl }) {
  return (
    <article className="reveal group grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 py-7 border-b border-ink/10 dark:border-ink-50/10 last:border-b-0">

      <div className="lg:w-12 shrink-0">
        <span className="text-xs font-medium tracking-wider text-ink dark:text-ink-50 font-mono">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-ink dark:text-ink-50 mb-2 group-hover:opacity-60 transition-opacity duration-200">
            {title}
          </h3>
          <p className="text-sm text-ink dark:text-ink-50 leading-relaxed mb-4 max-w-xl">
            {description}
          </p>

          <ul className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
            {features.map(f => (
              <li key={f} className="text-xs text-ink dark:text-ink-50 flex items-center gap-1 before:content-['—'] before:opacity-40">
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {stack.map(tech => (
              <span
                key={tech}
                className="text-xs font-medium px-2 py-0.5 border border-ink/12 dark:border-ink-50/12 text-ink dark:text-ink-50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex sm:flex-col gap-2 shrink-0">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crayon inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-75 transition-opacity duration-200 whitespace-nowrap"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase border border-ink/20 dark:border-ink-50/20 text-ink dark:text-ink-50 hover:border-ink/50 dark:hover:border-ink-50/50 hover:text-ink dark:hover:text-ink-50 transition-all duration-200 whitespace-nowrap"
            >
              GitHub <GitHubIcon />
            </a>
          )}
        </div>
      </div>

    </article>
  )
}
