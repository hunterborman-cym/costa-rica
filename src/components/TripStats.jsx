import { Calendar, MapPin, Anchor, Mountain, Hotel, Car, DollarSign, Plane } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '12', label: 'Days', color: 'text-celeste' },
  { icon: MapPin, value: '10', label: 'Locations', color: 'text-coral' },
  { icon: Anchor, value: '5', label: 'Dive Tanks', color: 'text-celeste' },
  { icon: Mountain, value: '3', label: 'Volcanoes', color: 'text-coral' },
  { icon: Hotel, value: '5', label: 'Hotels', color: 'text-jungle-mid' },
  { icon: Car, value: '500+', label: 'Km Driven', color: 'text-gold' },
  { icon: DollarSign, value: '~$4k', label: 'Total Cost', color: 'text-smoke' },
  { icon: Plane, value: '3', label: 'Flights', color: 'text-smoke' },
]

export default function TripStats() {
  return (
    <div className="px-6 md:px-8 max-w-[920px] mx-auto py-6">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center py-3 bg-white rounded-[10px] border border-border-light shadow-sm"
          >
            <stat.icon size={16} className={`${stat.color} mb-1.5`} />
            <span className="font-display text-lg font-bold text-volcanic leading-none">{stat.value}</span>
            <span className="font-mono text-[0.45rem] tracking-wider uppercase text-smoke-light mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
