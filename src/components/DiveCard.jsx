import { Anchor, Fish, Waves as WavesIcon, AlertTriangle, Users } from 'lucide-react'

export default function DiveCard({ dive }) {
  return (
    <div className="bg-gradient-to-br from-[#0d2a3d] to-[#153d4f] rounded-[12px] p-4 text-white my-3">
      <div className="flex items-center gap-2 mb-3">
        <Anchor size={16} className="text-celeste" />
        <span className="font-display text-lg font-semibold">{dive.site}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <DiveStat icon={WavesIcon} label="Tanks" value={dive.tanks} />
        <DiveStat icon={Fish} label="Wildlife" value={dive.wildlife} />
        <DiveStat icon={AlertTriangle} label="Level" value={dive.level} />
        <DiveStat icon={Users} label="Operator" value={dive.operator} />
      </div>

      {dive.species && dive.species.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {dive.species.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 bg-white/10 rounded-full text-[0.6rem] font-mono text-celeste/80"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function DiveStat({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="flex items-center gap-1 font-mono text-[0.45rem] tracking-wider uppercase text-white/40">
        <Icon size={9} />
        {label}
      </span>
      <span className="text-[0.72rem] text-white/90 font-medium leading-tight">
        {value}
      </span>
    </div>
  )
}
