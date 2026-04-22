import { useReveal } from '../hooks/useReveal'

const TIMELINE = [
  {
    period:  '2024 — Present',
    role:    'Full Stack Developer',
    company: 'Freelance / Self-Directed',
    note:    'Building production-grade MERN applications. Delivered DevCollab, PrepAI, and CareSync.',
  },
  {
    period:  '2023 — 2024',
    role:    'Frontend Developer',
    company: 'Open Source & Personal Projects',
    note:    'Focused on React architecture, state management, and responsive UI systems.',
  },
  {
    period:  '2022 — 2023',
    role:    'Learning & Foundation',
    company: 'Self-taught',
    note:    'Completed full-stack curriculum. Built foundational projects with HTML, CSS, JS, Node, and MongoDB.',
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section
      id="experience"
      ref={ref}
      className="pt-24 pb-12 min-h-screen"
    >
      <div className="px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14 mb-8">
          <div className="reveal">
            <p className="text-xs font-medium tracking-wider uppercase text-ink/35 dark:text-ink-50/35">
              04 — Experience
            </p>
          </div>
          <div className="reveal">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink dark:text-ink-50">
              Timeline
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14">
          <div />
          <div>
            {TIMELINE.map(({ period, role, company, note }, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative pl-5 pb-7 border-l border-ink/15 dark:border-ink-50/15 last:pb-0`}
              >
                <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-ink/30 dark:bg-ink-50/30 -translate-x-[4px]" />
                <p className="text-xs font-mono text-ink/30 dark:text-ink-50/30 mb-1">{period}</p>
                <h3 className="text-base font-bold text-ink dark:text-ink-50 mb-0.5">{role}</h3>
                <p className="text-xs font-medium text-ink/45 dark:text-ink-50/45 mb-2">{company}</p>
                <p className="text-sm text-ink/50 dark:text-ink-50/50 leading-relaxed max-w-md">{note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
