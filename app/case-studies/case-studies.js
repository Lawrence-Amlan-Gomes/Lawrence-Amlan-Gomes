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
    projectUrlTitle: "library-management",
    client: "Community Library (Dhaka)",
    industry: "Education / Community Services",
    timeline: "2025, ~4 weeks",
    heroImg: "/P19pic.png",
    summary:
      "A small community library in Dhaka was tracking every borrow, return, and fine by hand. It needed a real digital system members and the librarian could both rely on.",
    challenge:
      "Manual tracking meant no reliable record of who had which books, no consistent way to calculate late fines, and no easy way for members to see what was available before showing up in person. The client needed something simple enough to run himself day to day, without ongoing developer support.",
    approach: [
      {
        title: "Member-facing borrowing system",
        description:
          "Members create an account, browse the collection, and borrow up to 3 books at a time — with a 100 TK/day late fine calculated automatically, removing manual fine tracking entirely.",
      },
      {
        title: "A simple admin dashboard for one person to run",
        description:
          "The client manages the full book collection and member list himself from a straightforward dashboard — no technical background required, no developer needed for day-to-day operation.",
      },
      {
        title: "A stack built to stay maintainable",
        description:
          "Next.js, React, and MongoDB — chosen for a clean, reliable system a small library could depend on long-term without ongoing infrastructure overhead.",
      },
    ],
    results: [
      "Replaced fully manual, error-prone tracking with automatic fine calculation and a real borrowing record.",
      "The librarian runs the system independently — no code changes needed to manage books or members.",
      "Live in production, used by real library members for browsing and borrowing.",
    ],
  },
];

export default caseStudies;

export function getCaseStudy(urlTitle) {
  return caseStudies.find((c) => c.projectUrlTitle === urlTitle);
}
