import { useEffect, useRef } from 'react'

const SKILL_GROUPS = [
  {
    label:  'Languages',
    color:  'rgba(6,182,212,0.06)',
    accent: 'rgba(6,182,212,0.2)',
    skills: ['Python', 'C++', 'Java', 'SQL'],
  },
  {
    label:  'ML / AI',
    color:  'rgba(139,92,246,0.06)',
    accent: 'rgba(139,92,246,0.2)',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP (basics)', 'Computer Vision (basics)'],
  },
  {
    label:  'Frameworks & Libraries',
    color:  'rgba(20,184,166,0.06)',
    accent: 'rgba(20,184,166,0.2)',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    label:  'Data Science',
    color:  'rgba(251,146,60,0.06)',
    accent: 'rgba(251,146,60,0.2)',
    skills: ['Data Analysis', 'EDA', 'Data Visualization', 'Statistical Modelling', 'Feature Engineering'],
  },
  {
    label:  'Tools & Workflow',
    color:  'rgba(248,113,113,0.06)',
    accent: 'rgba(248,113,113,0.2)',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Linux'],
  },
]

function SkillGroup({ label, color, accent, skills, delay = 0 }) {
  return (
    <div
      className="card p-6 reveal initial-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-5">
        <span
          className="w-1 h-4 rounded-full"
          style={{ background: accent }}
        />
        <h3
          className="text-xs uppercase tracking-widest"
          style={{
            color:       'var(--text-muted)',
            fontFamily:  'JetBrains Mono, monospace',
            letterSpacing: '0.12em',
          }}
        >
          {label}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s} className="skill-pill">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.animationDelay = `${i * 90}ms`
              el.classList.add('animate-in')
              el.classList.remove('initial-hidden')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-title"
      className="py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-14 reveal initial-hidden">
          <p className="section-label">Technical Skills</p>
          <h2 id="skills-title" className="section-heading">
            My{' '}
            <span style={{ color: 'var(--accent)' }}>toolkit</span>
          </h2>
          <p className="prose-text mt-4 text-sm">
            A curated set of languages, frameworks, and tools I work with to build and deploy
            data-driven and machine learning solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((g, i) => (
            <SkillGroup key={g.label} {...g} delay={i * 90} />
          ))}

          {/* Currently learning card */}
          <div
            className="card p-6 reveal initial-hidden md:col-span-2 xl:col-span-1"
            style={{
              background: 'rgba(6,182,212,0.03)',
              borderColor: 'rgba(6,182,212,0.12)',
              animationDelay: `${SKILL_GROUPS.length * 90}ms`,
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-1 h-4 rounded-full"
                style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
              />
              <h3
                className="text-xs uppercase tracking-widest"
                style={{
                  color:      'var(--accent)',
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.12em',
                }}
              >
                Currently Exploring
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MLOps', 'LLM Fine-tuning', 'Vector Databases', 'FastAPI', 'Docker'].map(s => (
                <span
                  key={s}
                  className="skill-pill"
                  style={{
                    borderColor: 'rgba(6,182,212,0.12)',
                    color: 'var(--accent)',
                    background:  'rgba(6,182,212,0.04)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <p
              className="mt-4 text-xs"
              style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Actively learning production-grade ML infrastructure and modern AI stacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
