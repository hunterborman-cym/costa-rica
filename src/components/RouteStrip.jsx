import { MapPin, Car } from 'lucide-react'

export default function RouteStrip({ stops }) {
  return (
    <div className="flex items-center gap-0 overflow-x-auto py-3 mb-4 bg-sand/60 rounded-[10px] border border-border-light px-4">
      {stops.map((stop, i) => (
        <div key={i} className="flex items-center flex-shrink-0">
          {/* Stop */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full border-2 ${stop.isHotel ? 'bg-coral border-coral' : 'bg-celeste border-celeste'}`} />
            <span className="font-mono text-[0.5rem] tracking-wider uppercase text-smoke mt-1 text-center max-w-[80px] leading-tight">
              {stop.name}
            </span>
          </div>

          {/* Connector */}
          {i < stops.length - 1 && (
            <div className="flex items-center mx-2">
              <div className="w-8 h-px bg-border-light" />
              <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-white rounded-full border border-border-light mx-1">
                <Car size={9} className="text-smoke-light" />
                <span className="font-mono text-[0.45rem] text-smoke-light whitespace-nowrap">
                  {stop.driveToNext}
                </span>
              </div>
              <div className="w-8 h-px bg-border-light" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
