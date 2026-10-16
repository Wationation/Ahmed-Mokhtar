import { useEffect, useState } from 'react'
import { STRINGS } from './strings.js'

const SECTIONS = ['home', 'brands', 'faq', 'visit']

function readStored(key, fallback = '') {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* private mode — ignore */
  }
}

/** Language (ar/en) + html lang/dir/title sync + persistence. */
export function useLang() {
  const [lang, setLang] = useState(() => (readStored('am-lang', 'ar') === 'en' ? 'en' : 'ar'))
  const t = STRINGS[lang]

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = t.dir
    document.title = lang === 'ar' ? 'احمد مختار | صيدلية' : 'احمد مختار | Pharmacy'
    writeStored('am-lang', lang)
  }, [lang, t.dir])

  return { lang, t, toggleLang: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')) }
}

/** Light/dark theme + persistence + theme-color sync. Defaults to the OS preference. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = readStored('am-theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStored('am-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'dark' ? '#070c1f' : '#012cc8'
  }, [theme])

  return { theme, toggleTheme: () => setTheme((v) => (v === 'dark' ? 'light' : 'dark')) }
}

/** Reveal-on-scroll: adds .is-in once per [data-reveal] element. No-ops when IO is missing. */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

/** Scroll-spy for the sticky nav: returns the id of the section currently in view. */
export function useScrollSpy() {
  const [active, setActive] = useState(SECTIONS[0])

  useEffect(() => {
    let ticking = false

    const measure = () => {
      ticking = false
      const probe = window.scrollY + 130
      let current = SECTIONS[0]
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top + window.scrollY <= probe) current = id
      }
      const doc = document.documentElement
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 8) {
        current = SECTIONS[SECTIONS.length - 1]
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(measure)
      }
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return active
}

/** "Scrolled past the top" flag for the header shadow. */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/** Admin-managed content overrides. Resolves to null when the API is unavailable. */
export function useSiteContent() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    let alive = true
    fetch('/api/content')
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (alive && json && typeof json === 'object') setContent(json)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  return content
}
