import { useReveal } from '../hooks/useReveal'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'React Router'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth', 'Multer', 'OpenAI API', 'PHP', 'MySQL'],
  },
  {
    category: 'Data & Visualization',
    skills: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Streamlit', 'Tableau', 'Jupyter Notebook'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git & GitHub', 'Vite', 'Postman', 'VS Code', 'Vercel', 'Render', 'Cloudinary', 'Figma', 'Linux', 'VirtualBox', 'XAMPP'],
  },
]

export default function Skills({ onNavigate }) {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="min-h-screen flex flex-col justify-center pt-16 pb-12">
      <div className="px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14 mb-8">
          <div className="reveal">
            <p className="text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50">
              04 — Skills
            </p>
          </div>
          <div className="reveal">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink dark:text-ink-50">
              What I work with
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14">
          <div />
          <div className="space-y-8">
            {SKILL_GROUPS.map(({ category, skills }, gi) => (
              <div key={category} className={`reveal reveal-delay-${gi + 1}`}>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-ink dark:text-ink-50 mb-3 pb-2.5 border-b border-ink/15 dark:border-ink-50/10">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1.5 text-xs font-medium tracking-wide cursor-default
                        border border-ink/20 dark:border-ink-50/15
                        text-ink dark:text-ink-50
                        hover:bg-ink hover:text-cream hover:border-ink
                        dark:hover:bg-ink-50 dark:hover:text-dark dark:hover:border-ink-50
                        transition-all duration-150 select-none
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="md:hidden px-6 lg:px-8 max-w-6xl mx-auto mt-10 flex justify-center">
        <button
          onClick={() => onNavigate(4)}
          className="btn-crayon inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-80 transition-opacity duration-200"
        >
          Certificates
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
