import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'

export const metadata: Metadata = {
  title: 'Research — The Quantum Letter',
  description:
    'The Quantum Letter archive. Institutional-grade Ethereum research from Mark Berube, ChFC — free, published regularly, no hype.',
  alternates: { canonical: 'https://quantumcapital.com/research' },
  openGraph: {
    title: 'Research | Quantum Capital',
    description: 'The Quantum Letter archive. Institutional Ethereum research. Free.',
    url: 'https://quantumcapital.com/research',
  },
}

// Placeholder data — replace with Ghost Content API fetch when wired.
// All links point to thequantumletter.com until real slugs are available from the API.
// Ghost API: GET /ghost/api/content/posts/?key={GHOST_CONTENT_API_KEY}&limit=all&fields=title,slug,excerpt,published_at,reading_time
const issues = [
  {
    issue: 'Issue 16', date: 'April 17, 2026',
    title: 'ETH Research: ETHA, SBET, and the Portfolio Positioning Case',
    excerpt: 'A breakdown of the three instruments we use for Ethereum exposure — and why the structure matters as much as the thesis.',
    readTime: '8 min read',
  },
  {
    issue: 'Issue 15', date: 'April 3, 2026',
    title: 'The CLARITY Act and What Commodity Status Actually Means',
    excerpt: 'When Ethereum goes from "legal" to "law," risk is reduced by at least 50%. Here is what the legislation does and when it lands.',
    readTime: '6 min read',
  },
  {
    issue: 'Issue 14', date: 'March 20, 2026',
    title: "Bessent's $3 Trillion and the Metcalfe Multiplier",
    excerpt: "Every new stablecoin dollar is a new Metcalfe user. Every new user increases n. Every increase in n increases n² exponentially.",
    readTime: '7 min read',
  },
  {
    issue: 'Issue 13', date: 'March 6, 2026',
    title: 'Pectra, EIP-7702, and the AI Agent Wallet Stack',
    excerpt: 'The upgrade that makes Ethereum wallets compatible with autonomous AI agents is live. Here is what it means for network value.',
    readTime: '9 min read',
  },
  {
    issue: 'Issue 12', date: 'February 20, 2026',
    title: 'Ultrasound Money: The Supply Mechanics Bitcoin Cannot Match',
    excerpt: 'Bitcoin is sound money. Ethereum is ultrasound money. The difference is demand-driven supply destruction — and it is already running.',
    readTime: '10 min read',
  },
  {
    issue: 'Issue 11', date: 'February 5, 2026',
    title: 'The EVM is the Windows of Blockchain',
    excerpt: 'Eleven years of network effects. 31,000 developers. 85% of all blockchain traffic. The moat is not a bet — it is an observation.',
    readTime: '8 min read',
  },
]

const whatYouGet = [
  'Metcalfe Compass updates with current DAA data',
  'Regulatory catalyst tracking (CLARITY Act, SEC)',
  'Infrastructure milestone coverage (EIPs, rollups)',
  "Bessent stablecoin thesis and on-chain verification",
  'Portfolio positioning context — ETHA, SBET, BMNR',
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#04091a', color: '#ffffff' }}>
      <Nav />

      <main>

        {/* ── Header ── dark navy */}
        <section
          className="pt-40 pb-24 px-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #04091a 0%, #081428 60%, #04091a 100%)' }}
        >
          <div
            className="absolute top-0 left-1/2 w-[600px] h-[400px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 0%, #3b6ee8 0%, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#6b9bf5] mb-6">
                  The Quantum Letter
                </p>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-2xl">
                  Free research. Institutional rigor. No hype.
                </h1>
                <p className="text-xl max-w-xl leading-relaxed" style={{ color: '#a0aec0' }}>
                  Mark Berube applies Metcalfe&apos;s Law to live Ethereum network data and publishes
                  the results. 16 issues. No prediction, only projection.
                </p>
              </div>
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm"
              >
                Subscribe free →
              </a>
            </div>
          </div>
        </section>

        {/* ── Issue Grid ── WHITE */}
        <section className="py-24 px-6" style={{ background: '#ffffff' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-8" style={{ color: '#3b6ee8' }}>
              Archive
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((item) => (
                <a
                  key={item.issue}
                  href="https://thequantumletter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-8 rounded-sm transition-all hover:shadow-lg"
                  style={{ background: '#f5f7ff', border: '1px solid #e0e6f5' }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#3b6ee8' }}>
                      {item.issue}
                    </span>
                    <span className="text-xs" style={{ color: '#8892aa' }}>{item.readTime}</span>
                  </div>
                  <h2
                    className="text-base font-semibold leading-snug mb-3 flex-1 transition-colors group-hover:text-[#3b6ee8]"
                    style={{ color: '#0a0f1e' }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#8892aa' }}>{item.excerpt}</p>
                  <p className="text-xs" style={{ color: '#8892aa' }}>{item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subscribe CTA ── dark navy */}
        <section className="py-24 px-6" style={{ background: '#08142e' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                Get new issues in your inbox.
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: '#a0aec0' }}>
                The Quantum Letter is published on thequantumletter.com — free, no paywall.
                Subscribe to get each issue delivered when Mark publishes it.
              </p>
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Subscribe on The Quantum Letter
              </a>
            </div>
            <div className="p-10 rounded-sm" style={{ background: '#0d1b3e', border: '1px solid #1a2a50' }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#4a5578' }}>What you get</p>
              <div className="space-y-4">
                {whatYouGet.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b6ee8] mt-2" />
                    <p className="text-sm" style={{ color: '#a0aec0' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <ComplianceFooter />
    </div>
  )
}
