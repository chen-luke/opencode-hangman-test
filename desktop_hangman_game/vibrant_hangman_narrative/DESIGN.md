---
name: Vibrant Hangman Narrative
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#464554'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed01b'
  on-secondary-container: '#6f5900'
  tertiary: '#b10e6b'
  on-tertiary: '#ffffff'
  tertiary-container: '#d23284'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-base:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  game-letter:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 8px
  gutter: 16px
  margin-page: 24px
  touch-target-min: 48px
  letter-gap: 12px
---

## Brand & Style
This design system centers on a "Digital Tactile" aesthetic—merging the cleanliness of modern minimalism with the nostalgic, playful warmth of physical paper games. The target audience spans casual gamers and learners who value a stress-free but mentally engaging experience. 

The style utilizes **Tactile Minimalism**. It avoids heavy skeuomorphism in the UI but applies it selectively to the core game elements (the gallows and the "paper" stage). The emotional response is intended to be optimistic, energetic, and approachable. High-contrast elements ensure the game remains accessible and legible even during fast-paced play.

## Colors
The palette is anchored by a friendly, saturated Indigo primary color. This provides a trustworthy and modern foundation. The Secondary color is a bright, sunny Yellow, used exclusively for highlights, win-states, and high-priority interactions to create a "pop" effect.

A tertiary Pink is included for auxiliary status indicators or variety in button states. The neutral palette is a deep slate rather than pure black, maintaining a soft professional edge while providing high contrast against the off-white (#F8FAFC) background "paper" surfaces.

## Typography
The typography is chosen for its friendliness and extreme readability. **Plus Jakarta Sans** provides soft, geometric curves for large display text and game letters. **Be Vietnam Pro** is used for body copy to maintain a contemporary, casual tone. **Lexend** is utilized for labels and UI controls due to its educational roots and exceptional character clarity, which is vital for a word-based game. Headlines should use tight tracking to emphasize the "bold" look, while game letters (the blanks) require ample letter-spacing for distinction.

## Layout & Spacing
The design system employs a **fluid grid** with strict safe margins to accommodate various screen sizes. The layout is vertically oriented to prioritize the hangman illustration at the top and the keyboard/input at the bottom. 

Spacing follows an 8px rhythm. The keyboard container uses a tighter gutter (8px) to maximize touch target sizes for the letters, while the overall game area uses wider margins (24px) to create a sense of focus. The "letter-gap" is a specific token used for the mystery word blanks, ensuring clear separation between characters.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows**. Instead of traditional drop shadows, it uses "Soft Depth":
1.  **Level 0 (Background):** A very light grey/blue tint.
2.  **Level 1 (Paper Surface):** White or off-white cards with a 1px border and a subtle, large-radius shadow (15% opacity of the primary color) to give the impression of paper resting on a table.
3.  **Level 2 (Interactive):** Buttons use a slight 2px vertical offset to simulate "squish" when pressed, rather than a lighting change.

The gallows illustration should ignore standard elevation, appearing as a 2D "hand-drawn" layer directly on the Level 1 paper surface.

## Shapes
A "Rounded" shape language (0.5rem base) is applied to all UI containers to reinforce the playful nature of the system. 
- **Buttons:** Fully rounded (pill-shaped) to invite interaction.
- **Letter Blanks:** Slightly rounded bottom borders to ground the typography.
- **Cards/Modals:** Medium roundedness (1rem) to maintain a modern, friendly container feel.
- **The Gallows:** Should use organic, non-uniform strokes with slightly rounded caps to mimic a felt-tip marker or pencil.

## Components
- **Game Keyboard:** Each letter is a high-contrast tile. Use the Primary color for available letters, a muted grey for used/incorrect letters, and the Secondary color for the currently selected letter.
- **Letter Blanks:** Represented by heavy horizontal lines with high-contrast character slots. When a letter is revealed, it should "bounce" into place.
- **The Gallows (Canvas):** A dedicated area with a paper-like texture overlay. The illustration increments should feel hand-drawn (variable line weights).
- **Action Buttons:** Primary buttons use a solid Primary color with white text. Secondary buttons (e.g., "Hint") use an outline style with the Secondary color.
- **Score Chips:** Small, pill-shaped badges at the top of the screen showing "Wins" and "Streak" using the Tertiary color.
- **Modals (Win/Loss):** Large, centered cards that use the Secondary color for victory and a soft Neutral for game over, featuring bold "Display-LG" typography.