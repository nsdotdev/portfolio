import { useReveal } from '../hooks/useReveal'

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

const CERTIFICATES = [
  {
    title: 'The Complete Web Development Bootcamp',
    issuer: 'Udemy — Dr. Angela Yu',
    date: 'Apr 2026',
    credentialUrl: 'https://www.udemy.com/certificate/UC-f93a9ab3-1625-44e3-ae89-05f49fe49914/',
  },
  {
    title: 'MERN Stack Training',
    issuer: 'Broadway Infosys',
    date: 'Feb 2025',
    credentialUrl: 'https://broadwayinfosys.com/certificate-verification-code/eyJpdiI6IklHNkZCa2xxcFdmUk9VMlZmbTZOYWc9PSIsInZhbHVlIjoianlCR2FTMDVJUTRNYjFvNXBDQ0NIZz09IiwibWFjIjoiNTE4MWZmMDUwNWU1MDFhNDVmNmZkNzg2YmZjZTVkODFiNTcxMTdiZjI1ZDFjY2U2MmUzOGJiNzIwMTgzNGEzMiIsInRhZyI6IiJ9',
  },
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    date: 'Mar 2024',
    credentialUrl: 'https://www.credly.com/badges/b8b467e2-10fd-4fed-9c0d-7e743998280e',
  },
  {
    title: 'Network Technician Career Path',
    issuer: 'Cisco',
    date: 'Jun 2023',
    credentialUrl: 'https://www.credly.com/badges/69a40461-d555-4827-b3f2-60263495ffb2',
  },
]

export default function Certificates({ onNavigate }) {
  const ref = useReveal()

  return (
    <section id="certificates" ref={ref} className="min-h-screen flex flex-col justify-center pt-16 pb-12">
      <div className="px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14 mb-8">
          <div className="reveal">
            <p className="text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50">
              05 — Certificates
            </p>
          </div>
          <div className="reveal">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink dark:text-ink-50 leading-snug">
              Credentials &amp;<br />learning.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-14">
          <div />
          <div>
            {CERTIFICATES.map(({ title, issuer, date, credentialUrl }, i) => (
              <a
                key={title}
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} group flex items-center justify-between py-5 border-b border-ink/15 dark:border-ink-50/10 hover:border-ink/35 dark:hover:border-ink-50/25 transition-colors duration-200`}
              >
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-ink-50 mb-1 group-hover:opacity-75 transition-opacity duration-200">
                    {title}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-medium text-ink/40 dark:text-ink-50/40">
                      {issuer}
                    </p>
                    <span className="text-ink/20 dark:text-ink-50/20 text-xs">·</span>
                    <p className="text-xs font-medium text-ink/40 dark:text-ink-50/40">
                      {date}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 ml-6 text-ink dark:text-ink-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                  <ExternalLinkIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="md:hidden px-6 lg:px-8 max-w-6xl mx-auto mt-10 flex justify-center">
        <button
          onClick={() => onNavigate(5)}
          className="btn-crayon inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase bg-ink text-cream dark:bg-ink-50 dark:text-dark hover:opacity-80 transition-opacity duration-200"
        >
          Contact
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
