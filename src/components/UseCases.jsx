import SectionHeading from './SectionHeading'
import { ACCENT, NAVY, OFFWHITE, BORDER, TEXT } from '../constants'

const CASES = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, text: "When you're tired and need someone to drive you home" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, text: "When you need a driver for your own car" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>, text: "When you need safe night movement" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, text: "When a family member needs a trusted driver" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, text: "When you need temporary driver support" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, text: "When you need professional driving assistance" },
]

export default function UseCases({ onBookNow }) {
  return (
    <section style={{ background: '#fff', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -200, top: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,31,58,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="usecases-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <SectionHeading eyebrow="Use cases" title="When GoSecure helps" subtitle="Life happens at all hours. GoSecure is here when you need a trusted driver most." />
            <button onClick={onBookNow} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: NAVY, color: '#fff', padding: '14px 28px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, border: 'none', cursor: 'pointer', marginTop: 32 }}
              onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.transform = 'none' }}>
              Book a trusted driver
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {CASES.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: OFFWHITE, borderRadius: 14, padding: '16px 20px', border: `1px solid ${BORDER}` }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'rgba(0,168,107,0.25)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(11,31,58,0.07)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = OFFWHITE; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ width: 40, height: 40, flexShrink: 0, background: NAVY, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT }}>{c.icon}</div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: TEXT, lineHeight: 1.4 }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
