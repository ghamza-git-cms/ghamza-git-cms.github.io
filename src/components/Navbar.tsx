import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/90 backdrop-blur-sm border-b border-[#FDEBD0] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold text-[#E8470A] tracking-tight">
          {t.nav.brand}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#2C1810] hover:text-[#E8470A] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/96170300022"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8470A] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#c73a08] transition-colors"
          >
            {t.nav.order}
          </a>
          <button
            onClick={toggleLanguage}
            className="text-[#7A4030] hover:text-[#E8470A] font-medium text-sm transition-colors border border-[#FDEBD0] px-3 py-1.5 rounded-full"
          >
            {t.nav.langToggle}
          </button>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-[#7A4030] text-sm border border-[#FDEBD0] px-3 py-2 rounded-full min-h-[44px] flex items-center"
          >
            {t.nav.langToggle}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-[#2C1810] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#FFF8F0] border-t border-[#FDEBD0]"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#2C1810] hover:text-[#E8470A] font-medium text-lg py-3 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/96170300022"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8470A] text-white px-5 py-3 rounded-full font-semibold text-center hover:bg-[#c73a08] transition-colors mt-2 min-h-[44px] flex items-center justify-center"
              >
                {t.nav.order}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
