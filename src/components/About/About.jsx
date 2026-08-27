import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { identity } = portfolioData;

  return (
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
              <p className="text-sm font-semibold">Arya College of Engineering &amp; IT</p>
              <p className="text-xs text-cream/60">B.Tech in Artificial Intelligence &amp; Data Science</p>
            </div>
            <div className="glass-panel p-6 border-l-4 border-l-mutedGold">
              <h4 className="font-serif text-mutedGold text-lg font-bold mb-2">Leadership</h4>
              <p className="text-sm font-semibold">Hacker&apos;s Unity</p>
              <p className="text-xs text-cream/60">Technical Leadership &amp; Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
