import SectionHead from './SectionHead.jsx'
import { CapsuleIcon } from '../icons.jsx'

export default function Brands({ t }) {
  return (
    <section className="brands" id="brands" aria-label={t.brands.title}>
      <div className="wrap">
        <SectionHead
          center
          title={t.brands.title}
          desc={t.brands.desc}
          editable={{ title: 'brands.title', desc: 'brands.desc' }}
        />

        <div className="tiles" data-editable="brands.list">
          {t.brands.tiles.map((label, i) => (
            <div
              className="tile"
              key={label}
              data-reveal
              style={{ '--d': `${Math.min(i, 10) * 40}ms` }}
            >
              <span className="t-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span className="t-ico" aria-hidden="true">
                <CapsuleIcon width={17} height={17} />
              </span>
              <span className="t-label ph" dir="ltr">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
