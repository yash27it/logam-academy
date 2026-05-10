import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group"
          aria-label="Logam Digital Home"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-display font-bold text-white text-sm">
            L
          </div>
          <span className="font-display font-bold text-white text-lg tracking-tight">
            logam<span className="text-brand-500">digital</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Courses', id: 'courses' },
            { label: 'Why Us', id: 'why' },
            { label: 'Contact', id: 'lead' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-ink-200 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('lead')}
          className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
        >
          Get Started
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink-800/95 backdrop-blur-md border-t border-white/5 px-4 py-4 flex flex-col gap-3">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Courses', id: 'courses' },
            { label: 'Why Us', id: 'why' },
            { label: 'Contact', id: 'lead' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium text-ink-200 hover:text-white py-2 border-b border-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('lead')}
            className="mt-2 bg-brand-500 text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}
