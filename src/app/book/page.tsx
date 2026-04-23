import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'
import Divider from '@/components/Divider'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Schedule a call with Mark Berube, ChFC. Walk through the Quantum Compass, your positioning options, and whether a managed account relationship makes sense for you.',
  alternates: { canonical: 'https://quantumcapital.com/book' },
  openGraph: {
    title: 'Book a Consultation | Quantum Capital',
    description: 'Schedule a call with Mark Berube, ChFC. No obligation. No sales pitch. Just the math.',
    url: 'https://quantumcapital.com/book',
  },
}

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL

const expectItems = [
  { label: 'What to expect', value: 'A 30-minute conversation about the thesis, your current situation, and whether managed Ethereum exposure fits your portfolio.' },
  { label: 'Who this is for', value: "Investors with $250K+ in investable assets who want concentrated, thesis-driven positioning, not a 60/40 portfolio." },
  { label: 'What you get', value: "Mark's direct take on the Quantum Compass targets, current positioning rationale, and a clear next step if it makes sense." },
]

export default function BookPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#0f172a]">
      <Nav />

      <main>

        {/* ── Header ── white */}
        <section className="pt-40 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>Book a Call</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 max-w-2xl" style={{ color: '#0f172a' }}>
              Ready to put the thesis to work?
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#475569' }}>
              Book a call with Mark Berube, ChFC. No obligation. No sales pitch. Just the math.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Main content ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f5f7ff' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left - context */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>
                About the call
              </p>
              <div className="space-y-4 mb-10">
                {expectItems.map((item) => (
                  <div key={item.label} className="p-6 rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#94a3b8' }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#94a3b8' }}>
                Not ready to book yet?
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/thesis" className="text-sm font-medium transition-colors" style={{ color: '#3b6ee8' }}>
                  Read the investment thesis first →
                </Link>
                <Link href="/compass" className="text-sm font-medium transition-colors" style={{ color: '#3b6ee8' }}>
                  See the Quantum Compass price targets →
                </Link>
                <a
                  href="https://thequantumletter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#3b6ee8' }}
                >
                  Subscribe to The Quantum Letter →
                </a>
              </div>
            </div>

            {/* Right - Calendly embed or fallback */}
            <div className="rounded-sm overflow-hidden bg-white" style={{ border: '1px solid #e2e8f0', minHeight: '500px' }}>
              {CALENDLY_URL ? (
                <iframe
                  src={CALENDLY_URL}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book a call with Mark Berube"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-10 text-center" style={{ minHeight: '500px' }}>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#94a3b8' }}>Scheduling</p>
                  <p className="text-sm leading-relaxed max-w-xs mb-8" style={{ color: '#475569' }}>
                    Set{' '}
                    <code className="text-xs px-1.5 py-0.5 rounded font-mono" style={{ background: '#f1f5f9', color: '#3b6ee8' }}>
                      NEXT_PUBLIC_CALENDLY_URL
                    </code>{' '}
                    in your environment variables to enable inline booking.
                  </p>
                  <a
                    href="mailto:contact@quantumcapital.com"
                    className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#1e3a8a] text-white font-semibold px-8 py-4 rounded-full transition-colors"
                  >
                    Email to Schedule
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <ComplianceFooter />
    </div>
  )
}
