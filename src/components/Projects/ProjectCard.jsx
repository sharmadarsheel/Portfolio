import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
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
  );
}
