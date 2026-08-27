import { portfolioData } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01] border-t border-mutedGold/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
              Selected Works
            </h2>
            <p className="text-xs uppercase tracking-widest text-cream/40 mt-2 font-mono">
              Case studies and implementations
            </p>
          </div>
          <div className="w-24 h-0.5 bg-mutedGold/30 md:hidden mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
