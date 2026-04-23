'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/thesis', label: 'Thesis' },
  { href: '/research', label: 'Research' },
  { href: '/compass', label: 'Compass' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        style={{ background: 'rgba(4, 9, 26, 0.95)', borderBottom: '1px solid #1a2a50' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/Assets/Quantum-logo.png"
              alt="Quantum Capital"
              width={160}
              height={40}
              style={{ height: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: '#a0aec0' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://thequantumletter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Subscribe Free
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-sm transition-colors"
              style={{ color: '#a0aec0' }}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span
                className="block w-6 h-0.5 transition-all duration-200 origin-center"
                style={{
                  background: '#a0aec0',
                  transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-200"
                style={{
                  background: '#a0aec0',
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-200 origin-center"
                style={{
                  background: '#a0aec0',
                  transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1"
            style={{ borderTop: '1px solid #1a2a50' }}
          >
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium transition-colors hover:text-white border-b"
                style={{ color: '#a0aec0', borderColor: '#1a2a50' }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://thequantumletter.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#3b6ee8] hover:bg-[#6b9bf5] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors text-center"
            >
              Subscribe Free →
            </a>
          </div>
        )}
      </nav>

      {/* Backdrop — closes menu on outside tap */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
