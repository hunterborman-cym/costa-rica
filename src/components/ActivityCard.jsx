import { Clock, Gauge, DollarSign, Anchor, Mountain, Bird, Waves, Gem, Bed, TreePalm } from 'lucide-react'

const typeIcons = {
  dive: Anchor,
  hike: Mountain,
  wildlife: Bird,
  relax: Waves,
  cave: Gem,
  hotel: Bed,
  nature: TreePalm,
}

export default function ActivityCard({ activity }) {
  const Icon = typeIcons[activity.type] || Mountain

  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-2.5 bg-white border border-border-light rounded-lg shadow-sm">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activity.bgColor || 'bg-celeste/10'}`}>
        <Icon size={15} className={activity.iconColor || 'text-celeste'} />
      </div>
      <div className="min-w-0">
        <p className="font-body text-[0.75rem] font-medium text-volcanic leading-tight">
          {activity.name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          {activity.duration && (
            <span className="flex items-center gap-0.5 font-mono text-[0.5rem] text-smoke-light">
              <Clock size={8} /> {activity.duration}
            </span>
          )}
          {activity.difficulty && (
            <span className="flex items-center gap-0.5 font-mono text-[0.5rem] text-smoke-light">
              <Gauge size={8} /> {activity.difficulty}
            </span>
          )}
          {activity.cost && (
            <span className="flex items-center gap-0.5 font-mono text-[0.5rem] text-smoke-light">
              <DollarSign size={8} /> {activity.cost}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
