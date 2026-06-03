export const SITE_URL = "https://outrbuzz.com";

export type NavItem = {
  label: string;
  href: string;
};

export type ContactChannel = {
  label: string;
  href: string;
};

export type Office = {
  city: string;
  address: string;
  email: string;
  phone: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const OFFICES: Office[] = [
  {
    city: "Lahore",
    address: "DHA Phase 6, Lahore, Pakistan",
    email: "hello@outrbuzz.com",
    phone: "+92 300 0000000",
  },
  {
    city: "Dubai",
    address: "DIFC, Dubai, UAE",
    email: "dubai@outrbuzz.com",
    phone: "+971 50 0000000",
  },
  {
    city: "Remote",
    address: "Working globally, async-first",
    email: "work@outrbuzz.com",
    phone: "By appointment",
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: "Email", href: "mailto:hello@outrbuzz.com" },
  { label: "Lahore", href: "tel:+923000000000" },
  { label: "Dubai", href: "tel:+971500000000" },
  { label: "Brief Form", href: "/contact#contact" },
];
