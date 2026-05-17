import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Trainingen', href: '#trainingen' },
  { label: 'Over mij', href: '#over-mij' },
  { label: 'Tarieven', href: '#tarieven' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-3 rounded-2xl transition-all duration-300 w-full max-w-3xl ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-slate-100'
              : 'bg-white/80 backdrop-blur-md shadow-md shadow-black/5 border border-white/60'
          }`}
        >
          <a href="#home" className="font-black text-xl tracking-tight flex-shrink-0">
            <span className="text-slate-900">Ras</span>
            <span className="text-[#2563eb]">Coach</span>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-blue-200 flex-shrink-0"
          >
            Gratis intake
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-600 p-1"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-slate-900 hover:text-[#2563eb] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              className="mt-2 bg-[#2563eb] text-white font-bold px-8 py-3 rounded-xl text-lg"
            >
              Gratis intake
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
