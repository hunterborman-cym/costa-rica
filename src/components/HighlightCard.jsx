export default function HighlightCard({ title, subtitle, gradient, image }) {
  return (
    <div
      className="relative rounded-[10px] overflow-hidden h-36 md:h-40 flex items-end p-3.5 group"
      style={{
        background: image ? undefined : gradient,
      }}
    >
      {image && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </>
      )}
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
