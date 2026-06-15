const projects = [
  {
    id: 25,
    title: "Real Caffeine Calculator",
    urlTitle: "real-caffeine-calculator",
    date: "2026-06-16",
    img: ["/P25.png"],
    liveLink: "https://realcaffeinecalculator.com",
    shortDescription:
      "A browser-based caffeine half-life calculator that shows exactly how much caffeine is in your system right now and when it's safe to sleep, based on your drinks, metabolism, and bedtime.",
    longDescription:
      "Real Caffeine Calculator applies pharmacokinetic exponential decay math to give users a real-time view of caffeine in their bloodstream. Users log any combination of drinks from a 30+ item database spanning Starbucks, energy drinks, teas, and custom entries, then the tool calculates current mg, projects a 24-hour SVG decay chart with color-coded risk zones, and computes the latest safe caffeine cut-off time before bed. Metabolism is fully adjustable for five profiles (normal, fast, slow, pregnant, smoker) driven by CYP1A2 half-life data from NIH research. Built with Astro 6 as a fully static site, styled with Tailwind CSS v4, written in TypeScript and vanilla JS, and deployed on Cloudflare Workers Assets — no server, no account, no data ever leaves the browser.",
    techStack: [
      ["Tailwind CSS", "/TailwindCss.png"],
      ["TypeScript", "/ts.png"],
      ["JavaScript", "/js.png"],
      ["Cloudflare", "/cloudflare.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/realcaffeinecalculator",
    feaTures: [
      {
        title: "Caffeine Calculator — Drink Logger",
        description: [
          {
            text: [
              "The core input panel lets users log one or more drinks consumed at any time of day. Each row has a drink selector (grouped by category as optgroups), a time picker that auto-fills the current time, and a remove button. A custom \"enter mg\" option is available for unlisted drinks.",
              "The drink database includes 30+ real-world entries: 12 coffee drinks (including Starbucks sizes, Death Wish, cold brew), 12 energy drinks (Bang 300mg, Reign 300mg, Monster, Celsius, Red Bull in three sizes), teas, sodas, and a freeform custom entry. All drinks use size-specific names and fixed mg values for accuracy.",
            ],
            listItems: [
              "Add/remove multiple drinks, each with independent time inputs",
              "30+ drinks grouped into Coffee, Energy Drinks, Tea & Other, Custom",
              "Custom drink option lets users enter any mg value directly",
              "Time picker assumes drinks >1 hour in the future occurred yesterday (prevents input errors)",
              "Body weight field (lbs) unlocks a mg/kg load readout, color-coded green/amber/red",
              "Bedtime picker defaults to 11:00 PM, used for all sleep-threshold calculations",
              "Metabolism selector: Normal (5hr), Fast (3hr), Slow (8hr), Pregnant (15hr), Smoker (3hr) half-lives",
            ],
            images: ["/P25_1.png"],
          },
        ],
      },
      {
        title: "Live Results Panel — Current mg, Status & Sleep Risk",
        description: [
          {
            text: [
              "The outputs card shows a large hero number for current mg in system, a status badge that reads \"Log a drink to start / Safe to sleep / Cutting it close / Too much for sleep,\" and a \"You can have caffeine until\" hero timestamp that dynamically inverts from the bedtime to find the latest safe intake window.",
              "Below the chart, three stat rows show: when caffeine clears below 50mg (\"caffeine clears at\"), sleep disruption risk badge with mg-at-bedtime (\"Low impact / Moderate impact / High impact\"), and optional mg/kg load. A red warning banner appears when total intake exceeds the FDA's 400mg daily limit.",
            ],
            listItems: [
              "Hero \"safe until\" time: latest moment a 95mg reference drink keeps bedtime caffeine below 25mg",
              "Safe-until color: green (time available), red (\"None today\"), muted (\"Window passed\")",
              "Current mg counter updates every 60 seconds via setInterval",
              "Sleep disruption risk badge: Low (<25mg at bed), Moderate (25–100mg), High (>100mg)",
              "mg at bedtime shown inline with the sleep risk badge",
              "mg/kg load (green <3, amber 3–6, red >6) — only visible when weight is entered",
              "400mg FDA daily limit warning banner",
            ],
            images: ["/P25_2.png"],
          },
        ],
      },
      {
        title: "24-Hour Caffeine Decay Chart",
        description: [
          {
            text: [
              "An inline SVG chart renders a 24-hour caffeine decay curve starting from the first drink. It samples 240 data points and draws a blue polyline with a gradient fill underneath. Three background color bands show safe (<50mg, green), moderate (50–150mg, amber), and high (>150mg, red) zones.",
              "Vertical dashed markers for \"now\" (white) and \"bedtime\" (purple) are plotted on the chart. A dot with a white center marks the current position on the curve. The chart re-renders on every calculation tick and whenever the theme changes (dark/light mode), swapping axis and grid colors accordingly.",
            ],
            listItems: [
              "240-sample polyline with gradient fill below the curve",
              "Color zone backgrounds: green safe, amber moderate, red high",
              "Orange dashed horizontal line at 50mg \"sleep-safe\" threshold",
              "White dashed \"now\" vertical line with a filled dot marking current position",
              "Purple dashed \"bedtime\" vertical line",
              "X-axis labels every 4 hours; Y-axis labels scale dynamically to peak mg",
              "Chart legend (hidden until drinks are logged): icons for each line and zone",
              "Responds to dark/light theme toggle — all colors update without page reload",
            ],
            images: ["/P25_3.png"],
          },
        ],
      },
      {
        title: "SEO Content — Understanding Caffeine Half-Life",
        description: [
          {
            text: [
              "A structured editorial section below the calculator explains the science in six headed paragraphs: what caffeine half-life is, how CYP1A2 genetics affect clearance, how the calculator formula works, why timing matters for sleep (citing Drake et al. 2013 JCSM), FDA daily limits, and a comparison of caffeine content across popular drink brands.",
            ],
            listItems: [
              "Six in-depth subsections with keyword-rich headings",
              "Inline strong tags highlight key calculator phrases for semantic SEO",
              "Mentions specific mg values for real drinks (Death Wish 728mg, Bang 300mg, Starbucks Cold Brew 205mg)",
              "References the exponential decay formula directly in copy",
            ],
            images: ["/P25_4.png"],
          },
        ],
      },
      {
        title: "FAQ Section (with Schema.org markup)",
        description: [
          {
            text: [
              "A five-question accordion FAQ uses native HTML <details>/<summary> elements for no-JS expand/collapse. Each question also maps to a FAQPage schema.org JSON-LD block injected into <head> for rich result eligibility in Google Search.",
            ],
            listItems: [
              "5 questions: how it works, what half-life is, safe daily limit, when to stop before bed, body weight effect",
              "Native <details> elements — no JavaScript required",
              "FAQPage JSON-LD injected via Astro's head slot",
              "Questions match high-intent search queries",
            ],
            images: ["/P25_5.png"],
          },
        ],
      },
      {
        title: "Sources Section",
        description: [
          {
            text: [
              "A numbered citation list beneath the FAQ links to the five authoritative sources the calculator's science is based on: NIH StatPearls on caffeine half-life range, FDA consumer guidance on the 400mg limit, Drake et al. 2013 in the Journal of Clinical Sleep Medicine, AASM sleep timing recommendations, and USDA FoodData Central for drink caffeine content.",
            ],
            listItems: [
              "NIH StatPearls — half-life 3–15hr range",
              "FDA — 400mg/day safe limit for healthy adults",
              "Drake et al. 2013 (JCSM) — caffeine 6hrs before bed reduces total sleep time",
              "American Academy of Sleep Medicine (AASM)",
              "USDA FoodData Central — caffeine content by beverage",
            ],
            images: ["/P25_6.png"],
          },
        ],
      },
      {
        title: "Dark / Light Theme Toggle",
        description: [
          {
            text: [
              "The site ships dark-first. A sun/moon icon button in the sticky header toggles a `.light` class on <html>, which overrides all CSS custom properties. Theme preference is persisted to localStorage. An inline script in <head> applies the class before first paint, preventing any flash of unstyled content (FOUC).",
              "The calculator's SVG chart listens for a custom `theme-change` DOM event dispatched on toggle and re-renders with the correct axis/grid colors for the active theme.",
            ],
            listItems: [
              "Dark-first design with full light mode via CSS custom property overrides",
              "Preference saved to localStorage and restored on next visit",
              "FOUC prevention via inline `is:inline` script in <head>",
              "Chart re-renders automatically on theme switch",
              "Sticky header uses backdrop-filter blur with theme-aware background",
            ],
            images: ["/P25_7.png"],
          },
        ],
      },
      {
        title: "Responsive Navigation (Mobile Hamburger)",
        description: [
          {
            text: [
              "The sticky header collapses to a hamburger menu on screens narrower than 640px. Clicking the hamburger reveals a dropdown nav with all three links. The hamburger icon swaps to an X when open. Clicking outside the header or any nav link closes the menu.",
            ],
            listItems: [
              "Desktop: horizontal nav links (Calculator, About, Contact) + theme toggle",
              "Mobile: hamburger icon (≤639px) opens a dropdown nav panel",
              "Icon animates: bars → X on open, X → bars on close",
              "Closes on outside click or link tap",
              "Full light/dark theme support in both desktop and mobile nav states",
            ],
            images: ["/P25_8.png"],
          },
        ],
      },
      {
        title: "About Page",
        description: [
          {
            text: [
              "A single-column editorial page explains what the tool is, how it works, and who it's for. A \"Key facts\" card lists five bullet points about the science and privacy model in a styled dark card with checkmarks.",
            ],
            listItems: [
              "What the tool does and who it's for",
              "Key facts card: half-life, sleep threshold, FDA limit, browser-only processing, no sign-up",
              "Disclaimer about medical advice",
              "CTA button linking back to the calculator",
            ],
            images: ["/P25_9.png"],
          },
        ],
      },
      {
        title: "Contact Page (Formspree)",
        description: [
          {
            text: [
              "A clean contact form with Name, Email, Subject, and Message fields submits via the Formspree API using `fetch` with `FormData`. On success, the form resets and shows a green confirmation message. On failure, a red error message appears. The submit button shows \"Sending…\" while in-flight and \"Sent\" on success.",
            ],
            listItems: [
              "Four fields: Name, Email, Subject, Message",
              "Async submission via fetch to Formspree endpoint",
              "Inline success (green) and error (red) feedback without page reload",
              "Submit button disabled during in-flight request to prevent double-submit",
            ],
            images: ["/P25_10.png"],
          },
        ],
      },
    ],
  },
  {
    id: 24,
    title: "Facelees",
    urlTitle: "facelees",
    date: "2026-02-15",
    img: ["/P24.png"],
    liveLink: "https://www.facelees.com/",
    shortDescription:
      "A full-stack Next.js e-commerce platform built in January 2026 for a local client — real-time COD shopping, admin-only access, product/hero image management, order tracking, and Cloudflare optimization.",
    longDescription:
      "Facelees is a modern, end-to-end full-stack e-commerce web application created in January 2026 specifically for a local businessman in Bangladesh. The platform delivers a clean, fast shopping experience with a public-facing shop (landing page) showcasing rotating hero banners, brand logos, and a dynamic product catalog. Customers can browse, search, sort, filter, add items to cart, and place orders via Cash on Delivery — no user registration or login is required for shopping. Authentication and all management features are strictly restricted to pre-approved admin Gmail accounts only. Admins have full control over the catalog (add/edit/delete products with image uploads), hero banners (order sequencing, visibility toggle), order viewing and status updates (pending → confirmed → shipped → delivered/cancelled), and their own profile/password management. Built with Next.js App Router, TypeScript for type safety, Tailwind CSS for responsive dark-themed UI, MongoDB for all data persistence, and Cloudflare for global speed, caching, and security. The application emphasizes performance, mobile-first design, secure admin flows, and real-world business usability for small-to-medium local retailers.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["TypeScript", "/ts.png"],
      ["MongoDB", "/Mongodb.png"],
      ["Cloudflare", "/cloudflare.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Lawrence-Amlan-Gomes",
    feaTures: [
      {
        title: "Public Shop & Landing Page (/)",
        description: [
          {
            text: [
              "The root route functions as both the main landing page and the complete shop interface. It prominently features a rotating hero banner section (controlled by admin), brand logo showcase, and a rich product grid with advanced filtering capabilities.",
              "Products display primary image, brand name (extracted from description), product name, short teaser description, real-time discounted price, original price strikethrough (when discounted), stock availability badge, and prominent Add/Remove from Cart buttons.",
              "Fully public — no authentication required. Optimized for fast loading with Cloudflare edge caching.",
            ],
            listItems: [
              "Dynamic hero banner carousel with admin-defined order and visibility",
              "Brand logos section for visual trust-building",
              "Responsive 1–5 column product grid (mobile to desktop)",
              "Instant search across name, brand, category, and short description",
              "Price sorting (low → high / high → low) with discounted price logic",
              "Visual indicators: discount badge, out-of-stock overlay, in-stock green badge",
              "Smooth hover animations and image zoom effect",
              "Skeleton loading states during initial fetch",
            ],
            images: ["/P24.png", "/P24_3.png"],
          },
        ],
      },
      {
        title: "Admin-Only Authentication System (/login & /register)",
        description: [
          {
            text: [
              "Access to any admin functionality is strictly limited to a predefined list of Gmail addresses. Normal visitors cannot register or log in — registration and login forms include real-time validation and clear restricted-access messaging.",
              "Login supports secure credential checking with detailed error feedback. Registration requires double confirmation and redirects to login upon success. Both pages use a luxurious dark theme with gold accents consistent with the brand.",
            ],
            listItems: [
              "Hard-coded admin Gmail whitelist verification",
              "Real-time input validation (Gmail only, password length, required fields)",
              "Prominent restricted access warnings with red alert styling",
              "Seamless redirect after successful login to shop",
              "Responsive, centered form layout with dark modern aesthetic",
              "Fake hidden fields to improve autofill behavior on mobile/desktop",
            ],
            images: ["/P24_1.png", "/P24_2.png"],
          },
        ],
      },
      {
        title: "Shopping Cart & Cash on Delivery Flow (/cart)",
        description: [
          {
            text: [
              "Persistent cart state allows users to add, remove, and adjust quantities of products. Real-time subtotal calculation includes discount application per item. Checkout uses a clean modal for Cash on Delivery orders, collecting essential delivery information with strong validation.",
              "On successful order placement, the cart clears, an order ID is generated, and a confirmation dialog offers to view orders (redirects to /orders if confirmed).",
            ],
            listItems: [
              "Real-time cart updates with quantity +/- controls",
              "Item removal with confirmation",
              "Accurate subtotal with per-item discounted pricing",
              "COD checkout modal with name, address (textarea), and 11-digit mobile validation",
              "Mobile number format enforcement (starts with 01, exactly 11 digits)",
              "Success feedback with order summary popup",
              "Continue shopping link and clear cart option",
              "Responsive two-column layout on desktop",
            ],
            images: ["/P24_4.png", "/P24_5.png"],
          },
        ],
      },
      {
        title: "Admin Product Catalog Management (/products)",
        description: [
          {
            text: [
              "Comprehensive admin interface for managing the entire product inventory. Admins can create new products (with image upload and preview), edit all fields (including separate short/long descriptions + brand name), toggle stock & visibility, or delete items (with safety checks).",
              "Includes duplicate name prevention, character limits on descriptions, 500-product hard cap, search across multiple fields, and clean card-based display with brand highlighting.",
            ],
            listItems: [
              "Full CRUD for products with optimistic UI updates",
              "Image upload (max 5MB) with live preview and remove option",
              "Combined description field parsed into short/long/brand for display",
              "In-stock / active toggles with visual indicators",
              "Category input (lowercased automatically)",
              "Search by name/category/brand/short description",
              "Hard limit of 500 products enforced",
              "Responsive grid layout with hover effects",
            ],
            images: ["/P24_7.png"],
          },
        ],
      },
      {
        title: "Admin Hero Banner & Branding Control (/advertising)",
        description: [
          {
            text: [
              "Dedicated admin section to manage the rotating hero banners on the landing page. Admins can upload new wide-format images, set unique animation order (sorting priority), toggle visibility, edit existing banners, or delete them.",
              "Enforces maximum 20 images and prevents duplicate serial numbers. Includes aspect ratio guidance (25:10 recommended) for best display across devices.",
            ],
            listItems: [
              "Add/edit/delete hero banners with image upload",
              "Unique animationSerial control (1 = first shown)",
              "Active/inactive toggle with overlay indicator",
              "Image preview with remove button",
              "20-banner strict limit with warning",
              "Sorted display by animation order",
              "Responsive banner cards with overlay controls",
            ],
            images: ["/P24_8.png"],
          },
        ],
      },
      {
        title: "Admin Order Dashboard & Status Management (/orders)",
        description: [
          {
            text: [
              "Powerful admin overview showing every placed order with advanced filtering by status (all/pending/confirmed/shipped/delivered/cancelled), free-text search (name/email/mobile/address), and date sorting (newest/oldest).",
              "Each order card displays complete customer details, full item list with images/prices/subtotals, total amount, and one-click status change buttons with optimistic UI and rollback on failure.",
            ],
            listItems: [
              "Complete order list with real-time status updates",
              "Multi-filter: status dropdown + keyword search",
              "Date sorting toggle (newest/oldest first)",
              "Detailed view: customer info, items grid, grand total",
              "Status change buttons with visual feedback",
              "Responsive card layout with color-coded status badges",
              "Error handling with rollback on failed updates",
            ],
            images: ["/P24_9.png"],
          },
        ],
      },
      {
        title: "Admin Personal Profile & Security (/profile)",
        description: [
          {
            text: [
              "Simple yet secure admin profile page displaying name and email. Provides direct link to change password and a prominent logout button with confirmation dialog.",
              "Ensures admins can maintain account security without exposing unnecessary fields.",
            ],
            listItems: [
              "Display of admin name and email",
              "Dedicated 'Change Password' navigation",
              "Secure logout with confirmation prompt",
              "Consistent dark/gold theme matching the brand",
              "Responsive two-column layout on larger screens",
            ],
            images: ["/P24_10.png"],
          },
        ],
      },
      {
        title: "Technical Implementation & Optimizations",
        description: [
          {
            text: [
              "Developed using Next.js 14+ App Router with TypeScript for full type safety and maintainability. Tailwind CSS powers a consistent dark-mode, luxury-feel UI with gold accents. All data (products, hero images, orders) is stored and managed in MongoDB with efficient schemas and real-time hooks.",
              "Cloudflare provides edge caching, DDoS protection, global CDN delivery, and performance optimization. Features include protected admin routes, optimistic UI updates, form validation, image upload handling, responsive design across all devices, and production-ready error handling.",
            ],
            listItems: [
              "Next.js App Router + TypeScript full-stack architecture",
              "Tailwind CSS responsive dark theme with gold branding",
              "MongoDB for products, orders, and hero images persistence",
              "Cloudflare for speed, security, and global edge delivery",
              "Admin-only route protection via Gmail whitelist",
              "Real-time cart state management with hooks",
              "Optimistic updates & rollback on failed mutations",
              "Image upload validation (size/format/preview)",
              "Mobile-first responsive design throughout",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 23,
    title: "Expense Tracker",
    urlTitle: "expense-tracker",
    date: "2026-01-10",
    img: ["/P23.png"],
    liveLink: "https://expense-tracker-bold.vercel.app/",
    shortDescription:
      "A modern full-stack expense tracking SaaS built in January 2026 with Next.js and TypeScript, featuring real-time bank accounts, cash management, monthly spending tracking, and clean UI/UX.",
    longDescription:
      "Expense Tracker is a full-stack Next.js SaaS application developed in January 2026 to help users gain complete clarity over their personal finances. It allows tracking of multiple bank accounts, physical cash, monthly spendings with date-based entries, and provides visual summaries of income, expenses, and balances. Built with Next.js, TypeScript, React, Tailwind CSS, and MongoDB, the application offers secure authentication, responsive design, real-time data synchronization, and an intuitive dashboard experience — perfect for anyone who wants simple yet powerful personal finance management.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["TypeScript", "/ts.png"],
      ["JavaScript", "/js.png"],
      ["MongoDB", "/Mongodb.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Expense-Tracker",
    feaTures: [
      {
        title: "Landing Page",
        description: [
          {
            text: [
              "The landing page introduces the Expense Tracker SaaS with a professional hero section, showcasing the core value of financial clarity. Users can navigate to login, registration, or dashboard (after authentication).",
            ],
            listItems: [
              "Modern and clean hero section design",
              "Theme toggle support (light/dark)",
              "Responsive layout for all devices",
              "Clear calls-to-action for getting started",
            ],
            images: ["/P23_1.png"],
          },
        ],
      },
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Standard secure login and registration system, identical in flow to other projects. Users register with email and password, then log in to access the dashboard. Unauthenticated users are redirected to /login when trying to access protected routes.",
            ],
            listItems: [
              "Secure login form (/login)",
              "Registration form (/register)",
              "MongoDB with hashed password storage",
              "Responsive authentication pages",
            ],
            images: ["/P23_2.png", "/P23_3.png"],
          },
        ],
      },
      {
        title: "Dashboard - Financial Overview",
        description: [
          {
            text: [
              "The main dashboard (/dashBoard) provides a complete overview of finances split into three panels: Bank Accounts & Cash, Monthly Overview, and Selected Month Spendings. Users can manage banks, cash, months, and daily expenses with real-time updates and persistent MongoDB storage.",
            ],
            listItems: [
              "Three-column responsive layout",
              "Real-time balance calculations",
              "Unsaved changes detection & save button",
              "Beautiful gradient cards & modern UI",
            ],
            images: ["/P23_4.png"],
          },
        ],
      },
      {
        title: "Bank Accounts Management",
        description: [
          {
            text: [
              "Users can add new banks, view current balances, and perform deposit, withdrawal, and inter-bank transfer operations through a clean modal interface. All changes are instantly reflected and saved to the database.",
            ],
            listItems: [
              "Add new bank accounts",
              "Deposit / Withdraw / Transfer functionality",
              "Search/filter bank accounts",
              "Rich visual bank cards with gradients",
            ],
            images: ["/P23_5.png"],
          },
        ],
      },
      {
        title: "Cash Management",
        description: [
          {
            text: [
              "Dedicated cash management section allows users to track physical cash, deposit cash to banks, or record new cash earnings — all with safety checks and real-time updates.",
            ],
            listItems: [
              "Track physical cash balance",
              "Deposit cash to any bank",
              "Record new cash income",
              "Clean modal interface for cash actions",
            ],
            images: ["/P23_6.png"],
          },
        ],
      },
      {
        title: "Monthly Spending Tracking",
        description: [
          {
            text: [
              "Users can create new months, select any month to view, and add daily spendings with date, item name, and amount. The system prevents duplicate dates and updates cash balance accordingly.",
            ],
            listItems: [
              "Add previous/next/current months",
              "Monthly spending list with totals",
              "Add/edit/delete daily expenses",
              "Date uniqueness validation",
            ],
            images: ["/P23_7.png", "/P23_8.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js App Router and TypeScript for type-safe full-stack development. Uses MongoDB for persistent financial data, Tailwind CSS for responsive styling, and modern React patterns for smooth user experience.",
            ],
            listItems: [
              "Next.js App Router + TypeScript",
              "MongoDB for real-time finance data",
              "Optimistic UI updates & error handling",
              "Responsive design with theme support",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 22,
    title: "My Daily Routine",
    urlTitle: "my-daily-routine",
    date: "2026-04-20",
    img: ["/P22MainImage.png"],
    liveLink: "https://mydailyroutine.app",
    shortDescription:
      "A production full-stack Next.js 16 productivity SaaS — dual authentication (NextAuth Google OAuth + custom JWT email/password with OTP verification), Gemini-powered AI routine builder, drag-and-drop weekly timeline, goal tracking, analytics, and Paddle one-time checkout with HMAC-verified webhooks. Shipped to mydailyroutine.app on 20 April 2026.",
    longDescription:
      "My Daily Routine is a polished, production-grade full-stack productivity SaaS that helps users plan weekly routines, track long-term goals, and analyze daily completion stats. Architected on Next.js 16 (App Router, React Compiler) with React 19.2 and strict TypeScript, the platform combines a high-fidelity drag-and-drop weekly timeline, a Gemini-backed AI routine assistant, Recharts-powered analytics, image-resized profile uploads to S3-compatible storage, and a hardened Paddle one-time payment flow with HMAC-SHA256 webhook signature verification. It ships two parallel authentication systems — NextAuth v5 for Google OAuth and a custom jose-signed JWT cookie for email/password users with hashed-OTP email verification — unified behind middleware route protection and a `getActionActor()` server-action guard that re-derives the caller from cookies and never trusts client-passed identifiers. Backed by MongoDB via Mongoose with global connection caching, MongoDB-backed fixed-window rate limiting, a strict CSP, deep server-side response sanitization, and a daily cron job that prunes unverified accounts, the project demonstrates real-world security, observability, and product-completeness end-to-end. Live at mydailyroutine.app, shipped 20 April 2026.",
    techStack: [
      ["Next.js 16", "/NextJs.png"],
      ["React 19.2", "/React.png"],
      ["TypeScript", "/ts.png"],
      ["JavaScript", "/js.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["MongoDB", "/Mongodb.png"],
      ["Redux Toolkit", "/redux.png"],
      ["Framer Motion", "/framerMotion.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Daily-Routine",
    feaTures: [
      {
        title: "Marketing Landing & Pricing",
        description: [
          {
            text: [
              "A polished marketing surface — landing page, pricing page, testimonials, and full legal coverage (privacy, terms, refund) — built to convert first-time visitors and satisfy Paddle merchant-of-record requirements.",
              "Fully SEO-equipped with App Router metadata, dynamic sitemap, robots, and PWA manifest. Responsive across mobile, tablet, and desktop with class-based dark mode powered by a custom `ThemeProvider`.",
              "Animated hero, feature reveals, and micro-interactions delivered with Framer Motion 12 for a premium feel without sacrificing performance.",
            ],
            listItems: [
              "Animated, conversion-focused hero with CTA routing to register / dashboard",
              "Dedicated `/pricing`, `/testimonials`, `/privacy`, `/terms-and-conditions`, `/refund` routes",
              "App Router `metadata`, `sitemap.ts`, `robots.ts`, and PWA `manifest.ts`",
              "Class-based dark mode (`darkMode: 'class'`) with persistent theme",
              "Framer Motion entrance animations, Lucide / React Icons iconography",
              "Strict CSP with Paddle frame-src allowlisted in `next.config.ts`",
            ],
            images: ["/P22LandingPage.png", "/P22PricingPage.png"],
          },
        ],
      },
      {
        title: "Dual Authentication — NextAuth (Google) + Custom JWT (Email / Password)",
        description: [
          {
            text: [
              "Two identity systems run in parallel. Google users sign in through NextAuth v5 beta. Email/password users authenticate against a custom flow that verifies passwords with `bcrypt` and issues an HS256 JWT (7-day expiry) signed via `jose`, stored in an httpOnly `authToken` cookie.",
              "A single `src/middleware.ts` protects every authenticated route (`/dashBoard`, `/goals`, `/stats`, `/profile`, `/billing`, `/ai-routine`, `/admin`, `/changePassword`, `/color`). It checks for a NextAuth session first, then falls back to verifying the JWT cookie with `jwtVerify`, and redirects to `/login?callbackUrl=...` on failure.",
              "Every server action re-derives the caller server-side via `getActionActor()` and `assertActorCanAccessEmail()` — the client-passed `email` argument is treated as untrusted input. Non-admin callers can only mutate their own data; admins are explicitly elevated.",
            ],
            listItems: [
              "NextAuth v5 beta with Google provider + custom JWT (jose, HS256, 7-day expiry)",
              "`bcrypt` password hashing with `select: false` schema field, `.select('+password')` on demand",
              "httpOnly, signed `authToken` cookie with strict same-site posture",
              "Edge-compatible middleware route protection with callback URL preservation",
              "Server-action actor guard (`getActionActor` / `assertActorCanAccessEmail`) — never trusts client email",
              "Forgot-password & reset flow under `(auth)` route group",
            ],
            images: [
              "/P22LoginPage.png",
              "/P22RegisterPage.png",
              "/P22ForgotPassword.png",
              "/P22ChangePassword.png",
            ],
          },
        ],
      },
      {
        title: "Email OTP Verification & Cron-Based Account Hygiene",
        description: [
          {
            text: [
              "New email/password registrations trigger a hashed one-time-password emailed via Brevo SMTP through `nodemailer`. Codes live in a dedicated `OtpCode` collection with `expiresAt` and `attempts` counters to defeat brute-force and replay.",
              "An authenticated cron endpoint (`GET /api/cron/cleanup-unverified`, Bearer `CRON_SECRET`) runs daily to delete unverified accounts older than 30 days, keeping the user collection clean and compliant.",
              "Transactional email templates also drive welcome and password-reset flows, all routed through the same hardened SMTP layer.",
            ],
            listItems: [
              "Hashed OTP storage with `expiresAt` TTL and `attempts` lockout counter",
              "Brevo SMTP via `nodemailer` for OTP, welcome, and password-reset emails",
              "`/api/send-otp` + `/api/verify-jwt` route handlers with rate limiting",
              "Bearer-token-protected cron endpoint deletes unverified accounts >30 days old",
              "MongoDB-backed fixed-window rate limiting (`ApiRateLimit` collection, IP + key parts)",
            ],
            images: ["/P22OtpVerification.png"],
          },
        ],
      },
      {
        title: "Dashboard — Drag-and-Drop Weekly Timeline",
        description: [
          {
            text: [
              "The dashboard is the heart of the product: a full seven-day timeline rendered side-by-side with a continuous midnight-to-midnight time axis and a colored 'now' line that ticks live to the user's current position in the day.",
              "Tasks are draggable up, down, and (on desktop) across day columns with a blue drop preview that shows the exact landing slot before release. A `sync drag` mode shifts a task by the same delta across every day it appears, making bulk routine adjustments effortless.",
              "Each task carries a category (work, health, sleep, meals, etc.), start/end time, and color coding. Zoom controls expand the day for fine-grained editing, a 'jump to now' button snaps the viewport to the current time, and undo / redo (Ctrl+Z / Ctrl+Y) are wired through Redux.",
              "When a task's start time arrives, the app fires an audible chime and a toast notification with `Mark complete` / `Dismiss` actions that log straight to the user's stats.",
            ],
            listItems: [
              "Seven-day side-by-side timeline with continuous 24-hour axis",
              "Live `now` line that auto-updates to the current minute",
              "Drag-to-reschedule with blue ghost preview of the landing slot",
              "Cross-day drag on desktop, single-day swipe view on mobile / tablet",
              "`Sync drag` mode propagates a single drag across every weekday a task lives on",
              "Zoom in / zoom out, jump-to-now, and Ctrl+Z / Ctrl+Y undo / redo",
              "Real-time start-of-task chime + toast with `Mark complete` / `Dismiss`",
              "Manual green-check completion on today's view writes directly to stats",
            ],
            images: [
              "/P22DashBoardPage.png",
              "/P22DashboardMobile.png",
              "/P22DragPreview.png",
            ],
          },
        ],
      },
      {
        title: "Routine Editor — Single-Day, Multi-Day, and Swap",
        description: [
          {
            text: [
              "A sidebar editor opens when adding a new task or clicking any task on the timeline. Pre-filled fields drive a fast edit loop: rename, recategorize, retime, and apply changes to the current day or to any subset of weekdays in one save.",
              "The form supports adding the same task to multiple days at once (`Add task in multiple days`), deleting a task from a single day or from every day at once (`Delete from every day`), and a dedicated swap-time-slots feature that exchanges the time windows of two tasks atomically.",
              "Conflict detection prevents overlapping schedules; duplicate-name prevention per day keeps things tidy; minimum and maximum duration are validated server-side. Save persists to MongoDB through Server Actions.",
            ],
            listItems: [
              "Day pills select the editing target — current day or a custom multi-day set",
              "Add / edit / delete across single day, custom set, or every weekday",
              "Atomic swap-time-slots between two existing tasks",
              "Strict overlap, duplicate-name, and duration validation",
              "Quick search / filter within the current day's task list",
              "Server Action persistence with toast feedback (Sonner 2)",
            ],
            images: ["/P22SidebarRoutine.png", "/P22TaskEditor.png"],
          },
        ],
      },
      {
        title: "AI Routine Builder — Gemini-Powered Conversational Planning",
        description: [
          {
            text: [
              "Premium members unlock `/ai-routine`, a separate timeline where users converse with Google Gemini (`@google/genai`) to draft and refine an entire weekly routine. The system prompt automatically references the user's real routine and the current AI-generated draft so suggestions always stay grounded in their actual life.",
              "Each conversation is persisted per-user in a dedicated `AIRoutine` collection alongside the AI-generated routine. Gemini returns a reply plus an optional `updatedRoutine`, which is rendered live on the AI timeline as the chat unfolds.",
              "When the user is happy, a single click in the dashboard sidebar copies the AI routine into their main routine — closing the loop between agentic suggestion and committed schedule.",
            ],
            listItems: [
              "`@google/genai` (Gemini) via dedicated server action `aiRoutineResponse`",
              "Per-user `AIRoutine` Mongoose collection: conversation history + generated routine",
              "System prompt grounded in the user's real routine and current AI draft",
              "Live timeline that re-renders as Gemini streams `updatedRoutine` back",
              "One-click copy from AI routine into the main routine",
              "Redux `response` slice manages chat state; `usePrice` / `useAuth` gate access",
            ],
            images: ["/P22AIRoutinePage.png", "/P22AIChatFlow.png"],
          },
        ],
      },
      {
        title: "Goals — Subtasks, Priorities, and Timeline Integration",
        description: [
          {
            text: [
              "The goals page lets users capture longer-horizon objectives — each with a name, priority, due date, optional time, subtasks, repeat rule, tags, and a reminder date. Tap the status pill to cycle a goal through to-do → in progress → done; pin important goals so they stay at the top.",
              "Goals that carry a specific time appear as markers directly on the routine timeline on the day they are due — so the user's long-term ambitions and short-term schedule remain visually connected in one view.",
              "All goal data lives on the same User document used for routine and stats, so reads stay fast and writes stay atomic.",
            ],
            listItems: [
              "Goal CRUD with priority, due date, time, repeat rule, tags",
              "Nested subtasks with independent completion state",
              "Status cycle (to-do → in progress → done) with one-tap pill",
              "Pinning to surface high-priority goals",
              "Timeline markers on the routine view for time-bound goals",
              "Stored as embedded subdocuments on the User schema for atomic writes",
            ],
            images: ["/P22GoalsPage.png", "/P22GoalEditor.png"],
          },
        ],
      },
      {
        title: "Stats & Analytics — Streaks, Trends, Insights",
        description: [
          {
            text: [
              "Every completion the user logs (manual check, notification action, or automatic completion) feeds a per-day stats record on the User document. The `/stats` page renders four tabs of analytics powered by Recharts 3.",
              "The Overview tab shows daily completion percentage, current streak, best-ever streak, and overall average. The Monthly tab breaks performance down by month with detailed tables. The Tasks tab reveals which tasks the user completes most often. The Insights tab generates personalized analysis — strongest day, three-month trend lines, and habit observations driven by the user's own data.",
              "Charts include all-time trend, daily performance, weekly averages, and a calendar heat map for an at-a-glance feel for any month of the year.",
            ],
            listItems: [
              "Recharts 3 line, bar, and heat-map visualizations",
              "Streak tracker (current + best) with rolling daily completion %",
              "All-time, daily, and weekly-average trend charts",
              "Monthly drilldown with tabular data and per-month aggregates",
              "Per-task frequency analysis (what gets done, what slips)",
              "Personalized insights: strongest weekday, 3-month trend, habit notes",
              "Calendar heat map for the entire year of completion data",
            ],
            images: [
              "/P22StatsOverview.png",
              "/P22StatsMonthly.png",
              "/P22StatsTasks.png",
              "/P22StatsInsights.png",
            ],
          },
        ],
      },
      {
        title: "Profile & Photo Pipeline — S3 + sharp Image Processing",
        description: [
          {
            text: [
              "The profile page lets users edit their display name and upload a profile photo. Photos are processed entirely server-side: a `uploadPhoto(email, FormData)` Server Action streams the file through `sharp`, which resizes it to 256×256 WebP, then writes it to S3-compatible storage (MinIO via `@aws-sdk/client-s3`) under `profiles/<userId>/<uuid>.webp` with `ACL: public-read`.",
              "The previous `photoKey` is deleted on replacement so storage stays tidy. The Server Action body limit is intentionally raised to 10 MB in `next.config.ts` to accommodate the upload pipeline without weakening other action paths.",
              "Mongoose documents are always run through `cleanUserForClient` before being serialized to Redux or into a JWT, stripping `_id`, version keys, and Buffer internals — a deliberate guard against leaking ORM internals to the browser.",
            ],
            listItems: [
              "Server Action `uploadPhoto` accepts `FormData`, validates, resizes, and uploads",
              "`sharp` resizes to a normalized 256×256 WebP for fast load and small footprint",
              "S3-compatible storage (MinIO) via `@aws-sdk/client-s3`, public-read ACL",
              "Old `photoKey` deleted on replacement (no orphaned objects)",
              "10 MB Server Action body limit configured explicitly in `next.config.ts`",
              "`cleanUserForClient` sanitizes Mongoose docs before reaching the wire",
            ],
            images: ["/P22ProfilePage.png", "/P22PhotoUpload.png"],
          },
        ],
      },
      {
        title: "Paddle Billing — One-Time Checkout & HMAC-Verified Webhooks",
        description: [
          {
            text: [
              "Premium uses a one-time purchase model via Paddle. The frontend opens Paddle Checkout through `@paddle/paddle-js`; a 100% discount path exists for the Test plan to keep QA and demos friction-free.",
              "`POST /api/paddle/webhooks` validates the `Paddle-Signature` header (`ts=...;h1=...`) by computing HMAC-SHA256 over `ts:rawBody` and comparing with `crypto.timingSafeEqual` to defeat timing attacks. Every event is deduplicated through a `PaddleWebhookEvent` collection so retries never double-extend access.",
              "On a verified successful payment the webhook calls the `updatePaymentType` Server Action, which extends the user's `expiredAt` and updates `paymentType`. The `/billing` page surfaces the user's current plan, expiry, and a fresh checkout CTA.",
            ],
            listItems: [
              "Paddle.js client SDK with one-time-purchase checkout overlay",
              "100% discount path for the Test plan (controlled by feature flag)",
              "HMAC-SHA256 webhook signature verification with `timingSafeEqual` compare",
              "Idempotent event handling via `PaddleWebhookEvent` dedupe collection",
              "Strict CSP `frame-src` allowlist for Paddle sandbox + production domains",
              "`updatePaymentType` Server Action extends `expiredAt` atomically",
              "Billing page surfaces plan, expiry, and renewal CTA",
            ],
            images: [
              "/P22BillingPage.png",
              "/P22PaddleCheckout.png",
            ],
          },
        ],
      },
      {
        title: "Admin Tooling — Users, Feedback, Moderation",
        description: [
          {
            text: [
              "An admin-gated `/admin` route gives privileged users a dashboard for managing the user base and triaging product feedback. Access is enforced both at the middleware layer and inside every Server Action via the `isAdmin` flag on `getActionActor()`.",
              "Admins can list users, inspect account state (verified, premium, expiry), and respond to feedback submissions stored in a dedicated `Feedback` collection — closing the loop between user signal and product iteration.",
            ],
            listItems: [
              "Admin-only `/admin` route with double-layered guards (middleware + actions)",
              "User list with verification, plan, and expiry visibility",
              "Feedback inbox backed by `Feedback` Mongoose collection",
              "Same actor-guard pattern (`getActionActor`) — no client-trust escapes",
            ],
            images: ["/P22AdminPanel.png", "/P22AdminFeedback.png"],
          },
        ],
      },
      {
        title: "Security, Performance, and Architecture",
        description: [
          {
            text: [
              "Strict Content Security Policy in `next.config.ts` allowlists Paddle frames only, locks `frame-ancestors` to `'none'`, and sets `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a `Permissions-Policy` that disables camera, microphone, and geolocation by default.",
              "MongoDB-backed fixed-window rate limiting protects sensitive endpoints (`enforceRateLimit(req, { route, max, windowMs, keyParts })`) keyed by IP plus optional context. A TTL index expires counters automatically — no cron required.",
              "The Mongoose connection is cached on `globalThis._mongoosePromise` to survive Next.js HMR and serverless invocation churn. React Compiler is enabled (`reactCompiler: true`) so explicit `useMemo` / `useCallback` is reserved for cases the compiler can't see through.",
              "Redux Toolkit holds three slices — `auth` (user, routine, goals, stats), `price` (Paddle pricing), `response` (AI conversation) — with `cleanUserForClient` enforced on every server-to-client boundary.",
              "App Router Server Actions are colocated in a single `src/app/actions/index.ts` (~970 LOC, banner-organized by domain) so the action surface is auditable and easy to grep.",
            ],
            listItems: [
              "Strict CSP, `X-Frame-Options: DENY`, `nosniff`, locked `Permissions-Policy`",
              "MongoDB-backed fixed-window rate limiter with TTL index expiry",
              "Global Mongoose promise cache (`globalThis._mongoosePromise`) for HMR + serverless safety",
              "React Compiler enabled — automatic memoization, leaner component code",
              "Redux Toolkit (auth / price / response) with sanitized payloads only",
              "Server Actions consolidated in one banner-organized file for auditability",
              "`mongoose.models[name] || mongoose.model(...)` pattern to survive HMR",
              "`select: false` on `password` schema field, explicit `+password` opt-in",
              "Edge-friendly middleware checks NextAuth session then JWT fallback",
              "Bearer-protected cron, HMAC-verified webhooks, idempotent event handling",
            ],
            images: ["/P22Architecture.png", "/P22DarkMode.png"],
          },
        ],
      },
      {
        title: "Tech Stack at a Glance",
        description: [
          {
            text: [
              "Next.js 16 (App Router, React Compiler) · React 19.2 · TypeScript 5.9 (strict) · Tailwind CSS 3.4 (class-based dark mode) · Framer Motion 12 · Redux Toolkit 2 + react-redux 9.",
              "NextAuth v5 beta (Google) · custom JWT via `jose` + `bcrypt` · MongoDB / Mongoose 8 · `@aws-sdk/client-s3` + `sharp` (MinIO) · Paddle (`@paddle/paddle-js`) · `@google/genai` (Gemini) · `nodemailer` over Brevo SMTP · Recharts 3 · Sonner 2 · ESLint 9 (flat config).",
            ],
            listItems: [
              "Frontend: Next.js 16 App Router, React 19.2, TypeScript strict, Tailwind 3.4, Framer Motion 12",
              "State: Redux Toolkit 2 with three feature slices (auth / price / response)",
              "Auth: NextAuth v5 beta + jose-signed JWT + bcrypt + httpOnly cookies",
              "Data: MongoDB / Mongoose 8 with global connection cache",
              "Media: S3-compatible MinIO via `@aws-sdk/client-s3` + sharp 256×256 WebP pipeline",
              "Payments: Paddle one-time checkout + HMAC-SHA256 webhook verification",
              "AI: `@google/genai` (Gemini) for conversational routine building",
              "Email: nodemailer over Brevo SMTP (OTP, welcome, password reset)",
              "Analytics: Recharts 3 charts, Sonner 2 toasts, Lucide / React Icons",
              "Tooling: ESLint 9 flat config, TypeScript ESLint 8, Next.js implicit `tsc --noEmit`",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 16,
    title: "Be Healthy",
    urlTitle: "be-healthy",
    date: "2025-09-15",
    img: ["/P16pic.png"],
    liveLink: "https://be-healthy-delta.vercel.app/",
    shortDescription:
      "A full-stack Next.js application built in September 2025 for health and wellness, featuring BMI calculation, meal planning, workout tracking, and community engagement with MongoDB integration.",
    longDescription:
      "Be Healthy is a full-stack Next.js application developed in September 2025 to promote physical fitness, healthy eating, effective workouts, and mental well-being. It offers ten features, including a BMI Calculator accessible without login, and nine others (Profile Settings, Dashboard, Healthy Recipe Suggestions, Nutrition Tracker, Workout Planner, Wellness Goal Setting, Guided Meditation Sessions, Health Coach, and Community) available post-login. Built with Next.js, React, Tailwind CSS, JavaScript, and MongoDB, the platform provides a responsive, user-friendly experience with real-time data management, showcasing skills in full-stack development, database integration, and dynamic UI design.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["MongoDB", "/Mongodb.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Be-Healthy",
    feaTures: [
      {
        title: "Landing Page (/ Route)",
        description: [
          {
            text: [
              "The landing page introduces the Be Healthy app, designed to promote physical fitness, healthy eating, workouts, and mental well-being, with a theme toggle for light/dark modes.",
              "Only the BMI Calculator is accessible without login; other features require user authentication.",
            ],
            listItems: [
              "Engaging introduction to health and wellness features",
              "Light/dark theme toggle for personalized experience",
              "Restricted access to most features without login",
              "Responsive design for all devices",
            ],
            images: ["/P16pic.png"],
          },
        ],
      },
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Unauthenticated users are directed to the /login route with a login form, and can navigate to the /register route to create an account with name, email, and secure password.",
              "MongoDB stores passwords as hashed values for security, and post-registration, users are redirected to the login page.",
            ],
            listItems: [
              "Secure login and registration with MongoDB",
              "Hashed password storage for data protection",
              "Seamless navigation between login and registration",
              "Responsive form design for all devices",
            ],
            images: ["/P16_1pic.png", "/P16_2pic.png"],
          },
        ],
      },
      {
        title: "User Profile Settings",
        description: [
          {
            text: [
              "The Profile Settings section allows users to upload, change, or delete their profile picture, and update name, bio, phone number, and password (with current password verification).",
              "Users can also log out from this page, ensuring secure session management.",
            ],
            listItems: [
              "Editable profile with photo management",
              "Secure password updates with verification",
              "Logout functionality with redirection",
              "Responsive profile interface",
            ],
            images: ["/P16_3pic.png", "/P16_4pic.png"],
          },
        ],
      },
      {
        title: "Dashboard",
        description: [
          {
            text: [
              "The Dashboard provides a centralized overview, initially empty, that dynamically updates with summaries of user activity across BMI, recipes, nutrition, workouts, goals, and meditation.",
              "It serves as a hub for tracking progress across the app’s features.",
            ],
            listItems: [
              "Dynamic activity summaries for user engagement",
              "Real-time updates with MongoDB integration",
              "Responsive layout for progress tracking",
              "Centralized hub for all health features",
            ],
            images: ["/P16_5pic.png"],
          },
        ],
      },
      {
        title: "BMI Calculator",
        description: [
          {
            text: [
              "The BMI Calculator, accessible without login, allows users to input age, height (feet/cm), weight (kg/lbs), and gender to calculate BMI, view body condition, and see a chart of BMI ranges.",
              "Users can recalculate BMI as needed for updated results.",
            ],
            listItems: [
              "Input fields for age, height, weight, and gender",
              "BMI result with body condition analysis",
              "Visual chart for BMI range comparison",
              "Recalculation functionality for flexibility",
            ],
            images: ["/P16_6pic.png"],
          },
        ],
      },
      {
        title: "Healthy Recipe Suggestions",
        description: [
          {
            text: [
              "This feature provides a daily meal plan tailored to the user’s BMI and body condition, offering three meal options for each of five daily meals.",
              "Users can select one meal per time slot and revisit/reselect meals anytime.",
            ],
            listItems: [
              "Personalized meal plans based on BMI",
              "Three meal options for five daily slots",
              "Flexible meal selection and reselection",
              "Responsive meal plan interface",
            ],
            images: ["/P16_7pic.png"],
          },
        ],
      },
      {
        title: "Nutrition Tracker",
        description: [
          {
            text: [
              "The Nutrition Tracker displays total calories and nutritional breakdown for meals completed from the daily plan, updating dynamically as users log meals.",
              "For example, it shows calories/nutrients for three of five meals consumed.",
            ],
            listItems: [
              "Real-time calorie and nutrient tracking",
              "Dynamic updates based on meal completion",
              "User-friendly nutritional breakdown display",
              "MongoDB-backed data persistence",
            ],
            images: ["/P16_8pic.png"],
          },
        ],
      },
      {
        title: "Workout Planner",
        description: [
          {
            text: [
              "The Workout Planner suggests four workout plans based on BMI and body condition: two for six days a week and two for five days a week.",
              "Users can select a plan and switch to another if their needs change.",
            ],
            listItems: [
              "Tailored workout plans for varying schedules",
              "Flexible plan selection and reselection",
              "BMI-based workout recommendations",
              "Responsive workout plan interface",
            ],
            images: ["/P16_9pic.png"],
          },
        ],
      },
      {
        title: "Wellness Goal Setting",
        description: [
          {
            text: [
              "Users can select from 15 daily habits related to nutrition, exercise, sleep, mental health, and hydration to set personal wellness goals.",
              "Goals can be modified or reset at any time for flexibility.",
            ],
            listItems: [
              "15 habit options for goal setting",
              "Flexible goal modification and reset",
              "Comprehensive wellness categories",
              "User-friendly goal management interface",
            ],
            images: ["/P16_10pic.png"],
          },
        ],
      },
      {
        title: "Guided Meditation Sessions",
        description: [
          {
            text: [
              "This feature offers 15 tips and instructions to improve mental health and build resilience, with options to revisit and reselect practices.",
            ],
            listItems: [
              "15 meditation tips for mental well-being",
              "Flexible selection of meditation practices",
              "Responsive and calming interface design",
              "Support for mental health resilience",
            ],
            images: ["/P16_11pic.png"],
          },
        ],
      },
      {
        title: "Health Coach",
        description: [
          {
            text: [
              "The Health Coach provides information on 50 common minor ailments and their first-aid treatments, e.g., searching 'fever' displays at-home relief options.",
            ],
            listItems: [
              "Searchable database of 50 minor ailments",
              "Practical first-aid treatment information",
              "User-friendly health resource interface",
              "MongoDB-backed data retrieval",
            ],
            images: ["/P16_12pic.png"],
          },
        ],
      },
      {
        title: "Community",
        description: [
          {
            text: [
              "The Community section allows users to view posts from other Be Healthy users and create, edit, or delete their own posts to foster connection and motivation.",
            ],
            listItems: [
              "View and interact with community posts",
              "CRUD operations for user-generated posts",
              "Responsive community engagement interface",
              "MongoDB-backed post storage",
            ],
            images: ["/P16_13pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast performance and SEO-friendly content delivery.",
              "Integrates MongoDB for real-time user and health data management, with Tailwind CSS for responsive, utility-first styling.",
            ],
            listItems: [
              "Next.js dynamic routing for feature pages",
              "MongoDB for secure data storage and retrieval",
              "React hooks for state and effect management",
              "Tailwind CSS for consistent, responsive design",
              "Optimized performance for health app functionality",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: "Faculty Review",
    urlTitle: "faculty-review",
    date: "2025-07-20",
    img: ["/P15pic.png"],
    liveLink: "https://bracu-faculty-review.vercel.app/",
    shortDescription:
      "A full-stack Next.js application built in July 2025 for faculty reviews, enabling students to comment, rate, and view faculty details with admin management features.",
    longDescription:
      "Faculty Review is a full-stack Next.js application developed in July 2025 to facilitate student reviews and ratings of university faculty. The landing page displays faculty cards with search functionality, accessible only after login. Students can comment, view others' comments, and rate faculty, while admins can manage faculty data. Built with Next.js, React, Tailwind CSS, and JavaScript, the platform ensures a responsive and intuitive experience, showcasing skills in authentication, dynamic rendering, and role-based functionality.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["MongoDB", "/Mongodb.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Bracu-Faculty-Review",
    feaTures: [
      {
        title: "Landing Page (/ Route)",
        description: [
          {
            text: [
              "The landing page displays a grid of faculty cards, each showing the faculty's name, image, and initial, with a search input box to filter by initials, name, or department.",
              "Access to the landing page and its features requires user authentication, redirecting unauthenticated users to the login route.",
            ],
            listItems: [
              "Responsive faculty card grid layout",
              "Dynamic search by initials, name, or department",
              "Protected route requiring login",
              "Intuitive and engaging UI design",
            ],
            images: ["/P15pic.png"],
          },
        ],
      },
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Unauthenticated users attempting to access the landing page or navbar items are redirected to the /login route, featuring a login form.",
              "The login page provides a link to the /register route for new users to create an account, with seamless navigation between the two.",
            ],
            listItems: [
              "Secure login form with validation",
              "Navigation to registration page",
              "Responsive form design for all devices",
              "Consistent authentication flow",
            ],
            images: ["/P15_1pic.png", "/P15_2pic.png"],
          },
        ],
      },
      {
        title: "Faculty Review Interface (/ Route, Post-Login)",
        description: [
          {
            text: [
              "After login, clicking a faculty card renders a different component on the same / route, with the upper left side allowing students to add comments about the faculty.",
              "The bottom left shows other students' comments, the top right displays detailed faculty information, and the bottom right allows rating the faculty from 0 to 5 (0 for no rating).",
            ],
            listItems: [
              "Interactive comment section for student feedback",
              "Display of peer comments for community insights",
              "Detailed faculty information view",
              "Rating system with 0-5 scale",
            ],
            images: ["/P15_3pic.png"],
          },
        ],
      },
      {
        title: "Admin Dashboard (/admin Route)",
        description: [
          {
            text: [
              "Admins, after login, see an additional 'Edit' icon in the navbar, leading to the /admin route where they can add, edit, or delete faculty information in the database.",
              "The admin interface ensures comprehensive management of faculty data with a user-friendly design.",
            ],
            listItems: [
              "CRUD operations for faculty data",
              "Admin-only access to management features",
              "Responsive layout for database operations",
              "Secure data handling and validation",
            ],
            images: ["/P15_4pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast performance and SEO-friendly content delivery.",
              "Utilizes Tailwind CSS for responsive, utility-first styling, with React for dynamic component rendering and state management.",
            ],
            listItems: [
              "Next.js dynamic routing for role-based interfaces",
              "React hooks for state and effect management",
              "Tailwind CSS for consistent, responsive design",
              "Secure authentication and data handling",
              "Optimized performance for user interactions",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Time Track",
    urlTitle: "time-track",
    date: "2025-05-10",
    img: ["/P9pic.png"],
    liveLink: "https://timetrack-ten.vercel.app/",
    shortDescription:
      "A full-stack Next.js application built in May 2025 for daily routine time management, featuring task creation, scheduling, and MongoDB integration.",
    longDescription:
      "Time Track is a full-stack Next.js application developed in May 2025 to help users manage their daily routines efficiently. It features a user-friendly dashboard where users can create, edit, and delete tasks with customizable schedules (daily or weekly) and time formats (AM/PM or 24-hour). The system integrates MongoDB for real-time data management, ensuring seamless task tracking and profile management. Built with Next.js, React, Tailwind CSS, JavaScript, and MongoDB, the platform offers a responsive experience, showcasing skills in full-stack development, database integration, and dynamic UI design.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["MongoDB", "/Mongodb.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/TimeTrack",
    feaTures: [
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Unauthenticated users are redirected to the /login route, featuring a login form, with an option to navigate to the /register route for account creation.",
              "The login and registration pages provide a secure and seamless authentication flow, consistent with modern web standards.",
            ],
            listItems: [
              "Secure login form with MongoDB-backed authentication",
              "Seamless navigation between login and registration",
              "Responsive form design for all devices",
              "User-friendly authentication interface",
            ],
            images: ["/P9_1pic.png", "/P9_2pic.png"],
          },
        ],
      },
      {
        title: "Task Management Dashboard",
        description: [
          {
            text: [
              "After login, users access a centralized dashboard where they can create tasks, assign names, set times in AM/PM or 24-hour format, and choose daily or weekly recurrence.",
              "Tasks can be edited or deleted, with real-time updates stored in MongoDB for persistent data management.",
            ],
            listItems: [
              "Task creation with customizable time formats",
              "Support for daily or weekly task scheduling",
              "Edit and delete functionality for tasks",
              "Responsive dashboard layout for task management",
            ],
            images: ["/P9_3pic.png"],
          },
        ],
      },
      {
        title: "Profile Route",
        description: [
          {
            text: [
              "Clicking the profile icon in the navbar navigates to the /profile route, displaying user information from registration, with options to upload, change, or remove a profile photo, update name, bio, password (but not email), and log out.",
              "The profile functionality mirrors that of the Library Management project, ensuring a consistent user experience.",
            ],
            listItems: [
              "Editable profile with photo and personal details",
              "Secure updates for name, bio, and password",
              "Logout functionality with redirection to login",
              "Responsive profile page layout",
            ],
            images: ["/P9_4pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast performance and SEO-friendly content delivery.",
              "Integrates MongoDB for real-time task and user data management, with Tailwind CSS for responsive, utility-first styling.",
            ],
            listItems: [
              "Next.js dynamic routing for authentication and profile",
              "MongoDB for efficient task storage and retrieval",
              "React hooks for state and effect management",
              "Tailwind CSS for consistent, responsive design",
              "Real-time task updates with database integration",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: "Library Management",
    urlTitle: "library-management",
    date: "2025-10-15",
    img: ["/P19pic.png"],
    liveLink: "https://library-management-system-alpha-nine.vercel.app/",
    shortDescription:
      "A custom full-stack Next.js library management system to be built in October 2025 for a local client's small personal library, with user borrowing (max 3 books), fine tracking for overdue returns, admin book management, and MongoDB backend.",
    longDescription:
      "Library Management will be a full-stack Next.js application I will develop in October 2025 for one of my local clients in Dhaka — he runs a small personal/community library and needs a simple, reliable digital system to manage his book collection. The app will support user registration/login, browsing and borrowing up to 3 books at a time, automatic fine calculation (100 TK per day per overdue book), borrowing history, profile management, and search. Admins (the client himself) will be able to add/edit/delete books, view all users, and maintain data integrity (e.g., cannot delete borrowed books). Built with Next.js, React, Tailwind CSS, JavaScript, and MongoDB, it will provide a clean, responsive interface that will save him hours of manual record-keeping and help track loans more accurately for his library users.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["MongoDB", "/Mongodb.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Azmain-Library",
    feaTures: [
      {
        title: "Landing Page (/ Route)",
        description: [
          {
            text: [
              "The landing page displays a grid of book cards with images and IDs, accessible only after login, with a navbar containing History and Login (or profile icon post-login).",
              "Unauthenticated users clicking cards or navbar items are redirected to the /login route.",
            ],
            listItems: [
              "Responsive book card grid layout",
              "Protected routes requiring authentication",
              "Dynamic navbar with profile icon post-login",
              "Visual fallback to first name's letter if no profile image",
            ],
            images: ["/P19pic.png", "/P19_3pic.png"],
          },
        ],
      },
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Unauthenticated users are redirected to the /login route, featuring a login form, with an option to navigate to the /register route for account creation.",
              "Post-login, users see their profile image or first name’s initial in the navbar on the landing page.",
            ],
            listItems: [
              "Secure login form with MongoDB-backed authentication",
              "Seamless navigation between login and registration",
              "Responsive form design for all devices",
              "Dynamic navbar update post-authentication",
            ],
            images: ["/P19_1pic.png", "/P19_2pic.png"],
          },
        ],
      },
      {
        title: "User Book Interaction (/user Route)",
        description: [
          {
            text: [
              "Clicking a book card navigates to the /user route, showing detailed book information on the left with a 'Borrow Book' button, 'Return Book' if borrowed, or messages like 'No more books in the stock' or 'Maximum book borrow limit (3) has reached.'",
              "The right side displays the user’s borrowed books with images, borrow dates, expired dates, and a red pop-up for overdue fines (100 TK per book per day, e.g., 400 TK for two books overdue by two days).",
            ],
            listItems: [
              "Detailed book view with borrow/return options",
              "Borrow limit enforcement (max 3 books)",
              "Real-time fine calculation for overdue books",
              "Responsive split layout for book and borrow list",
            ],
            images: [
              "/P19_5pic.png",
              "/P19_6pic.png",
              "/P19_7pic.png",
              "/P19_8pic.png",
              "/P19_9pic.png",
            ],
          },
        ],
      },
      {
        title: "Search Functionality",
        description: [
          {
            text: [
              "A search input box on the landing page allows users to filter book cards by title, author, genre, or ID, providing real-time results with MongoDB queries.",
            ],
            listItems: [
              "Dynamic search filtering across multiple fields",
              "Real-time updates to book card display",
              "User-friendly search input design",
              "MongoDB-backed search optimization",
            ],
            images: ["/P19_4pic.png"],
          },
        ],
      },
      {
        title: "History Route (/history)",
        description: [
          {
            text: [
              "The /history route, accessible via the navbar, displays the user’s lifetime borrowing history in book cards, each showing the book image, borrowing date, and returning or expired date.",
            ],
            listItems: [
              "Comprehensive borrowing history display",
              "Card-based layout for borrowing history",
              "Clear date information for borrowing and returns",
              "Responsive design for history overview",
            ],
            images: ["/P19_10pic.png"],
          },
        ],
      },
      {
        title: "Profile Route (/profile)",
        description: [
          {
            text: [
              "The /profile route shows the user’s personal information from registration, with options to upload, change, or remove a profile photo, update name, bio, password (but not email), and log out.",
            ],
            listItems: [
              "Editable profile with photo and personal details",
              "Secure updates for name, bio, and password",
              "Logout functionality with redirection to login",
              "Responsive profile page layout",
            ],
            images: ["/P19_11pic.png"],
          },
        ],
      },
      {
        title: "Admin Dashboard (/admin Route)",
        description: [
          {
            text: [
              "Admins access all user features plus two additional navbar items: Users and Admin. The /admin route allows adding new books via a form on the left and viewing/editing/deleting existing books in a row-based list on the right.",
              "Books cannot be deleted if currently borrowed by any user, with MongoDB ensuring data integrity.",
            ],
            listItems: [
              "Form for adding new books with validation",
              "Row-based list for book management",
              "Restricted deletion for borrowed books",
              "MongoDB-backed CRUD operations",
            ],
            images: ["/P19_12pic.png", "/P19_12pic_2.png"],
          },
        ],
      },
      {
        title: "Users Route (/allUsers)",
        description: [
          {
            text: [
              "The /allUsers route, accessible to admins via the navbar, displays all user information in card format, including user image, name, email, and phone.",
            ],
            listItems: [
              "Card-based layout for user information",
              "Display of user image and contact details",
              "Responsive design for admin user management",
              "Secure access restricted to admins",
            ],
            images: ["/P19_13pic.png", "/P19_13pic_2.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast performance and SEO-friendly content delivery.",
              "Integrates MongoDB for robust, real-time book and user data management, with Tailwind CSS for responsive, utility-first styling.",
            ],
            listItems: [
              "Next.js dynamic routing for user and admin pages",
              "MongoDB for efficient data storage and retrieval",
              "React hooks for state and effect management",
              "Tailwind CSS for consistent, responsive design",
              "Fine calculation logic for overdue books",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Cafeteria",
    urlTitle: "cafeteria",
    date: "2025-02-20",
    img: ["/P7pic.png"],
    liveLink: "https://cafeteria-opal-psi.vercel.app/",
    shortDescription:
      "A full-stack React.js e-commerce platform built in February 2025 for a cafeteria, featuring user/admin dashboards, food ordering, and Firebase integration.",
    longDescription:
      "Cafeteria is a full-stack React.js application developed in February 2025 for an online food ordering platform. It supports user authentication via Firebase, with distinct interfaces for admins and users. Admins can manage food items, employees, members, vendors, raw materials, works, and payments, while users can browse food items, add to cart, and view profiles. Styled with Tailwind CSS and integrated with Firebase for real-time database operations, the site ensures a responsive, intuitive experience, showcasing skills in authentication, role-based routing, and dynamic UI.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["Firebase", "/Firebase.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Cafeteria",
    feaTures: [
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Unauthenticated users are directed to the /login route, displaying a login form for secure access.",
              "From the login page, users can navigate to the /register route to create a new account.",
            ],
            listItems: [
              "Secure login form with Firebase authentication",
              "Seamless navigation to registration page",
              "Responsive form design for all devices",
              "User-friendly authentication flow",
            ],
            images: ["/P7_1pic.png", "/P7_2pic.png"],
          },
        ],
      },
      {
        title: "Admin Dashboard",
        description: [
          {
            text: [
              "Upon admin login, users are redirected to the landing page (/) with a navbar containing Home, Food Items, Employees, Members, Vendors, Raw Materials, Works, Payment, and Log Out.",
              "Clicking 'Food Items' navigates to /foodItems, where admins can update, edit, or delete food items in the Firebase database.",
            ],
            listItems: [
              "Role-based admin navbar with management options",
              "CRUD operations for food items via Firebase",
              "Responsive admin interface for database management",
              "Secure admin-only access to sensitive routes",
            ],
            images: ["/P7_3pic.png", "/P7_4pic.png"],
          },
        ],
      },
      {
        title: "User Dashboard",
        description: [
          {
            text: [
              "Upon user login, the landing page (/) displays a navbar with Profile, Home, Food Items, Cart, and Log Out options, tailored for user interaction.",
              "The landing page provides a welcoming interface consistent with admin access but with user-specific functionality.",
            ],
            listItems: [
              "User-specific navbar with relevant options",
              "Consistent landing page design for all roles",
              "Responsive and intuitive user interface",
              "Secure user authentication via Firebase",
            ],
            images: ["/P7_5pic.png"],
          },
        ],
      },
      {
        title: "Food Items Route (/foodItems)",
        description: [
          {
            text: [
              "For users, the /foodItems route displays a grid of food item cards, each featuring an image, name, quantity, price, and 'Add to Cart' button.",
              "The interface allows users to browse and select food items for purchase, distinct from the admin’s management view.",
            ],
            listItems: [
              "Responsive food item card grid layout",
              "Clear display of item details and pricing",
              "Interactive 'Add to Cart' functionality",
              "User-focused browsing experience",
            ],
            images: ["/P7pic.png"],
          },
        ],
      },
      {
        title: "Cart Route (/cart)",
        description: [
          {
            text: [
              "Clicking the Cart icon navigates users to the /cart route, showing all selected food items with their total price.",
              "Users can proceed to payment or empty the cart using dedicated buttons.",
            ],
            listItems: [
              "Dynamic cart display with total cost",
              "Options to proceed to payment or clear cart",
              "Responsive design for cart management",
              "Real-time updates with Firebase integration",
            ],
            images: ["/P7_6pic.png"],
          },
        ],
      },
      {
        title: "Profile Route (/profile)",
        description: [
          {
            text: [
              "The /profile route displays the user’s personal information provided during registration, offering a clear and concise view of their account details.",
            ],
            listItems: [
              "Display of user registration details",
              "Responsive profile page layout",
              "Secure data retrieval via Firebase",
              "Clean and user-friendly interface",
            ],
            images: ["/P7_7pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for dynamic, component-based architecture and Firebase for secure authentication and real-time database operations.",
              "Utilizes Tailwind CSS for responsive, utility-first styling, ensuring a consistent and modern design across all routes.",
            ],
            listItems: [
              "Firebase for authentication and data management",
              "React Router for role-based navigation",
              "React hooks for state and effect management",
              "Tailwind CSS for rapid, responsive styling",
              "Optimized performance for e-commerce functionality",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: "Our Agency",
    urlTitle: "our-agency",
    date: "2025-01-25",
    img: ["/P14pic.png"],
    liveLink: "https://our-agency-one.vercel.app/",
    shortDescription:
      "A frontend Next.js website built in January 2025 for a custom agency, showcasing their work with dynamic animations and responsive design.",
    longDescription:
      "Our Agency is a frontend Next.js website developed in January 2025 for a custom agency to highlight their portfolio. The site features a dynamic landing page with interactive work previews, a dedicated works route, and a contact form. Built with Next.js, React, Framer Motion, Tailwind CSS, and JavaScript, it uses Framer Motion for smooth animations on hover and navigation. The platform offers a responsive, engaging experience, showcasing skills in dynamic routing, animation integration, and modern UI design.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Framer Motion", "/framerMotion.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/OurAgency",
    feaTures: [
      {
        title: "Landing Page (/ Route)",
        description: [
          {
            text: [
              "The landing page features a responsive navbar with 'Our Work,' 'Play Music,' and 'Get in Touch' buttons, creating an intuitive navigation experience.",
              "The hero section includes a heading, subheading, and smaller divs listing all agency works, with Framer Motion animations enhancing interactivity.",
            ],
            listItems: [
              "Responsive navbar with interactive buttons",
              "Dynamic hero with engaging heading and subheading",
              "Work preview divs with Framer Motion animations",
              "Consistent design across devices",
            ],
            images: ["/P14pic.png"],
          },
          {
            text: [
              "On mouseover of any work div, the background image changes to the work’s image, and the heading/subheading area updates to show the work’s image, title, small description, and work type.",
            ],
            listItems: [
              "Dynamic background image change on hover",
              "Animated content swap using Framer Motion",
              "Interactive work previews with title and type",
              "Smooth transitions for enhanced UX",
            ],
            images: ["/P14_1pic.png"],
          },
        ],
      },
      {
        title: "Work Detail Page (/works/{work-title})",
        description: [
          {
            text: [
              "Clicking a work div navigates to a dynamic route (/works/{work-title}), displaying a detailed view of the selected work, including its image, title, type, and comprehensive description.",
              "The page provides an immersive experience with rich content and consistent styling.",
            ],
            listItems: [
              "Dynamic routing for individual work pages",
              "Detailed work descriptions with images",
              "Consistent layout with landing page previews",
              "Responsive design for detailed content",
            ],
            images: ["/P14_2pic.png"],
          },
        ],
      },
      {
        title: "Works Route (/works)",
        description: [
          {
            text: [
              "The Works route, accessible via the 'Our Work' navbar link, displays all work cards with images, titles, and types, mirroring the landing page’s interactive design.",
              "Clicking any card navigates to the respective /works/{work-title} route for detailed information.",
            ],
            listItems: [
              "Card-based layout for all agency works",
              "Interactive cards with images and types",
              "Seamless navigation to detailed work pages",
              "Framer Motion animations for card interactions",
            ],
            images: ["/P14_3pic.png"],
          },
        ],
      },
      {
        title: "Contact Route (/contact)",
        description: [
          {
            text: [
              "The Contact route, accessible via the 'Get in Touch' button, features a 'Send Message' form for users to submit inquiries or feedback.",
              "The form is designed for simplicity and reliability, ensuring effective communication with the agency.",
            ],
            listItems: [
              "Integrated contact form with validation",
              "Responsive design for desktop and mobile",
              "Clear call-to-action for user inquiries",
              "Consistent styling with Tailwind CSS",
            ],
            images: ["/P14_4pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast performance and SEO-friendly content delivery.",
              "Utilizes Framer Motion for smooth animations on hover and navigation, combined with Tailwind CSS for responsive, utility-first styling.",
            ],
            listItems: [
              "Next.js dynamic routing for work pages",
              "Framer Motion for interactive animations",
              "React hooks for state and effect management",
              "Tailwind CSS for consistent, responsive design",
              "Optimized performance for agency portfolio",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 17,
    title: "Chemisty MCQ Test",
    urlTitle: "home-test",
    date: "2025-12-10",
    img: ["/P17_2_screenshotOfLandingPage.png"],
    liveLink: "https://chemistry-mcq-test.vercel.app/",
    shortDescription:
      "A comprehensive SSC Chemistry MCQ preparation platform with intelligent 10-question tests, built-in 10-minute timer, complete syllabus coverage, exam tips, user authentication, progress tracking, and performance analytics.",
    longDescription:
      "Your SSC Chemistry MCQ Test application will be a comprehensive educational platform designed specifically for students preparing for SSC (Secondary School Certificate) chemistry examinations. The application will feature an intelligent MCQ generation system that randomly selects 10 chemistry questions from a curated database covering all major branches including Inorganic, Physical, and Organic Chemistry, with a built-in 10-minute timer to simulate real exam conditions. Beyond just testing, the platform will offer extensive learning resources through a comprehensive coverage section that displays the complete SSC chemistry syllabus in an interactive, expandable format, allowing students to systematically review topics, subtopics, and key concepts. The application will also include strategic exam tips that provide test-taking techniques, subject-specific shortcuts, and common pitfalls to avoid, helping students maximize their performance. With a robust user authentication system, progress tracking capabilities, and detailed performance analytics displayed through interactive line charts, students will be able to monitor their improvement over time, save scores, and track their learning journey. The modern, responsive interface built with Next.js 14 and Tailwind CSS will ensure a seamless learning experience across all devices, making it an all-in-one solution for SSC chemistry exam preparation that combines practice, learning, strategy, and progress monitoring in a single, user-friendly platform.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["TypeScript", "/ts.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Chemistry-MCQ-Test",
    feaTures: [
      {
        title: "Landing Page & Authentication",
        description: [
          {
            text: [
              "A clean, motivational landing page welcomes SSC students and guides them toward the main features.",
              "Robust user authentication system (login/register) allows users to create accounts, save progress, and track performance over time.",
            ],
            listItems: [
              "Encouraging design tailored for SSC Chemistry students",
              "Secure login and registration with email/password",
              "Protected routes for personalized experience",
              "Responsive and mobile-friendly interface",
            ],
            images: [
              "/P17_2_screenshotOfLandingPage.png",
              "/P17_1_screenshotOfRegistrationPage.png",
              "/P17_1_screenshotOfLoginPage.png",
            ],
          },
        ],
      },
      {
        title: "MCQ Test System with Timer",
        description: [
          {
            text: [
              "The core feature allows students to take realistic model tests. The system randomly selects 10 high-quality MCQs from a comprehensive database covering Inorganic, Physical, and Organic Chemistry.",
              "A built-in 10-minute countdown timer simulates actual exam pressure.",
            ],
            listItems: [
              "Random selection of 10 MCQs per test",
              "Full coverage of SSC Chemistry syllabus (Grades 9-10)",
              "10-minute timer with visual countdown",
              "Realistic exam-style questions with 4 options each",
              "Instant submission and scoring",
            ],
            images: [
              "/P17_3_screenshotOfMCQTestInterface.png",
              "/P17_4_screenshotOfTimerAndQuestions.png",
            ],
          },
        ],
      },
      {
        title: "Syllabus Coverage Section",
        description: [
          {
            text: [
              "An interactive, expandable syllabus viewer displays the complete SSC Chemistry syllabus.",
              "Students can browse all chapters, topics, and subtopics in an organized format for systematic revision.",
            ],
            listItems: [
              "Fully structured SSC Chemistry syllabus",
              "Expandable accordion-style sections",
              "Topic-wise and subtopic-wise breakdown",
              "Easy navigation for quick review",
            ],
            images: ["/P17_5_screenshotOfSyllabusCoverage.png"],
          },
        ],
      },
      {
        title: "Exam Tips & Strategies",
        description: [
          {
            text: [
              "Dedicated section providing valuable exam strategies, time-management tips, subject-specific shortcuts, and common mistakes to avoid in SSC Chemistry exams.",
            ],
            listItems: [
              "Test-taking techniques and shortcuts",
              "Chapter-wise important tips",
              "Common pitfalls and how to avoid them",
              "Practical advice for maximizing scores",
            ],
            images: ["/P17_6_screenshotOfExamTipsPage.png"],
          },
        ],
      },
      {
        title: "Progress Tracking & Analytics",
        description: [
          {
            text: [
              "After each test, students can view detailed performance analytics including score, accuracy, time taken, and weak areas.",
              "Interactive line charts show improvement trends over multiple attempts.",
            ],
            listItems: [
              "Save and review past test scores",
              "Performance analytics with line charts",
              "Progress tracking across attempts",
              "Identification of strong and weak topics",
            ],
            images: [
              "/P17_7_screenshotOfPerformanceAnalytics.png",
              "/P17_8_screenshotOfProgressCharts.png",
            ],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js 14 (App Router) for excellent performance and SEO. The modern, clean UI is powered by Tailwind CSS, ensuring a responsive experience on all devices (mobile-first design).",
              "The application combines practice tests, learning resources, strategy guides, and progress monitoring into one powerful platform.",
            ],
            listItems: [
              "Next.js 14 + TypeScript for type safety and performance",
              "Tailwind CSS for modern, responsive design",
              "Curated question database with random selection",
              "10-minute timer implementation",
              "Interactive charts for analytics",
              "User authentication and progress persistence",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Protein Corner",
    urlTitle: "protein-corner",
    date: "2024-11-15",
    img: ["/P8pic.png"],
    liveLink: "https://protein-corner-frontend.vercel.app/",
    shortDescription:
      "A frontend Next.js e-commerce platform built in November 2024 for Protein Corner, showcasing protein-based products with filtering, cart, and payment features.",
    longDescription:
      "Protein Corner is a frontend Next.js e-commerce application developed in November 2024 to sell protein-based products like chicken, fish, beef, egg, and milk. The site features a dynamic hero section with a product video, a responsive navbar, product cards with filtering options, a contact form, a cart system, and a payment route. Built with Next.js, React, Tailwind CSS, and JavaScript, it delivers a fast, user-friendly experience, highlighting skills in dynamic routing, state management, and responsive design.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/protein-corner-frontend",
    feaTures: [
      {
        title: "Landing Page (/ Route)",
        description: [
          {
            text: [
              "The landing page features a hero section with a video showcasing chicken, fish, beef, egg, and milk, creating an engaging introduction to the store.",
              "The navbar includes links to Shop, Contact, Payment, Login, and a Cart icon, with 'Enter Shop' and 'Contact Us' buttons in the hero section.",
            ],
            listItems: [
              "Dynamic hero video for product engagement",
              "Responsive navbar with intuitive navigation",
              "Prominent call-to-action buttons in hero",
              "Consistent design across devices",
            ],
            images: ["/P8pic.png"],
          },
          {
            text: [
              "Scrolling down reveals a product catalog with cards displaying image, name, price, discount, and an 'Add to Cart' button, alongside filtering options for all, chicken, beef, egg, milk, and fish.",
            ],
            listItems: [
              "Responsive product card grid layout",
              "Dynamic filtering by product category",
              "Clear pricing and discount display",
              "Interactive 'Add to Cart' functionality",
            ],
            images: ["/P8_1pic.png"],
          },
        ],
      },
      {
        title: "Shop Route",
        description: [
          {
            text: [
              "The Shop route mirrors the product catalog from the landing page, featuring cards with image, name, price, discount, and 'Add to Cart' button, along with category filters for all, chicken, beef, egg, milk, and fish.",
              "This dedicated route provides a focused shopping experience with consistent design and functionality.",
            ],
            listItems: [
              "Consistent product card layout with landing page",
              "Category-based filtering for easy browsing",
              "Seamless add-to-cart interactions",
              "Optimized for performance and usability",
            ],
            images: ["/P8_1_1pic.png"],
          },
        ],
      },
      {
        title: "Cart Functionality",
        description: [
          {
            text: [
              "Clicking 'Add to Cart' on a product card adds the item to the cart, accessible via the Cart icon in the navbar, displaying all added products.",
              "Users can adjust quantities using '+' and '-' buttons for each product in the cart.",
            ],
            listItems: [
              "Dynamic cart with real-time updates",
              "Quantity adjustment for each product",
              "Responsive cart display for all devices",
              "State management for cart persistence",
            ],
            images: ["/P8_3pic.png"],
          },
        ],
      },
      {
        title: "Contact Route",
        description: [
          {
            text: [
              "The Contact route features a 'Send Message' form linked to the company email, allowing users to submit inquiries or support requests, similar to the Utes project.",
              "The form is designed for simplicity and reliability, ensuring effective communication with the Protein Corner team.",
            ],
            listItems: [
              "Integrated contact form with email functionality",
              "Form validation for reliable submissions",
              "Responsive design for desktop and mobile",
              "Clear call-to-action for inquiries",
            ],
            images: ["/P8_2pic.png"],
          },
        ],
      },
      {
        title: "Payment Route",
        description: [
          {
            text: [
              "The Payment route displays all products added to the cart, their total cost, and a 'Checkout' button to complete the purchase process.",
              "The layout ensures clarity and ease of use for finalizing transactions.",
            ],
            listItems: [
              "Comprehensive cart summary with total cost",
              "Checkout button for transaction completion",
              "Responsive and clear payment interface",
              "Secure and streamlined purchase flow",
            ],
            images: ["/P8_4pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast load times and SEO-friendly content delivery.",
              "Utilizes Tailwind CSS for a responsive, utility-first design system, maintaining consistency across all routes and devices.",
            ],
            listItems: [
              "Next.js dynamic routing for shop and payment pages",
              "React hooks for state and effect management",
              "Tailwind CSS for rapid, responsive styling",
              "Optimized image and video handling",
              "SEO-friendly structure for e-commerce visibility",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Utes",
    urlTitle: "utes",
    date: "2024-10-20",
    img: ["/P12pic.png"],
    liveLink: "https://utes.vercel.app/",
    shortDescription:
      "A frontend Next.js website built in October 2024 for Utes, an IT solutions company, featuring a comprehensive showcase of services, clients, and career opportunities with responsive design.",
    longDescription:
      "Utes is a frontend Next.js website developed in October 2024 for Utes, an IT solutions company, where I served as the sole frontend developer. The platform showcases the company's services, clients, and career opportunities through a professional interface with dynamic routing. It includes a responsive navbar with theme toggle and login, a hero section, detailed service pages, client testimonials, career listings, a contact form, and an about page. Built with Next.js, Tailwind CSS, and JavaScript, the site ensures a seamless, modern user experience, highlighting my skills in dynamic routing, responsive design, and content presentation.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Utes",
    feaTures: [
      {
        title: "Landing Page (/ Route)",
        description: [
          {
            text: [
              "The landing page features a responsive navbar with the Utes logo, links to Services, Clients, Career, Contact, About, a theme toggle button, and a login button for user authentication.",
              "The hero section displays an image of the company building with a heading 'Transforming Your Ideas into Digital Reality' and a subheading 'Expert IT Solutions Designed to Optimize Operations, Enhance Security, and Propel Your Business into the Future.'",
            ],
            listItems: [
              "Responsive navbar with dynamic theme toggle and login",
              "Engaging hero section with impactful imagery and messaging",
              "Clear typography and professional layout",
              "Smooth scrolling and interactive card previews",
            ],
            images: ["/P12pic.png"],
          },
          {
            text: [
              "Scrolling down reveals cards showcasing services, clients, and career opportunities, providing a quick overview of Utes's capabilities.",
            ],
            listItems: [
              "Card-based layout for services, clients, and careers",
              "Responsive grid optimized for all devices",
              "Interactive hover effects for user engagement",
              "Consistent visual hierarchy for easy navigation",
            ],
            images: ["/P12_1pic.png"],
          },
        ],
      },
      {
        title: "Services Route",
        description: [
          {
            text: [
              "The Services route details Utes’s offerings, including Web Development, Android App Development, iOS App Development, Domain and Hosting, Digital Marketing, Email Marketing, Cyber Security Service, and Graphic Design.",
              "Each service includes a detailed description, e.g., 'Our IT solution company offers expert web development services, creating responsive, user-friendly websites tailored to your business needs,' paired with logos and visuals.",
            ],
            listItems: [
              "Detailed service descriptions with business value",
              "Service-specific logos and imagery",
              "Responsive layout for multi-device access",
              "SEO-optimized content for discoverability",
            ],
            images: ["/P12_2pic.png"],
          },
        ],
      },
      {
        title: "Clients Route",
        description: [
          {
            text: [
              "The Clients route showcases Utes's portfolio of successful projects and client testimonials, highlighting partnerships across various industries including technology, healthcare, and e-commerce.",
              "Each client case study includes project details, challenges faced, solutions delivered, and measurable outcomes, demonstrating Utes's expertise and reliability.",
            ],
            listItems: [
              "Detailed client case studies with project outcomes",
              "Testimonials from satisfied clients",
              "Industry-specific success stories",
              "Visual project showcases and results",
            ],
            images: ["/P12_3pic.png"],
          },
        ],
      },
      {
        title: "Career Route",
        description: [
          {
            text: [
              "The Career route displays current job openings at Utes, including positions for software developers, designers, and IT specialists, with detailed job descriptions and requirements.",
              "Each listing includes role responsibilities, required qualifications, benefits offered, and a straightforward application process for prospective candidates.",
            ],
            listItems: [
              "Current job openings with detailed descriptions",
              "Clear requirements and qualifications",
              "Company benefits and culture information",
              "Easy application process for candidates",
            ],
            images: ["/P12_4pic.png"],
          },
        ],
      },
      {
        title: "Contact Route",
        description: [
          {
            text: [
              "The Contact route features a 'Send Message' form linked to the company email, enabling users to submit inquiries or support requests.",
              "The form is designed for ease of use, ensuring seamless communication with the Utes team.",
            ],
            listItems: [
              "Integrated contact form with email functionality",
              "Form validation for reliable submissions",
              "Responsive design for desktop and mobile devices",
              "Clear call-to-action for business inquiries",
            ],
            images: ["/P12_5pic.png"],
          },
        ],
      },
      {
        title: "About Route",
        description: [
          {
            text: [
              "The About route presents 'About Utes' with a compelling narrative: 'At Utes, we are dedicated to transforming businesses through innovative IT solutions. With a team of experienced professionals, we specialize in software development, cloud services, and cybersecurity.'",
              "The page emphasizes the company's mission, customer-centric approach, and commitment to excellence and continuous improvement.",
            ],
            listItems: [
              "Compelling company narrative and mission statement",
              "Showcase of specialized services and expertise",
              "Customer-centric approach and tailoring emphasis",
              "Professional content tailored for business partnerships",
            ],
            images: ["/P12_6pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring optimal performance and SEO benefits for the corporate website.",
              "Utilizes Tailwind CSS for a responsive, utility-first design system that maintains consistency across all routes and devices.",
            ],
            listItems: [
              "Next.js dynamic routing for multi-page architecture",
              "Tailwind CSS for rapid, responsive development",
              "React components for reusable UI elements",
              "Optimized image handling and performance",
              "SEO-friendly structure for business visibility",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Guest Book",
    urlTitle: "guest-book",
    date: "2024-09-25",
    img: ["/P6pic.png"],
    liveLink: "https://guest-book-gamma.vercel.app/",
    shortDescription:
      "A full-stack React.js application built in September 2024 for an interactive guest book platform, featuring user authentication, profile customization, and responsive design.",
    longDescription:
      "Guest Book is a full-stack React.js application developed in September 2024 to create an interactive platform where users can log in, customize their profiles, and manage personal details. The app features authentication routes (/login and /register), a home page with a profile display, and options to upload a photo, edit a bio, and log out. Styled with Tailwind CSS, it offers a clean, responsive interface, showcasing skills in user authentication, state management, and dynamic UI components.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["Firebase", "/Firebase.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/GuestBook",
    feaTures: [
      {
        title: "Authentication Routes",
        description: [
          {
            text: [
              "Unauthenticated users accessing the root route (/) are redirected to the /login route for secure access.",
              "The login page provides an option to navigate to the registration page, with seamless navigation back to login from registration.",
            ],
            listItems: [
              "Protected routes for authenticated users",
              "Smooth navigation between login and registration",
              "Responsive form layouts for user input",
              "Secure redirection for unauthorized access",
            ],
            images: ["/P6_1pic.png", "/P6_2pic.png"],
          },
        ],
      },
      {
        title: "Home Route: User Profile",
        description: [
          {
            text: [
              "After successful login, users land on the home route (/) displaying a profile circle showing the first letter of their name if no photo is set.",
              "The profile includes an upload photo icon, delete photo icon, a bio field with an edit bio icon, and a logout button below.",
            ],
            listItems: [
              "Dynamic profile circle with initial letter fallback",
              "Interactive photo upload and delete functionality",
              "Editable bio field with intuitive controls",
              "Logout button for secure session termination",
            ],
            images: ["/P6_3pic.png"],
          },
          {
            text: [
              "Users can upload a profile photo and update their bio, with changes reflected instantly in the profile display.",
            ],
            listItems: [
              "Real-time profile photo updates",
              "Dynamic bio editing with instant UI refresh",
              "Responsive design for profile elements",
              "User-friendly feedback for profile changes",
            ],
            images: ["/P6_4pic.png"],
          },
        ],
      },
      {
        title: "Logout Functionality",
        description: [
          {
            text: [
              "Clicking the logout button terminates the session and redirects the user back to the /login route, ensuring secure access control.",
            ],
            listItems: [
              "Secure session termination",
              "Seamless redirection to login page",
              "Clear user feedback on logout",
              "Consistent navigation flow",
            ],
            images: ["/P6_1pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for efficient component-based architecture and dynamic user interactions.",
              "Utilizes Tailwind CSS for responsive, utility-first styling, ensuring a consistent and modern interface across devices.",
            ],
            listItems: [
              "React Router for authentication and navigation",
              "React hooks for state management and side effects",
              "Tailwind CSS for rapid and responsive styling",
              "Clean and modular code structure",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Tasker",
    urlTitle: "tasker",
    date: "2024-09-15",
    img: ["/P3Pic.png"],
    liveLink: "https://improved-tasker5.vercel.app/",
    shortDescription:
      "A frontend React.js task management application built in September 2024, enabling users to create, edit, delete, and organize tasks with intuitive notifications and search features.",
    longDescription:
      "Tasker is a frontend React.js application developed in September 2024 for efficient task management. The home route features a hero section and a task list area where users can add, edit, delete, favorite, and search tasks. Tasks include details like title, description, priority, and tags, with mandatory field validation and color-coded notifications for actions. Styled with Tailwind CSS, the app provides a responsive and user-friendly interface, demonstrating advanced state management, form handling, and UI feedback mechanisms in React.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/ImprovedTasker5",
    feaTures: [
      {
        title: "Home Route: Hero and Initial Task View",
        description: [
          {
            text: [
              "The home route opens with an engaging hero section that introduces the task management functionality.",
              "Below the hero, an empty task list displays 'Create Your First Task' title, an 'Add Task' button, and 'Task List is empty!' message in the center.",
            ],
            listItems: [
              "Visually appealing hero section for user onboarding",
              "Clear call-to-action with 'Add Task' button",
              "Responsive layout adapting to all screen sizes",
              "Intuitive empty state design to encourage interaction",
            ],
            images: ["/P3Pic.png", "/P3_1pic.png"],
          },
        ],
      },
      {
        title: "Adding a New Task",
        description: [
          {
            text: [
              "Clicking 'Add Task' opens a large absolute modal titled 'Add New Task' where users input task title, description, priority, and tags—all fields are mandatory.",
              "If fields are incomplete, an error message appears: 'You have to give every information about this task!' preventing creation.",
            ],
            listItems: [
              "Modal form with mandatory fields for task details",
              "Client-side validation for complete data entry",
              "User-friendly input interfaces for priority and tags",
              "Seamless modal open/close animations",
            ],
            images: ["/P3_2pic.png", "/P3_3pic.png"],
          },
          {
            text: [
              "Upon filling all fields and clicking 'Create New Task', the task is added to the list with a green pop-up notification: 'Task {taskName} has been added successfully'.",
            ],
            listItems: [
              "Successful addition with visual confirmation",
              "Dynamic task rendering in the main list",
              "Color-coded success notification",
              "Persistent task storage using local state",
            ],
            images: ["/P3_4pic.png"],
          },
        ],
      },
      {
        title: "Editing a Task",
        description: [
          {
            text: [
              "Each task has an edit button; clicking it opens the same modal titled 'Edit Task' pre-filled with existing details for updates.",
              "After modifications and confirmation, the task updates in the list with a yellow pop-up: 'Task {taskName} has been edited successfully'.",
            ],
            listItems: [
              "Pre-populated edit modal for seamless updates",
              "Validation and error handling during edits",
              "Real-time reflection of changes in the UI",
              "Yellow notification for edit confirmation",
            ],
            images: ["/P3_5pic.png", "/P3_6pic.png"],
          },
        ],
      },
      {
        title: "Deleting Tasks",
        description: [
          {
            text: [
              "Individual tasks can be deleted via a delete button, triggering a red pop-up: 'Task {taskName} has been deleted successfully'.",
              "A 'Delete All' button clears the entire list, showing 'All tasks has been deleted successfully' and resetting to the initial empty state.",
            ],
            listItems: [
              "Instant removal with confirmation notification",
              "Bulk delete functionality for all tasks",
              "Red color-coded alerts for destructive actions",
              "State reset to empty view after full deletion",
            ],
            images: ["/P3_7pic.png", "/P3_10pic.png"],
          },
        ],
      },
      {
        title: "Additional Task Management Features",
        description: [
          {
            text: [
              "Tasks can be marked as favorite or unfavorite for quick access, and a search input field filters tasks dynamically by name or tags.",
              "These features enhance organization and retrieval, making task management more efficient.",
            ],
            listItems: [
              "Toggle favorite status with visual indicators",
              "Real-time search filtering across tasks",
              "Combined priority and tag-based organization",
              "Responsive updates without page reloads",
            ],
            images: ["/P3_8pic.png", "/P3_9pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for component-based architecture, enabling modular task components and modal dialogs.",
              "Utilizes Tailwind CSS for responsive styling and quick development of modals, notifications, and layouts.",
            ],
            listItems: [
              "React hooks for state management and side effects",
              "Local state persistence for tasks (useState/useEffect)",
              "Tailwind CSS for consistent and utility-first styling",
              "Event-driven notifications with timed dismissals",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "CineRental",
    urlTitle: "cine-rental",
    date: "2024-08-20",
    img: ["/P10pic.png"],
    liveLink: "https://cine-rental-two.vercel.app/",
    shortDescription:
      "A frontend React.js application built in August 2024 for renting movies, featuring a responsive movie catalog, cart functionality, and theme switching.",
    longDescription:
      "CineRental is a frontend React.js application developed in August 2024 to allow users to browse and rent movies. The home route displays a collection of movie cards, each with details like name, genre, rating, and an 'Add to Cart' button. The app includes dynamic pop-up messages for cart actions, a detailed movie view, a cart summary with checkout and removal options, and a light/dark theme toggle. Styled with Tailwind CSS, it ensures a seamless, responsive experience across devices, showcasing skills in state management, UI/UX design, and interactive components.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/CineRental",
    feaTures: [
      {
        title: "Home Route: Movie Catalog",
        description: [
          {
            text: [
              "The home route showcases a collection of movie cards, each displaying the movie's name, genre, rating, and an 'Add to Cart' button for quick interaction.",
              "The layout is designed to be visually engaging, with a responsive grid that adapts to various screen sizes for optimal browsing.",
            ],
            listItems: [
              "Responsive movie card grid layout",
              "Clear display of movie name, genre, and rating",
              "Interactive 'Add to Cart' button on each card",
              "Optimized for performance across devices",
            ],
            images: ["/P10pic.png"],
          },
        ],
      },
      {
        title: "Cart Functionality",
        description: [
          {
            text: [
              "Clicking the 'Add to Cart' button adds the movie to the cart and displays an absolute pop-up message: 'The movie {movieName} added to the cart'.",
              "If the same movie is added again, a pop-up message appears: 'The movie {movieName} has been added to the cart already'.",
            ],
            listItems: [
              "Dynamic pop-up messages for cart actions",
              "State management to track added movies",
              "User-friendly feedback for duplicate additions",
              "Smooth and responsive cart interactions",
            ],
            images: ["/P10_1pic.png", "/P10_2pic.png"],
          },
        ],
      },
      {
        title: "Theme Switching",
        description: [
          {
            text: [
              "The app supports light and dark theme switching, allowing users to toggle between modes for a personalized viewing experience.",
              "The theme toggle is seamlessly integrated, ensuring consistent styling across all components and pages.",
            ],
            listItems: [
              "Light and dark theme toggle functionality",
              "Consistent styling with Tailwind CSS",
              "Persistent theme state management",
              "Smooth transitions between themes",
            ],
            images: ["/P10_3pic.png"],
          },
        ],
      },
      {
        title: "Movie Detail Pop-up",
        description: [
          {
            text: [
              "Clicking a movie card's image opens a large, centered absolute pop-up div displaying detailed movie information, including a big image, name, rating, and 'Add to Cart' button.",
              "The pop-up provides an immersive view of the selected movie, enhancing user engagement with clear and detailed content.",
            ],
            listItems: [
              "Dynamic pop-up for detailed movie information",
              "Large image display with rating and cart button",
              "Responsive and centered pop-up design",
              "Seamless navigation and interaction",
            ],
            images: ["/P10_4pic.png"],
          },
        ],
      },
      {
        title: "Cart Summary Pop-up",
        description: [
          {
            text: [
              "Clicking the cart icon in the navigation opens a large absolute pop-up div displaying all movies added to the cart, along with a checkout button.",
              "Users can remove individual movies from the cart, providing flexible cart management within the pop-up.",
            ],
            listItems: [
              "Comprehensive cart summary with all added movies",
              "Checkout button for completing the rental process",
              "Remove functionality for individual movies",
              "Responsive and user-friendly pop-up design",
            ],
            images: ["/P10_5pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for efficient component-based architecture and dynamic user interactions.",
              "Utilizes Tailwind CSS for rapid development of a responsive and visually consistent user interface.",
            ],
            listItems: [
              "React hooks for state and effect management",
              "Dynamic pop-up components for cart and movie details",
              "Tailwind CSS for responsive and consistent styling",
              "Clean and modular code structure",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Shop Center",
    urlTitle: "shop-center",
    date: "2024-08-10",
    img: ["/P5pic.png"],
    liveLink: "https://shop-center-black.vercel.app/",
    shortDescription:
      "A frontend Next.js e-commerce platform built in August 2024 to showcase and sell products online, featuring a responsive product catalog and dynamic routing.",
    longDescription:
      "Shop Center is a frontend Next.js e-commerce platform developed in August 2024 for a client to facilitate online product browsing and purchasing. The site features a hero section on the home route, a product catalog with clickable cards, and dynamic routes for individual products and category pages. Styled with Tailwind CSS and powered by React and Next.js, it offers a fast, user-friendly shopping experience across devices, showcasing skills in dynamic routing, API integration, and UI/UX design.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/ShopCenter",
    feaTures: [
      {
        title: "Home Route: Hero and Product Catalog",
        description: [
          {
            text: [
              "The home route features a visually engaging hero section that welcomes users and sets the tone for the e-commerce experience.",
              "Scrolling down reveals a product catalog with cards displaying each product's image, name, category, and price, such as 'iPhone 9 (smartphones) - An apple mobile which is nothing like apple - $549 $478'.",
            ],
            listItems: [
              "Eye-catching hero section for brand impact",
              "Responsive grid layout for product cards",
              "Clear display of product name, category, and pricing",
              "Clickable cards for seamless navigation to product details",
            ],
            images: ["/P5pic.png", "/P5_1pic.png"],
          },
        ],
      },
      {
        title: "Product Detail Page",
        description: [
          {
            text: [
              "Accessible via dynamic routes (/product/id), the product detail page displays an enlarged image of the selected product along with detailed information.",
              "Details include product name, category (e.g., smartphones), rating, discount, price, and an 'Add to Cart' button, e.g., 'iPhone 9 (smartphones) - An apple mobile which is nothing like apple - $549 $478'.",
            ],
            listItems: [
              "Dynamic routing for individual product pages",
              "Detailed product information with ratings and discounts",
              "Interactive 'Add to Cart' functionality",
              "Responsive layout for enhanced viewing",
            ],
            images: ["/P5_2pic.png"],
          },
        ],
      },
      {
        title: "Category Page",
        description: [
          {
            text: [
              "Clicking the category text (e.g., 'smartphones') navigates to a dynamic category route (/category/smartphones) displaying all products within that category.",
              "The category page provides a filtered view of products, maintaining the same card-based layout for consistency and ease of browsing.",
            ],
            listItems: [
              "Dynamic category routing for filtered product display",
              "Consistent card layout for category-specific products",
              "Seamless navigation from product to category pages",
              "Optimized for quick category browsing",
            ],
            images: ["/P5_3pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with Next.js for server-side rendering and dynamic routing, ensuring fast load times and SEO-friendly content delivery.",
              "Utilizes Tailwind CSS for a responsive, visually consistent design, enhancing user engagement across mobile and desktop devices.",
            ],
            listItems: [
              "Next.js dynamic routes for product and category pages",
              "React hooks for efficient state management",
              "Tailwind CSS for rapid and consistent styling",
              "Optimized image handling with Next.js Image component",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Book Finder",
    urlTitle: "book-finder",
    date: "2024-07-15",
    img: ["/P2pic.png"],
    liveLink: "https://lws-react-js-assignment-2.vercel.app/",
    shortDescription:
      "A frontend React.js application built in July 2024 for searching and discovering books, featuring intuitive search and sorting capabilities with a responsive design.",
    longDescription:
      "Book Finder is a frontend React.js application developed in July 2024 to help users search and discover books. The site features a home page displaying various books, with options to search via an input box and sort by alphabetical order or publication year. Styled with Tailwind CSS, it ensures a fast, responsive experience across devices, demonstrating skills in API integration, state management, and user-friendly UI design.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/LWS-ReactJS-Assignment-2",
    feaTures: [
      {
        title: "Home Page: Book Display",
        description: [
          {
            text: [
              "The home page serves as the main interface, showcasing a diverse collection of books in an organized and visually appealing layout.",
              "Users can browse through various kinds of books, with each entry displaying essential details for quick overview.",
            ],
            listItems: [
              "Responsive grid layout for book cards",
              "Dynamic loading of book data",
              "Clean and intuitive user interface",
              "Optimized for performance across devices",
            ],
            images: ["/P2pic.png"],
          },
        ],
      },
      {
        title: "Search Functionality",
        description: [
          {
            text: [
              "An intuitive search input box allows users to find specific books quickly by entering keywords or titles.",
              "The search feature dynamically filters the book list in real-time, providing instant results as users type.",
            ],
            listItems: [
              "Real-time search filtering",
              "Keyword-based book matching",
              "User-friendly input interface",
              "Seamless integration with book display",
            ],
            images: ["/P2_1pic.png"],
          },
        ],
      },
      {
        title: "Sorting Options",
        description: [
          {
            text: [
              "Users can organize the book list using multiple sorting criteria to suit their browsing preferences.",
              "Available sorting options include alphabetical order (A-Z or Z-A) and publication year (oldest to latest or latest to oldest).",
            ],
            listItems: [
              "Alphabetical sorting (A-Z and Z-A)",
              "Chronological sorting by publication year",
              "Instant reordering of book list",
              "Intuitive dropdown or button controls",
            ],
            images: ["/P2_2pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for efficient component-based architecture and dynamic user interactions.",
              "Utilizes Tailwind CSS for rapid development of a responsive and consistent user interface.",
            ],
            listItems: [
              "React hooks for state and effect management",
              "Efficient data filtering and sorting algorithms",
              "Tailwind CSS for styling and responsiveness",
              "Clean, modular code structure",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Photo Feed",
    urlTitle: "photo-feed",
    date: "2024-06-20",
    img: ["/P11pic.png"],
    liveLink: "https://photo-feed-omega.vercel.app/",
    shortDescription:
      "A frontend React.js application built in July 2024 to showcase and interact with nature-related photos, offering a visually engaging and responsive user experience.",
    longDescription:
      "Photo Feed is a frontend React.js application developed in July 2024 to display a collection of nature-related photos. The site features a home route with a gallery of images and individual photo pages accessible via dynamic routes (/photo-id). Users can view enlarged photos, see uploader details, love and share counts, and save images. Styled with Tailwind CSS and powered by React, the app ensures a seamless and responsive experience across devices, highlighting skills in dynamic routing, state management, and UI/UX design.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/PhotoFeed",
    feaTures: [
      {
        title: "Home Route: Photo Gallery",
        description: [
          {
            text: [
              "The home route presents a visually appealing gallery of nature-related photos, designed to engage users with a clean and intuitive layout.",
              "Users can browse a curated collection of images, with each photo clickable to navigate to a dedicated photo page for more details.",
            ],
            listItems: [
              "Responsive grid layout for photo thumbnails",
              "Smooth navigation to individual photo pages",
              "Optimized image loading for performance",
              "Consistent styling across devices",
            ],
            images: ["/P11pic.png"],
          },
        ],
      },
      {
        title: "Individual Photo Page",
        description: [
          {
            text: [
              "Accessible via dynamic routes (/photo-id), the individual photo page displays an enlarged version of the selected image for an immersive viewing experience.",
              "The page includes details such as the uploader’s name, love reaction count, share count, and an option to save the image to the user’s device.",
            ],
            listItems: [
              "Dynamic routing for individual photo pages",
              "Display of uploader details and engagement metrics",
              "Interactive love and share functionalities",
              "Image download feature for user convenience",
            ],
            images: ["/P11_1pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for dynamic client-side rendering, ensuring efficient user interactions and fast performance.",
              "Utilizes Tailwind CSS for a responsive, visually consistent design, enhancing user engagement across mobile and desktop devices.",
            ],
            listItems: [
              "React Router for scalable dynamic routing",
              "React hooks for efficient state management",
              "Tailwind CSS for rapid and consistent styling",
              "Optimized image handling for performance",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "News Feed",
    urlTitle: "news-feed",
    date: "2024-06-10",
    img: ["/P4pic.png"],
    liveLink: "https://news-feed-swart-nine.vercel.app/",
    shortDescription:
      "A frontend React.js website built in June 2024 to display real-time news updates fetched from an external API, offering a clean and responsive user experience.",
    longDescription:
      "News Feed is a frontend React.js application developed in June 2024 to deliver real-time news updates. The site features a single home route that fetches news data from an external server via a React API call. Styled with Tailwind CSS, it provides a responsive and intuitive interface, displaying a 'Today's news is loading' message during data retrieval. The project showcases skills in API integration, React state management, and modern web development practices.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/NewsFeed",
    feaTures: [
      {
        title: "Home Route: News Feed Display",
        description: [
          {
            text: [
              "The home route serves as the primary interface, fetching and displaying real-time news updates from an external API in a clean, organized layout.",
              "While news data is being retrieved, a user-friendly 'Today's news is loading' message is shown to enhance the user experience during loading states.",
            ],
            listItems: [
              "Real-time news updates fetched via React API calls",
              "Responsive grid layout for news articles",
              "Loading state with clear user feedback",
              "Optimized performance for fast data rendering",
            ],
            images: ["/P4pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with React.js for dynamic rendering and efficient client-side performance, ensuring a seamless user experience.",
              "Utilizes Tailwind CSS for a responsive and visually appealing design, maintaining consistency across mobile and desktop devices.",
            ],
            listItems: [
              "Efficient API integration with error handling",
              "React hooks for state and lifecycle management",
              "Tailwind CSS for rapid and consistent styling",
              "Clean and maintainable code structure",
            ],
            images: [],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Short React Projects",
    urlTitle: "short-react-projects",
    date: "2024-05-15",
    img: ["/P1pic.png"],
    liveLink: "https://react-projects-ruddy-seven.vercel.app",
    shortDescription:
      "A frontend React.js portfolio showcasing a collection of small-scale React projects, built in June 2024 for personal development and demonstration.",
    longDescription:
      "Short React Projects is a frontend React.js website developed to showcase a collection of five small-scale React projects. Built in June 2024, the site features a clean, responsive design with a gallery-style layout, detailed project descriptions, and navigation routes for each project. Styled with modular CSS (folder.module.css format), it offers an engaging user experience across devices, highlighting skills in React development, state management, and UI/UX design.",
    techStack: [
      ["React", "/React.png"],
      ["CSS", "/css.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/ReactProjects",
    feaTures: [
      {
        title: "Home Route",
        description: [
          {
            text: [
              "The home route serves as the welcoming entry point to the portfolio, featuring a clean and minimalistic design that immediately engages visitors.",
              "Displays the main title 'Welcome to My React JS Projects' with a professional layout that sets the tone for the entire portfolio experience.",
            ],
            listItems: [
              "Clean, minimalistic design for professional first impression",
              "Responsive layout that works seamlessly across all devices",
              "Immediate navigation access to all project routes",
              "Consistent branding and styling throughout the application",
            ],
            images: ["/P1pic.png"],
          },
        ],
      },
      {
        title: "Project One: Theme Changer",
        description: [
          {
            text: [
              "A dynamic theme-switching component that demonstrates React's state management capabilities and provides users with customizable visual preferences.",
              "The interface displays 'Theme' as the main heading, followed by 'Dark/Light' toggle text and corresponding Sun/Moon icons for intuitive user interaction.",
            ],
            listItems: [
              "Smooth theme transitions between dark and light modes",
              "Intuitive UI with clear visual indicators (Sun/Moon icons)",
              "Dynamic background color changes (bg-black or bg-white)",
              "Persistent theme state management using React hooks",
            ],
            images: ["/P1_1pic.png"],
          },
        ],
      },
      {
        title: "Project Two: Tic-Tac-Toe Game",
        description: [
          {
            text: [
              "A fully functional Tic-Tac-Toe game implementation that showcases game logic, state management, and user interaction patterns in React.",
              "Players alternate between 'X' and 'O' symbols, with the game automatically detecting and displaying the winner upon completion of a valid winning pattern.",
            ],
            listItems: [
              "Complete game logic with win condition detection",
              "Turn-based gameplay with visual feedback for current player",
              "Winner announcement with clear visual indication",
              "Restart functionality available at any point during gameplay",
            ],
            images: ["/P1_2pic.png"],
          },
        ],
      },
      {
        title: "Project Three: Stopwatch Application",
        description: [
          {
            text: [
              "A simple yet elegant stopwatch application that demonstrates timer functionality, state persistence, and user control patterns in React applications.",
              "Users can start, pause, and reset the stopwatch, with the reset functionality returning the timer to its initial 00:00:00 state for fresh timing sessions.",
            ],
            listItems: [
              "Precise time tracking with millisecond accuracy",
              "Intuitive start/pause controls with clear visual states",
              "Reset functionality that returns to initial state",
              "Clean, readable time display format",
              "Responsive design for touch and click interactions",
            ],
            images: ["/P1_3pic.png"],
          },
        ],
      },
      {
        title: "Project Four: Todo List Manager",
        description: [
          {
            text: [
              "A task management application that implements basic CRUD (Create, Read, Update, Delete) operations, demonstrating practical data manipulation in React.",
              "Users can add new tasks to the list and remove completed tasks, providing a simple yet effective task organization system for personal productivity.",
            ],
            listItems: [
              "Add new tasks with instant list updates",
              "Delete functionality for task removal",
              "Persistent task state management",
              "Clean, organized list presentation",
              "Responsive input and interaction design",
            ],
            images: ["/P1_4pic.png"],
          },
        ],
      },
      {
        title: "Technical Implementation",
        description: [
          {
            text: [
              "Built with modern React.js architecture, ensuring efficient client-side rendering and dynamic user interactions.",
              "Utilizes modular CSS (folder.module.css) for scoped, maintainable, and responsive styling across all components.",
            ],
            listItems: [
              "Modern React hooks for efficient state management",
              "React Router for seamless navigation between projects",
              "Modular CSS for scoped and maintainable styling",
              "Optimized image handling for performance",
              "Professional code structure and documentation",
            ],
            images: [],
          },
        ],
      },
    ],
  },
];

// New added
export default projects;
