import { ArrowUpRightIcon, CapsuleIcon, InfoIcon } from '../icons.jsx'
import GradientText from './GradientText.jsx'

// Title palette derived from the site tokens: navy + brand blues (light), white + brand blues (dark) — a touch deepened
const TITLE_COLORS = {
  light: ['#101a4a', '#0128b6', '#2b53e8', '#637fe8'],
  dark: ['#eef1ff', '#8fa2e8', '#637fe8', '#365ae8'],
}

function HeroVisual({ t }) {
  return (
    <div className="hero-visual" data-reveal>
      <div className={`hv-card${t.image ? ' has-photo' : ''}`} data-editable="hero.image">
        {t.image ? (
          <img className="hv-photo" src={t.image} alt={t.hero.title} />
        ) : (
          <>
            <svg className="hv-cross" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="crossGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" style={{ stopColor: 'var(--cross-a)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--cross-b)' }} />
                </linearGradient>
              </defs>
              <path
                d="M60 27v66M27 60h66"
                stroke="url(#crossGrad)"
                strokeWidth="26"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            <span className="hv-pill p1" aria-hidden="true"><CapsuleIcon width={22} height={22} /></span>
            <span className="hv-pill p2" aria-hidden="true"><CapsuleIcon width={18} height={18} /></span>
            <span className="hv-pill p3" aria-hidden="true"><CapsuleIcon width={20} height={20} /></span>
            <span className="hv-pill p4" aria-hidden="true"><CapsuleIcon width={24} height={24} /></span>

            {t.notes?.heroImage !== false && (
              <div className="hv-chip">
                <span className="hv-chip-line">
                  <InfoIcon width={15} height={15} />
                  <span dir="auto" className="ph">{t.hero.imagePlaceholder}</span>
                </span>
                {t.hero.imageSub && (
                  <span dir="auto" className="hv-chip-sub ph">{t.hero.imageSub}</span>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function Hero({ t, theme }) {
  return (
    <section className="hero" id="home">
      <div className="glow-a" aria-hidden="true" />
      <div className="glow-b" aria-hidden="true" />

      <div className="wrap hero-grid">
        <div className="hero-copy" data-reveal>
          <h1 data-editable="hero.title">
            <GradientText
              colors={TITLE_COLORS[theme] ?? TITLE_COLORS.light}
              animationSpeed={3}
              variant="flow"
              glow={theme === 'dark' ? 0.45 : 0.28}
            >
              {t.hero.title}
            </GradientText>
          </h1>
          <p className="lead" data-editable="hero.subtitle">{t.hero.subtitle}</p>
          <div className="hero-cta-row">
            <a className="cta" href="#visit">
              {t.hero.ctaPrimary}
              <ArrowUpRightIcon className="cta-ico" width={17} height={17} />
            </a>
            <a className="cta ghost" href="#faq">{t.hero.ctaSecondary}</a>
          </div>
        </div>

        <HeroVisual t={t} />
      </div>
    </section>
  )
}
