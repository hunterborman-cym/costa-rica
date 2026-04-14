import { AlertTriangle, Clock } from 'lucide-react'

export default function Callout({ type, text }) {
  if (type === 'warning') {
    return (
      <div className="flex items-start gap-2.5 px-3.5 py-3 bg-coral/[0.08] rounded-lg mt-3 text-[0.82rem] text-[#8a4530] leading-relaxed">
        <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
        {text}
      </div>
    )
  }

  if (type === 'backup') {
    return (
      <div className="flex items-start gap-2 px-3 py-2.5 bg-gold/10 rounded-lg mt-3 text-[0.8rem] text-[#6a5a20] leading-relaxed">
        <Clock size={14} className="flex-shrink-0 mt-0.5" />
        {text}
      </div>
    )
  }

  return null
}
