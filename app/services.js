// Productized services offered to clients/businesses — the single source of
// truth rendered on the home page (components/LandingServices.jsx) and fed
// to the AI chatbot (app/server.js). Update here only; both pick it up
// automatically.
const services = [
  {
    title: "Custom Web / Mobile App",
    implementation:
      "A custom full-stack web or cross-platform mobile app built to showcase your products, services, or SaaS offering.",
    outcome:
      "A professional, modern digital presence — without the $10k+ price tag of a local dev shop.",
  },
  {
    title: "Embedded AI Chatbot",
    implementation:
      "An AI assistant grounded in your business's FAQs, product details, and workflows, embedded on your site.",
    outcome:
      "Answer common questions and help visitors take the next step at any hour.",
    proof: "You're talking to one right now — see the chat bubble in the corner.",
  },
  {
    title: "Booking & Scheduling Integration",
    implementation:
      "Connect an AI assistant or website flow to your calendar or booking system.",
    outcome:
      "Let prospects choose a slot without back-and-forth email.",
    proof: "This site's Contact page links to a live booking calendar.",
  },
  {
    title: "AI Workflow Automation",
    implementation:
      "AI-assisted inbound and outbound workflows for lead qualification, follow-ups, and handoffs between business tools.",
    outcome:
      "Reduce repetitive work while keeping people in control of customer communication.",
  },
];

export default services;
