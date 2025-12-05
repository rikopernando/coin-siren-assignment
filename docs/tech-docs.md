# Tech Docs

A Technical document for building

## 📜 Technical Development Guide: Coin Siren Landing Page

| **Item**            | **Description**                                                                 |
| ------------------- | ------------------------------------------------------------------------------- |
| **Project Name**    | Coin Siren Landing Page Assignment                                              |
| **Target Audience** | Hiring Manager, Technical Team, Developer (Self)                                |
| **Document Goal**   | To serve as the technical implementation guide to meet all assignment criteria. |

---

## I. 🎯 Project Goal & Scope

### A. Mandatory Technologies

- **Framework:** Next.js 14 (App Router)
- **Programming Language:** TypeScript (Mandatory)
- **Styling:** Tailwind CSS (Mandatory)
- **Linting/Formatting:** ESLint & Prettier (Integrated)
- **Deployment:** Vercel

### B. Final Deliverables

1. Public GitHub Repository.
2. Live Link (Vercel/Other).
3. Pixel-perfect UI implementation based on Figma design (Mobile Responsive).
4. Required Information Submission (Name, Phone Number, CV, GitHub Link, Live Link).

---

## II. 🏗️ Project Architecture & Structure

### A. Atomic Design Pattern

Components will be classified and stored under the `src/components/` directory.

| **Category**  | **Description**                                            | **Project Examples**                               |
| ------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| **Atoms**     | Basic UI elements.                                         | `Button`, `Icon`, `TextAnimated`, `Logo`, `Input`. |
| **Molecules** | Groups of Atoms that interact.                             | `NavBarLink`, `FeatureCard`, `ContactForm`.        |
| **Organisms** | Groups of Molecules/Atoms forming independent sections.    | `Header`, `HeroSection`, `Footer`, `FeatureList`.  |
| **Templates** | Page layouts (without actual data).                        | `LandingPageTemplate`.                             |
| **Pages**     | Server Components that render the Template and fetch data. | `src/app/page.tsx`.                                |

---

### B. Design System & Base Components

- **Choice:** **shadcn/ui**
- **Mechanism:** shadcn/ui code snippets will be used as the base for foundational components. These snippets will then be customized using **Tailwind CSS classes** to match the exact _color palette_ and _typography_ of the Figma design.
- **Configuration:** The shadcn/ui installation will configure the `globals.css` file for the **Tailwind Preset** and the `components.json` file for _alias_ management (`@/components`, `@/lib`).

---

### C. Primary File Structure

`src/
├── app/
│   ├── api/            # Route Handlers
│   │   └── data/       # (Can be subdivided: main, secondary, etc.)
│   │       └── route.ts
│   ├── page.tsx        # Server Component (Data Fetching & Template Rendering)
│   └── layout.tsx
├── components/         # Atomic Design Components (including customized shadcn/ui components)
├── lib/
│   ├── types.ts        # Data Type Definitions
│   └── staticData.ts   # Location for Static Data (Before being used by the Route Handler)
├── styles/
│   └── globals.css     # Includes custom CSS & Tailwind configuration
└── next.config.mjs`

---

## III. ⚙️ Data & Rendering Mechanism

### A. Rendering

- **SSR (Server-Side Rendering):** All pages will be **Server Components** (default in App Router) to leverage Next.js's SSR and caching capabilities.

### B. Data Flow & API Routes

1. **Static Data Source:** The UI data (Korean Text, Links, etc.) will be defined as TypeScript objects in `src/lib/staticData.ts`.
2. **Route Handler:**
   - A Route Handler will be created at `src/app/api/data/route.ts` using the **GET handler**.
   - This handler will simply return the static data imported from `src/lib/staticData.ts`. This fulfills the requirement: **"Make the static sample data in the handler"**.
3. **Parallel Data Fetching:**
   - In the **Page Component** (`page.tsx`), we will call the Route Handler asynchronously.
   - If multiple separable data types are identified (e.g., header data and footer data), we will call them using `Promise.all()` to satisfy the requirement: **"Call the API in parallel"**.

   $$\text{const } [\text{data}_1, \text{data}_2] = \text{await Promise.all}([ \text{fetch}(\text{url}_1), \text{fetch}(\text{url}_2) ]);$$

---

## IV. ✨ UI Implementation & Animation

### A. Responsiveness

- The design must be **fully responsive** for both mobile and desktop views (utilizing Tailwind CSS breakpoints: `sm`, `md`, `lg`, etc.).

### B. Styling

- Utilize **Tailwind CSS utility classes** exclusively.

### C. Animation

- **Requirement:** Apply animatio (based on the description in Figma).
- **Library Choice:** Third-party libraries are permitted. **Framer Motion** is the recommended choice for complex and performant animations in React.
- **Implementation:** If Framer Motion is used, components requiring animation must be defined as **Client Components** (`'use client';`).

---
