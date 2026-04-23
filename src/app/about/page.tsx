import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'

export const metadata: Metadata = {
  title: 'About Mark Berube',
  description:
    'Mark Berube, ChFC — Founder and President of Quantum Capital. 22+ years as a financial advisor, ~$54M AUM, creator of the Quantum Compass Metcalfe valuation framework.',
  alternates: { canonical: 'https://quantumcapital.com/about' },
  openGraph: {
    title: 'About Mark Berube | Quantum Capital',
    description: '22+ years of practice. One thesis. The math does the rest.',
    url: 'https://quantumcapital.com/about',
  },
}

const team = [
  {
    name: 'Mark Berube', title: 'Founder, President, ChFC',
    description: '22+ years as a financial advisor. Creator of the Quantum Compass. Author of The Quantum Letter. All research and managed account decisions originate with Mark.',
  },
  {
    name: 'Nick Adams', title: 'Director of Operations',
    description: 'Owns content strategy, social presence, and the quantumcapital.com build. Responsible for bringing the thesis to the audience that needs to find it.',
  },
  {
    name: 'Darren Kane', title: 'Compliance Officer',
    description: 'Written sign-off required before any copy or financial claim goes public. Ensures all Quantum Capital communications meet RIA regulatory standards.',
  },
  {
    name: 'Ike Fontaine', title: 'Creative & Media Partner',
    description: 'getfuturemedia.com. Co-author on select Quantum Letter issues. Responsible for visual and media production.',
  },
]

const firmDetails = [
  { label: 'Legal Entity', value: 'Patriot Advisory Group LLC' },
  { label: 'DBA', value: 'Quantum Capital' },
  { label: 'Registration', value: 'NH Dept. of State, Business ID 1019244' },
  { label: 'Effective Date', value: 'February 25, 2026' },
  { label: 'Address', value: '1 New Hampshire Avenue, Suite 125, Portsmouth, NH 03801' },
  { label: 'Registration Status', value: 'State-registered RIA (New Hampshire)' },
]

const stats = [
  { value: '22+', label: 'Years as a financial advisor' },
  { value: '$54M', label: 'Assets under management (April 2026)' },
  { value: 'ChFC', label: 'Chartered Financial Consultant' },
  { value: 'NH RIA', label: 'State-registered investment adviser' },
  { value: '16', label: 'Quantum Letter issues published' },
  { value: '2026', label: 'Year Quantum Capital was established' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#0f172a]">
      <Nav />

      <main>

        {/* ── Header ── white */}
        <section className="pt-40 pb-24 px-6" style={{ borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>About</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-3xl" style={{ color: '#0f172a' }}>
              22 years of practice. One thesis. The math does the rest.
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#475569' }}>
              Mark Berube is a Chartered Financial Consultant with over two decades of advisory
              experience. Quantum Capital is how he brings institutional-grade Ethereum research
              to the investors who are asking the right questions.
            </p>
          </div>
        </section>

        {/* ── Mark's bio ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                Mark Berube, ChFC
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                Founder &amp; President
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                Mark has advised clients for over 22 years. He holds the Chartered Financial
                Consultant (ChFC) designation — one of the most comprehensive financial planning
                credentials available. He manages approximately $54M in assets through Quantum Capital,
                a DBA of Patriot Advisory Group LLC and a state-registered RIA in New Hampshire.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                The Quantum Compass is Mark&apos;s framework: a rigorous application of Metcalfe&apos;s
                Law to Ethereum network data, producing price targets verified by the same
                methodology used by institutional ETH products at Grayscale and Fidelity.
              </p>
              <blockquote className="border-l-4 pl-6 mb-8" style={{ borderColor: '#3b6ee8' }}>
                <p className="italic leading-relaxed" style={{ color: '#475569' }}>
                  &ldquo;If it was a prediction, I would want you to believe me. When it&apos;s a
                  projection, I don&apos;t need you to believe me. It&apos;s true. Go do the math
                  yourself.&rdquo;
                </p>
                <p className="text-xs mt-3" style={{ color: '#94a3b8' }}>— Mark Berube, ChFC</p>
              </blockquote>
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#1e3a8a] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Book a Call with Mark
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-8 rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
                  <p className="text-3xl font-black mb-1" style={{ color: '#1e3a8a' }}>{stat.value}</p>
                  <p className="text-xs leading-snug" style={{ color: '#94a3b8' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Firm ── white */}
        <section className="py-24 px-6" style={{ borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>The Firm</p>
            <h2 className="text-3xl font-bold tracking-tight mb-12 max-w-xl" style={{ color: '#0f172a' }}>
              Quantum Capital is a DBA of Patriot Advisory Group LLC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e8f0] overflow-hidden rounded-sm">
              {firmDetails.map((item) => (
                <div key={item.label} className="p-8 bg-white">
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#94a3b8' }}>{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: '#0f172a' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>The Team</p>
            <h2 className="text-3xl font-bold tracking-tight mb-12" style={{ color: '#0f172a' }}>
              People behind Quantum Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {team.map((member) => (
                <div key={member.name} className="p-10 rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
                  <p className="text-lg font-bold mb-1" style={{ color: '#0f172a' }}>{member.name}</p>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                    {member.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── dark */}
        <section className="py-24 px-6" style={{ background: '#0f172a' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Ready to talk to Mark directly?</h2>
              <p style={{ color: '#64748b' }}>Book a call. No obligation. No sales pitch. Just the math.</p>
            </div>
            <Link
              href="/book"
              className="shrink-0 inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </section>

      </main>
      <ComplianceFooter />
    </div>
  )
}
