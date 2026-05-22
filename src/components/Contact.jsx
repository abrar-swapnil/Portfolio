import { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const CONTACT_LINKS = [
  {
  icon: <Mail size={18} />,
  label: 'Email',
  value: 'swapnil017763@gmail.com',
  href: 'mailto:swapnil017763@gmail.com',
  hint: 'Best for professional enquiries',
},
{
  icon: <Linkedin size={18} />,
  label: 'LinkedIn',
  value: 'linkedin.com/in/abrar-swapnil-559852352',
  href: 'https://linkedin.com/in/abrar-swapnil-559852352',
  hint: 'Connect professionally',
},
{
  icon: <Github size={18} />,
  label: 'GitHub',
  value: 'github.com/abrar-swapnil',
  href: 'https://github.com/abrar-swapnil',
  hint: 'Browse my repositories',
},
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.animationDelay = `${i * 100}ms`
              el.classList.add('animate-in')
              el.classList.remove('initial-hidden')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className="py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="section-label justify-center reveal initial-hidden">Get in Touch</p>
          <h2 id="contact-title" className="section-heading reveal initial-hidden">
            Let's{' '}
            <span style={{ color: 'var(--accent)' }}>connect</span>
          </h2>
          <p className="prose-text mt-4 reveal initial-hidden">
            I'm actively looking for internship and junior ML/AI engineering opportunities.
            Whether you want to discuss a project, share feedback, or just say hello —
            my inbox is always open.
          </p>
        </div>

        {/* Contact cards */}
        <div className="max-w-lg mx-auto flex flex-col gap-3">
          {CONTACT_LINKS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="contact-link reveal initial-hidden group"
              style={{ animationDelay: `${(i + 3) * 90}ms` }}
            >
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(6,182,212,0.08)',
                  color:      'var(--accent)',
                  border:     '1px solid rgba(6,182,212,0.12)',
                }}
              >
                {c.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs mb-0.5"
                  style={{
                    color:      'var(--text-muted)',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.08em',
                  }}
                >
                  {c.label}
                </p>
                <p
                  className="text-sm truncate"
                  style={{ color: 'var(--text)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {c.value}
                </p>
              </div>

              {/* Hint + arrow */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--accent)' }}
                />
                <p
                  className="text-xs hidden sm:block"
                  style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {c.hint}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal initial-hidden">
          <a
            href="mailto:swapnil017763@gmail.com"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <Mail size={16} />
            Send me an email
          </a>
        </div>

        {/* Availability note */}
        <div
          className="mt-10 text-center reveal initial-hidden"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize:   '0.7rem',
            color:      'var(--text-muted)',
            letterSpacing: '0.06em',
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
            style={{ background: 'rgb(134,239,172)', boxShadow: '0 0 6px rgb(134,239,172)' }}
          />
          Available for internships &amp; junior roles
        </div>
      </div>
    </section>
  )
}
