import { motion } from 'framer-motion'
import { Clock, MapPin, Eye, DollarSign, Car } from 'lucide-react'
import { useCountdown } from '../hooks/useCountdown'

const chips = [
  { icon: Clock, label: '12 days' },
  { icon: MapPin, label: 'Guanacaste' },
  { icon: Eye, label: 'Bull sharks' },
  { icon: DollarSign, label: '~$4,000' },
  { icon: Car, label: 'Suzuki Jimny' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Hero() {
  const countdown = useCountdown('2026-05-14T06:00:00-07:00')
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 pb-16 pt-12 md:px-10 md:pb-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1682965742594-2295b987d852?w=1920&q=80')` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/80 via-[#142a1c]/70 via-[#1f3d2a]/75 to-[#2a5538]/85" />

      {/* Radial accents */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 75% 15%, rgba(77,184,201,0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 15% 85%, rgba(217,106,79,0.08) 0%, transparent 45%)',
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-celeste/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[800px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[0.68rem] tracking-[0.25em] uppercase text-celeste mb-6"
        >
          May 14 – 25, 2026
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.9] text-white mb-8"
        >
          Costa<br />
          <em className="italic text-celeste">Rica</em>
        </motion.h1>

        {/* Chips */}
        <motion.div variants={fadeUp} className="flex gap-2.5 flex-wrap mb-8">
          {chips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.07] border border-white/10 rounded-full text-[0.78rem] text-white/75 backdrop-blur-sm"
            >
              <Icon size={14} className="opacity-50 flex-shrink-0" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Countdown */}
        {!countdown.expired && (
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-4 px-5 py-3 bg-black/30 border border-white/10 rounded-full backdrop-blur-md"
          >
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/40">
              Departure in
            </span>
            <div className="flex items-center gap-1">
              <CountdownUnit value={countdown.days} label="d" />
              <span className="text-white/30 font-mono text-xs">:</span>
              <CountdownUnit value={countdown.hours} label="h" />
              <span className="text-white/30 font-mono text-xs">:</span>
              <CountdownUnit value={countdown.minutes} label="m" />
              <span className="text-white/30 font-mono text-xs">:</span>
              <CountdownUnit value={countdown.seconds} label="s" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

function CountdownUnit({ value, label }) {
  return (
    <span className="font-mono text-sm text-white/90 tabular-nums">
      {pad(value)}
      <span className="text-[0.55rem] text-white/40 ml-0.5">{label}</span>
    </span>
  )
}
