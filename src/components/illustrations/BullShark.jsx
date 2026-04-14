import { motion } from 'framer-motion'

export default function BullShark({ animate = false, className = '' }) {
  const d = animate ? 0 : 1
  const drawProps = (delay = 0, dur = 2) => ({
    initial: { pathLength: d === 1 ? 1 : 0, opacity: d === 1 ? 1 : 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: dur, delay, ease: 'easeInOut' },
  })

  return (
    <svg viewBox="0 0 320 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Upper body — blunt snout sweeping back to tail */}
      <motion.path
        d="M270 58 Q272 52 268 48 Q260 42 245 38 Q225 33 200 30 Q170 27 145 28 Q120 29 100 33 Q80 37 65 44 Q55 49 48 55"
        stroke="#4db8c9" strokeWidth="1.6" strokeLinecap="round" fill="none"
        {...drawProps(0, 2)}
      />
      {/* Lower body — belly curves down more (heavier build) */}
      <motion.path
        d="M270 62 Q272 68 268 72 Q260 78 245 82 Q225 87 200 90 Q170 93 145 92 Q120 91 100 87 Q80 82 65 76 Q55 71 48 65"
        stroke="#4db8c9" strokeWidth="1.6" strokeLinecap="round" fill="none"
        {...drawProps(0.1, 2)}
      />
      {/* Snout — blunt, rounded nose */}
      <motion.path
        d="M270 58 Q276 60 276 62 Q276 62 270 62"
        stroke="#4db8c9" strokeWidth="1.6" strokeLinecap="round" fill="none"
        {...drawProps(1.5, 0.5)}
      />
      {/* Dorsal fin — tall, iconic, slightly swept back */}
      <motion.path
        d="M168 28 L158 4 Q155 -1 152 4 L145 28"
        stroke="#4db8c9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        {...drawProps(1.3, 0.8)}
      />
      {/* Second dorsal (smaller) */}
      <motion.path
        d="M98 35 L94 22 Q93 19 91 22 L88 34"
        stroke="#4db8c9" strokeWidth="1" strokeLinecap="round" fill="none"
        {...drawProps(1.8, 0.5)}
      />
      {/* Caudal fin (tail) — upper lobe longer than lower, classic shark asymmetry */}
      <motion.path
        d="M48 55 L22 26 Q18 21 20 27 L35 50"
        stroke="#4db8c9" strokeWidth="1.5" strokeLinecap="round" fill="none"
        {...drawProps(1.6, 0.8)}
      />
      <motion.path
        d="M48 65 L28 88 Q25 93 28 89 L40 72"
        stroke="#4db8c9" strokeWidth="1.5" strokeLinecap="round" fill="none"
        {...drawProps(1.7, 0.7)}
      />
      {/* Pectoral fins — large, swept, aggressive */}
      <motion.path
        d="M215 80 L230 106 Q232 111 228 108 L210 88"
        stroke="#4db8c9" strokeWidth="1.3" strokeLinecap="round" fill="none"
        {...drawProps(1.5, 0.7)}
      />
      {/* Pelvic fin */}
      <motion.path
        d="M140 90 L145 104 Q146 107 142 104 L136 92"
        stroke="#4db8c9" strokeWidth="1" strokeLinecap="round" fill="none"
        {...drawProps(1.9, 0.4)}
      />
      {/* Anal fin */}
      <motion.path
        d="M108 88 L106 98 Q105 101 103 98 L102 87"
        stroke="#4db8c9" strokeWidth="0.9" strokeLinecap="round" fill="none"
        {...drawProps(2, 0.4)}
      />
      {/* Eye */}
      <motion.circle cx="258" cy="54" r="3.5" stroke="#4db8c9" strokeWidth="1.3" fill="none"
        initial={{ opacity: d === 1 ? 0.8 : 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.2 }}
      />
      <motion.circle cx="258" cy="54" r="1.5" fill="#4db8c9"
        initial={{ opacity: d === 1 ? 0.5 : 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2.3 }}
      />
      {/* Mouth line */}
      <motion.path
        d="M268 64 Q258 67 250 66"
        stroke="#4db8c9" strokeWidth="0.8" opacity={0.4} fill="none"
        {...drawProps(2.1, 0.3)}
      />
      {/* 5 gill slits */}
      <motion.g
        initial={{ opacity: d === 1 ? 0.3 : 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 2 }}
      >
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i} x1={240 - i * 6} y1={48 + i * 0.5} x2={239 - i * 6} y2={68 - i * 0.5}
            stroke="#4db8c9" strokeWidth="0.7" />
        ))}
      </motion.g>
      {/* Lateral line */}
      <motion.path
        d="M260 59 Q220 56 180 58 Q140 60 100 62 Q75 64 55 62"
        stroke="#4db8c9" strokeWidth="0.4" opacity={0.15} fill="none"
        {...drawProps(2.2, 0.6)}
      />
      {/* Depth gauge on left */}
      <motion.g initial={{ opacity: d === 1 ? 0.18 : 0 }} animate={{ opacity: 0.18 }} transition={{ delay: 2.5 }}>
        <line x1="6" y1="5" x2="6" y2="130" stroke="#4db8c9" strokeWidth="0.4" strokeDasharray="2 4" />
        {[['5m', 10], ['10m', 30], ['15m', 55], ['20m', 80], ['25m', 105]].map(([label, y]) => (
          <g key={label}>
            <line x1="3" y1={y} x2="12" y2={y} stroke="#4db8c9" strokeWidth="0.4" />
            <text x="14" y={y + 2} fill="#4db8c9" style={{ fontSize: '5.5px', fontFamily: "'JetBrains Mono', monospace" }}>{label}</text>
          </g>
        ))}
      </motion.g>
      {/* Bubbles */}
      <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="150" cy="16" r="1.5" stroke="#4db8c9" strokeWidth="0.3" opacity="0.12" fill="none" />
        <circle cx="180" cy="10" r="1" stroke="#4db8c9" strokeWidth="0.3" opacity="0.08" fill="none" />
        <circle cx="130" cy="8" r="0.7" stroke="#4db8c9" strokeWidth="0.25" opacity="0.06" fill="none" />
      </motion.g>
    </svg>
  )
}
