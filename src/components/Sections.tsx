import { useState, FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, Check, Download, GraduationCap, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Section, Flow } from './ui'
import { profile, stats, duties, skills, processes, projects, certs, strengths } from '../data'

export function About() {
  const pts = ['Requirements gathering and business requirements analysis', 'Functional specifications and documentation', 'Process mapping across O2C, P2P, R2R and CRM', 'Saved Searches, Workflows, CSV Import and SuiteAnalytics']
  return (
    <Section id="about" title="About me" sub="2.6+ years of hands-on exposure to Oracle NetSuite ERP and business processes.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="muted space-y-4 leading-relaxed">
          <p>I am a NetSuite Functional Consultant based in Hyderabad. My work sits between the business and the system: I gather requirements, analyze how a process runs today, and turn it into functional specifications that technical teams can build and configure.</p>
          <p>I work across Order-to-Cash, Procure-to-Pay, Record-to-Report and CRM, and I support that work with Saved Searches, Workflows, CSV Import and SuiteAnalytics reporting. I work closely with business and technical stakeholders, and I am certified by Oracle NetSuite in BI and Reporting and in Financials.</p>
        </div>
        <ul className="grid gap-3">
          {pts.map((p) => <li key={p} className="card flex items-start gap-3 !p-4"><Check size={18} className="mt-0.5 shrink-0 text-ns" />{p}</li>)}
        </ul>
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" dark title="Professional experience" sub="Functional consulting across NetSuite ERP business processes.">
      <div className="card mb-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div><h3 className="text-xl font-semibold">NetSuite Functional Consultant</h3><p className="muted">Astron Tech Solution Pvt Ltd</p></div>
          <p className="rounded-lg border border-white/15 px-3 py-1 text-sm">May 2024 – Present</p>
        </div>
        <ul className="muted mt-5 list-disc space-y-2 pl-5 leading-relaxed">{duties.map((d) => <li key={d}>{d}</li>)}</ul>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.div key={s.l} className="card" whileHover={{ y: -4 }}>
            <p className="text-4xl font-semibold text-ns">{s.v}</p>
            <p className="mt-1 font-medium">{s.l}</p>
            <p className="muted mt-1 text-sm">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Expertise() {
  return (
    <Section id="expertise" title="NetSuite expertise" sub="What I work with, grouped by the kind of work.">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.t} className="card">
            <h3 className="mb-4 text-lg font-semibold">{g.t}</h3>
            <div className="flex flex-wrap gap-2">{g.i.map((i) => <span key={i} className="chip">{i}</span>)}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Processes() {
  const [a, setA] = useState(0)
  const p = processes[a]
  return (
    <Section id="processes" dark title="Business process knowledge" sub="Choose a process to see the transaction flow and what I cover.">
      <div role="tablist" aria-label="Business processes" className="mb-6 flex flex-wrap gap-2">
        {processes.map((x, i) => (
          <button key={x.k} role="tab" id={`tab-${x.k}`} aria-selected={a === i} aria-controls="proc-panel" onClick={() => setA(i)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${a === i ? 'border-ns bg-ns text-white' : 'border-white/15 text-slate-200 hover:bg-white/10'}`}>{x.k}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={p.k} id="proc-panel" role="tabpanel" aria-labelledby={`tab-${p.k}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="card">
          <h3 className="mb-5 text-2xl font-semibold">{p.n}</h3>
          <Flow steps={p.flow} />
          <ul className="muted mt-6 list-disc space-y-2 pl-5">{p.p.map((t) => <li key={t}>{t}</li>)}</ul>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Professional projects" sub="These are portfolio projects and exercises, not production client implementations.">
      <div className="space-y-6">
        {projects.map((p) => (
          <article key={p.t} className="card grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-2 inline-block rounded-md bg-ns/10 px-2 py-1 text-xs font-medium text-ns">Portfolio project · {p.tag}</p>
              <h3 className="text-xl font-semibold">{p.t}</h3>
              <p className="muted mt-2">{p.d}</p>
              <p className="mt-4 text-sm font-semibold">Business objective</p>
              <p className="muted text-sm">{p.obj}</p>
              <p className="mt-4 text-sm font-semibold">My contribution</p>
              <ul className="muted list-disc space-y-1 pl-5 text-sm">{p.c.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="flex flex-col justify-between gap-5 rounded-xl bg-navy p-5 text-white">
              <div><p className="mb-3 text-sm text-slate-300">{p.stat}</p><Flow steps={p.art} /></div>
              <div>
                <p className="mb-2 text-xs text-slate-400">NetSuite modules</p>
                <div className="mb-3 flex flex-wrap gap-2">{p.m.map((m) => <span key={m} className="rounded-md bg-ns px-2 py-1 text-xs">{m}</span>)}</div>
                <p className="mb-2 text-xs text-slate-400">Skills</p>
                <div className="flex flex-wrap gap-2">{p.s.map((m) => <span key={m} className="rounded-md border border-white/20 px-2 py-1 text-xs">{m}</span>)}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" dark title="Certifications" sub="Issued by Oracle NetSuite.">
      <div className="grid gap-5 md:grid-cols-2">
        {certs.map((c) => (
          <div key={c} className="card flex items-start gap-4 border-ns/30">
            <div className="rounded-xl bg-ns p-3"><Award size={26} /></div>
            <div><h3 className="font-semibold">{c}</h3><p className="muted mt-1 text-sm">Oracle NetSuite</p><p className="mt-1 text-sm">Earned: July 29, 2026</p></div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function EduStrengths() {
  return (
    <Section id="education" title="Education and strengths">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card">
          <GraduationCap className="mb-3 text-ns" />
          <h3 className="font-semibold">B.Tech – Electrical &amp; Electronics Engineering</h3>
          <p className="muted mt-1">QIS College of Engineering and Technology</p>
          <p className="muted text-sm">Graduated 2024</p>
        </div>
        <div className="card">
          <h3 className="mb-4 font-semibold">Professional strengths</h3>
          <div className="flex flex-wrap gap-2">{strengths.map((s) => <span key={s} className="chip">{s}</span>)}</div>
        </div>
      </div>
    </Section>
  )
}

export function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const on = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const rows = [
    [Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`],
    [Linkedin, 'LinkedIn profile', profile.linkedin], [Github, 'GitHub profile', profile.github],
  ] as const
  return (
    <Section id="contact" dark title="Contact me" sub="Open to NetSuite functional consulting roles.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p className="muted flex items-center gap-3"><MapPin size={18} className="text-ns" />{profile.location}</p>
          {rows.map(([Icon, label, href]) => (
            <a key={href} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="card flex items-center gap-3 !p-4 hover:border-ns/50"><Icon size={18} className="text-ns" />{label}</a>
          ))}
          <a href={profile.resume} download className="btn btn-primary"><Download size={16} /> Download resume</a>
        </div>
        <form onSubmit={submit} className="card space-y-4">
          <label className="block text-sm">Name<input required className="field mt-1" value={f.name} onChange={on('name')} autoComplete="name" /></label>
          <label className="block text-sm">Email<input required type="email" className="field mt-1" value={f.email} onChange={on('email')} autoComplete="email" /></label>
          <label className="block text-sm">Message<textarea required rows={4} className="field mt-1" value={f.message} onChange={on('message')} /></label>
          <button type="submit" className="btn btn-primary"><Send size={16} /> Send message</button>
          {sent && <p role="status" className="muted text-sm">Your email app should open with the message ready to send. If it does not, write to {profile.email}.</p>}
        </form>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="on-dark bg-[#070d1c] px-5 py-8 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div><p className="font-semibold text-white">{profile.name}</p><p>{profile.title}</p></div>
        <div className="flex gap-5"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={`mailto:${profile.email}`}>Email</a></div>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
