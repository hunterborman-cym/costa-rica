import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

function useCountUp(target, inView, duration = 1200) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    function step(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return value
}

export default function BudgetCard({ category, amount, numericAmount, note, items, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const counted = useCountUp(numericAmount || 0, inView)
  const displayAmount = numericAmount ? `$${counted.toLocaleString()}` : amount

  return (
    <div ref={ref} className="bg-white border border-border-light rounded-card overflow-hidden shadow-sm">
      <div className="h-[3px] w-full" style={{ background: color }} />
      <div className="p-5">
        <p className="font-mono text-[0.56rem] tracking-[0.16em] uppercase text-smoke mb-2">
          {category}
        </p>
        <p className="font-display text-[1.7rem] font-bold text-volcanic mb-0.5 tabular-nums">
          {displayAmount}
        </p>
        <p className="text-[0.7rem] text-smoke-light mb-3.5">{note}</p>

        <ul className="list-none">
          {items.map((item, i) => (
            <li
              key={i}
              className={`flex justify-between text-[0.8rem] py-2 text-[#5a5a6a] ${
                i < items.length - 1 ? 'border-b border-border-light' : ''
              }`}
            >
              <span>{item.label}</span>
              <span className="font-mono text-[0.72rem] text-volcanic font-medium">
                {item.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
