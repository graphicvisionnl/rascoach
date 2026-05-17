import { motion } from 'framer-motion'

export default function BarbellAnimation() {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, -2, 2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="w-64 h-64"
    >
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Left outer plate */}
        <rect x="10" y="85" width="18" height="70" rx="5" fill="#e63946" opacity="0.9" />
        {/* Left inner plate */}
        <rect x="32" y="95" width="12" height="50" rx="4" fill="#e63946" opacity="0.7" />
        {/* Bar */}
        <rect x="44" y="115" width="152" height="10" rx="5" fill="#888" />
        {/* Right inner plate */}
        <rect x="196" y="95" width="12" height="50" rx="4" fill="#e63946" opacity="0.7" />
        {/* Right outer plate */}
        <rect x="212" y="85" width="18" height="70" rx="5" fill="#e63946" opacity="0.9" />
        {/* Grip knurling lines */}
        {[90, 100, 110, 130, 140, 150].map((x) => (
          <rect key={x} x={x} y="113" width="2" height="14" rx="1" fill="#555" />
        ))}
        {/* Weight shadow */}
        <ellipse cx="120" cy="175" rx="60" ry="6" fill="rgba(230,57,70,0.1)" />
      </svg>
    </motion.div>
  )
}
