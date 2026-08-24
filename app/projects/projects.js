const projects = [
  {
    id: 27,
    title: "Budget Meal Maker",
    urlTitle: "budget-meal-maker",
    type: "saas",
    date: "2026-08-16",
    img: ["/P27.png"],
    liveLink: "https://budgetmealmaker.com",
    shortDescription:
      "Budget Meal Maker turns your stats and monthly food budget into a real, costed meal plan — not another generic \"eat healthy\" article.",
    longDescription:
      "Budget Meal Maker helps people eat well without blowing their food budget. Instead of guessing what to buy, you enter your stats, goals, and what you actually have to spend — and it builds a real meal plan: three options (a nutritionally ideal plan, a budget-trimmed version, and one you customize yourself), each with an exact grocery list and cost breakdown, ready to print. Built with Astro and TypeScript for a fast, no-backend experience.",
    techStack: [
      ["TypeScript", "/ts.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["Cloudflare Workers", "/cloudflare.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: null,
    feaTures: [
      {
        title: "Step 1: Your Stats",
        description: [
          {
            text: [
              "You start by entering your height, weight, age, and gender — Budget Meal Maker uses this to work out your BMI and roughly how many calories you burn day to day. You can switch between metric and imperial units at any point without losing what you typed.",
              "Your result is shown against a clear healthy-range chart so you know exactly where you stand. Since the formulas only make sense for adults, the age field is limited to 18–120, and if you come back later, your saved stats are right where you left them.",
            ],
            listItems: [
              "Switch between metric and imperial without losing your numbers",
              "See exactly where your BMI falls on a clear health-range chart",
              "Built for adults (18–120), since that's who the formulas apply to",
              "Your stats are saved automatically for next time",
            ],
            images: ["/P27_1.png"],
          },
        ],
      },
      {
        title: "Step 2: How Active You Are",
        description: [
          {
            text: [
              "Rather than picking a vague \"sedentary\" or \"active\" label, you choose from 60 real, illustrated activities — desk job, running, yoga, construction work, and more — grouped into simple activity levels that shape how many calories you need.",
              "A smart search finds what you're looking for even if you're not sure of the exact term, and you can filter by category to browse instead of typing.",
            ],
            listItems: [
              "60 real, illustrated activities to choose from",
              "Smart search that's forgiving of typos",
              "Filter by category to browse instead of searching",
              "Pick the one that best matches your day",
            ],
            images: ["/P27_2.png"],
          },
        ],
      },
      {
        title: "Step 3: Your Food & Budget",
        description: [
          {
            text: [
              "Here you set your monthly food budget, your currency (detected automatically, but changeable), and how many meals you eat a day. Then you browse a database of 95 real grocery items across 12 categories and pick what you actually buy, with search and filters to find things fast.",
              "For each food you pick, you enter how much and what it costs, and Budget Meal Maker instantly shows the calories, protein, carbs, and fat it adds — with unit conversions handled for you, so switching between grams and kilograms never accidentally changes your quantity. It also nudges you to include at least one protein, one carb, and one fat source before you move on, so your final plan is actually balanced.",
            ],
            listItems: [
              "95 real grocery items across 12 categories, searchable and filterable",
              "Budget, currency, and meals-per-day, all set by you",
              "Live cost and nutrition preview as you add each food",
              "Gentle nudge to keep your picks nutritionally balanced",
            ],
            images: ["/P27_3.png"],
          },
        ],
      },
      {
        title: "Step 4: Your Meal Plan",
        description: [
          {
            text: [
              "Hit \"Make my meal\" and Budget Meal Maker builds your plan: a Perfect Meal built purely around good nutrition, an Affordable Meal that trims cost back down to fit your budget when the perfect one runs over, and a Custom Meal you build yourself by hand. Each one comes with a clear grocery list you can scale to a day, week, or month.",
              "If a plan goes over budget or falls short on nutrition, you'll see exactly by how much — not just a vague warning. Change anything in an earlier step and your results update to match. When you're happy with a plan, one click turns it into a clean, printable PDF.",
            ],
            listItems: [
              "Three tailored meal options: Perfect, Affordable, and Custom",
              "Grocery list that scales to a day, week, or month",
              "Specific warnings when a plan is over budget or under target",
              "One-click PDF export, ready to print",
              "A daily water-intake suggestion included with every plan",
            ],
            images: ["/P27_4.png"],
          },
        ],
      },
      {
        title: "Landing Page",
        description: [
          {
            text: [
              "The homepage makes the pitch fast: most \"budget meal plan\" content online is just an article with no real tool behind it — this one actually builds your plan for you. It walks through the four simple steps with matching illustrations, so you know exactly what to expect before you start.",
              "Below that, a \"Learn more\" section links into the site's meal-planning guides, and the footer carries full navigation to every page on the site.",
            ],
            listItems: [
              "Clear hero section with a direct path into the calculator",
              "Visual walkthrough of the four-step process",
              "Links into the site's meal-planning guides",
              "Full site navigation in the footer",
            ],
            images: ["/P27_5.png"],
          },
        ],
      },
      {
        title: "Meal Planning Guides",
        description: [
          {
            text: [
              "Beyond the calculator, the site includes real, well-researched guides: how to actually build a budget meal plan, how the underlying math works with a worked example, real sample meal plans with real costs, and an FAQ covering the most common questions.",
              "There's also a ranking of the cheapest grocery staples by nutritional value for the money — every number sourced from real nutrition and pricing data, not guessed.",
            ],
            listItems: [
              "A step-by-step guide to building your own budget meal plan",
              "A plain-language explainer of how the calculator works",
              "Real sample meal plans with real costs",
              "An FAQ answering the most common questions",
              "A ranking of the cheapest, most nutritious grocery staples",
            ],
            images: ["/P27_6.png"],
          },
        ],
      },
      {
        title: "Email Guide & Ebook",
        description: [
          {
            text: [
              "Once you get your results, you can enter your email to receive a free guide to the cheapest, most nutritious groceries — no spam, just a one-time send after you confirm your email.",
              "There's also an optional companion ebook for anyone who wants an even deeper, real-price meal-planning guide. Both offers are tucked out of the way and never show up in your printed PDF.",
            ],
            listItems: [
              "Free emailed guide to budget-friendly groceries",
              "Confirmed opt-in, no spam",
              "Optional companion ebook for a deeper dive",
              "Never appears in your printed plan",
            ],
            images: ["/P27_7.png"],
          },
        ],
      },
    ],
  },
  {
    id: 26,
    title: "ShortStack",
    urlTitle: "shortstack",
    type: "hobby-project",
    date: "2026-06-24",
    img: ["/P26.png"],
    liveLink: "https://shortstack.lawrenceamlangomes.com",
    shortDescription:
      "ShortStack turns long, messy links into short ones that redirect instantly and keep count of every click — a real, production-deployed URL shortener, not just a demo.",
    longDescription:
      "ShortStack takes any long link and turns it into a short, easy-to-share one that redirects in an instant and quietly keeps track of every click it gets, so you always know how a link is performing. It stays fast by keeping popular links ready to go in memory instead of looking them up from scratch every time, and it logs click activity in the background so tracking never slows down the redirect itself. It also supports multiple separate apps sharing one login system, each keeping its own users. Built with Node.js, Express, PostgreSQL, and Redis, and deployed as a real, secure production service with Docker and Nginx.",
    techStack: [
      ["Node.js", "/node.png"],
      ["Express.js", "/express.png"],
      ["PostgreSQL", "/postgresql.png"],
      ["Redis", "/redis.png"],
      ["Docker", "/docker.png"],
      ["Nginx", "/nginx.png"],
      ["BullMQ", "/bullmq.png"],
      ["TypeScript", "/ts.png"],
      ["React", "/React.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/shortstack",
    feaTures: [
      {
        title: "URL Shortener UI",
        description: [
          {
            text: [
              "A clean, simple page where you paste in a long URL and get back a short link on the ShortStack domain, ready to share right away.",
              "It handles the small details that make it feel polished — clear loading feedback, friendly messages if a link is invalid, and a one-click button to copy your new short link.",
            ],
            listItems: [
              "Paste in any valid URL and get back a short, random link",
              "Your short link appears as a clickable link you can copy in one click",
              "Clear feedback while it's working, and friendly errors if something's wrong",
              "Built with React and TypeScript for a fast, responsive interface",
            ],
            images: ["/P26_1.png"],
          },
        ],
      },
      {
        title: "Redirect Engine with Redis Cache",
        description: [
          {
            text: [
              "Clicking a short link sends you straight to the original page — instantly. Rather than looking every link up from scratch, ShortStack keeps recently used links ready in fast memory, so most redirects never have to touch the database at all.",
              "It even quietly reports whether a redirect came from that fast memory or the database, the same trick big content-delivery networks use, which made it easy to prove the speed-up was actually working.",
            ],
            listItems: [
              "Every redirect checks the fast in-memory cache first, before ever touching the database",
              "New links are cached the moment they're created, so even the first click is instant",
              "Cached links automatically refresh every 24 hours",
              "A hidden response detail reveals whether a redirect was served from cache or the database",
            ],
            images: ["/P26_2.png"],
          },
        ],
      },
      {
        title: "Click Analytics",
        description: [
          {
            text: [
              "Every click on a short link gets logged for later — but the person clicking never has to wait for it. The redirect happens right away, while the click is recorded quietly in the background.",
              "Each click is saved as its own timestamped record rather than just a running total, which makes it possible to see how a link's traffic changes over time. A simple lookup returns the total number of clicks for any link on demand.",
            ],
            listItems: [
              "Every click is queued for logging without ever slowing down the redirect",
              "A background worker processes the queue and saves each click to the database",
              "Click history is timestamped, so activity can be tracked day by day",
              "A simple stats lookup returns the total clicks for any link",
              "A password-protected admin view shows the click queue processing in real time",
            ],
            images: ["/P26_3.png"],
          },
        ],
      },
      {
        title: "Multi-Tenant Auth API",
        description: [
          {
            text: [
              "A login system built to be shared across more than one app — the same email address can hold a separate account for each app that uses it, so nothing gets mixed up between them.",
              "Passwords are securely encrypted before they're ever stored, and signing in hands back a login token that stays valid for a week.",
            ],
            listItems: [
              "Sign up with an email and password, checked before anything is saved",
              "Log in and receive a secure token confirming who you are",
              "Built so the same email can be used separately across different apps",
              "Passwords are encrypted and never stored in plain text",
              "Login tokens work smoothly even when the app and the login system live on different domains",
            ],
            images: ["/P26_4.png"],
          },
        ],
      },
      {
        title: "Production Infrastructure",
        description: [
          {
            text: [
              "ShortStack isn't just a demo running on a laptop — it's deployed as a real, secure production service. Every request passes through a proper routing and security chain before it ever reaches the app, the same kind of setup real-world web services rely on.",
              "It's also built to stay reliable through restarts and updates, so redeploying the service never quietly breaks it for anyone using it.",
            ],
            listItems: [
              "Packaged into a lean, optimized production build",
              "Runs behind its own reverse proxy for routing and security",
              "All traffic is encrypted with HTTPS before it ever reaches the app",
              "Connects securely to its caching layer within the deployment network",
              "A separate local setup makes it easy to develop and test without touching production",
              "All required configuration is clearly documented for easy setup",
            ],
            images: ["/P26_5.png"],
          },
        ],
      },
    ],
  },
  {
    id: 25,
    title: "Real Caffeine Calculator",
    urlTitle: "real-caffeine-calculator",
    type: "saas",
    date: "2026-06-16",
    img: ["/P25.png"],
    liveLink: "https://realcaffeinecalculator.com",
    shortDescription:
      "Real Caffeine Calculator tells you exactly how much caffeine is still in your system and the latest time you can have one without wrecking your sleep — based on what you actually drank, your metabolism, and your bedtime.",
    longDescription:
      "Real Caffeine Calculator answers the question everyone asks after an afternoon coffee: is this going to keep me up tonight? Log whatever you drank — pick from a library of over 30 real drinks like Starbucks orders, energy drinks, and tea, or enter a custom amount — and it shows exactly how much caffeine is still in your body right now, a chart of how it clears out over the next 24 hours, and the latest time you could safely have more before bed. You can even tune it to your own body, choosing between normal, fast, or slow metabolism, plus profiles for pregnancy and smoking, based on real published research on how differently people process caffeine. It runs entirely in your browser, so there's no account and nothing you enter ever leaves your device. Built with Astro, TypeScript, and Tailwind CSS, and hosted on Cloudflare.",
    techStack: [
      ["Tailwind CSS", "/TailwindCss.png"],
      ["TypeScript", "/ts.png"],
      ["JavaScript", "/js.png"],
      ["Cloudflare", "/cloudflare.png"],
    ],
    gitLink: null,
    feaTures: [
      {
        title: "Caffeine Calculator — Drink Logger",
        description: [
          {
            text: [
              "This is where you tell the calculator what you actually drank. Add as many drinks as you like, each with its own time, picked from an organized list of categories — or just type in a custom amount if your drink isn't on the list.",
              "The drink list covers more than 30 real options: a dozen coffee drinks including popular Starbucks sizes and strong brews like Death Wish, a dozen energy drinks like Bang, Reign, Monster, Celsius, and Red Bull in different sizes, plus teas, sodas, and a fully custom entry — each with an accurate caffeine amount already built in.",
            ],
            listItems: [
              "Add or remove as many drinks as you want, each with its own time",
              "Over 30 drinks organized into Coffee, Energy Drinks, Tea & Other, and Custom",
              "A custom option lets you enter the exact caffeine amount for anything not listed",
              "Smart time handling catches likely mistakes, like accidentally logging a drink for the future",
              "Enter your body weight to see a color-coded reading of your caffeine load relative to your size",
              "Set your bedtime (defaults to 11:00 PM) to power all the sleep-safety calculations",
              "Choose your metabolism type — normal, fast, slow, pregnant, or smoker — each processed at its own real-world rate",
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
              "The results panel is the heart of the tool: a big, clear number showing how much caffeine is in your system right now, a plain-language status like \"Safe to sleep\" or \"Too much for sleep,\" and a headline telling you the latest time you could still have a caffeinated drink and be fine by bedtime.",
              "Below that, it shows when your caffeine will drop to a safe level, how much it's likely to disrupt your sleep (low, moderate, or high impact), and, if you entered your weight, how your intake compares to your body size. If you've gone over the FDA's recommended daily limit, a clear warning lets you know.",
            ],
            listItems: [
              "Shows the latest moment you could have a typical coffee and still keep your bedtime caffeine low",
              "Color-coded so you can tell at a glance whether you still have time, none left today, or your window's passed",
              "The current caffeine reading updates automatically every minute",
              "A sleep-risk badge tells you if your bedtime caffeine level is low, moderate, or high impact",
              "Shows exactly how much caffeine will still be in your system at bedtime",
              "A color-coded caffeine load relative to your body weight, shown once you enter it",
              "A warning appears if you go over the FDA's recommended daily caffeine limit",
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
              "A chart plots exactly how your caffeine level will rise and fall over the next 24 hours, starting from your first drink. Color bands across the background make it easy to see at a glance when you're in a safe zone, a moderate zone, or a high zone.",
              "Markers show exactly where \"now\" and your bedtime fall on the timeline, with a dot tracking your current caffeine level right on the curve. The whole chart updates live as time passes and adapts automatically if you switch between dark and light mode.",
            ],
            listItems: [
              "A smooth curve with a soft gradient fill traces your caffeine level hour by hour",
              "Green, amber, and red zones show safe, moderate, and high caffeine levels at a glance",
              "A marked line shows the caffeine level considered safe for sleep",
              "A marker shows exactly where you are right now on the curve",
              "A separate marker shows where your bedtime falls on the timeline",
              "The timeline is labeled every few hours and automatically scales to your caffeine peak",
              "A legend appears once you've logged a drink, explaining every line and zone",
              "Updates instantly to match dark or light mode, no reload needed",
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
              "Below the calculator, a plain-language guide walks through the science behind it — what caffeine half-life actually means, how genetics change the way people process it, how the calculator's math works, why timing your last coffee matters for sleep, official daily limits, and how caffeine content compares across popular drinks.",
            ],
            listItems: [
              "Six clearly organized sections covering the science end to end",
              "Key terms are highlighted throughout so the important points are easy to spot",
              "Includes real numbers for popular drinks, like Death Wish coffee's 728mg or a Starbucks Cold Brew's 205mg",
              "Explains in plain terms how caffeine actually leaves your system over time",
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
              "A short FAQ answers the five questions people ask most — how the tool works, what half-life means, what a safe daily limit looks like, when to stop drinking caffeine before bed, and how body weight factors in. It's also structured so these answers can show up directly in Google search results.",
            ],
            listItems: [
              "Covers how it works, what half-life means, safe daily limits, cutoff timing, and body weight",
              "Opens and closes smoothly with a simple click",
              "Structured so answers can appear directly in search results",
              "Answers the exact questions people search for",
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
              "For anyone who wants to double-check the science, a sources list links out to the actual research behind the calculator — from federal health guidance to peer-reviewed sleep studies to government food data — so nothing here is just made up.",
            ],
            listItems: [
              "NIH research on how long caffeine's effects can last, from 3 to 15 hours depending on the person",
              "FDA guidance on the 400mg daily limit considered safe for most healthy adults",
              "A sleep medicine study showing caffeine even six hours before bed can cut into your sleep",
              "Sleep timing guidance from the American Academy of Sleep Medicine",
              "USDA data on caffeine content across different drinks",
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
              "The site looks great in dark mode by default, with a simple sun/moon button to switch to light mode whenever you prefer. Your choice is remembered for next time, and the page loads already in the right theme instead of flashing the wrong one first.",
              "The decay chart updates its colors instantly whenever you switch themes, so it always matches the rest of the page.",
            ],
            listItems: [
              "Designed dark-first, with a full, polished light mode as an option",
              "Remembers your theme choice for your next visit",
              "Loads in the correct theme immediately, with no flash of the wrong colors",
              "The chart automatically re-colors itself when you switch themes",
              "The header stays visible as you scroll, with a subtle blur that adapts to the current theme",
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
              "On phones and smaller screens, the navigation tucks neatly into a hamburger menu that expands into a dropdown with a tap. It closes itself automatically once you tap a link or tap anywhere else on the page.",
            ],
            listItems: [
              "On desktop, the Calculator, About, and Contact links sit in the header alongside the theme toggle",
              "On mobile, a hamburger icon opens the same navigation in a dropdown",
              "The icon animates smoothly between a menu and a close button",
              "Closes automatically when you tap a link or tap outside the menu",
              "Looks right in both dark and light mode, on any screen size",
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
              "A simple About page explains what the tool does, how it works, and who it's for, with a quick-facts card summarizing the key science and privacy points at a glance.",
            ],
            listItems: [
              "A clear explanation of what the tool does and who it's for",
              "A quick-facts card covering half-life, sleep thresholds, daily limits, and privacy",
              "A clear note that it's not medical advice",
              "A button linking straight back to the calculator",
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
              "A simple contact form lets visitors reach out directly with their name, email, subject, and message. It gives clear feedback the whole way through — showing when it's sending, confirming once it's sent, and letting you know if something went wrong.",
            ],
            listItems: [
              "Name, email, subject, and message fields",
              "Sends instantly without reloading the page",
              "Clear success and error messages shown right on the page",
              "The submit button locks while sending to prevent accidental double submissions",
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
    type: "clients-project",
    date: "2026-02-15",
    img: ["/P24.png"],
    liveLink: "https://www.facelees.com/",
    shortDescription:
      "Facelees is a full online storefront built for a local Bangladeshi retailer, letting customers browse and order products for cash on delivery with no sign-up required, while the owner runs everything — products, banners, and orders — from a private dashboard.",
    longDescription:
      "Facelees gives a local retailer a real online storefront without any of the usual friction. Customers can browse the full product catalog, search and filter for what they want, and place an order for cash on delivery in just a few clicks — no account or login needed. Behind the scenes, the shop owner has a private dashboard for everything that keeps the business running: adding and editing products with photos, controlling the rotating banner images on the homepage, and tracking every order from the moment it's placed through to delivery. Access to that dashboard is locked to the owner's own approved accounts, so the storefront stays open to everyone while the business tools stay private. Built with Next.js, TypeScript, and MongoDB, and served through Cloudflare for a fast, secure experience anywhere.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["TypeScript", "/ts.png"],
      ["MongoDB", "/Mongodb.png"],
      ["Cloudflare", "/cloudflare.png"],
    ],
    gitLink: null,
    feaTures: [
      {
        title: "Public Shop & Landing Page",
        description: [
          {
            text: [
              "The homepage doubles as the whole shop — a rotating banner up top, a showcase of brand logos for trust, and a full product grid customers can search and filter through.",
              "Each product card shows a clear photo, brand and name, a short description, the current price (with the original price crossed out when it's discounted), whether it's in stock, and an easy add-to-cart button.",
              "The whole storefront is open to anyone — no account needed — and loads fast thanks to edge caching.",
            ],
            listItems: [
              "A rotating banner carousel the owner fully controls, order and all",
              "A brand logo showcase that builds trust with shoppers",
              "A product grid that adapts smoothly from phone to desktop",
              "Instant search across product name, brand, category, and description",
              "Sort products by price, low to high or high to low, discounts included",
              "Clear visual badges for discounts, in-stock, and out-of-stock items",
              "Smooth hover animations and a subtle image zoom effect",
              "Friendly loading placeholders while the page fetches products",
            ],
            images: ["/P24.png", "/P24_3.png"],
          },
        ],
      },
      {
        title: "Admin-Only Authentication System",
        description: [
          {
            text: [
              "Only the shop owner's own approved accounts can ever get into the admin tools. Regular visitors can't sign up or log in at all — they're clearly told the area is restricted.",
              "Logging in gives clear, helpful feedback if something's wrong, and both the login and account screens carry the same dark, gold-accented look as the rest of the brand.",
            ],
            listItems: [
              "Only pre-approved Gmail accounts can ever access the admin area",
              "Instant validation on every field as you type",
              "Clear warnings shown to anyone who tries to access restricted areas",
              "A smooth redirect straight into the shop after logging in",
              "A clean, centered form that looks great on any device",
              "Small touches that make autofill behave properly on phones and desktops",
            ],
            images: ["/P24_1.png", "/P24_2.png"],
          },
        ],
      },
      {
        title: "Shopping Cart & Cash on Delivery Flow",
        description: [
          {
            text: [
              "Shoppers can add products to their cart, adjust quantities, and remove items freely, with the total updating instantly, discounts included. Checking out is simple — a clean pop-up collects delivery details for a cash-on-delivery order, with careful validation so nothing gets missed.",
              "Once an order goes through, the cart clears itself, an order number is generated, and the customer gets a confirmation with the option to view their order.",
            ],
            listItems: [
              "Update quantities instantly with simple plus/minus controls",
              "Remove items with a quick confirmation to avoid mistakes",
              "An accurate running total that accounts for every item's discount",
              "A checkout form collecting name, address, and a validated phone number",
              "Phone numbers are checked against the correct local format before submitting",
              "A clear order confirmation summary once checkout succeeds",
              "Easy options to keep shopping or clear the cart",
              "A clean two-column layout on larger screens",
            ],
            images: ["/P24_4.png", "/P24_5.png"],
          },
        ],
      },
      {
        title: "Admin Product Catalog Management",
        description: [
          {
            text: [
              "A full toolkit for managing everything in the store. The owner can add new products with photos, edit any detail — description, brand, pricing — toggle whether something's in stock or visible, and remove products safely.",
              "It also guards against accidental duplicates, keeps descriptions a sensible length, supports up to 500 products, and makes everything easy to find with a proper search.",
            ],
            listItems: [
              "Add, edit, and remove products, with the interface updating instantly",
              "Upload product photos with a live preview before saving",
              "One description field that's automatically split into a short teaser, full details, and brand name",
              "Simple toggles for in-stock and visible status, with clear indicators",
              "Categories are kept consistent automatically",
              "Search products by name, category, brand, or description",
              "Supports up to 500 products in the catalog",
              "A clean, responsive grid with subtle hover effects",
            ],
            images: ["/P24_7.png"],
          },
        ],
      },
      {
        title: "Admin Hero Banner & Branding Control",
        description: [
          {
            text: [
              "A dedicated space for managing the rotating banners on the homepage. The owner can upload new wide banner images, choose the order they appear in, show or hide them, and edit or remove them at any time.",
              "It supports up to 20 banners at once and gives sizing guidance so every image displays properly on any device.",
            ],
            listItems: [
              "Add, edit, or delete banners with image upload",
              "Set exactly which banner shows first and in what order",
              "Show or hide any banner with a simple toggle",
              "Preview an image before saving, or remove it entirely",
              "Supports up to 20 banners, with a warning if you hit the limit",
              "Banners display in exactly the order chosen",
              "Clean banner cards with controls right where you need them",
            ],
            images: ["/P24_8.png"],
          },
        ],
      },
      {
        title: "Admin Order Dashboard & Status Management",
        description: [
          {
            text: [
              "A complete overview of every order that's come in, with filtering by status — pending, confirmed, shipped, delivered, or cancelled — plus search and sorting by date, so nothing slips through the cracks.",
              "Every order shows the customer's details, the full list of items with prices, and the total, with one click to move an order along to its next status.",
            ],
            listItems: [
              "A full order list that updates status in real time",
              "Filter by status or search by keyword",
              "Sort orders newest or oldest first",
              "A detailed view of customer info, items ordered, and the total",
              "One-click status updates with clear visual feedback",
              "Color-coded status badges that make order state easy to scan",
              "Safely handles failed updates so nothing gets left in a bad state",
            ],
            images: ["/P24_9.png"],
          },
        ],
      },
      {
        title: "Admin Personal Profile & Security",
        description: [
          {
            text: [
              "A simple profile page for the owner, showing their name and email, with a quick way to change their password and log out securely.",
              "It keeps account management straightforward without exposing anything that isn't needed.",
            ],
            listItems: [
              "Shows the admin's name and email",
              "A direct link to change password",
              "Logout with a confirmation step to prevent accidents",
              "Matches the same dark, gold-accented look as the rest of the site",
              "A clean two-column layout on larger screens",
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
              "Under the hood, the whole site is built with Next.js and TypeScript for a solid, maintainable foundation, styled with a consistent dark, gold-accented look. Every product, banner, and order lives in a MongoDB database, kept fast and reliable.",
              "Cloudflare handles the security and speed side — caching, protection against attacks, and fast delivery anywhere in the world. On top of that, the admin area stays locked down, the interface updates instantly, and the whole site is built to work smoothly on any device.",
            ],
            listItems: [
              "Built end-to-end with Next.js and TypeScript",
              "A responsive dark theme with gold branding throughout",
              "MongoDB stores products, orders, and banner images",
              "Cloudflare delivers speed, security, and reliability worldwide",
              "Admin tools are locked to approved accounts only",
              "The cart updates instantly as customers shop",
              "Interface updates instantly, with safe fallback if something fails",
              "Image uploads are checked and previewed before saving",
              "Designed to work great on mobile first, and everywhere else too",
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
    type: "hobby-project",
    date: "2026-01-10",
    img: ["/P23.png"],
    liveLink: "https://expense-tracker-bold.vercel.app/",
    shortDescription:
      "Expense Tracker gives you one clear place to see where your money actually goes — bank accounts, cash on hand, and every month's spending, all tracked and totaled automatically.",
    longDescription:
      "Expense Tracker helps you actually understand your own finances instead of guessing. You add your bank accounts and cash on hand, log what you spend day by day, and it keeps a running picture of your balances, income, and spending for every month — no spreadsheets required. Everything is tied to your own account, so your numbers stay private and update the moment you make a change. Built with Next.js, TypeScript, and MongoDB for a fast, reliable dashboard experience.",
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
              "A clean, welcoming homepage that explains what Expense Tracker does and gets you straight into signing up, logging in, or your dashboard if you're already in.",
            ],
            listItems: [
              "Clean, modern hero section",
              "Light/dark theme toggle",
              "Responsive on every device",
              "Clear calls-to-action to get started",
            ],
            images: ["/P23_1.png"],
          },
        ],
      },
      {
        title: "Account & Login",
        description: [
          {
            text: [
              "A straightforward sign-up and login flow. You register with your email and password, log in, and your data is yours alone — anyone not signed in is kept out of the dashboard.",
            ],
            listItems: [
              "Secure login and registration",
              "Passwords stored safely, never in plain text",
              "Responsive account pages",
            ],
            images: ["/P23_2.png", "/P23_3.png"],
          },
        ],
      },
      {
        title: "Dashboard — Financial Overview",
        description: [
          {
            text: [
              "The dashboard is where everything comes together: your bank accounts and cash on one side, a monthly overview in the middle, and the month you're currently looking at on the other — all updating in real time and saved automatically.",
            ],
            listItems: [
              "Three-panel overview: accounts, month, spending",
              "Balances update instantly as you make changes",
              "Warns you before you lose unsaved edits",
              "Clean, modern card-based layout",
            ],
            images: ["/P23_4.png"],
          },
        ],
      },
      {
        title: "Bank Accounts",
        description: [
          {
            text: [
              "Add any bank account, see its balance at a glance, and deposit, withdraw, or move money between accounts — all through a simple pop-up, with every change saved instantly.",
            ],
            listItems: [
              "Add new bank accounts",
              "Deposit, withdraw, or transfer between banks",
              "Search and filter your accounts",
              "Visually distinct cards for each bank",
            ],
            images: ["/P23_5.png"],
          },
        ],
      },
      {
        title: "Cash on Hand",
        description: [
          {
            text: [
              "A dedicated space for tracking physical cash — move it into a bank account or log new cash income, with checks in place so your numbers never go out of sync.",
            ],
            listItems: [
              "Track your physical cash balance",
              "Deposit cash into any bank account",
              "Log new cash income",
              "Simple pop-up for every action",
            ],
            images: ["/P23_6.png"],
          },
        ],
      },
      {
        title: "Monthly Spending",
        description: [
          {
            text: [
              "Step through your months one at a time and log what you spent each day — the item, the amount, the date — and Expense Tracker keeps your balances current automatically, catching duplicate entries before they happen.",
            ],
            listItems: [
              "Move between previous, current, and future months",
              "See your full spending list and total for the month",
              "Add, edit, or delete any daily expense",
              "Guards against logging the same date twice",
            ],
            images: ["/P23_7.png", "/P23_8.png"],
          },
        ],
      },
      {
        title: "Under the Hood",
        description: [
          {
            text: [
              "Built with Next.js and TypeScript for a fast, reliable dashboard, with MongoDB keeping every account and expense saved and up to date the moment you make a change.",
            ],
            listItems: [
              "Next.js and TypeScript throughout",
              "MongoDB for real-time financial data",
              "Smooth, responsive interface with theme support",
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
    type: "saas",
    date: "2026-04-20",
    img: ["/P22MainImage.png"],
    liveLink: "https://mydailyroutine.app",
    shortDescription:
      "My Daily Routine helps you actually stick to a routine — plan your week, chat with AI to build it, track long-term goals, and see your progress with real stats. Live at mydailyroutine.app.",
    longDescription:
      "My Daily Routine is a full productivity app that helps people plan their week, build better habits, and actually see whether they're sticking to it. You lay out your days on a drag-and-drop weekly timeline, or describe what you want and let an AI assistant draft and refine a routine for you. Longer-term goals live alongside your daily schedule, and a full stats dashboard shows your streaks, trends, and patterns over time. Sign in with Google or email, and go premium for the AI features and unlimited routines. Built with Next.js, React, and MongoDB, and live at mydailyroutine.app.",
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
    gitLink: null,
    feaTures: [
      {
        title: "Landing Page & Pricing",
        description: [
          {
            text: [
              "A proper marketing site greets first-time visitors — a landing page, pricing, testimonials, and all the legal pages a real paid product needs.",
              "It's fully optimized for search engines, works well on any device, and supports both light and dark mode.",
              "Smooth animations throughout give it a polished, premium feel without slowing anything down.",
            ],
            listItems: [
              "Animated landing page with a clear path to sign up or try it",
              "Dedicated pricing, testimonials, and legal pages",
              "Fully responsive, with light and dark mode",
              "Polished animations and micro-interactions throughout",
            ],
            images: ["/P22LandingPage.png", "/P22PricingPage.png"],
          },
        ],
      },
      {
        title: "Sign In Your Way",
        description: [
          {
            text: [
              "You can sign in with Google in one click, or create an account with just your email and password — whichever you prefer.",
              "Every part of the app that needs you to be signed in is protected automatically, and if you try to access something without being logged in, you're sent straight to the login page.",
              "Behind the scenes, the app always double-checks who's actually making a request, rather than trusting anything sent from the browser — so your data stays yours.",
            ],
            listItems: [
              "Sign in with Google, or with your own email and password",
              "Passwords are securely encrypted, never stored as plain text",
              "Every protected page checks you're really logged in",
              "A full forgot-password and reset flow if you ever get locked out",
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
        title: "Email Verification & Account Cleanup",
        description: [
          {
            text: [
              "New accounts are verified with a one-time code sent straight to your email, so every account on the platform is a real one.",
              "Unverified accounts that never get confirmed are automatically cleaned up after 30 days, keeping things tidy behind the scenes.",
              "The same email system also sends your welcome message and handles password resets.",
            ],
            listItems: [
              "One-time verification code sent by email on signup",
              "Codes expire and are protected against repeated guessing",
              "Unverified accounts are cleaned up automatically after 30 days",
              "Welcome and password-reset emails sent the same way",
            ],
            images: ["/P22OtpVerification.png"],
          },
        ],
      },
      {
        title: "Your Weekly Timeline",
        description: [
          {
            text: [
              "The dashboard is where your whole week lives — all seven days laid out side by side, with a live line showing exactly where you are right now.",
              "Just drag any task to move it — up, down, or to a different day — and drop it exactly where you want it. Need to shift the same task across the whole week? One \"sync\" mode moves it everywhere at once.",
              "Every task has its own category, time, and color, so your week is easy to read at a glance. Zoom in for detail, jump back to the current moment, and undo anything with a keystroke.",
              "When a task is about to start, you get a gentle sound and reminder — with a one-tap way to mark it done.",
            ],
            listItems: [
              "All seven days laid out together, with a live \"now\" marker",
              "Drag and drop to reschedule anything, instantly",
              "Shift a repeating task across every day it appears, in one move",
              "Zoom, jump-to-now, and undo/redo for fast editing",
              "A gentle reminder chime when a task is about to start",
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
        title: "Editing Made Easy",
        description: [
          {
            text: [
              "Click any task to open a simple editor — rename it, change its category or time, and apply the change to just today or to several days at once.",
              "You can add the same task to multiple days in one go, remove it everywhere at once, or even swap the time slots of two tasks directly.",
              "The app quietly checks for scheduling conflicts and duplicate names as you go, so your week always stays realistic.",
            ],
            listItems: [
              "Edit a task's name, category, or time in one place",
              "Apply changes to one day, several days, or the whole week",
              "Swap two tasks' time slots in a single move",
              "Automatic conflict and duplicate checking as you edit",
            ],
            images: ["/P22SidebarRoutine.png", "/P22TaskEditor.png"],
          },
        ],
      },
      {
        title: "Build a Routine by Chatting with AI",
        description: [
          {
            text: [
              "For premium members, an AI assistant helps you plan your week just by talking to it — describe what you want your days to look like, and it drafts a routine based on your actual schedule and goals.",
              "The conversation is saved, so you can keep refining the plan over time. When you're happy with what the AI has built, one click copies it straight into your real routine.",
            ],
            listItems: [
              "Chat naturally to build or adjust your weekly routine",
              "Suggestions are grounded in your real schedule, not generic advice",
              "Your conversation is saved so you can keep refining it",
              "One click copies the AI's plan into your actual routine",
            ],
            images: ["/P22AIRoutinePage.png", "/P22AIChatFlow.png"],
          },
        ],
      },
      {
        title: "Track Your Bigger Goals",
        description: [
          {
            text: [
              "Alongside your daily schedule, you can set longer-term goals — with a priority, due date, subtasks, and reminders — and track them from to-do through to done.",
              "Goals with a specific time show up right on your weekly timeline, so your big-picture ambitions and your day-to-day schedule always stay connected.",
            ],
            listItems: [
              "Set goals with priority, due dates, subtasks, and reminders",
              "Track progress from to-do, to in progress, to done",
              "Pin your most important goals to keep them visible",
              "Time-based goals appear directly on your weekly timeline",
            ],
            images: ["/P22GoalsPage.png", "/P22GoalEditor.png"],
          },
        ],
      },
      {
        title: "See Your Progress",
        description: [
          {
            text: [
              "Every task you complete feeds into a full stats dashboard, so you can actually see how consistent you've been — not just guess.",
              "See your current and best streaks, a monthly breakdown, which tasks you complete most (and which you don't), and personalized insights about your habits, like your strongest day of the week.",
              "A full year's activity is laid out as a heat map, so your progress is visible at a glance.",
            ],
            listItems: [
              "Current and best-ever streaks",
              "Monthly breakdown of your completion rate",
              "See which tasks you keep — and which you keep skipping",
              "Personalized insights about your habits and patterns",
              "A full year of activity shown as a heat map",
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
        title: "Your Profile",
        description: [
          {
            text: [
              "Update your display name and upload a profile photo — it's automatically resized and optimized so it loads fast without looking blurry.",
              "Your data is always cleaned before it's ever sent to your browser, so nothing about how the app works internally is ever exposed.",
            ],
            listItems: [
              "Update your name and profile photo anytime",
              "Photos are automatically optimized for fast loading",
              "Your data is kept clean and private, always",
            ],
            images: ["/P22ProfilePage.png", "/P22PhotoUpload.png"],
          },
        ],
      },
      {
        title: "Simple, Secure Billing",
        description: [
          {
            text: [
              "Going premium is a one-time purchase, handled securely through Paddle — no recurring surprises.",
              "Every payment is verified on the backend before your account is upgraded, so access is only ever granted for real, confirmed payments. Your billing page always shows your current plan and when it's valid until.",
            ],
            listItems: [
              "One-time purchase for premium — no subscriptions",
              "Payments verified securely before any upgrade is granted",
              "Billing page shows your plan and renewal status clearly",
            ],
            images: [
              "/P22PaddleCheckoutStep1.png",
              "/P22PaddleCheckout.png",
              "/P22ProfilePage.png",
            ],
          },
        ],
      },
      {
        title: "Admin Dashboard",
        description: [
          {
            text: [
              "A private admin area lets me manage the user base and respond to feedback directly, so issues get seen and fixed quickly.",
            ],
            listItems: [
              "Manage users and account status",
              "Respond to feedback submitted by real users",
              "Locked down to admin accounts only",
            ],
            images: ["/P22AdminPanel.png", "/P22AdminFeedback.png"],
          },
        ],
      },
      {
        title: "Built to Be Fast and Secure",
        description: [
          {
            text: [
              "Under the hood, the app is hardened the way a real production service should be — strict security headers, rate limiting on sensitive actions, and a database connection built to stay stable under real traffic.",
              "The codebase is organized so it's easy to follow and safe to change, with every server-side action double-checking who's really making the request before it touches your data.",
            ],
            listItems: [
              "Strict security headers and a locked-down content policy",
              "Rate limiting to protect against abuse",
              "A database connection built to stay reliable under load",
              "Every action re-verifies who's making the request, every time",
            ],
            images: ["/P22Architecture.png", "/P22DarkMode.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "My Daily Routine is built on Next.js, React, and TypeScript on the frontend, with MongoDB handling the data behind it.",
              "It uses Google Gemini for the AI routine assistant, Paddle for payments, and cloud storage for profile photos — all tied together with Redux Toolkit for state and Recharts for the analytics charts.",
            ],
            listItems: [
              "Frontend: Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
              "State: Redux Toolkit",
              "Backend & Data: MongoDB",
              "AI: Google Gemini",
              "Payments: Paddle",
              "Analytics: Recharts",
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
    type: "hobby-project",
    date: "2025-09-15",
    img: ["/P16pic.png"],
    liveLink: "https://be-healthy-delta.vercel.app/",
    shortDescription:
      "Be Healthy helps you build better habits in one place — track your BMI, get a meal plan and recipes that fit it, follow a workout plan, and build wellness habits you can actually stick to.",
    longDescription:
      "Be Healthy is a wellness app that brings the basics of getting healthier into one place. Calculate your BMI for free, then sign in to get a daily meal plan and recipes matched to it, a nutrition tracker that shows what you've actually eaten, a workout plan built around your body condition, and simple tools for setting wellness goals, learning to meditate, and getting quick advice for common ailments. There's also a community space to share progress with other users. Built with Next.js, React, and MongoDB.",
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
        title: "Landing Page",
        description: [
          {
            text: [
              "The homepage introduces what Be Healthy does and lets you try the BMI calculator right away — everything else needs a free account.",
            ],
            listItems: [
              "Clear introduction to the app's health features",
              "Light and dark mode",
              "Try the BMI calculator with no account needed",
              "Works well on any device",
            ],
            images: ["/P16pic.png"],
          },
        ],
      },
      {
        title: "Account & Login",
        description: [
          {
            text: [
              "A simple sign-up and login flow — create an account with your name, email, and password, and you're in.",
            ],
            listItems: [
              "Secure login and registration",
              "Passwords are safely encrypted",
              "Smooth navigation between login and sign-up",
            ],
            images: ["/P16_1pic.png", "/P16_2pic.png"],
          },
        ],
      },
      {
        title: "Your Profile",
        description: [
          {
            text: [
              "Update your profile picture, bio, phone number, and password whenever you like — changing your password requires confirming the old one first, for security.",
            ],
            listItems: [
              "Editable profile with photo upload",
              "Secure password changes",
              "Simple, safe logout",
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
              "Your dashboard is a single home base that fills in as you use the app — a running summary of your BMI, meals, workouts, goals, and meditation progress.",
            ],
            listItems: [
              "One place to see all your activity",
              "Updates automatically as you use the app",
              "Quick access to every feature",
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
              "Enter your age, height, weight, and gender to get your BMI instantly, along with what it means for your body and where you fall on the healthy-range chart. Recalculate anytime your numbers change.",
            ],
            listItems: [
              "Free to use, no account needed",
              "Clear result with what it means for you",
              "Visual chart to see where you stand",
              "Recalculate anytime",
            ],
            images: ["/P16_6pic.png"],
          },
        ],
      },
      {
        title: "Meal Plans & Recipes",
        description: [
          {
            text: [
              "Get a daily meal plan built around your own BMI, with three recipe choices for each of your five meals — pick what sounds good and switch it up whenever you want.",
            ],
            listItems: [
              "Meal plan personalized to your BMI",
              "Three recipe choices per meal",
              "Change your picks anytime",
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
              "As you log the meals you actually ate, the Nutrition Tracker keeps a running total of your calories and nutrients, so you can see how your day adds up in real time.",
            ],
            listItems: [
              "Live calorie and nutrient totals",
              "Updates as you log each meal",
              "Clear, easy-to-read breakdown",
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
              "Get a workout plan that matches your BMI and body condition — choose from a five- or six-day-a-week schedule, and switch plans anytime your goals change.",
            ],
            listItems: [
              "Plans built around your BMI",
              "Five- or six-day schedules to choose from",
              "Switch plans anytime",
            ],
            images: ["/P16_9pic.png"],
          },
        ],
      },
      {
        title: "Wellness Goals",
        description: [
          {
            text: [
              "Pick from 15 everyday habits covering nutrition, exercise, sleep, mental health, and hydration, and set them as personal goals you can track and adjust anytime.",
            ],
            listItems: [
              "15 habits to choose from",
              "Covers nutrition, exercise, sleep, and more",
              "Edit or reset your goals anytime",
            ],
            images: ["/P16_10pic.png"],
          },
        ],
      },
      {
        title: "Meditation & Mental Health",
        description: [
          {
            text: [
              "A collection of 15 simple tips and short practices to help you build resilience and take care of your mental health, ready whenever you need them.",
            ],
            listItems: [
              "15 guided tips and practices",
              "Revisit any practice anytime",
              "A calm, simple interface",
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
              "Search for a common ailment — like a fever or a headache — and get practical, at-home first-aid guidance for 50 everyday health issues.",
            ],
            listItems: [
              "Searchable guide to 50 common ailments",
              "Practical, at-home advice",
              "Fast, simple lookup",
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
              "Share your progress, post updates, and see what other Be Healthy users are up to — a space to stay motivated together.",
            ],
            listItems: [
              "View and post in the community feed",
              "Edit or delete your own posts",
              "Built to keep you motivated",
            ],
            images: ["/P16_13pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, SEO-friendly pages, and MongoDB for keeping your health data saved and up to date, styled with Tailwind CSS.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "MongoDB for real-time data",
              "Tailwind CSS for a clean, responsive design",
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
    type: "hobby-project",
    date: "2025-07-20",
    img: ["/P15pic.png"],
    liveLink: "https://bracu-faculty-review.vercel.app/",
    shortDescription:
      "Faculty Review helps students make better course choices — search any faculty member, read what other students say about them, leave your own comment, and rate them out of 5.",
    longDescription:
      "Faculty Review gives students a real place to share and read honest feedback on their university faculty. Search for any professor by name, initials, or department, then read comments from other students, leave your own, and rate them out of 5 — so the next student picking a course knows what to expect. Admins keep the faculty list itself up to date behind the scenes. Built with Next.js, React, and MongoDB.",
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
        title: "Browse & Search Faculty",
        description: [
          {
            text: [
              "A grid of every faculty member, each with their name, photo, and initials — search by name, initials, or department to find who you're looking for in seconds. You'll need an account to browse, so reviews stay tied to real students.",
            ],
            listItems: [
              "Clean grid of every faculty member",
              "Instant search by name, initials, or department",
              "Free to sign up and browse",
            ],
            images: ["/P15pic.png"],
          },
        ],
      },
      {
        title: "Account & Login",
        description: [
          {
            text: [
              "A simple login and sign-up flow — create an account in a couple of steps and you're ready to start reading and leaving reviews.",
            ],
            listItems: [
              "Secure login with validation",
              "Quick account creation",
              "Smooth navigation between login and sign-up",
            ],
            images: ["/P15_1pic.png", "/P15_2pic.png"],
          },
        ],
      },
      {
        title: "Reviews & Ratings",
        description: [
          {
            text: [
              "Click any faculty member to see their full profile: leave your own comment, read what other students have said, and rate them out of 5 — all on one page.",
            ],
            listItems: [
              "Leave a comment about any faculty member",
              "Read comments from other students",
              "Rate faculty out of 5",
            ],
            images: ["/P15_3pic.png"],
          },
        ],
      },
      {
        title: "Admin Dashboard",
        description: [
          {
            text: [
              "Admins get an extra option in the menu to add, edit, or remove faculty from the database, so the list itself always stays accurate and current.",
            ],
            listItems: [
              "Add, edit, or remove faculty",
              "Admin-only access",
              "Keeps the faculty list accurate",
            ],
            images: ["/P15_4pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, dynamic pages and MongoDB for storing reviews and ratings, styled with Tailwind CSS.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "MongoDB for reviews and ratings",
              "Tailwind CSS for a clean, responsive design",
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
    type: "hobby-project",
    date: "2025-05-10",
    img: ["/P9pic.png"],
    liveLink: "https://timetrack-ten.vercel.app/",
    shortDescription:
      "Time Track keeps your daily routine organized — create tasks on a daily or weekly schedule, at whatever time works for you, and everything stays saved and up to date.",
    longDescription:
      "Time Track is a simple task scheduler for keeping your day-to-day routine on track. Create an account, add tasks with the time and schedule you want — daily or weekly, in whatever time format you prefer — and edit or remove them anytime from a clean dashboard. Built with Next.js, React, and MongoDB.",
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
        title: "Account & Login",
        description: [
          {
            text: [
              "A simple, secure sign-up and login flow gets you into your own space in a couple of steps.",
            ],
            listItems: [
              "Secure login and registration",
              "Smooth navigation between login and sign-up",
              "Responsive on any device",
            ],
            images: ["/P9_1pic.png", "/P9_2pic.png"],
          },
        ],
      },
      {
        title: "Task Dashboard",
        description: [
          {
            text: [
              "Your dashboard is where you build your routine — add a task, give it a name, set the time in whichever format you prefer, and choose whether it repeats daily or weekly.",
              "Edit or delete any task anytime, and every change is saved instantly.",
            ],
            listItems: [
              "Create tasks with a custom time and format",
              "Daily or weekly repeating schedules",
              "Edit or delete any task",
              "Everything saves automatically",
            ],
            images: ["/P9_3pic.png"],
          },
        ],
      },
      {
        title: "Your Profile",
        description: [
          {
            text: [
              "Update your profile photo, name, bio, and password anytime from your profile page — your email stays fixed, but everything else is yours to update.",
            ],
            listItems: [
              "Editable profile photo and details",
              "Secure name, bio, and password updates",
              "Simple, safe logout",
            ],
            images: ["/P9_4pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, dynamic pages and MongoDB for keeping your tasks saved in real time, styled with Tailwind CSS.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "MongoDB for real-time task storage",
              "Tailwind CSS for a clean, responsive design",
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
    type: "clients-project",
    date: "2025-10-15",
    img: ["/P19pic.png"],
    liveLink: "https://library-management-system-alpha-nine.vercel.app/",
    shortDescription:
      "Library Management gives a small community library a real digital system — members can browse and borrow up to 3 books at a time, with fines calculated automatically for anything returned late.",
    longDescription:
      "Library Management is a custom system I built for a client who runs a small community library in Dhaka and was tracking everything by hand. Members create an account, browse the collection, and borrow up to 3 books at a time — with a 100 TK per day fine calculated automatically on anything returned late. The client manages the whole book collection and member list himself from a simple admin dashboard. Built with Next.js, React, and MongoDB.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["MongoDB", "/Mongodb.png"],
    ],
    gitLink: null,
    feaTures: [
      {
        title: "Browse the Collection",
        description: [
          {
            text: [
              "Every book in the library is laid out as a simple card grid, with the whole collection open to browse once you're signed in.",
            ],
            listItems: [
              "Clean, browsable grid of every book",
              "Sign in to browse the full collection",
              "Your profile photo (or initial) shows once you're logged in",
            ],
            images: ["/P19pic.png", "/P19_3pic.png"],
          },
        ],
      },
      {
        title: "Account & Login",
        description: [
          {
            text: [
              "A simple sign-up and login flow gets members into their own account in a couple of steps.",
            ],
            listItems: [
              "Secure login and registration",
              "Smooth navigation between login and sign-up",
              "Works well on any device",
            ],
            images: ["/P19_1pic.png", "/P19_2pic.png"],
          },
        ],
      },
      {
        title: "Borrow & Return",
        description: [
          {
            text: [
              "Click any book to see its details and borrow it in one click — or return it when you're done. If a book's already checked out, or you've hit your 3-book limit, you'll see a clear message instead.",
              "Your borrowed books are listed alongside their due dates, and any overdue fine is shown clearly and calculated automatically — 100 TK per book, per day late.",
            ],
            listItems: [
              "One-click borrow and return",
              "Clear message when a book's unavailable or you're at your limit",
              "Automatic overdue fine calculation",
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
        title: "Search",
        description: [
          {
            text: [
              "Search the collection by title, author, genre, or ID, and see results update instantly.",
            ],
            listItems: [
              "Instant search across title, author, genre, or ID",
            ],
            images: ["/P19_4pic.png"],
          },
        ],
      },
      {
        title: "Borrowing History",
        description: [
          {
            text: [
              "See your full borrowing history in one place — every book you've ever borrowed, when you got it, and when it was returned or was due.",
            ],
            listItems: [
              "Full history of everything you've borrowed",
              "Clear borrow and return dates",
            ],
            images: ["/P19_10pic.png"],
          },
        ],
      },
      {
        title: "Your Profile",
        description: [
          {
            text: [
              "Update your profile photo, name, bio, and password anytime from your profile page.",
            ],
            listItems: [
              "Editable photo and personal details",
              "Secure password updates",
            ],
            images: ["/P19_11pic.png"],
          },
        ],
      },
      {
        title: "Admin Dashboard",
        description: [
          {
            text: [
              "The client manages the entire collection from here — adding new books and editing or removing existing ones. A book currently on loan can't be deleted, so the collection's records always stay accurate.",
            ],
            listItems: [
              "Add, edit, or remove books",
              "Borrowed books are protected from deletion",
            ],
            images: ["/P19_12pic.png", "/P19_12pic_2.png"],
          },
        ],
      },
      {
        title: "Member List",
        description: [
          {
            text: [
              "A full list of every registered member, with their photo, name, email, and phone number, so the client can always see who's using the library.",
            ],
            listItems: [
              "Full member list with contact details",
              "Admin-only access",
            ],
            images: ["/P19_13pic.png", "/P19_13pic_2.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, dynamic pages and MongoDB for keeping every book, member, and loan record accurate and up to date, styled with Tailwind CSS.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "MongoDB for real-time data",
              "Automatic fine calculation built in",
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
    type: "hobby-project",
    date: "2025-02-20",
    img: ["/P7pic.png"],
    liveLink: "https://cafeteria-opal-psi.vercel.app/",
    shortDescription:
      "Cafeteria is an online food ordering app — browse the menu, add items to your cart, and check out, while the cafeteria runs its whole operation from an admin dashboard behind the scenes.",
    longDescription:
      "Cafeteria is an online ordering platform for a food service business. Customers browse the menu, add what they want to a cart, and check out, while the business side runs everything else — food items, staff, members, suppliers, and payments — from a dedicated admin dashboard. Built with React, Firebase, and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["Firebase", "/Firebase.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Cafeteria",
    feaTures: [
      {
        title: "Account & Login",
        description: [
          {
            text: [
              "A simple, secure sign-up and login flow gets you ordering in a couple of steps.",
            ],
            listItems: [
              "Secure login and registration",
              "Smooth navigation between login and sign-up",
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
              "The business side of the app: admins manage food items, staff, members, suppliers, materials, and payments, all from one dashboard.",
            ],
            listItems: [
              "Manage food items, staff, and suppliers",
              "Add, edit, or remove menu items",
              "Admin-only access",
            ],
            images: ["/P7_3pic.png", "/P7_4pic.png"],
          },
        ],
      },
      {
        title: "Customer Home",
        description: [
          {
            text: [
              "Once you're signed in as a customer, you get a simple, focused view of your profile, the menu, and your cart.",
            ],
            listItems: [
              "Clean, customer-focused navigation",
              "Quick access to menu, cart, and profile",
            ],
            images: ["/P7_5pic.png"],
          },
        ],
      },
      {
        title: "Browse the Menu",
        description: [
          {
            text: [
              "Every food item is laid out as a card with its photo, name, quantity, and price — add anything straight to your cart.",
            ],
            listItems: [
              "Browsable menu with photos and pricing",
              "Add items to your cart in one click",
            ],
            images: ["/P7pic.png"],
          },
        ],
      },
      {
        title: "Cart & Checkout",
        description: [
          {
            text: [
              "Your cart shows everything you've picked and the total cost — proceed to payment when you're ready, or clear it and start over.",
            ],
            listItems: [
              "Clear cart summary with total cost",
              "Proceed to payment or clear the cart",
            ],
            images: ["/P7_6pic.png"],
          },
        ],
      },
      {
        title: "Your Profile",
        description: [
          {
            text: [
              "A simple view of your account details, exactly as you registered them.",
            ],
            listItems: [
              "Clear view of your account details",
            ],
            images: ["/P7_7pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for a fast, dynamic interface, Firebase for authentication and real-time data, and Tailwind CSS for a clean, responsive design.",
            ],
            listItems: [
              "React for a dynamic, responsive interface",
              "Firebase for authentication and real-time data",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2025-01-25",
    img: ["/P14pic.png"],
    liveLink: "https://our-agency-one.vercel.app/",
    shortDescription:
      "Our Agency is a portfolio site for a creative agency — an animated showcase of their work, with a detail page for every project and a way for clients to get in touch.",
    longDescription:
      "Our Agency is a portfolio website built to show off a creative agency's work in an engaging way. Visitors browse a hover-animated preview of every project on the homepage, click through to a full case-study page for any one of them, and can reach out directly through a contact form. Built with Next.js, React, and Framer Motion for smooth, polished animation throughout.",
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
        title: "Landing Page",
        description: [
          {
            text: [
              "A bold homepage lists every piece of work the agency has done, with quick links to browse the full portfolio or get in touch.",
              "Hover over any project and the whole page comes alive — the background switches to that project's image, and its title, type, and a short description slide into view.",
            ],
            listItems: [
              "Full list of agency work on one page",
              "Background and preview change as you hover over each project",
              "Smooth, animated transitions throughout",
              "Looks great on any device",
            ],
            images: ["/P14pic.png", "/P14_1pic.png"],
          },
        ],
      },
      {
        title: "Project Detail Page",
        description: [
          {
            text: [
              "Click into any project to see it properly — the full image, title, type, and a complete write-up of the work.",
            ],
            listItems: [
              "A dedicated page for every project",
              "Full write-up with image and details",
            ],
            images: ["/P14_2pic.png"],
          },
        ],
      },
      {
        title: "Full Portfolio",
        description: [
          {
            text: [
              "A dedicated page lists every project as a card, so visitors can browse the whole portfolio at a glance and click into anything that catches their eye.",
            ],
            listItems: [
              "Every project shown as a browsable card",
              "One click through to the full case study",
            ],
            images: ["/P14_3pic.png"],
          },
        ],
      },
      {
        title: "Get in Touch",
        description: [
          {
            text: [
              "A simple contact form gives visitors a direct way to reach the agency with a question or project inquiry.",
            ],
            listItems: [
              "Simple, reliable contact form",
              "Clear call-to-action to get in touch",
            ],
            images: ["/P14_4pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, dynamic pages, and Framer Motion for the smooth hover and transition animations throughout.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "Framer Motion for smooth animation",
              "Tailwind CSS for a clean, responsive design",
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
    type: "hobby-project",
    date: "2025-12-10",
    img: ["/P17_2_screenshotOfLandingPage.png"],
    liveLink: "https://chemistry-mcq-test.vercel.app/",
    shortDescription:
      "Chemistry MCQ Test helps SSC students actually prepare for their chemistry exam — randomized 10-question timed tests, the full syllabus to review, exam tips, and charts showing how they're improving over time.",
    longDescription:
      "Chemistry MCQ Test is a study platform built for students preparing for their SSC chemistry exam. Take a randomized 10-question test under a real 10-minute timer, browse the complete syllabus to review any topic, and read practical exam tips and shortcuts. Every test result is saved, so students can track their scores and see their improvement over time on a simple chart. Built with Next.js and TypeScript.",
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
        title: "Getting Started",
        description: [
          {
            text: [
              "A welcoming homepage greets students and guides them straight to what they need. Creating a free account lets you save your progress and come back to track it anytime.",
            ],
            listItems: [
              "Simple, welcoming design for SSC students",
              "Secure login and registration",
              "Your progress is saved to your account",
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
        title: "Timed Practice Tests",
        description: [
          {
            text: [
              "Take a real practice test: 10 questions randomly pulled from a full question bank covering Inorganic, Physical, and Organic Chemistry, under a genuine 10-minute countdown that mirrors real exam pressure.",
            ],
            listItems: [
              "10 random questions per test, covering the full syllabus",
              "Real 10-minute timer",
              "Instant scoring the moment you submit",
            ],
            images: [
              "/P17_3_screenshotOfMCQTestInterface.png",
              "/P17_4_screenshotOfTimerAndQuestions.png",
            ],
          },
        ],
      },
      {
        title: "Full Syllabus, Organized",
        description: [
          {
            text: [
              "Browse the entire SSC Chemistry syllabus in one place — expand any chapter to review its topics and subtopics before your next test.",
            ],
            listItems: [
              "Complete syllabus, chapter by chapter",
              "Expand any section to review the details",
              "Built for quick, systematic revision",
            ],
            images: ["/P17_5_screenshotOfSyllabusCoverage.png"],
          },
        ],
      },
      {
        title: "Exam Tips",
        description: [
          {
            text: [
              "Practical advice for exam day — time-management tips, shortcuts for specific chapters, and the common mistakes students make, so you know what to avoid.",
            ],
            listItems: [
              "Real test-taking techniques and shortcuts",
              "Tips organized by chapter",
              "Common mistakes to avoid",
            ],
            images: ["/P17_6_screenshotOfExamTipsPage.png"],
          },
        ],
      },
      {
        title: "Track Your Progress",
        description: [
          {
            text: [
              "After every test, see exactly how you did — your score, accuracy, and how long it took — and watch a simple chart show your improvement across every attempt, so you know which topics still need work.",
            ],
            listItems: [
              "Every test score saved automatically",
              "A simple chart of your progress over time",
              "See which topics need more work",
            ],
            images: [
              "/P17_7_screenshotOfPerformanceAnalytics.png",
              "/P17_8_screenshotOfProgressCharts.png",
            ],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js and TypeScript for a fast, reliable experience on any device, styled with Tailwind CSS.",
            ],
            listItems: [
              "Next.js and TypeScript throughout",
              "Tailwind CSS for a clean, responsive design",
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
    type: "hobby-project",
    date: "2024-11-15",
    img: ["/P8pic.png"],
    liveLink: "https://protein-corner-frontend.vercel.app/",
    shortDescription:
      "Protein Corner is a storefront for a protein-food business — browse chicken, fish, beef, egg, and milk products, filter by category, and check out with a cart and payment flow.",
    longDescription:
      "Protein Corner is an e-commerce storefront for a business selling protein-based foods — chicken, fish, beef, egg, and milk. A video-led homepage introduces the products, customers filter and browse by category, add items to a cart, and check out with a clear order summary. Built with Next.js, React, and Tailwind CSS.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/protein-corner-frontend",
    feaTures: [
      {
        title: "Landing Page",
        description: [
          {
            text: [
              "A video-led homepage introduces the products — chicken, fish, beef, egg, and milk — with quick links to shop or get in touch.",
              "Scroll down and the full product catalog appears: photo, name, price, and any discount for each item, with filters to browse by category.",
            ],
            listItems: [
              "Video hero introducing the products",
              "Simple, intuitive navigation",
              "Filter products by category",
              "Add to cart in one click",
            ],
            images: ["/P8pic.png", "/P8_1pic.png"],
          },
        ],
      },
      {
        title: "Shop",
        description: [
          {
            text: [
              "A dedicated shop page for focused browsing — the same catalog and category filters as the homepage, without the distractions.",
            ],
            listItems: [
              "Full product catalog, filterable by category",
              "Fast, focused shopping experience",
            ],
            images: ["/P8_1_1pic.png"],
          },
        ],
      },
      {
        title: "Cart",
        description: [
          {
            text: [
              "Add anything to your cart and adjust quantities right there with simple plus and minus buttons — everything updates instantly.",
            ],
            listItems: [
              "Cart updates in real time",
              "Adjust quantities with one tap",
            ],
            images: ["/P8_3pic.png"],
          },
        ],
      },
      {
        title: "Contact",
        description: [
          {
            text: [
              "A simple contact form gives customers a direct way to reach the business with a question or order request.",
            ],
            listItems: [
              "Simple, reliable contact form",
              "Direct line to the business",
            ],
            images: ["/P8_2pic.png"],
          },
        ],
      },
      {
        title: "Checkout",
        description: [
          {
            text: [
              "A clear summary of everything in your cart and the total cost, with a straightforward checkout button to complete the order.",
            ],
            listItems: [
              "Clear order summary with total cost",
              "Simple, one-click checkout",
            ],
            images: ["/P8_4pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, dynamic pages, styled with Tailwind CSS for a clean, responsive design across every device.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "Tailwind CSS for a responsive design",
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
    type: "hobby-project",
    date: "2024-10-20",
    img: ["/P12pic.png"],
    liveLink: "https://utes.vercel.app/",
    shortDescription:
      "Utes is the company website I built as their sole frontend developer — a full showcase of their IT services, client work, and open roles, all in one polished site.",
    longDescription:
      "Utes is the official website for an IT solutions company, built while I was their sole frontend developer. It walks visitors through everything the company offers — web and app development, hosting, marketing, and security — showcases real client work and results, lists open roles for anyone looking to join, and gives visitors a simple way to get in touch. Built with Next.js and Tailwind CSS.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/Utes",
    feaTures: [
      {
        title: "Landing Page",
        description: [
          {
            text: [
              "The homepage makes a strong first impression — a bold hero section pitching what Utes does, with light/dark mode and a clean way to browse the rest of the site.",
              "Scroll down and you get a quick preview of the company's services, clients, and open roles, all in one glance.",
            ],
            listItems: [
              "Bold, professional hero section",
              "Light and dark mode",
              "Quick preview of services, clients, and careers",
            ],
            images: ["/P12pic.png", "/P12_1pic.png"],
          },
        ],
      },
      {
        title: "Services",
        description: [
          {
            text: [
              "A full breakdown of everything Utes offers — web and app development, hosting, digital and email marketing, cybersecurity, and graphic design — each explained in plain terms.",
            ],
            listItems: [
              "Every service explained clearly",
              "Covers web, app, marketing, security, and design work",
            ],
            images: ["/P12_2pic.png"],
          },
        ],
      },
      {
        title: "Client Work",
        description: [
          {
            text: [
              "Real case studies from real clients across different industries — what they needed, what Utes built, and the results it got them.",
            ],
            listItems: [
              "Real client case studies with outcomes",
              "Testimonials from real clients",
              "Work spanning multiple industries",
            ],
            images: ["/P12_3pic.png"],
          },
        ],
      },
      {
        title: "Careers",
        description: [
          {
            text: [
              "Open roles at Utes, laid out clearly — what the job involves, what's required, and how to apply.",
            ],
            listItems: [
              "Current job openings, clearly described",
              "Requirements and benefits up front",
              "Simple way to apply",
            ],
            images: ["/P12_4pic.png"],
          },
        ],
      },
      {
        title: "Contact",
        description: [
          {
            text: [
              "A simple contact form gives visitors a direct line to the Utes team for any inquiry.",
            ],
            listItems: [
              "Simple, reliable contact form",
              "Direct line to the team",
            ],
            images: ["/P12_5pic.png"],
          },
        ],
      },
      {
        title: "About Utes",
        description: [
          {
            text: [
              "The company's story and mission, in their own words — who they are, what they specialize in, and how they work with clients.",
            ],
            listItems: [
              "The company's mission and story",
              "What they specialize in",
            ],
            images: ["/P12_6pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, SEO-friendly pages and Tailwind CSS for a consistent, professional look across the whole site.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "Tailwind CSS for a consistent design",
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
    type: "hobby-project",
    date: "2024-09-25",
    img: ["/P6pic.png"],
    liveLink: "https://guest-book-gamma.vercel.app/",
    shortDescription:
      "Guest Book is a simple personal profile app — sign in, upload a photo, write a short bio, and it's yours to keep updated.",
    longDescription:
      "Guest Book is a small, focused app for keeping a personal profile online — sign in, upload a profile photo, write a short bio, and update either whenever you like. Built with React, Firebase, and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
      ["Firebase", "/Firebase.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/GuestBook",
    feaTures: [
      {
        title: "Account & Login",
        description: [
          {
            text: [
              "A simple, secure login and registration flow — sign in to see your profile, or create an account in a couple of steps.",
            ],
            listItems: [
              "Secure login and registration",
              "Smooth navigation between login and sign-up",
            ],
            images: ["/P6_1pic.png", "/P6_2pic.png"],
          },
        ],
      },
      {
        title: "Your Profile",
        description: [
          {
            text: [
              "Once you're signed in, you land on your profile — shown as your initial until you upload a photo. Add or remove a photo, edit your bio, and see your changes reflected instantly.",
            ],
            listItems: [
              "Upload or remove your profile photo anytime",
              "Edit your bio with instant updates",
              "Simple, clean profile layout",
            ],
            images: ["/P6_3pic.png", "/P6_4pic.png"],
          },
        ],
      },
      {
        title: "Logout",
        description: [
          {
            text: [
              "One click safely signs you out and sends you back to the login page.",
            ],
            listItems: [
              "Secure, one-click logout",
            ],
            images: ["/P6_1pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for a fast, dynamic interface and Firebase for authentication and data, styled with Tailwind CSS.",
            ],
            listItems: [
              "React for a dynamic interface",
              "Firebase for authentication and data",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2024-09-15",
    img: ["/P3Pic.png"],
    liveLink: "https://improved-tasker5.vercel.app/",
    shortDescription:
      "Tasker is a simple to-do app — add tasks with a priority and tags, mark favorites, search through them, and get a clear confirmation every time you add, edit, or delete one.",
    longDescription:
      "Tasker is a straightforward task manager for staying on top of your to-do list. Add a task with a title, description, priority, and tags, edit or delete it anytime, star the ones that matter most, and search through everything instantly — with a clear confirmation message every step of the way. Built with React and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/ImprovedTasker5",
    feaTures: [
      {
        title: "Getting Started",
        description: [
          {
            text: [
              "A clean welcome screen introduces the app, and until you add your first task, a simple empty state points you straight to the \"Add Task\" button.",
            ],
            listItems: [
              "Friendly, clear onboarding",
              "Obvious call-to-action to add your first task",
            ],
            images: ["/P3Pic.png", "/P3_1pic.png"],
          },
        ],
      },
      {
        title: "Add a Task",
        description: [
          {
            text: [
              "Adding a task takes a title, description, priority, and tags — Tasker makes sure every field is filled in before it lets you create it, so your task list never has gaps.",
              "The moment a task is created, you get a clear confirmation and it appears right at the top of your list.",
            ],
            listItems: [
              "Simple form for title, description, priority, and tags",
              "Checks every field is filled in before saving",
              "Instant confirmation when a task is added",
            ],
            images: ["/P3_2pic.png", "/P3_3pic.png", "/P3_4pic.png"],
          },
        ],
      },
      {
        title: "Edit a Task",
        description: [
          {
            text: [
              "Click edit on any task and the same simple form opens, pre-filled with its details — update anything and confirm, and the change is reflected instantly with its own confirmation message.",
            ],
            listItems: [
              "Edit any task's details in place",
              "Pre-filled form for fast updates",
              "Clear confirmation when changes are saved",
            ],
            images: ["/P3_5pic.png", "/P3_6pic.png"],
          },
        ],
      },
      {
        title: "Delete Tasks",
        description: [
          {
            text: [
              "Remove a single task with one click, or clear your entire list at once with \"Delete All\" — either way, you get a clear confirmation that it's done.",
            ],
            listItems: [
              "Delete a single task in one click",
              "Clear your whole list at once",
              "Confirmation shown for every deletion",
            ],
            images: ["/P3_7pic.png", "/P3_10pic.png"],
          },
        ],
      },
      {
        title: "Favorites & Search",
        description: [
          {
            text: [
              "Star any task to keep it easy to find, and use the search bar to instantly filter your list by name or tag.",
            ],
            listItems: [
              "Star tasks to mark them as favorites",
              "Instant search by name or tag",
            ],
            images: ["/P3_8pic.png", "/P3_9pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for a fast, responsive interface, styled with Tailwind CSS.",
            ],
            listItems: [
              "React for a fast, dynamic interface",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2024-08-20",
    img: ["/P10pic.png"],
    liveLink: "https://cine-rental-two.vercel.app/",
    shortDescription:
      "CineRental is a movie rental catalog — browse titles, see details and ratings, add them to a cart, and check out, with light and dark mode.",
    longDescription:
      "CineRental lets you browse a catalog of movies, check ratings and details on any title, and add what you want to rent to a cart before checking out. Switch between light and dark mode however you like to browse. Built with React and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/CineRental",
    feaTures: [
      {
        title: "Browse Movies",
        description: [
          {
            text: [
              "Every movie is shown as a card with its name, genre, and rating, plus a quick \"Add to Cart\" button — browse the full catalog in a clean, responsive grid.",
            ],
            listItems: [
              "Browsable grid of every movie",
              "Genre and rating shown at a glance",
              "Add to cart in one click",
            ],
            images: ["/P10pic.png"],
          },
        ],
      },
      {
        title: "Cart",
        description: [
          {
            text: [
              "Adding a movie gives you a clear confirmation, and trying to add the same one twice lets you know it's already in your cart — so you always know exactly what you've picked.",
            ],
            listItems: [
              "Clear confirmation when you add a movie",
              "Warns you if it's already in your cart",
            ],
            images: ["/P10_1pic.png", "/P10_2pic.png"],
          },
        ],
      },
      {
        title: "Light & Dark Mode",
        description: [
          {
            text: [
              "Switch between light and dark themes anytime, with consistent styling across every page.",
            ],
            listItems: [
              "Light and dark mode",
              "Consistent look across the whole app",
            ],
            images: ["/P10_3pic.png"],
          },
        ],
      },
      {
        title: "Movie Details",
        description: [
          {
            text: [
              "Click any movie to see a full-size view with its complete details, rating, and a button to add it straight to your cart.",
            ],
            listItems: [
              "Full-size detail view for any movie",
              "Add to cart straight from the detail view",
            ],
            images: ["/P10_4pic.png"],
          },
        ],
      },
      {
        title: "Cart Summary",
        description: [
          {
            text: [
              "Open your cart to see everything you've added, remove anything you've changed your mind about, and check out when you're ready.",
            ],
            listItems: [
              "Full cart summary with checkout",
              "Remove any movie from your cart",
            ],
            images: ["/P10_5pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for a fast, dynamic interface, styled with Tailwind CSS.",
            ],
            listItems: [
              "React for a dynamic interface",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2024-08-10",
    img: ["/P5pic.png"],
    liveLink: "https://shop-center-black.vercel.app/",
    shortDescription:
      "Shop Center is a general online storefront — browse products by category, see full details on anything, and add it to your cart.",
    longDescription:
      "Shop Center is an e-commerce storefront where you browse a full product catalog, drill down into any category, and check full details — price, rating, and discount — before adding something to your cart. Built with Next.js, React, and Tailwind CSS.",
    techStack: [
      ["Next.js", "/NextJs.png"],
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/ShopCenter",
    feaTures: [
      {
        title: "Browse Products",
        description: [
          {
            text: [
              "A welcoming homepage leads into a full product catalog — every item shown with its photo, name, category, and price, ready to click into.",
            ],
            listItems: [
              "Browsable catalog of every product",
              "Name, category, and price shown at a glance",
              "Click any product for full details",
            ],
            images: ["/P5pic.png", "/P5_1pic.png"],
          },
        ],
      },
      {
        title: "Product Details",
        description: [
          {
            text: [
              "See any product up close — a larger image, its rating, any discount, and the full price, with an \"Add to Cart\" button right there.",
            ],
            listItems: [
              "Full product details with rating and discount",
              "Add to cart in one click",
            ],
            images: ["/P5_2pic.png"],
          },
        ],
      },
      {
        title: "Browse by Category",
        description: [
          {
            text: [
              "Click any category to see every product in it, in the same clean layout as the main catalog.",
            ],
            listItems: [
              "Browse products filtered by category",
              "Same familiar layout throughout",
            ],
            images: ["/P5_3pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with Next.js for fast, dynamic pages, styled with Tailwind CSS.",
            ],
            listItems: [
              "Next.js for fast, dynamic pages",
              "Tailwind CSS for a responsive design",
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
    type: "hobby-project",
    date: "2024-07-15",
    img: ["/P2pic.png"],
    liveLink: "https://lws-react-js-assignment-2.vercel.app/",
    shortDescription:
      "Book Finder helps you discover your next read — browse a full book collection, search by title or keyword, and sort however suits you.",
    longDescription:
      "Book Finder makes it easy to browse and discover books — search by title or keyword and sort the results alphabetically or by publication year to find exactly what you're after. Built with React and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/LWS-ReactJS-Assignment-2",
    feaTures: [
      {
        title: "Browse Books",
        description: [
          {
            text: [
              "The homepage shows a full, browsable collection of books, laid out cleanly so you can scan through and find something worth reading.",
            ],
            listItems: [
              "Clean, browsable collection of books",
              "Quick overview of each title",
            ],
            images: ["/P2pic.png"],
          },
        ],
      },
      {
        title: "Search",
        description: [
          {
            text: [
              "Type a title or keyword and the list filters instantly, so finding a specific book takes seconds.",
            ],
            listItems: [
              "Instant search as you type",
              "Find any book by title or keyword",
            ],
            images: ["/P2_1pic.png"],
          },
        ],
      },
      {
        title: "Sorting",
        description: [
          {
            text: [
              "Sort the list alphabetically or by publication year, in whichever order helps you browse best.",
            ],
            listItems: [
              "Sort alphabetically, A-Z or Z-A",
              "Sort by publication year, oldest or newest first",
            ],
            images: ["/P2_2pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for a fast, responsive interface, styled with Tailwind CSS.",
            ],
            listItems: [
              "React for a dynamic interface",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2024-06-20",
    img: ["/P11pic.png"],
    liveLink: "https://photo-feed-omega.vercel.app/",
    shortDescription:
      "Photo Feed is a nature photo gallery — browse a curated collection, open any photo for a closer look, and see who uploaded it and how it's performing.",
    longDescription:
      "Photo Feed is a gallery for browsing nature photography. Scroll through a curated collection on the homepage, then open any photo for a full-size view with the uploader's name, its love and share counts, and an option to save it. Built with React and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/PhotoFeed",
    feaTures: [
      {
        title: "Browse the Gallery",
        description: [
          {
            text: [
              "A clean, curated gallery of nature photos — click any thumbnail to open it up for a closer look.",
            ],
            listItems: [
              "Curated gallery of nature photography",
              "Clean, browsable grid layout",
            ],
            images: ["/P11pic.png"],
          },
        ],
      },
      {
        title: "Full Photo View",
        description: [
          {
            text: [
              "Open any photo to see it full-size, along with who uploaded it, how many loves and shares it has, and an option to save it to your device.",
            ],
            listItems: [
              "Full-size photo view",
              "Uploader name, loves, and shares shown",
              "Save any photo to your device",
            ],
            images: ["/P11_1pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for a fast, dynamic interface, styled with Tailwind CSS.",
            ],
            listItems: [
              "React for a dynamic interface",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2024-06-10",
    img: ["/P4pic.png"],
    liveLink: "https://news-feed-swart-nine.vercel.app/",
    shortDescription:
      "News Feed pulls in real-time news from a live API and displays it in a clean, easy-to-read feed.",
    longDescription:
      "News Feed is a simple app that fetches real-time news from a live API and displays it in a clean, readable feed the moment you open it. Built with React and Tailwind CSS.",
    techStack: [
      ["React", "/React.png"],
      ["Tailwind CSS", "/TailwindCss.png"],
      ["JavaScript", "/js.png"],
    ],
    gitLink: "https://github.com/Lawrence-Amlan-Gomes/NewsFeed",
    feaTures: [
      {
        title: "Live News Feed",
        description: [
          {
            text: [
              "Open the app and it fetches the latest news right away, laying it out in a clean, easy-to-scan feed — with a friendly loading message while it fetches.",
            ],
            listItems: [
              "Real-time news pulled from a live API",
              "Clean, readable feed layout",
              "Friendly loading state while news fetches",
            ],
            images: ["/P4pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React for dynamic rendering, styled with Tailwind CSS.",
            ],
            listItems: [
              "React for dynamic rendering",
              "Tailwind CSS for consistent styling",
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
    type: "hobby-project",
    date: "2024-05-15",
    img: ["/P1pic.png"],
    liveLink: "https://react-projects-ruddy-seven.vercel.app",
    shortDescription:
      "A small showcase of standalone React projects I built while learning — a theme switcher, a Tic-Tac-Toe game, a stopwatch, and a to-do list.",
    longDescription:
      "Short React Projects is a collection of small, self-contained apps built while sharpening my React fundamentals — a light/dark theme switcher, a playable Tic-Tac-Toe game, a working stopwatch, and a simple to-do list manager, each its own little demo of a core React pattern. Built with React.",
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
              "A simple welcome page introduces the collection and links straight into each project.",
            ],
            listItems: [
              "Clean, simple entry point",
              "Quick access to every project",
            ],
            images: ["/P1pic.png"],
          },
        ],
      },
      {
        title: "Theme Changer",
        description: [
          {
            text: [
              "Switch between light and dark mode with one click — a simple sun/moon toggle that instantly flips the whole page's look.",
            ],
            listItems: [
              "One-click light/dark toggle",
              "Simple sun/moon icon switch",
            ],
            images: ["/P1_1pic.png"],
          },
        ],
      },
      {
        title: "Tic-Tac-Toe Game",
        description: [
          {
            text: [
              "A fully playable Tic-Tac-Toe game — take turns as X and O, and it automatically detects and announces the winner.",
            ],
            listItems: [
              "Fully playable two-player game",
              "Automatic win detection",
              "Restart anytime",
            ],
            images: ["/P1_2pic.png"],
          },
        ],
      },
      {
        title: "Stopwatch",
        description: [
          {
            text: [
              "A simple stopwatch you can start, pause, and reset — accurate down to the millisecond.",
            ],
            listItems: [
              "Start, pause, and reset controls",
              "Accurate to the millisecond",
            ],
            images: ["/P1_3pic.png"],
          },
        ],
      },
      {
        title: "Todo List Manager",
        description: [
          {
            text: [
              "A basic to-do list — add tasks as you think of them, and remove them once they're done.",
            ],
            listItems: [
              "Add tasks instantly",
              "Remove tasks when they're done",
            ],
            images: ["/P1_4pic.png"],
          },
        ],
      },
      {
        title: "Built With",
        description: [
          {
            text: [
              "Built with React, using modular CSS to keep each project's styling clean and self-contained.",
            ],
            listItems: [
              "React for every project",
              "Modular CSS for clean, scoped styling",
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
