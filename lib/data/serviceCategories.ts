// ─────────────────────────────────────────────────────────────────────────────
// Service Categories — single source of truth for all service content.
//
// To add / edit a service:
//   1. Find the right category in `serviceCategories`
//   2. Edit the item inside `items[]`
//   3. All pages that reference this data update automatically
//
// image            → Unsplash URL used on both the category page and detail page
// deliverables     → shown as pills on category page; as full rows on detail page
// process          → 4 steps shown on the individual service detail page
// ─────────────────────────────────────────────────────────────────────────────

export type Deliverable = {
  name: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ServiceItem = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  deliverables: Deliverable[];
  image: string;
  process: ProcessStep[];
};

export type FAQ = { q: string; a: string };

export type ServiceCategory = {
  slug: string;
  title: string;
  icon: string;
  color: string;
  accent: string;
  tagline: string;
  description: string;
  image: string;
  items: ServiceItem[];
  faqs: FAQ[];
};

// ─────────────────────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [

  // ── DEVELOPMENT ────────────────────────────────────────────────────────────
  {
    slug: "development",
    title: "Development",
    icon: "◈",
    color: "#0d1520",
    accent: "#efc336",
    tagline: "Code that ships. Products that scale.",
    description:
      "From marketing websites to full-stack web apps — we build fast, clean, and production-ready. Every line of code is written with performance and maintainability as defaults, not afterthoughts.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",
    items: [
      {
        slug: "website-development",
        label: "Website Development",
        tagline: "Fast, modern websites built to convert.",
        description:
          "We design and build marketing sites, landing pages, and corporate websites using Next.js and modern web standards. Pixel-perfect, lightning-fast, and optimised for search from day one.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
        deliverables: [
          {
            name: "Design → Dev handoff",
            description: "Clean, organised Figma files are translated directly into production code — no re-interpretation, no quality loss between design and build. Every spacing decision, typeface, and colour token is preserved exactly as designed. What your designer created is exactly what your users see.",
          },
          {
            name: "Responsive layout",
            description: "Fluid, pixel-perfect layouts that work flawlessly on every screen size — from a 375px mobile to a 2560px wide desktop. We test across real devices and browsers, not just simulated viewports. Your site looks intentional and polished everywhere your audience finds it.",
          },
          {
            name: "SEO setup",
            description: "Technical SEO foundations are built into the codebase from day one — semantic HTML, meta tags, Open Graph, structured data, XML sitemap, and full crawlability. We do not bolt on SEO as an afterthought. Search engines can find, understand, and rank your content from launch day.",
          },
          {
            name: "CMS integration",
            description: "Your team can update content, add pages, and publish posts without touching code or asking a developer. We integrate the CMS that fits your workflow — Sanity, Contentful, or a custom headless setup. Non-technical users can manage the site confidently from day one.",
          },
          {
            name: "Performance audit",
            description: "Every site ships with a full Core Web Vitals audit — LCP, CLS, and FID measured against real-world conditions. Images are optimised, fonts are loaded efficiently, and JavaScript is kept lean. Fast sites convert better and rank higher.",
          },
        ],
        process: [
          { title: "Discovery & Brief", description: "Goals, audience, and competitive landscape mapped before a pixel is touched. We define the brief together so there are no surprises." },
          { title: "Design & Prototype", description: "Wireframes and high-fidelity mockups reviewed and signed off together before any code is written." },
          { title: "Development & Build", description: "Built with Next.js, optimised for Core Web Vitals, SEO, and accessibility from the first commit." },
          { title: "Launch & Handover", description: "Deployed, cross-device tested, and handed over with CMS access, documentation, and optional ongoing support." },
        ],
      },
      {
        slug: "mobile-app-development",
        label: "Mobile App Development",
        tagline: "Native-quality apps on every platform.",
        description:
          "Cross-platform mobile apps built with React Native that feel native on iOS and Android. From MVP to full product — we scope, design, and ship.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
        deliverables: [
          {
            name: "iOS & Android",
            description: "One codebase that runs natively on both platforms — no compromises on look, feel, or performance. Users on iPhone and Android get the same high-quality experience. You maintain one product, not two separate codebases.",
          },
          {
            name: "React Native",
            description: "Cross-platform development using React Native, with native modules added where platform-specific performance or hardware access is required. The result is a fast, responsive app that behaves like it was built for the platform. Your investment goes further without sacrificing quality.",
          },
          {
            name: "API integration",
            description: "Seamless connection to your backend, third-party APIs, and external data sources — designed for reliability, security, and scale. We handle authentication, error states, caching, and offline behaviour properly from the start. Your app works as expected under real-world conditions.",
          },
          {
            name: "App Store submission",
            description: "End-to-end handling of App Store and Google Play submission — metadata, screenshots, app previews, compliance review, and responses to reviewer feedback. We have navigated the review process many times and know how to get apps approved without unnecessary delays.",
          },
          {
            name: "Analytics setup",
            description: "User behaviour tracking configured from launch so you understand exactly how people use the app, where they drop off, and what to build next. We integrate the right tools for your team — Firebase, Mixpanel, or Amplitude — and define the events that matter. Data-informed decisions start from day one.",
          },
        ],
        process: [
          { title: "Scoping & Architecture", description: "Screens, user flows, and technical architecture defined upfront to prevent scope creep and costly rework later." },
          { title: "UI Design", description: "Platform-native interfaces designed for iOS and Android conventions — prototyped in Figma and validated before build." },
          { title: "Development & QA", description: "React Native build with continuous manual and automated testing on real devices throughout the sprint cycle." },
          { title: "App Store Submission", description: "Metadata, screenshots, compliance checks, and submission for both App Store and Google Play handled end-to-end." },
        ],
      },
      {
        slug: "ecommerce-development",
        label: "Ecommerce Development",
        tagline: "Stores built to sell, not just look good.",
        description:
          "Custom ecommerce experiences on Shopify, Next.js Commerce, or headless setups. Optimised checkout flows, conversion-focused UX, and backend integrations that actually work.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
        deliverables: [
          {
            name: "Shopify / Headless",
            description: "We select the right platform for your catalogue size, team capabilities, and growth goals — custom Shopify theme, Shopify headless, or a fully custom build with a CMS. The platform choice shapes everything that comes after, so we get it right before any development starts. You get a store built to scale, not just to launch.",
          },
          {
            name: "Product catalogue",
            description: "Structured product data with variants, filters, collections, and search built to scale as your inventory grows. Customers can find what they are looking for in seconds — on desktop and mobile. A well-structured catalogue reduces support queries and increases purchase confidence.",
          },
          {
            name: "Payment gateway",
            description: "Stripe, PayPal, and local payment methods integrated cleanly and tested thoroughly before going live. We handle the edge cases — failed payments, retries, refunds, and webhooks — so your revenue flow is never interrupted. Customers can pay the way they prefer without friction.",
          },
          {
            name: "Inventory sync",
            description: "Real-time inventory sync between your store and fulfilment systems to prevent overselling and keep stock levels accurate. Whether you use a 3PL, Shopify's native inventory, or a custom ERP — the data stays consistent. Your team has a single source of truth, and your customers never order something you cannot ship.",
          },
          {
            name: "Conversion optimisation",
            description: "Checkout UX, trust signals, product page layout, and page speed are all optimised to reduce drop-off and increase average order value. We look at the entire purchase journey — from first click to order confirmation — and remove every unnecessary point of friction. Small improvements to conversion rate compound into significant revenue gains over time.",
          },
        ],
        process: [
          { title: "Platform Strategy", description: "We select the right platform — Shopify, headless, or custom — based on catalogue size, budget, and growth goals." },
          { title: "UX & Conversion Design", description: "Store architecture and checkout UX designed to reduce drop-off and increase average order value from day one." },
          { title: "Build & Integration", description: "Development with payment gateways, inventory sync, and third-party tools integrated cleanly and tested thoroughly." },
          { title: "Launch & Optimisation", description: "Performance audit at go-live followed by data-driven conversion rate optimisation as traffic builds." },
        ],
      },
      {
        slug: "product-development",
        label: "Product Development",
        tagline: "From zero to shipped in weeks, not months.",
        description:
          "End-to-end product development for SaaS, internal tools, and web applications. We embed with your team, define scope, and deliver working software — not just prototypes.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
        deliverables: [
          {
            name: "Discovery & scoping",
            description: "Stakeholder interviews, user research, and a detailed product spec agreed upfront — scope is locked before build begins. Clear scoping prevents the most common reasons projects fail: changing requirements, budget overruns, and missed deadlines. You know exactly what will be built before a single sprint starts.",
          },
          {
            name: "Architecture design",
            description: "System design, data models, and infrastructure decisions reviewed and agreed before a single line of production code is written. Getting the architecture right at the start prevents expensive rewrites later as the product scales. We design for where you are going, not just where you are today.",
          },
          {
            name: "Agile sprints",
            description: "Sprint-based delivery with a working demo every two weeks — you see real progress, not status updates. Feedback is incorporated continuously, so the product evolves based on real usage rather than assumptions. Agile delivery reduces risk and keeps everyone aligned throughout the build.",
          },
          {
            name: "QA & testing",
            description: "Full test coverage across unit, integration, and end-to-end tests — bugs caught before they reach your users. A rigorous QA process means your team spends less time fixing production issues and more time shipping new features. Quality is built in, not checked at the end.",
          },
          {
            name: "Launch support",
            description: "Staged rollout, production monitoring, and a dedicated support window after launch as standard — not an optional extra. The weeks after launch are the highest-risk period for any product. We stay engaged to resolve issues quickly and ensure the product performs as expected under real load.",
          },
        ],
        process: [
          { title: "Discovery & Spec", description: "Stakeholder interviews, user research, and a detailed product spec agreed upfront — scope is locked before build begins." },
          { title: "Architecture & Design", description: "System design, data models, and UI prototyped and reviewed before any production code is written." },
          { title: "Agile Build", description: "Sprint-based delivery with a working demo every two weeks. You see real progress, not status updates." },
          { title: "QA, Launch & Support", description: "Full test coverage, staged rollout, and post-launch monitoring included as standard — not bolted on." },
        ],
      },
      {
        slug: "software-development",
        label: "Software Development",
        tagline: "Bespoke software built around your workflow.",
        description:
          "Custom software solutions for unique business problems. Whether it is a dashboard, an automation tool, or an internal platform — we build it to fit your exact requirements.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
        deliverables: [
          {
            name: "Requirements analysis",
            description: "Every requirement documented — including edge cases, error states, and third-party integrations — before a line of code is written. A thorough requirements phase is the single most effective way to reduce cost and timeline overruns. What gets documented gets built correctly.",
          },
          {
            name: "System design",
            description: "Architecture, data models, API contracts, and infrastructure choices reviewed and agreed before development begins. Good system design is invisible to end users but felt in every interaction — in speed, reliability, and the absence of unexpected failures. We design for the load you need to handle today and the scale you are planning for tomorrow.",
          },
          {
            name: "API development",
            description: "Clean, well-documented REST or GraphQL APIs built to handle your current load and scale gracefully as usage grows. Every endpoint is designed with security, versioning, and clear error handling from the start. Your team — and any future integrations — can work with the API without guesswork.",
          },
          {
            name: "Integration",
            description: "Third-party services, internal systems, and data pipelines connected and tested in a dedicated integration environment before going to production. We handle the complexity of authentication, rate limits, data transformation, and failure handling so your systems communicate reliably. Integrations that are built carefully do not become maintenance burdens.",
          },
          {
            name: "Documentation",
            description: "Full technical documentation and a structured handover so your team can own, extend, and maintain the software long-term without depending on us. Good documentation is the difference between software your team controls and software that controls your team. We write the docs we would want to receive ourselves.",
          },
        ],
        process: [
          { title: "Requirements Analysis", description: "Every requirement documented — including edge cases and third-party integrations — before a line of code is written." },
          { title: "System Design", description: "Architecture, data models, and API contracts reviewed and agreed before development begins." },
          { title: "Build & Integration", description: "Clean, documented code with continuous integration from the first sprint and weekly progress reviews." },
          { title: "Deployment & Docs", description: "Production deployment with full technical documentation and a structured handover so your team can own it long-term." },
        ],
      },
      {
        slug: "quality-assurance",
        label: "Quality Assurance",
        tagline: "Ship with confidence, not crossed fingers.",
        description:
          "Structured QA processes that catch issues before your users do. Manual testing, automated test suites, performance benchmarking, and cross-device validation.",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&q=80",
        deliverables: [
          {
            name: "Test planning",
            description: "Test cases, environments, and success criteria written and agreed upfront — aligned directly to your requirements and user stories. A well-structured test plan ensures nothing is missed and every release is measured against the same standard. Testing without a plan is just hoping.",
          },
          {
            name: "Manual QA",
            description: "Structured exploratory and regression testing across browsers, devices, and every critical user flow — carried out by experienced testers who think like your users. Manual testing catches the kind of subtle, context-dependent issues that automated scripts consistently miss. It is irreplaceable for assessing real-world usability.",
          },
          {
            name: "Automated testing",
            description: "Test suites written for critical paths so every deploy is validated automatically and regression risk stays low across your entire codebase. Automated tests run in seconds and never forget to check the things that matter most. Your team can ship faster because the safety net is always in place.",
          },
          {
            name: "Performance testing",
            description: "Load testing and performance benchmarking to ensure your product holds up under real-world traffic — including peak loads and edge cases. We identify bottlenecks before your users find them in production, when the cost of fixing them is far higher. Performance problems are reliability problems.",
          },
          {
            name: "Bug reporting",
            description: "Detailed bug reports with clear reproduction steps, screenshots, environment details, and severity ratings — written so developers can fix issues without back-and-forth. Good bug reports reduce the time between finding an issue and resolving it. Every report we write is actionable.",
          },
        ],
        process: [
          { title: "Test Planning", description: "Test cases, environments, and success criteria written and agreed upfront — aligned directly to your requirements." },
          { title: "Manual QA", description: "Structured exploratory and regression testing across browsers, devices, and every critical user flow." },
          { title: "Automated Testing", description: "Test suites written for critical paths so every deploy is validated automatically and regression risk stays low." },
          { title: "Reporting & Sign-off", description: "Detailed bug reports with reproduction steps and severity ratings, plus fix verification before final sign-off." },
        ],
      },
    ],
    faqs: [
      { q: "What technologies do you use for development?", a: "We primarily build with Next.js, React, and TypeScript for web. Mobile apps run on React Native for iOS and Android. Backend services are Node.js with PostgreSQL, MongoDB, or Supabase chosen based on project requirements." },
      { q: "How long does a typical project take?", a: "A standard marketing site takes 3–6 weeks from discovery to launch. Complex web apps or ecommerce builds typically run 8–16 weeks. We scope everything clearly upfront so there are no surprises mid-project." },
      { q: "Do you provide ongoing maintenance after launch?", a: "Yes. We offer monthly retainers covering hosting management, CMS updates, performance monitoring, and feature iterations. Maintenance packages are scoped once the project launches." },
      { q: "Can you work with an existing codebase?", a: "Absolutely. We regularly jump into existing projects for audits, refactors, or feature work. We do a codebase review first so we can give you an honest assessment before committing to anything." },
      { q: "What does the process look like end to end?", a: "We start with a discovery call to define scope, move into design (if needed), then development sprints, QA, staging review, and a production launch. You have visibility into progress throughout — no black boxes." },
    ],
  },

  // ── DESIGN ─────────────────────────────────────────────────────────────────
  {
    slug: "design",
    title: "Design",
    icon: "✦",
    color: "#0d0820",
    accent: "#FF3D00",
    tagline: "Visual identity that earns attention.",
    description:
      "Design that does work. From brand identities that hold up across every touchpoint to interfaces that make complex things feel simple — we build visual systems with intent, not decoration.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
    items: [
      {
        slug: "brand-identity",
        label: "Brand Identity",
        tagline: "A brand system that says the right thing without a word.",
        description:
          "Full brand identity design — logo, typography, colour system, voice guidelines, and brand application across all touchpoints. Built to scale from day-one startup to Series B and beyond.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
        deliverables: [
          {
            name: "Logo & wordmark",
            description: "A mark that holds up at any size — from a 16px favicon to a 10-metre billboard — with full usage variations including primary, stacked, and monochrome versions. We design for every context your brand will appear in, not just the one that looks best in a presentation. A great logo is a system, not a single file.",
          },
          {
            name: "Colour system",
            description: "A defined palette with primary, secondary, and functional colours — all with accessibility contrast ratios documented and tested against WCAG standards. Colour choices are made with meaning and application in mind, not just aesthetics. The system works across digital, print, and environmental applications without compromise.",
          },
          {
            name: "Typography",
            description: "Type hierarchy, font pairing, and scale defined for digital and print contexts — with licensing guidance and web font implementation included. Typography carries more of your brand's personality than most people realise. The right type choices make everything you publish feel intentional and considered.",
          },
          {
            name: "Brand guidelines",
            description: "A comprehensive guidelines document that makes the brand easy for any designer, developer, agency, or partner to apply correctly — with clear do and do-not examples. Good guidelines prevent the brand from drifting over time as more people contribute to it. They are the difference between a brand that stays strong and one that slowly loses coherence.",
          },
          {
            name: "Asset library",
            description: "All final files delivered in every required format — SVG, AI, EPS, PNG, PDF — organised clearly and named consistently so your team can find and use them immediately. We also deliver production-ready versions for social media, presentations, and print. No scrambling to find the right file when you need it.",
          },
        ],
        process: [
          { title: "Brand Discovery", description: "Competitor analysis, audience research, and a positioning workshop to find where your brand fits and what it needs to say." },
          { title: "Concept Development", description: "One strong, well-reasoned creative direction presented with full rationale — not three weak options to dilute the thinking." },
          { title: "Design & Refinement", description: "Logo system, colour, typography, and brand language developed and refined through a collaborative review process." },
          { title: "Delivery & Guidelines", description: "Final files in all formats plus a guidelines document that makes the brand easy to apply consistently by anyone." },
        ],
      },
      {
        slug: "ui-ux-design",
        label: "UI/UX Design",
        tagline: "Interfaces people understand in seconds.",
        description:
          "User experience research, information architecture, wireframing, and high-fidelity UI design for web and mobile. Every decision is backed by user insight and validated against real behaviour.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
        deliverables: [
          {
            name: "UX research",
            description: "User interviews, surveys, usability testing, and competitor analysis turned into clear, actionable insights that drive every design decision. We talk to real users so that design choices are grounded in how people actually think and behave — not how we assume they do. Research removes guesswork and dramatically increases the chance of building something people genuinely want to use.",
          },
          {
            name: "Wireframes",
            description: "Low-fidelity layouts that map every screen, flow, edge case, and error state before visual design starts — reviewed and agreed together before any pixels are polished. Wireframes are the cheapest stage to make changes. Getting structure and logic right here saves significant time in design and development, and prevents the most common UX mistakes.",
          },
          {
            name: "Prototyping",
            description: "Interactive, clickable prototypes that let you test the experience with real users and stakeholders before a single line of code is written. Prototypes reveal usability problems that wireframes and static mockups cannot surface. Testing a prototype costs far less than fixing a shipped product — and produces far better results.",
          },
          {
            name: "Design system",
            description: "A documented component library — colours, typography, spacing, icons, and UI patterns — that keeps every part of the product visually and functionally consistent as it grows. A design system is the foundation that makes scaling a product without losing quality possible. It speeds up design and development at the same time.",
          },
          {
            name: "Dev-ready handoff",
            description: "Organised Figma files with annotated specs, assets exported at all required densities, interaction notes, and a structured handoff to the development team. A clean handoff means developers can build exactly what was designed without back-and-forth or interpretation. The quality of the design is preserved all the way to production.",
          },
        ],
        process: [
          { title: "Research & Discovery", description: "User interviews, competitor analysis, and heuristic evaluation of existing interfaces before any design decisions are made." },
          { title: "Information Architecture", description: "Sitemaps, user flows, and content hierarchy defined and agreed before visual design begins — structure before decoration." },
          { title: "Wireframes & Prototyping", description: "Low and high-fidelity wireframes tested with real users and iterated before final UI design is locked." },
          { title: "UI Design & Handoff", description: "Pixel-perfect components with a documented design system and dev-ready Figma file — no translation work for the dev team." },
        ],
      },
      {
        slug: "motion-graphics",
        label: "Motion Graphics",
        tagline: "Animation that communicates, not just decorates.",
        description:
          "Motion design for product interfaces, brand videos, social content, and presentations. We add motion where it adds meaning — not just because we can.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80",
        deliverables: [
          {
            name: "UI micro-interactions",
            description: "Subtle, purposeful animations for buttons, transitions, loaders, and feedback states that make the product feel alive and responsive. Micro-interactions are the difference between a product that feels functional and one that feels crafted. Used well, they guide attention, confirm actions, and reward users for engaging with your interface.",
          },
          {
            name: "Brand animation",
            description: "A motion identity — animated logo, transitions, colour reveals, and a consistent visual language — that extends your brand into video, digital, and broadcast. A brand with motion feels more premium and more memorable than one without. Consistent motion language across all channels builds stronger recognition over time.",
          },
          {
            name: "Video editing",
            description: "Professional editing, colour grading, and post-production for product demos, explainer videos, case study films, and brand campaigns. Every video we produce is paced, structured, and finished to a standard that reflects the quality of what you are selling. Poor video quality undercuts everything else your brand has built.",
          },
          {
            name: "Social assets",
            description: "Animated content created, sized, and optimised for Instagram Reels, LinkedIn, TikTok, YouTube, and every platform your audience lives on. Social content that moves gets more attention than static images — consistently. We design for each platform's native format so your content feels at home wherever it appears.",
          },
          {
            name: "Presentation design",
            description: "Slide decks with motion, data visualisations, infographics, and layouts that make complex ideas easy to communicate to any audience. A great presentation does not just inform — it persuades. We design decks that work as standalone documents and as live presentation tools, with animations that enhance rather than distract.",
          },
        ],
        process: [
          { title: "Brief & Storyboard", description: "Message, tone, and timing defined with a detailed storyboard reviewed and approved before any animation starts." },
          { title: "Style Frame Design", description: "Key frames designed in your brand's visual language — these become the visual reference for the full animation." },
          { title: "Animation & Production", description: "Frame-by-frame animation produced with sound design and music licensed or composed to match the mood." },
          { title: "Delivery & Export", description: "Final files exported in all required formats — MP4, GIF, Lottie — sized and optimised for every platform." },
        ],
      },
      {
        slug: "print-design",
        label: "Print Design",
        tagline: "Physical touchpoints that match your digital presence.",
        description:
          "Print collateral that extends your brand into the physical world. Business cards, brochures, packaging, signage — all designed to the same standard as your digital identity.",
        image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=900&q=80",
        deliverables: [
          {
            name: "Business collateral",
            description: "Business cards, letterheads, compliment slips, and branded stationery designed to make a strong, consistent first impression in every physical interaction. Physical collateral communicates professionalism and attention to detail in a way that digital touchpoints cannot replicate. The quality of what you hand someone says as much as anything on it.",
          },
          {
            name: "Packaging",
            description: "Product packaging designed to communicate brand values clearly, stand out at the point of purchase, and create a memorable unboxing experience — all with print production requirements built in from the start. Packaging is often the first physical contact a customer has with your brand. It sets expectations before the product is even opened.",
          },
          {
            name: "Brochures",
            description: "Multi-page brochures, product catalogues, and lookbooks designed for both print distribution and digital download — with layouts that work in both contexts. A well-designed brochure is a sales tool that works independently of any conversation. It should answer questions, build confidence, and make a clear case for choosing you.",
          },
          {
            name: "Signage",
            description: "Environmental and wayfinding signage designed at scale — with material specifications, installation notes, and correct bleed and crop marks included for production. Signage that looks considered builds trust and reflects positively on the business behind it. We design for how it will be experienced in the real world, not just how it looks on screen.",
          },
          {
            name: "Print production",
            description: "Print-ready files prepared to exact production specifications — CMYK profiles, correct bleed, crop marks, and material-appropriate file formats — with production managed from brief to delivery. Preparing files incorrectly for print is an expensive mistake. We have done this hundreds of times and know exactly what printers need.",
          },
        ],
        process: [
          { title: "Brief & Brand Review", description: "Brand guidelines and print specifications reviewed before starting — no surprises at the proofing stage." },
          { title: "Layout & Design", description: "Print-safe layouts with correct bleed, margins, and CMYK colour profiles ready for any professional printer." },
          { title: "Proofing & Approval", description: "Digital proofs reviewed together in detail before anything goes to print — changes at this stage cost nothing." },
          { title: "Production & Delivery", description: "Print production managed and delivered to your door or directly to site — one less thing on your plate." },
        ],
      },
    ],
    faqs: [
      { q: "What does a brand identity project include?", a: "A full identity includes logo and wordmark, colour system, typography selection, usage guidelines, and an asset library in all required formats. We can also extend into brand applications like presentations, social templates, and site design." },
      { q: "How many revisions are included?", a: "Our process is collaborative, not transactional. We present one strong, well-reasoned direction and refine it together. There are no arbitrary revision limits — we keep going until the work is right." },
      { q: "What file formats will I receive?", a: "All final files are delivered in vector (SVG, AI, EPS) and raster (PNG, JPG, PDF) formats. For UI/UX projects you get organised Figma files with a documented component library ready for handoff." },
      { q: "Do you work with early-stage startups?", a: "Yes. We've worked with pre-seed startups, Series A companies, and established businesses. The process adapts to your budget and timeline — from a focused brand sprint to a comprehensive identity system." },
    ],
  },

  // ── DIGITAL MARKETING ──────────────────────────────────────────────────────
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "◉",
    color: "#0a1a0a",
    accent: "#efc336",
    tagline: "Growth that compounds. Not just campaigns.",
    description:
      "Marketing that works beyond the first click. We build search visibility, paid acquisition funnels, and content engines that generate compounding returns — not just one-off spikes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    items: [
      {
        slug: "seo-sem",
        label: "SEO / SEM",
        tagline: "Be found before your competitors.",
        description:
          "Technical SEO, content strategy, and paid search campaigns that put you in front of the right audience at the right time. We focus on quality traffic that converts, not just volume.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80",
        deliverables: [
          {
            name: "Technical SEO audit",
            description: "Full site crawl identifying every technical barrier to rankings — crawl budget waste, indexation errors, page speed issues, structured data problems, and duplicate content. Most sites have far more technical SEO issues than their owners realise. Fixing them is often the highest-leverage thing you can do to improve organic traffic without creating a single piece of new content.",
          },
          {
            name: "Keyword strategy",
            description: "Opportunity mapping across informational, commercial, and transactional search intent — prioritised by search volume, competition, and commercial fit for your business. A keyword strategy is a business strategy. The right keywords connect your content to the exact moment a potential customer is looking for what you offer.",
          },
          {
            name: "On-page optimisation",
            description: "Page structures, heading hierarchies, meta titles, meta descriptions, and content updated to align with target queries and match the actual intent behind each search. On-page optimisation is the foundation that makes everything else — links, content, authority — work harder. Pages that are well-optimised rank faster and hold their positions longer.",
          },
          {
            name: "Link building",
            description: "Authority-building outreach that earns editorial backlinks from relevant, high-quality sites in your industry — not paid links or directory spam. Links from authoritative sources remain one of the strongest signals in organic search. We build them through genuine relationship-building and content worth linking to.",
          },
          {
            name: "Google Ads",
            description: "Search and display campaigns built around your actual business goals — not platform default settings or vanity metrics — with weekly optimisation and clear monthly reporting tied to cost per acquisition. Paid search done well puts you in front of people who are actively looking for what you sell. Done poorly, it burns budget on clicks that never convert.",
          },
        ],
        process: [
          { title: "Technical Audit", description: "Full site crawl to identify every technical issue blocking rankings — crawl budget, indexation, speed, and structured data." },
          { title: "Keyword Strategy", description: "Opportunity mapping across informational, commercial, and transactional intent — prioritised by volume, competition, and fit." },
          { title: "On-Page & Content", description: "Optimised page structures, meta data, and content aligned to target queries with clear search intent matching." },
          { title: "Link Building & Reporting", description: "Authority-building outreach campaign with monthly rank-tracking reports showing movement across all target keywords." },
        ],
      },
      {
        slug: "social-media",
        label: "Social Media",
        tagline: "Content that builds brand, not just followers.",
        description:
          "Social media strategy, content creation, and community management across all major platforms. We develop a consistent brand voice and content calendar that actually engages your audience.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
        deliverables: [
          {
            name: "Strategy & planning",
            description: "A 90-day content strategy built around your audience, business goals, and the specific opportunities on each platform you are active on. Strategy before content is the difference between social media that builds something and social media that just keeps the lights on. We research before we create.",
          },
          {
            name: "Content creation",
            description: "Copy, graphics, and video produced in-house to your brand guidelines — every format, every platform, every week, consistently. Consistency is what builds an audience on social media. Sporadic, high-effort bursts are far less effective than a steady stream of quality content produced to a reliable schedule.",
          },
          {
            name: "Scheduling",
            description: "Posts scheduled and published at optimal times on every platform — consistently, without gaps, delays, or the last-minute scramble to find something to post. A reliable publishing cadence signals to both algorithms and audiences that you are a credible, active presence. It compounds over time.",
          },
          {
            name: "Community management",
            description: "Comments, DMs, and mentions monitored and responded to thoughtfully and promptly — so your audience feels heard, valued, and engaged with a real brand. Community management is where brand loyalty is built or lost. The way you respond to your audience says more about your brand than the content you publish.",
          },
          {
            name: "Analytics reporting",
            description: "Monthly performance review covering reach, impressions, engagement rate, follower growth, and the specific content formats and topics that drive the most meaningful results. We measure what matters to your business — not just what the platform wants you to celebrate. Reporting that is honest and actionable improves results over time.",
          },
        ],
        process: [
          { title: "Strategy & Audit", description: "Platform audit, competitor analysis, and a 90-day content strategy built around your audience and business goals." },
          { title: "Content Production", description: "Copy, graphics, and video produced in-house to your brand guidelines — every format, every platform." },
          { title: "Publishing & Community", description: "Scheduled posting, comment management, and genuine audience engagement — we show up so you don't have to." },
          { title: "Analytics & Optimisation", description: "Monthly performance review with content adjustments based on what's actually working — not what we think will work." },
        ],
      },
      {
        slug: "ppc-ads",
        label: "PPC Ads",
        tagline: "Every pound spent tracked to revenue.",
        description:
          "Paid advertising across Google, Meta, LinkedIn, and beyond. We design campaigns around your actual business goals — not vanity metrics — and optimise relentlessly for ROAS.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
        deliverables: [
          {
            name: "Campaign strategy",
            description: "Audience research, keyword planning, and campaign structure built around your specific goals and margins — not platform defaults or generic templates. The structure of a campaign determines most of its outcome before a single ad is shown. Getting strategy right at the start prevents wasting budget on a poorly architected account.",
          },
          {
            name: "Ad creative",
            description: "Copy and visual creative tested across multiple variants from day one — written and designed to stop the scroll, communicate value, and drive qualified clicks. Most paid campaigns are limited not by budget but by creative quality. We write and design ads that would work even if they were not paid for.",
          },
          {
            name: "A/B testing",
            description: "Systematic split testing of headlines, descriptions, creative formats, audiences, and landing pages — with clear hypotheses, sufficient data, and honest conclusions. A/B testing only improves performance if it is run correctly. We test one variable at a time, wait for statistical significance, and apply learnings consistently.",
          },
          {
            name: "Landing pages",
            description: "Conversion-optimised landing pages designed and built to match each campaign's message, audience intent, and the specific action you need visitors to take. Message match between an ad and its landing page is one of the highest-leverage improvements in any paid campaign. We design pages that convert, not just pages that look good.",
          },
          {
            name: "Monthly reporting",
            description: "Clear, honest monthly ROAS reports showing what was spent, what was earned, and specific recommendations for where to scale and where to cut — no dashboard screenshots without interpretation. Good reporting builds the trust required to make bold decisions with advertising budget. We tell you what is actually happening, not what you want to hear.",
          },
        ],
        process: [
          { title: "Campaign Strategy", description: "Audience research, keyword planning, and campaign structure built around your business goals — not platform defaults." },
          { title: "Creative & Copy", description: "Ad creative and copy tested across multiple variants from launch day — we find what converts, fast." },
          { title: "Launch & Optimisation", description: "Daily monitoring in week one, then weekly bid management, targeting refinement, and negative keyword hygiene." },
          { title: "Reporting & Scaling", description: "Monthly ROAS report with clear, honest recommendations for scaling what works and cutting what doesn't." },
        ],
      },
      {
        slug: "content-strategy",
        label: "Content Strategy",
        tagline: "Content that ranks, educates, and converts.",
        description:
          "Content marketing strategy and execution — from blog posts and case studies to email sequences and thought leadership. We create content that builds trust with your audience over time.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80",
        deliverables: [
          {
            name: "Content audit",
            description: "Every existing piece of content reviewed for organic performance, cannibalisation issues, gaps against target keywords, and quick-win optimisation opportunities — before any new content is planned or created. Most brands are sitting on a library of underperforming content that could be significantly improved with targeted updates. A content audit finds that value before you spend budget on something new.",
          },
          {
            name: "Editorial calendar",
            description: "A keyword-led content plan aligned to business goals, audience needs, and the specific stages of the buyer journey your content needs to serve. An editorial calendar removes the most common reason content marketing fails: not knowing what to publish next. It keeps your team aligned and your publishing consistent month after month.",
          },
          {
            name: "Blog writing",
            description: "Long-form, well-researched articles written by specialists who understand both the search intent behind each keyword and the brand voice you need to maintain. Content that ranks is content that genuinely helps people. We write for readers first and search engines second — which is exactly what search engines want.",
          },
          {
            name: "Email sequences",
            description: "Welcome flows, lead nurture sequences, re-engagement campaigns, and post-purchase series — written to build trust progressively and convert subscribers into customers over time. Email remains the highest-ROI digital marketing channel for most businesses. A well-written sequence works for you continuously without any additional investment.",
          },
          {
            name: "Distribution strategy",
            description: "A specific promotion plan for every piece of content — owned channels, social distribution, community seeding, and earned media outreach — so each piece gets found by the audience it was written for. The best content in the world fails without distribution. We plan promotion before we publish so nothing is left to chance.",
          },
        ],
        process: [
          { title: "Content Audit", description: "Existing content reviewed for gaps, cannibalisation, and quick-win optimisation opportunities before any new content is created." },
          { title: "Strategy & Planning", description: "Keyword-led editorial calendar aligned to business goals, audience needs, and the buyer journey — not just trending topics." },
          { title: "Content Creation", description: "Blog posts, case studies, and email sequences written by specialists who understand both search intent and brand voice." },
          { title: "Distribution & Measurement", description: "Promotion across channels with monthly performance reviews tied to traffic and conversion goals." },
        ],
      },
    ],
    faqs: [
      { q: "How long before we see results from SEO?", a: "SEO is a long-term investment. Most clients see meaningful movement in rankings and organic traffic within 3–6 months, with compounding gains over 12+ months. Paid campaigns can drive traffic within days of launch." },
      { q: "Do you manage social media accounts?", a: "Yes. We handle content strategy, copywriting, creative production, scheduling, and community management. We can take over existing accounts or build new ones from scratch with a defined brand voice." },
      { q: "What platforms do you run paid ads on?", a: "Google Search and Display, Meta (Facebook/Instagram), LinkedIn, TikTok, and YouTube. We recommend platforms based on your audience and goals — not our preference — and only where your budget makes sense." },
      { q: "How do you report on results?", a: "Every client gets a monthly performance report with the metrics that matter to their business — not vanity numbers. We use Google Analytics, Search Console, and ad platform dashboards, and we walk through the data with you." },
      { q: "Can you help with content creation as well as strategy?", a: "Yes. We develop full content strategies including keyword research, editorial calendars, blog posts, email sequences, and social copy. All content is written by specialists who understand both SEO and brand voice." },
    ],
  },
];

// ─── Lookup helpers ───────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string,
): ServiceItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find((s) => s.slug === serviceSlug);
}
