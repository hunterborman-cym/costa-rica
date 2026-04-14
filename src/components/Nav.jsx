import { useScrollSpy } from '../hooks/useScrollSpy'

const sections = [
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'budget', label: 'Budget' },
  { id: 'flights', label: 'Flights' },
  { id: 'booking', label: 'Booking' },
]

export default function Nav() {
  const activeId = useScrollSpy(sections.map((s) => s.id))

  function handleClick(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="sticky top-0 z-[100] bg-sand/[0.88] backdrop-blur-[24px] border-b border-border">
      <div className="nav-scroll overflow-x-auto">
        <div className="flex gap-0 max-w-[920px] mx-auto px-6 md:px-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`
                font-mono text-[0.62rem] tracking-[0.1em] uppercase py-3.5 px-4 md:px-5
                whitespace-nowrap border-b-2 transition-all duration-200 cursor-pointer
                ${activeId === id
                  ? 'text-volcanic border-coral'
                  : 'text-smoke border-transparent hover:text-volcanic'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
