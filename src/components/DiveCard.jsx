import { Anchor, Fish, Waves as WavesIcon, AlertTriangle, Users, DollarSign } from 'lucide-react'

export default function DiveCard({ dive }) {
  return (
    <div className="relative rounded-[12px] overflow-hidden my-3">
      {/* Background image */}
      {dive.image && (
        <>
          <img src={dive.image} alt={dive.site} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a3d]/95 via-[#0d2a3d]/85 to-[#153d4f]/70" />
        </>
      )}
      {!dive.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a3d] to-[#153d4f]" />
      )}

      <div className="relative z-10 p-5 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Anchor size={16} className="text-celeste" />
          <span className="font-display text-lg font-semibold">{dive.site}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <DiveStat icon={WavesIcon} label="Tanks" value={dive.tanks} />
          <DiveStat icon={Fish} label="Wildlife" value={dive.wildlife} />
          <DiveStat icon={AlertTriangle} label="Level" value={dive.level} />
          <DiveStat icon={Users} label="Operator" value={dive.operator} />
          {dive.cost && <DiveStat icon={DollarSign} label="Cost" value={dive.cost} />}
        </div>

        {dive.species && dive.species.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {dive.species.map((s) => (
              <span key={s} className="px-2.5 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[0.6rem] font-mono text-celeste/90 border border-white/5">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
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
      <span className="text-[0.75rem] text-white/90 font-medium leading-tight">
        {value}
      </span>
    </div>
  )
}
