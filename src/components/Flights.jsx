import { Plane } from 'lucide-react'
import { flights } from '../data/flights'

export default function Flights() {
  return (
    <div id="flights" className="pt-16 pb-6 px-6 md:px-8 max-w-[920px] mx-auto">
      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-celeste mb-1">
        Logistics
      </p>
      <h2 className="font-display text-[2rem] font-semibold text-volcanic mb-2">
        Flights
      </h2>
      <p className="text-[0.82rem] text-smoke mb-8">Total: $720 for 2 passengers, round trip</p>

      <div className="flex flex-col gap-4">
        {flights.map((f) => (
          <div
            key={f.id}
            className="relative bg-white rounded-card shadow-sm border border-border-light"
          >
            <div className="flex items-stretch">
              {/* Left: flight info */}
              <div className="flex-1 p-5 md:p-6">
                {/* Airline + date row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 ${f.code === 'UA' ? 'bg-[#0032A0]' : 'bg-[#01426A]'}`}>
                    {f.code === 'UA' ? (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-11l5 3-5 3V9z" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" /></svg>
                    )}
                  </div>
                  <div>
                    <p className="font-body text-[0.78rem] font-medium text-volcanic">{f.airline} {f.number}</p>
                    <p className="font-mono text-[0.5rem] tracking-wider uppercase text-smoke-light">{f.date}</p>
                  </div>
                </div>

                {/* Route */}
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <p className="font-display text-2xl md:text-3xl font-bold text-volcanic leading-none">{f.from}</p>
                    <p className="text-[0.68rem] text-smoke mt-1">{f.fromCity}</p>
                  </div>

                  <div className="flex-1 flex items-center justify-center gap-2 px-2">
                    <div className="flex-1 h-px bg-border relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-border" />
                    </div>
                    <div className="flex flex-col items-center">
                      <Plane size={16} className="text-coral" />
                      {f.via && (
                        <span className="font-mono text-[0.45rem] text-smoke-light mt-0.5 whitespace-nowrap">{f.via}</span>
                      )}
                    </div>
                    <div className="flex-1 h-px bg-border relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-border border-y-[3px] border-y-transparent" />
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-display text-2xl md:text-3xl font-bold text-volcanic leading-none">{f.to}</p>
                    <p className="text-[0.68rem] text-smoke mt-1">{f.toCity}</p>
                  </div>
                </div>
              </div>

              {/* Right: cost */}
              <div className="w-24 md:w-28 flex flex-col items-center justify-center border-l border-dashed border-border-light bg-sand/40 px-3">
                <p className="font-display text-xl font-bold text-volcanic">{f.cost}</p>
                <p className="font-mono text-[0.48rem] text-smoke-light text-center mt-0.5">{f.costNote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
