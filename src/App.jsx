import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Nav from './components/Nav'
import TripStats from './components/TripStats'
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
        <TripStats />
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
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mb-4 px-4 py-2 bg-white border border-border-light rounded-full text-[0.65rem] font-mono tracking-wider uppercase text-smoke hover:text-volcanic hover:border-border hover:shadow-sm transition-all duration-200 cursor-pointer"
        >
          Back to top
        </button>
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
