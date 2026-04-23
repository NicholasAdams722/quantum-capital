import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'

export const metadata: Metadata = {
  title: 'The Quantum Compass',
  description:
    "Metcalfe's Law applied to Ethereum: Network Value = k × n². Price targets derived from the same methodology used by Grayscale and Fidelity analysts. Not investment advice.",
  alternates: { canonical: 'https://quantumcapital.com/compass' },
  openGraph: {
    title: 'The Quantum Compass | Quantum Capital',
    description:
      "ETH price targets from a formula, not a feeling. Metcalfe's Law: Network Value = k × n².",
    url: 'https://quantumcapital.com/compass',
  },
}

const targets = [
  {
    horizon: 'Today',
    period: 'April 2026',
    daa: '700,000',
    nSquared: '490B',
    target: '$2,350',
    current: true,
  },
  {
    horizon: '90 Days',
    period: 'Mid-July 2026',
    daa: '800,000',
    nSquared: '640B',
    target: '$3,070',
    current: false,
  },
  {
    horizon: '180 Days',
    period: 'Mid-October 2026',
    daa: '1,000,000',
    nSquared: '1T',
    target: '$4,780',
    current: false,
  },
  {
    horizon: 'Year-End 2026',
    period: 'December 2026',
    daa: '1,250,000',
    nSquared: '1.56T',
    target: '$7,350',
    current: false,
  },
]

export default function CompassPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <main className="pt-32">
        {/* Header */}
        <section className="pb-24 px-6 max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b6ee8] mb-6">
            The Quantum Compass
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-4xl">
            Price targets from a formula, not a feeling.
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl leading-relaxed">
            The Quantum Compass applies Metcalfe&apos;s Law to Ethereum network data — the same
            methodology used by Grayscale (ETHE) and Fidelity (FETH) analysts. It produces
            mathematical outputs, not predictions.
          </p>
        </section>

        {/* The Formula */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
                The Formula
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Metcalfe&apos;s Law
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                Metcalfe&apos;s Law states that the value of a network is proportional to the square
                of the number of its connected users. Applied to Ethereum:
              </p>
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 mb-6 font-mono">
                <p className="text-2xl text-white mb-4">V = k × n²</p>
                <div className="space-y-2 text-sm text-[#a0a0a0]">
                  <p><span className="text-white">V</span> = Network value (market cap)</p>
                  <p><span className="text-white">k</span> = $565 (calibrated April 2026)</p>
                  <p><span className="text-white">n</span> = Daily active EOA addresses</p>
                  <p className="text-[#555555] text-xs mt-4">Human wallets only — bots excluded from n</p>
                </div>
              </div>
              <p className="text-sm text-[#555555] leading-relaxed">
                Source: CFA Institute Cryptoassets Valuation Guide. The same methodology is used
                by analysts at Grayscale (ETHE) and Fidelity (FETH) for their institutional
                Ethereum products.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-6">
                Why n² matters
              </p>
              <div className="space-y-px bg-[#1a1a1a]">
                {[
                  { users: '700K → 800K', change: '+14% users', result: '+31% network value', highlight: false },
                  { users: '800K → 1.0M', change: '+25% users', result: '+56% network value', highlight: false },
                  { users: '1.0M → 1.25M', change: '+25% users', result: '+56% network value', highlight: true },
                ].map((row) => (
                  <div key={row.users} className={`p-6 ${row.highlight ? 'bg-[#0d0d0d]' : 'bg-black'}`}>
                    <p className="text-sm text-[#555555] mb-2">{row.users}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#a0a0a0]">{row.change}</p>
                      <p className="text-sm font-semibold text-[#3b6ee8]">{row.result}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#555555] mt-4">
                The n² relationship is non-linear. Small user gains produce outsized value gains.
              </p>
            </div>
          </div>
        </section>

        {/* Price Targets Table */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Price Targets
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl">
              2026 Metcalfe projections
            </h2>
            <p className="text-[#a0a0a0] mb-12 max-w-xl">
              Based on projected daily active address growth as the infrastructure stack matures
              and the CLARITY Act provides regulatory certainty.
            </p>

            <div className="border border-[#1a1a1a] overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#1a1a1a] bg-[#0d0d0d]">
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Horizon</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Period</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Daily Active Addresses (n)</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#555555]">Metcalfe Target</th>
                  </tr>
                </thead>
                <tbody>
                  {targets.map((row, i) => (
                    <tr key={row.horizon} className={i < targets.length - 1 ? 'border-b border-[#1a1a1a]' : ''}>
                      <td className="px-6 py-5">
                        <span className="text-sm font-semibold text-white">{row.horizon}</span>
                        {row.current && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] text-[#555555]">baseline</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-[#555555]">{row.period}</td>
                      <td className="px-6 py-5 text-sm text-[#a0a0a0] font-mono">{row.daa}</td>
                      <td className={`px-6 py-5 text-xl font-black ${i === targets.length - 1 ? 'text-[#3b6ee8]' : 'text-white'}`}>
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-6 border border-[#1a1a1a] bg-[#0d0d0d]">
              <p className="text-xs text-[#555555] leading-relaxed">
                <strong className="text-[#a0a0a0]">Not investment advice.</strong> These figures
                represent the mathematical output of Metcalfe&apos;s Law (V = k × n²) applied to
                projected Ethereum network data. They are projections, not predictions, guarantees,
                or solicitations. Formula source: CFA Institute Cryptoassets Valuation Guide.
                All investments involve risk, including the possible loss of principal. Past
                performance does not guarantee future results.
              </p>
            </div>
          </div>
        </section>

        {/* The Bessent Multiplier */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
                Stablecoin Catalyst
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Every new stablecoin dollar is a new Metcalfe user.
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                US Treasury Secretary Scott Bessent projected stablecoin market growth from
                $300B to $3 trillion by end of decade (Senate Banking Committee, February 4,
                2026 — verifiable public congressional record).
              </p>
              <p className="text-[#a0a0a0] leading-relaxed">
                60% of stablecoins settle on Ethereum. Each new dollar adds an active address.
                Each new address increases n. Each increase in n increases n² exponentially.
                The formula compounds.
              </p>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-10">
              <p className="text-xs uppercase tracking-widest text-[#555555] mb-6">The chain reaction</p>
              <div className="space-y-4">
                {[
                  'CLARITY Act passes → regulatory risk cut 50%+',
                  'Stablecoins grow 10x → $3T by 2030',
                  '60% settles on Ethereum → 1.8T on-chain',
                  'New stablecoin users → n increases',
                  'n increases → n² increases exponentially',
                  'Network value formula outputs higher price',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#3b6ee8]/10 text-[#3b6ee8] text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Ready to put the Compass to work?</h2>
              <p className="text-[#a0a0a0]">Book a call with Mark to discuss positioning and managed account options.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Book a Call
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center border border-[#1a1a1a] hover:border-[#3b6ee8] text-[#a0a0a0] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Read the Research
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ComplianceFooter />
    </div>
  )
}
