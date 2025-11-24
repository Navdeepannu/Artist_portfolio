export type Artwork = {
  title: string;
  medium: string;
  size: string;
  year: string;
  image: string;
};

export type ClassOffering = {
  title: string;
  description: string;
  cadence: string;
  icon: "palette" | "feather" | "sparkles";
};

export type Faq = {
  question: string;
  answer: string;
};

export const heroStats = [
  { label: "Collective exhibitions", value: "37" },
  { label: "Private collectors", value: "120+" },
  { label: "Years mentoring artists", value: "12" },
];

export const artworks: Artwork[] = [
  {
    title: "Sienna Dawn",
    medium: "Oil on raw linen",
    size: "92 × 122 cm",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "River Echoes",
    medium: "Pigment & plaster",
    size: "80 × 100 cm",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wildflower Silence",
    medium: "Oil & ink on canvas",
    size: "70 × 90 cm",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1462212210333-335063b676d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Midnight Archivist",
    medium: "Charcoal & oil glaze",
    size: "110 × 140 cm",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1475274220422-5f6834f64c81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Palm Reading",
    medium: "Oil on Belgian linen",
    size: "60 × 80 cm",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1465311440653-ba9b1d4f2a2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Terra Memoir",
    medium: "Textured impasto",
    size: "90 × 120 cm",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=1200&q=80",
  },
];

export const classes: ClassOffering[] = [
  {
    title: "Atelier Salon",
    description:
      "Intimate, critique-driven evenings with no more than six artists exploring layered oil techniques.",
    cadence: "Weekly · Lisbon studio",
    icon: "palette",
  },
  {
    title: "Private Mentorship",
    description:
      "Tailored guidance for emerging painters focusing on personal language, portfolio cohesion, and galleries.",
    cadence: "By appointment · Worldwide via video",
    icon: "feather",
  },
  {
    title: "Weekend Immersion",
    description:
      "Two-day intensive to experiment with abstract botanicals, mark-making, and mindful practice.",
    cadence: "Monthly · Coastal residencies",
    icon: "sparkles",
  },
];

export const faqs: Faq[] = [
  {
    question: "Do I need prior painting experience?",
    answer:
      "Not at all. Classes are structured around curiosity and process. Each session adapts to your level and goals.",
  },
  {
    question: "Are commissions currently open?",
    answer:
      "Yes. Bespoke works begin with a conversation about mood, palette, and scale. Lead times range from 6–10 weeks.",
  },
  {
    question: "Can I audit a class before booking?",
    answer:
      "You’re welcome to schedule a studio visit or join the first hour of a salon to see if the format resonates.",
  },
];
