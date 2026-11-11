import React from 'react';
import { BRAND_CONFIG } from '../data/portfolioData';

export function AboutSection() {
  const focusPillars = [
    {
      title: 'AI-Assisted Visual Creation',
      description:
        'Combining generative visual pipelines with intentional art direction to produce commercial-grade videos and promotional graphics.',
    },
    {
      title: 'Creative Storytelling',
      description:
        'Structuring hospitality reels, product showcases, and campaign posters around a clear narrative that holds attention.',
    },
    {
      title: 'Digital Design & Visual Hierarchy',
      description:
        'Crafting YouTube thumbnails and bilingual marketing creatives with strong contrast, balanced composition, and readable typography.',
    },
    {
      title: 'Custom Notion Systems',
      description:
        'Designing practical exam trackers, student planners, and custom Notion workspaces that simplify daily organization.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Portrait & Creator Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E5E5E0] rounded-2xl p-5 sm:p-6">
              <div className="aspect-square rounded-xl overflow-hidden bg-[#F0F0EC] mb-5 border border-[#E5E5E0]">
                <img
                  src={BRAND_CONFIG.portraitUrl}
                  alt={BRAND_CONFIG.creatorName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#6B6B66] mb-1">
                <span>{BRAND_CONFIG.brandName}</span>
                <span>{BRAND_CONFIG.location}</span>
              </div>

              <h3 className="font-serif-editorial text-2xl font-normal text-[#171717] mb-2">
                {BRAND_CONFIG.creatorName}
              </h3>

              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                Student & Independent AI Visual Builder creating visual content and structured digital systems.
              </p>
            </div>
          </div>

          {/* Editorial Bio & Pillars */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#6B6B66] mb-2">Background & Approach</p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#171717] tracking-tight mb-5">
              About Dhairya
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#525252] leading-relaxed mb-10">
              <p>
                I’m Dhairya Vegad, a student and independent AI visual creator based in Gujarat, India. Through{' '}
                <strong className="font-medium text-[#171717]">Dhairya Builds</strong>, I help local businesses, hospitality brands, creators, and fellow students communicate their ideas clearly through thoughtful visual execution and organized digital workflows.
              </p>
              <p>
                My work focuses on practical problem-solving: turning property photos and product concepts into cinematic AI promotional videos, designing bilingual marketing posters that resonate with local audiences, crafting high-clarity YouTube thumbnails, and building customizable Notion templates that keep daily study and creative work structured.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="bg-white border border-[#E5E5E0] rounded-xl p-5"
                >
                  <p className="text-xs text-[#6B6B66] mb-1.5">0{index + 1}</p>
                  <h3 className="text-base font-semibold text-[#171717] mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
