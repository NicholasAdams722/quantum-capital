import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'

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
  { label: 'Who this is for', value: "Investors with $250K+ in investable assets who want concentrated, thesis-driven positioning — not a 60/40 portfolio." },
  { label: 'What you get', value: "Mark's direct take on the Quantum Compass targets, current positioning rationale, and a clear next step if it makes sense." },
]

export default function BookPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#04091a', color: '#ffffff' }}>
      <Nav />

      <main>

        {/* ── Header ── dark navy */}
        <section
          className="pt-40 pb-16 px-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #04091a 0%, #081428 60%, #04091a 100%)' }}
        >
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, #3b6ee8 0%, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto relative">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-6">Book a Call</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 max-w-2xl">
              Ready to put the thesis to work?
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#a0aec0' }}>
              Book a call with Mark Berube, ChFC. No obligation. No sales pitch. Just the math.
            </p>
          </div>
        </section>

        {/* ── Main content ── WHITE with dark embed area */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left — context */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>
                About the call
              </p>
              <div className="space-y-4 mb-10">
                {expectItems.map((item) => (
                  <div key={item.label} className="p-6 rounded-sm" style={{ background: '#f5f7ff', border: '1px solid #e0e6f5' }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#8892aa' }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5578' }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#8892aa' }}>
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

            {/* Right — Calendly embed or fallback */}
            <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #1a2a50', background: '#08142e', minHeight: '500px' }}>
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
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#4a5578' }}>Scheduling</p>
                  <p className="text-sm leading-relaxed max-w-xs mb-8" style={{ color: '#a0aec0' }}>
                    Set{' '}
                    <code className="text-xs px-1 py-0.5 rounded" style={{ color: '#6b9bf5', background: '#0d1b3e' }}>
                      NEXT_PUBLIC_CALENDLY_URL
                    </code>{' '}
                    in your environment variables to enable inline booking.
                  </p>
                  <a
                    href="mailto:contact@quantumcapital.com"
                    className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
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
