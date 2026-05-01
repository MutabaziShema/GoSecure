import SectionHeading from './SectionHeading'
import { ACCENT, NAVY, OFFWHITE, BORDER, MUTED } from '../constants'

const FEATURES = [
  { title: 'Verified drivers', desc: 'Every driver is reviewed and verified before being assigned to any customer request.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg> },
  { title: 'Human-controlled dispatch', desc: 'Our operations officers personally manage every request — no automated black boxes.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { title: 'Simple form & hotline', desc: 'Book through our online form or call our hotline. No app download required.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg> },
  { title: 'Reliable follow-up', desc: 'We track every request through to completion and keep you informed at each stage.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: 'Secure request handling', desc: 'Your trip details are handled with care and recorded for full accountability.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { title: 'Built for peace of mind', desc: 'Every design decision — from booking to drop-off — is made to keep you feeling safe.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
]

export default function WhyGoSecure() {
  return (
    <section id="why-gosecure" style={{ background: OFFWHITE, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading eyebrow="Why choose us" title="Built differently, by design" subtitle="GoSecure isn't a taxi app. It's a professional driver-dispatch service built around trust." center />
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60 }}>
          {FEATURES.map(feat => (
            <div key={feat.title} style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', border: `1px solid ${BORDER}`, cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(11,31,58,0.09)'; e.currentTarget.style.borderColor = 'rgba(0,168,107,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = BORDER }}>
              <div style={{ width: 52, height: 52, background: 'rgba(0,168,107,0.08)', border: '1px solid rgba(0,168,107,0.15)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT, marginBottom: 20 }}>{feat.icon}</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: NAVY, margin: '0 0 10px' }}>{feat.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
