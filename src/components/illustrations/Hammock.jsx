import { motion } from 'framer-motion'

export default function Hammock({ animate = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left palm tree */}
      <motion.path
        d="M40 85 L42 40 M42 40 C30 30, 20 25, 10 28 M42 40 C32 28, 28 18, 22 12 M42 40 C48 28, 55 22, 62 18 M42 40 C38 30, 32 22, 30 15"
        stroke="#2d5a3d"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      {/* Right palm tree */}
      <motion.path
        d="M160 85 L158 40 M158 40 C170 30, 180 25, 190 28 M158 40 C168 28, 172 18, 178 12 M158 40 C152 28, 145 22, 138 18 M158 40 C162 30, 168 22, 170 15"
        stroke="#2d5a3d"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
      />
      {/* Hammock */}
      <motion.path
        d="M50 48 C70 65, 90 72, 100 73 C110 72, 130 65, 150 48"
        stroke="#d96a4f"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      {/* Hammock strings */}
      <motion.path
        d="M50 48 L42 42 M150 48 L158 42"
        stroke="#d96a4f"
        strokeWidth="0.8"
        opacity="0.5"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      {/* Net pattern */}
      <motion.path
        d="M60 55 L68 62 M72 52 L78 60 M84 50 L88 58 M96 50 L98 58 M108 50 L112 58 M120 52 L126 60 M132 55 L140 62"
        stroke="#d96a4f"
        strokeWidth="0.4"
        opacity="0.2"
        fill="none"
        initial={animate ? { opacity: 0 } : { opacity: 0.2 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2 }}
      />
      {/* Person in hammock (simple) */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8 }}
      >
        <circle cx="95" cy="66" r="4" stroke="#121a14" strokeWidth="0.7" fill="none" />
        <path d="M88 68 L80 65 M102 68 L110 65" stroke="#121a14" strokeWidth="0.5" strokeLinecap="round" />
      </motion.g>
      {/* Drink */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.2 }}
      >
        <path d="M112 62 L110 70 L116 70 L114 62Z" stroke="#b8942f" strokeWidth="0.6" fill="none" />
        <path d="M113 60 L118 56" stroke="#b8942f" strokeWidth="0.4" strokeLinecap="round" />
        <circle cx="118" cy="55" r="2" stroke="#b8942f" strokeWidth="0.3" fill="none" />
      </motion.g>
      {/* Gentle sway animation on hammock */}
      <motion.ellipse
        cx="100" cy="80" rx="50" ry="1"
        stroke="#121a14" strokeWidth="0.3" opacity="0.1" fill="none"
      />
    </svg>
  )
}
