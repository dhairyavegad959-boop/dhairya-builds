import React from 'react';
import { LayoutTemplate, Mail, SlidersHorizontal } from 'lucide-react';
import { BRAND_CONFIG, NOTION_TEMPLATES, buildMailtoHref } from '../data/portfolioData';

export function NotionTemplatesSection() {
  return (
    <section id="notion-templates" className="py-16 md:py-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#6B6B66] mb-2">
              Digital Systems · Ready-Made & Custom Built
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#171717] tracking-tight mb-3">
              Customizable Notion Templates
            </h2>
            <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
              Structured Notion workspaces designed to bring clarity to exam preparation, student schedules, and daily creative workflows. Start immediately with a ready-made template or request a custom workspace tailored to your exact requirements.
            </p>
          </div>

          {/* Clear Distinction Between Ready-Made & Custom */}
          <div className="lg:col-span-5 bg-white border border-[#E5E5E0] rounded-2xl p-5">
            <p className="text-xs font-semibold text-[#171717] mb-3">
              Two Ways to Get Your System
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#525252]">
              <div className="flex items-start gap-2.5">
                <LayoutTemplate className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-medium text-[#171717]">Ready-Made Templates:</strong>{' '}
                  Pre-built trackers and study dashboards you can duplicate and adapt right away.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <SlidersHorizontal className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-medium text-[#171717]">Customized Workspaces:</strong>{' '}
                  Bespoke Notion setups built or modified around your personal study plan or business workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {NOTION_TEMPLATES.map((template) => (
            <div
              key={template.id}
              className="bg-white border border-[#E5E5E0] rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-[#6B6B66] pb-3.5 mb-4 border-b border-[#F0F0EC]">
                  <span className="font-medium text-[#171717]">{template.type}</span>
                  <span>{template.categoryTag}</span>
                </div>

                {/* Structural Schematic Preview Header */}
                <div className="mb-5 p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0]">
                  <div className="flex items-center justify-between text-[11px] text-[#6B6B66] mb-2">
                    <span>Notion Workspace Structure</span>
                    <span>{template.isPlaceholderPreview ? 'Replaceable Screenshot Slot' : 'Custom Architecture'}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {template.features.map((feat, idx) => (
                      <div
                        key={feat}
                        className="bg-white border border-[#E5E5E0] rounded-lg p-2.5 text-left"
                      >
                        <p className="text-[10px] text-[#6B6B66] mb-0.5">Module 0{idx + 1}</p>
                        <p className="text-[11px] font-medium text-[#171717] line-clamp-2 leading-tight">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal text-[#171717] mb-2.5">
                  {template.title}
                </h3>

                <p className="text-sm text-[#525252] leading-relaxed mb-5">
                  {template.description}
                </p>

                <ul className="space-y-1.5 text-xs sm:text-sm text-[#525252] mb-6">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-[#171717] font-medium">·</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F0F0EC] flex items-center justify-between gap-4">
                <span className="text-xs text-[#6B6B66]">
                  {template.type === 'Ready-Made Template'
                    ? 'Available as Ready-Made or Custom'
                    : 'Built to Your Requirements'}
                </span>
                <a
                  href={buildMailtoHref(BRAND_CONFIG.email, template.emailSubject)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-[#171717] rounded-lg hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{template.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
