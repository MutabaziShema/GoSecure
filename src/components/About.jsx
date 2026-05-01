import SectionHeading from './SectionHeading'
import { ACCENT, NAVY, GOLD, OFFWHITE, BORDER, MUTED } from '../constants'

const icons = {
  verified: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  officer:  (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  whatsapp: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg>,
  location: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
}

const STATS = [
  { label: 'Verified drivers', icon: 'verified', dark: true,  desc: 'ID & background checked' },
  { label: 'Officer-managed', icon: 'officer',  dark: false, desc: 'Human-controlled dispatch' },
  { label: 'Easy booking',    icon: 'whatsapp', dark: true,  desc: 'No app download needed' },
  { label: 'Kigali-based',    icon: 'location', dark: false, desc: 'Serving Rwanda' },
]

export default function About() {
  return (
    <section style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <SectionHeading eyebrow="About us" title="About GoSecure" />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: MUTED, lineHeight: 1.75, margin: '24px 0 28px' }}>
              GoSecure is a trusted driver-dispatch service built to help people move safely in their own cars. We connect customers with verified drivers and manage every request through a human-controlled operations process.
            </p>
            <div style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, marginBottom: 36 }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 600, color: NAVY, margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                "Our goal is simple: safe hands for every journey."
              </p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['Verified drivers', 'Human dispatch', 'Kigali-based'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: ACCENT, background: 'rgba(0,168,107,0.08)', border: '1px solid rgba(0,168,107,0.2)', borderRadius: 100, padding: '5px 14px' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {STATS.map(stat => (
              <div key={stat.label} style={{ background: stat.dark ? NAVY : OFFWHITE, borderRadius: 20, padding: '28px 24px', border: stat.dark ? 'none' : `1px solid ${BORDER}` }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
                <div style={{ width: 44, height: 44, background: stat.dark ? 'rgba(0,168,107,0.15)' : 'rgba(11,31,58,0.07)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  {icons[stat.icon](stat.dark ? ACCENT : NAVY)}
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: stat.dark ? '#fff' : NAVY, marginBottom: 4 }}>{stat.label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: stat.dark ? 'rgba(255,255,255,0.6)' : '#718096' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
