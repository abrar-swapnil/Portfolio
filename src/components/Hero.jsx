import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Github, Linkedin } from 'lucide-react'

const TAGLINES = [
  'Building intelligent systems from data.',
  'Turning raw data into real-world impact.',
  'Engineering the future with ML.',
]

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayed,    setDisplayed]    = useState('')
  const [typing,       setTyping]       = useState(true)
  const [charIndex,    setCharIndex]    = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = TAGLINES[taglineIndex]

    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 38)
        return () => clearTimeout(t)
      } else {
        // Pause then erase
        const t = setTimeout(() => setTyping(false), 2800)
        return () => clearTimeout(t)
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, 22)
        return () => clearTimeout(t)
      } else {
        setTaglineIndex(i => (i + 1) % TAGLINES.length)
        setTyping(true)
      }
    }
  }, [charIndex, typing, taglineIndex])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-grid-bg"
    >
      {/* Ambient glow */}
      <div className="hero-glow" />

      {/* Radial vignette on edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 120% 70% at 50% 100%, transparent 50%, var(--bg) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Status badge */}
        <div
          className="initial-hidden animate-in delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
          style={{
            background:  'rgba(6,182,212,0.08)',
            border:      '1px solid rgba(6,182,212,0.18)',
            color:       'var(--accent)',
            fontFamily:  'JetBrains Mono, monospace',
            letterSpacing: '0.06em',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
          />
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className="initial-hidden animate-in delay-200"
          style={{
            fontFamily:    'Syne, sans-serif',
            fontWeight:    800,
            fontSize:      'clamp(2.8rem, 8vw, 5.5rem)',
            letterSpacing: '-0.03em',
            lineHeight:    1.05,
            color:         'var(--text)',
          }}
        >
          Abrar{' '}
          <span style={{ color: 'var(--accent)' }}>Swapnil</span>
        </h1>

        {/* Role */}
        <p
          className="initial-hidden animate-in delay-300 mt-4"
          style={{
            fontFamily:    'DM Sans, sans-serif',
            fontSize:      'clamp(1rem, 2.5vw, 1.2rem)',
            color:         'var(--text-secondary)',
            fontWeight:    400,
            letterSpacing: '0.01em',
          }}
        >
          Software Engineering Student
          <span
            className="mx-2"
            style={{ color: 'var(--border-hover)', opacity: 0.6 }}
          >
            /
          </span>
          Aspiring AI&thinsp;·&thinsp;ML Engineer
        </p>

        {/* Typewriter tagline */}
        <div
          className="initial-hidden animate-in delay-400 mt-6 h-8 flex items-center justify-center"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize:   'clamp(0.8rem, 2vw, 0.95rem)',
            color:      'var(--text-muted)',
          }}
        >
          <span>{displayed}</span>
          <span className="cursor-blink" />
        </div>

        {/* CTA Buttons */}
        <div className="initial-hidden animate-in delay-500 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
            <ArrowRight size={16} />
          </button>
          <button onClick={scrollToContact} className="btn-outline">
            Contact Me
          </button>
        </div>

        {/* Social quick links */}
        <div className="initial-hidden animate-in delay-600 mt-8 flex items-center justify-center gap-5">
          <a
            href="https://github.com/abrarswapnil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-colors"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Github size={15} /> GitHub
          </a>
          <span style={{ color: 'var(--border)', fontSize: '0.6rem' }}>●</span>
          <a
            href="https://linkedin.com/in/abrarswapnil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-colors"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-100 opacity-40"
        aria-label="Scroll down"
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
          }}
        >
          SCROLL
        </span>
        <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
      </button>
    </section>
  )
}
