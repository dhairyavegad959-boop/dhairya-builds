import React from 'react';
import { BRAND_CONFIG } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#F7F7F5] text-sm text-[#525252]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#E5E5E0]">
          {/* Brand & Short Description */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-serif-editorial text-lg font-medium text-[#171717] block mb-1.5"
            >
              {BRAND_CONFIG.brandName}
            </a>
            <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
              AI Visual Builder creating cinematic AI videos, marketing posters, YouTube thumbnails, and customizable Notion templates.
            </p>
          </div>

          {/* Required Footer Navigation & Instagram Link */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-[#171717]">
            <a href="#work" className="hover:underline underline-offset-4">
              Work
            </a>
            <a href="#services" className="hover:underline underline-offset-4">
              Services
            </a>
            <a href="#contact" className="hover:underline underline-offset-4">
              Contact
            </a>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#6B6B66]">
          <p>© {currentYear} {BRAND_CONFIG.brandName} · {BRAND_CONFIG.creatorName}. All rights reserved.</p>
          <p>{BRAND_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}
