import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { User, Users, Zap, Building2, Trophy, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: User,
    title: 'Personal Training',
    tag: '1 persoon',
    description: 'Volledig op jou afgestemd. Na een intake bepalen we je doelstelling en ga ik je gedurende een uur intensief begeleiden.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop',
  },
  {
    icon: Users,
    title: 'Small Group Training',
    tag: '2 – 4 personen',
    description: 'Sport samen met vrienden of collega\'s. Persoonlijke aanpak gecombineerd met het gezelschap van een klein groepje.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80&fit=crop',
  },
  {
    icon: Zap,
    title: 'Bootcamp',
    tag: 'Vanaf 5 personen',
    description: 'Groepstrainingen op low of high intensity. Iedereen op eigen tempo — conditie opbouwen of grenzen verleggen.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80&fit=crop',
  },
  {
    icon: Building2,
    title: 'Bedrijfstraining',
    tag: 'Op locatie',
    description: 'Vitale medewerkers presteren beter. Trainingen op locatie voor grote en kleine groepen, positief voor teambuilding.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80&fit=crop',
  },
  {
    icon: Trophy,
    title: 'Voetbaltraining',
    tag: 'Alle leeftijden',
    description: 'Word een betere voetballer. Na een intake bepalen we samen de verbeterpunten — individueel of in kleine groepen.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80&fit=crop',
  },
]

function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <div className="flex-shrink-0 w-[75vw] sm:w-[340px] md:w-[360px] bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-4 text-xs font-semibold text-white bg-[#2563eb] px-3 py-1 rounded-full">
          {service.tag}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon size={16} className="text-[#2563eb]" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{service.title}</h3>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.description}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb]">
          Gratis intake <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}

function SectionHeader({ className = '' }) {
  return (
    <div className={`max-w-xl ${className}`}>
      <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-2">Wat ik aanbied</p>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2">
        Training voor<br />
        <span className="serif-italic font-normal">ieder doel</span>
      </h2>
      <p className="text-slate-400 text-sm md:text-base">
        Swipe om alle trainingsvormen te ontdekken.
      </p>
    </div>
  )
}

// ─── Mobile: touch-scroll ────────────────────────────────────────────────────
function MobileServices() {
  return (
    <section id="trainingen" className="bg-[#f8fafc] overflow-hidden">
      {/* Sticky header stays visible while swiping cards */}
      <div className="sticky top-[60px] z-10 bg-[#f8fafc] px-5 pt-10 pb-5 border-b border-slate-100/0">
        <SectionHeader />
      </div>

      {/* Touch-scrollable card row */}
      <div
        className="flex gap-4 overflow-x-auto px-5 pb-8 pt-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {services.map((s) => (
          <div key={s.title} className="snap-start flex-shrink-0">
            <ServiceCard service={s} />
          </div>
        ))}
        {/* trailing spacer */}
        <div className="flex-shrink-0 w-1" />
      </div>
    </section>
  )
}

// ─── Desktop: sticky scroll-linked carousel ───────────────────────────────────
function DesktopServices() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [overflow, setOverflow] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const val = trackRef.current.scrollWidth - window.innerWidth
        setOverflow(val > 0 ? val : 0)
      }
    }
    // Wait a tick for fonts / images to settle
    const id = setTimeout(measure, 100)
    window.addEventListener('resize', measure)
    return () => { clearTimeout(id); window.removeEventListener('resize', measure) }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -overflow])

  return (
    <section
      id="trainingen"
      ref={sectionRef}
      style={{ height: `calc(100vh + ${overflow}px)` }}
      className="relative bg-[#f8fafc]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <SectionHeader className="px-12 mb-8" />

        <motion.div ref={trackRef} style={{ x }} className="flex gap-5 pl-12 pr-12">
          {services.map((s) => <ServiceCard key={s.title} service={s} />)}
        </motion.div>

        <div className="px-12 mt-8">
          <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="h-full bg-[#2563eb] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Root: pick layout based on viewport ─────────────────────────────────────
export default function Services() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return isMobile ? <MobileServices /> : <DesktopServices />
}
