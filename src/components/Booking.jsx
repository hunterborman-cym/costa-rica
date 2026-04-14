import { bookingItems } from '../data/booking'
import BookingItem from './BookingItem'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Booking() {
  const [checkedIds, setCheckedIds] = useLocalStorage('cr-booking-checked',
    bookingItems.filter(b => b.preChecked).map(b => b.id)
  )

  function toggle(id) {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  return (
    <div id="booking" className="pt-16 pb-16 px-6 md:px-8 max-w-[920px] mx-auto">
      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
        To-Do
      </p>
      <h2 className="font-display text-[2rem] font-semibold text-volcanic mb-8">
        Book in Advance
      </h2>

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
