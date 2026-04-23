import Image from 'next/image'
import Link from 'next/link'

export default function ComplianceFooter() {
  return (
    <footer style={{ background: '#04091a', borderTop: '1px solid #1a2a50' }} className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <Image
              src="/Assets/Quantum-logo.png"
              alt="Quantum Capital"
              width={120}
              height={30}
              style={{ height: 'auto' }}
            />
            <p className="text-xs mt-2" style={{ color: '#4a5578' }}>Patriot Advisory Group LLC dba Quantum Capital</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm" style={{ color: '#4a5578' }}>
            <Link href="/thesis" className="hover:text-white transition-colors">Thesis</Link>
            <Link href="/research" className="hover:text-white transition-colors">Research</Link>
            <Link href="/compass" className="hover:text-white transition-colors">Compass</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/book" className="hover:text-white transition-colors">Book a Call</Link>
            <Link href="/disclosures" className="hover:text-white transition-colors">Disclosures</Link>
          </div>
        </div>
        <div className="pt-8" style={{ borderTop: '1px solid #1a2a50' }}>
          <p className="text-xs leading-relaxed max-w-4xl" style={{ color: '#4a5578' }}>
            Patriot Advisory Group LLC dba Quantum Capital is a registered investment adviser in the
            State of New Hampshire. Registration does not imply a certain level of skill or training.
            This website is for informational purposes only and does not constitute investment advice,
            a solicitation, or an offer to buy or sell any security or digital asset. Past performance
            does not guarantee future results. All investments involve risk, including the possible loss
            of principal. Form ADV Part 2 is available upon request.
          </p>
        </div>
      </div>
    </footer>
  )
}
