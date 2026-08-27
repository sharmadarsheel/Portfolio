import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin } from '../../utils/icons';

export default function Contact() {
  const { identity } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Contact form submission — backend integration to be added here
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01] border-t border-mutedGold/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Left: Contact Info */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-mutedGold">
                Get in Touch
              </h2>
              <p className="text-base text-cream/70 mt-4 leading-relaxed font-light">
                Let&apos;s collaborate on intelligent AI systems, data analytics projects, or premium web architectures. Feel free to reach out.
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
                <a
                  href={`mailto:${identity.email}`}
                  className="text-sm text-cream/80 hover:text-mutedGold transition-colors"
                >
                  {identity.email}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex space-x-4 pt-4">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-panel hover:text-mutedGold transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-panel hover:text-mutedGold transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${identity.email}`}
                className="p-3 glass-panel hover:text-mutedGold transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-7 glass-panel p-8 border border-mutedGold/10 relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-mutedGold/5 jaipur-arch-reverse pointer-events-none" />

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>

              <button
                type="submit"
                className="btn-gold-fill w-full flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
