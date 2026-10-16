// Minimal inline SVG icon set. All icons are aria-hidden; label the buttons around them.
const base = { viewBox: '0 0 24 24', width: 20, height: 20, 'aria-hidden': 'true' }

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z"
      />
    </svg>
  )
}

// Speech bubble (stroke) + classic phone handset (fill), scaled to sit inside it.
export function WhatsappIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5Z"
      />
      <g transform="translate(5.1 5.3) scale(0.575)">
        <path
          fill="currentColor"
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        />
      </g>
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
      </g>
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M20.3 14.4A8.6 8.6 0 0 1 9.6 3.7 8.6 8.6 0 1 0 20.3 14.4Z"
      />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8.6" />
        <path d="M3.4 12h17.2" />
        <ellipse cx="12" cy="12" rx="4" ry="8.6" />
      </g>
    </svg>
  )
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17 17 7M9.2 7H17v7.8"
      />
    </svg>
  )
}

export function ArrowUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19V5.6M5.8 11.8 12 5.6l6.2 6.2"
      />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 21.2s-6.8-5.6-6.8-10.7a6.8 6.8 0 1 1 13.6 0c0 5.1-6.8 10.7-6.8 10.7Z" />
        <circle cx="12" cy="10.4" r="2.5" />
      </g>
    </svg>
  )
}

export function InfoIcon(props) {
  return (
    <svg {...base} {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 11v5.4" />
        <path d="M12 7.6v.6" />
      </g>
    </svg>
  )
}

export function CapsuleIcon(props) {
  return (
    <svg {...base} {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="7.5" y="4" width="9" height="16" rx="4.5" transform="rotate(45 12 12)" />
        <path d="M8.6 15.4 15.4 8.6" />
      </g>
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 5.4v13.2M5.4 12h13.2"
      />
    </svg>
  )
}
