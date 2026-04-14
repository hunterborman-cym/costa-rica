import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { bookingItems } from '../data/booking'
import BookingItem from './BookingItem'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Booking() {
  const [checkedIds, setCheckedIds] = useLocalStorage('cr-booking-checked',
    bookingItems.filter(b => b.preChecked).map(b => b.id)
  )
  const prevCount = useRef(checkedIds.length)

  function toggle(id) {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const checkedCount = checkedIds.length
  const totalCount = bookingItems.length
  const pct = Math.round((checkedCount / totalCount) * 100)

  // Confetti when all items checked
  useEffect(() => {
    if (checkedCount === totalCount && prevCount.current < totalCount) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7, x: 0.5 },
        colors: ['#4db8c9', '#d96a4f', '#2d5a3d', '#b8942f', '#f6f2eb'],
      })
    }
    prevCount.current = checkedCount
  }, [checkedCount, totalCount])

  return (
    <div id="booking" className="pt-16 pb-16 px-6 md:px-8 max-w-[920px] mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
            To-Do
          </p>
          <h2 className="font-display text-[2rem] font-semibold text-volcanic">
            Book in Advance
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.6rem] tracking-wider text-smoke">
            {checkedCount}/{totalCount}
          </span>
          <div className="w-24 h-1.5 bg-border-light rounded-full overflow-hidden">
            <div
              className="h-full bg-jungle-mid rounded-full transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {checkedCount === totalCount && (
        <div className="mb-4 px-4 py-3 bg-jungle-mid/10 border border-jungle-mid/20 rounded-[10px] text-center">
          <p className="font-display text-sm font-semibold text-jungle-mid">All booked! Pura Vida.</p>
        </div>
      )}

      {bookingItems.map(item => (
        <BookingItem
          key={item.id}
          item={item}
          isChecked={checkedIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  )
}
