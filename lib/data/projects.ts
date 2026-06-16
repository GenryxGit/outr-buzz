export type Project = {
  id: string;
  title: string;
  tags: string[];
  category: "Website" | "Branding" | "Social Media";
  color: string;
  accent: string;
  cols: number;
  video: string;
  slug: string;
  description: string;
  client: string;
  year: string;
  services: string[];
  role: string;
  challenge: string;
  solution: string;
  outcomes: { value: string; label: string }[];
  coverImage: string;
};

export const projects: Project[] = [
  // ── Website (4) ──────────────────────────────────────────
  {
    id: "01",
    slug: "rabbit-labs",
    title: "Rabbit Labs",
    client: "Rabbit Labs",
    year: "2024",
    tags: ["Development", "Web App", "Product Strategy"],
    category: "Website",
    services: ["Product Strategy", "UX Research", "UI Design", "Full-stack Development"],
    role: "End-to-end website redesign and messaging strategy",
    color: "#0d1520",
    accent: "#efc336",
    cols: 12,
    video: "/video/case-study-1.mp4",
    description: "AI-powered web platform delivering pragmatic automation and real business value for German SMEs.",
    challenge:
      "Rabbit Labs had a genuinely powerful AI automation product — but their website couldn't explain it to non-technical business owners. Decision-makers were landing on the homepage and leaving within 30 seconds. The product worked. The story didn't.",
    solution:
      "We rebuilt the messaging hierarchy from the ground up — led with tangible business outcomes instead of feature lists, added an interactive demo section, and built trust signals tuned for the B2B buyer journey. Then rebuilt the entire site in Next.js: fast, accessible, and structured for search from day one.",
    outcomes: [
      { value: "−61%", label: "Homepage bounce rate in the first month post-launch" },
      { value: "3.2×", label: "Increase in demo request submissions" },
      { value: "$2.4M", label: "ARR growth attributed to improved lead conversion" },
    ],
    coverImage: "/images/work/website/1.png",
  },
  {
    id: "02",
    slug: "restful-sleep",
    title: "Restful Sleep",
    client: "Restful Sleep Co.",
    year: "2024",
    tags: ["Web Design", "Development", "Ecommerce"],
    category: "Website",
    services: ["UI Design", "Frontend Development", "CMS Integration", "CRO"],
    role: "Full website design, development and conversion optimisation",
    color: "#0a0a0a",
    accent: "#FF3D00",
    cols: 6,
    video: "/video/case-study-2.mp4",
    description: "Clean, conversion-focused website for a natural sleep supplement brand — built to educate and sell.",
    challenge:
      "In a supplement market where every competitor runs the same white-background, stock-photo playbook, Restful Sleep was invisible. Their website looked like the category, not like a brand worth choosing. Mobile bounce rate was at 71% and the checkout had four unnecessary steps.",
    solution:
      "Built a conversion-focused site anchored in ingredient transparency and sleep science storytelling. Simplified checkout to two steps, added a subscription model with clear savings messaging, review integration, and trust signals throughout the purchase journey. Optimised for Core Web Vitals — 70% of their traffic was mobile.",
    outcomes: [
      { value: "2.3×", label: "Increase in purchase conversion within 60 days of launch" },
      { value: "55%", label: "Reduction in page load time on mobile" },
      { value: "89%", label: "Of customers rated the checkout experience 5 stars" },
    ],
    coverImage: "/images/work/website/2.png",
  },
  {
    id: "03",
    slug: "strong-hitch",
    title: "Strong Hitch",
    client: "Strong Hitch",
    year: "2023",
    tags: ["Web Design", "Local SEO", "Development"],
    category: "Website",
    services: ["UI Design", "Frontend Development", "Local SEO Setup", "Google Business Integration"],
    role: "Website design, development and local search optimisation",
    color: "#0d0d1a",
    accent: "#efc336",
    cols: 6,
    video: "/video/case-study-3.mp4",
    description: "Bold, service-focused website for a hitch installation and automotive accessories business.",
    challenge:
      "Strong Hitch had a loyal customer base and a solid reputation — but almost no online presence beyond a basic Google listing. Potential customers searching for hitch installation locally were choosing competitors not because they were better, but because Strong Hitch simply didn't appear where people were looking.",
    solution:
      "Built a mobile-first service website with a clear service breakdown, transparent pricing, a before/after gallery, and a prominent booking CTA above the fold on every page. Structured data for local search, Google Business integration, and a full local SEO setup on launch day.",
    outcomes: [
      { value: "−44%", label: "Reduction in customer enquiry drop-off after the redesign" },
      { value: "3.9×", label: "Increase in inbound booking enquiries via the website" },
      { value: "4.5★", label: "Google Business rating consistently maintained post-launch" },
    ],
    coverImage: "/images/work/website/3.png",
  },
  {
    id: "04",
    slug: "btc-platform",
    title: "BTC Platform",
    client: "BTC Platform",
    year: "2023",
    tags: ["Web Design", "Fintech", "UI/UX"],
    category: "Website",
    services: ["UI Design", "Frontend Development", "Conversion Optimisation"],
    role: "Landing page redesign and conversion architecture",
    color: "#1a0d0d",
    accent: "#FF3D00",
    cols: 12,
    video: "/video/case-study-4.mp4",
    description: "Futuristic web platform synchronising AI and blockchain networks — built for the next wave of crypto.",
    challenge:
      "A technically impressive product in a space where trust is earned in seconds. The original site was developer-facing and failed to communicate value to investors, partners, and crypto-curious users. Sign-up was a seven-step process. Most visitors left before step two.",
    solution:
      "Redesigned the landing page around three distinct audience journeys — investors, developers, and everyday users. Added animated data visualisations, a clear tokenomics breakdown, team credibility signals, and a security audit badge. Rebuilt the onboarding flow from seven steps to two.",
    outcomes: [
      { value: "+38%", label: "Sign-up conversion improvement within 60 days of relaunch" },
      { value: "1.9×", label: "Increase in average wallet deposit value post-redesign" },
      { value: "22%", label: "Reduction in onboarding abandonment rate" },
    ],
    coverImage: "/images/work/website/4.png",
  },

  // ── Branding (4) ─────────────────────────────────────────
  {
    id: "05",
    slug: "elegance-fashion",
    title: "Elegance Fashion",
    client: "Elegance Fashion",
    year: "2024",
    tags: ["Brand Identity", "Visual Design", "Fashion"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines"],
    role: "End-to-end brand identity for a premium women's fashion label",
    color: "#0d0820",
    accent: "#efc336",
    cols: 7,
    video: "/video/case-study-1.mp4",
    description: "Elegant brand identity and visual system for a premium women's fashion label focused on sophistication and longevity.",
    challenge:
      "A growing women's fashion label positioned mid-market but aiming for premium. Their existing brand — generic wordmark, inconsistent colour use, no clear visual language — was holding them back from higher-end customers and retail stockists. The product quality was there. The identity wasn't.",
    solution:
      "Built a refined visual identity anchored in restraint and elegance: custom serif-influenced wordmark, a tightly controlled four-colour palette, a typography system designed for editorial and packaging use, and comprehensive brand guidelines written for in-house teams and external agency partners.",
    outcomes: [
      { value: "3.2×", label: "Increase in average order value within 90 days of rebrand" },
      { value: "68%", label: "Growth in direct traffic as brand recognition improved" },
      { value: "4.1s", label: "Average session duration on the new branded website" },
    ],
    coverImage: "/images/work/branding/1.png",
  },
  {
    id: "06",
    slug: "coffeebee",
    title: "CoffeeBee",
    client: "CoffeeBee",
    year: "2024",
    tags: ["Brand Identity", "Packaging Design", "FMCG"],
    category: "Branding",
    services: ["Brand Strategy", "Logo Design", "Packaging Design", "Visual Identity"],
    role: "Full brand identity and packaging system for a coffee brand",
    color: "#0d1a0a",
    accent: "#efc336",
    cols: 5,
    video: "/video/case-study-2.mp4",
    description: "Bold, bee-inspired brand identity for a coffee brand — logo, packaging, cups, and social assets built for shelf standout.",
    challenge:
      "Entering a saturated coffee market where most independent brands look identical — kraft paper, rustic fonts, vague artisan claims. CoffeeBee needed an identity distinctive enough to stand out at retail, on social, and as a takeaway cup in someone's hand.",
    solution:
      "Built a high-contrast, bee-inspired visual identity with a custom illustrated mark, a bold colour palette chosen specifically for point-of-sale standout, and a packaging system that worked across bags, cups, sleeves, and digital assets. Social media templates included so the launch was consistent from day one.",
    outcomes: [
      { value: "42%", label: "Increase in retail shelf pick-up rate vs previous packaging" },
      { value: "3", label: "New retail partnerships secured in the first quarter post-launch" },
      { value: "2.1×", label: "Online sales growth in the 6 months following the rebrand" },
    ],
    coverImage: "/images/work/branding/2.png",
  },
  {
    id: "07",
    slug: "structura",
    title: "Structura",
    client: "Structura",
    year: "2023",
    tags: ["Brand Identity", "Construction", "Corporate Branding"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Signage Design", "Print Collateral"],
    role: "Full brand identity and brand system for a construction firm",
    color: "#0a0a14",
    accent: "#FF3D00",
    cols: 6,
    video: "/video/case-study-3.mp4",
    description: "Strong, industrial brand identity for a construction company — built to command trust in tenders, on-site, and online.",
    challenge:
      "An established construction firm with serious capability and a portfolio of major projects, held back by branding that looked like a one-man operation. Tenders were being lost and partnerships weren't progressing — not because of the work quality, but because the brand didn't reflect what they could actually deliver.",
    solution:
      "Designed a commanding visual identity built around authority and precision: bold geometric mark, industrial-weight typography, a dark high-contrast palette. Extended into the full brand system — proposal templates, site hoarding specs, vehicle livery guidelines, PPE branding, and digital presence.",
    outcomes: [
      { value: "5×", label: "Increase in tender shortlisting rate after the rebrand" },
      { value: "12", label: "Industry press features in the first quarter post-launch" },
      { value: "91%", label: "Brand recall score in a post-launch client survey" },
    ],
    coverImage: "/images/work/branding/3.png",
  },
  {
    id: "08",
    slug: "brand-studio",
    title: "Brand Studio",
    client: "Brand Studio",
    year: "2023",
    tags: ["Brand Identity", "Agency Branding", "Design System"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Presentation Design", "Brand Guidelines"],
    role: "Brand identity, design system and pitch collateral for a creative studio",
    color: "#14100d",
    accent: "#efc336",
    cols: 6,
    video: "/video/case-study-4.mp4",
    description: "Polished brand identity and presentation system for a creative studio — minimal, precise, and built to win pitches.",
    challenge:
      "A creative studio that had spent years building brands for others, while their own identity had grown inconsistent and outdated. Different logos across different materials, no unified tone of voice, and a website that didn't reflect the quality of the work inside. It was costing them clients before the first meeting.",
    solution:
      "Took them through our full brand identity process — same rigour as any client. Clean modular wordmark, a flexible identity system that worked from business cards to 60-slide pitch decks, a documented brand guide for the internal team, and a suite of proposal and presentation templates that made consistency effortless.",
    outcomes: [
      { value: "2.6×", label: "Increase in new client enquiries after rebrand launch" },
      { value: "78%", label: "Improvement in pitch-to-contract conversion rate" },
      { value: "4.9★", label: "Average client satisfaction rating in post-project surveys" },
    ],
    coverImage: "/images/work/branding/4.png",
  },

  // ── Social Media (4) ─────────────────────────────────────
  {
    id: "09",
    slug: "clothing-co",
    title: "Clothing Co.",
    client: "Clothing Co.",
    year: "2024",
    tags: ["Social Media", "Fashion", "Content Strategy"],
    category: "Social Media",
    services: ["Content Strategy", "Social Media Management", "Graphic Design", "Copywriting"],
    role: "Social media strategy, content production and channel management",
    color: "#0d1a0d",
    accent: "#FF3D00",
    cols: 5,
    video: "/video/case-study-1.mp4",
    description: "Systematic social media content for a fashion brand — product launches, styling content, and story funnels that convert.",
    challenge:
      "A fashion brand with a strong product range but a social presence that felt like an afterthought — inconsistent visuals, irregular posting, and content that got impressions but didn't convert browsers into buyers. Instagram was getting clicks. Sales weren't following.",
    solution:
      "Built a systematic content approach with a rolling 6-week calendar: weekly product features, outfit-styled flat lays, arrival announcement sequences, and story funnels designed to move followers to purchase. Content batched monthly, scheduled in advance, consistently on-brand.",
    outcomes: [
      { value: "2.8×", label: "Increase in qualified website traffic from social channels" },
      { value: "91%", label: "Reduction in bounce rate from social-referred sessions" },
      { value: "14k", label: "New followers gained in the first quarter of management" },
    ],
    coverImage: "/images/work/smm/1.png",
  },
  {
    id: "10",
    slug: "super-auto",
    title: "Super Auto",
    client: "Super Auto",
    year: "2024",
    tags: ["Social Media", "Local Business", "Video Content"],
    category: "Social Media",
    services: ["Social Media Strategy", "Video Content Production", "Community Management"],
    role: "Full social media strategy and content production for a local auto repair business",
    color: "#1a0d14",
    accent: "#efc336",
    cols: 7,
    video: "/video/case-study-2.mp4",
    description: "Trust-building social media for an auto repair shop — maintenance tips, before/afters, and mechanic POV videos that convert.",
    challenge:
      "A local auto repair business with strong word-of-mouth referrals but zero online visibility. Customers searching for reliable mechanics on social media simply couldn't find them. The large segment of people who research service providers before calling wasn't even aware Super Auto existed.",
    solution:
      "Built an education-first content strategy designed to establish expertise before a customer ever needed a repair: car maintenance tips, myth-busting content, before/after transformation posts, and mechanic process videos that made the workshop feel approachable and trustworthy. Local hashtag strategy ran alongside.",
    outcomes: [
      { value: "4.4×", label: "Increase in new customer enquiries from social in 6 months" },
      { value: "18%", label: "Average engagement rate across video content" },
      { value: "35%", label: "Of monthly revenue attributed to social-referred customers in Q3" },
    ],
    coverImage: "/images/work/smm/2.png",
  },
  {
    id: "11",
    slug: "shoes-hub",
    title: "Shoes Hub",
    client: "Shoes Hub",
    year: "2023",
    tags: ["Social Media", "Footwear", "Community Building"],
    category: "Social Media",
    services: ["Social Strategy", "Content Creation", "Community Management", "Paid Social"],
    role: "Year-round social strategy, community management and paid social campaigns",
    color: "#0a0d0a",
    accent: "#FF3D00",
    cols: 6,
    video: "/video/case-study-3.mp4",
    description: "Year-round social content for a footwear brand — launches, styling guides, behind-the-scenes and community campaigns.",
    challenge:
      "A footwear brand with strong seasonal spikes around product launches but flat, disengaged content between drops. Social media wasn't building brand equity — it was only serving existing customers who were already going to buy. Between launch windows, the feed went quiet and the audience drifted.",
    solution:
      "Built a year-round always-on content calendar: styling guides, material and craft close-up content, behind-the-scenes production footage, and a community hashtag campaign that turned customers into content creators. Targeted paid campaigns ran during peak acquisition windows to amplify what organic was building.",
    outcomes: [
      { value: "3.1×", label: "New customer acquisition via social in the first year" },
      { value: "£4.20", label: "Average cost per lead via paid social campaigns" },
      { value: "22k", label: "Average organic reach per post, up from 2.4k at project start" },
    ],
    coverImage: "/images/work/smm/3.png",
  },
  {
    id: "12",
    slug: "burger-bite",
    title: "Burger Bite",
    client: "Burger Bite",
    year: "2023",
    tags: ["Social Media", "Food & Beverage", "Launch Strategy"],
    category: "Social Media",
    services: ["Social Media Management", "Pre-Launch Strategy", "Photography Direction", "Copywriting"],
    role: "Pre-launch hype campaign and ongoing social media management",
    color: "#14100a",
    accent: "#efc336",
    cols: 6,
    video: "/video/case-study-4.mp4",
    description: "Appetite-driven social media for a burger brand — bold visuals, pre-launch hype, and content built to drive foot traffic.",
    challenge:
      "A new burger brand opening a physical location with no advertising budget — needed to generate genuine local awareness and foot traffic entirely through organic social before and after opening day. Starting from zero followers, zero recognition, zero content.",
    solution:
      "Built a pre-launch countdown strategy across Instagram and TikTok — kitchen build content, recipe testing, staff introductions, and menu reveals that created real anticipation before the doors opened. Post-launch: daily appetite-first food content with strong photography direction, limited-time offer campaigns, and consistent local community engagement.",
    outcomes: [
      { value: "5.2×", label: "Increase in weekly foot traffic attributed to social in month two" },
      { value: "8.7%", label: "Average engagement rate across all posts (industry average: 1.2%)" },
      { value: "3", label: "Local brand collaborations sourced directly from DM enquiries" },
    ],
    coverImage: "/images/work/smm/4.png",
  },
];
