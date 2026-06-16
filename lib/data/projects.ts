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
    role: "End-to-end product redesign and development",
    color: "#0d1520",
    accent: "#cdff00",
    cols: 12,
    video: "/video/case-study-1.mp4",
    description: "AI-powered web platform delivering pragmatic automation and real business value for German SMEs.",
    challenge:
      "Monolith had built a powerful analytics platform that nobody could figure out how to use. Retention was suffering. Onboarding drop-off was at 73%. The product worked — the experience didn't.",
    solution:
      "We embedded with their team for eight weeks, rebuilt information architecture from scratch, then designed and shipped a new onboarding flow, dashboard, and core interaction model — all in production, with zero downtime.",
    outcomes: [
      { value: "−61%", label: "Onboarding drop-off reduced in first month" },
      { value: "4.7★", label: "App store rating after redesign (was 3.2)" },
      { value: "$2.4M", label: "ARR growth attributed to improved retention" },
    ],
    coverImage: "/images/work/website/1.png",
  },
  {
    id: "02",
    slug: "restful-sleep",
    title: "Restful Sleep",
    client: "Restful Sleep Co.",
    year: "2024",
    tags: ["Web Design", "Development"],
    category: "Website",
    services: ["UI Design", "Frontend Development", "CMS Integration"],
    role: "Full website design and development",
    color: "#0a0a0a",
    accent: "#FF3D00",
    cols: 6,
    video: "/video/case-study-2.mp4",
    description: "Clean, conversion-focused website for a natural sleep supplement brand — built to educate and sell.",
    challenge:
      "Nexus had outgrown their old site — it didn't reflect the quality of work they were producing. They needed something that could sell at a glance.",
    solution:
      "We stripped the site down to what mattered: the work and the people behind it. Fast, opinionated, and built to convert.",
    outcomes: [
      { value: "2.3×", label: "Increase in contact form submissions" },
      { value: "55%", label: "Reduction in page load time" },
      { value: "89%", label: "Client satisfaction score post-launch" },
    ],
    coverImage: "/images/work/website/2.png",
  },
  {
    id: "03",
    slug: "strong-hitch",
    title: "Strong Hitch",
    client: "Strong Hitch",
    year: "2023",
    tags: ["Web App", "UI/UX"],
    category: "Website",
    services: ["UX Research", "UI Design", "Prototyping"],
    role: "Product design and UX overhaul",
    color: "#0d0d1a",
    accent: "#cdff00",
    cols: 6,
    video: "/video/case-study-3.mp4",
    description: "Bold, service-focused website for a hitch installation and automotive accessories business.",
    challenge:
      "Users loved the core feature set but found the interface cluttered. Churn was highest in weeks two and three — right after the novelty wore off.",
    solution:
      "A focused UX audit followed by a full interface redesign centered on reducing cognitive load and surfacing the right actions at the right time.",
    outcomes: [
      { value: "−44%", label: "Week-2 churn after redesign" },
      { value: "3.9×", label: "Feature discovery rate increase" },
      { value: "4.5★", label: "G2 rating after launch" },
    ],
    coverImage: "/images/work/website/3.png",
  },
  {
    id: "04",
    slug: "btc-platform",
    title: "BTC Platform",
    client: "BTC Platform",
    year: "2023",
    tags: ["Ecommerce", "Web Design"],
    category: "Website",
    services: ["Web Design", "Shopify Development", "CRO"],
    role: "Ecommerce redesign and conversion optimisation",
    color: "#1a0d0d",
    accent: "#FF3D00",
    cols: 12,
    video: "/video/case-study-4.mp4",
    description: "Futuristic web platform synchronizing AI and blockchain networks — built for the next wave of crypto.",
    challenge:
      "High traffic, low conversions. The store was attracting visitors but losing them at the product page. Average order value was also below industry benchmarks.",
    solution:
      "Redesigned product pages around trust signals and speed. Simplified checkout to three steps. Added a cross-sell system that felt like a recommendation, not an upsell.",
    outcomes: [
      { value: "+38%", label: "Conversion rate improvement in 60 days" },
      { value: "1.9×", label: "Average order value increase" },
      { value: "22%", label: "Cart abandonment reduction" },
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
    tags: ["Brand Identity", "Visual Design"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Logo Design"],
    role: "End-to-end brand identity",
    color: "#0d0820",
    accent: "#cdff00",
    cols: 7,
    video: "/video/case-study-1.mp4",
    description: "Elegant brand identity and website for a premium women's fashion label focused on sophistication.",
    challenge:
      "Aurelia needed to move upstream — from a mid-market label to a premium fashion house — without alienating their existing audience.",
    solution:
      "We built the identity around restraint. A custom wordmark, a tightly controlled palette, and a brand system where every touchpoint felt inevitable.",
    outcomes: [
      { value: "3.2×", label: "Increase in average order value post-rebrand" },
      { value: "68%", label: "Growth in direct traffic within 90 days" },
      { value: "4.1s", label: "Average session duration on new site" },
    ],
    coverImage: "/images/work/branding/1.png",
  },
  {
    id: "06",
    slug: "coffeebee",
    title: "CoffeeBee",
    client: "CoffeeBee",
    year: "2024",
    tags: ["Brand Identity", "Packaging"],
    category: "Branding",
    services: ["Brand Strategy", "Packaging Design", "Visual Identity"],
    role: "Brand identity and packaging system",
    color: "#0d1a0a",
    accent: "#cdff00",
    cols: 5,
    video: "/video/case-study-2.mp4",
    description: "Full brand identity for a coffee brand — logo, packaging, app icon, and stationery in signature green.",
    challenge:
      "Grove needed to stand out on crowded supermarket shelves while communicating authenticity — not the performative kind found on every organic brand.",
    solution:
      "An identity rooted in honest craft: hand-drawn illustration, earthy palette, and packaging that felt like it came from a real place rather than a marketing brief.",
    outcomes: [
      { value: "42%", label: "Increase in retail shelf pick-up rate" },
      { value: "3 chains", label: "New retail partnerships post-rebrand" },
      { value: "2.1×", label: "Online sales growth in 6 months" },
    ],
    coverImage: "/images/work/branding/2.png",
  },
  {
    id: "07",
    slug: "structura",
    title: "Structura",
    client: "Structura",
    year: "2023",
    tags: ["Brand Identity", "Motion"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Motion Guidelines"],
    role: "Full brand and motion identity",
    color: "#0a0a14",
    accent: "#FF3D00",
    cols: 6,
    video: "/video/case-study-3.mp4",
    description: "Strong, industrial brand identity for a construction company — built to command trust on site and online.",
    challenge:
      "Koda backed bold startups but had a brand that looked like every other VC firm — safe, forgettable, and indistinguishable from the competition.",
    solution:
      "A bold, kinetic identity system built around the idea of momentum. The logo animates. The colour is unapologetic. The tone is direct.",
    outcomes: [
      { value: "5×", label: "Increase in inbound pitch deck submissions" },
      { value: "12", label: "Press features in first quarter post-launch" },
      { value: "91%", label: "Brand recall in founder survey" },
    ],
    coverImage: "/images/work/branding/3.png",
  },
  {
    id: "08",
    slug: "brand-studio",
    title: "Brand Studio",
    client: "Brand Studio",
    year: "2023",
    tags: ["Brand Identity", "Print"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Print Collateral"],
    role: "Brand identity and print system",
    color: "#14100d",
    accent: "#cdff00",
    cols: 6,
    video: "/video/case-study-4.mp4",
    description: "Sleek brand presentation system for agencies to showcase client work — clean, minimal, and impressive.",
    challenge:
      "Haven offered genuinely transformative care but communicated it with generic wellness clichés — pastel colours, vague promises, stock photography.",
    solution:
      "We replaced the noise with clarity. A refined typographic identity, a palette pulled from natural materials, and brand language that respected the intelligence of their clients.",
    outcomes: [
      { value: "2.6×", label: "New patient enquiries after rebrand" },
      { value: "78%", label: "Referral rate increase year-on-year" },
      { value: "4.9★", label: "Google rating maintained post-launch" },
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
    tags: ["Social Media", "Content Strategy"],
    category: "Social Media",
    services: ["Content Strategy", "Social Media Management", "Design"],
    role: "Social media strategy and content production",
    color: "#0d1a0d",
    accent: "#FF3D00",
    cols: 5,
    video: "/video/case-study-1.mp4",
    description: "Consistent social media content for a fashion brand — new arrivals, style edits, and elevated visuals.",
    challenge:
      "Velo had exceptional work but no consistent social presence. Their feed looked like an afterthought — irregular posts, inconsistent visuals, zero engagement strategy.",
    solution:
      "We built a content system: templates, a posting cadence, and a tone of voice that matched the quality of their actual work. Scheduled six weeks ahead, always.",
    outcomes: [
      { value: "2.8×", label: "Increase in qualified inbound leads" },
      { value: "91%", label: "Reduction in bounce rate from social traffic" },
      { value: "14k", label: "New followers in first quarter" },
    ],
    coverImage: "/images/work/smm/1.png",
  },
  {
    id: "10",
    slug: "super-auto",
    title: "Super Auto",
    client: "Super Auto",
    year: "2024",
    tags: ["Social Media", "Reels", "Content"],
    category: "Social Media",
    services: ["Instagram Management", "Reels Production", "Influencer Outreach"],
    role: "Full Instagram management and growth",
    color: "#1a0d14",
    accent: "#cdff00",
    cols: 7,
    video: "/video/case-study-2.mp4",
    description: "High-impact social media posts for an auto repair shop — professional, urgent, and built to convert.",
    challenge:
      "Bloom had a loyal but small following. Their content was polished but static — no video, no personality, no reason to share.",
    solution:
      "We introduced a reels-first strategy, built a content calendar around product drops and seasonal hooks, and brought in a curated set of micro-influencers whose audiences actually matched the customer profile.",
    outcomes: [
      { value: "4.4×", label: "Follower growth in 6 months" },
      { value: "18%", label: "Average engagement rate on reels" },
      { value: "35%", label: "Revenue attributed to social in Q3" },
    ],
    coverImage: "/images/work/smm/2.png",
  },
  {
    id: "11",
    slug: "shoes-hub",
    title: "Shoes Hub",
    client: "Shoes Hub",
    year: "2023",
    tags: ["Social Media", "Community"],
    category: "Social Media",
    services: ["Social Strategy", "Community Management", "Paid Social"],
    role: "Social strategy and paid social campaigns",
    color: "#0a0d0a",
    accent: "#FF3D00",
    cols: 6,
    video: "/video/case-study-3.mp4",
    description: "Energetic social content for a footwear brand — product launches, new arrivals, and scroll-stopping ads.",
    challenge:
      "Forge had strong offline word-of-mouth but almost no online presence. They were losing potential members who couldn't find them — or found them and saw an inactive page.",
    solution:
      "Organic content strategy to build community, paired with targeted paid campaigns during peak acquisition windows (January, September). Both channels reinforced each other.",
    outcomes: [
      { value: "3.1×", label: "New membership sign-ups via social" },
      { value: "£4.20", label: "Cost per lead via paid social" },
      { value: "22k", label: "Organic reach per post (avg)" },
    ],
    coverImage: "/images/work/smm/3.png",
  },
  {
    id: "12",
    slug: "burger-bite",
    title: "Burger Bite",
    client: "Burger Bite",
    year: "2023",
    tags: ["Social Media", "Photography"],
    category: "Social Media",
    services: ["Social Media Management", "Photography Direction", "Copywriting"],
    role: "Social presence and content direction",
    color: "#14100a",
    accent: "#cdff00",
    cols: 6,
    video: "/video/case-study-4.mp4",
    description: "Mouth-watering social media content for a burger brand — bold visuals designed to drive foot traffic.",
    challenge:
      "Draft made exceptional coffee but photographed it like every other café. Their feed was indistinguishable from ten competitors within a five-mile radius.",
    solution:
      "We developed a distinct visual language — moody, tactile, unhurried — and trained their in-house team to produce it consistently. Plus a copywriting style that talked about coffee without sounding like a barista manual.",
    outcomes: [
      { value: "5.2×", label: "Increase in footfall attributed to Instagram" },
      { value: "8.7%", label: "Average engagement rate (industry avg: 1.2%)" },
      { value: "3", label: "Wholesale partnerships from DM enquiries" },
    ],
    coverImage: "/images/work/smm/4.png",
  },
];
