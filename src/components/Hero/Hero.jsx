import { motion } from 'framer-motion';
import { ArrowRight, Compass, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin } from '../../utils/icons';

export default function Hero() {
  const { identity } = portfolioData;

  return (
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
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              className="text-cream/40 hover:text-mutedGold transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-cream/40 hover:text-mutedGold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="text-cream/40 hover:text-mutedGold transition-colors"
              aria-label="Email"
            >
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
  );
}
