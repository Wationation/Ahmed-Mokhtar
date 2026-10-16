/** Consistent section header: kicker chip + title + description. */
export default function SectionHead({ kicker, title, desc, center = false, editable = {} }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`} data-reveal>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 data-editable={editable.title}>{title}</h2>
      <p className="desc" data-editable={editable.desc}>{desc}</p>
    </div>
  )
}
