# Costa Rica Itinerary — Full Build Spec

## Trip Overview

12-day Costa Rica trip, May 14–25, 2026. Two people, based out of Guanacaste province. Starts post-MCAT. Ends in Santa Monica. This page is a personal travel itinerary that should feel like a high-end editorial travel magazine crossed with a functional trip planner — not a generic template, not a Bootstrap accordion, not a travel agency site.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React + Vite** | Fast dev, HMR, modern bundling |
| Styling | **Tailwind CSS v3** | Utility-first, purge = small bundle |
| Animations | **Framer Motion** | Spring physics, layout animations, scroll-triggered |
| Icons | **Lucide React** | Clean, consistent SVG icons |
| Fonts | **Google Fonts** (via @import) | Playfair Display, Outfit, JetBrains Mono |
| State | React `useState` + `useLocalStorage` hook | Checklist persistence |
| Build | **Vite** | Sub-second HMR |

No Next.js needed — this is a static personal page, not a server-side app.

---

## Project Structure

```
costa-rica/
├── index.html                  # Vite entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx                # React root, mount
│   ├── App.jsx                 # Layout shell: ScrollProgress + Nav + sections
│   ├── index.css               # Tailwind directives + custom CSS vars + keyframes
│   │
│   ├── data/
│   │   ├── days.js             # All 12 day objects (title, date, type, drive, body, tags)
│   │   ├── budget.js           # Budget categories + line items
│   │   ├── flights.js          # Flight records
│   │   └── booking.js          # Booking checklist items
│   │
│   ├── components/
│   │   ├── ScrollProgress.jsx  # Thin coral progress bar pinned to top
│   │   ├── Hero.jsx            # Full-viewport hero + countdown timer
│   │   ├── Nav.jsx             # Sticky frosted glass nav with scroll-spy
│   │   ├── TimelineStrip.jsx   # Horizontal 12-day visual journey map
│   │   ├── Itinerary.jsx       # Section wrapper + day cards list
│   │   ├── DayCard.jsx         # Collapsible day card with Framer Motion
│   │   ├── DriveBanner.jsx     # Sand-colored drive time indicator
│   │   ├── Callout.jsx         # Coral warning / gold backup callout box
│   │   ├── OptionsGrid.jsx     # Flex day options pill grid
│   │   ├── Budget.jsx          # Section wrapper + total bar + donut chart
│   │   ├── BudgetCard.jsx      # Individual category card with line items
│   │   ├── BudgetDonut.jsx     # SVG donut chart (hotels/flights/scuba/activities/car)
│   │   ├── Flights.jsx         # Boarding-pass style flight cards
│   │   ├── Booking.jsx         # Section wrapper
│   │   └── BookingItem.jsx     # Individual checklist card with localStorage
│   │
│   └── hooks/
│       ├── useScrollSpy.js     # IntersectionObserver → active nav section
│       ├── useLocalStorage.js  # Persist checklist state
│       └── useCountdown.js     # Live countdown to May 14
```

---

## Color Tokens (Tailwind extend)

```js
volcanic: '#121a14'
jungle: '#1f3d2a'
jungle-mid: '#2d5a3d'
celeste: '#4db8c9'
coral: '#d96a4f'
gold: '#b8942f'
smoke: '#7a7a88'
smoke-light: '#a0a0ac'
sand: '#f6f2eb'
sand-warm: '#ede7db'
border: '#ddd7cc'
border-light: '#eae5dc'
```

---

## Font Stack

```
Display:  'Playfair Display', serif    → section titles, hero h1, day titles
Body:     'Outfit', sans-serif         → all body text, UI labels
Mono:     'JetBrains Mono', monospace  → dates, codes, amounts, nav links
```

---

## Component Specs

### `ScrollProgress`
- `position: fixed; top: 0; left: 0; z-index: 9999`
- 3px tall coral bar
- Width driven by `window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100`
- Framer Motion `scaleX` on a `motion.div` with `transformOrigin: left`

### `Hero`
- `min-h-screen` dark jungle gradient (`#0a1a10 → #142a1c → #1f3d2a → #2a5538`)
- Radial gradient accents: celeste top-right, coral bottom-left (low opacity)
- SVG noise texture overlay at 3% opacity
- Content pinned to bottom-left: eyebrow → h1 → chips → countdown
- **Countdown**: uses `useCountdown` hook, shows `DD days HH:MM:SS` until May 14, 2026 at 06:00 AM PT
- Countdown displayed in a dark glass pill with monospace digits
- **Chip badges**: 12 days · Guanacaste · Bull sharks · ~$4,000 · Suzuki Jimny
- Framer Motion `staggerChildren` with `fadeUp` variants (0.2s delay between each)

### `Nav`
- `position: sticky; top: 0; z-index: 100`
- `backdrop-filter: blur(24px)` + sand at 88% opacity
- Links: Itinerary · Budget · Flights · Booking
- Active state: coral 2px border-bottom
- Scroll-spy via `useScrollSpy` hook
- Mobile: horizontally scrollable, no scrollbar

### `TimelineStrip`
- Horizontal scrollable strip of 12 day pills between nav and itinerary
- Each pill: day number + date + category color dot + short label
- Current/upcoming day highlighted differently
- Clicking a pill scrolls to and opens that day card
- Color-coded by category (dive = celeste, adventure = coral, travel = gray, nature = green, flex = gold, relax = brown, cave = dark)

### `DayCard`
- Framer Motion `AnimatePresence` for body expand/collapse
- Header: badge + date + title + tags + toggle
- Badge: 50×50 rounded square, gradient per category, Playfair Display number
- **Category icons** (Lucide): Anchor (dive), Mountain (adventure/hike), Plane (travel), Bird (nature), Sparkles (flex), Waves (relax), Gem (cave)
- Body expands with `motion.div` height animation, spring physics
- `DriveBanner` rendered if day has drive data
- Warning callouts in coral, backup notes in gold
- Flex day renders `OptionsGrid`

### `DriveBanner`
- Sand background, car icon (Lucide `Car`), route text bold + muted time
- `border-radius: 10px`, subtle border

### `Budget`
- Total bar: dark volcanic card, large serif "$~4,000", points on right
- `BudgetDonut` SVG chart: 5-segment donut, each segment = category % of total
- Legend below donut
- Grid of `BudgetCard` components (Hotels · Flights · Scuba · Activities · Car)

### `BudgetDonut`
- Pure SVG, `viewBox="0 0 200 200"`, `cx=100 cy=100 r=70`
- Segments: Hotels 33%, Flights 18%, Scuba 15%, Activities 19%, Car 13%
- Hover state highlights segment + shows label + amount
- Framer Motion `pathLength` 0→1 draw animation on mount

### `Flights`
- Boarding-pass style cards (not a table)
- Each card: airline code badge + flight number + route (FROM → TO) with arrow + cost
- Dotted separator between left (departure) and right (cost) sections
- `border-radius: 16px`, white bg, subtle shadow
- Torn-edge decorative notch on left and right edges (SVG clip-path or border-radius trick)

### `BookingItem`
- Individual white card per booking item, shadow
- Checkbox with Framer Motion scale bounce on check
- Checked state: strikethrough text, muted colors, green filled checkbox
- State persisted to `localStorage` via `useLocalStorage`
- Río Celeste pre-checked (no booking needed)

---

## Data Shape Examples

### Day object (`src/data/days.js`)
```js
{
  id: 1,
  num: 1,
  date: 'Wed, May 14',
  title: 'Head to LA',
  type: 'travel',          // drives badge gradient + category icon
  tags: ['Travel'],
  drive: null,             // or { route: 'LIR → Bosque del Mar', time: '~30 min' }
  body: [
    { type: 'p', text: 'Done with the MCAT...' },
  ],
}
```

### Budget object (`src/data/budget.js`)
```js
{
  category: 'Hotels',
  amount: '$1,340',
  note: '+ points for Waldorf & Georgian',
  color: '#4db8c9',        // for donut segment
  items: [
    { label: 'LAX airport hotel', amount: '$120' },
    ...
  ]
}
```

---

## Animations

| Element | Animation | Library |
|---|---|---|
| Hero content | staggered fadeUp (0.8s, cascading 0.2s delays) | Framer Motion |
| Day card body | height 0→auto, opacity 0→1, spring | Framer Motion |
| Toggle icon | rotate 0→180°, bg volcanic on open | Framer Motion |
| Checklist checkbox | scale bounce + bg fill | Framer Motion |
| Budget donut | pathLength 0→1 draw on scroll enter | Framer Motion |
| Scroll progress | scaleX 0→1 | Framer Motion |
| Timeline pills | stagger on mount | Framer Motion |
| Boarding pass | fadeUp stagger | Framer Motion |

---

## Drive Times Reference

All in Suzuki Jimny on Guanacaste roads:

| Route | Time |
|---|---|
| LIR → Hotel Bosque del Mar | ~30 min |
| Bosque del Mar → Waldorf Astoria | ~10 min |
| Waldorf → Rincón de la Vieja (Curubandé) | ~1 hr 30 min each way |
| Waldorf → Palo Verde | ~1 hr 20 min each way |
| Waldorf → Barra Honda | ~1 hr 30 min |
| Barra Honda → Las Pumas | ~1 hr |
| Las Pumas → Rio Perdido | ~1 hr |
| Waldorf → Rio Perdido (direct) | ~1 hr 40 min |
| Rio Perdido → Tenorio Volcano | ~1 hr 30 min |
| Bijagua area → LIR | ~1 hr 20 min |

---

## Full Itinerary Content

### Day 1 — Wed, May 14 · Travel
Done with the MCAT. Drive to LA, check into the airport hotel, sleep. Tomorrow the real trip begins.

### Day 2 — Thu, May 15 · Travel
**Drive:** LIR → Hotel Bosque del Mar (~30 min)
Two flights through Houston (UA 654 LAX→IAH, UA 1737 IAH→LIR), land in Liberia by evening. Pick up the Suzuki Jimny. Drive to Hotel Bosque del Mar near Playas del Coco. First night on the Pacific coast.

### Day 3 — Fri, May 16 · Dive
**Drive:** Bosque del Mar → Waldorf (~10 min, after the dive)
Six-hour, two-tank dive at the Catalina Islands. May is still in the window for giant manta rays, plus eagle rays and whitetip reef sharks. After the dive, transfer to the Waldorf Astoria Punta Cacique — home base for the next five nights. Dinner at the hotel.

### Day 4 — Sat, May 17 · Adventure / Hike
**Drive:** Waldorf → Curubandé (~1 hr 30 min each way)
Morning: La Leona combo — volcanic canyons, caves, sulfur-blue river pools, waterfall inside a cave. Afternoon: 20-min drive to Las Pailas loop in the national park — mud pots, fumaroles, volcanic craters, Rio Negro Hot Springs.

### Day 5 — Sun, May 18 · Dive (the big one)
Eight-hour day, three-tank dive at Islas Murciélagos — the bull shark site. Strong currents, big animals. Just dinner and sleep after.
**Warning:** Weather-dependent in May. Strong currents — advanced dive. Book early with Deep Blue or Rich Coast.

### Day 6 — Mon, May 19 · Nature / Wildlife
**Drive:** Waldorf → Palo Verde (~1 hr 20 min each way)
8am boat tour through the Palo Verde wetlands on the Tempisque River. Roseate spoonbills, jabirus, herons, crocodiles, iguanas. Chill afternoon back at the Waldorf.

### Day 7 — Tue, May 20 · Flex Day
Buffer day after six straight days of going hard. Decide Sunday night after Bat Islands.
Options: Horseback riding (Papagayo Peninsula) · Sunset catamaran (snorkeling + open bar) · Diamante Eco Park · Third dive (local reef) · ATV tour to hidden beaches · Pool, beach, spa

### Day 8 — Wed, May 21 · Cave / Wildlife
**Drive:** Waldorf → Barra Honda (~1h30) → Las Pumas (~1h) → Rio Perdido (~1h)
Morning cave descent at Barra Honda NP — ladders, headlamps, limestone formations. Quick stop at Las Pumas Rescue Center in Cañas — jaguars, ocelots, margays. Drive to Rio Perdido, relax in pool before dinner.
**Backup:** Llanos de Cortés waterfall, Las Pumas, extra time at Rio Perdido.

### Day 9 — Thu, May 22 · Relax
Sleep in. Canyon trails, thermal river float, tubing, hot springs — just enjoy the Rio Perdido property. Last full day before heading home.

### Day 10 — Fri, May 23 · Adventure / Hike / Birding
**Drive:** Rio Perdido → Tenorio (~1 hr 30 min)
Tenorio Volcano NP: Río Celeste waterfall, Laguna Azul, Los Borbollones, Los Teñideros. Midday lunch break. 2:00 PM: Heliconias Hanging Bridges with private birding guide.

### Day 11 — Sat, May 24 · Travel
**Drive:** Bijagua area → LIR (~1 hr 20 min)
Drop off Jimny, fly Liberia → LA (AS 1331). Check into The Georgian in Santa Monica. Dinner with Brittany.

### Day 12 — Sun, May 25 · Travel
Morning drive down the coast. Home.

---

## Budget

### Total: ~$4,000 + 510K Hilton points + 6K Hyatt points

### Hotels — $1,340 + points
| Night | Hotel | Cost |
|---|---|---|
| May 14 | LAX airport hotel | $120 |
| May 15 | Hotel Bosque del Mar, Playas del Coco | $230 |
| May 16–20 | Waldorf Astoria Punta Cacique (5 nights) | 510,000 Hilton Points |
| May 21–23 | Rio Perdido (3 nights) | $750 |
| May 24 | The Georgian, Santa Monica | $240 + 6,000 Hyatt |

### Flights — $720
| Flight | Route | Cost (for 2) |
|---|---|---|
| UA 654 | LAX → Houston | $360 (same ticket) |
| UA 1737 | Houston → Liberia | — |
| AS 1331 | Liberia → Los Angeles | $360 |

### Scuba — $600
| Day | Site | Duration | Cost |
|---|---|---|---|
| May 16 | Catalina Islands | ~6 hrs, 2-tank | $270 |
| May 18 | Bat Islands (Islas Murciélagos) | ~8 hrs, 3-tank | $330 |

### Activities — $740
| Activity | Cost |
|---|---|
| Rincón de la Vieja (La Leona + volcanic trail) | $200 |
| Palo Verde boat tour | $200 |
| Bijagua birding + Río Celeste | $200 |
| Rio Perdido tubing | $140 |

### Car — $500
| Item | Cost |
|---|---|
| Suzuki Jimny rental (May 15–24) | $350 |
| Parking | $150 |

---

## Book in Advance

1. **Catalina Islands dive** — Deep Blue Diving, Rich Coast Diving, or Summer-Salt in Playas del Coco · Day 3
2. **Bat Islands dive** — Same operators; book early, weather-dependent in May · Day 5 · Advanced
3. **La Leona combo** — Reservation required via leonawaterfall.com · Day 4
4. **Palo Verde boat tour** — Papagayo Tours or similar · Day 6 · 8am
5. **Barra Honda cave descent** — Guided tours through the park · Day 8
6. **Bijagua birding guide** — Arrange through Rio Perdido concierge · Day 10 · 2pm
7. **Río Celeste hike** — No reservation needed, just arrive early · Day 10 ✓

---

## Place IDs (Google Maps)

| Location | Place ID |
|---|---|
| Liberia Airport (LIR) | `ChIJQZQl7CN-dY8RrKHqXmXX7kY` |
| Hotel Bosque del Mar | `ChIJ6XOe5R4qno8RM10SjyMNOvs` |
| Waldorf Astoria Punta Cacique | `ChIJbY8VN-wpno8RNTKUCGHGZnM` |
| Rincón de la Vieja NP | `ChIJQ-6xNhZ9dY8RkFBpXUPJYBo` |
| Palo Verde NP | `ChIJq6qqqmrDn48Rf_krkOKGUvE` |
| Barra Honda NP | `ChIJp2l7cAW_n48RmPG2ibMHnnY` |
| Las Pumas Rescue Center | `ChIJs-WJRN7kn48Ru78mOJ-deT4` |
| Rio Perdido | `ChIJ3ajOzVpfdY8Rdq4ji594qnM` |
| Tenorio Volcano NP | `ChIJB8xHJftTdY8RU912ppUhqbQ` |
| Heliconias Hanging Bridges | `ChIJE6vVZ9JLdY8REWxtbel-KI4` |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `< 640px` | Hero 85vh, hide day tags, 2-col options, single-col budget grid, smaller nav padding |
| `640–1024px` | Full features, tighter layout |
| `> 1024px` | Max-width 920px centered, full experience |

---

## Build Progress

### Phase 1 — Scaffold & Foundation
- [x] `package.json` + `vite.config.js` + `tailwind.config.js` + `postcss.config.js`
- [x] `index.html` — Vite entry point with font preconnect
- [x] `src/index.css` — Tailwind directives, CSS vars, keyframes, noise overlay, scrollbar
- [x] `src/main.jsx` — React root mount
- [x] `npm install` — all deps installed
- [x] Vite dev server running at `localhost:5173`

### Phase 2 — Data & Hooks
- [x] `src/data/days.js` — all 12 day objects with body blocks
- [x] `src/data/budget.js` — 5 categories with line items + donut data
- [x] `src/data/flights.js` — 3 flight records with boarding pass data
- [x] `src/data/booking.js` — 7 checklist items
- [x] `src/hooks/useCountdown.js` — live countdown to May 14
- [x] `src/hooks/useScrollSpy.js` — IntersectionObserver nav highlighting
- [x] `src/hooks/useLocalStorage.js` — persist checklist state

### Phase 3 — Core Components (Reasonable)
- [x] `ScrollProgress` — coral 3px bar at top, Framer Motion spring
- [x] `Hero` — full viewport, jungle gradient, countdown timer, chips, fadeUp stagger
- [x] `Nav` — sticky frosted glass, scroll-spy active states
- [x] `TimelineStrip` — horizontal scrollable 12-day pill bar, color-coded
- [x] `DayCard` — expandable with Framer Motion AnimatePresence
- [x] `DriveBanner` — sand box with car icon, route + time
- [x] `Callout` — coral warning + gold backup variants
- [x] `OptionsGrid` — flex day pill grid
- [x] `Itinerary` — section wrapper, day card state management
- [x] `Budget` — total bar + donut chart + category grid
- [x] `BudgetCard` — individual category with line items
- [x] `BudgetDonut` — SVG donut with draw animation
- [x] `Flights` — boarding-pass style cards with notch effect
- [x] `BookingItem` — checkbox with scale bounce + localStorage
- [x] `Booking` — section wrapper with persist
- [x] `App.jsx` — all sections wired together

### Phase 4 — Polish & Bug Fixes
- [x] Fix flights boarding pass overflow-hidden clipping issue
- [x] Fix day card expand — replaced Framer Motion height:auto with CSS grid 0fr→1fr
- [x] Fix flights whileInView not triggering — removed scroll animation, cards always visible
- [x] Test day card expand/collapse animations work smoothly
- [x] Verify scroll-spy nav highlighting all 4 sections
- [x] Test booking checklist localStorage persistence — works, green checkbox + strikethrough
- [ ] Mobile responsive testing (< 640px)
- [x] Write README.md
- [x] Add .gitignore

### Phase 5 — Level Up (Getting Ambitious)
- [x] Expand all / collapse all button for day cards
- [x] Day card open on click from timeline strip + scroll-to
- [x] Scroll-triggered entrance animations on day cards (whileInView fadeUp)
- [x] Floating particle effect on hero
- [ ] Add Unsplash hero background image (Costa Rica aerial)
- [ ] Budget donut hover tooltip with category name + amount

### Phase 5b — Rich Day Card Content (THE MOST IMPORTANT PART)
The expanded day cards are the core of the itinerary. Each needs to feel like a mini page.

- [ ] **Route visualization strip** — for multi-stop days (Day 2, 3, 8, 10, 11), show a visual step-by-step route: location pins connected by a line, with drive times between each
- [ ] **Activity info cards** — small inline cards showing: duration, difficulty, cost, and type icon for each activity
- [ ] **Highlight photos** — styled image-like gradient cards with location names for key spots (Catalina Islands, Bat Islands, Río Celeste, etc.)
- [ ] **Mini timeline** — for multi-part days (Day 4: morning La Leona + afternoon Las Pailas; Day 8: caves → Las Pumas → Rio Perdido), show a vertical timeline with time slots
- [ ] **Dive detail cards** — for Day 3 and Day 5, show tank count, expected wildlife, current strength, operator info
- [ ] **Hotel indicator** — show where you're sleeping that night, with a bed icon
- [ ] **Weather/season badge** — "Green season transition · May" with a small weather icon
- [x] **Google Maps embed** — iframe for each day's route using Maps Embed API
- [x] **MCAT context** — Day 1 now starts at 8am in San Diego, includes MCAT exam timeline
- [x] **Boat routes** — Dive days show harbor-to-island boat routes on map
- [x] **Flights consolidated** — 2 cards instead of 3 (United legs combined, shows "via Houston")
- [x] **Budget donut fixed** — Rewritten with proper SVG stroke-dasharray math, center text

### Phase 5c — High-Quality Images & Assets
- [ ] **Unsplash images** — Hero background (Costa Rica aerial), and per-day photos for highlights
- [ ] **Dive operator logos** — Deep Blue Diving, Rich Coast Diving SVG logos
- [ ] **Airline logos** — United, Alaska Airlines logos in flight cards
- [ ] **Hotel photos** — Key hotels (Waldorf Astoria, Rio Perdido, The Georgian)
- [ ] **Suzuki Jimny** — Photo or illustration of the rental car
- [ ] **Image asset library** — Organize all images in `src/assets/` directory

### Ongoing — GitHub Saves
- [x] Initial commit + push — https://github.com/hunterborman-cym/costa-rica
- [ ] Commit after rich day cards + maps
- [ ] Commit after images + final polish

### Phase 6 — Going Absurd (Try, Keep If Perfect, Revert If Not)
- [ ] Particle/firefly effect floating over hero (canvas or CSS)
- [ ] Full page scroll-driven progress ring in bottom-right corner
- [ ] 3D tilt effect on day card badges on hover
- [ ] Confetti explosion when all booking items are checked
- [ ] Ambient wave audio toggle (ocean sounds) as easter egg
- [ ] Day/night mode toggle with full theme swap
- [ ] Animated SVG route map connecting all locations
- [ ] Typing animation on hero title on first load
- [ ] Parallax depth layers in hero (mountains, trees, sky)

### Phase 7 — Ship
- [x] Write README.md with setup instructions
- [x] `git init` + `git add` + `git commit`
- [x] Push to GitHub — https://github.com/hunterborman-cym/costa-rica

### Rules
- Start reasonable, get absurd.
- If an absurd feature doesn't look perfect → revert it, don't ship broken.
- Perfection on what's there > subpar things that don't work out.
- Save to GitHub once the reasonable version is polished.
