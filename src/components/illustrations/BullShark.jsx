import { motion } from 'framer-motion'

export default function BullShark({ animate = false, className = '' }) {
  return (
    <svg viewBox="0 0 240 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <motion.path
        d="M30 50 C40 35, 70 22, 110 25 C140 27, 170 30, 195 38 C205 40, 210 44, 210 48 C210 52, 205 56, 195 58 C170 66, 140 69, 110 71 C70 74, 40 62, 30 50Z"
        stroke="#4db8c9"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      {/* Dorsal fin */}
      <motion.path
        d="M120 27 L115 8 C113 5, 108 6, 108 10 L105 25"
        stroke="#4db8c9"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      {/* Tail */}
      <motion.path
        d="M30 50 L12 30 C10 27, 8 28, 10 32 L20 45 M30 50 L12 68 C10 72, 8 70, 10 66 L20 55"
        stroke="#4db8c9"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
      {/* Pectoral fin */}
      <motion.path
        d="M135 60 L150 78 C152 82, 148 83, 145 80 L130 68"
        stroke="#4db8c9"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
      {/* Eye */}
      <motion.circle
        cx="190" cy="45" r="2.5"
        fill="none"
        stroke="#4db8c9"
        strokeWidth="1.2"
        initial={animate ? { opacity: 0 } : { opacity: 0.7 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
      />
      <motion.circle
        cx="190" cy="45" r="1"
        fill="#4db8c9"
        initial={animate ? { opacity: 0 } : { opacity: 0.5 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.1 }}
      />
      {/* Gill slits */}
      <motion.path
        d="M175 40 L175 52 M170 39 L170 53 M165 38 L165 54"
        stroke="#4db8c9"
        strokeWidth="0.7"
        opacity="0.35"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      />
      {/* Depth markers on left */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 0.25 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 2.2 }}
      >
        <line x1="0" y1="15" x2="8" y2="15" stroke="#4db8c9" strokeWidth="0.5" />
        <text x="2" y="13" fill="#4db8c9" style={{ fontSize: '5px', fontFamily: 'monospace' }}>10m</text>
        <line x1="0" y1="40" x2="8" y2="40" stroke="#4db8c9" strokeWidth="0.5" />
        <text x="2" y="38" fill="#4db8c9" style={{ fontSize: '5px', fontFamily: 'monospace' }}>20m</text>
        <line x1="0" y1="65" x2="8" y2="65" stroke="#4db8c9" strokeWidth="0.5" />
        <text x="2" y="63" fill="#4db8c9" style={{ fontSize: '5px', fontFamily: 'monospace' }}>30m</text>
      </motion.g>
    </svg>
  )
}
