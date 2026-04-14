export default function HighlightCard({ title, subtitle, gradient }) {
  return (
    <div
      className="relative rounded-[10px] overflow-hidden h-24 flex items-end p-3"
      style={{ background: gradient }}
    >
      <div className="relative z-10">
        <p className="font-display text-sm font-semibold text-white leading-tight">{title}</p>
        {subtitle && (
          <p className="font-mono text-[0.48rem] tracking-wider uppercase text-white/60 mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
