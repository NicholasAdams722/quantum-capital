import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'
import Divider from '@/components/Divider'
import MetcalfeCalculator from '@/components/MetcalfeCalculator'

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
    <div className="min-h-screen font-sans bg-white text-[#0f172a]">
      <Nav />

      <main>

        {/* ── Header ── white with dot grid + formula watermark */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
          {/* Formula watermark */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none overflow-hidden pr-8" style={{ color: '#f1f5f9' }}>
            <span className="font-black font-mono leading-none" style={{ fontSize: 'clamp(140px, 18vw, 260px)', letterSpacing: '-0.04em' }}>
              n²
            </span>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>
              The Quantum Compass
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-4xl" style={{ color: '#0f172a' }}>
              Price targets from a formula, not a feeling.
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#475569' }}>
              The Quantum Compass applies Metcalfe&apos;s Law to Ethereum network data, using the same
              methodology used by Grayscale (ETHE) and Fidelity (FETH) analysts. It produces
              mathematical outputs, not predictions.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── The Formula ── light gray with cross pattern */}
        <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#f8fafc' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8v16M8 16h16' stroke='%23e2e8f0' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '32px 32px',
          }} />
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                The Formula
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                Metcalfe&apos;s Law
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                Metcalfe&apos;s Law states that the value of a network is proportional to the square
                of the number of its connected users. Applied to Ethereum:
              </p>
              <div className="p-8 mb-6 rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
                <p className="text-3xl font-black mb-4 font-mono" style={{ color: '#1e3a8a' }}>V = k × n²</p>
                <div className="space-y-2 text-sm" style={{ color: '#475569' }}>
                  <p><span className="font-bold" style={{ color: '#0f172a' }}>V</span> = Network value (market cap)</p>
                  <p><span className="font-bold" style={{ color: '#0f172a' }}>k</span> = $565 (calibrated April 2026)</p>
                  <p><span className="font-bold" style={{ color: '#0f172a' }}>n</span> = Daily active EOA addresses</p>
                  <p className="text-xs mt-4" style={{ color: '#94a3b8' }}>Human wallets only. Bots excluded from n.</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                Source: CFA Institute Cryptoassets Valuation Guide. Same methodology used by
                Grayscale (ETHE) and Fidelity (FETH) for their institutional Ethereum products.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#94a3b8' }}>
                Why n² matters
              </p>
              <div className="space-y-3">
                {nonlinear.map((row) => (
                  <div
                    key={row.users}
                    className="p-6 rounded-sm bg-white"
                    style={{ border: '1px solid #e2e8f0' }}
                  >
                    <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>{row.users}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm" style={{ color: '#475569' }}>{row.change}</p>
                      <p className="text-sm font-semibold" style={{ color: '#3b6ee8' }}>{row.result}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: '#94a3b8' }}>
                The n² relationship is non-linear. Small user gains produce outsized value gains.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Calculator ── white with graph paper grid */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
              Try It Yourself
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl" style={{ color: '#0f172a' }}>
              Move the slider. Watch the formula update.
            </h2>
            <p className="mb-12 max-w-xl" style={{ color: '#475569' }}>
              Drag the daily active address slider to see how n² makes small user gains
              produce outsized changes in network value. The non-linearity is the thesis.
            </p>
            <MetcalfeCalculator />
          </div>
        </section>

        <Divider />

        {/* ── Price Targets ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
              Price Targets
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl" style={{ color: '#0f172a' }}>
              2026 Metcalfe projections
            </h2>
            <p className="mb-12 max-w-xl" style={{ color: '#475569' }}>
              Based on projected daily active address growth as the infrastructure stack matures
              and the CLARITY Act provides regulatory certainty.
            </p>

            <div className="overflow-x-auto rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Horizon</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Period</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Daily Active Addresses</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Metcalfe Target</th>
                  </tr>
                </thead>
                <tbody>
                  {targets.map((row, i) => (
                    <tr
                      key={row.horizon}
                      style={{
                        borderBottom: i < targets.length - 1 ? '1px solid #e2e8f0' : undefined,
                        background: row.current ? '#f8fafc' : 'white',
                      }}
                    >
                      <td className="px-6 py-5">
                        <span className="text-sm font-semibold" style={{ color: '#0f172a' }}>{row.horizon}</span>
                        {row.current && (
                          <span
                            className="ml-2 text-xs px-2 py-0.5 rounded-full"
                            style={{ background: '#e2e8f0', color: '#64748b' }}
                          >baseline</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm" style={{ color: '#475569' }}>{row.period}</td>
                      <td className="px-6 py-5 text-sm font-mono" style={{ color: '#475569' }}>{row.daa}</td>
                      <td className="px-6 py-5 text-xl font-black" style={{ color: i === targets.length - 1 ? '#3b6ee8' : '#0f172a' }}>
                        {row.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-6 rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                <strong style={{ color: '#475569' }}>Not investment advice.</strong> These figures
                represent the mathematical output of Metcalfe&apos;s Law (V = k × n²) applied to
                projected Ethereum network data. They are projections, not predictions, guarantees,
                or solicitations. Formula source: CFA Institute Cryptoassets Valuation Guide.
                All investments involve risk, including the possible loss of principal.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Bessent Multiplier ── white */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                Stablecoin Catalyst
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                Every new stablecoin dollar is a new Metcalfe user.
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                US Treasury Secretary Scott Bessent projected stablecoin market growth from
                $300B to $3 trillion by end of decade (Senate Banking Committee, February 4,
                2026, verifiable public congressional record).
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                60% of stablecoins settle on Ethereum. Each new dollar adds an active address.
                Each new address increases n. Each increase in n increases n² exponentially.
                The formula compounds.
              </p>
            </div>
            <div className="p-10 rounded-sm" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#94a3b8' }}>The chain reaction</p>
              <div className="space-y-4">
                {chain.map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 text-white"
                      style={{ background: '#3b6ee8' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── dark */}
        <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#0f172a' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(30,41,59,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.7) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(59,110,232,0.15) 0%, transparent 60%)',
          }} />
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Ready to put the Compass to work?</h2>
              <p style={{ color: '#64748b' }}>Book a call with Mark to discuss positioning and managed account options.</p>
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
                className="inline-flex items-center justify-center border text-white font-semibold px-8 py-4 rounded-full transition-colors"
                style={{ borderColor: '#334155' }}
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
