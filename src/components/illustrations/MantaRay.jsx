import { motion } from 'framer-motion'

export default function MantaRay({ animate = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M100 20 C120 10, 160 5, 195 30 C175 25, 155 28, 140 35 C150 42, 155 50, 150 58 C145 52, 135 48, 125 50 L100 65 L75 50 C65 48, 55 52, 50 58 C45 50, 50 42, 60 35 C45 28, 25 25, 5 30 C40 5, 80 10, 100 20Z"
        stroke="#4db8c9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      {/* Tail */}
      <motion.path
        d="M100 65 L100 90 L105 95"
        stroke="#4db8c9"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
      />
      {/* Eyes */}
      <motion.circle
        cx="85" cy="30" r="2"
        fill="#4db8c9"
        initial={animate ? { opacity: 0 } : { opacity: 0.6 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      />
      <motion.circle
        cx="115" cy="30" r="2"
        fill="#4db8c9"
        initial={animate ? { opacity: 0 } : { opacity: 0.6 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      />
      {/* Gill lines */}
      <motion.path
        d="M88 38 C90 42, 92 45, 90 48 M112 38 C110 42, 108 45, 110 48"
        stroke="#4db8c9"
        strokeWidth="0.8"
        opacity="0.4"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      />
    </svg>
  )
}
