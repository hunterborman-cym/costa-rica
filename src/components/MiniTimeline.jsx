export default function MiniTimeline({ events }) {
  return (
    <div className="relative ml-3 pl-5 border-l-2 border-border-light space-y-4 my-3">
      {events.map((event, i) => (
        <div key={i} className="relative">
          {/* Dot on the timeline */}
          <div className={`absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full border-2 ${
            event.highlight ? 'bg-coral border-coral' : 'bg-white border-celeste'
          }`} />

          <div>
            {event.time && (
              <p className="font-mono text-[0.52rem] tracking-wider uppercase text-smoke-light mb-0.5">
                {event.time}
              </p>
            )}
            <p className="font-body text-[0.82rem] font-medium text-volcanic leading-snug">
              {event.title}
            </p>
            {event.description && (
              <p className="text-[0.78rem] text-[#5a5a6a] leading-relaxed mt-0.5">
                {event.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
