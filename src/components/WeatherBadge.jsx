import { CloudSun, Thermometer, Droplets } from 'lucide-react'

export default function WeatherBadge() {
  return (
    <div className="bg-white border border-border-light rounded-card p-4 shadow-sm mb-4">
      <div className="flex items-center gap-2 mb-2">
        <CloudSun size={16} className="text-gold" />
        <span className="font-mono text-[0.56rem] tracking-[0.12em] uppercase text-smoke font-medium">
          May Weather · Guanacaste
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1.5">
          <Thermometer size={13} className="text-coral" />
          <span className="text-[0.78rem] text-volcanic font-medium">30°C / 86°F</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Droplets size={13} className="text-celeste" />
          <span className="text-[0.78rem] text-volcanic font-medium">Green season begins</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CloudSun size={13} className="text-gold" />
          <span className="text-[0.78rem] text-smoke">Afternoon thunderstorms possible</span>
        </div>
      </div>
    </div>
  )
}
