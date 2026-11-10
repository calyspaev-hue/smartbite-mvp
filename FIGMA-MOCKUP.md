# SmartBite AI — Figma-ready mockup

This is a simple Figma design brief for the MVP. Create one Figma page named `SmartBite MVP` and use a 390 × 844 phone frame for each screen.

## Visual direction

- **Personality:** calm, practical, optimistic; the product should feel like a smart kitchen note, not a generic AI dashboard.
- **Primary palette:** Forest `#176B52`, Deep Forest `#0D4C3A`, Paper `#F7F5EF`, Card `#FFFDF8`, Mint `#DCEEE1`, Lime `#B9D85A`, Coral `#E8755C`, Ink `#17251F`, Muted `#66746D`.
- **Typography:** Fraunces SemiBold for large headings; DM Sans Regular/Medium/Bold for interface text.
- **Spacing:** 8 px base grid. Page padding 24 px. Card radius 20 px. Button radius 14 px.
- **Accessibility:** body text at least 16 px on mobile, buttons at least 44 px high, dark green text on mint, never coral text on paper for long text.

## Components

1. `Button / Primary` — Forest fill, white label, 14 px radius, 48 px height.
2. `Button / Secondary` — Card fill, Forest text, 1 px Line border.
3. `Chip / Ingredient` — Mint fill, Deep Forest text, pill radius, close icon.
4. `Card / Recipe` — Card fill, Line border, 20 px radius, emoji tile, title, description, metadata and open button.
5. `Progress / Step` — four 5 px bars; completed bars Forest, remaining bars Line.
6. `Input / Upload` — pale green background, dashed muted-green border, camera symbol.
7. `Navigation / Top` — SmartBite mark on left, Kitchen and Saved on right.

## Screens

### 01 — Welcome / Kitchen

- Top navigation.
- Eyebrow: `Your fridge, made useful` in Coral.
- Heading: `Cook what you have. Waste less.`
- Supporting text explaining the value in one sentence.
- Primary CTA: `Find my dinner`.
- Right or lower hero illustration: simplified phone mockup with a leafy ingredient and green background.

### 02 — Input

- Progress: first bar active.
- Heading: `Start with what you have`.
- Two tabs: `Scan my fridge` and `Type ingredients`.
- Large dashed upload area with camera icon.
- Secondary manual-input state with textarea placeholder: `Try: eggs, rice, tomatoes, spinach...`.
- Primary CTA: `Continue`.

### 03 — Confirm ingredients

- Progress: first two bars active.
- Heading: `Does this look right?`
- Helper text: `Remove anything wrong and add what we missed.`
- Example chips: `tomato`, `egg`, `rice`, `onion`.
- Add ingredient field and `Add` button.
- Bottom actions: `Back`, `Looks good`.

### 04 — Constraints

- Progress: three bars active.
- Heading: `Make it fit tonight`.
- Three selectors: `I have` → 15/30/60 minutes; `Cooking for` → 1/2/3–4 people; `Keep it` → Anything/Vegetarian/Dairy-free.
- Primary CTA: `Show my options`.

### 05 — Results

- Progress: all bars active.
- Heading: `Your dinner shortlist`.
- Helper text: `Ranked for what you have and how much time you have.`
- Four recipe cards in a 2-column desktop grid and 1-column mobile stack.
- Card examples: Creamy tomato pasta, Golden fridge fried rice, Lemony chickpea bowl, Crispy fridge quesadilla.
- Metadata: time, servings, match percentage.
- Badge such as `Use tomatoes soon`.

### 06 — Recipe detail

- Large food emoji/illustration panel at top on mobile.
- Back button.
- Recipe title, description, time and servings.
- Ingredient chips.
- Numbered cooking steps.
- Feedback row: `I’ll cook this`, `Not useful`, `Wrong ingredient`, `Save`.

## Prototype connections

- Welcome `Find my dinner` → Input.
- Input `Continue` → Confirm.
- Confirm `Looks good` → Constraints.
- Constraints `Show my options` → Results.
- Recipe card `View recipe` → Detail.
- Detail back button → Results.
- Detail `Save` → Saved state.
- Input tab switches between upload and manual entry.

## Figma file setup

1. Create page `SmartBite MVP`.
2. Add color styles named `Forest`, `Deep Forest`, `Paper`, `Card`, `Mint`, `Lime`, `Coral`, `Ink`, `Muted`, `Line`.
3. Add text styles `Display / Fraunces`, `Heading / Fraunces`, `Body / DM Sans`, `Label / DM Sans`.
4. Build components before laying out screens.
5. Use Auto Layout on every card, button row and navigation group.
6. Add prototype interactions using the connections above.
