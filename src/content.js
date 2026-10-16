// Content overrides coming from the admin panel (GET /api/content).
// Everything is optional; anything missing falls back to STRINGS.

export function applyContent(base, lang, content) {
  if (!content) return base

  const out = { ...base }
  const hero = content.hero && content.hero[lang]
  const footer = content.footer && content.footer[lang]

  if (hero) out.hero = { ...base.hero, ...hero }
  if (footer) out.footer = { ...base.footer, ...footer }

  out.notes = content.notes || {}
  out.social = content.social || {}
  out.image = content.image || null

  return out
}

/** External social link props — falls back to the inert "#" like before. */
export function socialLink(url) {
  return url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : { href: '#' }
}
