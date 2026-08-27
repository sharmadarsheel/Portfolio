import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed navigation bar — floats over the hero */}
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
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-cream/80 hover:text-mutedGold transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 border border-mutedGold/50 text-mutedGold rounded hover:bg-mutedGold/10 transition-all text-xs tracking-widest"
            >
              Connect
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cream hover:text-mutedGold transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
            className="md:hidden bg-charcoal/95 border-b border-mutedGold/10 px-6 py-4 fixed w-full z-45 top-[72px]"
          >
            <div className="flex flex-col space-y-4 text-center uppercase tracking-wider text-sm">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-mutedGold py-2"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold w-full text-center block"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
