# Costa Rica Itinerary — Master Build Plan

## What This Is

A personal, interactive travel itinerary for a 12-day Costa Rica trip (May 14–25, 2026). Two people. Post-MCAT celebration. Guanacaste province. The page should feel like opening a coffee-table travel book that also happens to be functional — not a travel agency template, not a Bootstrap accordion, not a generic React demo.

**Live:** https://github.com/hunterborman-cym/costa-rica
**Dev:** `npm install && npm run dev` → `localhost:5173`

---

## What's Already Built

### Foundation
- [x] React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion + Lucide React
- [x] Google Fonts: Playfair Display (display), Outfit (body), JetBrains Mono (mono)
- [x] Color system: volcanic, jungle, celeste, coral, gold, smoke, sand
- [x] Custom hooks: useCountdown, useScrollSpy, useLocalStorage
- [x] 15+ components across data, hooks, and UI layers

### Hero Section
- [x] Full-viewport with Unsplash aerial jungle canopy background
- [x] Dark gradient overlay with radial celeste/coral accents
- [x] SVG noise texture at low opacity
- [x] Staggered fadeUp entrance: eyebrow → title → chips → countdown
- [x] Live countdown timer to May 14 departure (ticking seconds)
- [x] Chip badges: 12 days · Guanacaste · Bull sharks · ~$4,000 · Suzuki Jimny
- [x] Floating celeste particle dots with gentle bob animation

### Navigation
- [x] Sticky frosted-glass nav (backdrop-blur + semi-transparent sand)
- [x] Scroll-spy via IntersectionObserver — active section gets coral underline
- [x] 4 sections: Itinerary · Budget · Flights · Booking
- [x] Horizontally scrollable on mobile

### Itinerary Section
- [x] "Expand all / Collapse all" toggle button
- [x] Horizontal scrollable timeline strip with 12 color-coded day pills
- [x] Clicking a timeline pill opens + scrolls to that day card
- [x] Day cards fade up on scroll (whileInView)

### Day Cards (the core — 12 total)
- [x] Collapsible with CSS grid 0fr→1fr animation (smooth, no jank)
- [x] Header: gradient badge (number + category icon) + date + title + tags + toggle chevron
- [x] Toggle rotates 180° and inverts colors on open
- [x] Category-specific gradients: dive=celeste, adventure=coral, travel=gray, nature=green, flex=gold, relax=brown, cave=dark
- [x] **DriveBanner** — sand box with car icon, bold route, muted time
- [x] **RouteStrip** — horizontal stop-by-stop visualization with colored dots, car icons, drive times between stops
- [x] **MiniTimeline** — vertical timeline with time labels, titles, descriptions, highlight dots for key moments
- [x] **ActivityCard** — inline cards with icon, name, duration, difficulty, cost
- [x] **DiveCard** — dark teal card with underwater photo background, stats grid (tanks/wildlife/level/operator), species pills
- [x] **HighlightCard** — photo cards with Unsplash images, gradient overlay, title + subtitle
- [x] **HotelBadge** — "Sleeping at [hotel name]" with bed icon
- [x] **Callout** — coral warning (Bat Islands weather) and gold backup notes
- [x] **OptionsGrid** — pill grid for flex day options
- [x] **MapEmbed** — Google Maps iframe for every route (driving + boat routes)
- [x] **Google Maps** on every driving day showing actual road routes
- [x] **Boat route maps** for both dive days (harbor → island)

### What Each Day Currently Has
| Day | Route Strip | Timeline | Map | Dive Card | Activities | Photos | Hotel |
|-----|------------|----------|-----|-----------|------------|--------|-------|
| 1 Head to LA | — | MCAT 8am → Drive → Hotel | SD→LAX | — | — | — | LAX Hotel |
| 2 Fly to CR | LAX→IAH→LIR→Bosque | 3 flights + Jimny | LIR→Bosque | — | — | — | Bosque del Mar |
| 3 Catalina Dive | — | — | Coco→Catalina, Bosque→Waldorf | Catalina (manta bg) | — | Catalina, Waldorf | Waldorf |
| 4 Rincón | Waldorf→Leona→Pailas→Waldorf | Morning/Afternoon/Late | Waldorf→Leona→NP | — | La Leona, Las Pailas | Blue Pools, Cave, Mud | Waldorf |
| 5 Bat Islands | — | — | Coco→Bat Islands | Bat Islands (shark bg) | — | — | Waldorf |
| 6 Palo Verde | Waldorf→PV→Waldorf | — | Waldorf→PV | — | Boat Tour | River, Spoonbills | Waldorf |
| 7 Flex Day | — | — | — | — | — | — | Waldorf |
| 8 Caves+Pumas | Waldorf→BH→Pumas→RP | Morning/Mid/Afternoon | Full 4-stop route | — | Cave, Las Pumas | Caves, Pumas, RP | Rio Perdido |
| 9 Rio Perdido | — | — | — | — | Trails, Float, Tubing | Thermal, Canyon | Rio Perdido |
| 10 Tenorio | RP→Tenorio→Heliconias | 4-part day | RP→Tenorio→Heliconias | — | Río Celeste, Birding | Río Celeste, Bridges | Bijagua |
| 11 Fly Home | Bijagua→LIR→LAX→SM | 3-part day | Bijagua→LIR | — | — | — | The Georgian |
| 12 San Diego | — | — | SM→SD | — | — | — | Home |

### Budget Section
- [x] Dark volcanic total bar: "~$4,000" + points breakdown
- [x] SVG donut chart with 5 colored segments + "$3.9k CASH TOTAL" center text
- [x] Legend: Hotels 34%, Flights 18%, Scuba 15%, Activities 19%, Car 13%
- [x] 5 category cards with line items and monospace amounts

### Flights Section
- [x] 2 boarding-pass style cards (not 3 — United legs consolidated)
- [x] United 654/1737: LAX → LIR "via Houston (IAH)" with route line + plane icon
- [x] Alaska 1331: LIR → LAX
- [x] Airline code badges (UA blue, AS dark blue)
- [x] Cost section with dashed border separator
- [x] Subtitle: "Total: $720 for 2 passengers, round trip"

### Booking Checklist
- [x] 7 individual cards with animated checkboxes
- [x] Scale bounce + green fill on check, strikethrough on text
- [x] Río Celeste pre-checked (no booking needed)
- [x] State persists to localStorage across sessions

### Global
- [x] Scroll progress bar (coral, 3px, Framer Motion spring)
- [x] Footer: "PURA VIDA · MAY 2026"
- [x] .gitignore, README.md

---

## What's Next — The Vision

Everything below is what takes this from "good React app" to "the best itinerary page anyone has ever seen." Organized by priority and difficulty.

---

### Phase 6 — Custom SVG Line Art & Illustrations

The idea: hand-drawn-feeling SVG illustrations that are unique to this trip. Not stock icons. Not generic clip art. Custom line art that matches the editorial magazine aesthetic.

#### Per-Day Decorative SVGs (draw on scroll)
Each day card gets a small, elegant SVG illustration in the expanded body. These animate with a stroke-dashoffset draw effect as the card opens.

- [ ] **Day 1 — Pencil + test sheet** — Simple line art of a pencil and a scantron/test bubble sheet. Represents finishing the MCAT. Draws in from left to right.
- [ ] **Day 2 — Airplane arc** — SVG of a plane following a curved dotted path from LAX across to Costa Rica. The plane icon moves along the path as it draws. Small clouds along the way.
- [ ] **Day 3 — Manta ray silhouette** — Elegant single-line manta ray, wings spread. Draws from center outward. Placed behind the dive card as a watermark at ~5% opacity, or as a standalone illustration.
- [ ] **Day 4 — Volcano cross-section** — Side view of a volcano with labeled layers: magma, fumaroles, mud pots, hot springs. Educational/infographic style. Canyon with a tiny waterfall.
- [ ] **Day 5 — Bull shark profile** — Side-profile bull shark in clean line art. Aggressive but beautiful. Maybe with depth markers on the left side (5m, 10m, 15m, 20m) like a dive gauge.
- [ ] **Day 6 — Bird on a branch** — Roseate spoonbill or heron standing in water with reeds. Single continuous line style. Feathers detailed.
- [ ] **Day 7 — Hammock between palms** — Two palm trees with a hammock. A drink with an umbrella. Flex day energy.
- [ ] **Day 8 — Cave stalactites** — Cross-section of a cave with stalactites hanging from the top and a tiny figure with a headlamp climbing a ladder. Plus a jaguar face peeking from behind a rock for Las Pumas.
- [ ] **Day 9 — Person floating on tube** — Top-down view of a person on an inner tube floating down a winding river through a canyon. The river path animates with a flowing dashed stroke. Gentle, lazy, relaxing.
- [ ] **Day 10 — Waterfall with blue tint** — Río Celeste waterfall from the front, with the iconic turquoise pool at the base. A tiny suspension bridge in the background for Heliconias.
- [ ] **Day 11 — Boarding pass** — Stylized line-art boarding pass with "LIR → LAX" and a tiny plane. Torn edge on the right side.
- [ ] **Day 12 — Coastal highway** — A winding coastal road with the ocean on one side and hills on the other. A tiny car (Jimny silhouette) driving home. "Home" written at the end.

#### Implementation Notes
- Each SVG is a React component in `src/components/illustrations/`
- Use `stroke-dasharray` + `stroke-dashoffset` for draw-on animation
- Trigger animation when the day card opens (not on scroll — on expand)
- Keep each SVG under 5KB
- Color palette: use only celeste, coral, volcanic, and smoke at various opacities
- Line weight: 1.5px for main strokes, 0.75px for details

#### Dive Depth Profile SVGs
For Day 3 and Day 5, show a proper dive profile chart — the kind divers actually use.

- [ ] **Catalina Islands depth profile** — Line chart showing depth over time. 2 dives (2-tank). Max depth ~25m. Surface intervals between dives. Label: "Dive 1: Catalina Wall" and "Dive 2: Catalina Pinnacle" or similar.
- [ ] **Bat Islands depth profile** — 3 dives (3-tank). Deeper — max ~30m. Stronger currents indicated by wavy lines. Bull shark silhouettes at depth. More dramatic profile.

Format: SVG with animated draw. X-axis = time, Y-axis = depth (inverted — deeper goes down). Water surface at top with a subtle wave pattern. Small fish/shark icons at notable depths.

#### Marine Life Species Cards
For the dive days, show the expected marine life as illustrated cards.

- [ ] **Species strip** — Horizontal scrollable strip of small SVG animal illustrations. Each is ~60×60px line art with the species name below.
  - Manta ray (wings spread, top-down view)
  - Eagle ray (spotted, side view)
  - Whitetip reef shark (resting on bottom)
  - Bull shark (aggressive profile)
  - Sea turtle (swimming, side view)
  - Moray eel (head poking from coral)
  - Nurse shark (bottom-dwelling)
  - Pufferfish (inflated)

---

### Phase 7 — Scroll-Driven Animations & Micro-Interactions

#### Simple & Polished (do these first)
- [ ] **Budget donut draw animation** — Segments draw in one by one as you scroll to the budget section. Each segment takes 0.4s with 0.15s stagger.
- [ ] **Budget amount counter** — Numbers count up from $0 to their final value (e.g., $1,340) over 1.2s when the card scrolls into view. Use `requestAnimationFrame` with easing.
- [ ] **Flight card stagger** — Cards fade up with 0.15s delay between them as they enter viewport.
- [ ] **Booking progress bar** — Small bar above the checklist showing "3/7 booked" that fills as you check items.
- [ ] **Day card badge pulse** — When a day card first scrolls into view, the badge does a single subtle scale pulse (1.0 → 1.08 → 1.0) to draw attention.
- [ ] **Timeline strip active state** — When you scroll past a day card, the corresponding timeline pill gets a subtle ring/glow to show "you're here."
- [ ] **Smooth expand padding** — When a day card opens, add a slight translateY nudge to the cards below so they feel like they're making room.

#### Ambitious (try these, revert if janky)
- [ ] **Hero parallax** — Background image scrolls at 0.5x speed relative to the page. Content scrolls normally. Creates depth. CSS `background-attachment: fixed` or Framer Motion `useTransform`.
- [ ] **Floating Jimny** — Small SVG Suzuki Jimny icon that appears in the bottom-right corner during drive-heavy days and bounces gently. Like a mascot.
- [ ] **Day card "peek" on hover** — Before opening, hovering a collapsed day card shows a thin 2px strip of the first highlight photo at the bottom edge. Teaser effect.
- [ ] **Confetti on full checklist** — When all 7 booking items are checked, trigger a confetti burst from the checklist section. Use canvas-confetti library or CSS-only. Revert if it feels cheesy.
- [ ] **Donut segment hover** — Hovering a donut segment scales it slightly and shows a tooltip with category name + dollar amount.

#### Absurd (only if everything else is perfect)
- [ ] **3D tilt on badges** — Day card badges tilt toward the cursor on hover using `perspective` + `rotateX/Y`. Subtle — max 5° tilt.
- [ ] **Ambient ocean audio toggle** — Hidden button (maybe in the footer or hero) that plays a soft ocean wave loop. Fade in/out. Must be opt-in, not autoplay.
- [ ] **Dark mode** — Full theme swap. Volcanic becomes the bg, sand becomes text. Every color token inverts. Toggle in nav or hero.
- [ ] **Typing hero title** — "Costa Rica" types out letter by letter on first load, then the italic "Rica" color-shifts to celeste. Only on first visit (sessionStorage flag).

---

### Phase 8 — Maps & Route Visualization Upgrades

The Google Maps iframes work but they're generic. These upgrades make the maps feel custom.

- [ ] **Custom map style** — Use Google Maps JavaScript API (not embed) with a custom map style that matches the page aesthetic — muted greens, sand roads, celeste water. Remove default Google UI clutter.
- [ ] **Animated route line** — When a map scrolls into view, the route line draws itself from origin to destination over 2s. Like watching the GPS plot the route in real time.
- [ ] **Dive site underwater "map"** — For Catalina and Bat Islands, show a custom illustrated underwater cross-section instead of a Google Map. The ocean floor with labeled dive spots, depth markers, and marine life icons placed at their typical depths.
- [ ] **Full trip overview map** — A standalone section (between hero and itinerary, or as a nav item) showing all 10 Costa Rica locations on a single map with numbered pins and colored connecting lines. Clicking a pin opens that day card.
- [ ] **Boat route as dashed line** — The current boat route maps show driving directions (roads). Replace with a proper water route — a curved dashed line over the ocean from harbor to island.

---

### Phase 9 — Visual Polish & Typography

- [ ] **Section dividers** — Between itinerary/budget/flights/booking, add a subtle SVG wave or mountain silhouette divider instead of just whitespace.
- [ ] **Pull quotes** — For the most memorable day descriptions (Bat Islands "the big one", Río Celeste waterfall), render as large italic Playfair Display pull quotes with a thin coral left border.
- [ ] **Day card category strip** — Thin 3px colored bar at the very top of each day card matching the category gradient. Visible even when collapsed.
- [ ] **Photo hover zoom** — Highlight cards already have `group-hover:scale-105` on the image. Add a subtle vignette that intensifies on hover.
- [ ] **Better drive banners** — Add a tiny Suzuki Jimny SVG icon instead of the generic car icon. Make it feel personal.
- [ ] **Monospace flight numbers** — Style "UA 654 / 1737" and "AS 1331" in JetBrains Mono bold, like real boarding passes.
- [ ] **Booking card day badges** — Add small colored dots matching the day's category color next to "Day 3 · Playas del Coco operators."
- [ ] **Budget card category strip** — Thin colored top border on each budget card matching the donut segment color.

---

### Phase 10 — Content Enrichment

- [ ] **Packing list section** — Collapsible section with categorized packing checklist: dive gear, hiking gear, documents, toiletries, electronics. Same localStorage persistence as booking.
- [ ] **Emergency contacts** — Small card with embassy number, nearest hospital, dive emergency (DAN), hotel numbers. Collapsible, always accessible.
- [ ] **Weather widget** — Static (not API) weather expectations for Guanacaste in May. "30°C / 86°F, afternoon thunderstorms possible, green season beginning." With a sun/cloud SVG icon.
- [ ] **Currency converter** — Quick reference: $1 USD ≈ 510 CRC. Maybe a tiny interactive converter.
- [ ] **Spanish phrases** — Small expandable card with essential phrases: "Pura vida", "La cuenta, por favor", "¿Dónde está...?", "Una cerveza, por favor."

---

### Phase 11 — Logos & Branding Assets

- [ ] **Deep Blue Diving logo** — SVG recreation or clean PNG. Place in dive cards and booking items.
- [ ] **Rich Coast Diving logo** — Same treatment.
- [ ] **United Airlines wordmark** — Clean SVG in flight card. Replace the "UA" text badge with the actual United globe logo.
- [ ] **Alaska Airlines wordmark** — Same. Replace "AS" with the Eskimo face logo.
- [ ] **Waldorf Astoria crest** — For the hotel badge on days 3–7.
- [ ] **Rio Perdido logo** — For days 8–9 hotel badge.
- [ ] **Suzuki Jimny illustration** — Side-profile line art SVG of the Jimny. Use in the hero chip, drive banners, and as the floating mascot.

---

### Verified Unsplash Image Library

All URLs verified working (HTTP 200) and visually confirmed:

| Subject | URL |
|---|---|
| Costa Rica jungle canopy (hero) | `photo-1682965742594-2295b987d852` |
| Scuba with manta rays (Catalina dive bg) | `photo-1544552866-fef1d68c69b5` |
| Bull shark underwater (Bat Islands dive bg) | `photo-1560275619-4662e36fa65c` |
| Volcanic mud pots | `photo-1535530992830-e25d07cfa780` |
| Río Celeste waterfall | `photo-1633716898262-0e1469d55bb3` |
| Roseate spoonbill | `photo-1632944683358-956ed87a3cf0` |
| Limestone cave stalactites | `photo-1572772789959-3e9e7036a18a` |
| Thermal river canyon | `photo-1476466606128-c9171c01d941` |
| Hanging bridges rainforest | `photo-1611223157314-18a252c20228` |
| Suzuki Jimny tropical | `photo-1675228205797-12a79151cd32` |

Base URL: `https://images.unsplash.com/{id}?w={width}&q=80`

---

## Rules

1. **Start reasonable, get absurd.** Nail the basics before adding confetti.
2. **If an absurd feature doesn't look perfect → revert.** Don't ship broken. Git makes this easy.
3. **Perfection on what's there > subpar new things.** A polished donut chart beats a janky 3D globe.
4. **Test in Chrome with screenshots.** Every change gets verified visually.
5. **Commit often.** Every milestone gets pushed to GitHub.
6. **The day card content is king.** Everything else (hero, nav, budget) exists to serve the itinerary. If time is limited, spend it on making day cards richer.
