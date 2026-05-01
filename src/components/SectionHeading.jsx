import { ACCENT, NAVY, MUTED } from '../constants'

export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 600 : '100%', margin: center ? '0 auto' : '0' }}>
      {eyebrow && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
          <div style={{ width: 20, height: 2, background: ACCENT }} />
          {eyebrow}
          <div style={{ width: 20, height: 2, background: ACCENT }} />
        </div>
      )}
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 42px)', color: NAVY, margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: MUTED, lineHeight: 1.65, margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
