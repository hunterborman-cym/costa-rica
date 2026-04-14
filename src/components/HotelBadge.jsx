import { Bed } from 'lucide-react'

export default function HotelBadge({ name }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-jungle/5 border border-jungle/10 rounded-full mt-2">
      <Bed size={12} className="text-jungle-mid" />
      <span className="font-mono text-[0.56rem] tracking-wider uppercase text-jungle-mid">
        Sleeping at {name}
      </span>
    </div>
  )
}
