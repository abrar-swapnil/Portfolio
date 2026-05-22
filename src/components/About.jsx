import { useEffect, useRef } from 'react'
import { BookOpen, Target, Cpu } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: <Cpu size={16} />,
    title: 'AI / ML Focus',
    body: 'Passionate about machine learning, deep learning, and the algorithms that power modern AI systems.',
  },
  {
    icon: <BookOpen size={16} />,
    title: 'Continuous Learner',
    body: 'Actively expanding skills through hands-on projects, coursework, and real-world ML workflows.',
  },
  {
    icon: <Target size={16} />,
    title: 'Data-Driven Mindset',
    body: 'Experienced in transforming raw datasets into meaningful insights through analysis and visualization.',
  },
]

export default function About() {
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
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left — label + heading */}
          <div className="reveal initial-hidden">
            <p className="section-label">About Me</p>
            <h2 id="about-title" className="section-heading">
              Engineering with{' '}
              <span style={{ color: 'var(--accent)' }}>purpose</span>{' '}
              &amp; precision.
            </h2>

            <div
              className="mt-6 flex items-center gap-3 text-sm"
              style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
              />
              Based in Bangladesh
            </div>
          </div>

          {/* Right — paragraphs */}
          <div className="space-y-5">

            <p className="prose-text reveal initial-hidden">
              I’m <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Abrar Swapnil</strong>,
              a Software Engineering student focused on Artificial Intelligence and Machine Learning.
              I build data-driven systems that learn from patterns and solve real-world problems.
            </p>

            <p className="prose-text reveal initial-hidden">
              My work includes data preprocessing, exploratory data analysis, and machine learning model development
              using Python, Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch.
            </p>

            <p className="prose-text reveal initial-hidden">
              I follow a structured engineering approach — understanding the problem, preparing clean data,
              building models iteratively, and evaluating results using measurable performance.
            </p>

          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-16">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="card p-5 reveal initial-hidden"
              style={{ animationDelay: `${(i + 3) * 100}ms` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(6,182,212,0.1)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(6,182,212,0.15)',
                }}
              >
                {h.icon}
              </div>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text)', fontFamily: 'Syne, sans-serif' }}
              >
                {h.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
