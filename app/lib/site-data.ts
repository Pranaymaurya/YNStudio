import {
  CodeIcon,
  DribbbleIcon,
  LayersIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  PhoneIcon,
  SparkIcon,
  XIcon,
} from "@/app/components/icons";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services: {
  title: string;
  description: string;
  icon: IconType;
  offerings: string[];
}[] = [
  {
    title: "Social Media Management",
    description:
      "We build channel strategies, content systems, and community loops that keep your brand visible and commercially relevant.",
    icon: MegaphoneIcon,
    offerings: ["Content calendars", "Campaign reporting", "Community growth"],
  },
  {
    title: "App & Web Development",
    description:
      "From landing pages to full-scale product builds, we ship responsive digital experiences designed for conversion and speed.",
    icon: CodeIcon,
    offerings: ["Marketing websites", "Mobile-ready apps", "Performance optimization"],
  },
  {
    title: "SaaS Solutions",
    description:
      "We scope, design, and launch SaaS products with clear onboarding, automation, and revenue-minded product systems.",
    icon: LayersIcon,
    offerings: ["MVP architecture", "Subscription flows", "Product dashboards"],
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects launched" },
  { value: 30, suffix: "+", label: "Long-term clients" },
  { value: 92, suffix: "%", label: "Average retention" },
  { value: 14, suffix: "d", label: "Fastest MVP delivery" },
];

export const portfolioFilters = ["All", "Social", "Web", "SaaS"] as const;

export const portfolioItems = [
  {
    title: "Northstar Wellness",
    category: "Social",
    summary: "Campaign-led social media management that lifted engagement and lead quality across three markets.",
    results: "3.8x engagement growth",
    gradient: "from-[#1D1026] via-[#0D0E1C] to-[#0A0B14]",
  },
  {
    title: "Aster Studio",
    category: "Web",
    summary: "A premium portfolio website for a design consultancy with a streamlined inquiry flow and SEO-ready structure.",
    results: "41% more qualified inbound leads",
    gradient: "from-[#0E1730] via-[#0A0D1E] to-[#1A1226]",
  },
  {
    title: "PulseOps Cloud",
    category: "SaaS",
    summary: "An operations SaaS interface with role-based dashboards, usage tracking, and subscription workflows.",
    results: "Beta launched in 6 weeks",
    gradient: "from-[#0D1426] via-[#09101E] to-[#131B32]",
  },
  {
    title: "Maison Kira",
    category: "Social",
    summary: "Content production and social channel planning for a luxury retail label entering a new region.",
    results: "2.1x follower conversion rate",
    gradient: "from-[#1E0E28] via-[#0E0C1A] to-[#0A0B14]",
  },
  {
    title: "Terra Metrics",
    category: "Web",
    summary: "A conversion-first website for a climate tech startup built with modular storytelling and strong technical clarity.",
    results: "28% lower bounce rate",
    gradient: "from-[#0A1626] via-[#090D1B] to-[#122030]",
  },
  {
    title: "Dockflow CRM",
    category: "SaaS",
    summary: "Product design and front-end delivery for a lightweight CRM that reduced friction across onboarding and reporting.",
    results: "53% activation lift",
    gradient: "from-[#14162A] via-[#0C0D1C] to-[#1A1230]",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We map business goals, audience behavior, and delivery constraints before choosing the channel mix.",
  },
  {
    step: "02",
    title: "Design",
    description: "We translate strategy into content systems, product flows, and interface direction with clear milestones.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop the assets, site, app, or SaaS experience with a focus on speed, reliability, and polish.",
  },
  {
    step: "04",
    title: "Scale",
    description: "We iterate with live insights, improving conversion, retention, and channel performance over time.",
  },
];

export const testimonials = [
  {
    quote:
      "RP gave us a sharper digital presence and a calmer operating rhythm. They think like owners, not vendors.",
    name: "Ariana Blake",
    role: "Founder, Northstar Wellness",
  },
  {
    quote:
      "Their team translated a complex SaaS idea into a product customers could understand within minutes. That changed our launch trajectory.",
    name: "Marcus Vale",
    role: "CEO, PulseOps Cloud",
  },
  {
    quote:
      "We hired them for a website refresh and kept them for campaign execution. The quality and consistency have been unusually high.",
    name: "Nina Torres",
    role: "Marketing Director, Maison Kira",
  },
  {
    quote:
      "Every decision was tied back to conversion or retention. That level of discipline made the project genuinely production-ready.",
    name: "Owen Chen",
    role: "Product Lead, Dockflow CRM",
  },
];

export const team = [
  {
    name: "Maya Hart",
    role: "Strategy & Social Lead",
    initials: "MH",
    bio: "Builds editorial systems, campaign calendars, and measurable growth plans for modern brands.",
  },
  {
    name: "Julian Cross",
    role: "Product Engineer",
    initials: "JC",
    bio: "Turns requirements into responsive web experiences, app flows, and scalable front-end systems.",
  },
  {
    name: "Leena Shah",
    role: "SaaS Product Designer",
    initials: "LS",
    bio: "Designs SaaS journeys with clean interfaces, frictionless onboarding, and revenue-minded UX patterns.",
  },
];

export const socialLinks: { label: string; href: string; icon: IconType }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedinIcon },
  { label: "Dribbble", href: "https://dribbble.com", icon: DribbbleIcon },
  { label: "X", href: "https://x.com", icon: XIcon },
];

export const contactDetails: { label: string; value: string; href: string; icon: IconType }[] = [
  { label: "Email", value: "hello@RP.studio", href: "mailto:hello@RP.studio", icon: MailIcon },
  { label: "Phone", value: "+1 (415) 555-0148", href: "tel:+14155550148", icon: PhoneIcon },
  { label: "Location", value: "Working worldwide from Dubai and London", href: "#contact", icon: MapPinIcon },
];

export const highlights = [
  "Strategy-led delivery from day one",
  "High-touch communication with senior operators",
  "Systems designed for launch and iteration",
];

export const heroBadges = ["Social growth systems", "Premium digital products", "Lean SaaS execution"];

export const brandStatement = {
  name: "RP Studio",
  tagline: "Digital growth, built with clarity.",
  description:
    "A boutique agency for founders and modern brands that need sharp execution across content, product, and revenue systems.",
  sparkIcon: SparkIcon,
};