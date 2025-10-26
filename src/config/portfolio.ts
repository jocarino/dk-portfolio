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
    email: "damolakevwe@gmail.com",
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
      id: "creative-adult",
      title: "Creative Adult",
      description:
        "Creative Adult was a podcast and platform I developed to celebrate the honest, sometimes chaotic journey of creativity. My goal was to design a visual identity that felt bold, youthful, and full of personality - something that could speak to artists, designers, and makers navigating the ups and downs of creative life. I created a full brand system - from the logo and colour palette to typography, podcast covers, and social media templates. I wanted every visual element to feel expressive but cohesive, so I worked iteratively in Figma and Illustrator, refining layouts and testing colour directions. I also designed motion graphics in After Effects for the podcast's video intros and social content. After it launched, the brand's consistent visual identity helped build a recognisable presence across Spotify and Instagram, increasing engagement by over 30%. The project reinforced my belief that design storytelling works best when it balances authenticity with structure.",
      categories: ["Graphic Design"],
      image: "/images/creative-adult.jpg",
      tags: [
        "Adobe Illustrator",
        "Figma",
        "Photoshop",
        "Adobe After Effects",
        "Brand identity",
        "Visual identity design",
        "Layout, composition & visual hierarchy",
        "Typography & type systems",
        "Motion graphics",
        "Animation",
        "Conceptual design",
        "Image manipulation",
        "Creative direction",
        "Storyboarding",
      ],
      featured: true,
    },
    {
      id: "tache",
      title: "Tache",
      description:
        "Tache was a productivity app I designed to help users organise their day more intuitively. I wanted to create something that felt clean, minimal, and genuinely helpful - a tool that reduced mental clutter instead of adding to it. Using insights from existing research, I identified that users struggled with complex task apps that didn't align with their calendars. I started by mapping user flows and designing wireframes focused on simplicity. Through several testing rounds, I iterated on features like drag-and-drop scheduling, colour-coded categories, and adaptive reminders. The final prototype offered an effortless blend of structure and flexibility. During testing, users reported completing 20% more daily tasks and feeling more in control of their schedules. Tache taught me how to design for focus - how thoughtful design decisions can genuinely improve people's daily rhythm.",
      categories: ["UI/UX"],
      image: "/images/tache.jpg",
      tags: [
        "Adobe XD",
        "Illustrator",
        "Figma",
        "UX/UI design",
        "Interaction design",
        "Wireframing",
        "Prototyping",
        "Usability testing",
        "UX research",
        "Layout, composition & visual hierarchy",
        "Colour theory & colour correction",
        "Typography & type systems",
        "Conceptual design",
        "Storyboarding",
      ],
      featured: false,
    },
    {
      id: "photography",
      title: "Photography",
      description:
        "Photography has always been one of my most personal forms of storytelling. My work often explores emotion, place, and identity through a cinematic lens - using light, shadow, and colour to communicate feeling. I experimented with both portrait and environmental photography, capturing subtle details that reveal personality or atmosphere. In post-production, I used Lightroom and Photoshop to refine tone, depth, and balance, always aiming to preserve the authenticity of the moment. My photographs have been exhibited in Oxford and featured within my design projects, often shaping the visual language of campaigns and creative concepts. Photography keeps me grounded - it reminds me to see beyond design screens and stay inspired by real textures, people, and spaces.",
      categories: ["Storytelling"],
      image: "/images/photography.jpg",
      tags: [
        "Adobe Lightroom",
        "Photoshop",
        "Layout, composition & visual hierarchy",
        "Colour theory & colour correction",
        "Photo editing & retouching",
        "Conceptual design",
        "Exhibition / portfolio curation",
        "Creative direction",
        "Storyboarding",
      ],
      featured: false,
    },
    {
      id: "psychedelic-afrofuturism",
      title: "Psychedelic Afrofuturism",
      description:
        "Psychedelic Afrofuturism is one of my most experimental projects - a speculative reimagining of Manhattan through the lens of Afrofuturism and altered perception. The project merges architecture, digital art, and cultural symbolism to question how Black identity and technology can reshape our understanding of place and future. I created a series of digitally manipulated images and short video loops that transformed familiar cityscapes into vibrant, surreal landscapes filled with rhythm and movement. Using InDesign, I designed a fold-out map that guided viewers through this imagined world. The work culminated in a public exhibition at the Kendrew Quad Gallery in Oxford, where I curated large-format prints and projections to immerse viewers in the experience. The project received a distinction and sparked meaningful discussions about speculative design and cultural imagination.",
      categories: ["Storytelling", "Graphic Design"],
      image: "/images/psychedelic-afrofuturism.jpg",
      tags: [
        "Photoshop",
        "Premiere Pro",
        "InDesign",
        "Conceptual design",
        "Image manipulation",
        "Motion graphics",
        "Animation",
        "Layout, composition & visual hierarchy",
        "Exhibition / portfolio curation",
        "Creative direction",
        "Storyboarding",
      ],
      featured: true,
    },
    {
      id: "damolakevwe-portfolio",
      title: "DamolaKevwe.com",
      description:
        "I designed and built my personal portfolio site, DamolaKevwe.com, to showcase my multidisciplinary creative work in a way that felt both professional and personal. I wanted the site to tell a cohesive story - not just show finished projects, but also reflect how I think, create, and evolve as a designer. I started by mapping out the content structure and designing low-fidelity wireframes in Figma. I then developed high-fidelity prototypes, refining layout, navigation, and responsiveness before building the site. The visual identity - colours, typography, and interactions - is consistent with my broader design aesthetic: clean, balanced, and quietly expressive. After launch, I reviewed user analytics and feedback to make improvements to load speed, accessibility, and scroll flow. The result is a portfolio that feels alive - a reflection of how I approached design as an evolving conversation between storytelling, clarity, and emotion.",
      categories: ["Web Design"],
      image: "/images/damolakevwe-portfolio.jpg",
      tags: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "UX/UI design",
        "Interaction design",
        "Wireframing",
        "Prototyping",
        "Layout, composition & visual hierarchy",
        "Typography & type systems",
        "Design systems",
        "Accessibility",
        "Content design (print & digital)",
        "Conceptual design",
        "Creative direction",
        "Storyboarding",
      ],
      featured: false,
      link: "https://damolakevwe.com",
    },
    {
      id: "soak-and-sleep",
      title: "Soak&Sleep",
      description:
        "As a Graphic Designer at Soak&Sleep, I work on visual content across digital and print platforms, helping the brand tell its story to both B2C and wholesale audiences. My responsibilities include designing seasonal campaigns, promotional banners, email marketing assets, and creating rich imagery for e-commerce and print materials. I contributed to the migration from Magento to Shopify, ensuring the new site retained brand consistency and cohesive visual design. I also built campaign pages on Shopify, using HTML and CSS to improve layouts, hierarchy, and visual engagement. Beyond web design, I created illustrations and icons, edited and retouched product photography, and curated visuals for cohesive campaign storytelling. To support the creative process, I occasionally used AI-generated imagery, helping explore concepts and visual directions. The AI process complements my design decisions - but never replaces the designer's role in shaping concept, style, or execution. During my time at Soak&Sleep, I've combined technical skill with creative direction, producing polished campaigns that strengthen brand presence, engagement, and visual impact across multiple channels.",
      categories: ["Web Design", "Graphic Design"],
      image: "/images/soak-and-sleep.jpg",
      tags: [
        "Adobe Photoshop",
        "Illustrator",
        "InDesign",
        "Figma",
        "Adobe Lightroom",
        "Shopify",
        "Magento",
        "VS Code",
        "AI image generation tools",
        "Brand identity",
        "Visual identity design",
        "UX/UI design",
        "Interaction design",
        "Layout, composition & visual hierarchy",
        "Colour theory & colour correction",
        "Typography & type systems",
        "Illustration",
        "Iconography",
        "Photo editing & retouching",
        "Content design (print & digital)",
        "Email marketing design",
        "Front-end development",
        "Conceptual design",
        "AI-assisted concepting",
        "Creative direction",
        "Collaboration",
        "Storyboarding",
      ],
      featured: true,
    },
  ],
  experience: [
    {
      company: "Soak&Sleep",
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
