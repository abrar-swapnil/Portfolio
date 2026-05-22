import { Github, Linkedin, Mail } from 'lucide-react'

const SOCIAL = [
  { icon: <Github  size={15} />, href: 'https://github.com/abrarswapnil',   label: 'GitHub'   },
  { icon: <Linkedin size={15} />, href: 'https://linkedin.com/in/abrarswapnil', label: 'LinkedIn' },
  { icon: <Mail    size={15} />, href: 'mailto:abrarswapnil@email.com',     label: 'Email'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-black"
              style={{ background: 'var(--accent)', fontFamily: 'Syne, sans-serif' }}
            >
              A
            </span>
            <span
              className="text-sm"
              style={{
                color:      'var(--text-muted)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              © {year} Abrar Swapnil. All rights reserved.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {SOCIAL.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Built with */}
          <p
            className="text-xs"
            style={{
              color:      'var(--text-muted)',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.04em',
            }}
          >
            Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
