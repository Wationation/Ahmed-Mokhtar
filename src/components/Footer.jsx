import { socialLink } from '../content.js'
import { FacebookIcon, WhatsappIcon } from '../icons.jsx'

export default function Footer({ t }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <span className="footer-logo">
              <img src="/logo.png" alt="احمد مختار" />
            </span>
            <p className="footer-line" data-editable="footer.line">{t.footer.line}</p>
          </div>

          <nav className="footer-nav" aria-label={t.ui.quickLinks}>
            <span className="footer-nav-title">{t.ui.quickLinks}</span>
            <div className="footer-nav-links">
              <a href="#home">{t.nav.home}</a>
              <a href="#brands">{t.nav.brands}</a>
              <a href="#faq">{t.nav.faq}</a>
              <a href="#visit">{t.nav.visit}</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span className="footer-rights">
            <span className="footer-name">احمد مختار</span> <span dir="ltr">© {year}</span>{' '}
            <span data-editable="footer.rights">{t.footer.rights}</span>
          </span>

          <span className="foot-social">
            {t.notes?.footerSocial !== false && (
              <span className="foot-note">{t.footer.socialNote}</span>
            )}
            <a className="icon-btn" aria-label={t.visit.facebook} title={t.visit.facebook} data-editable="social.facebook" {...socialLink(t.social?.facebook)}>
              <FacebookIcon width={16} height={16} />
            </a>
            <a className="icon-btn" aria-label={t.visit.whatsapp} title={t.visit.whatsapp} data-editable="social.whatsapp" {...socialLink(t.social?.whatsapp)}>
              <WhatsappIcon width={16} height={16} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
