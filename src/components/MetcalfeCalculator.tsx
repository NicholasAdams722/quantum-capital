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
    price > BASELINE_PRICE ? '#16a34a' :
    price < BASELINE_PRICE ? '#dc2626' : '#0f172a'

  const priceBg =
    price > BASELINE_PRICE ? '#f0fdf4' :
    price < BASELINE_PRICE ? '#fef2f2' : '#f8fafc'

  const fillPct = ((daa - DAA_MIN) / (DAA_MAX - DAA_MIN)) * 100

  return (
    <div
      className="rounded-sm overflow-hidden bg-white"
      style={{ border: '1px solid #e2e8f0' }}
    >
      {/* ── Price output ── */}
      <div
        className="px-8 pt-10 pb-8 text-center"
        style={{ background: priceBg, borderBottom: '1px solid #e2e8f0' }}
      >
        <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#94a3b8' }}>
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
              background: price > BASELINE_PRICE ? '#dcfce7' : price < BASELINE_PRICE ? '#fee2e2' : '#e2e8f0',
              color: priceColor,
            }}
          >
            {formatPct(pctPrice)} vs. today
          </span>
          <span
            className="text-sm px-4 py-1.5 rounded-full transition-opacity duration-150 whitespace-nowrap"
            style={{
              background: '#eff6ff',
              color: '#3b6ee8',
              opacity: Math.abs(pctDaa) > 0.5 ? 1 : 0,
              pointerEvents: Math.abs(pctDaa) > 0.5 ? 'auto' : 'none',
            }}
          >
            {formatPct(pctDaa)} users → {formatPct(pctPrice)} price{' '}
            <span style={{ color: '#94a3b8' }}>(n² effect)</span>
          </span>
        </div>
      </div>

      <div className="px-8 py-10">

        {/* ── DAA Slider ── */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-sm font-semibold" style={{ color: '#0f172a' }}>
              Daily Active Addresses
              <span className="ml-2 text-xs font-normal" style={{ color: '#94a3b8' }}>(n)</span>
            </p>
            <p
              className="text-2xl font-black font-mono"
              style={{ color: '#3b6ee8' }}
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
          <div className="flex justify-between text-xs mb-8" style={{ color: '#94a3b8' }}>
            <span>100K</span>
            <span>1M</span>
            <span>2M</span>
            <span>3M</span>
            <span>4M</span>
            <span>5M</span>
          </div>

          {/* Milestone snap buttons */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#94a3b8' }}>
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
                      background: active ? '#eff6ff' : '#f8fafc',
                      border: `1px solid ${active ? '#3b6ee8' : '#e2e8f0'}`,
                    }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: active ? '#3b6ee8' : '#475569' }}>
                      {m.label}
                    </p>
                    <p className="text-xs mb-2" style={{ color: '#94a3b8' }}>{m.period}</p>
                    <p className="text-base font-black" style={{ color: active ? '#1e3a8a' : '#0f172a' }}>
                      {formatPrice(m.price)}
                    </p>
                    <p className="text-xs font-mono mt-1" style={{ color: '#94a3b8' }}>
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
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        >
          <span style={{ color: '#94a3b8' }}>V =</span>
          <span className="font-bold" style={{ color: '#3b6ee8' }}>{k}</span>
          <span style={{ color: '#94a3b8' }}>×</span>
          <span className="font-bold" style={{ color: '#3b6ee8' }}>({formatDAA(daa)})²</span>
          <span style={{ color: '#94a3b8' }}>=</span>
          <span className="font-bold text-base" style={{ color: priceColor }}>{formatPrice(price)}</span>
          <span style={{ color: '#94a3b8' }}>per ETH</span>
        </div>

        {/* ── Advanced: k slider ── */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-xs mb-4 transition-colors w-full text-left"
          style={{ color: showAdvanced ? '#3b6ee8' : '#94a3b8' }}
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
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
          >
            <div className="flex items-baseline justify-between mb-5">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
                  k — network coefficient
                </p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>
                  CFA Institute baseline: $565 (April 2026)
                </p>
              </div>
              <p className="text-2xl font-black font-mono" style={{ color: '#3b6ee8' }}>${k}</p>
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
            <div className="flex justify-between text-xs" style={{ color: '#94a3b8' }}>
              <span>$200 (bear)</span>
              <span style={{ color: k === BASELINE_K ? '#3b6ee8' : '#94a3b8' }}>
                $565 ← CFA baseline
              </span>
              <span>$1,000 (bull)</span>
            </div>
            {k !== BASELINE_K && (
              <p className="text-xs mt-4 px-4 py-2 rounded-sm" style={{ color: '#d97706', background: '#fffbeb', border: '1px solid #fde68a' }}>
                ⚠ k adjusted from CFA baseline. Output is illustrative only.
              </p>
            )}
            <button
              onClick={() => setK(BASELINE_K)}
              className="mt-4 text-xs underline"
              style={{ color: '#94a3b8' }}
            >
              Reset to $565
            </button>
          </div>
        )}

        {/* ── Disclaimer ── */}
        <p className="text-xs mt-6 leading-relaxed" style={{ color: '#94a3b8' }}>
          Not investment advice. Mathematical output of Metcalfe&apos;s Law calibrated to
          April 2026 Ethereum network data. Projections only. Source: CFA Institute
          Cryptoassets Valuation Guide.
        </p>
      </div>
    </div>
  )
}
