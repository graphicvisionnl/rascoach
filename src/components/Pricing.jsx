import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Info, ArrowRight } from 'lucide-react'

const personalPricing = [
  { persons: '1 persoon', price: '€65', sub: 'per les' },
  { persons: '2 personen', price: '€60', sub: 'p.p. per les', popular: true },
  { persons: '3 personen', price: '€55', sub: 'p.p. per les' },
  { persons: '4 personen', price: '€50', sub: 'p.p. per les' },
]

const groupPricing = [
  { sessions: '1 les', price: '€15' },
  { sessions: '4 lessen', price: '€55', saving: 'Bespaar €5' },
  { sessions: '8 lessen', price: '€100', saving: 'Bespaar €20', popular: true },
  { sessions: '10 lessen', price: '€135', saving: 'Bespaar €15' },
]

const includes = [
  'Gratis intakegesprek',
  'Persoonlijk trainingsschema',
  'Progressiebegeleiding',
  '3 maanden contract (personal/small group)',
  'Professionele coaching',
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tarieven" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-3">Tarieven</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Transparante<br />
            <span className="serif-italic font-normal text-slate-600">prijzen</span>
          </h2>
          <p className="text-slate-400 text-base">
            Duidelijke tarieven zonder verborgen kosten. Prijzen en lessen gelden per uur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#f8fafc] border border-slate-100 rounded-2xl overflow-hidden"
          >
            <div className="px-7 py-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">Personal & Small Group Training</h3>
              <p className="text-slate-400 text-sm mt-0.5">Prijs per les per persoon</p>
            </div>
            <div className="p-7 space-y-2.5">
              {personalPricing.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    row.popular ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {row.popular && (
                      <span className="bg-[#2563eb] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        Populair
                      </span>
                    )}
                    <span className="text-slate-700 font-medium text-sm">{row.persons}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900">{row.price}</span>
                    <span className="text-slate-400 text-xs block">{row.sub}</span>
                  </div>
                </motion.div>
              ))}
              <div className="mt-2 p-4 bg-white rounded-xl border border-slate-100 flex gap-3">
                <Info size={14} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-xs leading-relaxed">
                  Contract van <strong className="text-slate-600">3 maanden</strong> — zodat de inzet van beide kanten gewaarborgd is.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Group */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f8fafc] border border-slate-100 rounded-2xl overflow-hidden"
          >
            <div className="px-7 py-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">Group Training & Bootcamp</h3>
              <p className="text-slate-400 text-sm mt-0.5">Losse lessen of bundels</p>
            </div>
            <div className="p-7 space-y-2.5">
              {groupPricing.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    row.popular ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    {row.popular && (
                      <span className="bg-[#2563eb] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        Beste deal
                      </span>
                    )}
                    <span className="text-slate-700 font-medium text-sm">{row.sessions}</span>
                    {row.saving && (
                      <span className="text-emerald-600 text-xs font-semibold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                        {row.saving}
                      </span>
                    )}
                  </div>
                  <span className="text-2xl font-black text-slate-900">{row.price}</span>
                </motion.div>
              ))}
              <div className="mt-2 p-4 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wider">Altijd inbegrepen</p>
                <ul className="space-y-1.5">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400 text-xs">
                      <Check size={11} className="text-[#2563eb] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center mt-10"
        >
          <p className="text-slate-400 text-sm mb-5">Niet zeker welke vorm bij jou past? Begin met een gratis intake.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5"
          >
            Plan je gratis intake
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
