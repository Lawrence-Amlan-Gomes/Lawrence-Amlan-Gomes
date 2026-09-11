// Case studies for client work — one entry per project with type: "clients-project"
// in app/projects/projects.js, linked back to it by urlTitle. Kept as a separate
// static file (not fields on projects.js) since case-study content is a distinct,
// longer-form narrative (challenge/approach/results) than a project listing needs.

const caseStudies = [
  {
    projectUrlTitle: "facelees",
    client: "Facelees",
    industry: "Local Retail / E-commerce",
    timeline: "2026, ~5 weeks",
    heroImg: "/P24.png",
    summary:
      "A local Bangladeshi retailer needed a real online storefront — one customers could browse and order from without creating an account, and the owner could run entirely on his own.",
    challenge:
      "The client was selling entirely offline and through informal social media posts, with no structured way for customers to browse the full catalog, and no way for him to manage products, banners, or incoming orders without going through a developer for every change. Cash-on-delivery is the norm for this market, so the checkout couldn't assume card payments or require an account — any friction at that step would cost him sales.",
    approach: [
      {
        title: "Zero-friction storefront",
        description:
          "Built the shop as a fully public catalog with search, filtering, and cart — no sign-up required to browse or buy. Checkout collects only what's needed for cash-on-delivery: name, address, and a validated local phone number.",
      },
      {
        title: "A dashboard the owner actually runs himself",
        description:
          "Gave the client a private admin area — locked to his own approved account — to add and edit products with photos, control the homepage's rotating banners, and track every order from placed through delivered, all without touching code.",
      },
      {
        title: "Built for speed and reliability at the edge",
        description:
          "Next.js, TypeScript, and MongoDB on the backend, served through Cloudflare for fast load times and protection against abuse, since the storefront needed to hold up under real customer traffic from day one.",
      },
    ],
    results: [
      "The client now manages the entire storefront — products, banners, and orders — without any developer involvement.",
      "Customers can go from browsing to a placed cash-on-delivery order in a few clicks, with no account required.",
      "Live in production at facelees.com, handling the client's real order volume.",
    ],
  },
  {
    projectUrlTitle: "cloud-flow-library",
    client: "Cloud Flow Library (Dhaka)",
    industry: "Education / Community Services",
    timeline: "2026, rebuilt September 2026",
    heroImg: "/P19pic.png",
    summary:
      "The same Dhaka library client I'd built a book-borrowing system for came back with a different need: a way for visitors to browse the catalog and pay to reserve a seat in the physical reading room online, instead of showing up and hoping a spot was free.",
    challenge:
      "The original borrowing-tracking system didn't fit what the client actually needed going forward — the real bottleneck was the reading room itself, with no way for a visitor to check seat availability or reserve one in advance, and no way to collect the seat fee without doing it in person. The rebuild had to drop the old borrowing model entirely rather than bolt a booking feature on top of it.",
    approach: [
      {
        title: "A generated but fully browsable catalog",
        description:
          "1,200 books, searchable by title or author and filterable by category, genre, and availability — open to any visitor, no account required.",
      },
      {
        title: "Seat booking that respects real-world constraints",
        description:
          "A calendar that only opens on the library's real days and hours (Saturday–Thursday, 9AM–9PM), 1-hour slots capped at 10 seats each, a 100 TK fee, and payment through bKash restricted to visitors inside Bangladesh.",
      },
      {
        title: "An AI assistant that can finish the booking itself",
        description:
          "A floating Gemini-powered chat widget, Flo, answers booking questions and — once it has a name, email, phone, date, and time from the conversation — hands back a ready-to-pay booking link, no form-hunting required.",
      },
      {
        title: "Timezone bugs fixed at the root, not patched at the surface",
        description:
          "Caught a real bug during the rebuild where date logic followed the server's own timezone, so \"Saturday\" could silently resolve to Friday (a closed day) depending on where it ran. Fixed by anchoring every date check to Asia/Dhaka and enforcing the closed-day/hours rule server-side on every path into a booking — the calendar UI, the chatbot's generated link, and a hand-typed URL alike — not just in the client-side calendar component.",
      },
    ],
    results: [
      "Replaced the old book-borrowing system entirely with a paid seat-booking model built around how the library actually operates day to day.",
      "Visitors can browse 1,200 books and book a reading-room seat in under a minute, with no account required.",
      "The AI assistant can carry a visitor from a plain-language question straight through to a ready-to-pay booking link.",
    ],
  },
];

export default caseStudies;

export function getCaseStudy(urlTitle) {
  return caseStudies.find((c) => c.projectUrlTitle === urlTitle);
}
