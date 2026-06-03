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
  {
    id: "01",
    slug: "aurelia",
    title: "Aurelia",
    client: "Aurelia Fashion House",
    year: "2024",
    tags: ["Brand Identity", "UI/UX", "Web"],
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "Web Design", "Development"],
    role: "End-to-end brand and digital experience",
    color: "#0d0820",
    accent: "#CDFF00",
    cols: 7,
    video: "/video/case-study-1.mp4",
    description: "Full brand identity and web experience for a luxury fashion label.",
    challenge:
      "Aurelia needed to move upstream — from a mid-market label to a premium fashion house — without alienating their existing audience or looking like they were trying too hard. The visual language had to feel earned, not borrowed.",
    solution:
      "We built the identity around restraint. A custom wordmark, a tightly controlled palette of near-black, ivory and a single warm accent, and a web experience where negative space does more work than content. Every decision was filtered through a single question: does this feel inevitable?",
    outcomes: [
      { value: "3.2×", label: "Increase in average order value post-rebrand" },
      { value: "68%", label: "Growth in direct traffic within 90 days" },
      { value: "4.1s", label: "Average session duration on new site" },
    ],
    coverImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=85",
  },
  {
    id: "02",
    slug: "velo-studio",
    title: "Velo Studio",
    client: "Velo Creative Studio",
    year: "2024",
    tags: ["UI/UX Design", "Motion"],
    category: "Social Media",
    services: ["Design System", "Motion Design", "UI/UX"],
    role: "UI design system and motion direction",
    color: "#0d1a0d",
    accent: "#FF3D00",
    cols: 5,
    video: "/video/case-study-2.mp4",
    description: "Motion-first UI design system for a creative production studio.",
    challenge:
      "Velo had a strong reel but a website that looked like everyone else's agency site. They needed a digital presence that felt as alive as their work — something that moved like it meant it, not just for the sake of animation.",
    solution:
      "We designed a system where motion is structural, not decorative. Every transition carries information. Every hover state has weight. The result is an interface that communicates craft without a single line of marketing copy doing the heavy lifting.",
    outcomes: [
      { value: "2.8×", label: "Increase in qualified inbound leads" },
      { value: "91%", label: "Reduction in bounce rate from portfolio section" },
      { value: "14", label: "New client projects attributed to site relaunch" },
    ],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=85",
  },
  {
    id: "03",
    slug: "monolith",
    title: "Monolith",
    client: "Monolith SaaS Inc.",
    year: "2023",
    tags: ["Development", "Web App", "Product Strategy"],
    category: "Website",
    services: ["Product Strategy", "UX Research", "UI Design", "Full-stack Development"],
    role: "End-to-end product redesign and development",
    color: "#0d1520",
    accent: "#CDFF00",
    cols: 12,
    video: "/video/case-study-3.mp4",
    description: "End-to-end product redesign and development for a SaaS platform.",
    challenge:
      "Monolith had built a powerful analytics platform that nobody could figure out how to use. Retention was suffering. Onboarding drop-off was at 73%. The product worked — the experience didn't. They had six months before the next funding round.",
    solution:
      "We embedded with their team for eight weeks. Ran structured user research with 24 customers across three tiers. Rebuilt information architecture from scratch, then designed and shipped a new onboarding flow, dashboard, and core interaction model — all in production, with zero downtime.",
    outcomes: [
      { value: "−61%", label: "Onboarding drop-off reduced in first month" },
      { value: "4.7★", label: "App store rating after redesign (was 3.2)" },
      { value: "$2.4M", label: "ARR growth attributed to improved retention" },
    ],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
  },
];
