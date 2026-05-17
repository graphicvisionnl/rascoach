import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=1600&q=85&fit=crop"
          alt="Personal training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          Gratis intake — geen verplichtingen
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-4"
        >
          Personal training
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="serif-italic text-5xl md:text-7xl lg:text-8xl text-white/90 leading-[1.1] mb-8"
        >
          op jouw tempo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Of je nu wil afvallen, spieren opbouwen of je conditie verbeteren — RasCoach begeleidt jou naar je doel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 items-center mb-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full text-base hover:bg-slate-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Plan je gratis intake
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#trainingen"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all duration-200"
          >
            Bekijk trainingen
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-2"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white/70 text-sm">Topresultaten voor ieder sportdoel</span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5 mx-auto"
        >
          <div className="w-1 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
