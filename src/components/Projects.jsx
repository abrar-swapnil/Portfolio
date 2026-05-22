 
import { Github, ExternalLink, BarChart2, TrendingUp, Brain } from 'lucide-react'

const PROJECTS = [
  {
    number:      '01',
    icon:        <BarChart2 size={18} />,
    title:       'Superstore Data Analysis',
    description:
      'End-to-end analysis of a large retail superstore dataset. Explored sales trends, regional performance, and profit drivers using Python. Identified key business insights to improve decision-making through structured EDA and statistical summaries.',
    tech:        ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    github:      'https://github.com/abrar-swapnil/superstore-data-analysis',
    status:      'Complete',
    statusColor: 'rgba(34,197,94,0.15)',
    statusText:  'rgb(134,239,172)',
  },
  {
    number:      '02',
    icon:        <TrendingUp size={18} />,
    title:       'Data Visualization & EDA Project',
    description:
      'Comprehensive exploratory data analysis pipeline covering data cleaning, feature relationships, outlier detection, and storytelling through visualizations. Built reusable utilities for rapid EDA on structured datasets.',
    tech:        ['Python', 'Pandas', 'Seaborn', 'Plotly', 'Scikit-learn', 'Jupyter'],
    github:      'https://github.com/abrar-swapnil/Data-Visualization-EDA',
    status:      'Complete',
    statusColor: 'rgba(34,197,94,0.15)',
    statusText:  'rgb(134,239,172)',
  },
  {
    number:      '03',
    icon:        <Brain size={18} />,
    title:       'ML Classification Project',
    description:
      'Upcoming machine learning project focused on building, training, and evaluating classification models. Will cover the full ML pipeline — data preprocessing, model selection, hyperparameter tuning, and performance analysis.',
    tech:        ['Python', 'TensorFlow', 'Scikit-learn', 'PyTorch', 'Pandas'],
    github:      '#',
    status:      'In Progress',
    statusColor: 'rgba(6,182,212,0.12)',
    statusText:  'var(--accent)',
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className="card p-7 flex flex-col gap-5 reveal group"
      style={{ '--delay': `${index * 120}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(6,182,212,0.1)',
              color:      'var(--accent)',
              border:     '1px solid rgba(6,182,212,0.15)',
            }}
          >
            {project.icon}
          </div>
          {/* Number */}
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize:   '0.65rem',
              color:      'var(--text-muted)',
            }}
          >
            {project.number}
          </span>
        </div>

        {/* Status badge */}
        <span
          className="text-xs px-2.5 py-1 rounded-full"
          style={{
            background:  project.statusColor,
            color:       project.statusText,
            fontFamily:  'JetBrains Mono, monospace',
            fontSize:    '0.65rem',
            letterSpacing: '0.04em',
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold leading-snug"
        style={{
          fontFamily:    'Syne, sans-serif',
          color:         'var(--text)',
          letterSpacing: '-0.01em',
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive flex items-center gap-2 text-sm transition-colors"
          style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <Github size={14} />
          View Source
        </a>
        {project.status === 'Complete' && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <ExternalLink size={14} />
            Open
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-28 section-block section-alt"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-lg reveal" style={{ '--delay': '0ms' }}>
            <p className="section-label">Projects</p>
            <h2 id="projects-title" className="section-heading">
              <span className="rewrite-text" data-rewrite>What I've </span>
              <span style={{ color: 'var(--accent)' }}>built</span>
            </h2>
            <p className="prose-text hover-lift mt-3 text-sm rewrite-text" data-rewrite>
              A selection of data science and ML projects — from exploratory analysis to predictive modelling.
            </p>
          </div>

          <a
            href="https://github.com/abrar-swapnil"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm reveal self-start sm:self-auto"
            style={{ gap: '8px', textDecoration: 'none' }}
          >
            <Github size={15} />
            View all on GitHub
          </a>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
