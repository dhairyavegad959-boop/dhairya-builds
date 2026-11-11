import React, { useEffect } from 'react';
import { X, Mail, Film, Image as ImageIcon, LayoutTemplate } from 'lucide-react';
import { BRAND_CONFIG, PortfolioProject, buildMailtoHref } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const inquirySubject = `Inquiry about ${project.title} — Dhairya Builds`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F7F5] border border-[#E5E5E0] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="sticky top-0 z-10 bg-[#F7F7F5]/95 backdrop-blur-xs px-5 py-4 border-b border-[#E5E5E0] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#6B6B66] truncate">
            <span>{project.category}</span>
            {project.date && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.date}</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#E5E5E0] text-[#171717] hover:bg-[#EAEAE5] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-6">
          {/* Header Metadata & Title */}
          <div>
            <p className="text-xs text-[#6B6B66] mb-1.5">{project.clientOrContext}</p>
            <h2
              id="modal-project-title"
              className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#171717] leading-snug"
            >
              {project.title}
            </h2>
          </div>

          {/* Prominent Media Card */}
          <div className="bg-white border border-[#E5E5E0] rounded-xl overflow-hidden">
            {project.mediaType === 'video' && project.mediaUrl ? (
              <video
                src={project.mediaUrl}
                poster={project.posterUrl}
                controls
                playsInline
                className="w-full max-h-[480px] object-contain bg-[#141413]"
              />
            ) : project.mediaType === 'image' && project.mediaUrl ? (
              <img
                src={project.mediaUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[540px] object-contain bg-[#F0F0EC]"
              />
            ) : (
              <div className="p-10 text-center bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] flex items-center justify-center text-[#171717] mx-auto mb-3">
                  {project.category === 'YouTube Thumbnails' ? (
                    <ImageIcon className="w-5 h-5" />
                  ) : project.category === 'Notion Templates' ? (
                    <LayoutTemplate className="w-5 h-5" />
                  ) : (
                    <Film className="w-5 h-5" />
                  )}
                </div>
                <p className="text-sm font-medium text-[#171717] mb-1">
                  Replaceable Portfolio Showcase Slot
                </p>
                <p className="text-xs text-[#6B6B66] max-w-md mx-auto">
                  This placeholder card preserves a clean structure for your own {project.category.toLowerCase()} image file without inventing fictional client results.
                </p>
              </div>
            )}
          </div>

          {/* Structured Information Cards */}
          <div className="bg-white border border-[#E5E5E0] rounded-xl p-5 sm:p-6 space-y-5">
            <div>
              <h3 className="text-xs font-semibold text-[#171717] mb-2">Project Overview</h3>
              <p className="text-sm text-[#525252] leading-relaxed">{project.fullDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#F0F0EC]">
              <div>
                <h4 className="text-xs font-semibold text-[#171717] mb-2">Deliverables</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#525252]">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-[#171717] font-medium">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-[#171717] mb-2">Creative Execution Focus</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#525252]">
                  {project.designFocus.map((focus) => (
                    <li key={focus} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-[#171717] font-medium">·</span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Primary Action Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <a
              href={buildMailtoHref(BRAND_CONFIG.email, inquirySubject)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-white bg-[#171717] rounded-xl hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Discuss a Similar Project</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-5 py-3.5 text-xs sm:text-sm font-medium text-[#171717] bg-white border border-[#D4D4CE] rounded-xl hover:bg-[#EAEAE5] transition-colors cursor-pointer"
            >
              Back to Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
