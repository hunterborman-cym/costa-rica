import { budgetCategories } from '../data/budget'

export default function BudgetDonut() {
  const total = budgetCategories.reduce((sum, c) => sum + c.numericAmount, 0)
  const radius = 70
  const circumference = 2 * Math.PI * radius
  let cumulativeAngle = 0

  const segments = budgetCategories.map((cat) => {
    const pct = cat.numericAmount / total
    const startAngle = cumulativeAngle
    cumulativeAngle += pct * 360
    return { ...cat, pct, startAngle }
  })

  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 200 200" className="w-44 h-44">
        {/* Background ring */}
        <circle cx="100" cy="100" r={radius} fill="none" stroke="#eae5dc" strokeWidth="20" />

        {/* Segments — each rotated to its starting position */}
        {segments.map((seg) => (
          <circle
            key={seg.category}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth="20"
            strokeDasharray={`${seg.pct * circumference} ${circumference}`}
            transform={`rotate(${-90 + seg.startAngle} 100 100)`}
            strokeLinecap="butt"
          />
        ))}

        {/* Center text */}
        <text x="100" y="96" textAnchor="middle" className="fill-volcanic" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700 }}>
          $3.9k
        </text>
        <text x="100" y="114" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.4rem', letterSpacing: '0.12em', textTransform: 'uppercase', fill: '#a0a0ac' }}>
          cash total
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {segments.map((seg) => (
          <div key={seg.category} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: seg.color }} />
            <span className="font-mono text-[0.6rem] tracking-wider uppercase text-smoke">
              {seg.category} ({Math.round(seg.pct * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
