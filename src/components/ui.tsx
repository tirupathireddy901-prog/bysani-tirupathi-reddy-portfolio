import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Section({ id, dark, title, sub, children }: { id: string; dark?: boolean; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className={`${dark ? 'on-dark bg-navy text-white' : 'bg-mist text-ink'} px-5 py-20 md:py-24`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {sub && <p className="muted mt-3">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-2" aria-label="Process flow">
      {steps.map((s, i) => (
        <motion.li key={s} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-2">
          <span className="rounded-lg border border-ns/40 bg-ns/10 px-3 py-2 text-sm font-medium">{s}</span>
          {i < steps.length - 1 && <span aria-hidden className="text-ns">→</span>}
        </motion.li>
      ))}
    </ol>
  )
}
