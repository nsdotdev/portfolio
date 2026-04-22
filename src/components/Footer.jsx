export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/15 dark:border-ink-50/10 py-8">
      <div className="px-6 lg:px-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-medium tracking-wider text-ink dark:text-ink-50/30 uppercase">
          © {year} Nitin Sonu
        </p>
        <p className="text-xs text-ink dark:text-ink-50/25">
          Built with React + Vite + Tailwind CSS
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-medium tracking-wider uppercase text-ink dark:text-ink-50/30 hover:text-ink dark:hover:text-ink-50/70 transition-colors duration-200"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
