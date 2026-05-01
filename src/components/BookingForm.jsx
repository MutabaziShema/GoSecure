import SectionHeading from './SectionHeading'
import { ACCENT, NAVY, OFFWHITE, BORDER, GOLD, HOTLINE } from '../constants'

const steps = [
  { icon: '📋', label: 'Fill the form', desc: 'Share your name, location, destination and pickup time.' },
  { icon: '✅', label: 'We confirm',    desc: 'Our team reviews your request and assigns a driver.' },
  { icon: '🚗', label: 'Driver arrives', desc: 'Your verified driver arrives ready to go.' },
]

export default function BookingForm({ onBookNow }) {
  return (
    <section id="booking" style={{ background: `linear-gradient(180deg, ${OFFWHITE} 0%, #fff 100%)`, padding: '96px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <SectionHeading
          eyebrow="Book a driver"
          title="Ready when you are"
          subtitle="Request a verified driver in minutes. No app. No waiting. Just fill the form and our team handles the rest."
          center
        />

        {/* Step cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 56, marginBottom: 56 }}>
          {steps.map(({ icon, label, desc }) => (
            <div key={label} style={{ background: '#fff', borderRadius: 16, border: `1.5px solid ${BORDER}`, padding: '28px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(11,31,58,0.05)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 8 }}>{label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#718096', lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div style={{ background: NAVY, borderRadius: 20, padding: '48px 40px', textAlign: 'center', boxShadow: '0 20px 60px rgba(11,31,58,0.18)', position: 'relative', overflow: 'hidden' }}>
          {/* Gold accent line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, rgba(245,184,75,0.3))` }} />

          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 28, color: '#fff', margin: '0 0 12px' }}>
            Book your driver now
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.65)', margin: '0 0 36px', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Human-dispatched, always. Available around the clock in Kigali.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onBookNow}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: ACCENT, color: '#fff', border: 'none', padding: '16px 32px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,168,107,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#009960')}
              onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a Driver
            </button>
            <a
              href={`tel:${HOTLINE}`}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.2)', padding: '16px 32px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/>
              </svg>
              {HOTLINE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
