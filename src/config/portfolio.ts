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
    categories: string[];
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
    title: "Visual Designer",
    subtitle:
      "I design & create engaging journeys that build meaningful experiences",
    description:
      "I’m a passionate designer with 5+ years of experience across digital and visual design, with a drive for blending creativity and function to bring ideas to life.",
    location: "London, UK",
    email: "damolakevwe.com",
    website: "www.damolakevwe.com",
  },
  social: {
    linkedin: "https://linkedin.com/in/damola-kevwe-29b10279",
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
      id: "soak-sleep-brand-system",
      title: "Soak & Sleep Design System & Campaigns",
      description:
        "Lead designer creating cohesive digital and print marketing visuals across seasonal product launches. Developed and managed design systems to maintain brand consistency across all customer touchpoints.",
      categories: ["Brand & Marketing Design", "Design Systems"],
      image: "/projects/soak-sleep-brand.jpg",
      tags: [
        "Design Systems",
        "Brand Identity",
        "Print Design",
        "Digital Marketing",
      ],
      featured: true,
      // link: "#",
    },
    {
      id: "google-ux-certification",
      title: "Google UX Design Certification Projects",
      description:
        "Completed hands-on UX projects including user research, wireframing, prototyping, and usability testing. Designed responsive, user-centered digital experiences from concept to high-fidelity prototype.",
      categories: ["UX Design", "User Research"],
      image: "/projects/google-ux-projects.jpg",
      tags: ["UX Research", "Wireframing", "Prototyping", "Usability Testing"],
      featured: true,
      // link: "#",
    },
    {
      id: "bupa-service-optimization",
      title: "Bupa Service Experience Enhancement",
      description:
        "Improved customer service processes through systematic feedback analysis and clear communication strategies. Enhanced service satisfaction while ensuring compliance standards across member interactions.",
      categories: ["Service Design", "Process Improvement", "Brand Design"],
      image: "/projects/bupa-service.jpg",
      tags: [
        "Process Improvement",
        "Customer Experience",
        "Service Design",
        "Communication",
      ],
      featured: false,
      // link: "#",
    },
    {
      id: "freelance-brand-identity",
      title: "Small Business Brand & Visual Identity",
      description:
        "Designed comprehensive branding assets, marketing materials, and social content for clients including Of a Kind Creatives, Latoja Mart, and Buganow. Focused on visual storytelling and consistent brand identity.",
      categories: ["Brand Design", "Visual Identity", "Marketing Design"],
      image: "/projects/freelance-branding.jpg",
      tags: [
        "Brand Identity",
        "Social Media",
        "Marketing Design",
        "Visual Storytelling",
      ],
      featured: true,
      // link: "#",
    },
  ],
  experience: [
    {
      company: "Soak & Sleep",
      position: "Graphic Designer",
      period: "2024 - Present",
      description:
        "Lead designer for digital and print marketing. Design marketing visuals, manage design systems, and support brand consistency across campaigns and seasonal product launches.",
      current: true,
    },
    {
      company: "Grow with Google",
      position: "Google UX Design Professional Certification",
      period: "2024",
      description:
        "Completed hands-on UX training in user research, wireframing, prototyping, and usability testing to design responsive, user-centered digital experiences.",
      current: false,
    },
    {
      company: "Bupa",
      position: "Member Service Advisor",
      period: "2023 - 2024",
      description:
        "Delivered customer support, improved processes through feedback, ensured compliance, and maintained clear communication to enhance service experience and satisfaction.",
      current: false,
    },
    {
      company: "Freelance & Contract Projects",
      position: "Graphic & Visual Designer",
      period: "2019 - 2021",
      description:
        "Designed branding assets, marketing materials, and social content for small businesses including Of a Kind Creatives, Latoja Mart, and Buganow. Focused on visual identity, layout design, and creative storytelling.",
      current: false,
    },
  ],
};
