import { motion } from 'framer-motion'
import { days } from '../data/days'

const typeColors = {
  travel: 'bg-smoke',
  dive: 'bg-celeste',
  adventure: 'bg-coral',
  nature: 'bg-jungle-mid',
  flex: 'bg-gold',
  relax: 'bg-[#8a5c3a]',
  cave: 'bg-[#44445a]',
}

const typeBorderColors = {
  travel: 'border-smoke/30',
  dive: 'border-celeste/30',
  adventure: 'border-coral/30',
  nature: 'border-jungle-mid/30',
  flex: 'border-gold/30',
  relax: 'border-[#8a5c3a]/30',
  cave: 'border-[#44445a]/30',
}

export default function TimelineStrip({ onDayClick }) {
  return (
    <div className="py-4 px-6 md:px-8 max-w-[920px] mx-auto">
      <div className="timeline-scroll overflow-x-auto">
        <motion.div
          className="flex gap-2 min-w-max"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } } }}
        >
          {days.map((day) => (
            <motion.button
              key={day.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              onClick={() => onDayClick?.(day.id)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg border
                ${typeBorderColors[day.type]} bg-white hover:shadow-md
                transition-shadow duration-200 cursor-pointer flex-shrink-0
              `}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${typeColors[day.type]} flex-shrink-0`} />
              <div className="text-left">
                <div className="font-mono text-[0.5rem] tracking-wider uppercase text-smoke-light leading-none">
                  Day {day.num}
                </div>
                <div className="font-body text-[0.7rem] font-medium text-volcanic leading-tight mt-0.5 whitespace-nowrap max-w-[100px] overflow-hidden text-ellipsis">
                  {day.title.length > 16 ? day.title.slice(0, 16) + '...' : day.title}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
