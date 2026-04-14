export default function HighlightCard({ title, subtitle, gradient, image }) {
  return (
    <div
      className="relative rounded-[10px] overflow-hidden h-36 md:h-40 flex items-end p-3.5 group"
      style={{
        background: image
          ? `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%), url(${image}) center/cover`
          : gradient,
      }}
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
