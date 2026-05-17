import { useRef, useLayoutEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { User, Users, Zap, Building2, Trophy, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: User,
    title: 'Personal Training',
    tag: '1 persoon',
    description:
      'Volledig op jou afgestemd. Na een intake bepalen we je doelstelling en ga ik je gedurende een uur intensief begeleiden.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop',
  },
  {
    icon: Users,
    title: 'Small Group Training',
    tag: '2 – 4 personen',
    description:
      'Sport samen met vrienden of collega\'s. Persoonlijke aanpak gecombineerd met het gezelschap van een klein groepje.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80&fit=crop',
  },
  {
    icon: Zap,
    title: 'Bootcamp',
    tag: 'Vanaf 5 personen',
    description:
      'Groepstrainingen op low of high intensity. Iedereen op eigen tempo — conditie opbouwen of grenzen verleggen.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80&fit=crop',
  },
  {
    icon: Building2,
    title: 'Bedrijfstraining',
    tag: 'Op locatie',
    description:
      'Vitale medewerkers presteren beter. Trainingen op locatie voor grote en kleine groepen, positief voor teambuilding.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80&fit=crop',
  },
  {
    icon: Trophy,
    title: 'Voetbaltraining',
    tag: 'Alle leeftijden',
    description:
      'Word een betere voetballer. Na een intake bepalen we samen de verbeterpunten — individueel of in kleine groepen.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80&fit=crop',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)

  // Measure how much the track overflows the viewport
  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const overflow = trackRef.current.scrollWidth - window.innerWidth
        setTranslateX(overflow > 0 ? overflow : 0)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateX])

  return (
    <section
      id="trainingen"
      ref={sectionRef}
      // Height = 100vh (sticky area) + scroll room for the full card track
      style={{ height: `calc(100vh + ${translateX}px)` }}
      className="relative bg-[#f8fafc]"
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="px-6 md:px-12 mb-10 max-w-xl">
          <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-3">Wat ik aanbied</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-3">
            Training voor<br />
            <span className="serif-italic font-normal">ieder doel</span>
          </h2>
          <p className="text-slate-400 text-base">
            Scroll om alle trainingsvormen te ontdekken.
          </p>
        </div>

        {/* Scrolling card track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-5 pl-6 md:pl-12 pr-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="flex-shrink-0 w-[300px] md:w-[360px] bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#2563eb]" />
                    </div>
                    <h3 className="font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.description}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb] group-hover:gap-2.5 transition-all duration-200"
                  >
                    Gratis intake <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Progress bar */}
        <div className="px-6 md:px-12 mt-8">
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
