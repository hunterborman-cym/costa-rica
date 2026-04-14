import { motion } from 'framer-motion'

export default function TubeFloat({ animate = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* River path — winding canyon */}
      <motion.path
        d="M20 10 C40 10, 50 25, 45 40 C40 55, 55 65, 70 60 C85 55, 90 70, 85 85 C80 100, 100 110, 120 105 C140 100, 155 110, 180 115"
        stroke="#4db8c9"
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.08"
        fill="none"
      />
      {/* River banks */}
      <motion.path
        d="M10 8 C32 6, 42 18, 38 34 C34 48, 46 58, 62 54 C76 50, 82 62, 78 78 C74 92, 92 104, 112 100 C132 96, 148 106, 172 110"
        stroke="#2d5a3d"
        strokeWidth="0.8"
        opacity="0.3"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M30 14 C48 14, 58 30, 52 46 C46 62, 64 72, 78 66 C92 60, 98 76, 92 92 C86 108, 108 116, 128 110 C148 104, 162 114, 188 118"
        stroke="#2d5a3d"
        strokeWidth="0.8"
        opacity="0.3"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
      />
      {/* Tube (inner tube circle) */}
      <motion.g
        initial={animate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* Outer tube ring */}
        <circle cx="68" cy="60" r="12" stroke="#d96a4f" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="68" cy="60" r="7" stroke="#d96a4f" strokeWidth="0.6" fill="none" opacity="0.3" />
        {/* Person (stick figure, top-down view) */}
        <circle cx="68" cy="57" r="3" stroke="#121a14" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Arms draped over tube */}
        <path d="M62 54 L56 50 M74 54 L80 50" stroke="#121a14" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        {/* Legs in water */}
        <path d="M65 68 L62 76 M71 68 L74 76" stroke="#121a14" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      </motion.g>
      {/* Flow arrows (animated) */}
      <motion.g
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M30 22 L34 26 L30 30" stroke="#4db8c9" strokeWidth="0.6" opacity="0.2" fill="none" />
        <path d="M80 78 L84 82 L80 86" stroke="#4db8c9" strokeWidth="0.6" opacity="0.2" fill="none" />
        <path d="M130 102 L134 106 L130 110" stroke="#4db8c9" strokeWidth="0.6" opacity="0.2" fill="none" />
      </motion.g>
      {/* Canyon walls (small tree/vegetation marks) */}
      <motion.g opacity="0.15">
        <path d="M8 5 L10 0 L12 5" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
        <path d="M35 30 L37 25 L39 30" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
        <path d="M56 50 L58 45 L60 50" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
        <path d="M75 90 L77 85 L79 90" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
      </motion.g>
    </svg>
  )
}
