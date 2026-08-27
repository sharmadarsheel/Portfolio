import { motion } from 'framer-motion';
import { Cpu, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

function getCategoryIcon(category) {
  switch (category) {
    case 'AI & Data Science':
      return <Cpu className="w-5 h-5 text-mutedGold" />;
    case 'Frontend':
      return <Layers className="w-5 h-5 text-mutedGold" />;
    default:
      return <Terminal className="w-5 h-5 text-mutedGold" />;
  }
}

export default function Skills() {
  const { skills } = portfolioData;

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
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
  );
}
