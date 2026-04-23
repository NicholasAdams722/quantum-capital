import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ComplianceFooter from '@/components/ComplianceFooter'

export const metadata: Metadata = {
  title: 'Disclosures',
  description:
    'Regulatory disclosures for Patriot Advisory Group LLC dba Quantum Capital, a registered investment adviser in the State of New Hampshire.',
  alternates: { canonical: 'https://quantumcapital.com/disclosures' },
  robots: { index: true, follow: true },
}

export default function DisclosuresPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-[#a0a0a0] mb-6">
            Legal & Regulatory
          </p>
          <h1 className="text-4xl font-black tracking-tight mb-12">Disclosures</h1>

          <div className="space-y-12 text-sm text-[#a0a0a0] leading-relaxed">

            <div>
              <h2 className="text-base font-semibold text-white mb-4">Firm Registration</h2>
              <p className="mb-4">
                Patriot Advisory Group LLC dba Quantum Capital is a registered investment adviser
                in the State of New Hampshire. Registration does not imply a certain level of skill
                or training.
              </p>
              <p className="mb-4">
                <strong className="text-white">Legal Entity:</strong> Patriot Advisory Group LLC<br />
                <strong className="text-white">DBA:</strong> Quantum Capital<br />
                <strong className="text-white">Business ID:</strong> NH Dept. of State, 1019244<br />
                <strong className="text-white">Effective Date:</strong> February 25, 2026<br />
                <strong className="text-white">Address:</strong> 1 New Hampshire Avenue, Suite 125, Portsmouth, NH 03801
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12">
              <h2 className="text-base font-semibold text-white mb-4">General Disclosure</h2>
              <p className="mb-4">
                This website is for informational purposes only and does not constitute investment
                advice, a solicitation, or an offer to buy or sell any security or digital asset.
                Nothing on this website should be construed as a recommendation to buy, sell, or
                hold any investment.
              </p>
              <p className="mb-4">
                Past performance does not guarantee future results. All investments involve risk,
                including the possible loss of principal. Cryptocurrency and digital asset investments
                are subject to significant volatility and may not be suitable for all investors.
              </p>
              <p>
                Clients and prospective clients should carefully consider their investment objectives,
                risk tolerance, time horizon, and financial situation before investing.
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12">
              <h2 className="text-base font-semibold text-white mb-4">Projections and Price Targets</h2>
              <p className="mb-4">
                All price targets and projections published on this website, including those derived
                from the Quantum Compass, represent the mathematical output of Metcalfe&apos;s Law
                (V = k × n²) applied to Ethereum network data. They are projections based on a
                mathematical formula — not predictions, guarantees, or investment recommendations.
              </p>
              <p className="mb-4">
                The formula, calibration constant (k = $565), and methodology are sourced from the
                CFA Institute Cryptoassets Valuation Guide. The same methodology is used by
                Grayscale (ETHE) and Fidelity (FETH) analysts. Source attribution does not imply
                endorsement by those institutions of Quantum Capital or its outputs.
              </p>
              <p>
                Actual results may differ materially from projections. Do not make investment
                decisions based solely on mathematical models or projections published here.
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12">
              <h2 className="text-base font-semibold text-white mb-4">The Quantum Letter</h2>
              <p className="mb-4">
                The Quantum Letter (thequantumletter.com) is a research publication authored by
                Mark Berube, ChFC. It is published for informational and educational purposes only
                and does not constitute investment advice or a solicitation. Subscribing to The
                Quantum Letter does not create an advisory relationship with Patriot Advisory
                Group LLC or Quantum Capital.
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12">
              <h2 className="text-base font-semibold text-white mb-4">Form ADV Part 2</h2>
              <p className="mb-4">
                Form ADV Part 2 (our firm brochure) is available upon request and provides
                detailed information about our advisory services, fees, conflicts of interest,
                and disciplinary history. To request a copy, contact us directly.
              </p>
              <p>
                Form CRS (Client Relationship Summary) is also available upon request.
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12">
              <h2 className="text-base font-semibold text-white mb-4">Third-Party References</h2>
              <p className="mb-4">
                References to third-party institutions, research, legislation, or public testimony
                (including the CFA Institute, Grayscale, Fidelity, and the Senate Banking
                Committee testimony of Scott Bessent on February 4, 2026) are for informational
                context only. Such references do not imply endorsement of Quantum Capital by any
                referenced party, nor endorsement by Quantum Capital of any products or services
                offered by referenced parties.
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12">
              <h2 className="text-base font-semibold text-white mb-4">Contact</h2>
              <p>
                For regulatory inquiries, to request Form ADV Part 2 or Form CRS, or for any
                compliance-related questions, contact Darren Kane, Compliance Officer, through
                Patriot Advisory Group LLC at the address listed above.
              </p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-12 bg-[#0d0d0d] p-8">
              <p className="text-xs text-[#555555] leading-relaxed">
                Patriot Advisory Group LLC dba Quantum Capital is a registered investment adviser
                in the State of New Hampshire. Registration does not imply a certain level of skill
                or training. This website is for informational purposes only and does not constitute
                investment advice, a solicitation, or an offer to buy or sell any security or
                digital asset. Past performance does not guarantee future results. All investments
                involve risk, including the possible loss of principal. Form ADV Part 2 is available
                upon request.
              </p>
            </div>

          </div>
        </div>
      </main>

      <ComplianceFooter />
    </div>
  )
}
