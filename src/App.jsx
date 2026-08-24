import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Terminal, 
  Award, 
  Compass, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { identity, designTokens, skills, projects, experience, organizations } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI & Data Science":
        return <Cpu className="w-5 h-5 text-mutedGold" />;
      case "Frontend":
        return <Layers className="w-5 h-5 text-mutedGold" />;
      default:
        return <Terminal className="w-5 h-5 text-mutedGold" />;
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-cream relative selection:bg-mutedGold selection:text-charcoal">
      
      {/* Header Navigation — floats over the hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-xl md:text-2xl tracking-widest text-mutedGold uppercase">
              Darsheel Sharma
            </span>
          </motion.div>
          
          {/* Desktop Nav Links */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium"
          >
            <a href="#about" className="text-cream/80 hover:text-mutedGold transition-colors">About</a>
            <a href="#skills" className="text-cream/80 hover:text-mutedGold transition-colors">Skills</a>
            <a href="#projects" className="text-cream/80 hover:text-mutedGold transition-colors">Projects</a>
            <a href="#experience" className="text-cream/80 hover:text-mutedGold transition-colors">Experience</a>
            <a href="#contact" className="text-cream/80 hover:text-mutedGold transition-colors">Contact</a>
            <a href="#contact" className="px-4 py-1.5 border border-mutedGold/50 text-mutedGold rounded hover:bg-mutedGold/10 transition-all text-xs tracking-widest">Connect</a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cream hover:text-mutedGold transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal/95 border-b border-mutedGold/10 px-6 py-4 absolute w-full z-45"
          >
            <div className="flex flex-col space-y-4 text-center uppercase tracking-wider text-sm">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-mutedGold py-2">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-mutedGold py-2">Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-mutedGold py-2">Projects</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-mutedGold py-2">Experience</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-mutedGold py-2">Contact</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold w-full text-center block">Connect</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================
          HERO SECTION — Cinematic Full-Viewport
          ============================================ */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">

        {/* === RIGHT SIDE: Full-bleed Portrait Photo === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 w-full md:w-[55%] h-full z-0"
        >
          {/* The photo itself */}
          <img
            src={identity.avatar}
            alt={identity.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient fade from photo → dark on the LEFT edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
          {/* Subtle gold-tinted vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
        </motion.div>

        {/* === LEFT SIDE: Text Content === */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-12 flex items-center">
          <div className="max-w-xl">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <Compass className="w-3.5 h-3.5 text-mutedGold" />
              <span className="text-xs uppercase tracking-widest text-mutedGold">{identity.location}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight text-cream mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {identity.name.split(' ')[0]}<br />
              <span className="text-mutedGold">{identity.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base md:text-lg tracking-wide text-cream/70 mb-2 font-light"
            >
              {identity.title}
            </motion.p>

            {/* Sub-detail */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-sm text-cream/50 mb-8 leading-relaxed font-light"
            >
              {identity.subTitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-gold-fill flex items-center space-x-2">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-gold">Get In Touch</a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center space-x-4 mt-10"
            >
              <a href="https://github.com/sharmadarsheel" target="_blank" rel="noreferrer"
                className="text-cream/40 hover:text-mutedGold transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/darsheel-sharma-engineer/" target="_blank" rel="noreferrer"
                className="text-cream/40 hover:text-mutedGold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:realdarsheelsharam@gmail.com"
                className="text-cream/40 hover:text-mutedGold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* === Floating glass info card — bottom right corner === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 right-8 z-20 glass-panel px-5 py-3 border border-mutedGold/20 hidden md:block"
        >
          <span className="text-xs uppercase tracking-widest text-mutedGold block mb-0.5">Currently Based In</span>
          <span className="text-sm font-semibold text-cream">{identity.location}</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-cream/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-mutedGold/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/[0.01] border-t border-mutedGold/10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold border-b border-mutedGold/20 pb-4">
              About Me
            </h2>
            <p className="text-xs uppercase tracking-widest text-cream/40 mt-2 font-mono">Darsheel Sharma</p>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg md:text-xl font-light leading-relaxed text-cream/90">
              {identity.about}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-panel p-6 border-l-4 border-l-mutedGold">
                <h4 className="font-serif text-mutedGold text-lg font-bold mb-2">Education</h4>
                <p className="text-sm font-semibold">Arya College of Engineering & IT</p>
                <p className="text-xs text-cream/60">B.Tech in Artificial Intelligence & Data Science</p>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-mutedGold">
                <h4 className="font-serif text-mutedGold text-lg font-bold mb-2">Leadership</h4>
                <p className="text-sm font-semibold">Hacker's Unity</p>
                <p className="text-xs text-cream/60">Technical Leadership & Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 border-t border-mutedGold/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
              Capabilities
            </h2>
            <div className="w-24 h-0.5 bg-mutedGold/30 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, names], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 glass-panel-hover flex flex-col space-y-6"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-mutedGold/10">
                  {getCategoryIcon(category)}
                  <h3 className="font-serif text-xl font-bold tracking-wide text-cream">
                    {category}
                  </h3>
                </div>

                <ul className="space-y-3 flex-grow">
                  {names.map((name, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-cream/80">
                      <span className="w-1.5 h-1.5 bg-mutedGold rounded-full" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white/[0.01] border-t border-mutedGold/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
                Selected Works
              </h2>
              <p className="text-xs uppercase tracking-widest text-cream/40 mt-2 font-mono">Case studies and implementations</p>
            </div>
            <div className="w-24 h-0.5 bg-mutedGold/30 md:hidden mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel p-8 glass-panel-hover flex flex-col justify-between h-full border border-mutedGold/20 relative overflow-hidden group"
              >
                {/* Visual arch element overlay inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-mutedGold/5 jaipur-arch-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-mutedGold font-mono block">
                    {project.context}
                  </span>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-cream/50 italic">
                    Role: {project.role}
                  </p>
                  
                  <p className="text-sm text-cream/70 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-8 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-0.5 text-xs rounded bg-charcoal border border-mutedGold/10 text-mutedGold font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="border-t border-mutedGold/10 pt-4 flex justify-between items-center text-sm font-medium uppercase tracking-wider">
                    <span className="text-mutedGold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1 cursor-pointer">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <ExternalLink className="w-4 h-4 text-cream/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Evidence Section */}
      <section id="experience" className="py-24 px-6 border-t border-mutedGold/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
              Technical Evidence
            </h2>
            <p className="text-xs uppercase tracking-widest text-cream/40 mt-2 font-mono">Hackathons & Leadership achievements</p>
            <div className="w-24 h-0.5 bg-mutedGold/30 mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 border-l-4 border-l-mutedGold flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-widest bg-mutedGold/10 border border-mutedGold/20 text-mutedGold mb-2 inline-block">
                    {item.type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/60">
                    {item.team ? `${item.team}` : ''} {item.location ? `| ${item.location}` : ''} {item.platform ? `| ${item.platform}` : ''}
                  </p>
                </div>
                {item.status || item.details ? (
                  <div className="text-xs font-mono uppercase tracking-widest text-mutedGold md:text-right">
                    {item.status ? `Status: ${item.status}` : item.details}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white/[0.01] border-t border-mutedGold/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
                  Get in Touch
                </h2>
                <p className="text-base text-cream/70 mt-4 leading-relaxed font-light">
                  Let's collaborate on intelligent AI systems, data analytics projects, or premium web architectures. Feel free to reach out.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-mutedGold" />
                  <span className="text-sm text-cream/80">{identity.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-mutedGold" />
                  <a href="mailto:realdarsheelsharma@gmail.com" className="text-sm text-cream/80 hover:text-mutedGold transition-colors">
                    realdarsheelsharam@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/sharmadarsheel" target="_blank" rel="noreferrer" className="p-3 glass-panel hover:text-mutedGold transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/darsheel-sharma-engineer/" target="_blank" rel="noreferrer" className="p-3 glass-panel hover:text-mutedGold transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:realdarsheelsharam@gmail.com" className="p-3 glass-panel hover:text-mutedGold transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 glass-panel p-8 border border-mutedGold/10 relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-mutedGold/5 jaipur-arch-reverse pointer-events-none" />
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors resize-none"
                    placeholder="How can we collaborate?"
                  />
                </div>

                <button type="submit" className="btn-gold-fill w-full flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-xs text-cream/40 border-t border-mutedGold/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Darsheel Sharma. All rights reserved.</p>
          <p className="uppercase tracking-widest font-mono">Jaipur Royal Aesthetic</p>
        </div>
      </footer>
    </div>
  );
}
