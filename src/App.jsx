import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Itinerary from './components/Itinerary'
import Budget from './components/Budget'
import Flights from './components/Flights'
import Booking from './components/Booking'
import TripExtras from './components/TripExtras'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Nav />
      <main>
        <Itinerary />
        <SectionDivider />
        <Budget />
        <SectionDivider />
        <Flights />
        <SectionDivider />
        <Booking />
        <SectionDivider />
        <TripExtras />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-border-light">
        <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-smoke-light mb-2">
          Pura Vida &middot; May 2026
        </p>
        <p className="font-body text-[0.68rem] text-smoke-light/60">
          Built with React + Tailwind + Framer Motion
        </p>
      </footer>
    </>
  )
}
