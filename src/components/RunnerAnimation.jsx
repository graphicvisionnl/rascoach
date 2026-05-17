import { motion } from 'framer-motion'

export default function RunnerAnimation() {
  return (
    <div className="relative h-20 overflow-hidden pointer-events-none select-none">
      <motion.div
        animate={{ x: ['0vw', '105vw'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        className="absolute bottom-0 left-[-80px]"
      >
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <motion.circle
            cx="42" cy="10" r="7"
            fill="#e63946"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
          {/* Body */}
          <motion.line
            x1="42" y1="17" x2="38" y2="35"
            stroke="#e63946" strokeWidth="3" strokeLinecap="round"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
          {/* Left arm */}
          <motion.line
            x1="40" y1="22" x2="26" y2="30"
            stroke="white" strokeWidth="2.5" strokeLinecap="round"
            animate={{ rotate: [20, -20, 20] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            style={{ transformOrigin: '40px 22px' }}
          />
          {/* Right arm */}
          <motion.line
            x1="40" y1="22" x2="54" y2="28"
            stroke="white" strokeWidth="2.5" strokeLinecap="round"
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            style={{ transformOrigin: '40px 22px' }}
          />
          {/* Left leg */}
          <motion.polyline
            points="38,35 30,50 22,65"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
            animate={{ rotate: [20, -10, 20] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            style={{ transformOrigin: '38px 35px' }}
          />
          {/* Right leg */}
          <motion.polyline
            points="38,35 46,50 55,62"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
            animate={{ rotate: [-10, 20, -10] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            style={{ transformOrigin: '38px 35px' }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
