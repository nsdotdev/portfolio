import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import ProjectDetail from './ProjectDetail'

const PROJECTS = [
  {
    title: 'CareSync',
    description: 'A healthcare management system with role-based access control for three user types — admin, doctor, and patient. Handles appointments, billing, medical records, and file uploads using Multer and JWT-protected routes.',
    features: ['RBAC (3 Roles)', 'Patient Management', 'Appointments', 'Billing & Invoices', 'File Uploads', 'Medical Records'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Multer', 'JWT', 'Tailwind CSS'],
    liveUrl:   'https://caresync.nitinsonu.dev',
    githubUrl: 'https://github.com/nsdotdev/caresync',
  },
  {
    title: 'DevCollab',
    description: 'A full-stack social platform where developers can post updates, follow each other, and browse an explore feed. Built with a REST API backend, JWT authentication, and Cloudinary for media uploads.',
    features: ['Posts & Comments', 'Follow System', 'Explore Page', 'User Profiles', 'Real-time Feed'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    liveUrl:   'https://devcollab.nitinsonu.dev',
    githubUrl: 'https://github.com/nsdotdev/devcollab',
  },
  {
    title: 'PrepAI',
    description: 'An interview preparation tool built around the OpenAI API for question generation and answer evaluation. The live demo runs on a mock mode — a hardcoded question bank with algorithmic scoring — since the API is paid. The full AI integration is implemented and works when a key is provided.',
    features: ['AI Question Generation', 'Answer Evaluation', 'Scoring Engine', 'Session History', 'Role Customization'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Tailwind CSS'],
    liveUrl:   'https://prepai.nitinsonu.dev',
    githubUrl: 'https://github.com/nsdotdev/prepai',
  },
  {
    title: 'SDG Data Visualization',
    description: 'An interactive dashboard analyzing the relationship between urbanization and PM2.5 air pollution across countries, built as a college data visualization project. Includes a choropleth map, scatter plot, bar chart, and trend lines with dynamic insights.',
    features: ['Choropleth Map', 'Scatter Plot', 'Bar Chart', 'PM2.5 Trend Lines', 'Interactive Filters'],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Tableau'],
    liveUrl:   'https://nsdd-sdg.streamlit.app/',
    githubUrl: 'https://github.com/nsdotdev/sdg-data-visualization',
  },
  {
    title: 'Portfolio',
    description: 'This portfolio — designed and built from scratch with a focus on typography, motion, and a minimal two-color aesthetic. Features horizontal panel navigation, hand-drawn SVG details, and a dotted notebook background.',
    features: ['Horizontal Navigation', 'Dark / Light Mode', 'Pencil SVG Effects', 'Reveal Animations', 'Fully Responsive'],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl:   null,
    githubUrl: 'https://github.com/nsdotdev/portfolio',
  },
  {
    title: 'VisionAid',
    description: 'A Flutter app that converts document images into readable and listenable content. Capture or upload an image, extract text via a backend OCR endpoint, generate audio narration, and save outputs locally for later. Group college project — my contribution focused on the Python OCR backend.',
    features: ['Camera & Gallery Input', 'OCR Text Extraction', 'Text-to-Speech Audio', 'Audio Playback', 'Local File Storage'],
    stack: ['Flutter', 'Dart', 'Flutter TTS', 'Just Audio', 'Image Picker'],
    liveUrl:   null,
    githubUrl: null,
  },
]

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function ProjectGrid({ projects, onSelect, onNavigate }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => {
      el.querySelectorAll('.reveal').forEach((node, i) => {
        setTimeout(() => node.classList.add('visible'), i * 80)
      })
    }, 60)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={ref} className="px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14 mb-8">
        <div className="reveal">
          <p className="text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50">
            03 — Projects
          </p>
        </div>
        <div className="reveal">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink dark:text-ink-50">
            Selected work
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {projects.map((project, i) => (
          <button
            key={project.title}
            onClick={() => onSelect(i)}
            className={`
              reveal
              group text-left p-6 border border-ink/20 dark:border-ink-50/25
              hover:border-ink/45 dark:hover:border-ink-50/60
              hover:bg-ink/5 dark:hover:bg-ink-50/8
              transition-all duration-200 focus:outline-none
            `}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-ink dark:text-ink-50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-ink dark:text-ink-50 group-hover:text-ink dark:group-hover:text-ink-50/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowIcon />
              </span>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-ink dark:text-ink-50 mb-2 group-hover:opacity-75 transition-opacity duration-200">
              {project.title}
            </h3>

            <p className="text-xs text-ink dark:text-ink-50 leading-relaxed mb-5 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map(tech => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 border border-ink/18 dark:border-ink-50/10 text-ink dark:text-ink-50"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-xs text-ink dark:text-ink-50 px-1">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="md:hidden mt-10 flex justify-center">
        <button
          onClick={() => onNavigate(3)}
          className="btn-crayon inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-80 transition-opacity duration-200"
        >
          Skills
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Projects({ isActive, onNavigate }) {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!isActive) setSelected(null)
  }, [isActive])

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center pt-16 pb-12">
      {selected === null ? (
        <ProjectGrid projects={PROJECTS} onSelect={setSelected} onNavigate={onNavigate} />
      ) : (
        <ProjectDetail project={PROJECTS[selected]} onBack={() => setSelected(null)} />
      )}
    </section>
  )
}
