import { InstagramIcon, FacebookIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-black text-xl tracking-tight">
          <span className="text-slate-900">Ras</span>
          <span className="text-[#2563eb]">Coach</span>
          <span className="text-slate-300 text-sm font-normal ml-3">© {new Date().getFullYear()} Rasco Personal Training</span>
        </span>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          {[['Home','#home'],['Trainingen','#trainingen'],['Over mij','#over-mij'],['Tarieven','#tarieven'],['Contact','#contact']].map(([l,h]) => (
            <a key={h} href={h} className="hover:text-slate-700 transition-colors">{l}</a>
          ))}
        </div>

        <div className="flex gap-2">
          {[InstagramIcon, FacebookIcon].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 bg-slate-50 hover:bg-[#2563eb] border border-slate-200 hover:border-[#2563eb] rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
