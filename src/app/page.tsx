import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'

export const metadata: Metadata = {
  title: 'Quantum Capital — Institutional Ethereum Research & Managed Accounts',
  description:
    "Ethereum is priced like a speculative asset. It's being built like infrastructure. Mark Berube, ChFC, applies Metcalfe's Law to manage Ethereum-focused accounts for serious investors.",
  alternates: { canonical: 'https://quantumcapital.com' },
}

const compassData = [
  { horizon: 'Today', daa: '700K', target: '$2,350' },
  { horizon: '90 Days (mid-July)', daa: '800K', target: '$3,070' },
  { horizon: '180 Days (mid-Oct)', daa: '1.0M', target: '$4,780' },
  { horizon: 'Year-End 2026', daa: '1.25M', target: '$7,350' },
]

const pillars = [
  {
    number: '01',
    title: 'The EVM is the Windows of Blockchain',
    body: 'Ethereum invented the Ethereum Virtual Machine in 2015. The entire industry adopted the standard. 85% of all blockchain traffic. 31,000 developers. Every major rollup, every real-world asset platform, every AI agent wallet runs on EVM. Eleven years of accumulated network effects that cannot be replicated.',
    stat: '85%',
    statLabel: 'of all blockchain traffic',
  },
  {
    number: '02',
    title: 'Ethereum is Ultrasound Money',
    body: "EIP-1559 burns ETH with every transaction — permanently. The Merge cut new issuance 88%. 30%+ of all ETH is locked in staking. As usage increases, supply decreases. It is the only commodity in the world with this property. This is code, not opinion.",
    stat: '88%',
    statLabel: 'reduction in new issuance post-Merge',
  },
  {
    number: '03',
    title: 'The Venmo Moment is 2027–2028',
    body: 'Smart wallets, sub-cent fees, ZK rollups, AI-compatible wallets — the infrastructure stack is complete or completing. By 2027–2028, a millennial opens an app that works exactly like Venmo and it runs on Ethereum without them knowing. We buy the toll road in 2026 before the traffic arrives.',
    stat: '40M',
    statLabel: 'smart wallet accounts live today',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-32 px-6 max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8] mb-6">
            Institutional Ethereum Research
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 max-w-4xl">
            Ethereum is priced like a speculation.{' '}
            <span className="text-[#a0a0a0]">It&apos;s being built like infrastructure.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl leading-relaxed mb-12">
            The gap between those two things is where we work. Mark Berube, ChFC, applies
            Metcalfe&apos;s Law — the same formula used by Grayscale and Fidelity analysts — to
            manage Ethereum-focused accounts for serious investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              Book a Call with Mark
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center justify-center border border-[#1a1a1a] hover:border-[#3b6ee8] text-[#a0a0a0] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              Read the Quantum Letter
            </Link>
          </div>
        </section>

        {/* The Gap */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
              The market prices what is live today. The thesis prices what is being built.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
              <div className="bg-black p-10">
                <p className="text-xs uppercase tracking-widest text-[#555555] mb-3">Current Price</p>
                <p className="text-5xl font-black text-[#a0a0a0] mb-2">~$2,350</p>
                <p className="text-sm text-[#555555]">Ethereum today (April 2026)</p>
              </div>
              <div className="bg-black p-10">
                <p className="text-xs uppercase tracking-widest text-[#555555] mb-3">Metcalfe Fair Value</p>
                <p className="text-5xl font-black text-white mb-2">$4,780</p>
                <p className="text-sm text-[#555555]">At 1M daily active addresses (mid-Oct projection)</p>
              </div>
              <div className="bg-black p-10">
                <p className="text-xs uppercase tracking-widest text-[#555555] mb-3">Year-End Target</p>
                <p className="text-5xl font-black text-[#3b6ee8] mb-2">$7,350</p>
                <p className="text-sm text-[#555555]">At 1.25M daily active addresses</p>
              </div>
            </div>
            <p className="text-xs text-[#555555] mt-4">
              Projections are the mathematical output of Metcalfe&apos;s Law (k × n²). Not investment advice.
              Formula source: CFA Institute Cryptoassets Valuation Guide.
            </p>
          </div>
        </section>

        {/* Why Ethereum — 3 Pillars */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Why Ethereum
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
              Three reasons the window is open right now.
            </h2>
            <div className="space-y-px bg-[#1a1a1a]">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="bg-black p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8] mb-4">
                      {pillar.number}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-[#a0a0a0] leading-relaxed max-w-2xl">{pillar.body}</p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="text-5xl font-black text-white">{pillar.stat}</p>
                    <p className="text-sm text-[#555555] mt-1 md:max-w-[140px]">{pillar.statLabel}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/thesis"
                className="text-[#3b6ee8] hover:text-[#6b9bf5] text-sm font-medium transition-colors"
              >
                Read the full investment thesis →
              </Link>
            </div>
          </div>
        </section>

        {/* Quantum Compass */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              The Quantum Compass
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl">
              Price targets from a formula, not a feeling.
            </h2>
            <p className="text-[#a0a0a0] mb-2 max-w-2xl">
              Network Value = k × n² &nbsp;|&nbsp; where n = daily active addresses, k = $565
            </p>
            <p className="text-xs text-[#555555] mb-12">
              Source: CFA Institute Cryptoassets Valuation Guide. Same methodology used by Grayscale (ETHE) and Fidelity (FETH) analysts.
            </p>

            <div className="border border-[#1a1a1a] overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#1a1a1a] bg-[#0d0d0d]">
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Horizon</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Daily Active Addresses</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Metcalfe Target</th>
                  </tr>
                </thead>
                <tbody>
                  {compassData.map((row, i) => (
                    <tr key={row.horizon} className={`border-b border-[#1a1a1a] ${i === compassData.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="px-6 py-5 text-[#a0a0a0] text-sm">{row.horizon}</td>
                      <td className="px-6 py-5 text-[#a0a0a0] text-sm font-mono">{row.daa}</td>
                      <td className={`px-6 py-5 text-lg font-bold ${i === compassData.length - 1 ? 'text-[#3b6ee8]' : 'text-white'}`}>
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#555555] mt-4 max-w-2xl">
              These figures represent the mathematical output of Metcalfe&apos;s Law applied to Ethereum
              network data. They are projections, not predictions or guarantees. Not investment advice.
              All investments involve risk, including loss of principal.
            </p>

            <div className="mt-8">
              <Link
                href="/compass"
                className="text-[#3b6ee8] hover:text-[#6b9bf5] text-sm font-medium transition-colors"
              >
                Explore the full Quantum Compass →
              </Link>
            </div>
          </div>
        </section>

        {/* The Quantum Letter */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
                  The Quantum Letter
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
                  Free research. Institutional rigor. No hype.
                </h2>
              </div>
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 border border-[#1a1a1a] hover:border-[#3b6ee8] text-[#a0a0a0] hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
              >
                Subscribe free →
              </a>
            </div>

            {/* Placeholder cards — replace with Ghost API data when wired */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
              {[
                {
                  issue: 'Issue 16',
                  date: 'April 17, 2026',
                  title: 'ETH Research: ETHA, SBET, and the Portfolio Positioning Case',
                  excerpt: 'A breakdown of the three instruments we use for Ethereum exposure — and why the structure matters as much as the thesis.',
                },
                {
                  issue: 'Issue 15',
                  date: 'April 3, 2026',
                  title: 'The CLARITY Act and What Commodity Status Actually Means',
                  excerpt: 'When Ethereum goes from "legal" to "law," risk is reduced by at least 50%. Here is what the legislation does and when it lands.',
                },
                {
                  issue: 'Issue 14',
                  date: 'March 20, 2026',
                  title: "Bessent's $3 Trillion and the Metcalfe Multiplier",
                  excerpt: "Every new stablecoin dollar is a new Metcalfe user. Every new user increases n. Every increase in n increases n² exponentially.",
                },
              ].map((item) => (
                <a
                  key={item.issue}
                  href="https://thequantumletter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black p-8 hover:bg-[#0d0d0d] transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8]">{item.issue}</span>
                    <span className="text-xs text-[#555555]">{item.date}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug mb-3 group-hover:text-[#3b6ee8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{item.excerpt}</p>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/research"
                className="text-[#3b6ee8] hover:text-[#6b9bf5] text-sm font-medium transition-colors"
              >
                View the full archive →
              </Link>
            </div>
          </div>
        </section>

        {/* About Mark */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
                About Mark Berube
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                22 years of practice. One thesis. The math does the rest.
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                Mark Berube is a Chartered Financial Consultant (ChFC) and founder of Quantum Capital —
                the DBA of Patriot Advisory Group LLC, a state-registered RIA in New Hampshire. He has
                advised clients for over two decades and manages approximately $54M in assets.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-8">
                The Quantum Compass is his framework: a rigorous application of Metcalfe&apos;s Law to
                Ethereum network data, producing price targets verified by the same methodology used by
                institutional ETH products at Grayscale and Fidelity. Mark&apos;s words: &ldquo;If it was
                a prediction, I would want you to believe me. When it&apos;s a projection, I don&apos;t
                need you to believe me. It&apos;s true. Go do the math yourself.&rdquo;
              </p>
              <Link
                href="/about"
                className="text-[#3b6ee8] hover:text-[#6b9bf5] text-sm font-medium transition-colors"
              >
                Learn more about Mark →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
              {[
                { value: '22+', label: 'Years as an advisor' },
                { value: '$54M', label: 'AUM (April 2026)' },
                { value: 'ChFC', label: 'Chartered Financial Consultant' },
                { value: 'NH RIA', label: 'State-registered adviser' },
              ].map((stat) => (
                <div key={stat.label} className="bg-black p-8">
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-[#555555]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book a Call */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 max-w-2xl mx-auto">
              Ready to put the thesis to work?
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a call with Mark. He&apos;ll walk you through the Quantum Compass, your positioning
              options, and whether a managed account relationship makes sense for you.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-10 py-5 rounded-full transition-colors text-lg"
            >
              Book a Consultation
            </Link>
            <p className="text-xs text-[#555555] mt-6">
              No obligation. No sales pitch. Just the math.
            </p>
          </div>
        </section>
      </main>

      <ComplianceFooter />
    </div>
  )
}
