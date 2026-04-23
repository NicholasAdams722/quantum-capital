# CLAUDE.md — Quantum Capital Website
## Project Context for AI Assistants

This file is the authoritative context document for the Quantum Capital website project.
Read it fully before writing any code, copy, or components. Every decision in this codebase
traces back to something in this document.

---

## 1. What This Project Is

**quantumcapital.com** is the conversion layer between a millennial investor who discovers
Quantum Capital through content and a managed account relationship with Mark Berube.

The funnel is:
```
X (Twitter) → The Quantum Letter (thequantumletter.com) → quantumcapital.com → Book a Call with Mark
```

The website is not a brochure. It is not a blog. It is a precision conversion instrument
for a specific audience: crypto-sophisticated, entrepreneurial millennials who are ETH-curious
and discover financial advisors through content rather than cold calls or referrals.

Every page, section, and CTA lives in service of one outcome: **a booked consultation
with Mark Berubecomes a managed account relationship.**

---

## 2. The Entity

**Legal entity:** Patriot Advisory Group LLC (PAG)
**DBA / brand name:** Quantum Capital
**Registration:** NH Dept. of State, Business ID 1019244, effective 02/25/2026
**Address:** 1 New Hampshire Avenue, Suite 125, Portsmouth, NH 03801
**Registration status:** State-registered RIA (New Hampshire)
**AUM:** ~$54M (as of April 2026)
**Founder:** Mark Berube, ChFC (Chartered Financial Consultant)
**Director of Operations:** Nick Adams

All public-facing content must display: *Patriot Advisory Group LLC dba Quantum Capital*
when the full legal name is required (disclosures, footer, ADV references).

---

## 3. Key People

| Person | Role | Context |
|---|---|---|
| **Mark Berube** | Founder, President, ChFC | 22+ years as advisor. The voice and face of Quantum Capital. All research originates with Mark. |
| **Nick Adams** | Director of Operations | Owns content strategy, social, and this website build. |
| **Darren Kane** | Compliance Officer | Written sign-off required before any copy goes live. |
| **Ike Fontaine** | Creative / Media Partner | getfuturemedia.com. Co-author on some Quantum Letter issues. |

---

## 4. Tech Stack

**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS
**Deployment:** Vercel
**CMS / Newsletter:** The Quantum Letter lives on Ghost at thequantumletter.com. The website
pulls newsletter content via the Ghost Content API for issue previews and the archive.
**Analytics:** Vercel Analytics (privacy-first, no cookie banner required)
**Forms:** React Hook Form → API route → email notification to Mark

### Stack decisions to respect
- No WordPress. No page builders.
- Server components by default; client components only when interactivity requires it.
- No heavy animation libraries (Framer Motion only if genuinely needed for a specific interaction).
- Mobile-first. The audience is on their phone.
- Fonts: System font stack preferred for performance, or a single clean sans-serif (Inter or equivalent) via `next/font`

---

## 5. Site Architecture

### Pages

```
/ ................ Homepage (primary conversion page)
/thesis .......... The Investment Thesis (Ethereum as infrastructure)
/research ........ The Quantum Letter archive (Ghost API feed)
/research/[slug]  Individual issue (redirect to thequantumletter.com or render via Ghost API)
/compass ......... The Quantum Compass (Metcalfe valuation framework — gated or public TBD)
/about ........... Mark Berube + firm credentials
/book ............ Book a consultation (Calendly embed)
/disclosures ..... RIA disclosures (required by compliance)
```

### Navigation
Top nav: Logo | Thesis | Research | Compass | About | [Book a Call — CTA button]

Footer: Legal name, ADV Part 2 link, Form CRS link, state registration disclosure,
"Not investment advice" disclaimer.

---

## 6. The Investment Thesis (Read This Before Writing Any Copy)

This is what Quantum Capital believes and publishes. All website copy must be consistent
with the thesis as stated. Do not editorialize, softor contradict it.

### Core Argument
Ethereum is not priced as what it is being built to be. It is being built as the
settlement layer for the global machine economy — the operating system every AI agent,
tokenized asset, and programmable dollar will settle on. The gap between that reality
and the current price is the investment window.

### The Three Pillars

**1. The EVM is the Windows of Blockchain**
Ethereum invented the Ethereum Virtual Machine in 2015. The entire industry adopted the
standard. Every major rollup, every real-world asset platform, every AI agent wallet runs
on EVM. 85% of all blockchain traffic today. 31,000 developers. The moat is not
speculation — it is 11 years of accumulated network effects that cannot be replicated.
Just as every app on Windows made Windows more valuable, every chain on EVM makes ETH
more valuable.

**2. Ethereum is Ultrasound Money**
Bitcoin is sound money: fixed supply of 21M, scarcity by schedule (halvings).
Ethereum is ultrasound money: supply is *demand-driven*. EIP-1559 burns ETH with every
transaction — permanently destroyed. The Merge cut new issuance 88%. 30%+ of all ETH is
locked in staking. The key insight: as usage increases, supply decreases. It is the only
commodity in the world with this property. This is code, not opinion.

**3. The Venmo Moment is 2027–2028**
The infrastructure stack is complete or completing: ERC-4337 (smart wallets, 40M accounts
live), EIP-4844 blobs (fees cut 90%+), ZK Rollups (maturing 2026, institutional-grade
finality), Pectra/EIP-7702 (AI agent-compatible wallets, live May 2025). By 2027–2028,
a millennial opens an app that works exactly like Venmo — and it runs on Ethereum without
them knowing. We buy the toll road in 2026 before the Venmo moment arrives.

### The Quantum Compass (Valuation Framework)
Uses Metcalfe's Law: **Network Value = k × n²**, where:
- n = daily active EOA addresses (human wallets only, bots excluded)
- k = $565 (calibrated April 2026)
- Source: CFA Institute Cryptoassets Valuation Guide; same methodology used by Grayscale (ETHE) and Fidelity (FETH) analysts

**Price targets (April 2026 base):**
| Horizon | DAA | Target |
|---|---|---|
| Today | 700K | $2,350 |
| 90 Days (mid-July) | 800K | $3,070 |
| 180 Days (mid-Oct) | 1.0M | $4,780 |
| Year-End 2026 | 1.25M | $7,350 |

The n² relationship is non-linear: a 14% user increase drives a 31% jump in network value.

### Key Regulatory Catalyst
The CLARITY Act — legislation that codifies Ethereum's commodity status into permanent law
and provides a clear regulatory framework for stablecoins. Working legislative deadline:
May 21, 2026. When Ethereum goes from "legal" to "law," risk is reduced by at least 50%.

### The Bessent Connection
US Treasury Secretary Scott Bessent's official projection: stablecoins grow 10x to $3
trillion by end of decade. 60% settles on Ethereum. Every new stablecoin dollar = a new
Metcalfe user. Every new user increases n. Every increase in n increases n² exponentially.
This is on-record testimony, not speculation.

### Total Addable Market
The EVM processes or will process settlement for:
- Global derivatives: $700 trillion
- Global repo market: $12.5 trillion (JP Morgan and BlackRock live now)
- Global payments: $150 trillion
- Global asset management: $100 trillion
- AI agent economy: incalculable

Only 2 of 7 TAM categories are "now." 5 are "building" or "early." That is why ETH is
undervalued — the market is pricing only what is live today.

---

## 7. Voice and Tone

**The voice of Quantum Capital is Mark Berube.**
Mark is a 22-year practitioner, not an influencer. He does not predict. He projects —
from formulas that exist in the marketplace today, endorsed by the CFA Institute, used by
institutions. The voice earns trust through precision and humility, not hype.

### Tone principles
- **Projections, not predictions.** Never "ETH will hit $X." Always "at 1M DAA, the
  Metcalfe formula outputs $X — the same formula Grayscale and Fidelity use."
- **Institutional credibility for a millennial audience.** The research is
  institutional-grade. The delivery is human, direct, and clear. Never condescending.
  Never jargon-first.
- **Truth over persuasion.** Mark's phrase: "If it was a prediction, I would want you to
  believe me. When it's a projection, I don't need you to believe me. It's true. Go do
  the math yourself."
- **Specificity builds trust.** Cite the formula. Name the institution. Give the exact
  number. Vague enthusiasm is the enemy of conversion.
- **Not investment advice.** Every page. Every time. This is non-negotiable.

### What the voice is NOT
- Not a crypto Twitter influencer ("ngmi," "wen moon," etc.)
- Not a scared compliance voice that hedges every sentence into mush
- Not a Boomer financial advisor talking down to millennials
- Not a salesperson. The thesis sells itself when explained clearly.

### Sample copy that captures the voice
> Ethereum is priced like a speculative asset. It's being built like infrastructure.
> The gap between those two things is where we work.

> Bitcoin is the vault. Ethereum is the engine.

> America didn't back the dollar with oil. It made oil dependent on the dollar.
> The next version of that story runs on Ethereum.

> By the time a millennial opens that app in 2027 and thinks they're using Venmo —
> we bought the toll road in 2026 when nobody was looking.

---

## 8. Target Audience

**Primary:** Millennials (born 1981–1996), ages 28–45. Entrepreneurial, digital-native,
ETH-curious. Already aware of crypto but have not yet connected it to a long-term
investment thesis managed by a licensed advisor. They discover financial advisors through
content, not cold calls. They are skeptical of traditional finance but hungry for
institutional-grade research they can actually understand.

**Secondary:** High-net-worth millennial founders and operators with $250K+ in investable
assets who want concentrated, thesis-driven positioning rather than a 60/40 portfolio.

**They are NOT:**
- Day traders looking for price alerts
- Boomers looking for conservative income
- Retail crypto speculators chasing memecoins

---

## 9. Compliance Requirements

This is a licensed RIA. The following are non-negotiable and must appear correctly in
all public-facing content.

### Required disclosures (must appear on every page in footer)
```
Patriot Advisory Group LLC dba Quantum Capital is a registered investment adviser in the
State of New Hampshire. Registration does not imply a certain level of skill or training.
This website is for informational purposes only and does not constitute investment advice,
a solicitation, or an offer to buy or sell any security or digital asset. Past performance
does not guarantee future results. All investments involve risk, including the possible loss
of principal. Form ADV Part 2 is available upon request.
```

### Price targets and projections
- Must always be labeled as the mathematical output of the Metcalfe's Law formula
- Must never be presented as guarantees or certainties
- Must always carry "not investment advice" in proximity to the figures

### Testimonials
- Do not include client testimonials without explicit compliance review
- No performance claims tied to specific client accounts

### Social media links
- Any link to Mark's X (Twitter) account must carry the same disclosure context
- The Quantum Letter is a research publication, not a managed account service

### Approval workflow
All copy → Nick Adams → Darren Kane (written sign-off) → publish.
Do not deploy any page with substantive financial claims without this sign-off.

---

## 10. Content Assets Available

The following research documents exist and can be referenced or excerpted on the website
with appropriate compliance framing:

| Document | Description | Key Use |
|---|---|---|
| The Quantum Letter (16 issues) | Free newsletter at thequantumletter.com | Research archive feed |
| Quantum Compass v3 | Metcalfe valuation framework with price targets | /compass page |
| From Venmo to ETH | Infrastructure roadmap (internal memo) | Thesis page narrative |
| Ultrasound Money | Bitcoin vs. ETH supply mechanics | Thesis page section |
| Ethereum as Digital Oil | Baby Boomers vs. Millennials framing | Thesis/homepage hook |
| ETH Research (April 17, 2026) | Portfolio positioning (ETHA, SBET, BMNR) | Research page context |

**Key quotes cleared for use:**
- "Ethereum is priced like a speculative asset. It's being built like infrastructure."
- "Bitcoin is the vault. Ethereum is the engine."
- "By the time a millennial opens that app in 2027 and thinks they're using Venmo —
  we bought the toll road in 2026 when nobody was looking."
- Bessent Senate Banking testimony (Feb 4, 2026): verifiable public congressional record

---

## 11. Brand Kit & Design System

### Logo Assets (confirmed from Figma)

**Logomark:** Lowercase `q` with a distinctive vertical bar (the descender) on the right.
Bold, geometric, rounded. Two variants:
- White with white-to-gray gradient on the bowl interior → use on dark backgrounds
- Blue with blue-to-navy gradient on the bowl interior → use as accent/color version

**Wordmark:** Lowercase `quantum` in a rounded geometric sans-serif, Black weight.
All lowercase. Tight letter-spacing. Same two color variants as the mark.

**Logo usage rules:**
- Default: white wordmark + gradient `q` mark on black background
- Color accent: blue wordmark + blue gradient `q` mark on black background
- Never place the logo on a light background without inversion
- Never stretch, recolor outside the two approved palettes, or separate the `q` from the descender

### Color Palette

```
/* Primary */
--color-bg:          #000000   /* Pure black — all page backgrounds */
--color-surface:     #0D0D0D   /* Slightly lifted surface for cards, nav */
--color-border:      #1A1A1A   /* Subtle borders, dividers */

/* Text */
--color-text-primary:   #FFFFFF   /* Headlines, primary body */
--color-text-secondary: #A0A0A0   /* Subheadings, captions, meta */
--color-text-muted:     #555555   /* Disabled states, fine print */

/* Brand Accent — Quantum Blue */
--color-blue:        #3B6EE8   /* Primary CTA, links, active states */
--color-blue-dark:   #1E3A8A   /* Gradient endpoint on q mark / hover states */
--color-blue-light:  #6B9BF5   /* Highlight, selected states */

/* Gradient — used on the q mark and select hero elements */
--gradient-q:        linear-gradient(160deg, #FFFFFF 0%, #888888 100%)  /* white variant */
--gradient-q-blue:   linear-gradient(160deg, #3B6EE8 0%, #1E3A8A 100%) /* blue variant */

/* Semantic */
--color-success:     #22C55E   /* Positive metrics, up arrows */
--color-warning:     #F59E0B   /* Caution labels */
--color-error:       #EF4444   /* Errors, downside risk */
```

### Typography

**Display / Wordmark font:** The `quantum` wordmark uses a rounded geometric sans-serif
at Black weight — most closely matched by **Nunito Black** (Google Fonts, free).
Use this for the wordmark only; do not use for body text.

**UI / Body font:** **Inter** (via `next/font/google`) — clean, legible, neutral.
Standard for institutional digital products.

**Type scale (Tailwind classes to define):**
```
Display:   text-6xl md:text-8xl  font-black  tracking-tight   /* Hero headlines */
H1:        text-4xl md:text-5xl  font-bold   tracking-tight
H2:        text-2xl md:text-3xl  font-bold   tracking-tight
H3:        text-xl  md:text-2xl  font-semibold
Body:      text-base             font-normal leading-relaxed
Small:     text-sm               font-normal text-secondary
Label:     text-xs               font-medium uppercase tracking-widest
```

### Tailwind Config (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0D0D0D',
        border: '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-muted': '#555555',
        blue: {
          DEFAULT: '#3B6EE8',
          dark: '#1E3A8A',
          light: '#6B9BF5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Nunito', 'sans-serif'], // wordmark only
      },
      backgroundImage: {
        'gradient-q': 'linear-gradient(160deg, #FFFFFF 0%, #888888 100%)',
        'gradient-q-blue': 'linear-gradient(160deg, #3B6EE8 0%, #1E3A8A 100%)',
      },
    },
  },
  plugins: [],
}

export default config
```

### Design Principles
- **Pure black backgrounds.** `#000000` — not near-black, not dark gray. Pure black.
  The logo and brand kit are designed against true black.
- **Typography-forward.** The thesis is the product. Large, confident type.
- **The blue is an accent, not a background.** Use `#3B6EE8` for CTAs, active links,
  and highlight moments — not as a fill for large sections.
- **Gradient is reserved for the logo and hero moments.** Don't apply the q-gradient
  to body text or decorative elements.
- **No stock photos. No crypto moon imagery. No blockchain globe graphics.**
  Charts, formulas, and data callouts are the visuals.
- **Data visualization over decoration.** If a chart replaces a paragraph, use the chart.

### UI Components to Build
- `QuantumLogo` — SVG-based logomark + wordmark, accepts `variant="white" | "blue"`
- `QuantumCompass` — Metcalfe price targets table with compliance label
- `IssueCard` — Newsletter issue preview (title, date, excerpt, Ghost link)
- `StatBlock` — Large-format data callout (e.g., "85% of all blockchain traffic")
- `BookCallCTA` — Section-level and persistent CTA wired to Calendly
- `ThesisSection` — Narrative section: heading + data support + CTA
- `ComplianceFooter` — Full disclosure text, ADV link, RIA registration notice

---

## 12. Homepage Structure (Priority Page)

The homepage is the most important page. It must answer three questions immediately:
1. What is this? (10 words or fewer)
2. Why should I care? (The thesis in 2 sentences)
3. What do I do next? (One clear CTA)

**Recommended section order:**

1. **Hero** — Bold thesis statement. Single CTA: "Read the Quantum Letter" or "Book a Call."
2. **The Gap** — Visualize the difference between current price and institutional fair value.
3. **Why Ethereum** — Three-pillar summary (EVM, Ultrasound Money, Venmo Moment).
4. **The Quantum Compass** — Price targets table. Formula source. "Not investment advice" label.
5. **The Quantum Letter** — Last 3 issues feed from Ghost API. Subscribe CTA.
6. **About Mark** — One paragraph. ChFC credential. 22 years. The math-first approach.
7. **Book a Call** — Final CTA section. Calendly embed or link.
8. **Footer** — Full compliance disclosure.

---

## 13. Environment Variables

```
# Ghost Content API (for newsletter feed)
GHOST_API_URL=https://thequantumletter.com
GHOST_CONTENT_API_KEY=<from Ghost admin>

# Calendly (for booking CTA)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/<mark-berube-handle>

# Contact form (API route notification)
CONTACT_NOTIFICATION_EMAIL=<mark's email>
```

---

## 14. What This Website Is NOT Building (Scope Boundaries)

- **Not a trading platform.** No live price feeds required at launch (static data is fine).
- **Not a client portal.** Existing clients use separate RIA tools (Redtail, custodian portals).
- **Not a social media replacement.** Twitter/X is the top-of-funnel. This is the conversion layer.
- **Not a paywall product yet.** The Quantum Compass is currently free. Paywalled content is
  a Phase 2 decision.
- **Not a podcast platform.** Audio/video content may come later. Not in scope for v1.

---

## 15. Definition of Done for v1

A v1 deploy to Vercel is complete when:
- [ ] Homepage renders correctly on mobile and desktop
- [ ] The Quantum Compass page displays price targets with appropriate compliance framing
- [ ] The Research page pulls at least the last 3 Quantum Letter issues from Ghost API
- [ ] Book a Call CTA is wired to Calendly
- [ ] Footer compliance disclosure is present on every page
- [ ] "Not investment advice" appears in proximity to all price targets
- [ ] Darren Kane has reviewed and signed off on all copy
- [ ] Vercel deployment is live at quantumcapital.com (or staging URL)
- [ ] Nick has confirmed Archive Intel / social archiving is not implicated by website launch

---

## 16. SEO & AI Search Architecture

This section documents the SEO and AI search infrastructure. Do not remove or bypass these patterns.

### Files and Their Purpose

| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root `metadata` export — site-wide title template, description, OpenGraph, Twitter Card, robots directives |
| `src/app/sitemap.ts` | Auto-generated `sitemap.xml` via Next.js file convention. Add new routes here when pages are built. |
| `src/app/robots.ts` | Auto-generated `robots.txt`. Allows all crawlers; points to sitemap. |
| `src/lib/structured-data.ts` | JSON-LD schema functions: `organizationSchema()`, `personSchema()`, `websiteSchema()` |
| `public/llms.txt` | Plain-text context file for AI crawlers (ChatGPT, Perplexity, Gemini, etc.). Human-readable summary of the firm, thesis, and site structure. |

### Metadata Pattern (per page)

Every page must export its own `metadata` object to override the root defaults. Use the title template — it automatically appends `| Quantum Capital`.

```ts
// src/app/thesis/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Investment Thesis',  // renders as "The Investment Thesis | Quantum Capital"
  description: 'Ethereum is not priced as what it is being built to be...',
  alternates: {
    canonical: 'https://quantumcapital.com/thesis',
  },
  openGraph: {
    title: 'The Investment Thesis — Quantum Capital',
    description: '...',
    url: 'https://quantumcapital.com/thesis',
  },
}
```

### JSON-LD Structured Data

Three schemas are injected globally in `layout.tsx`:
- `FinancialService` (Organization) — firm name, address, founder, areas of expertise
- `Person` — Mark Berube's credentials, title, and knowledge domains
- `WebSite` — site name, URL, publisher

For individual pages (e.g., `/compass`, `/research/[slug]`), add page-specific JSON-LD inline:

```tsx
// For a research article page
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: issue.title,
    author: { '@type': 'Person', name: 'Mark Berube' },
    publisher: { '@type': 'Organization', name: 'Quantum Capital' },
    datePublished: issue.published_at,
    url: `https://quantumcapital.com/research/${issue.slug}`,
  })}}
/>
```

### Fonts

The font setup in `layout.tsx` uses `next/font/google`:
- `Inter` → CSS variable `--font-inter` → Tailwind `font-sans`
- `Nunito` (Black weight) → CSS variable `--font-nunito` → Tailwind `font-display`

**Do not import Geist or Geist Mono** — they were the Create Next App defaults and have been replaced.

### AI Search (llms.txt)

`public/llms.txt` is served at `https://quantumcapital.com/llms.txt`. AI crawlers (Perplexity, ChatGPT browsing, Gemini) read this file to understand the site before indexing. Keep it updated when:
- The investment thesis changes
- New pages are added
- Price targets are updated (Quantum Compass)
- Key personnel or firm details change

### Sitemap Maintenance

`src/app/sitemap.ts` lists all static routes. When a new page is added under `src/app/`, add its entry to the sitemap with an appropriate `changeFrequency` and `priority`:
- Pages with price data (compass): `weekly`, `0.9`
- Research archive: `weekly`, `0.8`
- Static content (about, disclosures): `monthly` or `yearly`, `0.3–0.7`

Dynamic routes (e.g., `/research/[slug]`) should be handled with a separate async sitemap function that fetches slugs from the Ghost API.

---

*Prepared by Nick Adams, Director of Operations, Quantum Capital / Patriot Advisory Group LLC*
*Last updated: April 2026*
*Questions: Direct to Nick before making assumptions that affect compliance or brand.*
