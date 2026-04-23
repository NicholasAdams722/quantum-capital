import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'
import Divider from '@/components/Divider'

export const metadata: Metadata = {
  title: 'The Investment Thesis',
  description:
    "Ethereum is being built as the settlement layer for the global machine economy. Mark Berube's three-pillar thesis: the EVM moat, ultrasound money mechanics, and the 2027–2028 Venmo moment.",
  alternates: { canonical: 'https://quantumcapital.com/thesis' },
  openGraph: {
    title: 'The Investment Thesis | Quantum Capital',
    description: 'Ethereum is not priced as what it is being built to be. Three pillars explain the gap.',
    url: 'https://quantumcapital.com/thesis',
  },
}

const tam = [
  { market: 'Global Derivatives', size: '$700T', status: 'Building', live: false },
  { market: 'Global Repo Market', size: '$12.5T', status: 'Live now', live: true },
  { market: 'Global Payments', size: '$150T', status: 'Building', live: false },
  { market: 'Global Asset Management', size: '$100T', status: 'Early', live: false },
  { market: 'Stablecoins', size: '$3T by 2030*', status: 'Live now', live: true },
  { market: 'Real-World Assets (RWA)', size: 'Growing', status: 'Early', live: false },
  { market: 'AI Agent Economy', size: 'Incalculable', status: 'Building', live: false },
]

export default function ThesisPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-[#0f172a]">
      <Nav />

      <main>

        {/* ── Header ── white hero */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>
              The Investment Thesis
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 max-w-4xl" style={{ color: '#0f172a' }}>
              Ethereum is not priced as what it is being built to be.
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#475569' }}>
              It is being built as the settlement layer for the global machine economy: the
              operating system every AI agent, tokenized asset, and programmable dollar will
              settle on. The gap between that reality and the current price is the investment window.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Pillar 01 ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>01</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                The EVM is the Windows of Blockchain
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                Ethereum invented the Ethereum Virtual Machine in 2015. The entire industry adopted
                the standard. Every major rollup, every real-world asset platform, every AI agent
                wallet runs on EVM.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                Just as every application built on Windows made Windows more valuable, every chain,
                wallet, and protocol built on EVM makes ETH more valuable. The moat is not
                speculation. It is 11 years of accumulated network effects that cannot be replicated.
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                31,000 active developers. 85% of all blockchain traffic. The standard is set.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '85%', label: 'of all blockchain traffic runs on EVM' },
                { value: '31K', label: 'active developers building on Ethereum' },
                { value: '11yr', label: 'of accumulated network effects' },
                { value: '#1', label: 'smart contract platform by every metric' },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
                  <p className="text-4xl font-black mb-2" style={{ color: '#1e3a8a' }}>{stat.value}</p>
                  <p className="text-xs leading-snug" style={{ color: '#94a3b8' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Pillar 02 ── white */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="order-2 md:order-1 rounded-sm overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
              <div className="p-10" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#94a3b8' }}>Bitcoin (Sound Money)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                  Fixed supply of 21M. Scarcity by schedule: halvings reduce new issuance on a
                  predetermined timeline. Supply is predictable and independent of usage.
                </p>
              </div>
              <div className="p-10" style={{ borderTop: '3px solid #3b6ee8' }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#3b6ee8' }}>Ethereum (Ultrasound Money)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                  Supply is demand-driven. EIP-1559 burns ETH with every transaction, permanently
                  destroyed. The Merge cut new issuance 88%. More usage = less supply. It is the
                  only commodity in the world with this property.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>02</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                Ethereum is Ultrasound Money
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                Bitcoin is sound money: fixed supply, scarcity by schedule. Ethereum is ultrasound
                money: supply is demand-driven. EIP-1559 permanently burns ETH with every
                transaction. The Merge cut new issuance by 88%. Over 30% of all ETH is locked in staking.
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                The key insight: as usage increases, supply decreases. This is not a roadmap or a
                promise. It is code that has been running since August 2021.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Pillar 03 ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>03</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                  The Venmo Moment is 2027–2028
                </h2>
                <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                  By 2027–2028, a millennial opens an app that works exactly like Venmo: instant,
                  free, familiar. And it runs on Ethereum without them knowing. The infrastructure
                  that makes this possible is complete or completing right now.
                </p>
                <p className="leading-relaxed" style={{ color: '#475569' }}>
                  We buy the toll road in 2026 before the Venmo moment arrives. That is the window.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#94a3b8' }}>
                  Infrastructure stack: status
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'ERC-4337 Smart Wallets', detail: '40M accounts live', done: true },
                    { label: 'EIP-4844 Blobs', detail: 'Fees cut 90%+', done: true },
                    { label: 'ZK Rollups', detail: 'Maturing 2026, institutional-grade finality', done: false },
                    { label: 'Pectra / EIP-7702', detail: 'AI agent-compatible wallets, live May 2025', done: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="px-6 py-4 flex items-center justify-between gap-4 rounded-sm bg-white"
                      style={{ border: '1px solid #e2e8f0' }}
                    >
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#0f172a' }}>{item.label}</p>
                        <p className="text-xs" style={{ color: '#94a3b8' }}>{item.detail}</p>
                      </div>
                      <span
                        className="shrink-0 text-xs font-medium px-3 py-1 rounded-full"
                        style={item.done
                          ? { background: '#dcfce7', color: '#16a34a' }
                          : { background: '#eff6ff', color: '#3b6ee8' }}
                      >
                        {item.done ? 'Live' : 'In progress'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Regulatory ── white */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                Key Regulatory Catalyst
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                The CLARITY Act
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                The CLARITY Act codifies Ethereum&apos;s commodity status into permanent federal law
                and provides a clear regulatory framework for stablecoins. Working legislative
                deadline: May 21, 2026.
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                When Ethereum goes from &ldquo;legal&rdquo; to &ldquo;law,&rdquo; institutional
                risk is reduced by at least 50%. Capital that was waiting for regulatory clarity
                stops waiting.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
                On-Record Testimony
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-6" style={{ color: '#0f172a' }}>
                The Bessent Connection
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#475569' }}>
                US Treasury Secretary Scott Bessent&apos;s Senate Banking Committee testimony
                (February 4, 2026): stablecoins grow 10x to $3 trillion by end of decade.
                60% settles on Ethereum.
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                Every new stablecoin dollar = a new Metcalfe user. Every new user increases n.
                Every increase in n increases n² exponentially. On-record testimony, not speculation.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── TAM ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#3b6ee8' }}>
              Total Addressable Market
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl" style={{ color: '#0f172a' }}>
              The EVM will settle everything. Only 2 of 7 categories are live today.
            </h2>
            <p className="mb-12 max-w-2xl leading-relaxed" style={{ color: '#475569' }}>
              The market is pricing only what is live now. The thesis prices what is being built.
              That gap is where the return lives.
            </p>
            <div className="overflow-hidden rounded-sm bg-white" style={{ border: '1px solid #e2e8f0' }}>
              <table className="w-full text-left">
                <thead>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Market</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Size</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#94a3b8' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tam.map((row, i) => (
                    <tr key={row.market} style={{ borderBottom: i < tam.length - 1 ? '1px solid #e2e8f0' : undefined }}>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: '#0f172a' }}>{row.market}</td>
                      <td className="px-6 py-4 text-sm font-mono" style={{ color: '#475569' }}>{row.size}</td>
                      <td className="px-6 py-4">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={row.live
                            ? { background: '#dcfce7', color: '#16a34a' }
                            : { background: '#f1f5f9', color: '#64748b', border: '1px solid #e2e8f0' }}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: '#94a3b8' }}>
              *Scott Bessent, Senate Banking Committee, February 4, 2026 (verifiable public congressional record)
            </p>
          </div>
        </section>

        {/* ── CTA ── dark */}
        <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#0f172a' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(30,41,59,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.7) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(59,110,232,0.15) 0%, transparent 60%)',
          }} />
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">See the math behind the thesis.</h2>
              <p style={{ color: '#64748b' }}>The Quantum Compass translates the thesis into price targets.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/compass"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Open the Compass
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center border text-white font-semibold px-8 py-4 rounded-full transition-colors"
                style={{ borderColor: '#334155' }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </section>

      </main>
      <ComplianceFooter />
    </div>
  )
}
