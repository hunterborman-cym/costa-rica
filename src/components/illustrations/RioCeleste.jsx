import { motion } from 'framer-motion'

export default function RioCeleste({ animate = false, className = '' }) {
  return (
    <svg viewBox="0 0 180 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cliff walls */}
      <motion.path
        d="M30 10 L30 60 C30 65, 35 68, 40 68 L50 68"
        stroke="#2d5a3d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M130 10 L130 60 C130 65, 125 68, 120 68 L110 68"
        stroke="#2d5a3d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
      />
      {/* Waterfall streams */}
      <motion.path
        d="M60 15 C62 25, 58 35, 62 45 C64 52, 60 58, 62 65"
        stroke="#4db8c9"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      <motion.path
        d="M75 10 C73 22, 78 34, 74 46 C72 54, 76 60, 74 68"
        stroke="#4db8c9"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.path
        d="M90 12 C92 24, 88 36, 92 48 C94 56, 90 62, 92 68"
        stroke="#4db8c9"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />
      {/* Pool at base */}
      <motion.ellipse
        cx="80" cy="78" rx="40" ry="10"
        stroke="#4db8c9"
        strokeWidth="1.2"
        opacity="0.5"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      />
      {/* Turquoise fill shimmer */}
      <motion.ellipse
        cx="80" cy="78" rx="35" ry="7"
        fill="#4db8c9"
        opacity="0.06"
        initial={animate ? { opacity: 0 } : { opacity: 0.06 }}
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Vegetation on cliffs */}
      <motion.g opacity="0.2">
        <path d="M25 15 L28 8 L31 15" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
        <path d="M22 30 L25 23 L28 30" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
        <path d="M132 20 L135 13 L138 20" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
        <path d="M135 40 L138 33 L141 40" stroke="#2d5a3d" strokeWidth="0.5" fill="none" />
      </motion.g>
      {/* Mist/spray */}
      <motion.g
        animate={{ opacity: [0.15, 0.25, 0.15], y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <circle cx="70" cy="72" r="3" fill="#4db8c9" opacity="0.1" />
        <circle cx="85" cy="70" r="4" fill="#4db8c9" opacity="0.08" />
        <circle cx="95" cy="73" r="2.5" fill="#4db8c9" opacity="0.1" />
      </motion.g>
      {/* Hanging bridge in background */}
      <motion.path
        d="M10 35 C40 42, 60 44, 80 42 C100 40, 120 42, 150 35"
        stroke="#121a14"
        strokeWidth="0.5"
        opacity="0.12"
        fill="none"
        strokeDasharray="2 2"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      />
      {/* Label */}
      <motion.text
        x="80" y="100" textAnchor="middle"
        fill="#4db8c9" opacity="0.2"
        style={{ fontSize: '5px', fontFamily: 'monospace', letterSpacing: '0.1em' }}
        initial={animate ? { opacity: 0 } : { opacity: 0.2 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5 }}
      >
        RÍO CELESTE
      </motion.text>
    </svg>
  )
}
