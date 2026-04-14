import { motion } from 'framer-motion'

export default function BullShark({ animate = false, className = '' }) {
  const draw = animate
    ? { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } }
    : { initial: { pathLength: 1, opacity: 1 }, animate: { pathLength: 1, opacity: 1 } }

  return (
    <svg viewBox="0 0 300 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main body — blunt snout, heavy torso, tapered to tail */}
      <motion.path
        d="M260 52 C258 48, 254 44, 248 42 C235 38, 210 34, 180 33 C150 32, 120 34, 95 38 C75 42, 58 48, 50 55 C46 59, 44 63, 50 67 C58 72, 75 76, 95 80 C120 84, 150 86, 180 85 C210 84, 235 80, 248 76 C254 74, 258 70, 260 66 C262 62, 262 56, 260 52Z"
        stroke="#4db8c9"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
        {...draw}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
      {/* Dorsal fin — tall, triangular, classic shark */}
      <motion.path
        d="M175 33 L168 6 C167 3, 163 2, 161 5 L150 33"
        stroke="#4db8c9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...draw}
        transition={{ duration: 0.9, delay: 1.4 }}
      />
      {/* Second smaller dorsal fin */}
      <motion.path
        d="M110 38 L107 26 C106 24, 104 24, 103 26 L100 37"
        stroke="#4db8c9"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        {...draw}
        transition={{ duration: 0.5, delay: 1.8 }}
      />
      {/* Tail — asymmetric caudal fin (upper lobe longer, classic shark) */}
      <motion.path
        d="M55 55 L28 28 C25 25, 22 26, 24 30 L38 48 M55 63 L30 82 C27 86, 25 84, 27 80 L42 68"
        stroke="#4db8c9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...draw}
        transition={{ duration: 1, delay: 1.6 }}
      />
      {/* Pectoral fins — swept back, large */}
      <motion.path
        d="M205 68 L218 92 C220 96, 216 98, 214 95 L198 78"
        stroke="#4db8c9"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        {...draw}
        transition={{ duration: 0.7, delay: 1.5 }}
      />
      <motion.path
        d="M205 50 L218 28 C220 24, 216 22, 214 25 L198 40"
        stroke="#4db8c9"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity={0.4}
        {...draw}
        transition={{ duration: 0.7, delay: 1.5 }}
      />
      {/* Anal fin */}
      <motion.path
        d="M115 82 L112 94 C111 96, 108 96, 108 94 L106 83"
        stroke="#4db8c9"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        {...draw}
        transition={{ duration: 0.4, delay: 2 }}
      />
      {/* Eye — small, dark, menacing */}
      <motion.circle
        cx="250" cy="53" r="3"
        fill="none" stroke="#4db8c9" strokeWidth="1.5"
        initial={animate ? { opacity: 0 } : { opacity: 0.8 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2.2 }}
      />
      <motion.circle
        cx="250" cy="53" r="1.2"
        fill="#4db8c9"
        initial={animate ? { opacity: 0 } : { opacity: 0.6 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.3 }}
      />
      {/* Gill slits — 5 lines, distinctive shark feature */}
      <motion.path
        d="M232 46 L231 62 M227 44 L226 64 M222 43 L221 65 M217 43 L216 65 M212 44 L211 64"
        stroke="#4db8c9"
        strokeWidth="0.7"
        opacity={0.3}
        fill="none"
        {...draw}
        transition={{ duration: 0.6, delay: 2 }}
      />
      {/* Snout line — blunt nose detail */}
      <motion.path
        d="M258 50 C262 52, 264 56, 264 59 C264 62, 262 66, 258 68"
        stroke="#4db8c9"
        strokeWidth="1"
        opacity={0.4}
        fill="none"
        {...draw}
        transition={{ duration: 0.4, delay: 2.1 }}
      />
      {/* Depth markers */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 0.2 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5 }}
      >
        <line x1="5" y1="15" x2="16" y2="15" stroke="#4db8c9" strokeWidth="0.5" />
        <text x="4" y="12" fill="#4db8c9" style={{ fontSize: '6px', fontFamily: "'JetBrains Mono', monospace" }}>10m</text>
        <line x1="5" y1="50" x2="16" y2="50" stroke="#4db8c9" strokeWidth="0.5" />
        <text x="4" y="47" fill="#4db8c9" style={{ fontSize: '6px', fontFamily: "'JetBrains Mono', monospace" }}>20m</text>
        <line x1="5" y1="85" x2="16" y2="85" stroke="#4db8c9" strokeWidth="0.5" />
        <text x="4" y="82" fill="#4db8c9" style={{ fontSize: '6px', fontFamily: "'JetBrains Mono', monospace" }}>30m</text>
        {/* Vertical depth line */}
        <line x1="10" y1="10" x2="10" y2="110" stroke="#4db8c9" strokeWidth="0.3" strokeDasharray="2 3" />
      </motion.g>
      {/* Small bubbles rising */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="140" cy="20" r="1.5" stroke="#4db8c9" strokeWidth="0.4" opacity="0.15" fill="none" />
        <circle cx="155" cy="14" r="1" stroke="#4db8c9" strokeWidth="0.3" opacity="0.1" fill="none" />
        <circle cx="130" cy="10" r="0.8" stroke="#4db8c9" strokeWidth="0.3" opacity="0.08" fill="none" />
      </motion.g>
    </svg>
  )
}
