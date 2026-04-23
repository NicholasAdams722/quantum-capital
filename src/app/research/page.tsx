import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'
import Divider from '@/components/Divider'
import { getPosts, formatDate, issueLabel, isGhostConfigured, type GhostPost } from '@/lib/ghost'

export const metadata: Metadata = {
  title: 'Research: The Quantum Letter',
  description:
    'The Quantum Letter archive. Institutional-grade Ethereum research from Mark Berube, ChFC. Free, published regularly, no hype.',
  alternates: { canonical: 'https://quantumcapital.com/research' },
  openGraph: {
    title: 'Research | Quantum Capital',
    description: 'The Quantum Letter archive. Institutional Ethereum research. Free.',
    url: 'https://quantumcapital.com/research',
  },
}

const FALLBACK_ISSUES = [
  {
    title: 'ETH Research: ETHA, SBET, and the Portfolio Positioning Case',
    excerpt: 'A breakdown of the three instruments we use for Ethereum exposure, and why the structure matters as much as the thesis.',
    date: 'April 17, 2026', label: 'Issue 16', readTime: '8 min read',
  },
  {
    title: 'The CLARITY Act and What Commodity Status Actually Means',
    excerpt: 'When Ethereum goes from "legal" to "law," risk is reduced by at least 50%. Here is what the legislation does and when it lands.',
    date: 'April 3, 2026', label: 'Issue 15', readTime: '6 min read',
  },
  {
    title: "Bessent's $3 Trillion and the Metcalfe Multiplier",
    excerpt: "Every new stablecoin dollar is a new Metcalfe user. Every new user increases n. Every increase in n increases n² exponentially.",
    date: 'March 20, 2026', label: 'Issue 14', readTime: '7 min read',
  },
  {
    title: 'Pectra, EIP-7702, and the AI Agent Wallet Stack',
    excerpt: 'The upgrade that makes Ethereum wallets compatible with autonomous AI agents is live. Here is what it means for network value.',
    date: 'March 6, 2026', label: 'Issue 13', readTime: '9 min read',
  },
  {
    title: 'Ultrasound Money: The Supply Mechanics Bitcoin Cannot Match',
    excerpt: 'Bitcoin is sound money. Ethereum is ultrasound money. The difference is demand-driven supply destruction, and it is already running.',
    date: 'February 20, 2026', label: 'Issue 12', readTime: '10 min read',
  },
  {
    title: 'The EVM is the Windows of Blockchain',
    excerpt: 'Eleven years of network effects. 31,000 developers. 85% of all blockchain traffic. The moat is not a bet. It is an observation.',
    date: 'February 5, 2026', label: 'Issue 11', readTime: '8 min read',
  },
]

const whatYouGet = [
  'Metcalfe Compass updates with current DAA data',
  'Regulatory catalyst tracking (CLARITY Act, SEC)',
  'Infrastructure milestone coverage (EIPs, rollups)',
  "Bessent stablecoin thesis and on-chain verification",
  'Portfolio positioning context: ETHA, SBET, BMNR',
]

function IssueCard({
  label, title, excerpt, date, readTime, href,
}: {
  label: string; title: string; excerpt: string; date: string; readTime: string; href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-8 rounded-sm transition-all hover:border-[#3b6ee8] hover:shadow-sm bg-white"
      style={{ border: '1px solid #e2e8f0' }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#3b6ee8' }}>
          {label}
        </span>
        <span className="text-xs" style={{ color: '#94a3b8' }}>{readTime}</span>
      </div>
      <h2 className="text-base font-semibold leading-snug mb-3 flex-1 transition-colors group-hover:text-[#3b6ee8]" style={{ color: '#0f172a' }}>
        {title}
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#475569' }}>{excerpt}</p>
      <p className="text-xs" style={{ color: '#94a3b8' }}>{date}</p>
    </a>
  )
}

export default async function ResearchPage() {
  const ghostPosts: GhostPost[] = await getPosts(12)
  const liveData = isGhostConfigured() && ghostPosts.length > 0

  return (
    <div className="min-h-screen font-sans bg-white text-[#0f172a]">
      <Nav />

      <main>

        {/* ── Header ── white */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>
                  The Quantum Letter
                </p>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-2xl" style={{ color: '#0f172a' }}>
                  Free research. Institutional rigor. No hype.
                </h1>
                <p className="text-xl max-w-xl leading-relaxed" style={{ color: '#475569' }}>
                  Mark Berube applies Metcalfe&apos;s Law to live Ethereum network data and publishes
                  the results.{liveData ? ` ${ghostPosts.length} issues.` : ' 16 issues.'} No prediction, only projection.
                </p>
              </div>
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#3b6ee8] hover:bg-[#1e3a8a] text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm"
              >
                Subscribe free →
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Issue Grid ── light gray */}
        <section className="py-24 px-6" style={{ background: '#f8fafc' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest mb-8" style={{ color: '#3b6ee8' }}>
              Archive {liveData && <span style={{ color: '#94a3b8' }}>(pulling live from thequantumletter.com)</span>}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {liveData
                ? ghostPosts.map((post, i) => (
                    <IssueCard
                      key={post.id}
                      label={issueLabel(i, ghostPosts.length)}
                      title={post.title}
                      excerpt={post.excerpt ?? ''}
                      date={formatDate(post.published_at)}
                      readTime={`${post.reading_time} min read`}
                      href={post.url}
                    />
                  ))
                : FALLBACK_ISSUES.map((item) => (
                    <IssueCard
                      key={item.label}
                      label={item.label}
                      title={item.title}
                      excerpt={item.excerpt}
                      date={item.date}
                      readTime={item.readTime}
                      href="https://thequantumletter.com"
                    />
                  ))
              }
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Subscribe CTA ── white */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: '#0f172a' }}>
                Get new issues in your inbox.
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: '#475569' }}>
                The Quantum Letter is published on thequantumletter.com. Free, no paywall.
                Subscribe to get each issue delivered when Mark publishes it.
              </p>
              <a
                href="https://thequantumletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3b6ee8] hover:bg-[#1e3a8a] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Subscribe on The Quantum Letter
              </a>
            </div>
            <div className="p-10 rounded-sm" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#94a3b8' }}>What you get</p>
              <div className="space-y-4">
                {whatYouGet.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b6ee8] mt-2" />
                    <p className="text-sm" style={{ color: '#475569' }}>{item}</p>
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
