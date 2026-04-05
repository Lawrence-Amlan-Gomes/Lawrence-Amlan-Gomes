const blogs = [
  {
    id: 1,
    title: "End-to-End Deployment: Vercel, Netlify, and Self-Hosted Coolify on VPS",
    urlTitle: "end-to-end-deployment-vercel-netlify-coolify",
    img: "/B1_0_deploymentPipelineHero.png",
    shortDescription:
      "A practical guide to deploying full-stack Next.js applications across Vercel, Netlify, and a self-hosted Coolify instance on Hostinger VPS — including custom domains, environment variables, and GitHub-based CI/CD pipelines.",
    longDescription:
      "Shipping a web application doesn't end when the code is written — deployment is where products become real. In this post, I walk through the deployment workflows I've built across multiple production projects, covering three distinct hosting environments: Vercel for frontend-heavy Next.js apps, Netlify for static and JAMstack deployments, and a self-hosted Coolify instance running on a Hostinger VPS for projects requiring more infrastructure control. I'll cover how to configure GitHub-based CI/CD pipelines that trigger automatic deployments on push, how to manage environment variables securely across environments, and how to set up custom domains with SSL. I'll also compare the tradeoffs between managed platforms like Vercel and self-hosted solutions like Coolify — when each makes sense, and how to decide. By the end, you'll have a clear, repeatable deployment strategy for your Next.js full-stack applications.",
    feaTures: [
      {
        title: "Deploying Next.js Apps on Vercel with GitHub CI/CD",
        description: [
          {
            text: [
              "Vercel is the most seamless deployment target for Next.js applications, offering zero-config deployments, automatic preview environments for every pull request, and global CDN distribution out of the box. Connecting a GitHub repository takes under two minutes, and every push to main triggers a production deployment automatically — no manual steps required.",
              "The most critical configuration step is environment variable management. Vercel's dashboard separates variables by environment (development, preview, production), which prevents accidental exposure of production secrets during testing. For API keys, database URIs, and payment credentials like Paddle's API key, always use Vercel's encrypted environment variable store rather than committing secrets to the repository.",
            ],
            listItems: [
              "Zero-config Next.js deployment with automatic builds on git push",
              "Preview deployments for every pull request for safe testing",
              "Encrypted environment variable management per environment",
              "Custom domain configuration with automatic SSL via Let's Encrypt",
            ],
            images: [
              "/B1_1_vercelGithubIntegrationDashboard.png",
              "/B1_2_vercelEnvironmentVariablesConfig.png",
            ],
          },
        ],
      },
      {
        title: "Self-Hosting with Coolify on a Hostinger VPS",
        description: [
          {
            text: [
              "For projects requiring more infrastructure control — such as running persistent background services, managing multiple apps under one server, or reducing platform costs at scale — self-hosting with Coolify on a Hostinger VPS is a powerful alternative to managed platforms. Coolify is an open-source PaaS that gives you a Heroku-like deployment experience on your own server, with a clean dashboard, automatic SSL, reverse proxy configuration, and GitHub integration built in.",
              "Setting up Coolify starts with provisioning a VPS on Hostinger, SSHing in, and running the Coolify installation script. Once running, you connect your GitHub account, point Coolify at a repository, and configure your build command and environment variables — the same workflow as Vercel, but fully under your control. Custom domains are configured by updating your DNS A record to point to your VPS IP, and Coolify handles the SSL certificate via Let's Encrypt automatically.",
            ],
            listItems: [
              "Full infrastructure control with no platform vendor lock-in",
              "Coolify dashboard for managing multiple apps on one VPS",
              "Automatic SSL and reverse proxy via built-in Caddy/Nginx",
              "GitHub-triggered deployments with build logs and rollback support",
            ],
            images: [
              "/B1_3_coolifyDashboardAppOverview.png",
              "/B1_4_hostingerVpsSSHSetupTerminal.png",
            ],
          },
        ],
      },
      {
        title: "Custom Domains, SSL, and Environment Management Across Platforms",
        description: [
          {
            text: [
              "Regardless of which platform you deploy to, custom domain configuration follows the same core pattern: purchase a domain, update your DNS records to point to your hosting provider, and let the platform handle SSL. On Vercel and Netlify, you add the domain in the dashboard and they handle the rest. On Coolify, you set the domain in the app settings and it provisions a Let's Encrypt certificate automatically within minutes.",
              "Environment variable discipline is the most commonly overlooked part of a production deployment. I use a consistent pattern across all projects: a `.env.local` file for local development (never committed to Git), and platform-specific environment variable dashboards for staging and production. For sensitive values like Paddle webhook secrets or MongoDB URIs, I rotate credentials immediately if a repository is ever accidentally made public — a step many developers skip.",
            ],
            listItems: [
              "DNS A and CNAME record configuration for custom domains",
              "Automatic SSL provisioning across Vercel, Netlify, and Coolify",
              "Environment variable discipline: local vs staging vs production",
              "Credential rotation best practices for production security",
            ],
            images: [
              "/B1_5_dnsConfigurationDiagramCustomDomain.png",
              "/B1_6_envVariableManagementStrategyDiagram.png",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Integrating Paddle for Subscriptions and One-Time Payments in Next.js",
    urlTitle: "paddle-payments-subscriptions-nextjs",
    img: "/B2_0_paddlePaymentIntegrationHero.png",
    shortDescription:
      "A step-by-step breakdown of integrating Paddle Billing into a Next.js application — covering subscription flows, one-time payments, webhooks, and customer portal setup.",
    longDescription:
      "Payment integration is one of the most technically demanding parts of building a SaaS product, and getting it wrong has real business consequences. In this post, I walk through how I integrated Paddle Billing into production Next.js applications — covering both subscription and one-time payment flows. Paddle acts as a Merchant of Record, which means it handles VAT, sales tax, and compliance globally — a significant advantage for indie developers and small teams shipping SaaS products internationally. I'll cover how to set up Paddle's client-side overlay checkout, handle server-side webhook events to update subscription state in MongoDB, implement customer portal access for plan management, and test the full payment flow in Paddle's sandbox environment. This is a practical, production-focused guide drawn from real integrations, not toy examples.",
    feaTures: [
      {
        title: "Setting Up Paddle Billing and Configuring Products",
        description: [
          {
            text: [
              "Before writing a single line of code, Paddle requires you to configure your products and prices in the Paddle dashboard. For subscription products, you define a billing interval (monthly or annual), a price, and optionally a trial period. For one-time products, you set a fixed price. Each product gets a price ID that you'll reference in your frontend checkout code — similar to Stripe's price IDs if you've used that before.",
              "Paddle operates in two modes: sandbox and production. Always develop and test against the sandbox environment first, using Paddle's test card numbers to simulate successful payments, failed charges, and subscription cancellations. Switching to production requires submitting your business details for Paddle's approval — factor this into your launch timeline, as it can take a few days.",
            ],
            listItems: [
              "Configuring subscription and one-time products in the Paddle dashboard",
              "Understanding price IDs and how they map to checkout flows",
              "Sandbox vs production environments and how to switch between them",
              "Paddle as Merchant of Record: tax and compliance handled automatically",
            ],
            images: [
              "/B2_1_paddleDashboardProductConfiguration.png",
              "/B2_2_paddleSandboxTestCardCheckout.png",
            ],
          },
        ],
      },
      {
        title: "Implementing the Checkout Flow in Next.js",
        description: [
          {
            text: [
              "Paddle's client-side checkout is implemented using their JavaScript SDK, which you load via a script tag or npm package. In a Next.js app, I initialize the Paddle SDK in a client component using a useEffect hook, passing the sandbox or production client token from environment variables. The checkout is triggered by calling `Paddle.Checkout.open()` with the price ID and any prefilled customer data — this opens Paddle's hosted overlay directly on your page without a redirect.",
              "For authenticated users, passing the customer's email to the checkout prefills the form and associates the transaction with their account in Paddle. After a successful payment, Paddle redirects to a success URL you define — but critically, you should never rely on the redirect alone to update your database. Always use webhooks for authoritative payment confirmation, as redirects can be skipped or manipulated.",
            ],
            listItems: [
              "Initializing the Paddle JS SDK in a Next.js client component",
              "Triggering overlay checkout with price ID and customer data",
              "Handling success and cancel redirect URLs",
              "Why webhooks — not redirects — should update your database",
            ],
            images: [
              "/B2_3_paddleCheckoutOverlayNextjsComponent.png",
              "/B2_4_paddleCheckoutSuccessRedirectFlow.png",
            ],
          },
        ],
      },
      {
        title: "Handling Webhooks and Syncing Subscription State to MongoDB",
        description: [
          {
            text: [
              "Webhooks are the backbone of any reliable payment integration. Paddle sends webhook events to a URL you configure in the dashboard — events like `subscription.created`, `subscription.updated`, `subscription.canceled`, and `transaction.completed`. In Next.js, I handle these in an App Router route handler (`/api/webhooks/paddle/route.ts`), verifying the webhook signature using Paddle's secret key before processing any event.",
              "On receiving a `subscription.created` event, I extract the customer ID, subscription ID, plan, and status from the payload and write them to MongoDB against the user's record. This is how the app knows whether a user is on a free or paid plan. For cancellations, Paddle sends a `subscription.canceled` event when the billing period ends — I update the user's subscription status to `canceled` and restrict access to paid features accordingly. Keeping this state accurate is critical for a trustworthy SaaS product.",
            ],
            listItems: [
              "Configuring webhook endpoints in the Paddle dashboard",
              "Verifying webhook signatures in a Next.js route handler",
              "Syncing subscription status to MongoDB on key lifecycle events",
              "Handling cancellations, upgrades, and payment failures gracefully",
            ],
            images: [
              "/B2_5_paddleWebhookRouteHandlerCodeDiagram.png",
              "/B2_6_subscriptionStateMongodbSchemaDesign.png",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Building AI-Powered Features in Web Apps Using Third-Party APIs",
    urlTitle: "ai-powered-features-third-party-apis-nextjs",
    img: "/B3_0_aiPoweredFeaturesHero.png",
    shortDescription:
      "A practical guide to integrating AI capabilities into full-stack web applications using third-party APIs — covering prompt design, streaming responses, rate limiting, and cost management.",
    longDescription:
      "Adding AI-powered features to a web application has become one of the fastest ways to deliver meaningful value to users — but the implementation details matter far more than the API call itself. In this post, I walk through how I've integrated AI capabilities across multiple production projects using third-party APIs, covering the full picture from prompt engineering and streaming UX to error handling, rate limiting, and keeping costs under control. I'll use Next.js App Router as the runtime environment, with server-side route handlers managing API calls to prevent key exposure on the client. Whether you're building a content generation tool, an intelligent search feature, a document summarizer, or a context-aware assistant, the patterns covered here apply broadly across providers. This is a production-focused guide — not a 'hello world' AI tutorial.",
    feaTures: [
      {
        title: "Architecture: Keeping AI API Calls Server-Side in Next.js",
        description: [
          {
            text: [
              "The most important architectural decision when integrating a third-party AI API is keeping your API key server-side. Never call an AI provider directly from client-side JavaScript — your API key will be exposed in the browser's network tab and can be extracted and abused. In Next.js, the correct pattern is to create a route handler in the App Router (`/api/ai/route.ts`) that accepts a request from your frontend, validates the user's session, calls the AI API server-side using your secret key, and streams or returns the response.",
              "This server-side intermediary also gives you a natural place to implement rate limiting per user, log requests for debugging and cost tracking, sanitize user input before it reaches the AI provider, and enforce content policies. I use a simple Redis-based rate limiter in this layer — each user gets a fixed number of AI requests per hour, tracked by their session ID.",
            ],
            listItems: [
              "Route handler pattern for secure server-side AI API calls",
              "Session validation before forwarding requests to the AI provider",
              "Redis-based per-user rate limiting to control costs and abuse",
              "Input sanitization and content policy enforcement at the API layer",
            ],
            images: [
              "/B3_1_aiApiServerSideArchitectureDiagram.png",
              "/B3_2_nextjsRouteHandlerAiRequestFlow.png",
            ],
          },
        ],
      },
      {
        title: "Streaming Responses for a Better User Experience",
        description: [
          {
            text: [
              "One of the biggest UX improvements you can make when integrating AI features is streaming the response rather than waiting for the full completion before rendering. Without streaming, users stare at a loading spinner for several seconds before seeing anything — with streaming, text appears incrementally as it's generated, which feels dramatically more responsive and keeps users engaged.",
              "In Next.js App Router, streaming AI responses is straightforward using the Web Streams API. The route handler returns a `Response` with a `ReadableStream` body, and on the client, I consume it using `fetch` with a reader on `response.body`. I update a state variable character by character as chunks arrive, rendering the output progressively. This pattern works with any AI provider that supports streaming completions.",
            ],
            listItems: [
              "Why streaming improves perceived performance for AI features",
              "Returning a ReadableStream from a Next.js App Router route handler",
              "Consuming streamed chunks on the client with fetch and a stream reader",
              "Rendering progressive output with React state updates",
            ],
            images: [
              "/B3_3_streamingResponseUXComparisonDemo.png",
              "/B3_4_readableStreamNextjsRouteHandlerCode.png",
            ],
          },
        ],
      },
      {
        title: "Prompt Design, Cost Management, and Production Considerations",
        description: [
          {
            text: [
              "The quality of your AI feature is determined largely by how well you design the prompt. A good system prompt constrains the model's behavior, defines its role, specifies the output format, and handles edge cases like empty input or off-topic requests. I always develop prompts iteratively — starting with a rough version, testing it against a range of real user inputs, and refining based on failure cases. Keeping system prompts in a constants file rather than inline in route handlers makes them easier to version and update.",
              "Cost management is non-negotiable in production. AI API costs scale directly with token usage, so I implement a few layers of control: truncating user input to a max character count before sending, caching responses for identical or near-identical prompts using Redis with a short TTL, and monitoring usage via the provider's dashboard with budget alerts configured. For features used heavily, even small prompt optimizations — like removing redundant instructions — can reduce costs meaningfully at scale.",
            ],
            listItems: [
              "System prompt design patterns for consistent, reliable outputs",
              "Iterative prompt development and testing against real user inputs",
              "Input truncation and token budget management per request",
              "Response caching with Redis to reduce redundant API calls and costs",
            ],
            images: [
              "/B3_5_promptDesignSystemPromptStructureDiagram.png",
              "/B3_6_redisCachingAiResponseCostReductionDiagram.png",
            ],
          },
        ],
      },
    ],
  },
];

export default blogs;