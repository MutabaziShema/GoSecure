import SectionHeading from './SectionHeading'
import { ACCENT, NAVY, GOLD, OFFWHITE, BORDER, MUTED } from '../constants'

const STEPS = [
  { num: '01', title: 'Request a driver', desc: 'Tell us your pickup location, destination, preferred time, and car type.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
  { num: '02', title: 'We confirm your request', desc: 'Our operations officer checks the details and contacts you if needed.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg> },
  { num: '03', title: 'We assign a verified driver', desc: 'A trusted driver is selected and confirmed for your trip.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 11l2 2 4-4" strokeWidth="2"/></svg> },
  { num: '04', title: 'Your journey is managed', desc: 'Our team follows the request until it is completed or cancelled.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" strokeWidth="2"/></svg> },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#fff', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${NAVY}, ${ACCENT}, ${GOLD})` }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading eyebrow="Simple process" title="How GoSecure works" subtitle="From request to completed journey — every step is managed by our team." center />
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 60, position: 'relative' }}>
          <div className="connector-line" style={{ position: 'absolute', top: 48, left: '12.5%', right: '12.5%', height: 2, background: `linear-gradient(90deg, ${ACCENT}, ${NAVY})`, opacity: 0.15, zIndex: 0 }} />
          {STEPS.map(step => (
            <div key={step.num} style={{ background: OFFWHITE, borderRadius: 20, padding: '32px 24px', position: 'relative', border: `1px solid ${BORDER}`, zIndex: 1 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(11,31,58,0.1)'; e.currentTarget.style.borderColor = ACCENT }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = BORDER }}>
              <div style={{ position: 'absolute', top: -14, right: 20, fontFamily: 'Poppins, sans-serif', fontSize: 48, fontWeight: 900, color: 'rgba(11,31,58,0.05)', lineHeight: 1, userSelect: 'none' }}>{step.num}</div>
              <div style={{ width: 56, height: 56, background: `linear-gradient(135deg, ${NAVY} 0%, #1a3560 100%)`, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT, marginBottom: 20, boxShadow: '0 4px 16px rgba(11,31,58,0.15)' }}>{step.icon}</div>
              <div style={{ width: 32, height: 3, background: GOLD, borderRadius: 2, marginBottom: 14 }} />
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 17, color: NAVY, margin: '0 0 10px' }}>{step.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
