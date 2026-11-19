import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = [['About', '#about'], ['Experience', '#experience'], ['Expertise', '#expertise'], ['Processes', '#processes'], ['Projects', '#projects'], ['Certifications', '#certifications']]
export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-navy/80 px-4 py-2.5 backdrop-blur-md">
        <a href="#home" className="rounded-full bg-ns px-3 py-1.5 text-sm font-semibold text-white">BT</a>
        <ul className="hidden gap-6 text-sm text-slate-200 md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="hover:text-white">{l}</a></li>)}
        </ul>
        <a href="#contact" className="btn btn-ghost hidden !py-2 md:inline-flex">Let’s talk</a>
        <button className="p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {open && (
        <ul className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-navy/95 p-3 md:hidden">
          {[...links, ['Contact', '#contact']].map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/10">{l}</a></li>)}
        </ul>
      )}
    </header>
  )
}
