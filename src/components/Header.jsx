import { useEffect, useRef, useState } from 'react'
import { useScrollSpy, useScrolled } from '../hooks.js'
import { CloseIcon, GlobeIcon, MoonIcon, SunIcon } from '../icons.jsx'

const NAV_IDS = ['home', 'brands', 'faq', 'visit']

export default function Header({ t, onToggleLang, theme, onToggleTheme }) {
  const active = useScrollSpy()
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  const items = [
    { id: 'home', label: t.nav.home },
    { id: 'brands', label: t.nav.brands },
    { id: 'faq', label: t.nav.faq },
    { id: 'visit', label: t.nav.visit }
  ]

  // While the drawer is open: lock scroll, close on Escape, focus the close button.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const first = drawerRef.current?.querySelector('a, button')
    if (first) first.focus({ preventScroll: true })
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      if (toggleRef.current) toggleRef.current.focus({ preventScroll: true })
    }
  }, [open])

  // Auto-close the drawer when the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const onChange = (e) => {
      if (e.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const themeLabel = theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap header-inner">
          <a className="logo-link" href="#home" aria-label="احمد مختار">
            <img src="/logo.png" alt="احمد مختار" />
          </a>

          <nav className="main-nav" aria-label={t.ui.mainNav}>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : undefined}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-action"
              onClick={onToggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            <button type="button" className="lang-btn" onClick={onToggleLang}>
              {t.langLabel}
            </button>

            <a className="cta header-cta" href="#visit">
              {t.nav.contact}
            </a>

            <button
              type="button"
              ref={toggleRef}
              className={`menu-btn${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div className="scrim" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            id="mobile-menu"
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={t.ui.mainNav}
            ref={drawerRef}
          >
            <div className="drawer-head">
              <img src="/logo.png" alt="احمد مختار" />
              <button type="button" className="icon-action" onClick={() => setOpen(false)} aria-label={t.ui.menuClose}>
                <CloseIcon />
              </button>
            </div>

            <nav className="drawer-nav" aria-label={t.ui.mainNav}>
              {items.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="dn-no">0{i + 1}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="drawer-foot">
              <button type="button" className="row-btn" onClick={onToggleLang}>
                <GlobeIcon />
                {t.langLabel}
              </button>
              <button type="button" className="row-btn" onClick={onToggleTheme}>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                {themeLabel}
              </button>
              <a className="cta" href="#visit" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
