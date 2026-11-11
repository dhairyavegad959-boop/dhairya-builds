import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BRAND_CONFIG, buildMailtoHref } from '../data/portfolioData';

export function ContactSection() {
  const emailHref = buildMailtoHref(BRAND_CONFIG.email, BRAND_CONFIG.defaultEmailSubject);

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5E5E0] rounded-2xl p-8 sm:p-12 lg:p-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-medium text-[#6B6B66] mb-3">
            Direct Collaboration · {BRAND_CONFIG.location}
          </p>

          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171717] tracking-tight mb-4 [text-wrap:balance]">
            Have a project in mind?
          </h2>

          <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl mx-auto mb-8">
            Tell me what you're building. Let's discuss how I can help.
          </p>

          {/* Two Primary Functional Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-medium text-white bg-[#171717] rounded-xl hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact via Email</span>
            </a>

            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-medium text-[#171717] bg-[#F7F7F5] border border-[#D4D4CE] rounded-xl hover:bg-[#EAEAE5] transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
            >
              <span>View Instagram Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Linked Direct Reference Details (Never unlinked decorative text) */}
          <div className="mt-8 pt-6 border-t border-[#F0F0EC] flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-xs text-[#6B6B66]">
            <a
              href={emailHref}
              className="hover:text-[#171717] underline underline-offset-4 transition-colors"
            >
              {BRAND_CONFIG.email}
            </a>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] underline underline-offset-4 transition-colors"
            >
              Instagram ({BRAND_CONFIG.instagramHandle})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
