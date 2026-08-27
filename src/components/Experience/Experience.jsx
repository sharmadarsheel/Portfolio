import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 border-t border-mutedGold/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
            Technical Evidence
          </h2>
          <p className="text-xs uppercase tracking-widest text-cream/40 mt-2 font-mono">
            Hackathons &amp; Leadership achievements
          </p>
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
                  {item.team ? `${item.team}` : ''}
                  {item.location ? ` | ${item.location}` : ''}
                  {item.platform ? ` | ${item.platform}` : ''}
                </p>
              </div>
              {(item.status || item.details) && (
                <div className="text-xs font-mono uppercase tracking-widest text-mutedGold md:text-right">
                  {item.status ? `Status: ${item.status}` : item.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
