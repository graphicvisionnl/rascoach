import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Thomas V.',
    subtitle: 'Vetpercentage omlaag, zichtbaar resultaat',
    image: '/before_after_thomas.webp',
    stats: ['Kantoorbaan, weinig beweging', '3 maanden personal training', '3x per week trainen'],
  },
  {
    name: 'Sara M.',
    subtitle: 'Getoned en meer energie in 3 maanden',
    image: '/before_after_sara.webp',
    stats: ['Drukke agenda, weinig tijd', '3 maanden small group training', '2x per week, 1u per sessie'],
  },
  {
    name: 'Daan K.',
    subtitle: 'Spiermassa opgebouwd in 12 weken',
    image: '/before_after_daan.webp',
    stats: ['Weinig sportachtergrond', '12 weken personal training', '3x per week kracht'],
  },
]

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Card with one combined image (real photos)
  if (t.image) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
      >
        <div className="relative">
          <img
            src={t.image}
            alt={`Voor en na — ${t.name}`}
            className="w-full object-cover"
            style={{ maxHeight: '260px', objectPosition: 'top' }}
          />
          {/* Voor label — left half */}
          <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm">
            Voor
          </span>
          {/* Na label — right half */}
          <span className="absolute top-3 right-3 bg-[#2563eb] text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
            Na
          </span>
          {/* Divider line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/60" />
        </div>
        <div className="p-5">
          <p className="font-bold text-slate-900 text-[15px]">{t.name}</p>
          <p className="text-slate-400 text-sm mt-0.5 mb-4">{t.subtitle}</p>
          <ul className="space-y-1.5">
            {t.stats.map((s, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="w-1 h-1 rounded-full bg-[#2563eb] flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    )
  }

  // Card with two separate Unsplash images side by side
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
    >
      <div className="relative grid grid-cols-2 gap-0.5 bg-slate-100">
        <div className="relative">
          <img
            src={t.imageBefore}
            alt={`Voor — ${t.name}`}
            className="w-full h-48 object-cover object-top"
          />
          <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm">
            Voor
          </span>
        </div>
        <div className="relative">
          <img
            src={t.imageAfter}
            alt={`Na — ${t.name}`}
            className="w-full h-48 object-cover object-top"
          />
          <span className="absolute top-3 right-3 bg-[#2563eb] text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
            Na
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="font-bold text-slate-900 text-[15px]">{t.name}</p>
        <p className="text-slate-400 text-sm mt-0.5 mb-4">{t.subtitle}</p>
        <ul className="space-y-1.5">
          {t.stats.map((s, i) => (
            <li key={i} className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="w-1 h-1 rounded-full bg-[#2563eb] flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="resultaten" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-lg">
            <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-3">Resultaten</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
              Echte mensen,<br />
              <span className="serif-italic font-normal">echte resultaten</span>
            </h2>
            <p className="text-slate-400 text-base">
              Resultaten komen door consistentie en de juiste begeleiding. Dit zijn de verhalen van mensen die de stap hebben gezet.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 flex-shrink-0"
          >
            Start jouw transformatie
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
