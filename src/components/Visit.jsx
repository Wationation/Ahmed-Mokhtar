import { socialLink } from '../content.js'
import { ArrowUpRightIcon, FacebookIcon, MapPinIcon, WhatsappIcon } from '../icons.jsx'

export default function Visit({ t }) {
  const showNote = t.notes?.visitSocial !== false

  return (
    <section className="visit" id="visit" aria-label={t.visit.title}>
      <div className="wrap">
        <div className="visit-card" data-reveal>
          <svg className="visit-cross" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M60 27v66M27 60h66" stroke="currentColor" strokeWidth="26" strokeLinecap="round" fill="none" />
          </svg>

          <div className="visit-grid">
            <div className="visit-info">
              <h2 data-editable="visit.title">{t.visit.title}</h2>

              <address className="address-card">
                <span className="address-ico" aria-hidden="true">
                  <MapPinIcon width={19} height={19} />
                </span>
                <span className="address-text">
                  <small>{t.visit.addressLabel}</small>
                  <strong className="ph" dir="ltr" data-editable="visit.address">
                    {t.visit.addressValue}
                  </strong>
                </span>
              </address>
            </div>

            <div className="visit-social">
              <p className="soc-label" data-editable="social.label">{t.visit.socialLabel}</p>

              <div className="social-row">
                <a className="soc-btn" title={t.visit.socialNote} data-editable="social.facebook" {...socialLink(t.social?.facebook)}>
                  <span className="soc-ico"><FacebookIcon /></span>
                  <span className="soc-name">{t.visit.facebook}</span>
                  <ArrowUpRightIcon className="soc-ext" width={16} height={16} />
                </a>
                <a className="soc-btn outline" title={t.visit.socialNote} data-editable="social.whatsapp" {...socialLink(t.social?.whatsapp)}>
                  <span className="soc-ico"><WhatsappIcon /></span>
                  <span className="soc-name">{t.visit.whatsapp}</span>
                  <ArrowUpRightIcon className="soc-ext" width={16} height={16} />
                </a>
              </div>

              {showNote && <p className="soc-note">{t.visit.socialNote}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
