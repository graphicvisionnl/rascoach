import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Award, Dumbbell, Calendar } from 'lucide-react'

const traits = [
  'Fitness Level 1, 2 & Master gecertificeerd via AALO',
  'Personal Trainer & Food Base diploma',
  'Voormalig voetballer bij Zeeburgia, Telstar & Neerlandia',
  'Meer dan 15 jaar actief in de sportwereld',
  'Doelgericht, structureel en enthousiast',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="over-mij" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80&fit=crop"
                alt="Personal trainer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Award size={18} className="text-[#2563eb]" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">5 diploma's behaald</div>
                <div className="text-slate-400 text-xs">Via AALO gecertificeerd</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-3">Over mij</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Ik ben Rachid,<br />
              <span className="serif-italic font-normal text-slate-600">jouw personal trainer</span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-4 text-[15px]">
              Ik ben Rachid Ben-Belkacem en sport al heel mijn leven. Eerst fanatiek als voetballer bij Zeeburgia, Telstar en Neerlandia — later als zaalvoetballer en vaste bezoeker van de sportschool.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              Na meer dan 15 jaar op kantoor heb ik het roer omgegooid. Via AALO haalde ik mijn diploma's fitness level 1, 2, master, personal trainer en food base. Ik werk doelgericht, structureel en ga graag met je aan de bak.
            </p>

            <ul className="space-y-3 mb-10">
              {traits.map((trait, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={16} className="text-[#2563eb] flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{trait}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5"
            >
              Plan een gratis intake
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
