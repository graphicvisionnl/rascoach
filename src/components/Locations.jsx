import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="locaties" className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-3">Locaties</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-3">
              Waar we trainen
            </h2>
            <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
              RasCoach werkt samen met sportlocaties in de regio. Ook trainingen op locatie — bij jou thuis, op kantoor of buiten — zijn mogelijk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            {[
              { Icon: MapPin, title: 'Locaties volgen binnenkort', sub: 'Partners worden bekend gemaakt' },
              { Icon: Clock, title: 'Flexibele tijden', sub: 'In overleg te plannen' },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 rounded-2xl px-6 py-4">
                <Icon size={20} className="text-[#2563eb]" />
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{title}</div>
                  <div className="text-slate-400 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
