

import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Loader2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin } from '../../utils/icons';

export default function Contact() {
  const { identity } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${identity.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Contact',
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or email directly.');
    }
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
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                    placeholder="Your Name"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                    placeholder="Your Email"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors"
                  placeholder="Project Inquiry"
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-mutedGold mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-charcoal border border-mutedGold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-mutedGold text-sm transition-colors resize-none"
                  placeholder="How can we collaborate?"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {statusMessage && (
                <div className={`p-4 rounded text-sm ${status === 'success' ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-red-900/30 text-red-400 border border-red-800/50'}`}>
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn-gold-fill w-full flex items-center justify-center space-x-2 disabled:opacity-50"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
