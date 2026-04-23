'use client'

import { useState, useMemo } from 'react'

const BASELINE_DAA = 700_000
const BASELINE_PRICE = 2_350
const BASELINE_K = 565

const DAA_MIN = 100_000
const DAA_MAX = 5_000_000

const MILESTONES = [
  { daa: 700_000,   label: 'Today',     period: 'Apr 2026', price: 2_350 },
  { daa: 800_000,   label: '90 Days',   period: 'Jul 2026', price: 3_070 },
  { daa: 1_000_000, label: '180 Days',  period: 'Oct 2026', price: 4_780 },
  { daa: 1_250_000, label: 'Year-End',  period: 'Dec 2026', price: 7_350 },
]

function formatPrice(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(n)
}

function formatDAA(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  return `${(n / 1_000).toFixed(0)}K`
}

function formatPct(n: number) {
  const sign = n >= 0 ? '+' : ''
  return `${sign}${n.toFixed(1)}%`
}

export default function MetcalfeCalculator() {
  const [daa, setDaa] = useState(BASELINE_DAA)
  const [k, setK] = useState(BASELINE_K)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const price = useMemo(
    () => (k / BASELINE_K) * BASELINE_PRICE * Math.pow(daa / BASELINE_DAA, 2),
    [daa, k]
  )

  const pctPrice = ((price - BASELINE_PRICE) / BASELINE_PRICE) * 100
  const pctDaa   = ((daa - BASELINE_DAA) / BASELINE_DAA) * 100

  const priceColor =
    price > BASELINE_PRICE ? '#22c55e' :
    price < BASELINE_PRICE ? '#ef4444' : '#ffffff'

  // track fill percentage for the visual gradient
  const fillPct = ((daa - DAA_MIN) / (DAA_MAX - DAA_MIN)) * 100

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ border: '1px solid #1a2a50', background: '#08142e' }}
    >
      {/* ── Price output ── */}
      <div
        className="px-8 pt-10 pb-8 text-center"
        style={{ borderBottom: '1px solid #1a2a50' }}
      >
        <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#4a5578' }}>
          Implied ETH Price
        </p>
        <p
          className="text-5xl md:text-7xl font-black tracking-tight mb-4 transition-colors duration-150 whitespace-nowrap tabular-nums"
          style={{ color: priceColor }}
        >
          {formatPrice(price)}
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap min-h-[36px]">
          <span
            className="text-base font-semibold px-4 py-1.5 rounded-full"
            style={{
              background: price > BASELINE_PRICE ? '#052e16' : price < BASELINE_PRICE ? '#2d0000' : '#1a2a50',
              color: priceColor,
            }}
          >
            {formatPct(pctPrice)} vs. today
          </span>
          <span
            className="text-sm px-4 py-1.5 rounded-full transition-opacity duration-150"
            style={{
              background: '#0d1b3e',
              color: '#6b9bf5',
              opacity: Math.abs(pctDaa) > 0.5 ? 1 : 0,
              pointerEvents: Math.abs(pctDaa) > 0.5 ? 'auto' : 'none',
            }}
          >
            {formatPct(pctDaa)} users → {formatPct(pctPrice)} price &nbsp;
            <span style={{ color: '#4a5578' }}>(n² effect)</span>
          </span>
        </div>
      </div>

      <div className="px-8 py-10">

        {/* ── DAA Slider ── */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-semibold text-white">
              Daily Active Addresses
              <span className="ml-2 text-xs font-normal" style={{ color: '#4a5578' }}>(n)</span>
            </p>
            <p
              className="text-2xl font-black font-mono"
              style={{ color: '#6b9bf5' }}
            >
              {formatDAA(daa)}
            </p>
          </div>

          {/* Track with gradient fill */}
          <div className="relative mb-8">
            <div
              className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
              style={{
                width: `${fillPct}%`,
                background: 'linear-gradient(90deg, #1e3a8a, #3b6ee8)',
                top: 0,
                height: '6px',
                marginTop: '0px',
              }}
            />
            <input
              type="range"
              min={DAA_MIN}
              max={DAA_MAX}
              step={10_000}
              value={daa}
              onChange={e => setDaa(Number(e.target.value))}
              className="relative w-full"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Range labels */}
          <div className="flex justify-between text-xs mb-8" style={{ color: '#4a5578' }}>
            <span>100K</span>
            <span>1M</span>
            <span>2M</span>
            <span>3M</span>
            <span>4M</span>
            <span>5M</span>
          </div>

          {/* Milestone snap buttons */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#4a5578' }}>
              Snap to target
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {MILESTONES.map((m) => {
                const active = daa === m.daa
                return (
                  <button
                    key={m.daa}
                    onClick={() => setDaa(m.daa)}
                    className="text-left px-4 py-4 rounded-sm transition-all"
                    style={{
                      background: active ? '#1a2a50' : '#0d1b3e',
                      border: `1px solid ${active ? '#3b6ee8' : '#1a2a50'}`,
                    }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: active ? '#6b9bf5' : '#a0aec0' }}>
                      {m.label}
                    </p>
                    <p className="text-xs mb-2" style={{ color: '#4a5578' }}>{m.period}</p>
                    <p className="text-base font-black" style={{ color: active ? '#ffffff' : '#a0aec0' }}>
                      {formatPrice(m.price)}
                    </p>
                    <p className="text-xs font-mono mt-1" style={{ color: '#4a5578' }}>
                      {formatDAA(m.daa)} DAA
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Live formula ── */}
        <div
          className="px-6 py-4 rounded-sm font-mono text-sm mb-6 flex flex-wrap items-center gap-x-2 gap-y-1"
          style={{ background: '#0d1b3e', border: '1px solid #1a2a50' }}
        >
          <span style={{ color: '#4a5578' }}>V =</span>
          <span className="font-bold" style={{ color: '#6b9bf5' }}>{k}</span>
          <span style={{ color: '#4a5578' }}>×</span>
          <span className="font-bold" style={{ color: '#6b9bf5' }}>({formatDAA(daa)})²</span>
          <span style={{ color: '#4a5578' }}>=</span>
          <span className="font-bold text-base" style={{ color: priceColor }}>{formatPrice(price)}</span>
          <span style={{ color: '#4a5578' }}>per ETH</span>
        </div>

        {/* ── Advanced: k slider ── */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-xs mb-4 transition-colors w-full text-left"
          style={{ color: showAdvanced ? '#6b9bf5' : '#4a5578' }}
        >
          <span style={{
            display: 'inline-block',
            transition: 'transform 0.2s',
            transform: showAdvanced ? 'rotate(90deg)' : 'rotate(0deg)',
          }}>›</span>
          Advanced: adjust k (calibration constant)
        </button>

        {showAdvanced && (
          <div
            className="p-6 rounded-sm"
            style={{ background: '#0d1b3e', border: '1px solid #1a2a50' }}
          >
            <div className="flex items-baseline justify-between mb-5">
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  k — network coefficient
                </p>
                <p className="text-xs" style={{ color: '#4a5578' }}>
                  CFA Institute baseline: $565 (April 2026)
                </p>
              </div>
              <p className="text-2xl font-black font-mono" style={{ color: '#6b9bf5' }}>${k}</p>
            </div>
            <input
              type="range"
              min={200}
              max={1000}
              step={5}
              value={k}
              onChange={e => setK(Number(e.target.value))}
              className="w-full mb-3"
            />
            <div className="flex justify-between text-xs" style={{ color: '#4a5578' }}>
              <span>$200 (bear)</span>
              <span style={{ color: k === BASELINE_K ? '#6b9bf5' : '#4a5578' }}>
                $565 ← CFA baseline
              </span>
              <span>$1,000 (bull)</span>
            </div>
            {k !== BASELINE_K && (
              <p className="text-xs mt-4 px-4 py-2 rounded-sm" style={{ color: '#f59e0b', background: '#1c1200', border: '1px solid #78350f' }}>
                ⚠ k adjusted from CFA baseline. Output is illustrative only.
              </p>
            )}
            <button
              onClick={() => setK(BASELINE_K)}
              className="mt-4 text-xs underline"
              style={{ color: '#4a5578' }}
            >
              Reset to $565
            </button>
          </div>
        )}

        {/* ── Disclaimer ── */}
        <p className="text-xs mt-6 leading-relaxed" style={{ color: '#4a5578' }}>
          Not investment advice. Mathematical output of Metcalfe&apos;s Law calibrated to
          April 2026 Ethereum network data. Projections only. Source: CFA Institute
          Cryptoassets Valuation Guide.
        </p>
      </div>
    </div>
  )
}
