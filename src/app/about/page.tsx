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
    description:
      '22+ years of practice. One thesis. The math does the rest. Mark Berube, ChFC.',
    url: 'https://quantumcapital.com/about',
  },
}

const team = [
  {
    name: 'Mark Berube',
    title: 'Founder, President, ChFC',
    description:
      '22+ years as a financial advisor. Creator of the Quantum Compass. Author of The Quantum Letter. All research and managed account decisions originate with Mark.',
  },
  {
    name: 'Nick Adams',
    title: 'Director of Operations',
    description:
      'Owns content strategy, social presence, and the quantumcapital.com build. Responsible for bringing the thesis to the audience that needs to find it.',
  },
  {
    name: 'Darren Kane',
    title: 'Compliance Officer',
    description:
      'Written sign-off required before any copy or financial claim goes public. Ensures all Quantum Capital communications meet RIA regulatory standards.',
  },
  {
    name: 'Ike Fontaine',
    title: 'Creative & Media Partner',
    description:
      'getfuturemedia.com. Co-author on select Quantum Letter issues. Responsible for visual and media production.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <main className="pt-32">
        {/* Header */}
        <section className="pb-24 px-6 max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8] mb-6">
            About
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-3xl">
            22 years of practice. One thesis. The math does the rest.
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl leading-relaxed">
            Mark Berube is a Chartered Financial Consultant with over two decades of advisory
            experience. Quantum Capital is how he brings institutional-grade Ethereum research
            to the investors who are asking the right questions.
          </p>
        </section>

        {/* Mark's bio */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
                Mark Berube, ChFC
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Founder & President
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                Mark has advised clients for over 22 years. He holds the Chartered Financial
                Consultant (ChFC) designation — one of the most comprehensive financial planning
                credentials available. He manages approximately $54M in assets through Patriot
                Advisory Group LLC dba Quantum Capital, a state-registered RIA in New Hampshire.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                The Quantum Compass is Mark&apos;s framework: a rigorous application of Metcalfe&apos;s
                Law to Ethereum network data, producing price targets verified by the same
                methodology used by institutional ETH products at Grayscale and Fidelity. It is
                not a trading signal. It is a long-term valuation discipline.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-8">
                Mark&apos;s approach: &ldquo;If it was a prediction, I would want you to believe me.
                When it&apos;s a projection, I don&apos;t need you to believe me. It&apos;s true.
                Go do the math yourself.&rdquo;
              </p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Book a Call with Mark
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
              {[
                { value: '22+', label: 'Years as a financial advisor' },
                { value: '$54M', label: 'Assets under management (April 2026)' },
                { value: 'ChFC', label: 'Chartered Financial Consultant' },
                { value: 'NH RIA', label: 'State-registered investment adviser' },
                { value: '16', label: 'Quantum Letter issues published' },
                { value: '2026', label: 'Year Quantum Capital was established' },
              ].map((stat) => (
                <div key={stat.label} className="bg-black p-8">
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-[#555555] leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Firm */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              The Firm
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-12 max-w-xl">
              Patriot Advisory Group LLC dba Quantum Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
              {[
                { label: 'Legal Entity', value: 'Patriot Advisory Group LLC' },
                { label: 'DBA', value: 'Quantum Capital' },
                { label: 'Registration', value: 'NH Dept. of State, Business ID 1019244' },
                { label: 'Effective Date', value: 'February 25, 2026' },
                { label: 'Address', value: '1 New Hampshire Avenue, Suite 125, Portsmouth, NH 03801' },
                { label: 'Registration Status', value: 'State-registered RIA (New Hampshire)' },
              ].map((item) => (
                <div key={item.label} className="bg-black p-8">
                  <p className="text-xs uppercase tracking-widest text-[#555555] mb-2">{item.label}</p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              The Team
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-12">People behind Quantum Capital</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
              {team.map((member) => (
                <div key={member.name} className="bg-black p-10">
                  <p className="text-lg font-bold text-white mb-1">{member.name}</p>
                  <p className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8] mb-4">
                    {member.title}
                  </p>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Ready to talk to Mark directly?</h2>
              <p className="text-[#a0a0a0]">Book a call. No obligation. No sales pitch. Just the math.</p>
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
