import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-black/90 backdrop-blur-sm">
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
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a0a0a0]">
          <Link href="/thesis" className="hover:text-white transition-colors">Thesis</Link>
          <Link href="/research" className="hover:text-white transition-colors">Research</Link>
          <Link href="/compass" className="hover:text-white transition-colors">Compass</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>
        <Link
          href="/book"
          className="bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  )
}
