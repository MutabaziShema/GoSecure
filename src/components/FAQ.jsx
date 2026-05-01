import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { ACCENT, NAVY, OFFWHITE, BORDER, MUTED } from '../constants'

const ITEMS = [
  { q: 'Do I need to download an app?', a: 'No. You can book through our online form or by calling our hotline. No app download is required.' },
  { q: 'Does the driver come with a car?', a: 'No. GoSecure provides a trusted driver to drive you in your own car. You keep control of your vehicle.' },
  { q: 'Can I book immediately?', a: 'Yes, you can request a driver anytime. Availability depends on driver location and confirmation by our operations team.' },
  { q: 'Are drivers verified?', a: 'Yes. All drivers are reviewed and verified before being assigned to any customer request.' },
  { q: 'Can I cancel?', a: 'Yes. Cancellation rules may apply depending on timing and whether a driver has already been assigned.' },
  { q: 'How is my request managed?', a: 'Every request is handled by an operations officer who monitors it until completion or cancellation.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: OFFWHITE, padding: '96px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" subtitle="Everything you need to know before booking your first trip." center />
        <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {ITEMS.map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, border: `1.5px solid ${open === i ? 'rgba(0,168,107,0.3)' : BORDER}`, overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 600, color: NAVY, lineHeight: 1.4, paddingRight: 16 }}>{item.q}</span>
                <div style={{ width: 32, height: 32, flexShrink: 0, background: open === i ? ACCENT : OFFWHITE, border: `1px solid ${open === i ? ACCENT : BORDER}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#fff' : NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: MUTED, lineHeight: 1.65, padding: '16px 24px 20px', margin: 0, borderTop: `1px solid ${BORDER}` }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
