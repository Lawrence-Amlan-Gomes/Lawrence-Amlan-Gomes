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
      "An AI chatbot trained on your business's own data, FAQs, and product catalog, embedded right on your site.",
    outcome:
      "24/7 instant customer support that handles complex product questions automatically.",
    proof: "You're talking to one right now — see the chat bubble in the corner.",
  },
  {
    title: "Automated Meeting Scheduler",
    implementation:
      "Direct integration between your AI bot and Google Calendar or Calendly.",
    outcome:
      "Turns chatting prospects into booked appointments — no back-and-forth emails.",
    proof: "This site books meetings the same way — try it on the Contact page.",
  },
  {
    title: "Lead Magnet & Email Capture",
    implementation:
      "Email capture built right into the chat flow, synced with your CRM or database.",
    outcome:
      "Turns everyday website traffic into a growing email list for future marketing and sales.",
  },
];

export default services;
