import { useState, useCallback } from 'react'
import { ChevronsDown, ChevronsUp } from 'lucide-react'
import DayCard from './DayCard'
import TimelineStrip from './TimelineStrip'
import { days } from '../data/days'

export default function Itinerary() {
  const [openIds, setOpenIds] = useState(new Set())

  const allOpen = openIds.size === days.length

  const toggle = useCallback((id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const handleDayClick = useCallback((id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
    setTimeout(() => {
      document.getElementById(`day-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }, [])

  const toggleAll = useCallback(() => {
    if (allOpen) {
      setOpenIds(new Set())
    } else {
      setOpenIds(new Set(days.map((d) => d.id)))
    }
  }, [allOpen])

  return (
    <>
      <TimelineStrip onDayClick={handleDayClick} />

      <div id="itinerary" className="pt-12 pb-6 px-6 md:px-8 max-w-[920px] mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
              Day by Day
            </p>
            <h2 className="font-display text-[2rem] font-semibold text-volcanic">
              The Itinerary
            </h2>
          </div>
          <button
            onClick={toggleAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-light text-smoke text-[0.7rem] font-mono tracking-wider uppercase hover:border-border hover:text-volcanic hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            {allOpen ? <ChevronsUp size={13} /> : <ChevronsDown size={13} />}
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        {days.map((day) => (
          <DayCard
            key={day.id}
            day={day}
            isOpen={openIds.has(day.id)}
            onToggle={() => toggle(day.id)}
          />
        ))}
      </div>
    </>
  )
}
