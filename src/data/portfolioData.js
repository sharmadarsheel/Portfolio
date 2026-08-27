export const portfolioData = {
  identity: {
    name: "Darsheel Sharma",
    title: "AI & MERN Developer",
    subTitle: "AI & Data Science engineering student at Arya College of Engineering & IT",
    location: "Jaipur, India",
    about: "A passionate AI & Data Science engineering student who combines intelligent systems, machine learning, and clean frontend architectures to build high-performance digital experiences.",
    avatar: "/images/portrait.jpg",
    email: "realdarsheelsharam@gmail.com",
    github: "https://github.com/sharmadarsheel",
    linkedin: "https://www.linkedin.com/in/darsheel-sharma-engineer/",
  },
  designTokens: {
    colors: {
      sandstone: "#E6D5C3", // Background / Warm tones
      charcoal: "#1A1614",  // Base dark contrast
      cream: "#F5F2EB",     // Soft surface text/contrast
      mutedGold: "#D4AF37"  // Accent / Active states
    },
    glassmorphism: {
      backgroundColor: "rgba(255, 255, 255, 0.04)",
      backdropBlur: "blur(12px)",
      border: "1px solid rgba(212, 175, 55, 0.2)"
    }
  },
  skills: [
    { name: "Python", category: "AI & Data Science" },
    { name: "Machine Learning", category: "AI & Data Science" },
    { name: "Geospatial Data Processing", category: "AI & Data Science" },
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Three.js / React Three Fiber", category: "Frontend" },
    { name: "Gemini API", category: "Integrations" }
  ],
  projects: [
    {
      id: "skysight",
      title: "SkySight",
      context: "Geospatial Intelligence Hackathon 2026 (Team SkySight)",
      role: "Leadership, ideation, and implementation",
      description: "AI and drone imagery project for rural infrastructure identification.",
      techStack: ["Python", "Machine Learning models", "Geospatial data processing", "API integration"]
    },
    {
      id: "canteen-ai",
      title: "Canteen AI",
      context: "Web-based chatbot application project (Rebranded from Baithak AI)",
      role: "Leadership, ideation, and rebranding",
      description: "Interactive conversational UI designed for practical environment utility.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "Gemini API"]
    },
    {
      id: "machine-minds",
      title: "MachineMinds",
      context: "AI machine health checker for big industries",
      role: "Leadership, ideation, and implementation",
      description: "Helps to utilize the machines in industry to their real effectiveness.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "Flask", "Python", "ML Model"]
    }
  ],
  experience: [
    {
      title: "LNMHacks 8.0",
      type: "Hackathon",
      platform: "DoraHacks",
      status: "Submitted",
      location: "LNMIIT"
    },
    {
      title: "Solution Challenge 2026",
      type: "Hackathon",
      team: "Team OMNIVERSE",
      details: "Hack2skill AI prototypes"
    },
    {
      title: "Projectathon 2.0",
      type: "Hackathon",
      team: "Team MachineMinds",
      location: "Arya College of Engineering & IT",
      status: "Top 15"
    },
    {
      title: "NamasteDev Hackathon",
      type: "Hackathon",
      team: "Team MachineMinds",
      location: "Arya College of Engineering & IT",
      status : "Top 30%"
    }
  ],
  organizations: [
    {
      name: "Hacker's Unity",
      role: "Technical Leadership"
    }
  ]
};
