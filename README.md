# Limpi — Curbside Trash Bin Cleaning Subscription

> **Clean Bins. Healthy Home.**  
> Curbside bin washing, high-temperature steaming (190°F), and UV sanitization for residential homes in **Lehigh Acres, Florida**.

---

## 🌟 Overview

**Limpi** is a modern, mobile-first web application designed for homeowners in Lehigh Acres, FL. It offers a streamlined subscription service dedicated exclusively to two curbside hygiene services:
1. **Garbage & Trash Bin Sanitization**: High-pressure wash at 190°F with hospital-grade UV light sterilization inside and out.
2. **Curbside Area Cleanup**: Removal of spilled debris, grime, and trash around the bin perimeter on collection morning.

---

## 🌐 Multilingual Support (i18n)

Limpi provides full native language switching across the entire application for the diverse Lehigh Acres community:

- 🇺🇸 **English (`en`)**: *Clean Bins. Healthy Home.*
- 🇪🇸 **Español (`es`)**: *Botes Limpios. Hogar Saludable.*
- 🇭🇹 **Kreyòl Ayisyen (`ht`)**: *Poubèl Pwòp. Kay An Sante.*

### Key Translation Capabilities:
- **Instant Reactive Switching**: Change language anytime via the top-right header selector.
- **Dynamic Date & Day Translation**: Weekdays (*Monday* → *Lunes* → *Lendi*), months (*October* → *Octubre* → *Oktòb*), visit dates, and historical timestamps (*Completed at 8:42 AM* → *Completado a las 8:42 AM* → *Fini a 8:42 AM*) translate dynamically.
- **Local Persistence**: User language preference is saved in `localStorage` and remembered on subsequent visits.

---

## 💵 Pricing Model

Plans have **no monthly payments**. They are billed for **3 months upfront** and renew automatically every 3 months:

| Plan | Frequency | Price (3 Months) | Inclusions | Extra Bins |
| :--- | :--- | :--- | :--- | :--- |
| **Standard Clean** | 1 cleaning / month | **$79.95** | Up to 2 curbside bins | +$15 each |
| **Frequent Clean** | 2 cleanings / month | **$99.95** | Up to 2 curbside bins | +$15 each |

*Note: 3-month minimum commitment applies. Pausing or skipping a scheduled visit restarts the 3-month cycle.*

---

## 📱 Screens & App Architecture

The app is built as a cohesive, clickable mobile experience with zero dead ends:

1. **Welcome Screen (`welcome`)**:
   - Brand logo (teal leaf, broom, and sparkle inside a circle).
   - "Create Account" and "Sign In" segmented tabs.
   - Quick password recovery link.
2. **Forgot Password Screen (`forgot-password`)**:
   - Email submission with confirmed reset link dispatch.
3. **How Limpi Works & Pricing (`how-it-works`)**:
   - 3-step automated guide: *Pick your plan*, *We clean at your curb*, *Enjoy a fresh bin*.
   - Transparent pricing card with renewal terms.
4. **Plan Selection Screen (`plan`)**:
   - Toggle between 1 or 2 cleans/month with real-time price updates.
   - Bin count selector (1 bin, 2 bins included, 3+ with $15 add-on indicator).
5. **Service Address Screen (`address`)**:
   - Address, unit, gate code, and curbside placement options.
   - Real-time **Lehigh Acres ZIP code verification** (supporting ZIPs `33936`, `33971`, `33972`, `33973`, `33974`, `33976`).
6. **Pick Your Day Screen (`pick-day`)**:
   - Matches local trash collection days (Monday through Friday) mapped to Lehigh Acres neighborhood zones.
   - Morning (7:30 AM – 11:30 AM) and Afternoon (12:00 PM – 4:00 PM) windows.
7. **Checkout Screen (`checkout`)**:
   - Order summary card with 3-month breakdown and payment card details.
   - Mandatory checkbox agreeing to the 3-month plan and automatic renewal terms.
8. **Confirmation Screen (`confirmation`)**:
   - Animated celebration checkmark, order receipt number (`#LM-89240`), and first scheduled cleaning route.
9. **Home Screen (`home`)**:
   - Curbside address pill and animated **Active Shield**.
   - Hero next cleaning card with 3-month cycle tracker.
   - Account overview shortcuts for plan, payment, and address.
10. **Schedule Screen (`schedule`)**:
    - **Upcoming Visits**: Next cleaning countdown, route status, and visit management.
    - **Past History**: Completed cleans with time-stamped UV-sanitization verification.
    - 3-Month commitment restart warning modal.
11. **Visit Details Screen (`visit-detail`)**:
    - Detailed sanitization scope.
    - In-app rescheduling to any weekday within the current service week.
12. **Account Screen (`account`)**:
    - Member status, active plan badge, 3-month progress meter.
    - Quick actions: Upgrade Plan, Change Bins, and locked Cancel button with completion tooltips.
    - Settings navigation: Payment method, service address, local help, and logout confirmation modal.
13. **Payment Method Screen (`payment-method`)**:
    - Primary card on file and 256-bit encrypted card update form.
14. **Edit Address Screen (`edit-address`)**:
    - Real-time Lehigh Acres validation and bin location adjustments.
15. **Help & Support Screen (`help`)**:
    - Local dispatch hours (Monday–Friday 7 AM–5 PM, Saturday 8 AM–1 PM).
    - "Message Us" direct dispatch message form and "Call Us" hotline (`(239) 555-0192`).
    - 100% Sparkle Guarantee policy.
16. **Notifications Screen (`notifications`)**:
    - SMS/email arrival alerts and route completion notices with "Mark all read" toggle.

---

## 👤 Profile & Avatar Upload System

- **Clickable Header & Account Avatar**: Users can tap their profile avatar at any time to open the **Avatar & Profile Picture Modal**.
- **Device Photo Upload**: Upload any custom photo or selfie from phone or computer (`input[type="file"]` with `FileReader` Data URL conversion).
- **Curated Neighborhood Presets**: 8 custom SVG avatars (Sparkle Fresh, Eco Leaf, Florida Sun, Pure Aqua, Cozy Home, Limpi Unit, Lehigh Palm, VIP Clean).
- **Storage**: Automatically synced to `localStorage` (`limpi_user_avatar`).

---

## 🎨 Visual Design & Brand Guidelines

- **Primary Teal**: `#0BA89A`
- **Primary Navy Text**: `#04264A`
- **Soft Mint Cards**: `#E6F6F4`
- **Background**: `#F8FCFB` & `#F0F5F4`
- **Typography**: Clean, rounded typography (`Plus Jakarta Sans`)
- **Buttons**: Full-width rounded buttons with tactile active press animations (`active:scale-[0.98]`).
- **No Screen Counters**: Clean, minimal segment indicators without clunky page numbers or "(1/10)" badges.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd limpi

# Install dependencies
npm install

# Start the local development server
npm run dev
```

The app will start at `http://localhost:3000`.

### Scripts

- `npm run dev` — Starts the development server with Hot Module Replacement.
- `npm run build` — Builds the production bundle with type checking.
- `npm run lint` — Validates TypeScript types (`tsc --noEmit`).

---

## 📄 License

Apache-2.0
