export type Stat = {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  color: string;
};

export const stats: Stat[] = [
  {
    value: 3,
    suffix: "x",
    label: "Average website engagement boost",
    desc: "Clients see 3x more time-on-site after working with us.",
    color: "var(--electric)",
  },
  {
    value: 100,
    suffix: "%",
    label: "Custom-built interfaces",
    desc: "Zero templates. Every pixel is intentional and purpose-built.",
    color: "var(--acid)",
  },
  {
    value: 93,
    suffix: "%",
    label: "Client retention rate",
    desc: "Because great work makes people come back.",
    color: "var(--electric)",
  },
  {
    value: 50,
    suffix: "+",
    label: "Projects shipped on time",
    desc: "We don't just promise deadlines — we ship before them.",
    color: "var(--acid)",
  },
];
