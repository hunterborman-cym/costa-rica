export default function MapEmbed({ origin, destination, waypoints, mode = 'driving', label }) {
  // Build Google Maps embed URL for directions
  let src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=${mode}`

  if (waypoints && waypoints.length > 0) {
    src += `&waypoints=${waypoints.map(w => encodeURIComponent(w)).join('|')}`
  }

  return (
    <div className="my-3 rounded-[10px] overflow-hidden border border-border-light shadow-sm">
      {label && (
        <div className="bg-volcanic px-3 py-2 flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4db8c9" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span className="font-mono text-[0.52rem] tracking-[0.1em] uppercase text-white/70">{label}</span>
        </div>
      )}
      <iframe
        src={src}
        width="100%"
        height="220"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={label || 'Route map'}
      />
    </div>
  )
}
