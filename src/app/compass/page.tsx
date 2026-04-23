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
    description: "ETH price targets from a formula, not a feeling. Metcalfe's Law: V = k × n².",
    url: 'https://quantumcapital.com/compass',
  },
}

const targets = [
  { horizon: 'Today', period: 'April 2026', daa: '700,000', target: '$2,350', current: true },
  { horizon: '90 Days', period: 'Mid-July 2026', daa: '800,000', target: '$3,070', current: false },
  { horizon: '180 Days', period: 'Mid-October 2026', daa: '1,000,000', target: '$4,780', current: false },
  { horizon: 'Year-End 2026', period: 'December 2026', daa: '1,250,000', target: '$7,350', current: false },
]

const nonlinear = [
  { users: '700K → 800K', change: '+14% users', result: '+31% network value' },
  { users: '800K → 1.0M', change: '+25% users', result: '+56% network value' },
  { users: '1.0M → 1.25M', change: '+25% users', result: '+56% network value' },
]

const chain = [
  'CLARITY Act passes → regulatory risk cut 50%+',
  'Stablecoins grow 10x → $3T by 2030',
  '60% settles on Ethereum → $1.8T on-chain',
  'New stablecoin users → n increases',
  'n increases → n² increases exponentially',
  'Network value formula outputs higher price',
]

export default function CompassPage() {
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
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, #3b6ee8 0%, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto relative">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-6">
              The Quantum Compass
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-4xl">
              Price targets from a formula, not a feeling.
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#a0aec0' }}>
              The Quantum Compass applies Metcalfe&apos;s Law to Ethereum network data — the same
              methodology used by Grayscale (ETHE) and Fidelity (FETH) analysts. It produces
              mathematical outputs, not predictions.
            </p>
          </div>
        </section>

        {/* ── The Formula ── WHITE */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                The Formula
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0a0f1e' }}>
                Metcalfe&apos;s Law
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#4a5578' }}>
                Metcalfe&apos;s Law states that the value of a network is proportional to the square
                of the number of its connected users. Applied to Ethereum:
              </p>
              <div className="p-8 mb-6 rounded-sm font-mono" style={{ background: '#f0f4ff', border: '1px solid #e0e6f5' }}>
                <p className="text-3xl font-black mb-4" style={{ color: '#1e3a8a' }}>V = k × n²</p>
                <div className="space-y-2 text-sm" style={{ color: '#4a5578' }}>
                  <p><span className="font-bold" style={{ color: '#0a0f1e' }}>V</span> = Network value (market cap)</p>
                  <p><span className="font-bold" style={{ color: '#0a0f1e' }}>k</span> = $565 (calibrated April 2026)</p>
                  <p><span className="font-bold" style={{ color: '#0a0f1e' }}>n</span> = Daily active EOA addresses</p>
                  <p className="text-xs mt-4" style={{ color: '#8892aa' }}>Human wallets only — bots excluded from n</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#8892aa' }}>
                Source: CFA Institute Cryptoassets Valuation Guide. Same methodology used by
                Grayscale (ETHE) and Fidelity (FETH) for their institutional Ethereum products.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#8892aa' }}>
                Why n² matters
              </p>
              <div className="space-y-3">
                {nonlinear.map((row) => (
                  <div
                    key={row.users}
                    className="p-6 rounded-sm"
                    style={{ background: '#f5f7ff', border: '1px solid #e0e6f5' }}
                  >
                    <p className="text-sm mb-2" style={{ color: '#8892aa' }}>{row.users}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm" style={{ color: '#4a5578' }}>{row.change}</p>
                      <p className="text-sm font-semibold" style={{ color: '#3b6ee8' }}>{row.result}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: '#8892aa' }}>
                The n² relationship is non-linear. Small user gains produce outsized value gains.
              </p>
            </div>
          </div>
        </section>

        {/* ── Price Targets ── dark navy */}
        <section className="py-24 px-6" style={{ background: '#08142e' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-4">
              Price Targets
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl text-white">
              2026 Metcalfe projections
            </h2>
            <p className="mb-12 max-w-xl" style={{ color: '#a0aec0' }}>
              Based on projected daily active address growth as the infrastructure stack matures
              and the CLARITY Act provides regulatory certainty.
            </p>

            <div className="overflow-x-auto rounded-sm" style={{ border: '1px solid #1a2a50' }}>
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a2a50', background: '#0d1b3e' }}>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#4a5578' }}>Horizon</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#4a5578' }}>Period</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#4a5578' }}>Daily Active Addresses</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#4a5578' }}>Metcalfe Target</th>
                  </tr>
                </thead>
                <tbody>
                  {targets.map((row, i) => (
                    <tr
                      key={row.horizon}
                      style={{
                        borderBottom: i < targets.length - 1 ? '1px solid #1a2a50' : undefined,
                        background: row.current ? '#0a1628' : 'transparent',
                      }}
                    >
                      <td className="px-6 py-5">
                        <span className="text-sm font-semibold text-white">{row.horizon}</span>
                        {row.current && (
                          <span
                            className="ml-2 text-xs px-2 py-0.5 rounded-full"
                            style={{ background: '#1a2a50', color: '#4a5578' }}
                          >baseline</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm" style={{ color: '#4a5578' }}>{row.period}</td>
                      <td className="px-6 py-5 text-sm font-mono" style={{ color: '#a0aec0' }}>{row.daa}</td>
                      <td className={`px-6 py-5 text-xl font-black ${i === targets.length - 1 ? 'text-[#6b9bf5]' : 'text-white'}`}>
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-6 rounded-sm" style={{ background: '#0d1b3e', border: '1px solid #1a2a50' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#4a5578' }}>
                <strong style={{ color: '#a0aec0' }}>Not investment advice.</strong> These figures
                represent the mathematical output of Metcalfe&apos;s Law (V = k × n²) applied to
                projected Ethereum network data. They are projections, not predictions, guarantees,
                or solicitations. Formula source: CFA Institute Cryptoassets Valuation Guide.
                All investments involve risk, including the possible loss of principal.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bessent Multiplier ── WHITE */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                Stablecoin Catalyst
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0a0f1e' }}>
                Every new stablecoin dollar is a new Metcalfe user.
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#4a5578' }}>
                US Treasury Secretary Scott Bessent projected stablecoin market growth from
                $300B to $3 trillion by end of decade (Senate Banking Committee, February 4,
                2026 — verifiable public congressional record).
              </p>
              <p className="leading-relaxed" style={{ color: '#4a5578' }}>
                60% of stablecoins settle on Ethereum. Each new dollar adds an active address.
                Each new address increases n. Each increase in n increases n² exponentially.
                The formula compounds.
              </p>
            </div>
            <div className="p-10 rounded-sm" style={{ background: '#f0f4ff', border: '1px solid #e0e6f5' }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#8892aa' }}>The chain reaction</p>
              <div className="space-y-4">
                {chain.map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                      style={{ background: '#dbeafe', color: '#1e3a8a' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5578' }}>{step}</p>
                  </div>
                ))}
              </div>
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
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Ready to put the Compass to work?</h2>
              <p style={{ color: '#bfdbfe' }}>Book a call with Mark to discuss positioning and managed account options.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-white hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors"
                style={{ color: '#1e3a8a' }}
              >
                Book a Call
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors"
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
