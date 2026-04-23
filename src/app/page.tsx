import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'
import { getPosts, formatDate, issueLabel, isGhostConfigured, type GhostPost } from '@/lib/ghost'

export const metadata: Metadata = {
  title: 'Quantum Capital — Institutional Ethereum Research & Education',
  description:
    "Learn why Ethereum is undervalued. Mark Berube, ChFC, applies Metcalfe's Law to Ethereum network data — the same methodology used by Grayscale and Fidelity analysts. Free research through The Quantum Letter.",
  alternates: { canonical: 'https://quantumcapital.com' },
}

const compassData = [
  { horizon: 'Today', daa: '700K', target: '$2,350', current: true },
  { horizon: '90 Days', daa: '800K', target: '$3,070', current: false },
  { horizon: '180 Days', daa: '1.0M', target: '$4,780', current: false },
  { horizon: 'Year-End 2026', daa: '1.25M', target: '$7,350', current: false },
]

const pillars = [
  {
    number: '01',
    title: 'The EVM is the Windows of Blockchain',
    body: 'Ethereum invented the Ethereum Virtual Machine in 2015. The entire industry adopted the standard. 85% of all blockchain traffic. 31,000 developers. Every chain on EVM makes ETH more valuable — the same way every app on Windows made Windows more valuable.',
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
    body: 'Smart wallets, sub-cent fees, ZK rollups, AI-compatible wallets — the infrastructure stack is complete or completing. By 2027–2028, a millennial opens an app that works like Venmo and it runs on Ethereum without them knowing.',
    stat: '40M',
    statLabel: 'smart wallet accounts live today',
  },
]

const FALLBACK_ISSUES = [
  {
    label: 'Issue 16', date: 'April 17, 2026', href: 'https://thequantumletter.com',
    title: 'ETH Research: ETHA, SBET, and the Portfolio Positioning Case',
    excerpt: 'A breakdown of the three instruments used for Ethereum exposure — and why structure matters as much as the thesis.',
  },
  {
    label: 'Issue 15', date: 'April 3, 2026', href: 'https://thequantumletter.com',
    title: 'The CLARITY Act and What Commodity Status Actually Means',
    excerpt: 'When Ethereum goes from "legal" to "law," institutional risk drops by at least 50%. Here is what the legislation does.',
  },
  {
    label: 'Issue 14', date: 'March 20, 2026', href: 'https://thequantumletter.com',
    title: "Bessent's $3 Trillion and the Metcalfe Multiplier",
    excerpt: "Every new stablecoin dollar is a new Metcalfe user. Every increase in n increases n² exponentially.",
  },
]

export default async function HomePage() {
  const ghostPosts: GhostPost[] = await getPosts(3)
  const liveData = isGhostConfigured() && ghostPosts.length > 0
  const issues = liveData
    ? ghostPosts.map((post, i) => ({
        label: issueLabel(i, ghostPosts.length),
        date: formatDate(post.published_at),
        title: post.title,
        excerpt: post.excerpt ?? '',
        href: post.url,
      }))
    : FALLBACK_ISSUES
  return (
    <div className="min-h-screen text-white font-sans" style={{ background: '#04091a' }}>
      <Nav />

      <main>

        {/* ── Hero ── deep navy with blue gradient glow */}
        <section
          className="pt-40 pb-36 px-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #04091a 0%, #081428 50%, #04091a 100%)' }}
        >
          {/* Subtle blue radial glow */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 70% 30%, #3b6ee8 0%, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto relative">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-6">
              Institutional Ethereum Research
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 max-w-4xl">
              Ethereum is priced like a speculation.{' '}
              <span className="text-[#6b9bf5]">It&apos;s being built like infrastructure.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a0aec0] max-w-2xl leading-relaxed mb-12">
              The Quantum Letter teaches you exactly why — through Metcalfe&apos;s Law, on-chain
              data, and the same valuation methodology used by institutional Ethereum analysts.
              Free. No hype.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                Read The Quantum Letter →
              </a>
              <Link
                href="/thesis"
                className="inline-flex items-center justify-center border border-[#1a2a50] hover:border-[#3b6ee8] text-[#a0aec0] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                Explore the Thesis
              </Link>
            </div>
          </div>
        </section>

        {/* ── Core Argument ── WHITE section */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
              The Core Argument
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 max-w-2xl" style={{ color: '#0a0f1e' }}>
              The market prices what is live today. The thesis prices what is being built.
            </h2>
            <p className="max-w-2xl leading-relaxed mb-16" style={{ color: '#4a5578' }}>
              Ethereum is the settlement layer for the global machine economy — every AI agent,
              tokenized asset, and programmable dollar. The gap between that reality and the
              current price is the education. Understanding it is why this site exists.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-10 rounded-sm border-t-4" style={{ background: '#f5f7ff', borderColor: '#a0aec0' }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#8892aa' }}>Market Price Today</p>
                <p className="text-5xl font-black mb-2" style={{ color: '#4a5578' }}>~$2,350</p>
                <p className="text-sm" style={{ color: '#8892aa' }}>What the market sees</p>
              </div>
              <div className="p-10 rounded-sm border-t-4" style={{ background: '#f0f4ff', borderColor: '#3b6ee8' }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#3b6ee8' }}>Metcalfe Fair Value</p>
                <p className="text-5xl font-black mb-2" style={{ color: '#0a0f1e' }}>$4,780</p>
                <p className="text-sm" style={{ color: '#8892aa' }}>At 1M daily active addresses</p>
              </div>
              <div className="p-10 rounded-sm border-t-4" style={{ background: '#1e3a8a', borderColor: '#6b9bf5' }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#6b9bf5' }}>Year-End 2026 Target</p>
                <p className="text-5xl font-black mb-2 text-white">$7,350</p>
                <p className="text-sm" style={{ color: '#a0aec0' }}>At 1.25M daily active addresses</p>
              </div>
            </div>
            <p className="text-xs mt-4" style={{ color: '#8892aa' }}>
              Projections are the mathematical output of Metcalfe&apos;s Law (k × n²). Not investment advice.
              Source: CFA Institute Cryptoassets Valuation Guide.
            </p>
          </div>
        </section>

        {/* ── The Quantum Letter ── dark navy */}
        <section
          className="py-24 px-6"
          style={{ background: '#08142e' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-4">
                  The Quantum Letter
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl text-white">
                  Free research. Institutional rigor. No hype.
                </h2>
                <p className="text-[#a0aec0] mt-4 max-w-lg leading-relaxed">
                  Mark Berube publishes his Metcalfe analysis, regulatory tracking, and
                  infrastructure updates. 16 issues. All free.
                </p>
              </div>
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Subscribe free →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {issues.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-8 rounded-sm transition-all duration-200 hover:border-[#3b6ee8]"
                  style={{ background: '#0d1b3e', border: '1px solid #1a2a50' }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5]">{item.label}</span>
                    <span className="text-xs text-[#4a5578]">{item.date}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug mb-3 text-white group-hover:text-[#6b9bf5] transition-colors flex-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a5578] leading-relaxed">{item.excerpt}</p>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/research" className="text-[#6b9bf5] hover:text-white text-sm font-medium transition-colors">
                View the full archive →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Ethereum ── LIGHT section */}
        <section className="py-24 px-6" style={{ background: '#f5f7ff' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
              Why Ethereum
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl" style={{ color: '#0a0f1e' }}>
              Three things most people don&apos;t know about Ethereum.
            </h2>
            <p className="mb-16 max-w-xl leading-relaxed" style={{ color: '#4a5578' }}>
              The thesis rests on three structural advantages already in place — not roadmap promises.
            </p>
            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start rounded-sm"
                  style={{ background: '#ffffff', border: '1px solid #e0e6f5' }}
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                      {pillar.number}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4" style={{ color: '#0a0f1e' }}>
                      {pillar.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#4a5578' }}>{pillar.body}</p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="text-5xl font-black" style={{ color: '#1e3a8a' }}>{pillar.stat}</p>
                    <p className="text-sm mt-1 md:max-w-[140px]" style={{ color: '#8892aa' }}>{pillar.statLabel}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/thesis" className="text-sm font-medium transition-colors" style={{ color: '#3b6ee8' }}>
                Read the full investment thesis →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Quantum Compass ── dark navy */}
        <section className="py-24 px-6" style={{ background: '#04091a' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-4">
              The Quantum Compass
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl text-white">
              How do you value a network? With a formula.
            </h2>
            <p className="text-[#a0aec0] mb-2 max-w-2xl">
              Metcalfe&apos;s Law:{' '}
              <span className="text-white font-mono bg-[#0d1730] px-2 py-0.5 rounded">V = k × n²</span>
              {' '}— where <span className="text-white">n</span> = daily active addresses,{' '}
              <span className="text-white">k</span> = $565
            </p>
            <p className="text-xs text-[#4a5578] mb-12">
              Source: CFA Institute Cryptoassets Valuation Guide. Same methodology used by Grayscale (ETHE) and Fidelity (FETH) analysts.
            </p>

            <div className="overflow-hidden rounded-sm" style={{ border: '1px solid #1a2a50' }}>
              <table className="w-full text-left">
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a2a50', background: '#080f26' }}>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#4a5578]">Horizon</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#4a5578]">Daily Active Addresses</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#4a5578]">Metcalfe Output</th>
                  </tr>
                </thead>
                <tbody>
                  {compassData.map((row, i) => (
                    <tr
                      key={row.horizon}
                      style={{
                        borderBottom: i < compassData.length - 1 ? '1px solid #1a2a50' : undefined,
                        background: row.current ? '#080f26' : 'transparent',
                      }}
                    >
                      <td className="px-6 py-5 text-sm text-[#a0aec0]">
                        {row.horizon}
                        {row.current && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#1a2a50] text-[#4a5578]">baseline</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-[#a0aec0] font-mono">{row.daa}</td>
                      <td className={`px-6 py-5 text-xl font-black ${i === compassData.length - 1 ? 'text-[#6b9bf5]' : 'text-white'}`}>
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#4a5578] mt-4 max-w-2xl">
              Mathematical outputs of Metcalfe&apos;s Law — projections, not predictions or guarantees. Not investment advice.
            </p>
            <div className="mt-8">
              <Link href="/compass" className="text-[#6b9bf5] hover:text-white text-sm font-medium transition-colors">
                Explore the full Quantum Compass →
              </Link>
            </div>
          </div>
        </section>

        {/* ── About Mark ── WHITE section */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                About the Author
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: '#0a0f1e' }}>
                22 years of practice. One thesis. The math does the rest.
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#4a5578' }}>
                Mark Berube is a Chartered Financial Consultant (ChFC) with 22+ years of advisory
                experience and approximately $54M in assets under management. The Quantum Compass
                is his framework — Metcalfe&apos;s Law applied to Ethereum network data.
              </p>
              <blockquote className="border-l-4 pl-6 mb-8" style={{ borderColor: '#3b6ee8' }}>
                <p className="italic leading-relaxed" style={{ color: '#4a5578' }}>
                  &ldquo;If it was a prediction, I would want you to believe me. When it&apos;s a
                  projection, I don&apos;t need you to believe me. It&apos;s true. Go do the math
                  yourself.&rdquo;
                </p>
                <p className="text-xs mt-3" style={{ color: '#8892aa' }}>— Mark Berube, ChFC</p>
              </blockquote>
              <Link href="/about" className="text-sm font-medium transition-colors" style={{ color: '#3b6ee8' }}>
                Learn more about Mark →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '22+', label: 'Years advising clients' },
                { value: '$54M', label: 'AUM (April 2026)' },
                { value: 'ChFC', label: 'Chartered Financial Consultant' },
                { value: '16', label: 'Quantum Letter issues' },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-sm" style={{ background: '#f0f4ff', border: '1px solid #e0e6f5' }}>
                  <p className="text-3xl font-black mb-1" style={{ color: '#1e3a8a' }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: '#8892aa' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Book a Call ── blue gradient — understated but rich */}
        <section
          className="py-20 px-6"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b6ee8 100%)' }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">
                Ready to go further than the research?
              </h2>
              <p className="text-blue-200 text-sm">
                For investors with $250K+ who want managed Ethereum exposure — book a call with Mark.
              </p>
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
