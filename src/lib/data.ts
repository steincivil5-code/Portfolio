import type {
  Experience,
  NavSection,
  Project,
  SEOConfig,
  Stat,
} from "@/types";

export const personalInfo = {
  name: "Arthur Vega",
  title: "Senior AI Product Engineer",
  tagline:
    "Building intelligent products with AI, software engineering, and product thinking.",
  headline:
    "Building Intelligent Products With AI, Software Engineering, and Product Thinking",
  subheadline:
    "I design and build AI-powered applications, intelligent agents, and scalable software systems that solve real business problems.",
  bio: `I am a Senior AI Product Engineer focused on turning advanced technology into practical products. My work combines LLM applications, AI agents, full-stack development, and cloud architecture to create systems that are reliable, scalable, and valuable to users.

I enjoy solving complex engineering challenges and helping organizations move from ideas and experiments to production-ready AI solutions.`,
  coreMessage:
    "I build intelligent software products that connect advanced AI technology with real business impact.",
};

export const contactInfo = {
  email: "hello@arthurvega.dev",
  location: "San Francisco Bay Area",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/arthurvega",
      username: "arthurvega",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/arthurvega",
      username: "arthurvega",
      icon: "github",
    },
  ],
};

export const navSections: NavSection[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "expertise", label: "Expertise", href: "#expertise" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "approach", label: "Approach", href: "#approach" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "EHR Integrations", value: "80+" },
  { label: "Years Building", value: "8+" },
  { label: "AI Products Shipped", value: "12+" },
  { label: "Cloud Platforms", value: "AWS · GCP" },
];

export const services = [
  {
    title: "AI Product Development",
    description:
      "Build intelligent applications using modern AI technologies.",
    examples: [
      "LLM-powered applications",
      "AI assistants",
      "AI agents",
      "Conversational AI systems",
      "Automation platforms",
    ],
    icon: "brain",
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "Create complete software products from frontend experience to backend infrastructure.",
    examples: [
      "SaaS applications",
      "MVP development",
      "Enterprise platforms",
      "API-driven products",
    ],
    icon: "layers",
  },
  {
    title: "AI Architecture Consulting",
    description: "Help teams design scalable AI systems.",
    examples: [
      "AI system architecture",
      "Cloud deployment strategy",
      "Technical planning",
      "Product engineering guidance",
    ],
    icon: "compass",
  },
];

export const expertiseCategories = [
  {
    name: "AI Engineering",
    skills: [
      "LLM Applications",
      "AI Agents",
      "Conversational AI",
      "RAG Systems",
      "AI Automation",
    ],
    color: "from-violet-500/20 to-indigo-500/10",
  },
  {
    name: "Product Engineering",
    skills: [
      "SaaS Platforms",
      "Full-Stack Applications",
      "API Development",
      "Enterprise Software",
    ],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "Cloud Engineering",
    skills: ["AWS", "Google Cloud Platform", "Kubernetes", "Distributed Systems"],
    color: "from-emerald-500/20 to-teal-500/10",
  },
];

export const projects: Project[] = [
  {
    id: "healthcare-voice",
    title: "AI Healthcare Voice Agent Platform",
    description:
      "An AI-powered conversational voice platform integrated with healthcare EHR systems.",
    longDescription:
      "A conversational AI platform designed to automate healthcare communication workflows. Healthcare organizations needed more efficient communication systems that could integrate with existing healthcare infrastructure.",
    problem:
      "Healthcare organizations needed more efficient communication systems that could integrate with existing healthcare infrastructure.",
    solution:
      "Designed and developed an AI-powered voice platform using conversational AI technologies and enterprise integrations.",
    architecture: [
      "LLM-powered conversation orchestration layer",
      "Healthcare EHR integration middleware",
      "Scalable cloud-native backend services",
      "Real-time voice processing pipeline",
    ],
    technologies: [
      "LLMs",
      "Conversational AI",
      "Python",
      "NestJS",
      "AWS",
      "Kubernetes",
    ],
    category: "AI/ML Application",
    features: [
      "LLM-powered conversations",
      "Healthcare system integrations",
      "Scalable backend architecture",
      "Cloud-based deployment",
    ],
    status: "completed",
    startDate: "2023",
    highlights: [
      "Integrated with 80+ healthcare EHR systems",
      "Supported workflow automation",
      "Enabled scalable AI-driven communication",
    ],
    impact: "Integrated with 80+ healthcare EHR systems",
    imageUrl: undefined,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer II",
    company: "Google",
    location: "Mountain View, CA",
    startDate: "2022",
    description:
      "Large-scale software systems, production engineering, and scalable architecture.",
    achievements: [
      "Built and maintained production systems at scale",
      "Contributed to scalable architecture and reliability initiatives",
      "Collaborated across product and infrastructure teams",
    ],
    technologies: ["Distributed Systems", "Production Engineering", "Cloud"],
    type: "full-time",
  },
  {
    id: "2",
    title: "Computer Scientist",
    company: "Adobe",
    location: "San Jose, CA",
    startDate: "2020",
    endDate: "2022",
    description:
      "Enterprise software development and AI-related engineering initiatives.",
    achievements: [
      "Developed enterprise-grade software features",
      "Contributed to AI-related engineering initiatives",
      "Shipped production features with cross-functional teams",
    ],
    technologies: ["Enterprise Software", "AI Engineering", "TypeScript"],
    type: "full-time",
  },
  {
    id: "3",
    title: "Founding Full-Stack AI Engineer",
    company: "Prosper AI",
    location: "Remote",
    startDate: "2019",
    endDate: "2020",
    description: "Building AI products from concept to production.",
    achievements: [
      "Architected full-stack AI product from zero to launch",
      "Built LLM-powered features and agent workflows",
      "Established engineering foundations for a growing startup",
    ],
    technologies: ["LLMs", "React", "Python", "AWS"],
    type: "full-time",
  },
  {
    id: "4",
    title: "Full-Stack AI/ML Developer",
    company: "Sapience AI",
    location: "Remote",
    startDate: "2017",
    endDate: "2019",
    description:
      "Developing AI-powered applications and modern software systems.",
    achievements: [
      "Built AI-powered applications end-to-end",
      "Developed ML integration pipelines",
      "Delivered production-ready software for clients",
    ],
    technologies: ["Machine Learning", "Full-Stack", "APIs"],
    type: "full-time",
  },
];

export const approachSteps = [
  {
    step: 1,
    title: "Understand the business problem",
    description:
      "Start with the real-world challenge — who it affects, what success looks like, and where AI creates genuine leverage.",
  },
  {
    step: 2,
    title: "Design scalable architecture",
    description:
      "Define system boundaries, data flows, and integration points before writing code. Plan for growth from day one.",
  },
  {
    step: 3,
    title: "Build intelligent systems",
    description:
      "Ship AI features with rigorous engineering — LLM orchestration, agent workflows, and reliable backend services.",
  },
  {
    step: 4,
    title: "Deploy production software",
    description:
      "Launch with CI/CD, observability, and cloud-native infrastructure. Production readiness is non-negotiable.",
  },
  {
    step: 5,
    title: "Improve based on real-world feedback",
    description:
      "Measure impact, iterate on user feedback, and continuously refine both the product and the AI systems behind it.",
  },
];

export const technologyGroups = [
  {
    name: "Artificial Intelligence",
    items: [
      "LLMs",
      "AI Agents",
      "Conversational AI",
      "Machine Learning Systems",
    ],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Backend",
    items: ["Python", "NestJS", "APIs", "Distributed Systems"],
  },
  {
    name: "Cloud",
    items: ["AWS", "Google Cloud Platform", "Kubernetes"],
  },
];

export const featuredTechnologies = [
  "LLMs",
  "AI Agents",
  "Next.js",
  "Python",
  "AWS",
  "Kubernetes",
  "RAG",
  "TypeScript",
];

export const seoConfig: SEOConfig = {
  title: "Arthur Vega — Senior AI Product Engineer",
  description:
    "Senior AI Product Engineer specializing in LLM applications, AI agents, full-stack systems, and scalable cloud platforms. Building intelligent products that solve real business problems.",
  keywords: [
    "AI Product Engineer",
    "LLM Applications",
    "AI Agents",
    "Full-Stack Engineer",
    "SaaS",
    "Cloud Architecture",
    "Arthur Vega",
  ],
  ogImage: "/og.png",
  canonicalUrl: "https://arthurvega.dev",
};

export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.1 } },
  },
};
