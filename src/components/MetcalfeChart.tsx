const W = 640, H = 280
const ml = 72, mr = 32, mt = 24, mb = 48
const cw = W - ml - mr
const ch = H - mt - mb

const DAA_MIN = 500_000, DAA_MAX = 1_500_000
const PRICE_MAX = 11_000

function xScale(daa: number) {
  return ml + ((daa - DAA_MIN) / (DAA_MAX - DAA_MIN)) * cw
}
function yScale(price: number) {
  return mt + ch - (price / PRICE_MAX) * ch
}

const targets = [
  { daa: 700_000,   price: 2_350, label: '$2,350',  period: 'Today',     anchor: 'middle' as const, dy: -14 },
  { daa: 800_000,   price: 3_070, label: '$3,070',  period: '90 days',   anchor: 'middle' as const, dy: -14 },
  { daa: 1_000_000, price: 4_780, label: '$4,780',  period: '180 days',  anchor: 'middle' as const, dy: -14 },
  { daa: 1_250_000, price: 7_350, label: '$7,350',  period: 'Year-end',  anchor: 'middle' as const, dy: -14 },
]

const xGridLines = [500_000, 750_000, 1_000_000, 1_250_000, 1_500_000]
const yGridLines = [0, 2_000, 4_000, 6_000, 8_000, 10_000]

function daaLabel(daa: number) {
  return daa >= 1_000_000 ? `${(daa / 1_000_000).toFixed(2)}M` : `${(daa / 1_000).toFixed(0)}K`
}

export default function MetcalfeChart() {
  // Generate the Metcalfe curve
  const curvePoints: string[] = []
  for (let daa = DAA_MIN; daa <= DAA_MAX; daa += 20_000) {
    const price = 2_350 * Math.pow(daa / 700_000, 2)
    if (price <= PRICE_MAX) {
      curvePoints.push(`${xScale(daa).toFixed(1)},${yScale(price).toFixed(1)}`)
    }
  }

  return (
    <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
      <div className="px-6 py-3 flex items-center justify-between" style={{ borderBottom: '1px solid #e2e8f0', background: '#f5f7ff' }}>
        <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#3b6ee8' }}>
          Metcalfe Curve: V = k × n²
        </p>
        <p className="text-xs" style={{ color: '#94a3b8' }}>k = $565 · April 2026 calibration</p>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full bg-white"
        role="img"
        aria-label="Metcalfe's Law curve showing ETH price projections vs daily active addresses"
      >
        {/* Horizontal grid lines */}
        {yGridLines.map(price => (
          <line
            key={price}
            x1={ml} y1={yScale(price)}
            x2={ml + cw} y2={yScale(price)}
            stroke="#f1f5f9" strokeWidth="1"
          />
        ))}

        {/* Y-axis labels */}
        {yGridLines.map(price => (
          <text
            key={price}
            x={ml - 8} y={yScale(price) + 4}
            textAnchor="end"
            fontSize="11"
            fill="#94a3b8"
            fontFamily="system-ui, sans-serif"
          >
            {price === 0 ? '$0' : `$${(price / 1_000).toFixed(0)}K`}
          </text>
        ))}

        {/* X-axis labels */}
        {xGridLines.map(daa => (
          <text
            key={daa}
            x={xScale(daa)} y={H - mb + 18}
            textAnchor="middle"
            fontSize="11"
            fill="#94a3b8"
            fontFamily="system-ui, sans-serif"
          >
            {daaLabel(daa)}
          </text>
        ))}

        {/* X-axis label: DAA */}
        <text
          x={ml + cw / 2} y={H - 4}
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
          fontFamily="system-ui, sans-serif"
        >
          Daily Active Addresses (n)
        </text>

        {/* Dashed vertical lines at targets */}
        {targets.map(t => (
          <line
            key={`vline-${t.daa}`}
            x1={xScale(t.daa)} y1={yScale(t.price)}
            x2={xScale(t.daa)} y2={mt + ch}
            stroke="#3b6ee8" strokeWidth="1"
            strokeDasharray="4,3"
            opacity="0.25"
          />
        ))}

        {/* Metcalfe curve */}
        <polyline
          points={curvePoints.join(' ')}
          fill="none"
          stroke="#3b6ee8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Target dots + labels */}
        {targets.map(t => {
          const cx = xScale(t.daa)
          const cy = yScale(t.price)
          return (
            <g key={t.daa}>
              <circle cx={cx} cy={cy} r="5" fill="#3b6ee8" />
              <circle cx={cx} cy={cy} r="9" fill="#3b6ee8" opacity="0.15" />
              <text
                x={cx} y={cy + t.dy - 4}
                textAnchor={t.anchor}
                fontSize="11"
                fill="#94a3b8"
                fontFamily="system-ui, sans-serif"
              >
                {t.period}
              </text>
              <text
                x={cx} y={cy + t.dy + 8}
                textAnchor={t.anchor}
                fontSize="12"
                fontWeight="700"
                fill="#0f172a"
                fontFamily="system-ui, sans-serif"
              >
                {t.label}
              </text>
            </g>
          )
        })}
      </svg>
      <div className="px-6 py-3" style={{ borderTop: '1px solid #e2e8f0', background: '#f5f7ff' }}>
        <p className="text-xs" style={{ color: '#94a3b8' }}>
          Mathematical projections only. Not investment advice. Source: CFA Institute Cryptoassets Valuation Guide.
        </p>
      </div>
    </div>
  )
}
