import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_CONFIG, buildMailtoHref } from '../data/portfolioData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F7F5]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="font-serif-editorial text-xl font-medium tracking-tight text-[#171717] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
        >
          {BRAND_CONFIG.brandName}
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525252]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#171717] transition-colors py-1 whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildMailtoHref(BRAND_CONFIG.email, BRAND_CONFIG.defaultEmailSubject)}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#171717] rounded-lg hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0"
          >
            Discuss a Project
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#171717] hover:bg-[#EAEAE5] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Compact Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-white border-b border-[#E5E5E0] px-4 pt-2 pb-4 space-y-1 shadow-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#171717] hover:bg-[#F7F7F5] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={buildMailtoHref(BRAND_CONFIG.email, BRAND_CONFIG.defaultEmailSubject)}
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-[#171717] rounded-lg hover:bg-[#2E2E2E] transition-colors"
            >
              Discuss a Project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
