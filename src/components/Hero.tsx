import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="on-dark relative overflow-hidden bg-navy px-5 pb-20 pt-32 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-ns/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-slate-300">I am {profile.name}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Transforming business processes through Oracle NetSuite ERP.</h1>
          <p className="mt-3 text-lg font-medium text-ns">{profile.title}</p>
          <p className="muted mt-5 max-w-xl leading-relaxed">NetSuite Functional Consultant experienced in business process analysis, ERP workflows, functional documentation, Saved Searches, CSV Import, and SuiteAnalytics reporting across core business functions.</p>
          <p className="mt-3 text-sm text-slate-400">Oracle NetSuite ERP | Functional Consulting | Business Process Analysis | ERP Configuration | SuiteAnalytics and Reporting</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">Explore my work</a>
            <a href={profile.resume} download className="btn btn-ghost"><Download size={16} /> Download resume</a>
          </div>
          <div className="mt-8 flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-xl border border-white/15 p-3 hover:bg-white/10"><Linkedin size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-xl border border-white/15 p-3 hover:bg-white/10"><Github size={18} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#f3f4f6] shadow-2xl shadow-black/40">
            <img src={`${import.meta.env.BASE_URL}hero.webp`} alt="Bysani Tirupathi Reddy in a charcoal suit and navy tie" width={706} height={1000} fetchPriority="high" className="h-auto w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
