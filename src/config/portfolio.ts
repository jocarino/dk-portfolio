export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    avatar?: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    behance?: string;
    dribbble?: string;
    github?: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    featured: boolean;
    link?: string;
    github?: string;
  }[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
    current?: boolean;
  }[];
}

// Default skeleton content - easily customizable
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Damola Kevwe",
    title: "Creative Designer",
    subtitle: "Crafting Digital Experiences",
    description:
      "I'm a passionate designer with 5+ years of experience creating beautiful, functional digital experiences. I specialize in UI/UX design, branding, and creative direction.",
    location: "London, UK",
    email: "damolaleye99.com",
    website: "www.damolakevwe.com",
  },
  social: {
    linkedin: "https://linkedin.com/in/damola-kevwe-29b10279",
    // behance: "https://behance.net/alexdesigner",
    // dribbble: "https://dribbble.com/alexdesigner",
    instagram: "https://instagram.com/damolaleye",
  },
  skills: [
    {
      category: "Design Tools",
      items: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "Framer"],
    },
    {
      category: "Design Skills",
      items: [
        "UI/UX Design",
        "Visual Design",
        "Branding",
        // "Typography",
        // "Color Theory",
      ],
    },
    {
      category: "Development",
      items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Webflow"],
    },
    {
      category: "Other",
      items: [
        "Design Systems",
        "Prototyping",
        "User Research",
        "Project Management",
      ],
    },
  ],
  projects: [
    {
      id: "ecommerce-app",
      title: "E-Commerce Mobile App",
      description:
        "Complete redesign of a fashion e-commerce mobile app with focus on user experience and conversion optimization.",
      category: "Mobile Design",
      image: "/projects/ecommerce-app.jpg",
      tags: ["UI/UX", "Mobile", "E-commerce", "Figma"],
      featured: true,
      link: "https://dribbble.com/shots/ecommerce-app",
    },
    {
      id: "saas-dashboard",
      title: "SaaS Analytics Dashboard",
      description:
        "Modern dashboard design for a data analytics platform with complex data visualization and intuitive navigation.",
      category: "Web Design",
      image: "/projects/saas-dashboard.jpg",
      tags: ["Dashboard", "Data Viz", "SaaS", "Web"],
      featured: true,
      link: "https://dribbble.com/shots/saas-dashboard",
    },
    {
      id: "brand-identity",
      title: "Tech Startup Branding",
      description:
        "Complete brand identity design for an AI startup including logo, brand guidelines, and marketing materials.",
      category: "Branding",
      image: "/projects/brand-identity.jpg",
      tags: ["Branding", "Logo", "Identity", "Startup"],
      featured: true,
      link: "https://behance.net/gallery/brand-identity",
    },
    {
      id: "wellness-app",
      title: "Wellness & Meditation App",
      description:
        "Calming and intuitive design for a meditation and wellness app focused on mindfulness and user wellbeing.",
      category: "Mobile Design",
      image: "/projects/wellness-app.jpg",
      tags: ["Mobile", "Wellness", "UI/UX", "Meditation"],
      featured: false,
      link: "https://dribbble.com/shots/wellness-app",
    },
    {
      id: "portfolio-website",
      title: "Photographer Portfolio",
      description:
        "Clean and elegant portfolio website for a professional photographer showcasing their work in various categories.",
      category: "Web Design",
      image: "/projects/portfolio-website.jpg",
      tags: ["Portfolio", "Photography", "Web", "Minimal"],
      featured: false,
      link: "https://example.com/photographer-portfolio",
    },
    {
      id: "restaurant-branding",
      title: "Restaurant Brand Identity",
      description:
        "Modern and appetizing brand identity for a farm-to-table restaurant including menus, signage, and digital assets.",
      category: "Branding",
      image: "/projects/restaurant-branding.jpg",
      tags: ["Branding", "Restaurant", "Print", "Digital"],
      featured: false,
      link: "https://behance.net/gallery/restaurant-branding",
    },
  ],
  experience: [
    {
      company: "Design Studio Co.",
      position: "Senior UI/UX Designer",
      period: "2022 - Present",
      description:
        "Lead designer for multiple client projects, specializing in SaaS platforms and mobile applications. Managed design systems and mentored junior designers.",
      current: true,
    },
    {
      company: "Tech Startup Inc.",
      position: "Product Designer",
      period: "2020 - 2022",
      description:
        "Designed user interfaces for B2B software products. Collaborated closely with developers and product managers to create user-centered designs.",
    },
    {
      company: "Creative Agency",
      position: "Visual Designer",
      period: "2019 - 2020",
      description:
        "Created visual designs for various brands including logos, marketing materials, and digital campaigns.",
    },
  ],
};
