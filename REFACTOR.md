# Day Card Refactor Plan

## What's wrong now
- Everything is stacked vertically in one narrow column — wall of content
- Google Maps iframes are ugly (generic Google UI, "More options" link)
- Timeline takes too much vertical space
- No visual hierarchy — everything same width/weight
- Route strips are dinky
- No layout variety — everything left-aligned, no side-by-side
- Too many small components creating visual noise
- Feels like a developer built it, not a designer

## The new design

### Principle: Magazine spread, not data dump
Each expanded day card should feel like opening a page in a travel magazine. Lead with a dramatic photo, then organized content.

### Layout changes

1. **Hero image banner** — When a day has highlight photos, show the FIRST one as a full-width banner at the top of the expanded content (height 200px, object-cover). This immediately adds visual drama.

2. **Two-column layout for details** — Instead of stacking everything vertically:
   - Left (60%): Description text, timeline, warnings
   - Right (40%): Quick facts sidebar (drive time, activities, cost, hotel)

3. **Remove Google Maps iframes** — Replace with a simple styled link/button: "View route on Google Maps →" that opens in a new tab. The iframes are ugly and slow.

4. **Consolidate route strip + drive banner** — Merge into one cleaner component

5. **Bigger highlight photos** — Full-width grid, taller cards (160px not 112px)

6. **Simplify timeline** — Horizontal or more compact format for short timelines. Only use vertical timeline for 4+ events.

7. **Better dive card** — Make it wider, less cramped. Species as a horizontal scroll strip.

8. **Remove TripStats grid** — It's visual noise. The hero chips already have the key stats.

9. **Remove Jimny card + Weather badge** — Move car info into Day 2 card, weather into a subtle note in the hero or nav.

## Execution order
1. Remove Maps iframes — replace with link buttons
2. Add hero image banners to day cards
3. Two-column layout for day card body
4. Clean up visual noise (remove TripStats, merge Jimny/Weather into content)
5. Bigger photos
6. Test and iterate
