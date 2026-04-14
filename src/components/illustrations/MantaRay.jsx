import { motion } from 'framer-motion'

export default function MantaRay({ animate = false, className = '' }) {
  const draw = animate
    ? { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } }
    : { initial: { pathLength: 1, opacity: 1 }, animate: { pathLength: 1, opacity: 1 } }

  return (
    <svg viewBox="0 0 280 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main body — wide diamond/kite shape with graceful wing curves */}
      <motion.path
        d="M140 30
           C155 26, 175 18, 200 12 C220 7, 245 6, 268 14 C272 16, 274 20, 270 24
           C260 30, 240 38, 220 44 C200 50, 175 56, 155 60
           L140 65
           L125 60
           C105 56, 80 50, 60 44 C40 38, 20 30, 10 24 C6 20, 8 16, 12 14
           C35 6, 60 7, 80 12 C105 18, 125 26, 140 30Z"
        stroke="#4db8c9"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
        {...draw}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />
      {/* Central body ridge line */}
      <motion.path
        d="M140 28 L140 68"
        stroke="#4db8c9"
        strokeWidth="0.6"
        opacity={0.25}
        {...draw}
        transition={{ duration: 0.6, delay: 2 }}
      />
      {/* Tail — long, thin, whip-like */}
      <motion.path
        d="M140 65 C140 75, 139 85, 140 95 C141 102, 142 108, 144 115"
        stroke="#4db8c9"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        {...draw}
        transition={{ duration: 1, delay: 1.8 }}
      />
      {/* Cephalic fins — the horn-like feeding fins at the front */}
      <motion.path
        d="M132 32 L126 18 C125 15, 122 14, 121 17 L124 28"
        stroke="#4db8c9"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        {...draw}
        transition={{ duration: 0.6, delay: 2 }}
      />
      <motion.path
        d="M148 32 L154 18 C155 15, 158 14, 159 17 L156 28"
        stroke="#4db8c9"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        {...draw}
        transition={{ duration: 0.6, delay: 2.1 }}
      />
      {/* Eyes — on the sides of the head */}
      <motion.circle
        cx="125" cy="36" r="2"
        fill="#4db8c9"
        initial={animate ? { opacity: 0 } : { opacity: 0.5 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.3 }}
      />
      <motion.circle
        cx="155" cy="36" r="2"
        fill="#4db8c9"
        initial={animate ? { opacity: 0 } : { opacity: 0.5 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.3 }}
      />
      {/* Gill slits on underside — 5 pairs */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 0.2 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.2 }}
      >
        <path d="M133 46 L133 52 M136 46 L136 53 M139 46 L139 54 M142 46 L142 53 M145 46 L145 52" stroke="#4db8c9" strokeWidth="0.5" />
      </motion.g>
      {/* Wing texture — subtle vein lines */}
      <motion.g
        initial={animate ? { opacity: 0 } : { opacity: 0.1 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 2.4 }}
      >
        <path d="M140 35 C160 30, 190 22, 220 16" stroke="#4db8c9" strokeWidth="0.4" fill="none" />
        <path d="M140 40 C165 35, 195 28, 240 20" stroke="#4db8c9" strokeWidth="0.4" fill="none" />
        <path d="M140 35 C120 30, 90 22, 60 16" stroke="#4db8c9" strokeWidth="0.4" fill="none" />
        <path d="M140 40 C115 35, 85 28, 40 20" stroke="#4db8c9" strokeWidth="0.4" fill="none" />
      </motion.g>
      {/* Gentle floating motion — small bubbles */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="170" cy="10" r="1" stroke="#4db8c9" strokeWidth="0.3" opacity="0.12" fill="none" />
        <circle cx="110" cy="8" r="0.8" stroke="#4db8c9" strokeWidth="0.3" opacity="0.08" fill="none" />
        <circle cx="190" cy="5" r="1.2" stroke="#4db8c9" strokeWidth="0.3" opacity="0.1" fill="none" />
      </motion.g>
    </svg>
  )
}
