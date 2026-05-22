export function smoothScrollToId(id, durationMs = 700) {
  const target = document.getElementById(id)
  if (!target) return

  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

  const step = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(1, elapsed / durationMs)
    const eased = easeInOut(progress)
    window.scrollTo(0, startY + distance * eased)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
