import { useMemo } from 'react'
import { useLang, useReveal, useSiteContent, useTheme } from './hooks.js'
import { applyContent } from './content.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import Faq from './components/Faq.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const { lang, t: baseT, toggleLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const content = useSiteContent()
  const t = useMemo(() => applyContent(baseT, lang, content), [baseT, lang, content])
  useReveal()

  return (
    <>
      <a className="skip-link" href="#home">{t.ui.skip}</a>

      <Header t={t} onToggleLang={toggleLang} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero t={t} theme={theme} />
        <Brands t={t} />
        <Faq t={t} />
        <Visit t={t} />
      </main>

      <Footer t={t} />
      <BackToTop label={t.ui.backToTop} />
    </>
  )
}
