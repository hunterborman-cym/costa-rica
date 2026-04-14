import { Car, Calendar, MapPin, Fuel } from 'lucide-react'

export default function JimnyCard() {
  return (
    <div className="bg-white border border-border-light rounded-card overflow-hidden shadow-sm">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div
          className="sm:w-48 h-32 sm:h-auto bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1675228205797-12a79151cd32?w=400&q=80')` }}
        />
        {/* Info */}
        <div className="p-4 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Car size={16} className="text-coral" />
            <span className="font-display text-lg font-semibold text-volcanic">Suzuki Jimny</span>
          </div>
          <p className="text-[0.8rem] text-smoke mb-3">Your ride for 10 days across Guanacaste. Compact 4x4, perfect for dirt roads and tight mountain switchbacks.</p>
          <div className="flex flex-wrap gap-3">
            <InfoPill icon={Calendar} text="May 15–24" />
            <InfoPill icon={MapPin} text="Pickup: LIR Airport" />
            <InfoPill icon={Fuel} text="4WD · Manual" />
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoPill({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sand rounded-full text-[0.65rem] font-mono text-smoke">
      <Icon size={10} />
      {text}
    </span>
  )
}
