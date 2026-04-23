import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'
import Divider from '@/components/Divider'

export const metadata: Metadata = {
  title: 'Disclosures',
  description:
    'Regulatory disclosures for Quantum Capital, a DBA of Patriot Advisory Group LLC, a registered investment adviser in the State of New Hampshire.',
  alternates: { canonical: 'https://quantumcapital.com/disclosures' },
  robots: { index: true, follow: true },
}

const sections = [
  {
    title: 'Firm Registration',
    content: [
      'Quantum Capital is a DBA of Patriot Advisory Group LLC, a registered investment adviser in the State of New Hampshire. Registration does not imply a certain level of skill or training.',
      'Legal Entity: Patriot Advisory Group LLC | DBA: Quantum Capital | Business ID: NH Dept. of State, 1019244 | Effective Date: February 25, 2026 | Address: 1 New Hampshire Avenue, Suite 125, Portsmouth, NH 03801',
    ],
  },
  {
    title: 'General Disclosure',
    content: [
      'This website is for informational purposes only and does not constitute investment advice, a solicitation, or an offer to buy or sell any security or digital asset. Nothing on this website should be construed as a recommendation to buy, sell, or hold any investment.',
      'Past performance does not guarantee future results. All investments involve risk, including the possible loss of principal. Cryptocurrency and digital asset investments are subject to significant volatility and may not be suitable for all investors.',
      'Clients and prospective clients should carefully consider their investment objectives, risk tolerance, time horizon, and financial situation before investing.',
    ],
  },
  {
    title: 'Projections and Price Targets',
    content: [
      'All price targets and projections published on this website, including those derived from the Quantum Compass, represent the mathematical output of Metcalfe\'s Law (V = k × n²) applied to Ethereum network data. They are projections based on a mathematical formula, not predictions, guarantees, or investment recommendations.',
      'The formula, calibration constant (k = $565), and methodology are sourced from the CFA Institute Cryptoassets Valuation Guide. The same methodology is used by Grayscale (ETHE) and Fidelity (FETH) analysts. Source attribution does not imply endorsement by those institutions of Quantum Capital or its outputs.',
      'Actual results may differ materially from projections. Do not make investment decisions based solely on mathematical models or projections published here.',
    ],
  },
  {
    title: 'The Quantum Letter',
    content: [
      'The Quantum Letter (thequantumletter.com) is a research publication authored by Mark Berube, ChFC. It is published for informational and educational purposes only and does not constitute investment advice or a solicitation. Subscribing to The Quantum Letter does not create an advisory relationship with Quantum Capital or Patriot Advisory Group LLC.',
    ],
  },
  {
    title: 'Form ADV Part 2',
    content: [
      'Form ADV Part 2 (our firm brochure) is available upon request and provides detailed information about our advisory services, fees, conflicts of interest, and disciplinary history. To request a copy, contact us directly.',
      'Form CRS (Client Relationship Summary) is also available upon request.',
    ],
  },
  {
    title: 'Third-Party References',
    content: [
      'References to third-party institutions, research, legislation, or public testimony (including the CFA Institute, Grayscale, Fidelity, and the Senate Banking Committee testimony of Scott Bessent on February 4, 2026) are for informational context only. Such references do not imply endorsement of Quantum Capital by any referenced party, nor endorsement by Quantum Capital of any products or services offered by referenced parties.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'For regulatory inquiries, to request Form ADV Part 2 or Form CRS, or for any compliance-related questions, contact Darren Kane, Compliance Officer, through Patriot Advisory Group LLC at the address listed above.',
    ],
  },
]

export default function DisclosuresPage() {
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
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#3b6ee8' }}>
              Legal &amp; Regulatory
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: '#0f172a' }}>Disclosures</h1>
            <p style={{ color: '#475569' }}>
              Quantum Capital is a DBA of Patriot Advisory Group LLC, State-registered RIA, New Hampshire
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Disclosure content ── */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={section.title} className={i > 0 ? 'pt-12 border-t' : ''} style={{ borderColor: '#e2e8f0' }}>
                  <h2 className="text-base font-semibold mb-4" style={{ color: '#0f172a' }}>{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-sm leading-relaxed" style={{ color: '#475569' }}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-sm" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                Quantum Capital is a DBA of Patriot Advisory Group LLC, a registered investment adviser
                in the State of New Hampshire. Registration does not imply a certain level of skill
                or training. This website is for informational purposes only and does not constitute
                investment advice, a solicitation, or an offer to buy or sell any security or digital
                asset. Past performance does not guarantee future results. All investments involve
                risk, including the possible loss of principal. Form ADV Part 2 is available upon
                request.
              </p>
            </div>
          </div>
        </section>

      </main>
      <ComplianceFooter />
    </div>
  )
}
