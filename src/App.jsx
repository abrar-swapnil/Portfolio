import { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach(el => observer.observe(el))
    const rewriteTargets = document.querySelectorAll('[data-rewrite]')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const timers = new Map()

    const runRewrite = (el) => {
      const fullText = el.dataset.fullText || el.textContent || ''
      el.dataset.fullText = fullText

      if (timers.has(el)) {
        cancelAnimationFrame(timers.get(el))
        timers.delete(el)
      }

      if (prefersReduced) {
        el.textContent = fullText
        return
      }

      el.textContent = ''
      const charsPerSecond = 32
      const durationMs = Math.max(300, (fullText.length / charsPerSecond) * 1000)
      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min(1, (now - start) / durationMs)
        const count = Math.ceil(progress * fullText.length)
        el.textContent = fullText.slice(0, count)
        if (progress < 1) {
          timers.set(el, requestAnimationFrame(tick))
        }
      }

      timers.set(el, requestAnimationFrame(tick))
    }

    const resetRewrite = (el) => {
      const fullText = el.dataset.fullText || el.textContent || ''
      if (timers.has(el)) {
        cancelAnimationFrame(timers.get(el))
        timers.delete(el)
      }
      el.textContent = fullText
      el.classList.remove('rewrite-active')
    }

    const rewriteObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rewrite-active')
            runRewrite(entry.target)
          } else {
            resetRewrite(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    rewriteTargets.forEach(el => rewriteObserver.observe(el))

    const cards = document.querySelectorAll('.card')
    const handleMove = (event) => {
      const el = event.currentTarget
      const rect = el.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }

    const handleLeave = (event) => {
      const el = event.currentTarget
      el.style.removeProperty('--mx')
      el.style.removeProperty('--my')
    }

    if (canHover && !prefersReduced) {
      cards.forEach(card => {
        card.addEventListener('pointermove', handleMove)
        card.addEventListener('pointerleave', handleLeave)
      })
    }

    const sections = document.querySelectorAll('.section-block')
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-active')
          } else {
            entry.target.classList.remove('section-active')
          }
        })
      },
      { threshold: 0.35 }
    )

    sections.forEach(section => sectionObserver.observe(section))

    const flashSection = (id) => {
      if (prefersReduced) return
      if (!id) return
      const section = document.getElementById(id)
      if (!section || !section.classList.contains('section-block')) return
      section.classList.remove('section-flash')
      // Force reflow so the animation restarts
      void section.offsetWidth
      section.classList.add('section-flash')
      setTimeout(() => section.classList.remove('section-flash'), 900)
    }

    const onHashChange = () => {
      const id = window.location.hash.replace('#', '')
      flashSection(id)
    }

    const onDocClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')?.replace('#', '')
      if (id) flashSection(id)
    }

    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('click', onDocClick)

    return () => {
      observer.disconnect()
      rewriteObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('click', onDocClick)
      if (canHover && !prefersReduced) {
        cards.forEach(card => {
          card.removeEventListener('pointermove', handleMove)
          card.removeEventListener('pointerleave', handleLeave)
        })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div id="top" className="sr-only" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
