import { Plane } from 'lucide-react'
import { flights } from '../data/flights'

export default function Flights() {
  return (
    <div id="flights" className="pt-16 pb-6 px-6 md:px-8 max-w-[920px] mx-auto">
      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
        Logistics
      </p>
      <h2 className="font-display text-[2rem] font-semibold text-volcanic mb-8">
        Flights
      </h2>

      <div className="flex flex-col gap-4">
        {flights.map((f, i) => (
          <div
            key={f.id}
            className="relative bg-white rounded-card shadow-sm border border-border-light"
          >
            <div className="flex items-stretch">
              {/* Left: flight info */}
              <div className="flex-1 p-5 flex items-center gap-5">
                {/* Airline badge */}
                <div className={`w-12 h-12 rounded-badge flex items-center justify-center flex-shrink-0 ${f.code === 'UA' ? 'bg-[#0032A0]' : 'bg-[#01426A]'}`}>
                  <span className="font-mono text-xs font-bold text-white">{f.code}</span>
                </div>

                {/* Route */}
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[0.56rem] tracking-wider uppercase text-smoke-light mb-1">
                    {f.airline} {f.number} &middot; {f.date}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-left">
                      <p className="font-display text-xl font-bold text-volcanic leading-none">{f.from}</p>
                      <p className="text-[0.65rem] text-smoke mt-0.5">{f.fromCity}</p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-8 h-px bg-border" />
                      <Plane size={14} className="text-coral -rotate-0" />
                      <div className="w-8 h-px bg-border" />
                    </div>
                    <div className="text-left">
                      <p className="font-display text-xl font-bold text-volcanic leading-none">{f.to}</p>
                      <p className="text-[0.65rem] text-smoke mt-0.5">{f.toCity}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: cost */}
              <div className="w-28 md:w-32 flex flex-col items-center justify-center border-l border-dashed border-border-light bg-sand/50 px-3">
                <p className="font-display text-lg font-bold text-volcanic">{f.cost}</p>
                <p className="font-mono text-[0.5rem] text-smoke-light text-center mt-0.5">{f.costNote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
