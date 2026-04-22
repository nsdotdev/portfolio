import { useReveal } from '../hooks/useReveal'

export default function Section({ id, label, children, className = '' }) {
  const ref = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 lg:py-32 px-6 lg:px-8 max-w-6xl mx-auto ${className}`}
    >
      {label && (
        <p className="reveal text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50 mb-12">
          {String(label).padStart(2, '0')} — {label}
        </p>
      )}
      {children}
    </section>
  )
}
