import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (initialScope?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Evidence', href: '#evidence' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-neutral-200 transition-colors whitespace-nowrap shrink-0"
        >
          Vanguard Studio
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-neutral-600 underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenConsultation()}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Schedule Briefing
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-6 py-5">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors"
              >
                Schedule Briefing
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
