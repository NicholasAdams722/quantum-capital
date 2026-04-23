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

export default function BookPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <main className="pt-32">
        <section className="px-6 max-w-6xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left — context */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8] mb-6">
                Book a Call
              </p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
                Ready to put the thesis to work?
              </h1>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                Book a call with Mark Berube, ChFC. He&apos;ll walk you through the Quantum Compass,
                your positioning options, and whether a managed account relationship makes sense
                for you.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-10">
                No obligation. No sales pitch. Just the math.
              </p>

              <div className="space-y-px bg-[#1a1a1a] mb-10">
                {[
                  { label: 'What to expect', value: 'A 30-minute conversation about the thesis, your current situation, and whether managed Ethereum exposure fits your portfolio.' },
                  { label: 'Who this is for', value: 'Investors with $250K+ in investable assets who want concentrated, thesis-driven positioning — not a 60/40 portfolio.' },
                  { label: 'What you get', value: 'Mark\'s direct take on the Quantum Compass targets, current positioning rationale, and a clear next step if it makes sense.' },
                ].map((item) => (
                  <div key={item.label} className="bg-black p-6">
                    <p className="text-xs uppercase tracking-widest text-[#555555] mb-2">{item.label}</p>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/thesis"
                  className="text-sm text-[#3b6ee8] hover:text-[#6b9bf5] transition-colors"
                >
                  Read the investment thesis first →
                </Link>
                <Link
                  href="/compass"
                  className="text-sm text-[#3b6ee8] hover:text-[#6b9bf5] transition-colors"
                >
                  See the Quantum Compass price targets →
                </Link>
              </div>
            </div>

            {/* Right — Calendly embed or fallback */}
            <div className="border border-[#1a1a1a] bg-[#0d0d0d] min-h-[600px] flex items-center justify-center p-10">
              {CALENDLY_URL ? (
                <iframe
                  src={CALENDLY_URL}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book a call with Mark Berube"
                  className="rounded"
                />
              ) : (
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-[#555555] mb-4">
                    Scheduling
                  </p>
                  <p className="text-[#a0a0a0] mb-8 text-sm leading-relaxed max-w-xs">
                    Set <code className="text-[#3b6ee8] text-xs">NEXT_PUBLIC_CALENDLY_URL</code> in
                    your environment variables to enable inline booking.
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
