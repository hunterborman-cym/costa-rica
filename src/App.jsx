import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Itinerary from './components/Itinerary'
import Budget from './components/Budget'
import Flights from './components/Flights'
import Booking from './components/Booking'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Nav />
      <main>
        <Itinerary />
        <Budget />
        <Flights />
        <Booking />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border-light">
        <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-smoke-light">
          Pura Vida &middot; May 2026
        </p>
      </footer>
    </>
  )
}
