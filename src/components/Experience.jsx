import { useEffect, useRef } from 'react'
import { Layers, Code2, FlaskConical, BookMarked } from 'lucide-react'

const FOCUS_ITEMS = [
  {
    icon:        <Layers size={16} />,
    period:      '2024 — Present',
    role:        'ML Project Builder',
    org:         'Self-directed / Academic',
    description:
      'Actively building end-to-end machine learning projects covering data collection, feature engineering, model training, evaluation, and iterative improvement. Focused on developing professional-grade ML workflows.',
    tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
  },
  {
    icon:        <FlaskConical size={16} />,
    period:      '2024 — Present',
    role:        'Data Science Practitioner',
    org:         'Personal Projects',
    description:
      'Conducting exploratory data analysis and building visualization pipelines on real-world datasets. Developing a strong foundation in statistical thinking and data storytelling techniques.',
    tags: ['EDA', 'Seaborn', 'Matplotlib', 'NumPy'],
  },
  {
    icon:        <Code2 size={16} />,
    period:      '2023 — Present',
    role:        'Software Engineering Student',
    org:         'University',
    description:
      'Pursuing a degree in Software Engineering with coursework covering data structures, algorithms, OOP, databases, and system design. Building strong computer science fundamentals as the backbone for AI/ML work.',
    tags: ['C++', 'Java', 'Python', 'Algorithms'],
  },
  {
    icon:        <BookMarked size={16} />,
    period:      '2024 — Present',
    role:        'Independent Study — AI/ML',
    org:         'Coursera / Fast.ai / Papers',
    description:
      'Supplementing formal education with structured self-study: completing ML specializations, reading research papers, and following industry developments in large language models, computer vision, and MLOps.',
    tags: ['Deep Learning', 'LLMs', 'Research', 'MLOps'],
  },
]

function TimelineItem({ item, index, isLast }) {
  return (
    <div
      className="relative flex gap-6 reveal initial-hidden"
      style={{ animationDelay: `${index * 110}ms` }}
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center z-10"
          style={{
            background: 'rgba(6,182,212,0.1)',
            color:      'var(--accent)',
            border:     '1px solid rgba(6,182,212,0.18)',
          }}
        >
          {item.icon}
        </div>
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{ background: 'var(--border)', minHeight: '32px' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3
              className="font-semibold text-base"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
            >
              {item.role}
            </h3>
            <p
              className="text-sm mt-0.5"
              style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
            >
              {item.org}
            </p>
          </div>
          <span
            className="text-xs px-2 py-1 rounded flex-shrink-0"
            style={{
              background:  'rgba(255,255,255,0.05)',
              color:       'var(--text-muted)',
              fontFamily:  'JetBrains Mono, monospace',
              border:      '1px solid var(--border)',
            }}
          >
            {item.period}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: 'var(--text-secondary)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 items-start">

          {/* Left */}
          <div className="md:sticky md:top-24 reveal initial-hidden">
            <p className="section-label">Experience & Focus</p>
            <h2 className="section-heading">
              Current{' '}
              <span style={{ color: 'var(--accent)' }}>trajectory</span>
            </h2>
            <p className="prose-text mt-4 text-sm">
              My journey into AI/ML is hands-on and deliberate — building real projects,
              studying systematically, and closing the gap between academic knowledge and
              industry practice.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { val: '3+',   label: 'Projects Built'   },
                { val: '2+',   label: 'Years Coding'     },
                { val: '100%', label: 'Open Source'      },
                { val: '∞',    label: 'Learning Mindset' },
              ].map(s => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl text-center"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent)' }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-2">
            {FOCUS_ITEMS.map((item, i) => (
              <TimelineItem
                key={item.role}
                item={item}
                index={i + 1}
                isLast={i === FOCUS_ITEMS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
