---
name: Sanitary Crisp
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3c4947'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7a77'
  outline-variant: '#bbc9c6'
  surface-tint: '#006a61'
  primary: '#006a61'
  on-primary: '#ffffff'
  primary-container: '#0ba89a'
  on-primary-container: '#003530'
  inverse-primary: '#5bdacb'
  secondary: '#526160'
  on-secondary: '#ffffff'
  secondary-container: '#d6e6e4'
  on-secondary-container: '#586766'
  tertiary: '#455f86'
  on-tertiary: '#ffffff'
  tertiary-container: '#7d97c1'
  on-tertiary-container: '#102f53'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7bf7e7'
  primary-fixed-dim: '#5bdacb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d6e6e4'
  secondary-fixed-dim: '#bacac8'
  on-secondary-fixed: '#101e1d'
  on-secondary-fixed-variant: '#3b4948'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#adc8f4'
  on-tertiary-fixed: '#001c3b'
  on-tertiary-fixed-variant: '#2c486d'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects clinical cleanliness, suburban ease, and dependable care. Designed for residential service management, the visual language balances medical-grade hygienic cues (sparkling surfaces, crisp aquatic tones, transparent pricing flows) with friendly, approachable neighborhood hospitality.

The visual style blends **Modern Utility** with **Tactile Softness**:
- Generous touch ergonomics designed for mobile-first outdoor and roadside scheduling.
- Crisp white canvas layered over faint crystalline-tinted foundations.
- Gentle, low-friction elevation through diffused, water-tinted drop shadows rather than heavy structural borders.
- Tactile, reassuring micro-interactions that communicate sanitized, completed tasks.

## Colors

Color is applied functionally to convey fresh water, sterilization, and operational transparency:

- **Primary Teal (`#0BA89A`)**: Signals active sanitation and freshness. Used for primary calls-to-action, key progression states, active route statuses, and confirmed booking dates.
- **Secondary Mint Tint (`#E6F6F4`)**: Acts as a calm, anti-glare wash for cards, clean-status badges, and selected toggle cards. It keeps the visual weight light and breathable in bright outdoor sunlight.
- **Deep Marine (`#04264A`)**: Serves as the high-contrast structural text and title color, maintaining readability across age groups without the harshness of pure black.
- **Functional Warning (`#D97706`)**: Reserved strictly for commitment resets, subscription early cancellations, and service-day bin placement reminders.
- **Sanitized Success (`#10B981`)**: Dedicated to confirmed clean cycles, photo verification completions, and active recurring subscriptions.
- **Surface Foundations**: `#FFFFFF` for primary elevations and input controls; `#F8FCFB` for ambient page backgrounds to reduce glare and highlight cards.

## Typography

Plus Jakarta Sans is utilized across all typographic roles to deliver an approachable, geometric warmth while retaining strict structural legibility. 

- **Weight Discipline**: Reserve 700 and 800 weights for key value props, pricing milestones, and process stages. Use regular 400 for descriptive terms, billing disclosures, and bin location guidelines.
- **Numeric Rhythm**: Subscription counters, monthly pricing, and bin count steppers use tabular numbers to avoid layout jitter during quantity adjustments.
- **Legibility in the Field**: Generous line-heights on mobile ensure roadside reading under bright daylight remains frictionless.

## Layout & Spacing

The layout model adapts to mobile service management, roadside self-service, and desktop household dashboards:

- **Mobile First (0 - 639px)**: Single-column fluid stack with `1.25rem` canvas margins. Floating actionable footer fixed to bottom viewport to handle sticky single-tap booking triggers.
- **Tablet (640px - 1023px)**: 6-column grid with split-screen service configuration (schedule summary left, plan selector right).
- **Desktop (1024px+)**: 12-column constrained grid (max-width `1140px`) centered with `3rem` outer margins.
- **Touch-First Guardrails**: All interactive elements (steppers, buttons, checkboxes) enforce a minimum touch target bounding box of `48px`, expanding to `56px` for primary conversion CTA paths.

## Elevation & Depth

Visual hierarchy is communicated via clean surface separation, subtle translucent mint fills, and aqua-tinted ambient glows:

- **Level 0 (Canvas)**: `#F8FCFB` tint providing crisp contrast against pure white cards.
- **Level 1 (Resting Cards & Panels)**: `#FFFFFF` surface accompanied by a soft border (`1px solid #E2E8F0`) and an ambient shadow: `0 4px 16px -2px rgba(4, 38, 74, 0.04)`.
- **Level 2 (Active Selections & Modals)**: `#FFFFFF` elevated surface with `0 12px 28px -4px rgba(11, 168, 154, 0.12)` providing a soft sanitizing teal halo.
- **Sticky Actions**: Pinned bottom navigation trays use `backdrop-filter: blur(12px)` over an 85% opacity `#FFFFFF` fill to preserve ambient continuity while scrolling.

## Shapes

The design uses balanced, rounded geometry to support the friendly, neighborly brand personality while maintaining a modern app structure:

- **Cards & Sheets**: `rounded-xl` (1.5rem / 24px) creates an organic, soft enclosure for plan cards, clean verification photos, and schedule dates.
- **Buttons & Floating Controls**: `rounded-lg` (1rem / 16px) or fully pill-shaped (`9999px`) for chips, badges, and primary action bars.
- **Inputs & Dropdowns**: `rounded-lg` (0.75rem / 12px) balancing structure with comfortable thumb-selection affordance.

## Components

### Buttons
- **Primary Action**: 56px height, full-width on mobile. Background `#0BA89A`, text `#FFFFFF`, font `label-lg`, rounded `1rem`. Active state presses into `#088277`.
- **Secondary Action**: Background `#E6F6F4`, text `#0BA89A`, 52px height, flat borderless surface. Hover introduces subtle outline `#0BA89A` (15% opacity).
- **Destructive/Cancellation Warning**: Border `1.5px solid #F59E0B`, text `#D97706`, white surface background.

### Cards & Service Toggles
- **Plan / Bin Selection Cards**: Multi-select and radio cards use a 20px padding stack. Unselected cards feature `#FFFFFF` with `#E2E8F0` borders. Selected cards flip to an `#E6F6F4` background with a crisp `2px solid #0BA89A` perimeter and an animated teal checkmark icon.

### Chips & Badges
- **Sanitation Status Badges**: Pill-shaped (`rounded-full`), padding `0.25rem 0.75rem`. 
- **UV Sanitized Badge**: Background `#E6F6F4`, text `#0BA89A`, leading sparkle/shield icon.
- **Commitment Indicator**: Bordered chip displaying terms (e.g., "3-Clean Minimum") using deep navy `#04264A` typography.

### Form Inputs & Stepper Controls
- **Input Fields**: 52px height, `#FFFFFF` fill, `#CBD5E1` border, 12px corner radius. Focused state triggers a 2px outer ring in `#0BA89A` with zero inner border jump.
- **Bin Quantity Stepper**: Compact modular unit featuring large tactile `+` and `-` circle buttons (40px x 40px) surrounding a bold tabular integer display.

### Progress & Commitment Indicators
- **Step Processors**: Segmented pill bars (`4px` height) where completed steps display `#0BA89A`, current active displays `#0BA89A` with a pulsing soft glow, and upcoming steps remain `#E2E8F0`.
- **Commitment Cycle Meter**: Visual gauge showing progress toward completing the contracted cleaning quota before cancellation lockouts clear.

### Modals & Alerts
- **Commitment Restart Warning**: Overlay with high backdrop-blur (`8px`). Modal frame features a soft top warning accent bar (`#F59E0B`), explicit clear cost breakdown of the restart fee, and balanced confirmation buttons preventing accidental dismissals.