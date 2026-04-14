import { motion } from 'framer-motion'
import { budgetCategories } from '../data/budget'

export default function BudgetDonut() {
  const total = budgetCategories.reduce((sum, c) => sum + c.numericAmount, 0)
  const radius = 70
  const circumference = 2 * Math.PI * radius
  let offset = 0

  const segments = budgetCategories.map((cat) => {
    const pct = cat.numericAmount / total
    const dashLength = pct * circumference
    const dashOffset = offset
    offset += dashLength
    return { ...cat, pct, dashLength, dashOffset }
  })

  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 200 200" className="w-40 h-40">
        {segments.map((seg, i) => (
          <motion.circle
            key={seg.category}
            className="donut-segment"
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth="18"
            strokeDasharray={`${seg.dashLength} ${circumference - seg.dashLength}`}
            strokeDashoffset={-seg.dashOffset}
            strokeLinecap="butt"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}
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
