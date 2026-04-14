import { Car } from 'lucide-react'

export default function DriveBanner({ route, time }) {
  return (
    <div className="flex items-center gap-3 px-3.5 py-3 bg-sand rounded-[10px] border border-border-light mb-4">
      <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg flex-shrink-0">
        <Car size={16} className="text-smoke" />
      </div>
      <p className="text-[0.82rem] text-smoke leading-snug">
        <strong className="font-semibold text-volcanic">{route}</strong>
        <span className="mx-1.5">&middot;</span>
        {time}
      </p>
    </div>
  )
}
