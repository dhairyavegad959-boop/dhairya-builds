import React from 'react';
import { ArrowUpRight, Film, Image as ImageIcon, LayoutTemplate } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PROJECT_CATEGORIES,
  ProjectCategory,
  PortfolioProject,
  filterProjectsByCategory,
} from '../data/portfolioData';

interface SelectedWorkProps {
  selectedCategory: 'All' | ProjectCategory;
  onSelectCategory: (category: 'All' | ProjectCategory) => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export function SelectedWork({
  selectedCategory,
  onSelectCategory,
  onSelectProject,
}: SelectedWorkProps) {
  const filteredProjects = filterProjectsByCategory(PORTFOLIO_PROJECTS, selectedCategory);

  return (
    <section id="work" className="py-16 md:py-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#6B6B66] mb-2">Curated Archive</p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#171717] tracking-tight mb-2">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-[#525252] max-w-md">
              A collection of visual experiments, creative projects, and digital systems.
            </p>
          </div>

          {/* Functional Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap sm:flex-nowrap items-center gap-1 p-1.5 bg-[#EAEAE5] rounded-xl self-start shrink-0"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => onSelectCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'text-[#525252] hover:text-[#171717] hover:bg-white/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column / Responsive Editorial Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-[#E5E5E0] rounded-2xl overflow-hidden flex flex-col justify-between transition-colors hover:border-[#C7C7C0]"
            >
              <div>
                {/* Media Container */}
                <div className="relative bg-[#F0F0EC] border-b border-[#E5E5E0] aspect-[16/10] overflow-hidden">
                  {project.mediaType === 'video' && project.mediaUrl ? (
                    <video
                      src={project.mediaUrl}
                      poster={project.posterUrl}
                      muted
                      playsInline
                      loop
                      onMouseEnter={(e) => {
                        e.currentTarget.play().catch(() => {});
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                      }}
                      className={`w-full h-full ${
                        project.aspectRatio === '9:16' ? 'object-contain bg-[#141413]' : 'object-cover'
                      }`}
                    />
                  ) : project.mediaType === 'image' && project.mediaUrl ? (
                    <img
                      src={project.mediaUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* Clearly Identified Replaceable Placeholder Slot */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F7F7F5]">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E5E0] flex items-center justify-center text-[#171717] mb-3">
                        {project.category === 'YouTube Thumbnails' ? (
                          <ImageIcon className="w-5 h-5" />
                        ) : project.category === 'Notion Templates' ? (
                          <LayoutTemplate className="w-5 h-5" />
                        ) : (
                          <Film className="w-5 h-5" />
                        )}
                      </div>
                      <p className="text-xs font-medium text-[#171717] mb-1">
                        Replaceable Portfolio Showcase Slot
                      </p>
                      <p className="text-xs text-[#6B6B66] max-w-xs">
                        Reserved for your authentic {project.category.toLowerCase()} export. No fictional client artwork is shown.
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Quiet Inline Unboxed Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B6B66] mb-2">
                    <span>{project.category}</span>
                    {project.date && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{project.date}</span>
                      </>
                    )}
                    <span aria-hidden="true">·</span>
                    <span>{project.clientOrContext}</span>
                  </div>

                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal text-[#171717] leading-snug mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#525252] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex items-center justify-between border-t border-[#F5F5F2]">
                <span className="text-xs text-[#6B6B66]">
                  {project.isPlaceholder ? 'Template / Placeholder Spec' : 'Authentic Portfolio Asset'}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#171717] rounded-lg hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
