import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Anchor, Mountain, Plane, Bird, Sparkles, Waves, Gem, Bed } from 'lucide-react'
import DriveBanner from './DriveBanner'
import Callout from './Callout'
import OptionsGrid from './OptionsGrid'
import RouteStrip from './RouteStrip'
import ActivityCard from './ActivityCard'
import MiniTimeline from './MiniTimeline'
import DiveCard from './DiveCard'
import HighlightCard from './HighlightCard'
import MapLink from './MapLink'
import PullQuote from './PullQuote'

const categoryIcons = {
  dive: Anchor, adventure: Mountain, travel: Plane,
  nature: Bird, flex: Sparkles, relax: Waves, cave: Gem,
}

const badgeClass = {
  dive: 'badge-dive', adventure: 'badge-adventure', travel: 'badge-travel',
  nature: 'badge-nature', flex: 'badge-flex', relax: 'badge-relax', cave: 'badge-cave',
}

const tagStyles = {
  Dive: 'bg-celeste/[0.12] text-[#2d8fa0]',
  Hike: 'bg-jungle-mid/[0.08] text-[#2d6840]',
  Wildlife: 'bg-gold/10 text-[#8a7230]',
  Birding: 'bg-gold/10 text-[#8a7230]',
  Travel: 'bg-smoke/[0.08] text-smoke',
  Relax: 'bg-[#b8804e]/10 text-[#8a6030]',
  Flex: 'bg-gold/10 text-[#8a7230]',
  Cave: 'bg-[#2a2a3e]/[0.08] text-[#44445a]',
}

// Get the first highlight image from body blocks for the hero banner
function getHeroImage(body) {
  for (const block of body) {
    if (block.type === 'highlights' && block.items?.[0]?.image) return block.items[0].image
    if (block.type === 'dive' && block.data?.image) return block.data.image
  }
  return null
}

export default function DayCard({ day, isOpen, onToggle }) {
  const Icon = categoryIcons[day.type] || Plane
  const cardRef = useRef(null)
  const heroImage = getHeroImage(day.body)

  return (
    <div
      ref={cardRef}
      id={`day-${day.id}`}
      className={`
        mb-3 bg-white border rounded-card overflow-hidden transition-[box-shadow,border-color] duration-300
        ${isOpen ? 'shadow-lg border-border' : 'shadow-sm border-border-light hover:shadow-md'}
      `}
    >
      {/* Category color strip */}
      <div className={`h-[3px] w-full ${badgeClass[day.type]}`} />

      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full grid grid-cols-[auto_1fr_auto_auto] sm:grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-5 py-4 cursor-pointer select-none hover:bg-black/[0.01] transition-colors"
      >
        <div className={`relative w-[50px] h-[50px] flex flex-col items-center justify-center rounded-badge overflow-hidden ${badgeClass[day.type]}`}>
          <span className="font-display text-xl font-bold text-white leading-none relative z-10">{day.num}</span>
          <Icon size={11} className="text-white/50 mt-0.5 relative z-10" />
        </div>

        <div className="min-w-0 text-left">
          <p className="font-mono text-[0.58rem] tracking-[0.08em] uppercase text-smoke-light">{day.date}</p>
          <h3 className="font-display text-[1.1rem] font-semibold text-volcanic leading-tight truncate">{day.title}</h3>
          {!isOpen && day.preview && (
            <p className="text-[0.72rem] text-smoke mt-0.5 truncate">{day.preview}</p>
          )}
        </div>

        <div className="hidden sm:flex gap-1.5 flex-shrink-0 flex-wrap justify-end">
          {day.tags.map((tag) => (
            <span key={tag} className={`font-mono text-[0.52rem] tracking-[0.06em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap font-medium ${tagStyles[tag] || 'bg-smoke/10 text-smoke'}`}>
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-volcanic' : 'bg-sand'}`}
        >
          <ChevronDown size={12} className={isOpen ? 'text-white' : 'text-volcanic'} />
        </motion.div>
      </button>

      {/* Body */}
      <div
        className="grid transition-[grid-template-rows] duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          {/* Hero image banner */}
          {heroImage && (
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img src={heroImage} alt={day.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {day.hotel && (
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-sm rounded-full">
                  <Bed size={10} className="text-white/80" />
                  <span className="font-mono text-[0.5rem] tracking-wider uppercase text-white/80">{day.hotel}</span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="px-5 pb-5 pt-4">
            {/* Drive + Route in a compact bar */}
            {day.drive && <DriveBanner route={day.drive.route} time={day.drive.time} />}

            {/* Two-column layout for richer days */}
            <div className="flex flex-col md:flex-row gap-5">
              {/* Main content column */}
              <div className="flex-1 min-w-0">
                {day.body.map((block, i) => {
                  if (block.type === 'p') {
                    return <p key={i} className="text-[0.88rem] leading-[1.75] text-[#4a4a5a] mb-2.5 last:mb-0">{block.text}</p>
                  }
                  if (block.type === 'quote') {
                    return <PullQuote key={i} text={block.text} />
                  }
                  if (block.type === 'warning' || block.type === 'backup') {
                    return <Callout key={i} type={block.type} text={block.text} />
                  }
                  if (block.type === 'options') {
                    return <OptionsGrid key={i} items={block.items} />
                  }
                  if (block.type === 'timeline') {
                    return <MiniTimeline key={i} events={block.events} />
                  }
                  if (block.type === 'dive') {
                    return <DiveCard key={i} dive={block.data} />
                  }
                  if (block.type === 'map') {
                    return <MapLink key={i} origin={block.origin} destination={block.destination} waypoints={block.waypoints} label={block.label} />
                  }
                  return null
                })}
              </div>

              {/* Sidebar — activities + route strip (only if they exist) */}
              {day.body.some(b => b.type === 'activities' || b.type === 'route') && (
                <div className="md:w-[240px] flex-shrink-0 space-y-3">
                  {day.body.map((block, i) => {
                    if (block.type === 'route') {
                      return <RouteStrip key={`side-${i}`} stops={block.stops} />
                    }
                    if (block.type === 'activities') {
                      return (
                        <div key={`side-${i}`} className="space-y-2">
                          {block.items.map((act, j) => (
                            <ActivityCard key={j} activity={act} />
                          ))}
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              )}
            </div>

            {/* Highlight photos — full width, bigger */}
            {day.body.filter(b => b.type === 'highlights').map((block, i) => (
              <div key={`hl-${i}`} className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                {block.items.map((h, j) => (
                  <HighlightCard key={j} {...h} />
                ))}
              </div>
            ))}

            {/* Hotel badge (only if no hero image showed it) */}
            {!heroImage && day.hotel && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-jungle/5 border border-jungle/10 rounded-full mt-3">
                <Bed size={12} className="text-jungle-mid" />
                <span className="font-mono text-[0.56rem] tracking-wider uppercase text-jungle-mid">
                  Sleeping at {day.hotel}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
