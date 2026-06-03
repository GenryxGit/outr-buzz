export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Outr Buzz took our brand from forgettable to iconic. The design quality and speed of delivery were unmatched.",
    name: "Sarah Ahmed",
    role: "CEO",
    company: "Aurelia Co.",
  },
  {
    quote: "Finally an agency that actually gets it. No fluff, no templates — just sharp work that converts.",
    name: "James Rivera",
    role: "Head of Product",
    company: "Velo Studio",
  },
  {
    quote: "The team at Outr Buzz shipped our entire product in 6 weeks. The code quality was impressive.",
    name: "Mika Tanaka",
    role: "Founder",
    company: "Monolith",
  },
  {
    quote: "Our engagement tripled after the redesign. Best investment we've made for our brand.",
    name: "Omar Hassan",
    role: "CMO",
    company: "Pulse Brand",
  },
  {
    quote: "Rare to find a studio that handles strategy, design, and dev at this level. Absolute pros.",
    name: "Priya Singh",
    role: "Director",
    company: "Forma Labs",
  },
];
