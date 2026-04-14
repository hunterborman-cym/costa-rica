import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function BookingItem({ item, isChecked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-start gap-3.5 p-4 md:p-5 bg-white border border-border-light rounded-[10px] mb-2 cursor-pointer shadow-sm transition-all duration-200 hover:border-border hover:shadow-md text-left"
    >
      {/* Checkbox */}
      <motion.div
        className={`
          flex-shrink-0 w-[22px] h-[22px] rounded-md border-2 flex items-center justify-center mt-0.5
          transition-colors duration-300
          ${isChecked ? 'bg-jungle-mid border-jungle-mid' : 'border-border'}
        `}
        animate={isChecked ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          initial={false}
          animate={{ opacity: isChecked ? 1 : 0, scale: isChecked ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <Check size={12} className="text-white" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      {/* Text */}
      <div>
        <p className={`text-[0.88rem] leading-snug transition-colors duration-200 ${isChecked ? 'line-through text-smoke-light' : 'text-[#4a4a5a]'}`}>
          <strong className={`font-semibold ${isChecked ? 'text-smoke-light' : 'text-volcanic'}`}>
            {item.name}
          </strong>
          {' '}&mdash; {item.detail}
        </p>
        <p className="font-mono text-[0.58rem] text-smoke-light mt-1 tracking-wider">
          {item.sub}
        </p>
      </div>
    </button>
  )
}
