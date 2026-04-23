import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ background: 'rgba(4, 9, 26, 0.92)', borderBottom: '1px solid #1a2a50' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Assets/Quantum-logo.png"
            alt="Quantum Capital"
            width={160}
            height={40}
            style={{ height: 'auto' }}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: '#a0aec0' }}>
          <Link href="/thesis" className="hover:text-white transition-colors">Thesis</Link>
          <Link href="/research" className="hover:text-white transition-colors">Research</Link>
          <Link href="/compass" className="hover:text-white transition-colors">Compass</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>
        <a
          href="https://thequantumletter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Subscribe Free
        </a>
      </div>
    </nav>
  )
}
