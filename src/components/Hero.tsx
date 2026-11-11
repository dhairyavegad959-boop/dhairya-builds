import React from 'react';
import { ArrowDownRight, Mail, Play } from 'lucide-react';
import { BRAND_CONFIG, PORTFOLIO_PROJECTS, PortfolioProject, buildMailtoHref } from '../data/portfolioData';

interface HeroProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export function Hero({ onSelectProject }: HeroProps) {
  const featuredVideoProject = PORTFOLIO_PROJECTS[0];
  const featuredPosterProject = PORTFOLIO_PROJECTS[2];

  return (
    <section id="top" className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-wider text-[#525252] mb-4">
                {BRAND_CONFIG.eyebrow}
              </p>

              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-[#171717] leading-[1.1] tracking-tight mb-6 max-w-2xl [text-wrap:balance]">
                {BRAND_CONFIG.heroHeading}
              </h1>

              <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl mb-8">
                {BRAND_CONFIG.heroDescription}
              </p>

              {/* Primary and Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#171717] rounded-xl hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
                >
                  <span>Explore My Work</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href={buildMailtoHref(BRAND_CONFIG.email, BRAND_CONFIG.defaultEmailSubject)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#171717] bg-white border border-[#D4D4CE] rounded-xl hover:bg-[#F0F0EC] transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
                >
                  <Mail className="w-4 h-4 text-[#525252]" />
                  <span>Discuss a Project</span>
                </a>
              </div>
            </div>

            {/* Clean Unboxed Core Capabilities Summary */}
            <div className="pt-6 border-t border-[#E5E5E0]">
              <p className="text-xs text-[#6B6B66] mb-2">Core Focus Areas</p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#171717]">
                <span>AI Cinematic Videos</span>
                <span aria-hidden="true" className="text-[#A3A39E]">·</span>
                <span>AI Marketing Posters</span>
                <span aria-hidden="true" className="text-[#A3A39E]">·</span>
                <span>YouTube Thumbnails</span>
                <span aria-hidden="true" className="text-[#A3A39E]">·</span>
                <span>Customizable Notion Templates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Curated Real Work Showcase Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white border border-[#E5E5E0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-xs text-[#6B6B66] mb-3">
                  <span>Featured Production Reel</span>
                  <span>Dwarka, Gujarat</span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-[#171717] aspect-video mb-4 border border-[#E5E5E0]">
                  <video
                    src={featuredVideoProject.mediaUrl}
                    poster={featuredVideoProject.posterUrl}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredVideoProject)}
                    aria-label={`Inspect ${featuredVideoProject.title}`}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end justify-between p-4 text-left group cursor-pointer"
                  >
                    <div>
                      <p className="text-[11px] text-white/80">
                        {featuredVideoProject.category} · {featuredVideoProject.date}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {featuredVideoProject.title}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#171717] group-hover:scale-105 transition-transform shrink-0">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Secondary Real Work Preview Row */}
              <div className="pt-3 border-t border-[#F0F0EC] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={featuredPosterProject.mediaUrl}
                    alt={featuredPosterProject.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover border border-[#E5E5E0] shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-[#6B6B66] truncate">
                      {featuredPosterProject.category}
                    </p>
                    <p className="text-sm font-medium text-[#171717] truncate">
                      {featuredPosterProject.title}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProject(featuredPosterProject)}
                  className="px-3 py-1.5 text-xs font-medium text-[#171717] bg-[#F7F7F5] hover:bg-[#EAEAE5] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
