import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function IntakeBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl overflow-hidden bg-[#2563eb]"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1400&q=80&fit=crop"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] to-[#2563eb]/80" />

          <div className="relative px-10 md:px-16 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-200 text-sm font-semibold tracking-wide uppercase mb-4">Gratis & vrijblijvend</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Start vandaag met<br />
                <span className="serif-italic font-normal text-white/90">een gratis intake</span>
              </h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Geen verplichtingen, geen kosten. Kom kennismaken en ontdek welke training het beste bij jou past.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-white text-[#2563eb] font-black px-7 py-4 rounded-xl text-base hover:bg-slate-50 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Plan nu gratis
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#trainingen"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-xl text-base hover:bg-white/10 transition-all duration-200"
              >
                Bekijk trainingen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
