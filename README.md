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

## 💵 Plans & Pricing Model

Limpi offers transparent, straightforward curbside cleaning plans:

| Plan | Commitment | Price | Inclusions | Bonus Visits | Extra Bins |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Single Visit** | No commitment | **$19.99** / visit | Up to 2 bins | — | +$10 each |
| **Annual Plan** *(Best Value)* | 1 year | **$239.99** / year | Up to 2 bins (1 visit/mo) | **+5 FREE bonus visits** (17 visits total) | +$10 each |

### Extras
- **Extra visits in the same month** (2 or more services per month): $10 per extra service.
- **Annual Plan members**: Use your 5 free bonus visits to cover extra services.
- **3 or more bins**: $10 extra per bin.
- **Includes up to 2 bins**.

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
   - Transparent pricing card (*"Single visit $19.99, no commitment. Annual plan $239.99 for 1 year with 5 free visits."*).
4. **Plan Selection Screen (`plan`)**:
   - Two cards: **Single Visit** ($19.99, no commitment) and **Annual Plan** ($239.99 for 1 year, 1 visit/mo + 5 free bonus visits).
   - Extras section ($10 extra bin over 2 bins, $10 extra service in same month).
   - Quick bin selector with stepper.
5. **Service Address Screen (`address`)**:
   - Address, unit, gate code, and curbside placement options.
   - Real-time **Lehigh Acres ZIP code verification** (supporting ZIPs `33936`, `33971`, `33972`, `33973`, `33974`, `33976`).
6. **Pick Your Day Screen (`pick-day`)**:
   - Single Visit users choose a date for each booking.
   - Annual users pick their monthly recurring cleaning day, with a dedicated **"Use a free visit"** button and **"Free visits left: 5"** counter.
7. **Checkout Screen (`checkout`)**:
   - Order summary itemizes the plan, extra bins ($10 each), and extra services ($10 each) with the total.
   - Service terms agreement checkbox and Apple Pay / Google Pay / card details.
8. **Confirmation Screen (`confirmation`)**:
   - Animated celebration checkmark, order receipt number (`#LM-89240`), and first scheduled cleaning route.
9. **Home Screen (`home`)**:
   - Curbside address pill and animated **Active Shield**.
   - Hero next cleaning card with date and time window.
   - Small perk card for Annual members: **"Free visits left: 5"**.
10. **Schedule Screen (`schedule`)**:
    - **Upcoming Visits & Past History** tabs.
    - **"Book another visit"** button for Single Visit users; **"Use a free visit"** button for Annual members.
    - Visit management with detail modal.
11. **Visit Details Screen (`visit-detail`)**:
    - Detailed sanitization scope.
    - In-app rescheduling to any weekday within the service area.
12. **Account Screen (`account`)**:
    - Current Plan card: shows *"Single Visit, no commitment"* or *"Annual Plan"* with progress bar *"Month 2 of 12"*, end date, and free-visits-left counter.
    - "Switch to Annual Plan" for Single Visit members; "Upgrade Plan" & "Change Bins" buttons.
    - Settings navigation: Payment method, service address, local help, and logout confirmation modal.
13. **Payment Method Screen (`payment-method`)**:
    - Primary card on file and encrypted card update form.
14. **Edit Address Screen (`edit-address`)**:
    - Real-time Lehigh Acres validation and bin location adjustments.
15. **Help & Support Screen (`help`)**:
    - Local dispatch hours (Monday–Friday 7 AM–5 PM, Saturday 8 AM–1 PM).
    - "Message Us" direct dispatch message form and "Call Us" hotline (`(239) 555-0192`).
    - 100% Sparkle Guarantee policy.
16. **Notifications Screen (`notifications`)**:
    - Arrival alerts and route completion notices with "Mark all read" toggle.

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

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Backend & Database**: [Firebase](https://firebase.google.com/) (Firestore & Firebase Auth)
  - **Project ID**: `limpiapp-639b4`
  - **Firestore Database**: Curbside trash bin cleaning subscriptions, customer profiles, and visits
  - **Authentication**: Google Sign-In & account creation
  - **Security Rules**: Role and owner-enforced ABAC rules (`firestore.rules`)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)

---

## 📄 License

Apache-2.0
