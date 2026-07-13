import type {
  EngineeringNote,
  EngineeringProject,
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
    "I build production AI systems - from LLM applications and autonomous agents to cloud platforms - helping companies turn AI experiments into reliable products.",
  bio: `I am a Senior AI Product Engineer focused on turning advanced technology into practical products. My work combines LLM applications, AI agents, full-stack development, and cloud architecture to create systems that are reliable, scalable, and valuable to users.

I enjoy solving complex engineering challenges and helping organizations move from ideas and experiments to production-ready AI solutions.`,
  coreMessage:
    "I build intelligent software products that connect advanced AI technology with real business impact.",
  availability:
    "Available for AI product engineering roles and consulting projects.",
};

export const contactInfo = {
  email: "steincivil5@gmail.com",
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
      url: "https://github.com/steincivil5-code",
      username: "steincivil5-code",
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
  { id: "engineering", label: "Engineering", href: "#engineering" },
  { id: "notes", label: "Notes", href: "#notes" },
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
      "Conversational voice AI that automates patient communication workflows across 80+ healthcare EHR systems.",
    longDescription:
      "A production conversational AI platform that connects voice agents to healthcare EHR systems, automating patient outreach, scheduling, and intake while keeping clinicians in control.",
    problem:
      "Healthcare providers struggled with manual patient communication workflows — scheduling, reminders, and intake consumed staff hours and created bottlenecks across fragmented EHR systems.",
    solution:
      "Designed and shipped an LLM-powered voice agent platform with enterprise EHR integrations, real-time conversation orchestration, and human-in-the-loop escalation for clinical safety.",
    architecture: [
      "Voice ingress → speech-to-text → LLM orchestration",
      "Tool-calling layer for EHR read/write actions",
      "Integration middleware for 80+ healthcare systems",
      "Observability, audit logs, and escalation workflows",
      "Kubernetes services on AWS for elastic scale",
    ],
    architectureFlow: [
      "Caller",
      "Voice Gateway",
      "LLM Agent",
      "EHR APIs",
      "Clinician Dashboard",
    ],
    technologies: [
      "GPT-4",
      "LangChain",
      "Python",
      "FastAPI",
      "NestJS",
      "PostgreSQL",
      "Kubernetes",
      "AWS",
    ],
    category: "AI/ML Application",
    features: [
      "LLM-powered conversations",
      "Healthcare EHR integrations",
      "Workflow automation",
      "Real-time voice processing",
      "Audit-ready logging",
    ],
    status: "completed",
    startDate: "2023",
    highlights: [
      "Integrated with 80+ healthcare EHR systems",
      "Reduced manual communication workload by ~60%",
      "Supported thousands of AI-driven conversations per day",
      "Enabled scalable workflow automation across clinics",
    ],
    metrics: [
      { label: "EHR systems", value: "80+" },
      { label: "Workload reduction", value: "~60%" },
      { label: "Daily conversations", value: "1000s" },
    ],
    impact: "80+ EHR integrations · ~60% less manual workload",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "enterprise-assistant",
    title: "Enterprise AI Assistant Platform",
    description:
      "Secure RAG-based assistant that gives employees grounded answers from internal knowledge bases and business systems.",
    longDescription:
      "An enterprise AI assistant that retrieves from company documents, tickets, and APIs — delivering accurate answers with citations, role-based access, and production monitoring.",
    problem:
      "Knowledge was scattered across wikis, tickets, and SaaS tools. Employees spent hours searching, and generic chatbots hallucinated answers without source grounding.",
    solution:
      "Built a retrieval-augmented generation platform with document ingestion pipelines, vector search, permission-aware retrieval, and a chat UI with citations and admin controls.",
    architecture: [
      "Document ingestion & chunking pipeline",
      "Embedding + vector store retrieval layer",
      "Permission-aware query orchestration",
      "Citation-backed LLM response generation",
      "Admin console for corpora and evaluation",
    ],
    architectureFlow: [
      "Docs & APIs",
      "Ingestion",
      "Vector DB",
      "RAG Agent",
      "Employee Chat",
    ],
    technologies: [
      "GPT-4",
      "RAG",
      "Pinecone",
      "Python",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "GCP",
    ],
    category: "AI/ML Application",
    features: [
      "PDF & wiki ingestion",
      "Vector retrieval pipeline",
      "Citation-backed answers",
      "RBAC & audit trails",
      "Evaluation harness",
    ],
    status: "completed",
    startDate: "2022",
    highlights: [
      "Cut average internal knowledge lookup time by ~70%",
      "Grounded responses with source citations for trust",
      "Deployed with role-based access across teams",
      "Added continuous evaluation for answer quality",
    ],
    metrics: [
      { label: "Lookup time", value: "-70%" },
      { label: "Citation coverage", value: "95%+" },
      { label: "Teams onboarded", value: "12+" },
    ],
    impact: "~70% faster knowledge lookup with cited answers",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ai-automation",
    title: "AI Automation & Agent Platform",
    description:
      "Multi-agent automation platform that turns operational workflows into reliable, observable AI-driven processes.",
    longDescription:
      "A platform for designing and running autonomous agents that call tools, maintain memory, and execute multi-step business workflows with human approval gates.",
    problem:
      "Ops and product teams relied on brittle scripts and manual handoffs. AI pilots stayed as demos because there was no production path for agents, tools, and observability.",
    solution:
      "Architected an agent framework with tool calling, short/long-term memory, workflow graphs, and deployment tooling — so teams could move from experiments to production automation.",
    architecture: [
      "Agent planner with tool-calling runtime",
      "Memory store for session + long-term context",
      "Workflow graph engine with approval gates",
      "Connector SDK for CRM, support, and billing APIs",
      "Tracing, retries, and failure recovery",
    ],
    architectureFlow: [
      "Trigger",
      "Planner Agent",
      "Tool Calls",
      "Memory",
      "Workflow Result",
    ],
    technologies: [
      "AI Agents",
      "LangChain",
      "Python",
      "NestJS",
      "Redis",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    category: "AI/ML Application",
    features: [
      "Multi-step agent reasoning",
      "Tool calling & connectors",
      "Memory & session state",
      "Human-in-the-loop approvals",
      "Production tracing",
    ],
    status: "completed",
    startDate: "2021",
    highlights: [
      "Automated repetitive operational workflows end-to-end",
      "Reduced manual ops tasks by ~50% for pilot customers",
      "Shipped reusable connectors for CRM and support stacks",
      "Added full observability for agent runs and failures",
    ],
    metrics: [
      { label: "Ops task reduction", value: "~50%" },
      { label: "Connectors shipped", value: "15+" },
      { label: "Agent run success", value: "99%+" },
    ],
    impact: "~50% fewer manual ops tasks via production agents",
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
      "Designed and shipped scalable distributed systems supporting enterprise workloads using cloud-native architecture.",
    achievements: [
      "Designed and shipped scalable distributed systems supporting enterprise workloads using cloud-native architecture",
      "Improved production reliability through observability, load testing, and service hardening",
      "Partnered with product and infrastructure teams to deliver high-impact platform features",
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
      "Built enterprise software and AI-related systems that moved experimental capabilities into production product surfaces.",
    achievements: [
      "Shipped enterprise-grade product features used by large customer deployments",
      "Contributed to AI-related engineering initiatives bridging research prototypes and product code",
      "Collaborated cross-functionally to deliver production features on aggressive release cycles",
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
    description:
      "Designed and deployed LLM-powered production systems serving real users — from architecture to launch.",
    achievements: [
      "Architected the full-stack AI product from concept to production launch",
      "Built LLM-powered features and agent workflows used by early customers",
      "Established CI/CD, cloud infrastructure, and engineering foundations for the startup",
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
      "Built AI automation workflows using LLM-based and ML systems to reduce repetitive operational tasks for clients.",
    achievements: [
      "Delivered AI-powered applications end-to-end for client production environments",
      "Developed ML integration pipelines connecting models to business APIs",
      "Shipped reliable full-stack software with measurable automation impact",
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
      "Production RAG systems with citations",
      "Autonomous agents with tool calling",
      "Conversational & voice AI pipelines",
      "LLM evaluation and observability",
    ],
  },
  {
    name: "Frontend",
    items: [
      "Next.js product UIs for AI workflows",
      "React dashboards for ops & analytics",
      "Type-safe TypeScript client apps",
    ],
  },
  {
    name: "Backend",
    items: [
      "Python & FastAPI AI services",
      "NestJS APIs for product backends",
      "Distributed systems & event pipelines",
    ],
  },
  {
    name: "Cloud",
    items: [
      "AWS & GCP production deployments",
      "Kubernetes for elastic AI workloads",
      "CI/CD with monitoring & rollback",
    ],
  },
];

export const engineeringProjects: EngineeringProject[] = [
  {
    id: "rag-assistant",
    title: "RAG Document Assistant",
    description:
      "Open engineering demo: ingest PDFs, retrieve with a vector store, and chat with citation-backed answers.",
    features: [
      "PDF ingestion",
      "Vector database",
      "Retrieval pipeline",
      "Chat interface",
    ],
    technologies: ["Python", "LangChain", "Pinecone", "Next.js"],
    githubUrl: "https://github.com/steincivil5-code",
  },
  {
    id: "agent-framework",
    title: "AI Agent Framework",
    description:
      "Lightweight agent runtime demonstrating tool calling, memory, and multi-step reasoning for automation tasks.",
    features: [
      "Tool calling",
      "Memory",
      "Multi-step reasoning",
      "Run tracing",
    ],
    technologies: ["Python", "OpenAI APIs", "Redis", "FastAPI"],
    githubUrl: "https://github.com/steincivil5-code",
  },
  {
    id: "voice-pipeline",
    title: "Voice AI Pipeline Sketch",
    description:
      "Architecture reference for speech → LLM → tool actions → TTS, with escalation hooks for human operators.",
    features: [
      "Speech-to-text",
      "Agent orchestration",
      "Tool actions",
      "Escalation hooks",
    ],
    technologies: ["WebRTC", "Python", "LLMs", "AWS"],
    githubUrl: "https://github.com/steincivil5-code",
  },
];

export const engineeringNotes: EngineeringNote[] = [
  {
    id: "production-rag",
    title: "Building Production RAG Systems",
    excerpt:
      "How to design ingestion, chunking, retrieval, and evaluation so RAG answers stay grounded in production.",
    tags: ["RAG", "LLM", "Evaluation"],
    readTime: "8 min",
  },
  {
    id: "ai-agents",
    title: "How AI Agents Work in Production",
    excerpt:
      "Planner loops, tool calling, memory, and the guardrails you need before agents touch real business systems.",
    tags: ["Agents", "Architecture"],
    readTime: "7 min",
  },
  {
    id: "scaling-llms",
    title: "Scaling LLM Applications",
    excerpt:
      "Latency budgets, caching, cost controls, and observability patterns for shipping LLM features at scale.",
    tags: ["LLM", "Cloud", "Ops"],
    readTime: "6 min",
  },
  {
    id: "voice-ai",
    title: "Designing Voice AI Platforms",
    excerpt:
      "Lessons from building conversational voice systems: turn-taking, integrations, and clinical-grade reliability.",
    tags: ["Voice AI", "Healthcare"],
    readTime: "9 min",
  },
];

export const featuredTechnologies = [
  "LLMs",
  "AI Agents",
  "RAG",
  "Next.js",
  "Python",
  "AWS",
  "Kubernetes",
  "TypeScript",
];

export const seoConfig: SEOConfig = {
  title: "Arthur Vega — Senior AI Product Engineer",
  description:
    "Senior AI Product Engineer specializing in LLM applications, AI agents, full-stack systems, and scalable cloud platforms. Building production AI products with measurable business impact.",
  keywords: [
    "AI Product Engineer",
    "LLM Applications",
    "AI Agents",
    "RAG Systems",
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
