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
    <div className="min-h-screen font-sans" style={{ background: '#04091a', color: '#ffffff' }}>
      <Nav />

      <main>

        {/* ── Header ── dark navy */}
        <section
          className="pt-40 pb-32 px-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #04091a 0%, #081428 60%, #04091a 100%)' }}
        >
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 80%, #3b6ee8 0%, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto relative">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-6">About</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-3xl">
              22 years of practice. One thesis. The math does the rest.
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#a0aec0' }}>
              Mark Berube is a Chartered Financial Consultant with over two decades of advisory
              experience. Quantum Capital is how he brings institutional-grade Ethereum research
              to the investors who are asking the right questions.
            </p>
          </div>
        </section>

        {/* ── Mark's bio ── WHITE */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                Mark Berube, ChFC
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0a0f1e' }}>
                Founder &amp; President
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#4a5578' }}>
                Mark has advised clients for over 22 years. He holds the Chartered Financial
                Consultant (ChFC) designation — one of the most comprehensive financial planning
                credentials available. He manages approximately $54M in assets through Patriot
                Advisory Group LLC dba Quantum Capital, a state-registered RIA in New Hampshire.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: '#4a5578' }}>
                The Quantum Compass is Mark&apos;s framework: a rigorous application of Metcalfe&apos;s
                Law to Ethereum network data, producing price targets verified by the same
                methodology used by institutional ETH products at Grayscale and Fidelity.
              </p>
              <blockquote className="border-l-4 pl-6 mb-8" style={{ borderColor: '#3b6ee8' }}>
                <p className="italic leading-relaxed" style={{ color: '#4a5578' }}>
                  &ldquo;If it was a prediction, I would want you to believe me. When it&apos;s a
                  projection, I don&apos;t need you to believe me. It&apos;s true. Go do the math
                  yourself.&rdquo;
                </p>
                <p className="text-xs mt-3" style={{ color: '#8892aa' }}>— Mark Berube, ChFC</p>
              </blockquote>
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Book a Call with Mark
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-8 rounded-sm" style={{ background: '#f0f4ff', border: '1px solid #e0e6f5' }}>
                  <p className="text-3xl font-black mb-1" style={{ color: '#1e3a8a' }}>{stat.value}</p>
                  <p className="text-xs leading-snug" style={{ color: '#8892aa' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Firm ── dark navy */}
        <section className="py-24 px-6" style={{ background: '#08142e' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0aec0] mb-4">The Firm</p>
            <h2 className="text-3xl font-bold tracking-tight mb-12 max-w-xl text-white">
              Patriot Advisory Group LLC dba Quantum Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: '#1a2a50' }}>
              {firmDetails.map((item) => (
                <div key={item.label} className="p-8" style={{ background: '#0d1b3e' }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#4a5578' }}>{item.label}</p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── light */}
        <section className="py-24 px-6" style={{ background: '#f5f7ff' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>The Team</p>
            <h2 className="text-3xl font-bold tracking-tight mb-12" style={{ color: '#0a0f1e' }}>
              People behind Quantum Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member) => (
                <div key={member.name} className="p-10 rounded-sm" style={{ background: '#ffffff', border: '1px solid #e0e6f5' }}>
                  <p className="text-lg font-bold mb-1" style={{ color: '#0a0f1e' }}>{member.name}</p>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                    {member.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a5578' }}>{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── blue gradient */}
        <section
          className="py-24 px-6"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b6ee8 100%)' }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Ready to talk to Mark directly?</h2>
              <p style={{ color: '#bfdbfe' }}>Book a call. No obligation. No sales pitch. Just the math.</p>
            </div>
            <Link
              href="/book"
              className="shrink-0 inline-flex items-center justify-center bg-white hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors"
              style={{ color: '#1e3a8a' }}
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
