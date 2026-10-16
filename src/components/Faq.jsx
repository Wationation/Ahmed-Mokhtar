import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRightIcon, PlusIcon } from '../icons.jsx'

function FaqItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className={`faq-item${open ? ' is-open' : ''}`} data-reveal style={{ '--d': `${index * 60}ms` }}>
      <h3 className="faq-q">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-ico" aria-hidden="true">
            <PlusIcon width={16} height={16} />
          </span>
          <span className="ph" dir="ltr">{item.q}</span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-panel">
        <div className="faq-panel-inner">
          <p dir="ltr" className="ph">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq({ t }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq" id="faq" aria-label={t.faq.title}>
      <div className="wrap faq-grid">
        <div className="faq-side">
          <SectionHead
            kicker={t.faq.kicker}
            title={t.faq.title}
            desc={t.faq.desc}
            editable={{ title: 'faq.title', desc: 'faq.desc' }}
          />
          <a className="cta ghost" href="#visit" data-reveal>
            {t.nav.contact}
            <ArrowUpRightIcon className="cta-ico" width={17} height={17} />
          </a>
        </div>

        <div className="faq-list" data-editable="faq.list">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
