# Expert Code Review — OuterBuzz

Critical analysis of the prior audit. Each finding is re-evaluated and either confirmed,
corrected, or upgraded with a better solution. Implementing top-to-bottom in this order.

---

## CONFIRMED — fixing now

### 1. Journal nav link is dead [HIGH]
**Original audit:** correct.  
`/#journal` is in `lib/site.ts`, Navbar, and Footer — but `Journal` was never imported in
`app/page.tsx`. Dead anchor with nowhere to land.

**Better fix than the audit proposed:**  
The audit says "remove it or restore a route." Removing is a feature regression — the Journal
component already exists (`components/Journal.tsx`) with three articles and the correct
`id="journal"`. The fix is one import line in `app/page.tsx`. Do that, not a full `/journal` route that doesn't exist yet.

---

### 2. CTA section has the same CSS-sticky/Lenis bug as VideoShowreel [HIGH]
**Original audit: MISSED THIS ENTIRELY.**  
`CTA.tsx` uses `position: sticky` inside a `height: 220vh` wrapper — identical pattern to the
VideoShowreel that broke. Lenis applies a CSS transform to the scroll container, which creates a
new stacking context and silently kills `position: sticky`. On a real device this scroll
animation either doesn't pin or jumps.

**Fix:** Same treatment as VideoShowreel — swap CSS sticky for GSAP `pin: true` on the inner
container.

---

### 3. Cursor uses querySelectorAll on mount — misses all dynamically rendered links [HIGH]
**Original audit:** correct on the symptom, incomplete on the fix.  
The audit says "switch to event delegation." That's the right direction but it missed the
accessibility half: `cursor: none` is applied globally via CSS on `body`, `a`, and `button`.
Touch users, keyboard users, and `pointer: coarse` devices (phones, tablets) should never see a
custom cursor or have their native pointer hidden.

**Best fix (two parts):**  
1. In `globals.css` — gate `cursor: none` behind `@media (pointer: fine)` so it only fires on
   real mouse devices.
2. In `Cursor.tsx` — replace `querySelectorAll` with a single `document` event delegation listener
   (`mouseover` + `event.target.closest('a, button, [data-cursor]')`). Works for any element
   added after mount, including SPA-navigated pages.

---

### 4. Footer newsletter form is a fake interaction [MEDIUM-HIGH]
**Original audit:** correct.  
A form that does nothing destroys trust more than no form at all. Replace with a mailto CTA.

---

### 5. Work listing page autoplays videos on every card [MEDIUM-HIGH]
**Original audit:** correct.  
Three simultaneous autoplaying full-resolution videos on a listing page is a mobile network and
CPU budget problem. Fix: add `poster` attribute to each video and use `IntersectionObserver` to
start playback only when the card enters the viewport.

---

### 6. Hero loads 15 remote images with a 250vw×250vh parallax layer [HIGH]
**Original audit:** correct.  
15 full-res Unsplash images on first load attacks LCP and bandwidth. The parallax layer is also
`250vw × 250vh` which forces layout in a massive compositing layer. Reduce to 9 images (3×3
grid, same visual density), remove the 5th row entirely. Non-priority images already get lazy
loading via Next.js Image defaults.

---

### 7. Dead code — confirmed [MEDIUM]
After a grep across the entire codebase, these files are imported nowhere:
- `components/Services.tsx` — superceded by `ServicesGrid.tsx`
- `components/Team.tsx` — never added to any page
- `components/MarqueeBanner.tsx` — never used
- `hooks/useGSAP.ts` — written but never consumed

**Delete them. Do not archive.** Version control is the archive.

---

## CORRECTED — original audit got these wrong

### 8. `app/actions.ts` is NOT dead code [MEDIUM]
**Original audit called it "dead code" — incorrect.**  
`actions.ts` is a fully implemented, well-typed Next.js Server Action that builds a contact form
mailto draft with validation. It is simply disconnected from `ContactPage.tsx` because the
contact page currently only shows office info cards. The action is ready infrastructure waiting to
be wired to a form. Keep it. Wire it when the contact form is built.

---

### 9. Lenis does NOT need to be "opt-in per route" [HIGH]
**Original audit proposed moving Lenis out of layout — over-engineering at this stage.**  
Lenis in layout is fine. The actual cost is negligible on simple inner pages (About, Contact) —
it adds smooth wheel scrolling, nothing more. The ScrollTrigger ticker overhead only fires when
ScrollTrigger instances are active, and every component already uses `gsap.context().revert()`
on unmount.

The real problem is not Lenis's position in the tree — it is that CTA.tsx uses CSS sticky which
Lenis silently breaks (see Finding #2). Fix that, and the "scroll weirdness" the audit detected
disappears.

---

### 10. Inline styles — do not migrate now [MEDIUM]
**Original audit recommends migrating homepage sections to CSS Modules.**  
This is correct long-term but wrong priority now. Migration with no functional benefit is churn
that slows down feature work. The right time to convert a component is when you are editing it for
another reason. Do not create a migration sprint for its own sake.

---

## ALREADY GOOD — no changes

- **Route architecture** — `/about`, `/contact`, `/work`, `/work/[slug]` correct
- **`lib/data/projects.ts`** — proper content/code separation
- **`components/pages/*` + CSS Modules** — right long-term pattern
- **`app/actions.ts`** — clean Server Action, keep
- **`lib/site.ts` as nav source of truth** — correct, Navbar now imports from it
- **TypeScript** — zero errors after last session

---

## Quality gate — add `typecheck` script [LOW-MEDIUM]

```json
"scripts": {
  "typecheck": "tsc --noEmit",
  "check": "npm run typecheck && npm run lint && npm run build"
}
```

---

## Implementation order

1. Add Journal to homepage (one line)
2. Fix CTA.tsx — CSS sticky → GSAP pin
3. Fix Cursor.tsx — event delegation + pointer:fine CSS gate
4. Footer newsletter → mailto CTA
5. Hero — reduce to 9 images
6. Work listing — Intersection Observer for videos
7. Delete 4 dead files
8. Add typecheck script
