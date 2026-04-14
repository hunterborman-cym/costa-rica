import { MapPin, ExternalLink } from 'lucide-react'

export default function MapLink({ origin, destination, waypoints, label }) {
  let url = `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${encodeURIComponent(destination)}`
  if (waypoints && waypoints.length > 0) {
    url = `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${waypoints.map(w => encodeURIComponent(w)).join('/')}/${encodeURIComponent(destination)}`
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-4 py-2.5 my-2 bg-volcanic/5 hover:bg-volcanic/10 border border-border-light rounded-lg transition-colors duration-200 group"
    >
      <MapPin size={14} className="text-coral flex-shrink-0" />
      <span className="text-[0.78rem] text-volcanic font-medium flex-1">{label}</span>
      <ExternalLink size={12} className="text-smoke-light group-hover:text-coral transition-colors" />
    </a>
  )
}
