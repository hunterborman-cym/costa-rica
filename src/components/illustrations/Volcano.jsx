import { motion } from 'framer-motion'

export default function Volcano({ animate = false, className = '' }) {
  return (
    <svg viewBox="0 0 220 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mountain shape */}
      <motion.path
        d="M10 90 L60 30 L80 18 L90 22 L100 15 L110 22 L120 18 L140 30 L210 90"
        stroke="#d96a4f"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
      {/* Crater steam/smoke */}
      <motion.path
        d="M95 12 C93 5, 98 -2, 105 3 C108 -3, 115 0, 112 8"
        stroke="#7a7a88"
        strokeWidth="0.8"
        opacity="0.3"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
      {/* Mud pot bubbles */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.circle cx="65" cy="75" r="2" stroke="#8a5c3a" strokeWidth="0.7" opacity="0.4"
          animate={{ r: [2, 3, 2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle cx="72" cy="78" r="1.5" stroke="#8a5c3a" strokeWidth="0.7" opacity="0.3"
          animate={{ r: [1.5, 2.5, 1.5], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <text x="58" y="88" fill="#8a5c3a" opacity="0.3" style={{ fontSize: '4px', fontFamily: 'monospace' }}>mud pots</text>
      </motion.g>
      {/* Hot spring */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <ellipse cx="160" cy="82" rx="12" ry="4" stroke="#4db8c9" strokeWidth="0.8" opacity="0.4" />
        <motion.path d="M155 78 C156 74, 158 74, 158 78 M161 78 C162 74, 164 74, 164 78"
          stroke="#4db8c9" strokeWidth="0.5" opacity="0.3" fill="none"
          animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="150" y="92" fill="#4db8c9" opacity="0.3" style={{ fontSize: '4px', fontFamily: 'monospace' }}>hot spring</text>
      </motion.g>
      {/* Fumarole */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.path d="M110 48 C112 42, 115 40, 114 35"
          stroke="#7a7a88" strokeWidth="0.6" opacity="0.3" fill="none"
          animate={{ opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <text x="106" y="54" fill="#7a7a88" opacity="0.25" style={{ fontSize: '3.5px', fontFamily: 'monospace' }}>fumarole</text>
      </motion.g>
      {/* Ground line */}
      <motion.line x1="0" y1="90" x2="220" y2="90" stroke="#121a14" strokeWidth="0.5" opacity="0.15"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
  )
}
