---
target: Home page (src/app/page.tsx)
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-11T15-39-46Z
slug: src-app-page-tsx
---
Method: dual-agent (A: a64fa39c8d9024aea · B: a29ba5d030ceae2e4)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Header only toggles transparency on scroll; no active-section/progress indication across 12 sections |
| 2 | Match System / Real World | 4 | Domain vocabulary, org names, career data are precise |
| 3 | User Control and Freedom | 3 | Mobile menu closes cleanly; no back-to-top on a long single page |
| 4 | Consistency and Standards | 2 | Metrics `rounded-[22px]` and Speaking `rounded-2xl` contradict the brief's "no rounded SaaS cards" rule that every other surface follows |
| 5 | Error Prevention | 2 | "Ver produção acadêmica completa" links to `href="#"` — a dead link shipped live |
| 6 | Recognition Rather Than Recall | 3 | Section labels + consistent heading hierarchy, self-explanatory |
| 7 | Flexibility and Efficiency | n/a | Single-scroll marketing page |
| 8 | Aesthetic and Minimalist Design | 4 | Strong editorial restraint, disciplined type scale |
| 9 | Error Recovery | 1 | "FOTO — SUBSTITUIR" placeholder copy renders live to real visitors |
| 10 | Help and Documentation | n/a | Not applicable to this surface |
| **Total** | | **21/32** | **66% — Acceptable** |

## Design Specificity Verdict

**LLM assessment**: The page reads as genuinely authored for this person, not a swapped template — the number-forward Metrics section, the mint-highlighted "current role" in the Career timeline, the "0X" pillar numbering, and the recurring angular clip-path motif all show real intent tuned to an academic-executive register. But Science's patent panel, Projects' "Banco de Dentes" panel, and Speaking's Orlando image all resolve to the *same* angular clip-path treatment — three moments that are starting to read as one reusable block deployed three times rather than three distinct compositional peaks.

**Deterministic scan**: CLI static detector (`detect.mjs` over `src/`) returned **0 findings, exit 0** — clean at the markup level. The live browser overlay (rendered DOM/computed-style detector) flagged **42 anti-pattern instances**, overwhelmingly one rule: `ai-color-palette` firing on the site's own mint (#71D0B5) accent as "cyan neon text/gradient on dark background" (~35 of 42 hits). That's very likely a **false-positive cluster** — mint-on-near-black is the explicitly approved brand palette, not an AI-generated neon cliché, and the brief instructs preserving it. The remaining hits are lower-volume and more credible:
- `all-caps-body` (5 hits, on the uppercase eyebrow/label text) — likely intentional editorial micro-labels, but worth a quick legibility check at those specific char-counts (up to 59 chars uppercase in one run).
- `radial-spotlight-glow` (1 hit) — the mint glow behind "12" in Metrics. Deliberate, single occurrence, low risk.
- `clipped-overflow-container` (4 hits) — `overflow-hidden` wrappers in the photo-card/placeholder components that clip positioned children. This is the same root cause as Assessment A's focus-visible gap: an overflow-hidden ancestor can clip a focus ring right off a keyboard-focused child.
- `wide-tracking` (1 hit) — nav letter-spacing, cosmetic.

No overlay-vs-detector conflict on substance once the cyan/mint miscall is discounted; they corroborate on the clipped-container issue.

## Overall Impression

The base craft is genuinely good — restrained palette, confident type scale, a couple of real visual peaks (Metrics, the Orlando photo in Palestras). But three things undercut the "executive precision" the brief is chasing: placeholder dev-copy shipped live on the page, an interaction bug that hides the richest content block (Leadership pillar descriptions) from keyboard/non-hover users, and outbound links that go to generic platform homepages instead of Michel's actual profiles. None of these are visual-taste problems — they're finishing problems, which is good news: they're fast to fix and will move the score more than another aesthetic pass would.

## What's Working

- **Metrics ("Gestão em Números")** — asymmetric 45/55 grid, one number scaled up to 180px with count-up + a subtle SVG performance trace behind it. Feels bespoke, not templated.
- **Career ("Trajetória")** — a horizontally divided timeline with the current role in mint, no dot-and-line cliché widget. Restrained and reads instantly.
- **Speaking's Orlando moment** — the angled top-edge clip-path echoing the Hero's diagonal is a real cross-section callback; makes the site feel like one system, not stitched sections.

## Priority Issues

**[P0] Placeholder dev-copy ships live on the page**
- **Why it matters**: `PhotoPlaceholder` renders the literal string "FOTO — SUBSTITUIR" directly into the Speaking section (`src/components/sections/Speaking.tsx:79`, via `src/components/ui/PhotoPlaceholder.tsx`). On a site whose entire premise is executive polish, an internal production note visible to real visitors reads as broken, not "coming soon."
- **Fix**: Drop the visible label entirely (the gradient/texture/mark already signals "placeholder" to *you*; visitors don't need the memo) or restyle it as a quiet, on-brand "photo in curadoria" microcopy instead of a shouty dev instruction.
- **Suggested command**: `/impeccable polish`

**[P0] Leadership pillar descriptions are invisible to keyboard/non-hover users**
- **Why it matters**: `src/components/sections/Leadership.tsx` reveals descriptions on desktop via CSS `group-hover` only (lines ~63-67), completely decoupled from the `openIndex` state the click handler sets — and the button is styled `md:cursor-default` (line 36), removing even the pointer-interactivity cue. Result: the single richest content block in "Liderança & Gestão" — the six pillar descriptions — cannot be read by keyboard users, and nothing tells a mouse user the row is clickable at all on desktop.
- **Fix**: Drive the desktop reveal off `open`/`aria-expanded` (or `:focus-within`) instead of hover-only; restore the pointer cursor so the affordance is honest.
- **Suggested command**: `/impeccable harden`

**[P1] Rounded corners contradict the site's own angular-identity rule**
- **Why it matters**: `rounded-[22px]` on Metrics cards and `rounded-2xl` on Speaking's photo tiles are the one place the build quietly drifted from its own "no rounded SaaS cards, angular cuts only" contract — everywhere else (Hero, Science, Projects) correctly uses clip-path facets. It's the single most template-generic-feeling choice on an otherwise disciplined page, and it's internally inconsistent.
- **Fix**: Convert those corners to clip-path facets or near-zero radii matching Science's/Projects' angular panels.
- **Suggested command**: `/impeccable typeset` (or fold into the next `/impeccable polish` pass)

**[P1] No visible focus state anywhere, compounded by overflow-clipped containers**
- **Why it matters**: `globals.css` defines `::selection` but no `:focus-visible` rule anywhere in the codebase. Keyboard navigation through nav links, CTAs, and the Leadership buttons gives zero visual confirmation of position on a near-black background — and the detector independently flagged 4 `overflow-hidden` wrappers (the photo/placeholder cards) that would clip a focus ring off a focused child even if one existed.
- **Fix**: Add an explicit mint `:focus-visible` ring sitewide; audit the 4 flagged `overflow-hidden` containers to make sure focused children aren't clipped.
- **Suggested command**: `/impeccable harden`

**[P2] Outbound links point to generic destinations, one is dead**
- **Why it matters**: `links.linkedin` / `links.lattes` in `src/lib/data.ts` point to the platform homepages (`linkedin.com/`, `lattes.cnpq.br/`), not Michel's actual profile/CV; the footer email domain (`michelcalil.com`) doesn't match the site's own metadata domain (`michelcalilabraoneto.com.br`); and "Ver produção acadêmica completa" (`Science.tsx:60`) links to `href="#"`. On a credibility-first personal-brand page, every outbound link is a trust signal — a dead anchor or a generic homepage undercuts that on first contact.
- **Fix**: Wire the real URLs before this ships to anyone outside the build team.
- **Suggested command**: `/impeccable harden`

**[P3] Hero's two CTAs have no primary/secondary distinction**
- **Why it matters**: Both use the identical `ctaCard` style (`Hero.tsx` ~83-96) — dilutes the intended next action for a first-time visitor.
- **Fix**: Give "Conheça minha trajetória" a mint-forward treatment; demote "Currículo Lattes" to a quieter secondary style.
- **Suggested command**: `/impeccable polish`

## Persona Red Flags

**Jordan (First-Timer)**: Clicks "Currículo Lattes" in the Hero and lands on the generic Lattes platform homepage — reads as a broken link on first contact. Then scrolls to Palestras and sees "FOTO — SUBSTITUIR" on an otherwise polished executive page — reinforces the "unfinished" impression right when trust should be building.

**Riley (Stress Tester)**: Tabs to the Leadership pillars, presses Enter/Space — nothing happens, no focus ring even confirms which element has focus, and the desktop hover-reveal never fires from keyboard. Clicks "Ver produção acadêmica completa" in Science — dead `#` link, no feedback.

**Casey (Mobile)**: On phone, the "FOTO — SUBSTITUIR" placeholder tiles in Speaking are unavoidable (`aspect-[4/3]`, nothing else on screen to distract) — more prominent than on desktop, where the full-bleed Orlando photo at least dominates first. Worth noting: the mobile Leadership accordion is actually implemented correctly (tap-driven), so Casey doesn't hit the P0 desktop bug — the mobile build outperforms desktop here.

## Minor Observations

- Science states "02 Patentes" in a large numeral panel right after the stats grid already showed "2 · Patentes" — same fact twice in one section; borders on redundant even if it reads as emphasis.
- Awards, Education, Projects, and Closing have no `id` attributes (Hero/Manifesto/Career/Leadership/Science/Speaking/Closing do) — those four sections can't be deep-linked from nav or shared.
- `CountUpNumber`'s parsing regex (`^(\D*)(\d+)(\D*)$`) would silently break on a future metric with two numeric groups (e.g. "12–15") — not triggered by current data, worth a comment.
- Detector's `all-caps-body` hits (uppercase runs up to 59 chars) are on intentional eyebrow/label copy — fine as designed, just flagging that the longest one is worth a quick legibility glance at small sizes.

## Questions to Consider

- If a university board member or journalist is the actual reader of this URL, would you want "Currículo Lattes" to land them on the Lattes homepage instead of Michel's actual CV?
- The brief explicitly bans rounded SaaS cards — was the Metrics/Speaking rounding a deliberate exception, or has the build quietly drifted from its own contract?
- With Science, Projects, and Speaking all resolving to the same angular clip-path panel, is that a system paying off, or the one "fancy component" reused past the point of feeling like three distinct peaks?
