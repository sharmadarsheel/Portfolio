# Design System & UI Architecture

## 1. Visual Foundation & Color Palette
The portfolio uses a refined, non-tourism-focused visual identity where Jaipur serves purely as the architectural backdrop and aesthetic foundation.
* **Base Palette ("A — Jaipur Royal"):**
  * **Terracotta / Sandstone:** Warm, earthy background tones
  * **Warm Cream:** `#F5F2EB` (Soft surface and text contrast)
  * **Deep Brown:** Rich framing and contrast depth
  * **Muted Gold:** `#D4AF37` (Accent color for borders, active states, and highlights)
* **Surface Glass Panels:** `rgba(255, 255, 255, 0.04)` with `backdrop-blur-md` and a thin `1px solid rgba(212, 175, 55, 0.2)` border for glassmorphic elements.

## 2. Typography Hierarchy
* **Identity / Display (Serif):** Applied to primary titles (e.g., "Darsheel Sharma") to give an editorial, high-end feel.
* **Technical Subtitles & Navigation (Sans-serif):** Clean geometric modern sans-serif for titles like "AI & Data Science Engineer" and navigation sections.
* **Body Text:** Neutral, high-legibility sans-serif optimized for dark and textured backgrounds.

## 3. Structural & Composition Rules (Hero & Layout)
* **Hero Composition ("A — Photo on the right"):**
  * Left side: Main typography, value proposition, and primary CTAs.
  * Right side: Your portrait integrated cleanly against the architectural/wooden door background, surrounded by floating glass modules.
* **Overall Section Layout ("Traditional Structure with Creative Edge"):**
  * Maintains standard clarity (Hero → About → Skills → Projects → Experience → Education → Contact).
  * Unique styling and artistic composition applied per section rather than breaking standard navigation.

## 4. Heritage Integration ("Subtle Layering")
* **Approach ("D — All three, but subtly"):**
  * **Background Architecture:** Doors, arches, and sandstone patterns subtly set the atmosphere.
  * **Decorative Motifs:** Minimalist jaali patterns and borders frame specific components.
  * **Three.js & Transformation:** Selectively used to bridge the physical atmosphere with digital logic.

## 5. Interaction & Morphing Transitions
* **Core Interaction Principle ("C — Morphing transitions"):**
  * Elements do not just fade or slide; they structurally evolve as the user scrolls.
  * *Examples:* Traditional Jaali patterns morph into digital grids/particle systems; architectural arches transform into clean UI frames; gold ornaments transition into animated connection lines.