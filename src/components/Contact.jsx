import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from './SocialIcons'

const reasons = [
  'Personal Training',
  'Small Group Training',
  'Bootcamp',
  'Bedrijfstraining',
  'Voetbaltraining',
  'Andere vraag',
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [selected, setSelected] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Neem contact op<br />
            <span className="serif-italic font-normal text-slate-500">of plan een intake</span>
          </h2>
          <p className="text-slate-400 text-base">
            De intake is altijd gratis en vrijblijvend. Je hoort binnen 24 uur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6">
              <h3 className="text-slate-900 font-bold text-sm mb-5">Direct contact</h3>
              <div className="space-y-4">
                <a href="tel:06XXXXXXXX" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors">
                    <Phone size={15} className="text-[#2563eb] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Bel of app</div>
                    <div className="text-slate-700 font-semibold text-sm">Wordt binnenkort toegevoegd</div>
                  </div>
                </a>
                <a href="mailto:info@rascoach.nl" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors">
                    <Mail size={15} className="text-[#2563eb] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail</div>
                    <div className="text-slate-700 font-semibold text-sm">info@rascoach.nl</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6">
              <h3 className="text-slate-500 font-semibold text-xs uppercase tracking-wider mb-4">Volg RasCoach</h3>
              <div className="flex gap-3">
                {[
                  { Icon: InstagramIcon, label: 'Instagram' },
                  { Icon: FacebookIcon, label: 'Facebook' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-[#2563eb] border border-slate-200 hover:border-[#2563eb] text-slate-500 hover:text-white rounded-xl py-3 transition-all duration-200 text-sm font-semibold"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-5">
              <p className="text-slate-400 text-xs mb-1">KVK Nummer</p>
              <p className="text-slate-600 font-semibold text-sm">Wordt binnenkort toegevoegd</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-7">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 size={50} className="text-[#2563eb] mb-4" />
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Bericht verzonden!</h3>
                  <p className="text-slate-400">Ik neem zo snel mogelijk contact met je op.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Naam</label>
                      <input
                        type="text" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Jouw naam"
                        className="w-full bg-white border border-slate-200 focus:border-[#2563eb] focus:ring-3 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Telefoon</label>
                      <input
                        type="tel" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="06 12345678"
                        className="w-full bg-white border border-slate-200 focus:border-[#2563eb] focus:ring-3 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">E-mail</label>
                    <input
                      type="email" required value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="jouw@email.nl"
                      className="w-full bg-white border border-slate-200 focus:border-[#2563eb] focus:ring-3 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Interesse in</label>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((r) => (
                        <button
                          type="button" key={r}
                          onClick={() => setSelected(r === selected ? '' : r)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            selected === r
                              ? 'bg-[#2563eb] border-[#2563eb] text-white'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Bericht</label>
                    <textarea
                      rows={4} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Vertel me iets over jezelf en je doelen..."
                      className="w-full bg-white border border-slate-200 focus:border-[#2563eb] focus:ring-3 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 text-sm"
                  >
                    <Send size={15} />
                    Stuur een bericht
                  </button>

                  <p className="text-center text-slate-400 text-xs">
                    Je ontvangt binnen 24 uur een reactie. De intake is altijd gratis.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
