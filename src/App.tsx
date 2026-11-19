import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Experience, Expertise, Processes, Projects, Certifications, EduStrengths, Contact, Footer } from './components/Sections'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero /><About /><Experience /><Expertise /><Processes /><Projects /><Certifications /><EduStrengths /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
