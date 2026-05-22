import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { smoothScrollToId } from '../utils/smoothScroll'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActive]      = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Highlight active section
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    smoothScrollToId(href.replace('#', ''), 850)
  }

  return (
    <>
      <header
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'nav-island nav-island-scrolled'
            : 'bg-transparent'
        }`}
      >
        <div className="nav-island-inner max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">

          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); smoothScrollToId('top', 850) }}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-black"
              style={{ background: 'var(--accent)', fontFamily: 'Syne, sans-serif' }}
            >
              AS
            </span>
            <span
              className="text-sm font-semibold tracking-tight hidden sm:block"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
            >
              Abrar Swapnil
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.href)
                  }}
                  className={`nav-link interactive px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="block h-px mt-px rounded-full mx-auto"
                      style={{ background: 'var(--accent)', width: '16px' }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="mailto:swapnil017763@email.com"
            className="hidden md:flex btn-outline text-sm py-2 px-4"
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[68px] z-40 transition-all duration-300 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        style={{
          background: 'rgba(8,8,8,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNav(link.href)
              }}
              className="nav-link interactive text-left px-3 py-3 rounded-md text-base text-text-muted hover:text-text-primary hover:bg-surface transition-all"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
            <a
              href="mailto:swapnil017763@email.com"
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
